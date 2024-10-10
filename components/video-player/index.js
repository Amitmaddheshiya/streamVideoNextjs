import VideoJs from "video.js";
import "videojs-hotkeys";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "videojs-seek-buttons";
import 'video.js/dist/video-js.css';
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import '@videojs/themes/dist/city/index.css';
import '@videojs/themes/dist/fantasy/index.css';
import '@videojs/themes/dist/forest/index.css';
import '@videojs/themes/dist/sea/index.css';

import {
  useRef,
  useEffect
} from "react";

const Index = ()=>{
  const video = useRef();
  const player = useRef(null);

  const options = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: '/index.m3u8',
        type: "application/x-mpegURL"
      }
    ],
    fluid: true,
    playbackRates: [0.5,1,1.5,2,2.5]
  }

  useEffect(()=>{
    player.current = VideoJs(video.current, options);
  },[]);

  // ...

  



  

  

  const design = (
    <div>
      <div className="w-9/12">
        
      <video ref={video} className="video-js vjs-big-play-centered vjs-theme-city">
        <track kind="captions" src="/path/to/captions.vtt" srcLang="en" label="English" />
      </video>
      </div>
    </div>
  );
  return design;
}

export default Index;
