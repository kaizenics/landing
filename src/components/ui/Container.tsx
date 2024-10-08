import * as React from "react";

type Props<T> = {
  className?: string;
  children: React.ReactNode;
} & T;

export const Container = ({
  className,
  children,
  ...rest
}: Props<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
};

// container.tsx