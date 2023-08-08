import * as React from "react";
import "./styles.css";

export type UpdaptSearchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "disabled"
> & {
  width: number;
  disabled?: boolean;
  imageWidth?: number;
  imageHeight?: number;
};
export function UpdaptSearchInput({
  width,
  disabled,
  imageWidth,
  imageHeight,
  ...rest
}: UpdaptSearchProps) {
  return (
    <>
      <input
        type="search"
        className="updapt-search-input"
        style={{
          width: `${width}px`,
          background: `transparent
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width=${imageWidth} height=${imageHeight} class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 13px center`,
        }}
        disabled={disabled}
        {...rest}
      />
    </>
  );
}
