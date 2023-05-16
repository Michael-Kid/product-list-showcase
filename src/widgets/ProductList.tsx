import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { StoreState } from '../app/store/interface';
import { IProduct } from '../entities/product/interface';
import ProductItem from '../entities/ProductItem';
import List from '../shared/ui/List';

const ProductList = () => {
  const products: IProduct[] = useSelector(
    (state: StoreState) => state.products,
    shallowEqual
);

  return (
    <List>
      {products.map((product, index) => (
          <ProductItem
            key={index + product.id}
            product={product}
          />
        ))}
    </List>
  )
}

export default memo(ProductList)