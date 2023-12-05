import React from "react";
import Login from "../components/ui/Login";
import Sidebar from "../components/ui/Sidebar";
import Contain from "../components/ui/Contain";
import Footer from "../components/Footer";

function Home() {
  return <>
          <div>
              <div class="container_mw">
                <div class="content_home">
                  <Sidebar />
                  <Contain />
                  <Footer/>
                </div>
              </div>
          </div>;
          </> 
}

export default Home;
