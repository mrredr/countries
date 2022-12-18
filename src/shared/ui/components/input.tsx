import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, any>(function input(props, ref) {
  const { className, error, ...restProps } = props;
  return (
    <input
      ref={ref}
      className={`py-3 px-4 block w-full border-[1px] text-lg border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 ${
        error !== undefined ? "border-red-500" : ""
      } ${className as string}`}
      {...restProps}
    />
  );
});
