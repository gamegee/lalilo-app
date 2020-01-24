import * as React from "react";

type PupilIconProps = {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
};

const PupilIcon = ({
  x = "50%",
  y = "50%",
  width = "30",
  height = "30",
  ...restProps
}: PupilIconProps): JSX.Element => {
  return (
    <svg
      className="pupil-icon"
      y={y}
      x={x}
      width={width}
      height={height}
      viewBox="0 0 21.3 20.3"
      fill="#33455B"
      {...restProps}
    >
      <ellipse cx="10.6" cy="10.2" rx="10.6" ry="10.2" />
    </svg>
  );
};

export default PupilIcon;
