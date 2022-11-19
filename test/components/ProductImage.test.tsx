import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

const IMG_URL =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rtve.es%2Fplay%2Faudios%2Fespacio-en-blanco%2Fovnis-primeras-revelaciones-del-pentagono-13-06-21%2F5940378%2F&psig=AOvVaw0p5oysTmPrZu8TAJEbq0B6&ust=1668962740310000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjXo-zYuvsCFQAAAAAdAAAAABAD';

describe('ProductImage', () => {
  test('Product Image must be render with custom image', () => {
    const component = renderer.create(<ProductImage img={IMG_URL} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('ProductCard must show product image', () => {
    const component = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
