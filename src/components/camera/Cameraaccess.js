
import React, {  useEffect } from 'react';


const Camera = ({ setCameraStream }) => {

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraStream(stream);
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    }

    startCamera();
  }, [setCameraStream]);
};

export default Camera;
