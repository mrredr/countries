import React, { forwardRef, InputHTMLAttributes, PropsWithChildren } from "react";

export const Checkbox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
>(function checkbox({ value, children, onChange }, ref) {
  return (
    <label
      htmlFor="hs-vertical-checkbox-in-form"
      className="max-w-xs p-3 block w-full bg-white rounded-md text-lg focus:border-blue-500 focus:ring-blue-500"
    >
      <input
        value={value}
        type="checkbox"
        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500"
        id="hs-vertical-checkbox-in-form"
        onChange={onChange}
        ref={ref}
      />
      <span className="text-lg text-gray-500 ml-3">{children}</span>
    </label>
  );
});
