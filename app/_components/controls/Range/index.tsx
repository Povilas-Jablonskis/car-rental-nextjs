import { forwardRef } from "react";

export default forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Range(props, ref) {
  return <input ref={ref} {...props} type="range" />;
});
