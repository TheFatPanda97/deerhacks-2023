import { useRef, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { grey } from '@mui/material/colors';

import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import { nextFrame } from '@tensorflow/tfjs';

const App = () => {
  const [detectMode, setDetectMode] = useState<'spell' | 'word'>('spell');
  const [cameraMode, setCameraMode] = useState<'user' | 'environment'>('environment');
  const [mirrored, setMirrored] = useState(false);

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

  const options = [
    {
      label: <span>Foo</span>,
      value: {
        foo: true,
      },
      selectedBackgroundColor: '#0097e6',
    },
    {
      label: 'Bar',
      value: 'bar',
      selectedBackgroundColor: '#fbc531',
    },
  ];

  const onChange = (newValue: any) => {
    console.log(newValue);
  };

  const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar');

  return (
    <div>
      <Webcam
        ref={webcamRef}
        muted
        videoConstraints={{
          width: window.innerHeight,
          height: window.innerWidth,
          facingMode: { exact: cameraMode },
        }}
        mirrored={mirrored}
        // style={{
        //   position: 'absolute',
        //   marginLeft: '0',
        //   marginRight: '0',
        //   padding: 0,
        //   top: 0,
        //   right: 0,
        //   textAlign: 'center',
        // }}
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
        }}
      >
        <CameraswitchIcon sx={{ color: grey[50] }} />
      </IconButton>
    </div>
  );
};

export default App;
