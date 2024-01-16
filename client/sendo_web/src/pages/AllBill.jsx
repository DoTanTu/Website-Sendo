import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../img/Better_logo.png";
import CardBill from "../components/ui/CardBill";
export default function AllBill() {
  return (
    <div>
      <Navbar />
      <div className="w-full p-8">
        <div className="flex gap-3">
          <div className="w-1/6 h-max p-4 shadow-sm shadow-gray-400 bg-white">
            <div className="flex gap-2">
              <img className="h-12 w-12 rounded-full" src={logo} alt="" />
              <div className="flex flex-col items-start">
                <p>Đỗ Tấn Từ</p>
                <p className="text-xs text-green-400">Đang online</p>
              </div>
            </div>
          </div>
          <div className="w-5/6 h-screen rounded-2xl p-6 flex flex-col gap-6 shadow-sm shadow-gray-400 overflow-y-scroll bg-white">
            <CardBill />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}