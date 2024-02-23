import React, { useRef, useState, useEffect } from "react";
import Smoke from "./Smoke.jsx";

// https://github.com/elisiondesign/smoke-effect
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

const Canvas = (props) => {
  const [isSmoking, setIsSmoking] = useState(true);
  const canvasRef = useRef(null);

  const printCanvas = (text) => {
    console.log(text);
  };
  const draw = (ctx, frameCount) => {};

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    let smoke = new Smoke(context, [80, 80, 80]);
    smoke.start();
    smoke.step(500);
    smoke.addSmoke(100, 100, 30, { minLifetime: 300, maxLifetime: 1000 });
    // addSmoke(smoke);
    console.log("adding smoke");

    // function addSmoke() {
    //   if (isSmoking) {
    //     smoke.addSmoke(50, 50, 100);
    //     // smoke.addSmoke(600, 20, 30);
    //     setTimeout(() => {
    //       addSmoke();
    //     }, 100);
    //   }
    // }

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};
export default Canvas;
