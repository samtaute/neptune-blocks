import { useLoaderData, useParams } from "react-router-dom";
import { cloneElement } from "react";
import { PropsWithChildren } from "react";
import TemplateDailyBrief from "../components/TemplateDailyBrief";

function FeedPage() {
  const content = useLoaderData();
  const { platform, language, keyword } = useParams();
  const template = chooseTemplate(platform!, language!, keyword!);//todo handle undefined variables here.
  


  //clone template component in order to pass content in props
  return <FeedContainer>{cloneElement(template, { content })}</FeedContainer>;
}

export default FeedPage;


function FeedContainer({children}: PropsWithChildren){
    return <div className="mx-auto max-w-[450px] px-[20px] min-h-40 flex flex-col">{children}</div>
}

function chooseTemplate(platform: string, language: string, keyword:string){
  //todo implement logic
  console.log(platform, keyword, language)
  return <TemplateDailyBrief content={{}}/>
}