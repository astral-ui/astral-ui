/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyMedium} from "@astral-ui/theme";

const baseStyle: Style = [{
  paddingTop: 4,
  paddingLeft: 6,
  paddingRight: 6,
  paddingBottom: 4
}, BodyMedium];

export type ModalBodyStyle = Style;
export type ModalBodyProps = Omit<HTMLAttributes<HTMLDivElement>, "styles"> & {
  styles?: ModalBodyStyle;
};
export const ModalBody = forwardRef(function ModalBody({styles, ...props}: ModalBodyProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const modalBodyCss = useMemo(() => styleToCss(baseStyle, styles), [styles]);
  return (
    /** @ts-ignore */
    <div ref={ref} css={modalBodyCss} {...props} />
  )
});
