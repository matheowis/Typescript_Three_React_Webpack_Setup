
type PositionType = "absolute" | "relative";

export interface IstyleSheet {
  [testProp: string]: {
    width?: string | number,
    height?: string | number,
    backgroundColor?: string,
    color?: string,
    position?: string & PositionType
  }
}
