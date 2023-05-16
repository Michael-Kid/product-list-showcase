import React, { memo } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { IProduct } from '../../entities/product/interface'

interface Props {
    product: IProduct;
    addClick: () => void;
    removeClick: () => void;
    increaseClick: () => void;
}

const ProductCard = ({product, addClick, removeClick, increaseClick}: Props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={product.image} style={{ height: '18rem' }}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>{product.price}</Card.Subtitle>
        <Card.Text>{product.description}</Card.Text>
        {product.count > 0 ? (
          <Row>
            <Col>
              <Button variant='primary' onClick={increaseClick}>
                +
              </Button>
            </Col>
            <Col>
              <h3>{product.count}</h3>
            </Col>
            <Col>
              <Button variant='primary' onClick={removeClick}>
                -
              </Button>
            </Col>
          </Row>
        ) : (
          <Button variant='primary' onClick={addClick}>
            Купить товар
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default memo(ProductCard)