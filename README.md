# JC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jorge Carrera

## Ejemplo

```
import { ProductCard,ProductImage,ProductTitle,ProductButtons } from 'jc-product-card'
```

```
 <ProductCard
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ isMaxCountReached, increaseBy, count, reset, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
