import React from 'react';
import { ZapparCamera, ImageTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';
import {Sphere} from "@react-three/drei";

const targetFile = new URL('./assets/example-tracking-image.zpt', import.meta.url).href;

function App() {
    return (
      <ZapparCanvas>
        <ZapparCamera />
        <ImageTracker
          onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
          onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
          onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
          targetImage={targetFile}
        >
          <Sphere args={[0.2, 32, 32]} position={[0, 0, -0.5]}>
            <meshStandardMaterial color="orange" />
          </Sphere>
        </ImageTracker>
        <ambientLight intensity={0.3} />
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} castShadow/>
      </ZapparCanvas>
    );
}

export default App;
