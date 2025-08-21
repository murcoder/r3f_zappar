import React from 'react';
import {ZapparCamera, ImageTracker, ZapparCanvas} from '@zappar/zappar-react-three-fiber';
import NavBar from "@/html/NavBar";
import {Experience} from "./components/Experience";

const targetFile = new URL('./assets/example-tracking-image.zpt', import.meta.url).href;

function App () {
  return (
    <>
      <NavBar />
      <ZapparCanvas className="absolute top-0 left-0 w-full h-full">
        <ZapparCamera/>
        <ImageTracker
          onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
          onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
          onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
          targetImage={targetFile}
        >
          <Experience />
        </ImageTracker>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} castShadow/>
      </ZapparCanvas>
    </>
  );
}

export default App;
