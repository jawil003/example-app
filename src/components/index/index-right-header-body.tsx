import React from "react";
import Image from "next/image";
import DogComponent from "../../assets/undraw_dog_re_is6r.svg";
import DogComponentDark from "../../assets/undraw_dog_re_is6r_dark.svg";
export interface Props {}

/**
 * An IndexRightHeaderBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const IndexRightHeaderBody: React.FC<Props> = () => {
  const classes = "xl:h-auto xl:w-auto h-80 w-100";

  return (
    <div className="xl:static absolute top-0 left-0 min-h-full w-full z-0 xl:flex-1 flex items-center justify-center overflow-hidden xl:opacity-100 opacity-50">
      <DogComponent className={classes + " dark:hidden"} />
      <DogComponentDark className={classes + " hidden dark:block"} />
    </div>
  );
};
