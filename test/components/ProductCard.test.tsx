import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('ProductCard must be render ', () => {
    const component = renderer.create(
      <ProductCard product={product2}>{() => <h1>ProductCard</h1>}</ProductCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
