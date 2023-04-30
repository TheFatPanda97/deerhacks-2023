import * as fp from 'fingerpose';

const wSpell = new fp.GestureDescription('w');
wSpell.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
wSpell.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
wSpell.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.9);
wSpell.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.9);
wSpell.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9);

export default wSpell;
