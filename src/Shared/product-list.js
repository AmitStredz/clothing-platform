import ProductCard from "./product-card";
import FilterProduct from "./filter-product"
function ProductList() {
  return (
    <div className="w-[100%] flex">
    <div className="w-[20%]">
        <FilterProduct/>
    </div>
    <div className="flex gap-10 flex-wrap w-[80%]">
      {[...Array(10)].map((_, index) => (
          <div key={index}>
            <ProductCard />
          </div>
      ))}
    </div>
    </div>
  );
}
export default ProductList;
