import { useLoaderData, useParams } from "react-router-dom";
import { PropsWithChildren } from "react";
import TemplateDailyBrief from "../components/TemplateDailyBrief";
import { ContentStoreEntity } from "../lib/softbox-api/types";

function FeedPage() {
  const content = useLoaderData() as ContentStoreEntity; 
  const { platform, language, keyword } = useParams();
  const template = chooseTemplate(platform!, language!, keyword!, content);//todo handle undefined variables here.

  //clone template component in order to pass content in props
  return <FeedContainer>{template}</FeedContainer>;
}

export default FeedPage;


function FeedContainer({children}: PropsWithChildren){
    return <div className="mx-auto max-w-[450px] px-[20px] min-h-40 flex flex-col">{children}</div>
}

function chooseTemplate(platform: string, language: string, keyword:string, content: ContentStoreEntity){
  //todo implement logic
  console.log(platform, keyword, language)
  return <TemplateDailyBrief content={content}/>
}
