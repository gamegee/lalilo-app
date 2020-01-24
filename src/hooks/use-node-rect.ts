import * as React from "react";

interface Rect {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

const useNodeRect = (): [Rect, React.RefObject<HTMLElement>] => {
  const [rect, setRect] = React.useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0
  });

  const ref = React.useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
};

export default useNodeRect;
