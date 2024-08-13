import { ContentEntity } from "../lib/softbox-api/types";
import BlockEdge from "./BlockEdge";
import BlockPhotocard from "./BlockPhotocard";

type TemplateProps = {
  [key: string]: ContentEntity[];
};

function TemplateDailyBrief({ content }: { content: TemplateProps }) {
  const categories = Object.keys(content);
  const numCategories = categories.length; //use in template 
  console.log(numCategories)
  return (
    <>
      <BlockPhotocard items={content['standard'].slice(0,2)} />
      <BlockEdge items ={content['standard'].slice(2,6)}/>
    </>
  );
}
export default TemplateDailyBrief;
