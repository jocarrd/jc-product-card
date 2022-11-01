import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { PoductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export{ ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";


export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image : ProductImage,
    Buttons: ProductButtons
})

