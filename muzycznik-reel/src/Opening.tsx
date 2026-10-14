import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Book, BrandShapes, ease, Label, Logo, palette, Rise, Shell} from './Design';
export const Opening = () => {
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <Shell>
  <AbsoluteFill style={{background:palette.lime}}/>
  <BrandShapes/>
  <div style={{position:'absolute',left:80,top:125}}><Logo/></div>
  <div style={{position:'absolute',left:80,right:80,top:330}}>
   <Rise><Label>Muzycznik Artyziaka</Label><div style={{fontSize:84,fontWeight:800,lineHeight:1.06,letterSpacing:-4}}>Już niedługo<br/>dostępny dla<br/>naszych uczniów.</div></Rise>
  </div>
  <div style={{position:'absolute',width:840,height:220,left:120,top:1320,background:'#14313430',filter:'blur(38px)',borderRadius:'50%',scale:interpolate(f,[0,2*fps,4.6*fps],[.7,.9,.72],ease)}}/>
  <div style={{position:'absolute',left:120,top:815,perspective:1800,scale:interpolate(f,[0,.8*fps,4.6*fps],[.85,1,1],ease)}}>
   <Book rotation={interpolate(f,[0,.8*fps,3.8*fps,4.6*fps],[-23,0,360,350],ease)} tilt={-13}/>
  </div>
  <div style={{position:'absolute',left:80,bottom:230,fontSize:40,fontWeight:650,lineHeight:1.3}}><Rise delay={.7}>Wersja drukowana<br/>w naszych placówkach.</Rise></div>
 </Shell>;
};
