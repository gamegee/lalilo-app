import useNodeRect from "./use-node-rect";

interface Center {
  x: number;
  y: number;
}

const useNodeCenter = (): [Center, React.RefObject<HTMLElement>] => {
  const [rect, ref] = useNodeRect();

  return [
    {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    },
    ref
  ];
};

export default useNodeCenter;
