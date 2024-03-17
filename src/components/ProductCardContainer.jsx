import ProductCard from "./ProductCard";


export default function ProductCardContainer({ products,setitemsInCart }) {
  const productsJsx = products.map((product) => (
    <ProductCard key={product.id} product={product}
    setitemsInCart={setitemsInCart} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
