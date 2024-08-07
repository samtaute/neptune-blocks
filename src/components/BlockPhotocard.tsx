// export interface ContentEntity
// {
//     title: string,
//     description?: string,
//     owner: string,
//     brandLogo: string,
//     brandLogoDark: string,
//     wideImage: string,
//     link: string,
// }
import { PropsWithChildren } from "react";
import { ContentEntity } from "../types/softbox";

function BlockPhotocard({ items }: { items: ContentEntity[] }) {
  console.log(items);

  return (
    <>
      {items.map((item) => {
        return (
          <BlockItemContainer key={item.title} link={item.link} image={item.wideImage}>
          </BlockItemContainer>
        );
      })}
    </>
  );
}

export default BlockPhotocard;

function BlockItemContainer({
  children,
  link,
  image,
}: PropsWithChildren<{ link: string; image: string }>) {
    
const backgroundImage = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 3, 21, 0.85) 0%, rgba(0, 3, 21, 0) 70%, rgba(0, 3, 21, 0) 70%, rgba(0, 3, 21, 0) 100%), url(${image})`,
    
}

  return (
    <a
      style={backgroundImage}  
      href={link}
      className={"relative flex flex-col rounded-lg bg-cover h-[254px]"}
    >
      {children}
    </a>
  );
}
