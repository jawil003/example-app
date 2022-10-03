import React from "react";
import DogIllustration from "../../assets/undraw_dog_re_is6r.svg";
import Image from "next/image";

export interface Props {}

/**
 * An IndexRightHeaderBody React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const IndexRightHeaderBody: React.FC<Props> = () => {
  return (
    <div className="xl:static absolute top-0 left-0 min-h-full w-full z-0 xl:flex-1 flex items-center justify-center overflow-hidden xl:opacity-100 opacity-50">
      <DogIllustration className="xl:h-auto xl:w-auto h-80 w-100" />
    </div>
  );
};
