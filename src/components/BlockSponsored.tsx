import { useEffect, useState} from "react";
import { ContentEntity } from "../lib/softbox-api/types";
import BlockEdge from "./BlockEdge";
import {
  fetchOutbrainItems,
  OutbrainCallbackWrapper,
} from "../lib/outbrain/useOutbrain";
import { checkScriptLoaded } from "../lib/util/utils";

function BlockSponsored() {
  const [items, setItems] = useState<ContentEntity[]>([]);

  //Fetch OB content
  useEffect(() => {
    const callback = () => {
      const ob = new OutbrainCallbackWrapper(setItems);
      fetchOutbrainItems(ob);
    };
    checkScriptLoaded("OBR", callback, 5, 25); //executes callback if outbrain script has loaded. If not, retries up to 10 times at 25ms intervals
  }, []);

 
  return <>{items && <BlockEdge items={items}/>}</>;
}

export default BlockSponsored;
