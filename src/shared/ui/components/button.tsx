import { forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, any>(function button(props, ref) {
  const { className, ...restProps } = props;
  return (
    <button
      ref={ref}
      className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 ${
        className as string
      }`}
      {...restProps}
    >
      {props.children}
    </button>
  );
});
