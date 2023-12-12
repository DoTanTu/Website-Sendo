import React from "react";
import Login from "../components/ui/Login";
import Sidebar from "../components/ui/Sidebar";
import Contain from "../components/ui/Contain";

function Home() {
  return (
    <>
      <div>
        <div className="p-6 h-screen">
          <div className="flex gap-4">
            <Sidebar />
            <Contain />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
