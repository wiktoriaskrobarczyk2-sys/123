import {Composition,Folder,Series,useVideoConfig} from 'remotion';
import {CenOpening} from './scenes/CenOpening';
import {CenHall} from './scenes/CenHall';
import {CenClimbing} from './scenes/CenClimbing';
import {CenBoxing} from './scenes/CenBoxing';
import {CenRooms} from './scenes/CenRooms';
import {CenDining} from './scenes/CenDining';
import {CenSauna} from './scenes/CenSauna';
import {CenClosing} from './scenes/CenClosing';
export const CenReel=()=>{const {fps}=useVideoConfig();return <Series>
  <Series.Sequence name="OBOZY ZIMOWE" durationInFrames={96} premountFor={fps}><CenOpening/></Series.Sequence>
  <Series.Sequence name="HALA SPORTOWA" durationInFrames={102} premountFor={fps}><CenHall/></Series.Sequence>
  <Series.Sequence name="ŚCIANKA WSPINACZKOWA" durationInFrames={81} premountFor={fps}><CenClimbing/></Series.Sequence>
  <Series.Sequence name="RING BOKSERSKI" durationInFrames={81} premountFor={fps}><CenBoxing/></Series.Sequence>
  <Series.Sequence name="POKOJE NOCLEGOWE" durationInFrames={90} premountFor={fps}><CenRooms/></Series.Sequence>
  <Series.Sequence name="JADALNIA" durationInFrames={90} premountFor={fps}><CenDining/></Series.Sequence>
  <Series.Sequence name="SAUNA" durationInFrames={90} premountFor={fps}><CenSauna/></Series.Sequence>
  <Series.Sequence name="CEN WYDMINY / MAZURY" durationInFrames={120} premountFor={fps}><CenClosing/></Series.Sequence>
 </Series>;};
export const CenCompositions=()=> <Folder name="CEN-Wydminy">
 <Composition id="CenWinterCamps" component={CenReel} durationInFrames={750} fps={30} width={1080} height={1920}/>
 <Folder name="CEN-scenes">
  <Composition id="CenOpening" component={CenOpening} durationInFrames={96} fps={30} width={1080} height={1920}/>
  <Composition id="CenHall" component={CenHall} durationInFrames={102} fps={30} width={1080} height={1920}/>
  <Composition id="CenClimbing" component={CenClimbing} durationInFrames={81} fps={30} width={1080} height={1920}/>
  <Composition id="CenBoxing" component={CenBoxing} durationInFrames={81} fps={30} width={1080} height={1920}/>
  <Composition id="CenRooms" component={CenRooms} durationInFrames={90} fps={30} width={1080} height={1920}/>
  <Composition id="CenDining" component={CenDining} durationInFrames={90} fps={30} width={1080} height={1920}/>
  <Composition id="CenSauna" component={CenSauna} durationInFrames={90} fps={30} width={1080} height={1920}/>
  <Composition id="CenClosing" component={CenClosing} durationInFrames={120} fps={30} width={1080} height={1920}/>
 </Folder>
</Folder>;
