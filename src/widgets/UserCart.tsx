import React, {memo, useMemo} from 'react'
import Card from 'react-bootstrap/Card';
import { shallowEqual, useSelector } from 'react-redux';
import { StoreState } from '../app/store/interface';
import { IProduct } from '../entities/product/interface';

const getTotal = (products: IProduct[]) => {
    return products.reduce((sum, product) => sum += (Number(product.price) * product.count), 0).toFixed(2);
}

const UserCart = () => {
    const products: IProduct[] = useSelector(
        (state: StoreState) => state.listProducts,
        shallowEqual
    );

    const total = useMemo(() => getTotal(products), [products]);

    return (
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>Список покупок</Card.Title>
              <Card.Subtitle>Сумма: {total}</Card.Subtitle>
          </Card.Body>
      </Card>
    )
}

export default memo(UserCart)