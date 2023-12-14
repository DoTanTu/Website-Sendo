import React from "react";

import Sidebar from "../components/ui/Sidebar";
import Contain from "../components/ui/Contain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6 ">
        <div className="flex gap-4">
          <Sidebar />
          <Contain />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
