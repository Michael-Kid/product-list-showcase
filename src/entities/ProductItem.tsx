
import React, {memo, useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, increaseProductAmount, removeProductFromCart } from '../app/store/actionCreators';
import { PRODUCT_ADDED_TO_LIST, PRODUCT_REMOVED } from '../const';
import { IProduct } from './product/interface';
import { notify } from '../utils';
import ProductCard from '../shared/ui/ProductCard';

interface Props {
    product: IProduct;
}

function ProductItem({product}: Props) {
    const [item, setItem] = useState<IProduct>(product);
    const dispatch = useDispatch();

    const addToList = useCallback(() => {
        const newProduct = {...item, count: 1};
        dispatch(addProductToCart(newProduct));
        setItem((prevState) => {
            return {...prevState, count: 1}
        });
        notify(PRODUCT_ADDED_TO_LIST, item.name);
    }, [item, dispatch])

    const increaseAmount = useCallback(() => {
        dispatch(increaseProductAmount(item.id, item.count));
        setItem((prevState) => {
            return {...prevState, count: prevState.count + 1}
        });
        notify(PRODUCT_ADDED_TO_LIST, item.name);
    }, [item, dispatch])

    const removeFromCart = useCallback(() => {
        dispatch(removeProductFromCart(item.id, item.count));
        setItem((prevState) => {
            return {...prevState, count: prevState.count - 1}
        });
        notify(PRODUCT_REMOVED, item.name);
    }, [item, dispatch])

    return (
      <ProductCard product={item} addClick={addToList} removeClick={removeFromCart} increaseClick={increaseAmount}/>
    )
}

export default memo(ProductItem);