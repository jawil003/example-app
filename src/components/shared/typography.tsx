import React, { PropsWithChildren } from "react";

export interface Props {
  variant: "h1" | "sh1" | "b1" | "u1" | "logo";
  className?: string;
  type?: keyof React.ReactHTML;
}

/**
 * An Typography React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Typography: React.FC<PropsWithChildren<Props>> = ({
  className,
  variant,
  children,
  type,
}) => {
  const classNameGenerated = (() => {
    switch (variant) {
      case "h1":
        return "tracking-tight font-extrabold text-6xl text-gray-900 dark:text-gray-200 ";
      case "sh1":
        return "tracking-tight font-extrabold text-6xl text-navy-600 dark:text-gray-400 ";
      case "b1":
        return "text-gray-500 text-lg dark:text-gray-200 ";
      case "u1":
        return "text-black font-normal text-base dark:text-gray-200 ";
      case "logo":
        return "text-navy-600 text-2xl font-bold dark:text-gray-400 ";
    }
  })();

  return React.createElement(
    type as any,
    { className: classNameGenerated + className },
    children
  );
};

Typography.defaultProps = { type: "span" };
