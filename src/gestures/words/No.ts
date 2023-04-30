import * as fp from 'fingerpose';

const noGesture = new fp.GestureDescription('No');
noGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.8);
noGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.8);
noGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.8);
noGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.8);
noGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.8);

export default noGesture;
