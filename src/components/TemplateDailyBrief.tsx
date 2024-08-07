import { ContentEntity } from "../types/softbox";
import PhotocardBlock from "./BlockPhotocard";

type TemplateProps = {
  [key: string]: ContentEntity[];
};

function TemplateDailyBrief({ content }: { content: TemplateProps }) {
  const categories = Object.keys(content);

  return (
    <>
      <PhotocardBlock items={content[categories[0]]} />
    </>
  );
}
export default TemplateDailyBrief;
