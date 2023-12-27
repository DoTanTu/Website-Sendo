import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import UpdateSeller from "../components/ui/UpdateSeller";

export default function Profile() {
  return (
    <div>
      <NavbarProfile />
      <div className="w-full h-max p-6 shadow-sm">
        <div className="w-full h-max bg-white rounded-md flex ">
          <div className="w-1/3 mb-10">
            <div className="">
              <div className="w-56 h-56 p-2 bg-[#DA251E] mx-auto my-4 mt-8 rounded-full">
                <img
                  className="object-cover  mx-auto rounded-full"
                  src="https://zizoou.com/cdn/shop/files/Ao-khoac-jacket-form-rong-oversize-3-1-Ao-jacket-nau_Extras-ZiZoou-Store.jpg?v=1685791120"
                  alt="Product Thumbnail"
                />
              </div>

              <h1 className="text-2xl font-bold mx-auto my-4 text-center">
                Nguyễn Văn A
              </h1>
              <div className="flex justify-center">
                <UpdateSeller />
              </div>
            </div>
          </div>
          <div className="w-2/3 p-4 flex-col mt-12">
            <div className="flex gap-40 mt-4 ">
              <p className="text-base text-black/25 w-44"> Tên tài khoản:</p>
              <input type="text" className=" border shadow-2xl" />
            </div>
            <div className="flex gap-40 mt-4 ">
              <p className="text-base text-black/25 w-44"> Tên đăng nhập:</p>
              <input type="text" className=" border shadow-2xl" />
            </div>

            <div className="flex gap-40 mt-4">
              <p className="text-base text-black/25 w-44"> Email:</p>
              <p className="text-base text-black">t@gmail.com</p>
            </div>
            <div className="flex gap-40 mt-4">
              <p className="text-base text-black/25 w-44"> Số điện thoại:</p>
              <input type="text" className=" border shadow-2xl" />
            </div>
            <div className="flex gap-40 mt-4">
              <p className="text-base text-black/25 w-44"> Ngày Sinh:</p>
              <input type="text" className=" border shadow-2xl" />
            </div>
            <div className="mt-10 w-2/5 px-30 flex justify-end">
              <button className=" bg-red-500 p-2  text-sm font-bold text-white rounded-lg hover:bg-red-500/60 ">
                Cập nhập
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
