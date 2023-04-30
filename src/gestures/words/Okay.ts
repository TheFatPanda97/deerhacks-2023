import * as fp from 'fingerpose';

const okayGesture = new fp.GestureDescription('Okay');
okayGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
okayGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.9);
okayGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.9);
okayGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.8);
okayGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.8);
okayGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);

export default okayGesture;
