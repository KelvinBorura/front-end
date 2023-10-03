/* global tracking */

import React, { useRef, useEffect } from 'react';
import { useAsync } from 'react-use';


const useTrackingJs = () => {
  const status = useAsync(async () => {
    // Check if tracking is already available in the global scope
    if (typeof tracking !== 'undefined') {
      return 'tracking.js loaded';
    } else {
      // Load the tracking.js script dynamically
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'path/to/tracking.js'; // Replace with the actual path
        script.async = true;
        script.onload = () => {
          tracking.on('ready', () => {
            resolve('tracking.js loaded');
          });
        };
        document.head.appendChild(script);
      });
    }
  });

  return status;
};




const FaceDetection = ({ videoRef }) => {
  const canvasRef = useRef(null);

  const trackingJsStatus = useTrackingJs();

  useEffect(() => {
    if (trackingJsStatus.value === 'tracking.js loaded') {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const startFaceDetection = () => {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        tracking.track(videoRef.current, faceTracker);
      };

      const faceTracker = new tracking.ObjectTracker('face'); // Use ObjectTracker directly
      faceTracker.setInitialScale(4);
      faceTracker.setStepSize(2);
      faceTracker.setEdgesDensity(0.1);

      // Define a custom track event for face tracking
      faceTracker.on('track', (event) => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(rect => {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        });
      });

      videoRef.current.addEventListener('play', () => {
        const interval = setInterval(startFaceDetection, 1000 / 30);

        return () => {
          clearInterval(interval);
        };
      });
    }
  }, [trackingJsStatus, videoRef]);

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};


export default FaceDetection;
