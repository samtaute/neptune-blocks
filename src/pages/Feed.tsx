import { useLoaderData, useParams } from "react-router-dom";
import { chooseTemplate } from "../lib/chooseTemplate";
import { cloneElement } from "react";
import { PropsWithChildren } from "react";

function FeedPage() {
  const content = useLoaderData();
  const { platform, language, keyword } = useParams();

  const template = chooseTemplate(platform!, language!, keyword!);//todo handle undefined variables here.

  //clone template component in order to pass content in props
  return <FeedContainer>{cloneElement(template, { content })}</FeedContainer>;
}

export default FeedPage;


function FeedContainer({children}: PropsWithChildren){
    return <div className="mx-auto max-w-[410px] min-h-40 flex flex-col">{children}</div>
}

