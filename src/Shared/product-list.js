import ProductCard from "./product-card";

function ProductList() {
  return (
    <div className="flex gap-10 flex-wrap">
      {[...Array(10)].map((_, index) => (
          <div key={index}>
            <ProductCard />
          </div>
      ))}
    </div>
  );
}
export default ProductList;
