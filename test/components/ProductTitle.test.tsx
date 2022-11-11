import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Product Tile must be render with custom title', () => {
    const component = renderer.create(<ProductTitle title="Cutstom Product" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('ProductTitle must show', () => {
    const component = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
