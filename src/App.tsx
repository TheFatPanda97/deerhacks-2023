import { useRef, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { grey } from '@mui/material/colors';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as fp from 'fingerpose';
import * as handpose from '@tensorflow-models/handpose';

import { drawRect, drawHand } from './utilities';

const App = () => {
  const [detectMode, setDetectMode] = useState<'spell' | 'word'>('spell');
  const [cameraMode, setCameraMode] = useState<'user' | 'environment'>('user');
  const [mirrored, setMirrored] = useState(true);
  // const [typed, setTyped] = useState<any>(null);
  const [detectedText, setDetectedText] = useState('');

  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let webcamWidth, webcamHeight;

  if (window.innerWidth > window.innerHeight) {
    webcamWidth = window.innerWidth;
    webcamHeight = window.innerHeight;
  } else {
    webcamWidth = window.innerHeight;
    webcamHeight = window.innerWidth;
  }

  // Main function
  const runCoco = async () => {
    // // 3. TODO - Load network
    // const net = await tf.loadGraphModel(
    //   'https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json',
    // );

    //  Loop and detect hands
    setInterval(() => {
      detect();
    }, 16.7);
  };

  const detect = async () => {
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

      // // 4. TODO - Make Detections
      // const img = tf.browser.fromPixels(video);
      // const resized = tf.image.resizeBilinear(img, [640, 480]);
      // const casted = resized.cast('int32');
      // const expanded = casted.expandDims(0);
      // const obj = await net.executeAsync(expanded);
      // console.log(obj);

      const net = await handpose.load();

      const hand = await net.estimateHands(video);

      const GE = new fp.GestureEstimator([fp.Gestures.ThumbsUpGesture]);

      const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);

      console.log(hand);

      const ctx = canvasRef.current?.getContext('2d');
      ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);
      drawHand(hand, ctx);

      // if (Array.isArray(obj)) {
      //   const boxes: any = await obj[1].array();
      //   const classes: any = await obj[2].array();
      //   const scores: any = await obj[4].array();

      //   // Draw mesh
      //   const ctx = canvasRef.current?.getContext('2d');

      //   if (ctx) {
      //     requestAnimationFrame(() => {
      //       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      //       const currText = drawRect(
      //         boxes[0],
      //         classes[0],
      //         scores[0],
      //         0.8,
      //         videoWidth,
      //         videoHeight,
      //         ctx,
      //       );

      //       if (currText && currText !== detectedText) {
      //         setDetectedText(currText);
      //       }
      //     });
      //   }
      // }

      // tf.dispose(img);
      // tf.dispose(resized);
      // tf.dispose(casted);
      // tf.dispose(expanded);
      // tf.dispose(obj);
    }
  };

  useEffect(() => {
    runCoco();
  });

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          zIndex: 998,
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <Webcam
        ref={webcamRef}
        muted
        videoConstraints={{
          width: webcamWidth,
          height: webcamHeight,
          facingMode: cameraMode,
        }}
        // mirrored={mirrored}
      />
      <div
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          height: 40,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {/* <Typed
          typedRef={(typed: any) => {
            setTyped(typed);
          }}
          strings={detectedText}
          typeSpeed={20}
          style={{
            color: 'white',
            position: 'absolute',
            bottom: 65,
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 10,
            fontSize: 14,
          }}
          showCursor={false}
        /> */}
        <p
          style={{
            color: 'white',
            position: 'absolute',
            bottom: 65,
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 10,
            fontSize: 14,
          }}
        >
          {detectedText}
        </p>
        <button
          onClick={() => setDetectMode('spell')}
          style={{
            borderRadius: 30,
            paddingLeft: 30,
            paddingRight: 30,
            borderColor: 'transparent',
            marginRight: 10,
            backgroundColor: detectMode === 'spell' ? 'white' : 'black',
            color: detectMode === 'spell' ? 'black' : 'white',
            fontSize: 14,
          }}
        >
          Spell
        </button>
        <button
          onClick={() => setDetectMode('word')}
          style={{
            borderRadius: 30,
            paddingLeft: 30,
            paddingRight: 30,
            borderColor: 'transparent',
            marginLeft: 10,
            backgroundColor: detectMode === 'word' ? 'white' : 'black',
            color: detectMode === 'word' ? 'black' : 'white',
            fontSize: 14,
          }}
        >
          Word
        </button>
      </div>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        style={{ position: 'absolute', bottom: 10, right: 15, zIndex: 9999 }}
        onClick={() => {
          if (cameraMode === 'user') {
            setCameraMode('environment');
            setTimeout(() => {
              setMirrored(false);
            }, 740);
          } else {
            setCameraMode('user');
            setTimeout(() => {
              setMirrored(true);
            }, 740);
          }

          // typed?.reset();
        }}
      >
        <CameraswitchIcon sx={{ color: grey[50] }} />
      </IconButton>
    </div>
  );
};

export default App;
