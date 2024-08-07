import { ContentEntity } from "../types/softbox";
import PhotocardBlock from "./BlockPhotocard";

type TemplateProps = {
  [key: string]: ContentEntity[];
};

function TemplateDailyBrief({ content }: { content: TemplateProps }) {
  const categories = Object.keys(content);
  const numCategories = categories.length; //use in template 
  console.log(numCategories)
  return (
    <>
      <PhotocardBlock items={content['standard']} />
    </>
  );
}
export default TemplateDailyBrief;
