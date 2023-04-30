import * as fp from 'fingerpose';

const yesGesture = new fp.GestureDescription('Yes');
yesGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
yesGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
yesGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
yesGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
yesGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);

export default yesGesture;
