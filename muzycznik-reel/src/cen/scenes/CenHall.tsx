import {Video} from '@remotion/media';
import {staticFile,useVideoConfig} from 'remotion';
import {Stage,shotStyle} from '../Stage';
export const CenHall=()=>{
 const {fps}=useVideoConfig();
 return <Stage category="HALA SPORTOWA 25 × 17 M" headline={<>Trening<br/>niezależnie<br/>od pogody.</>} number={2} ><Video src={staticFile("cen/hall.mp4")} muted premountFor={fps} objectFit="cover" style={shotStyle}/></Stage>;
};
