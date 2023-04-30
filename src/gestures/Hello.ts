import * as fp from 'fingerpose';

const helloGesture = new fp.GestureDescription('Hello');
helloGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
helloGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.8);

export default helloGesture;
