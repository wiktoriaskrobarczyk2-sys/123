import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Book, BrandShapes, ease, Label, Logo, palette, Rise, Shell} from './Design';
export const Finale = () => {
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <Shell>
  <AbsoluteFill style={{background:palette.dark}}/>
  <BrandShapes dark/>
  <div style={{position:'absolute',left:80,top:125}}><Logo light/></div>
  <div style={{position:'absolute',left:80,top:330,color:'#fff'}}><Rise><Label>Muzycznik Artyziaka</Label><div style={{fontSize:96,fontWeight:800,lineHeight:1.06,letterSpacing:-5}}>Moja muzyczna<br/>przygoda.</div></Rise></div>
  <div style={{position:'absolute',left:120,top:815,perspective:1800}}><Book rotation={interpolate(f,[0,2*fps,4*fps],[-22,10,-4],ease)} tilt={-10}/></div>
  <div style={{position:'absolute',left:80,right:80,bottom:265,color:palette.lime}}><Rise delay={.45}><div style={{fontSize:91,fontWeight:800,letterSpacing:-4}}>Już wkrótce!</div><div style={{fontSize:35,fontWeight:550,marginTop:20,color:'#fff'}}>Wersja drukowana</div></Rise></div>
 </Shell>;
};
