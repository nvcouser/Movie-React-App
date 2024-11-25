import { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
