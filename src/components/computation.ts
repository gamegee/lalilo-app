export interface Point {
  x: number;
  y: number;
}

/**
 * Given coordinates of a point (x, y) and origin (x, y) of the coordinates system
 * Return the radian angle
 */
export const getRadianAngle = (origin: Point, point: Point): number => {
  return Math.atan2(point.y - origin.y, point.x - origin.x);
};

/**
 * Given coordinates of a point (x, y) and origin (x, y) of the coordinates system
 * Return convenient css angle format (deg)
 */
export const getDegreeAngle = (origin: Point, point: Point): number => {
  const radianAngle = getRadianAngle(origin, point);
  const degreeAngle = radianAngle * (180 / Math.PI) * -1;
  const cssComputedAngle = 360 - (degreeAngle + 180);
  return cssComputedAngle;
};
