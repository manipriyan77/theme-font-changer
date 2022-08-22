import "./Home.css";
import Myapp from "./HomeBlog";

const Home = () => {
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
        <button onClick={fontIncreaseHandler}>
          <span>A</span>
          <span>+</span>
        </button>
        <button onClick={fontNormalHandler}>
          <span>A</span>
          <span></span>
        </button>
        <button onClick={fontDecreaseHandler}>
          <span>A</span>
          <span>+</span>
        </button>
        <button onClick={themeOneHandler}>T1</button>
        <button onClick={themeTwoHandler}>T2</button>
      </div>

      <Myapp />
      {/* <HAbout /> */}
    </div>
  );
};

export default Home;
