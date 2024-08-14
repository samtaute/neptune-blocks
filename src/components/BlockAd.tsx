import { useEffect } from "react";

const w = window as any;

function BlockAd() {
  useEffect(() => {
    const w = window as any; 
    if(w.googletag){
        defineSlots();
        renderAd();
    }

  }, []);

  return <div className="flex w-full justify-center m-2"><div id="div-1"></div></div>
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

  w.googletag.pubads()
}

function renderAd() {
  w.pubwise.que.push(function () {
    w.pubwise.renderAd("div-1");
  });
}
