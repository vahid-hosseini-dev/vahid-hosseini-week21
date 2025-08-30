function Card({ data }) {
  const { name, price, quantity } = data;

  return (
    <div class="flex flex-col justify-center items-center w-[350px] bg-white border border-gray-200 rounded-3xl shadow-sm">
      <img
        class="p-5 rounded-t-lg size-[200px]"
        src="/svg/buy.svg"
        alt={name}
      />

      <div class="px-5 pb-5">
        <h3 class="text-2xl text-center text-blue-800"> {name} </h3>

        <div class="flex items-center mt-2.5 mb-5"></div>
        <div class="flex items-center justify-between gap-7">
          <span class="text-xl font-bold text-gray-900 dark:text-white">
            {price}
            {" تومان"}
          </span>
          <button className="btnClass !w-[100px] !text-[.9rem]">سبد خرید</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
