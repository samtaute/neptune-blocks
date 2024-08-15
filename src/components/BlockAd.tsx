import { useEffect } from "react";

const w = window as any;

function BlockAd() {
  useEffect(() => {
    const w = window as any;
    let retries = 0;
    let timeoutId: NodeJS.Timeout;

    //check if google and pubwise scripts have been added, then define and render ad. Retry up to 10 times at 10ms intervals.
    const checkLoaded = () => {
      if (w.googletag && w.googletag.pubads) {
        defineSlots();
        renderAd();
      } else if (retries < 10) {
        retries += 1;
        timeoutId = setTimeout(checkLoaded, 50);
      } else {
        console.warn("failed to load pubwise and gpt");
      }
    };
    checkLoaded();
    return ()=>{
      if(timeoutId){
        clearTimeout(timeoutId)
      }
    }
  }, []);

  return (
    <div className="flex w-full justify-center m-2">
      <div className="w-[300px] h-[250px]" id="div-1"></div>
    </div>
  );
}

export default BlockAd;

function defineSlots() {
  if (!w.gptadslots[`div-1`]) {
    w.googletag.cmd.push(function () {
      w.gptadslots["div-1"] = w.googletag
        .defineSlot("/180049092/ROS_CK_SCOOP_WVIEW_EN_TOP", [300, 250], "div-1")
        .addService(w.googletag.pubads());
      console.log("pushed");
    });
  }

  w.googletag.pubads();
}

function renderAd() {
  w.pubwise.que.push(function () {
    w.pubwise.renderAd("div-1");
  });
}
