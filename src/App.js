import "./App.css";
import Myapp from "./component/Home/Home";

function App() {
  const mainBody = document.body;

  const fontIncreaseHandler = () => {
    mainBody.classList.add("increase");
    mainBody.classList.remove("normal");
    mainBody.classList.remove("decrease");
  };

  const fontDecreaseHandler = () => {
    mainBody.classList.add("decrease");
    mainBody.classList.remove("normal");
    mainBody.classList.remove("increase");
  };

  const fontNormalHandler = () => {
    mainBody.classList.add("normal");
    mainBody.classList.remove("increase");
    mainBody.classList.remove("decrease");
  };

  const themeTwoHandler = () => {
    mainBody.classList.add("theme-two");
    mainBody.classList.remove("theme-one");
  };

  const themeOneHandler = () => {
    mainBody.classList.add("theme-one");
    mainBody.classList.remove("theme-two");
  };

  return (
    <div id="main">
      <div id="top-bar">
        <button className="font-increase" onClick={fontIncreaseHandler}>
          <span>A</span>
          <span>+</span>
        </button>
        <button className="font-normal" onClick={fontNormalHandler}>
          <span>A</span>
        </button>
        <button className="font-decrease" onClick={fontDecreaseHandler}>
          <span>A</span>
          <span>-</span>
        </button>
        <button className="theme-one" onClick={themeOneHandler}>
          T1
        </button>
        <button className="theme-two" onClick={themeTwoHandler}>
          T2
        </button>
      </div>
      <Myapp />
    </div>
  );
}

export default App;
