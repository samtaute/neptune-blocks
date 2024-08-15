import { ContentEntity } from "../softbox-api/types";

const DUMMY_URL = "http://www.mobileposse.com/BLU/BLUNEWS/0000/EN";
const DUMMY_WIDGET = "JS_6";
const DUMMY_KEY = "MOBIL10GC607HEAPB660KCI89";

//In order 
export class OutbrainCallbackWrapper {
  setItems: React.Dispatch<React.SetStateAction<ContentEntity[]>>;

  outbrainCallback = (json: OutbrainResponse) => {
    const content = [] as ContentEntity[];
    for (let i = 0; i < json.doc.length; i++) {
      const item = json.doc[i];
      console.log(
        "Recommendation title:" + item.content + " and url: " + item.url
      );
      content.push({
        title: item.content,
        owner: item.source_display_name,
        wideImage: item.thumbnail.url,
        link: item.url,
      });
    }
    this.setItems(content)
  };

  constructor(setItems: React.Dispatch<React.SetStateAction<ContentEntity[]>>) {
    this.setItems = setItems;
  }
}

export function outbrainCallbackError(error: any) {
  console.error(error);
}

//todo -- logic for using correct url instead of dummy dat
export function fetchOutbrainItems(ob: OutbrainCallbackWrapper) {
  const w = window as any;
  const requestData = {
    permalink: DUMMY_URL,
    widgetId: DUMMY_WIDGET,
    installationKey: DUMMY_KEY,
  };
  w.OBR.extern.callRecs(requestData,ob.outbrainCallback, outbrainCallbackError);
}

export type OutbrainResponse = {
  doc: OutbrainResponseItem[];
};

export type OutbrainResponseItem = {
  content: string;
  url: string;
  orig_url?: string;
  source_display_name: string;
  pc_id?: string;
  author?: string;
  desc?: string;
  thumbnail: {
    url: string,
    width: number, 
    height: number
  }
  isVideo?: boolean;
};
