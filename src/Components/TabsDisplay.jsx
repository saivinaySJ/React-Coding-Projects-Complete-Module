import { useState } from "react";
// import "../Assets/TabsDisplay.css";
function TabsDisplay() {
  const [toggleState, setToggleState] = useState(1);
  function toggleTab(index) {
    setToggleState(index);
  }
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "contents active-content" : "contents"}
        >
          <h1>content 1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ad
            labore ab voluptatem at in similique soluta vitae enim, sed
            perferendis. Quo beatae non quaerat enim neque! Rem, pariatur
            inventore!
          </p>
        </div>
        <div
          className={toggleState === 2 ? "contents active-content" : "contents"}
        >
          <h2>content 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            voluptas quos maxime aliquam temporibus aspernatur nemo quidem
          </p>
        </div>
        <div
          className={toggleState === 3 ? "contents active-content" : "contents"}
        >
          <h1>content 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            cum accusantium dolores, voluptas reiciendis repudiandae nisi
            doloribus excepturi modi. Asperiores saepe laborum iure non delectus
            vel modi fugiat nostrum voluptate. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Itaque qui, odio assumenda nobis sint
            labore magnam dolores vero vel ipsa. Voluptate modi quas minus
            asperiores nihil et ad pariatur praesentium.
          </p>
        </div>
      </div>
    </div>
  );
}
export default TabsDisplay;
