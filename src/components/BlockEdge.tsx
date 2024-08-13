import { PropsWithChildren } from "react";
import { BlockProps } from "../types/propsTypes";
import { PhotocardLogo } from "./BlockPhotocard";

function BlockEdge({ items }: BlockProps) {
  return (
    <>
      {items.map((item) => {
        return (
          <a href={item.link} key={item.uid} className="block mb-4">
            <ImageContainer image={item.wideImage}></ImageContainer>
            <PhotocardLogo logo ={item.brandLogoDark}/>
            <EdgeTitle title={item.title}/>
          </a>
        );
      })}
    </>
  );
}

export default BlockEdge;


function EdgeTitle({ title }: { title: string }) {
    return <h2 className="text-black text-xl drop-shadow-sm font-semibold my-2">{title}</h2>;
  }

function ImageContainer({
  children,
  image,
}: PropsWithChildren<{ image: string }>) {
  const backgroundImage = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      style={backgroundImage}
      className={"relative flex flex-col rounded-lg bg-cover h-[228px] mb-2"}
    >
      {children}
    </div>
  );
}
