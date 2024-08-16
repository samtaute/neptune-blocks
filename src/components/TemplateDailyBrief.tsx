import { ContentEntity } from "../lib/softbox-api/types";
import BlockEdge from "./BlockEdge";
import BlockPhotocard from "./BlockPhotocard";
import BlockAd from "./BlockAd";
import BlockSponsored from "./BlockProviders/Outbrain";

const DUMMY_WIDGET = "JS_6";

type TemplateProps = {
  [key: string]: ContentEntity[];
};

function TemplateDailyBrief({ content }: { content: TemplateProps }) {
  const categories = Object.keys(content);
  const numCategories = categories.length; //use in template 
  console.log(numCategories)
  return (
    <>
      <BlockPhotocard items={content['standard'].slice(0,1)} />
      <BlockAd/>
      <BlockEdge items ={content['standard'].slice(1,6)}/>
      <BlockSponsored widgetId={DUMMY_WIDGET} layout="edge"/>
    </>
  );
}
export default TemplateDailyBrief;
