import {Video} from '@remotion/media';
import {staticFile,useVideoConfig} from 'remotion';
import {Stage,shotStyle} from '../Stage';
export const CenBoxing=()=>{
 const {fps}=useVideoConfig();
 return <Stage category="RING BOKSERSKI" headline={<>Przestrzeń<br/>na Twój trening.</>} number={4} ><Video src={staticFile("cen/boxing.mp4")} muted premountFor={fps} objectFit="cover" style={shotStyle}/></Stage>;
};
