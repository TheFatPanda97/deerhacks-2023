import * as fp from 'fingerpose';

const iGesture = new fp.GestureDescription("I (am)");
iGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
iGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.9);
iGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 0.9);
iGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.9);
iGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.9);

export default iGesture;
