import styledCss, {CSSObject, SystemStyleObject} from "@styled-system/css";
import {Interpolation} from "@emotion/react";
import {Style} from "./Style";

export function styleToCss<Theme>(...styles: Style[]): Interpolation<Theme> {
  return ((theme: Theme): CSSObject => {
    return styles
      .flatMap(b => {
        if (Array.isArray(b)) return b.flat(Infinity);
        return b;
      })
      .filter(b => b !== undefined)
      .reduce((a: CSSObject, b: SystemStyleObject) => {
        return ({
          ...a,
          ...styledCss(b)(theme)
        });
    }, {});
  });
}