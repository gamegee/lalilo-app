import * as React from "react";

import useMouse from "@rooks/use-mouse";
import anime, { AnimeParams, AnimeInstance } from "animejs";

import clicFile from "../assets/clic.mp3";
import useNodeCenter from "../hooks/use-node-center";
import { getDegreeAngle } from "./computation";
import PupilIcon from "./icons/pupil-icon";
import EyeIcon from "./icons/eye-icon";

const App = (): JSX.Element => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const eyeLashRef = React.useRef<SVGGElement>(null);
  const center = useNodeCenter(ref);
  const { pageX, pageY } = useMouse();
  const [animState, setAnimState] = React.useState<AnimeInstance | null>(null);

  const pupilAwayAnim = (): AnimeParams => {
    return wrapperRef.current
      ? {
          targets: wrapperRef.current,
          rotateZ: 180,
          duration: 1500
        }
      : {};
  };

  const eyeLashesAnim = (): AnimeParams => {
    return {
      targets: eyeLashRef.current,
      duration: 400,
      endDelay: 400,
      keyframes: [{ translateX: 4 }, { translateX: 0 }]
    };
  };

  const pupilAnimReset = (): AnimeParams => ({
    targets: wrapperRef.current,
    rotateZ: 0,
    duration: 300
  });

  const playAudio = (): void => {
    const audio = new Audio(clicFile);
    audio.play();
  };

  const pupilAnim = (): void => {
    playAudio();
    anime
      .timeline({
        easing: "easeOutCirc",
        begin: anim => setAnimState(anim),
        complete: () => setAnimState(null)
      })
      .add(pupilAwayAnim())
      .add(eyeLashesAnim())
      .add(pupilAnimReset());
  };

  React.useEffect(() => {
    if (!animState) {
      anime({
        targets: ref.current,
        duration: 0,
        rotateZ: getDegreeAngle(center, {
          x: pageX || 0,
          y: pageY || 0
        })
      });
    }
  }, [pageX, pageY]);

  return (
    <div ref={containerRef} className="eye-container">
      <EyeIcon eyeLashRef={eyeLashRef} />
      <div ref={wrapperRef} className="inner-area-wrapper">
        <div ref={ref} className="inner-area">
          <PupilIcon onMouseEnter={pupilAnim} />
        </div>
      </div>
    </div>
  );
};

export default App;
