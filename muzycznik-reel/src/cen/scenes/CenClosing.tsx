import {Video} from '@remotion/media';
import {staticFile,useVideoConfig} from 'remotion';
import {Stage,shotStyle} from '../Stage';
export const CenClosing=()=>{
 const {fps}=useVideoConfig();
 return <Stage category="CEN WYDMINY / MAZURY" headline={<>Zorganizuj<br/>obóz zimowy<br/>w CEN Wydminy.</>} number={8} closing><Video src={staticFile("cen/exterior.mp4")} muted premountFor={fps} objectFit="cover" style={shotStyle}/></Stage>;
};
