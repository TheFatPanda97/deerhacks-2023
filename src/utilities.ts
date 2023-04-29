// Define our labelmap
const labelMap = {
  1: { name: 'Hello', color: 'red' },
  2: { name: 'Thank You', color: 'yellow' },
  3: { name: 'I Love You', color: 'lime' },
  4: { name: 'Yes', color: 'blue' },
  5: { name: 'No', color: 'purple' },
};

// Define a drawing function
export const drawRect = (
  boxes: number[][],
  classes: (1 | 2 | 3 | 4 | 5)[],
  scores: number[],
  threshold: number,
  imgWidth: number,
  imgHeight: number,
  ctx: CanvasRenderingContext2D,
) => {
  for (let i = 0; i <= boxes.length; i++) {
    if (boxes[i] && classes[i] && scores[i] > threshold) {
      // Extract variables
      const [y, x, height, width] = boxes[i];
      const text = classes[i];

      // Set styling
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 10;
      ctx.fillStyle = 'white';
      ctx.font = '30px Arial';

      // DRAW!!
      ctx.beginPath();
      ctx.fillText(`${Math.round(scores[i] * 100) / 100}`, x * imgWidth, y * imgHeight - 10);
      // ctx.roundRect();
      // ctx.fillStyle = 'black';
      // ctx.fillRect(window.innerWidth / 2 - 60, window.innerHeight - 104, 190, 40);
      // ctx.fillStyle = 'white';
      // ctx.fillText(labelMap[text]['name'], window.innerWidth / 2 - 40, window.innerHeight - 73);
      ctx.roundRect(
        x * imgWidth,
        y * imgHeight,
        (width * imgWidth) / 2,
        (height * imgHeight) / 1.5,
        10,
      );
      ctx.stroke();
      return labelMap[text]['name'];
    }
  }
};

//finger points
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  index: [0, 5, 6, 7, 8],
  mid: [0, 9, 10, 11, 12],
  ring: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

//drawing function
export const drawHand = (prediction: any[], ctx: any) => {
  //check the prediction
  if (prediction.length > 0) {
    //loop to the preditions
    prediction.forEach((prediction) => {
      //grab landmarks
      const landmarks = prediction.landmarks;

      //loop the finger joints
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        const finger = Object.keys(fingerJoints)[j];

        // @ts-ignore
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // @ts-ignore
          const firstJointIndex = fingerJoints[finger][k];
          // @ts-ignore
          const secondJointIndex = fingerJoints[finger][k + 1];

          //draw joints
          ctx.beginPath();
          ctx.moveTo(landmarks[firstJointIndex][0], landmarks[firstJointIndex][1]);
          ctx.lineTo(landmarks[secondJointIndex][0], landmarks[secondJointIndex][1]);
          ctx.strokeStyle = 'gold';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      //loop to landmarks and draw them
      for (let i = 0; i < landmarks.length; i++) {
        //get x point
        const x = landmarks[i][0];

        //get y point
        const y = landmarks[i][1];

        //start drawing
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);

        //set line color
        ctx.fillStyle = 'navy';
        ctx.fill();
      }
    });
  }
};
