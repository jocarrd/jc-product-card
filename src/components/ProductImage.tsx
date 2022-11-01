import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import NoImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = NoImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
      style={style}
    ></img>
  );
};
