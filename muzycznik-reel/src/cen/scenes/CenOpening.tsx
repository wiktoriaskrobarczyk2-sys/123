import {Video} from '@remotion/media';
import {staticFile,useVideoConfig} from 'remotion';
import {Stage,shotStyle} from '../Stage';
export const CenOpening=()=>{
 const {fps}=useVideoConfig();
 return <Stage category="OBOZY ZIMOWE" headline={<>Twój obóz.<br/>Nasze miejsce.</>} number={1} intro><Video src={staticFile("cen/winter.mp4")} muted premountFor={fps} objectFit="cover" style={shotStyle}/></Stage>;
};
