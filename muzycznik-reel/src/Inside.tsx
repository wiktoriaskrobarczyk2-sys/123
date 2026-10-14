import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrandShapes, ease, Label, Logo, palette, Rise, Shell} from './Design';
import {pageFiles} from './pages';
export const Inside = () => {
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 const angle=interpolate(f,[.3*fps,1.4*fps],[0,-180],ease);
 const zoom=interpolate(f,[0,1.5*fps,1.9*fps,2.6*fps,3.2*fps,3.7*fps,4*fps,4.7*fps,6.2*fps,6.8*fps,7.4*fps,8.4*fps,9*fps],[1,1,1.4,1.4,1.4,1.4,1,1,1,1.6,1.6,1,1],ease);
 const pan=interpolate(f,[0,1.5*fps,1.9*fps,2.6*fps,3.2*fps,3.7*fps,4*fps,6.2*fps,6.8*fps,7.4*fps,8.4*fps],[0,0,315,315,-315,-315,0,0,390,390,0],ease);
 const pairCount=Math.ceil(pageFiles.length/2);
 const turn1=pairCount>1 && f>=4*fps && f<4.6*fps;
 const turn2=pairCount>2 && f>=6.2*fps && f<6.6*fps;
 const pair=f>=6.6*fps && pairCount>2?2:f>=4.6*fps && pairCount>1?1:0;
 const activeTurn=turn1?{old:0,next:1,start:4,end:4.6}:turn2?{old:1,next:2,start:6.2,end:6.6}:null;
 const left=pageFiles[pair*2];
 const right=pageFiles[(activeTurn?activeTurn.next:pair)*2+1];
 return <Shell>
  <AbsoluteFill style={{background:palette.pink}}/>
  <BrandShapes/>
  <div style={{position:'absolute',left:80,top:125}}><Logo/></div>
  <div style={{position:'absolute',left:80,right:80,top:330}}><Rise><Label>Zajrzyj do środka</Label><div style={{fontSize:90,fontWeight:800,lineHeight:1.06,letterSpacing:-5}}>Odkrywaj.<br/>Graj. Rozwijaj się.</div></Rise></div>
  <div style={{position:'absolute',left:50,top:985,width:980,height:345,perspective:1800,transform:`translateX(${pan}px) scale(${zoom})`,transformOrigin:'center'}}>
   <div style={{position:'absolute',inset:'0 0 -16px 0',background:'repeating-linear-gradient(0deg,#e0ddd5 0px,#e0ddd5 1px,#fff 1px,#fff 3px)',borderRadius:5,boxShadow:'0 45px 55px #14313440'}}/>
   <Img src={staticFile(left)} style={{position:'absolute',left:0,top:0,width:490,height:345}}/>
   {(activeTurn?activeTurn.next:pair)<2 && <Img src={staticFile(right)} style={{position:'absolute',right:0,top:0,width:490,height:345}}/>}
   {(activeTurn?activeTurn.next:pair)>=2 && <div style={{position:'absolute',right:0,top:0,width:490,height:345,background:'#fcfcf7'}}/>}
   <div style={{position:'absolute',left:478,top:0,width:24,height:345,background:'linear-gradient(90deg,transparent,#14313422,transparent)'}}/>
   <div style={{position:'absolute',left:490,top:0,width:490,height:345,transformOrigin:'left',transformStyle:'preserve-3d',transform:`rotateY(${angle}deg)`,opacity:f>1.5*fps?0:1}}>
    <Img src={staticFile('cover.png')} style={{position:'absolute',inset:0,width:'100%',height:'100%',backfaceVisibility:'hidden'}}/>
    <Img src={staticFile(pageFiles[0])} style={{position:'absolute',inset:0,width:'100%',height:'100%',backfaceVisibility:'hidden',transform:'rotateY(180deg) translateZ(.5px)'}}/>
   </div>
   {activeTurn && <div style={{position:'absolute',left:490,top:0,width:490,height:345,transformOrigin:'left',transformStyle:'preserve-3d',transform:`rotateY(${interpolate(f,[activeTurn.start*fps,activeTurn.end*fps],[0,-180],ease)}deg)`,filter:`drop-shadow(0 8px 10px #14313430)`}}>
    <Img src={staticFile(pageFiles[activeTurn.old*2+1])} style={{position:'absolute',inset:0,width:'100%',height:'100%',backfaceVisibility:'hidden'}}/>
    <Img src={staticFile(pageFiles[activeTurn.next*2])} style={{position:'absolute',inset:0,width:'100%',height:'100%',backfaceVisibility:'hidden',transform:'rotateY(180deg) translateZ(.5px)'}}/>
   </div>}
   {[{start:7.45,end:7.78},{start:7.78,end:8.02},{start:8.02,end:8.2},{start:8.2,end:8.34},{start:8.34,end:8.45}].map((turn,index)=>f>=turn.start*fps&&f<turn.end*fps?<div key={index} style={{position:'absolute',left:490,top:0,width:490,height:345,background:'linear-gradient(90deg,#f1f0e9,#fff 18%,#f9f9f4)',border:'1px solid #ddd',boxShadow:'0 8px 14px #14313422',transformOrigin:'left',transform:`rotateY(${interpolate(f,[turn.start*fps,turn.end*fps],[0,-180],ease)}deg)`,filter:'blur(2px)'}}/>:null)}
  </div>
  <div style={{position:'absolute',left:80,right:80,bottom:250,fontSize:42,fontWeight:650,lineHeight:1.3}}><Rise delay={1.4}>{f<7.2*fps?<>Pierwsze kroki.<br/>Wielka muzyczna przygoda.</>:<>A w środku jeszcze więcej…<br/>Nie zdradzamy wszystkiego!</>}</Rise></div>
 </Shell>;
};
