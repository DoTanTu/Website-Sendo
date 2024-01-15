export default function CardBill() {
  return (
    <div className="p-2 shadow-sm shadow-blue-gray-400">
      <div className="flex justify-between pb-3 border-b-[2px] border-b-gray-500 ">
        <div className="flex items-center">
          <p className="font-bold">Tên shop</p>
        </div>
        <div className="flex items-center gap-3">
          <i class="fa-solid fa-truck"></i>
          <p className="text-sm text-gray-500">Đã giao hàng</p>
          <div className="w-[2px] h-6 bg-gray-600"></div>
          <p className="uppercase text-red-300">đã đánh giá</p>
        </div>
      </div>
      <div className="mt-2 flex justify-between px-2">
        <div className=" flex gap-2">
          <img
            className="w-24 h-24"
            src="https://cdn.gumac.vn/image/01/2020/tin-tuc-dot-1/82-cach-lam-quan-ao-kho-nhanh/cach-lam-quan-ao-kho-nhanh070320201100140039.jpg"
            alt=""
          />
          <div className="flex flex-col ">
            <p className="uppercase font-bold">tên sản phẩm</p>
            <p className="text-sm text-gray-500">loại sản phẩm</p>
            <p className="text-sm ">2</p>
          </div>
        </div>
        <div className="flex items-center  text-red-500">100000</div>
      </div>
      <div className="w-full flex justify-end items-center gap-2 px-2">
        <p>Tổng số tiền:</p>
        <p className="text-2xl text-red-500">100000</p>
      </div>
      <div className="flex justify-between py-2 px-2">
        <p className="text-xs text-gray-400 ">Đang chở người đánh giá</p>
        <div className=" flex justify-center gap-3 items-center">
          <button className="py-2 px-4 bg-red-500 hover:bg-red-200 text-white text-sm rounded-md">
            Mua Lại Nữa
          </button>
          <button className="py-2 px-4 border-[1px] border-black/10 text-sm rounded-md">
            Xem chi tiết đơn hàng
          </button>
          <button className="py-2 px-4 border-[1px] border-black/10 text-sm rounded-md">
            Xem shop
          </button>
        </div>
      </div>
    </div>
  );
}
