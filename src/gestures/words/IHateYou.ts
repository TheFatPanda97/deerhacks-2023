import * as fp from 'fingerpose';

const hateGesture = new fp.GestureDescription('I hate you');
hateGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
hateGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
hateGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
hateGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.8);
hateGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
hateGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalDown, 1.0);

export default hateGesture;
