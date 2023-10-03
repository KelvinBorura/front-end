import React, { useState, useRef, useEffect } from 'react';
import Camera from './Cameraaccess'; 
import FaceDetection from './FaceDetection'; 

const Detection = () => {
  const [cameraStream, setCameraStream] = useState(null);

  const videoRef = useRef(null);

  useEffect(() => {
    if (cameraStream) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);

  return (
    <div>
      <Camera setCameraStream={setCameraStream} />

      <FaceDetection videoRef={videoRef} />
    </div>
  );
};

export default Detection;
