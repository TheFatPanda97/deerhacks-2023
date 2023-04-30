import * as fp from 'fingerpose';

const eSpell = new fp.GestureDescription('e');
eSpell.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
eSpell.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.8);
eSpell.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.8);
eSpell.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.8);
eSpell.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.8);
eSpell.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.8);

export default eSpell;
