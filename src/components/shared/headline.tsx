import React, { PropsWithChildren } from "react";

export interface Props {
  variant: "h1" | "sh1" | "b1";
  className?: string;
  type?: keyof React.ReactHTML;
}

/**
 * An Headline React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Headline: React.FC<PropsWithChildren<Props>> = ({
  className,
  variant,
  children,
  type,
}) => {
  const classNameGenerated = (() => {
    switch (variant) {
      case "h1":
        return "tracking-tight font-extrabold text-6xl text-gray-900 ";
      case "sh1":
        return "tracking-tight font-extrabold text-6xl text-navy-600 ";
      case "b1":
        return "text-gray-500 text-lg ";
    }
  })();

  return React.createElement(
    type as any,
    { className: classNameGenerated + className },
    children
  );
};

Headline.defaultProps = { type: "span" };
