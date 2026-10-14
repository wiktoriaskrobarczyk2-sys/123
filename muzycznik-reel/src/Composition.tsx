import {AbsoluteFill, Composition, Folder, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Opening} from './Opening';
import {Inside} from './Inside';
import {Finale} from './Finale';
import {ease, palette} from './Design';
export const Reel = () => {
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill>
  <Sequence name="Obrót produktu" durationInFrames={5*fps} premountFor={fps}><Opening/></Sequence>
  <Sequence name="Otwarcie i kartki" from={5*fps} durationInFrames={9*fps} premountFor={fps}><Inside/></Sequence>
  <Sequence name="Już wkrótce" from={14*fps} durationInFrames={4*fps} premountFor={fps}><Finale/></Sequence>
  <AbsoluteFill style={{background:palette.pink,opacity:interpolate(f,[4.7*fps,5*fps,5.25*fps],[0,1,0],ease),pointerEvents:'none'}}/>
  <AbsoluteFill style={{background:palette.dark,opacity:interpolate(f,[13.7*fps,14*fps,14.25*fps],[0,1,0],ease),pointerEvents:'none'}}/>
  <AbsoluteFill style={{background:palette.lime,opacity:interpolate(f,[17.75*fps,18*fps],[0,1],ease),pointerEvents:'none'}}/>
 </AbsoluteFill>;
};
export const MyComposition = () => <>
 <Composition id="MuzycznikReel" component={Reel} durationInFrames={540} fps={30} width={1080} height={1920}/>
 <Folder name="Scenes">
  <Composition id="Opening" component={Opening} durationInFrames={150} fps={30} width={1080} height={1920}/>
  <Composition id="Inside" component={Inside} durationInFrames={270} fps={30} width={1080} height={1920}/>
  <Composition id="Finale" component={Finale} durationInFrames={120} fps={30} width={1080} height={1920}/>
 </Folder>
</>;
