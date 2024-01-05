import {
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

import logo from "../img/Better_logo_white.png";
import { Button } from "@material-tailwind/react";

export default function Footer() {
  return (
    <div className="bg-[#DA251E] text-white py-10 px-0 lg:px-24 md:px-6 w-full">
      <div className=" md:flex md:gap-x-4 mb-6 ">
        <div className="pl-12 md:w-max lg:w-1/3 ">
          <p className="flex text-sm mb-3">
            Tieng Viet <ChevronDown />
          </p>
          <div className="flex gap-7 mt-6 mb-8">
            <Button className="bg-transparent hover:bg-transparent p-0">
              <Twitter size={22} color="#ffffff" strokeWidth={2.75} />
            </Button>
            <Button className="bg-transparent hover:bg-transparent p-0">
              <Instagram size={22} color="#ffffff" strokeWidth={2.75} />
            </Button>
            <Button className="bg-transparent hover:bg-transparent p-0">
              <Facebook size={22} color="#ffffff" strokeWidth={2.75} />
            </Button>
            <Button className="bg-transparent hover:bg-transparent p-0">
              <Youtube size={22} color="#ffffff" strokeWidth={2.75} />
            </Button>
          </div>
          <div className="hidden md:block w-[7rem] flex justify-start">
            <img className="" src={logo} alt="logo" />
          </div>
        </div>
        <div className=" flex flex-wrap px-12 gap-y-4 md:w-2/3 md:flex-wrap md:p-0 lg:flex-nowrap lg:gap-9  lg:w-2/3 lg:p-0">
          <div className="w-1/2 flex flex-col gap-y-2  ">
            <h5 className="text-white mb-2">Product</h5>
            <a className="text-white block" href="">
              <span>Download</span>
            </a>
            <a className="text-white block" href="">
              <span>Nitro</span>
            </a>
            <a className="text-white block" href="">
              <span>Status</span>
            </a>
            <a className="text-white block" href="">
              <span>App Directory</span>
            </a>
            <a className="text-white block" href="">
              <span>New Mobile Experience</span>
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2 ">
            <h5 className="text-white mb-2">Company</h5>
            <a className="text-white block" href="">
              <span>About</span>
            </a>
            <a className="text-white block" href="">
              <span>Jobs</span>
            </a>
            <a className="text-white block" href="">
              <span>Brand</span>
            </a>
            <a className="text-white block" href="">
              <span>Newsroom</span>
            </a>
            <a className="text-white block" href="">
              <span>Fall Relaease</span>
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2">
            <h5 className="text-white mb-2">Resources</h5>
            <a className="text-white block" href="">
              <span>College</span>
            </a>
            <a className="text-white block" href="">
              <span>Support</span>
            </a>
            <a className="text-white block" href="">
              <span>Safety</span>
            </a>
            <a className="text-white block" href="">
              <span>Blog</span>
            </a>
            <a className="text-white block" href="">
              <span>Feedback</span>
            </a>
            <a className="text-white block" href="">
              <span>Creator</span>
            </a>
            <a className="text-white block" href="">
              <span>Community</span>
            </a>
            <a className="text-white block" href="">
              <span>Developers</span>
            </a>
            <a className="text-white block" href="">
              <span>Gaming</span>
            </a>
            <a className="text-white block" href="">
              <span>Official 3 rd Party Merch</span>
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2">
            {" "}
            <h5 className="text-white mb-2">Policies</h5>
            <a className="text-white block" href="">
              <span>Terms</span>
            </a>
            <a className="text-white block" href="">
              <span>Privacy</span>
            </a>
            <a className="text-white block" href="">
              <span>Cookie Settings</span>
            </a>
            <a className="text-white block" href="">
              <span>Guidelines</span>
            </a>
            <a className="text-white block" href="">
              <span>Acknowledgements </span>
            </a>
            <a className="text-white block" href="">
              <span>Licenses </span>
            </a>
            <a className="text-white block" href="">
              <span>Company Information</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12 flex justify-between border-t-2 border-white ">
        Bùi Minh Thành - Nguyễn Đức Tín - Nguyễn Thì Hoài Thu - Đỗ Tấn Từ
      </div>
    </div>
  );
}
