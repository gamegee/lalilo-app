import useBoundingClientRect from "@rooks/use-boundingclientrect";

interface Center {
  x: number;
  y: number;
}

const useNodeCenter = (ref: React.RefObject<HTMLElement>): Center => {
  const rect = useBoundingClientRect(ref);

  return rect
    ? {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      }
    : { x: 0, y: 0 };
};

export default useNodeCenter;
