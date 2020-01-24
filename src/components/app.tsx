import * as React from "react";
import { useMouse, useHover } from "react-use";
import { useSpring, animated } from "react-spring";
import anime from "animejs";

import clicFile from "../assets/clic.mp3";
import useNodeCenter from "../hooks/use-node-center";
import { getDegreeAngle } from "./computation";
import PupilIcon from "./icons/pupil-icon";
import EyeIcon from "./icons/eye-icon";

const App = (): JSX.Element => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState(0);
  const [isAnimated, setIsAnimated] = React.useState(false);
  const [center, ref] = useNodeCenter();
  const { docX, docY } = useMouse(containerRef);

  React.useEffect(() => {
    if (!isAnimated) {
      setRotation(getDegreeAngle(center, { x: docX, y: docY }));
    }
  }, [docX, docY, isAnimated]);

  const onMouseOver = (): void => {
    if (!isAnimated) {
      new Audio(clicFile).play();
      setIsAnimated(true);
      // Animate the pupil away from the cursor
      setRotation(rotation + 180);
    }
  };

  return (
    <div ref={containerRef} className="eye-container">
      <EyeIcon />
      <div className="eye-container__inner-area">
        <div ref={ref}>
          <PupilIcon onMouseEnter={onMouseOver} />
        </div>
      </div>
    </div>
  );
};

export default App;
