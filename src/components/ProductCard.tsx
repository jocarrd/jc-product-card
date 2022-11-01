import React from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const PoductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
