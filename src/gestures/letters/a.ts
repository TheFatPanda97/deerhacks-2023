import * as fp from 'fingerpose';

const aSpell = new fp.GestureDescription('a');
// aSpell.addCurl(fp.fp.Finger.Thumb, fp.fp.FingerCurl.NoCurl, 0.8);
// aSpell.addCurl(fp.fp.Finger.Index, fp.fp.FingerCurl.FullCurl, 1.0);
// aSpell.addCurl(fp.fp.Finger.Pinky, fp.fp.FingerCurl.FullCurl, 1.0);
// aSpell.addCurl(fp.fp.Finger.Ring, fp.fp.FingerCurl.FullCurl, 1.0);
// aSpell.addCurl(fp.fp.Finger.Middle, fp.fp.FingerCurl.FullCurl, 1.0);
// aSpell.addDirection(fp.fp.Finger.Thumb, fp.fp.FingerDirection.VerticalUp, 1.0);

//Thumb
aSpell.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aSpell.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.7);
// aSpell.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
aSpell.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
aSpell.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.7);
// aSpell.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aSpell.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
aSpell.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.7);
// aSpell.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aSpell.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
aSpell.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.7);

//Pinky
aSpell.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
aSpell.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.7);

export default aSpell;
