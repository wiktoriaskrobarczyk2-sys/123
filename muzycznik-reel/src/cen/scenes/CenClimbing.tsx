import {Video} from '@remotion/media';
import {staticFile,useVideoConfig} from 'remotion';
import {Stage,shotStyle} from '../Stage';
export const CenClimbing=()=>{
 const {fps}=useVideoConfig();
 return <Stage category="ŚCIANKA WSPINACZKOWA" headline={<>Sięgaj<br/>wyżej.</>} number={3} ><Video src={staticFile("cen/climbing.mp4")} muted premountFor={fps} objectFit="cover" style={shotStyle}/></Stage>;
};
