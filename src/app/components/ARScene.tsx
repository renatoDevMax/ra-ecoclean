"use client";

import { useEffect, useState } from "react";

export default function ARScene() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // No A-Frame, 1 unidade = aproximadamente 1 metro = 1000px
  // Para ter 3000px x 2000px, precisamos usar 3.0 x 2.0 unidades
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; trackingMethod: best; areaLearning: true; sourceWidth: 1280; sourceHeight: 960;"
      >
        <a-marker preset="hiro" smooth="true" smoothCount="5">
          <a-video
            src="/testandovideo.webm"
            position="0 0.01 0"
            rotation="-90 0 0"
            width="2.0"
            height="1.33"
            material="shader: flat; transparent: true; side: double; depthTest: false; alphaTest: 0.01"
            play="true"
            loop="true"
            crossorigin="anonymous"
            preload="auto"
          />
        </a-marker>
        <a-entity
          camera
          look-controls="enabled: false"
          position="0 0 0"
        ></a-entity>
      </a-scene>
    </div>
  );
}
