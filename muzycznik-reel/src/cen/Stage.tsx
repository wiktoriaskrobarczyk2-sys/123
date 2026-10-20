import React,{useEffect,useState} from 'react';
import {AbsoluteFill,Img,Easing,interpolate,staticFile,useCurrentFrame,useVideoConfig,delayRender,continueRender,cancelRender} from 'remotion';
import {cen} from './palette';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const Font=()=>{
 const [handle]=useState(()=>delayRender('CEN typography'));
 useEffect(()=>{Promise.all([document.fonts.load('800 100px Cen Montserrat'),document.fonts.load('550 36px Cen Montserrat')]).then(()=>continueRender(handle)).catch(cancelRender);},[handle]);
 return <style>{`@font-face{font-family:'Cen Montserrat';src:url('${staticFile('Montserrat.ttf')}') format('truetype');font-weight:100 900;font-display:block;}`}</style>;
};
export const shotStyle:React.CSSProperties={position:'absolute',inset:0,width:'100%',height:'100%'};
export const CenPhoto:React.FC<{src:string}>=({src})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:cen.navy}}>
  <Img src={staticFile(src)} style={{...shotStyle,filter:'blur(35px)',opacity:.35,scale:1.1}}/>
  <div style={{position:'absolute',left:48,right:48,top:450,height:740,overflow:'hidden',boxShadow:'0 35px 75px #0006',borderRadius:4}}>
   <Img src={staticFile(src)} style={{width:'100%',height:'100%',objectFit:'cover',scale:interpolate(f,[0,3*fps],[1,1.045],clamp)}}/>
  </div>
 </AbsoluteFill>;
};
export const Stage:React.FC<{children:React.ReactNode;category:string;headline:React.ReactNode;number:number;closing?:boolean;intro?:boolean}>=({children,category,headline,number,closing=false,intro=false})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:cen.navy,color:cen.white,fontFamily:'Cen Montserrat, sans-serif'}}>
  <Font/>{children}
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(2,28,65,.64) 0%,rgba(2,28,65,.03) 30%,rgba(2,28,65,.05) 45%,rgba(2,28,65,.83) 74%,rgba(2,28,65,.98) 100%)'}}/>
  <div style={{position:'absolute',left:80,top:114,borderLeft:`4px solid ${cen.blue}`,paddingLeft:24}}>
   <div style={{fontSize:48,fontWeight:800,letterSpacing:4,lineHeight:1}}>CEN</div>
   <div style={{fontSize:23,fontWeight:600,letterSpacing:5,marginTop:12}}>WYDMINY</div>
  </div>
  <div style={{position:'absolute',right:80,top:126,fontSize:21,fontWeight:650,letterSpacing:3,textAlign:'right',lineHeight:1.6}}>MAZURY<br/><span style={{color:cen.white}}>ZIMA / GRUPY</span></div>
  <div style={{position:'absolute',left:80,right:100,bottom:closing?350:330,opacity:interpolate(f,[0,.23*fps],[.45,1],clamp),translate:`0 ${interpolate(f,[0,.45*fps],[28,0],{...clamp,easing:Easing.bezier(.16,1,.3,1)})}px`}}>
   <div style={{width:interpolate(f,[0,.4*fps],[20,112],clamp),height:5,background:cen.blue,marginBottom:30}}/>
   <div style={{fontSize:34,fontWeight:700,letterSpacing:3,color:cen.blue,marginBottom:24,textTransform:'uppercase'}}>{category}</div>
   <div style={{fontSize:closing?88:intro?107:100,fontWeight:800,lineHeight:1.03,letterSpacing:-4}}>{headline}</div>
   {intro&&<div style={{fontSize:34,fontWeight:550,marginTop:30,lineHeight:1.35}}>Trening, regeneracja i integracja<br/>w jednym miejscu.</div>}
   {closing&&<div style={{fontSize:40,fontWeight:650,marginTop:35,color:cen.white,background:cen.blue,padding:'22px 25px',display:'inline-block',borderRadius:3}}>Zapytaj o ofertę dla grup ↗</div>}
  </div>
  <div style={{position:'absolute',left:80,right:80,bottom:145,display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid #ffffff40',paddingTop:23}}>
   <div style={{fontSize:closing?38:25,fontWeight:550,letterSpacing:closing?0:2}}>{closing?'osrodek-mazury.com.pl':'TRENING • REGENERACJA • INTEGRACJA'}</div>
   <div style={{fontSize:21,fontWeight:600,color:cen.blue}}>{String(number).padStart(2,'0')} / 08</div>
  </div>
 </AbsoluteFill>;
};
