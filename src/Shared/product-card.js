function ProductCard() {
  return (
    <div className="flex flex-col rounded-lg bg-white w-52 shadow-lg">
      <img
        src="/Assets/0df6a568173a4c444c1444b9f5e66e81.jpg"
        alt=""
        className="h-52 w-52 rounded-lg"
      />
      <div className="flex flex-col gap-3.5 w-[90%] mx-auto my-3">
        <div className="flex justify-between mx-2">
          <span className="font-bold text-sm">name</span>
          <span className="font-bold text-sm text-red-500">price</span>
        </div>

        <div className="flex justify-end">
          <button className="font-bold rounded-3xl p-1 px-3 bg-transparent border-[3px] transition-all duration-300 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
