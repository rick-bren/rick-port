import Navi from "./components/nav";
import Pics from "./components/pic";
import About from "./components/about";
import React from "react";
import Skills from "./components/skils";
import Techn from "./components/Tech";
import Edu from "./components/education";
import Proj from "./components/project";
import Contactme from "./components/contactme";

import "./index.css"; // Importing the CSS file

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300  ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <Navi />
      <Pics />
      <About />
      <Skills />
      <Techn />
      <Edu />
      {/*<Cert />*/}
      <Proj />

      <Contactme />
    </div>
  );
};
export default App;
