import React from "react";

import Sidebar from "../components/ui/Sidebar";
import Contain from "../components/ui/Contain";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="p-6 ">
        <div className="flex gap-4">
          <Sidebar />
          <Contain />
        </div>
      </div>
    </div>
  );
}

export default Home;
