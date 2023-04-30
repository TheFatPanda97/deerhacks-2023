import * as fp from 'fingerpose';

const whyGesture = new fp.GestureDescription('Why');
whyGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.8);
whyGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
whyGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 0.8);
whyGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.8);
whyGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.8);
whyGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.2);

export default whyGesture;
