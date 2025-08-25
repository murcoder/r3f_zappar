import React, {useState} from 'react';
import {ZapparCamera, ImageTracker, ZapparCanvas} from '@zappar/zappar-react-three-fiber';
import NavBar from "@/components/NavBar";
import {Experience} from "./components/Experience";
import {Button} from "./components/ui/button";

// @see https://docs.zap.works/universal-ar/react-threejs/tracking/image-tracking/
const targetFile = new URL('./assets/zappar.zpt', import.meta.url).href;

function App () {
  const [started, setStarted] = useState(false);
  const [targetFound, setTargetFound] = useState(false);

  return (
    <>
      <NavBar />
      {/* Top-centered button */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000]">
        <Button variant={"outline"} className={"cursor-pointer font-bold"} onClick={() => setStarted(!started)}>
          {started ? "Stop" : "Enter AR"}
        </Button>
      </div>

      {started && (
      <ZapparCanvas className="absolute top-0 left-0 w-full h-full">
        <ZapparCamera/>
        <ImageTracker
          onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
          onVisible={() => {
            console.log("Target visible");
            setTargetFound(true);
          }}
          onNotVisible={() => {
            console.log("Target not visible");
            setTargetFound(false);
          }}
          targetImage={targetFile}
        >
          {targetFound && <Experience />}
        </ImageTracker>
        <ambientLight intensity={4}/>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} castShadow/>
      </ZapparCanvas>
      )}
    </>
  );
}

export default App;
