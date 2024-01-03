import React from "react";

import Sidebar from "../components/ui/Sidebar";
import Contain from "../components/ui/Contain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6 container mx-auto">
        <div className="flex">
          <Sidebar />
          <Contain />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
