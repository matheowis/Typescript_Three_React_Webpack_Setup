
type PositionType = "absolute" | "relative";
type OverflowType = "hidden" | "visible";

export interface IstyleSheet {
  [testProp: string]: {
    width?: string | number,
    height?: string | number,
    backgroundColor?: string,
    color?: string,
    position?: string & PositionType,
    overflow?: string & OverflowType,
  }
}
