import { css, cx } from "@emotion/css";
import { CSSInterpolation } from "@emotion/css/types/create-instance";

export type ObjStyle = CSSInterpolation;
export function buildClassedStyle(objStyle: ObjStyle) {
  return cx(css(objStyle));
}

