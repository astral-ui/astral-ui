/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useImperativeHandle, useMemo, useRef} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {useClickOutside, useFocusOutside} from "@astral-ui/focus-trap";

const baseStyle: Style = {
  position: "relative",
  display: "inline-block",
  width: "100%"
};

export type MenuStyle = Style;
export type MenuProps = HTMLAttributes<HTMLDivElement> & {
  onDismiss?: () => void;
  styles?: MenuStyle;
}
export const Menu = forwardRef(function Menu({styles, onDismiss, ...props}: MenuProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null);

  useFocusOutside(menuRef, onDismiss);
  useClickOutside(menuRef, onDismiss);

  useImperativeHandle(ref, () => {
    return menuRef.current!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }, [menuRef]);

  const menuCss = useMemo(() => styleToCss(baseStyle, styles), [styles]);
  return (
    <div ref={menuRef} css={menuCss} {...props} />);
});
