import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
    children: React.ReactNode[] | React.ReactNode
}

const List = ({children}: Props) => {
  return (
    <Container className='d-flex justify-content-md-center flex-wrap'>
      {children}
    </Container>
  )
}

export default List