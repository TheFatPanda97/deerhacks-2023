import * as fp from 'fingerpose';

const waterGesture = new fp.GestureDescription('Water');
waterGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
waterGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
waterGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.9);
waterGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.9);
waterGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9);
waterGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

export default waterGesture;
