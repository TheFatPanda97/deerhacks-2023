import * as fp from 'fingerpose';

const loveGesture = new fp.GestureDescription('I love you');
loveGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
loveGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
loveGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
loveGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.5);
loveGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.5);

export default loveGesture;
