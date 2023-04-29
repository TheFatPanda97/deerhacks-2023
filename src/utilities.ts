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
