import { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div onClick={() => setIsOpenMenu(!isOpenMenu)}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
