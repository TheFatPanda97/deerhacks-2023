import { useRef, useEffect } from 'react';

import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import { nextFrame } from '@tensorflow/tfjs';

const App = () => {
  const videoConstraints = {
    width: window.innerHeight,
    height: window.innerWidth,
    // facingMode: { exact: 'user' },
    facingMode: 'user',
  };

  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    // https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
    const net = await tf.loadGraphModel(
      'https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json',
    );

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net: tf.GraphModel) => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // // Set canvas height and width
      // canvasRef.current.width = videoWidth;
      // canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast('int32');
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      console.log(obj);

      // const boxes = await obj[1].array();
      // const classes = await obj[2].array();
      // const scores = await obj[4].array();

      // Draw mesh
      // const ctx = canvasRef.current.getContext('2d');

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      // requestAnimationFrame(() => {
      //   drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx);
      // });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    // runCoco();
  }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        muted
        videoConstraints={videoConstraints}
        style={{
          position: 'absolute',
          marginLeft: '0',
          marginRight: '0',
          padding: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default App;
