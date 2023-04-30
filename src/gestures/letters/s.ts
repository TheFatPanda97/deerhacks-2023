import * as fp from 'fingerpose';

const sSpell = new fp.GestureDescription('s');
// sSpell.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
// sSpell.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1);
// sSpell.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.5);
// sSpell.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.5);
// sSpell.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1);
// sSpell.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1);

//Thumb
sSpell.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
sSpell.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1);

//Index
sSpell.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
sSpell.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.7);

//Middle
sSpell.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
sSpell.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.7);

//Ring
sSpell.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
sSpell.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.7);

//Pinky
sSpell.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
sSpell.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.7);

export default sSpell;
