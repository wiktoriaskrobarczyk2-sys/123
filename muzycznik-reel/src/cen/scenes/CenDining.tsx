import {Video} from '@remotion/media';
import {staticFile,useVideoConfig} from 'remotion';
import {Stage,shotStyle} from '../Stage';
export const CenDining=()=>{
 const {fps}=useVideoConfig();
 return <Stage category="CAŁODZIENNE WYŻYWIENIE" headline={<>Śniadanie.<br/>Obiad. Kolacja.</>} number={6} ><Video src={staticFile("cen/dining.mp4")} muted premountFor={fps} objectFit="cover" style={shotStyle}/></Stage>;
};
