import React from 'react';
import {AbsoluteFill,Img,Composition,Folder,Series,staticFile,interpolate,useCurrentFrame,useVideoConfig,Easing} from 'remotion';
import {Font} from '../Stage';
import {cen} from '../palette';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const SolariumFrame:React.FC<{photo:string;label:string;headline:React.ReactNode;subline:string;number:number;closing?:boolean}>=({photo,label,headline,subline,number,closing=false})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:cen.navy,color:cen.white,fontFamily:'Cen Montserrat, sans-serif'}}>
  <Font/>
  <Img src={staticFile(photo)} style={{position:'absolute',width:'100%',height:'100%',objectFit:'cover',filter:'blur(45px)',opacity:.2}}/>
  <div style={{position:'absolute',left:48,right:48,top:295,height:1040,overflow:'hidden',borderRadius:4}}>
   <Img src={staticFile(photo)} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'50% 52%',scale:interpolate(f,[0,5*fps],[1,1.065],clamp)}}/>
  </div>
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(2,28,65,.2) 0%,transparent 48%,rgba(2,28,65,.4) 61%,#021c41 72%)'}}/>
  <div style={{position:'absolute',left:80,top:114,borderLeft:`4px solid ${cen.blue}`,paddingLeft:24}}>
   <div style={{fontSize:48,fontWeight:800,letterSpacing:4,lineHeight:1}}>CEN</div>
   <div style={{fontSize:23,fontWeight:600,letterSpacing:5,marginTop:12}}>WYDMINY</div>
  </div>
  <div style={{position:'absolute',right:80,top:126,fontSize:21,fontWeight:650,letterSpacing:3,textAlign:'right',lineHeight:1.6}}>SOLARIUM<br/><span style={{color:cen.blue}}>JUŻ OTWARTE</span></div>
  <div style={{position:'absolute',left:80,right:90,bottom:320,opacity:interpolate(f,[0,.25*fps],[.4,1],clamp),translate:`0 ${interpolate(f,[0,.5*fps],[24,0],{...clamp,easing:Easing.bezier(.16,1,.3,1)})}px`}}>
   <div style={{width:112,height:5,background:cen.blue,marginBottom:26}}/>
   <div style={{fontSize:30,fontWeight:700,letterSpacing:3,color:cen.blue,marginBottom:20}}>{label}</div>
   <div style={{fontSize:closing?91:104,fontWeight:800,lineHeight:1.03,letterSpacing:-4}}>{headline}</div>
   <div style={{fontSize:32,fontWeight:550,marginTop:25,lineHeight:1.4}}>{subline}</div>
   {closing&&<div style={{display:'inline-block',background:cen.blue,padding:'18px 30px',fontSize:31,fontWeight:700,marginTop:27,borderRadius:3}}>Zapraszamy do CEN Wydminy ↗</div>}
  </div>
  <div style={{position:'absolute',left:80,right:80,bottom:145,borderTop:'1px solid #ffffff40',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
   <div style={{fontSize:25,fontWeight:550,letterSpacing:2}}>CEN WYDMINY • SOLARIUM</div>
   <div style={{color:cen.blue,fontSize:21,fontWeight:600}}>{String(number).padStart(2,'0')} / 04</div>
  </div>
  <div style={{position:'absolute',bottom:0,left:0,height:5,background:cen.blue,width:`${interpolate(f,[0,5*fps],[0,100],clamp)}%`}}/>
 </AbsoluteFill>;
};
export const SolariumOpening=()=> <SolariumFrame photo="cen/solarium/device.jpg" label="NOWOŚĆ W CEN WYDMINY" headline={<>Solarium<br/>już otwarte!</>} subline="Zajrzyj do naszego wnętrza." number={1}/>;
export const SolariumDevice=()=> <SolariumFrame photo="cen/solarium/detail.jpg" label="ZOBACZ Z BLISKA" headline={<>Oto nasze<br/>solarium.</>} subline="CEN Wydminy" number={2}/>;
export const SolariumCosmetics=()=> <SolariumFrame photo="cen/solarium/cosmetics.jpg" label="NA MIEJSCU" headline={<>Kosmetyki<br/>do solarium.</>} subline="Poznaj dostępny wybór." number={3}/>;
export const SolariumClosing=()=> <SolariumFrame photo="cen/solarium/device.jpg" label="JUŻ MOŻESZ NAS ODWIEDZIĆ" headline={<>Solarium<br/>w CEN Wydminy.</>} subline="Jesteśmy otwarci. Do zobaczenia!" number={4} closing/>;
export const SolariumReel=()=>{const {fps}=useVideoConfig();return <Series>
 <Series.Sequence name="Solarium już otwarte" durationInFrames={4*fps} premountFor={fps}><SolariumOpening/></Series.Sequence>
 <Series.Sequence name="Urządzenie z bliska" durationInFrames={3*fps} premountFor={fps}><SolariumDevice/></Series.Sequence>
 <Series.Sequence name="Kosmetyki na miejscu" durationInFrames={3*fps} premountFor={fps}><SolariumCosmetics/></Series.Sequence>
 <Series.Sequence name="Zapraszamy" durationInFrames={5*fps} premountFor={fps}><SolariumClosing/></Series.Sequence>
 </Series>;};
export const SolariumCompositions=()=> <Folder name="CEN-Solarium">
 <Composition id="CenSolarium" component={SolariumReel} durationInFrames={450} fps={30} width={1080} height={1920}/>
 <Composition id="SolariumOpening" component={SolariumOpening} durationInFrames={120} fps={30} width={1080} height={1920}/>
 <Composition id="SolariumDevice" component={SolariumDevice} durationInFrames={90} fps={30} width={1080} height={1920}/>
 <Composition id="SolariumCosmetics" component={SolariumCosmetics} durationInFrames={90} fps={30} width={1080} height={1920}/>
 <Composition id="SolariumClosing" component={SolariumClosing} durationInFrames={150} fps={30} width={1080} height={1920}/>
 </Folder>;
