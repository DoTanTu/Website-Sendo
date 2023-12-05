import React from "react";
import Login from "../components/ui/Login";
import Sidebar from "../components/ui/Sidebar";
import Contain from "../components/ui/Contain";

function Home() {
  return <>
          <div>
              <div class="container_mw">
                <div class="content_home">
                  <Sidebar />
                  <Contain />
                </div>
              </div>
          </div>;
          </> 
}

export default Home;
