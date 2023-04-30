import * as fp from 'fingerpose';

const hSpell = new fp.GestureDescription('h');
hSpell.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.6);
hSpell.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
hSpell.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.8);
hSpell.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.8);
hSpell.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
hSpell.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
hSpell.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);


export default hSpell;
