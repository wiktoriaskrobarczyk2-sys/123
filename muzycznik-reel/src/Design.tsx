import React, {useEffect, useState} from 'react';
import {AbsoluteFill, continueRender, delayRender, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
export const palette = {lime:'#AFD117', dark:'#143134', pink:'#F4C1E9', violet:'#9995FA'};
export const ease = {extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const Font: React.FC = () => {
 const [handle]=useState(()=>delayRender('Load Montserrat'));
 useEffect(()=>{document.fonts.load('800 90px Montserrat').then(()=>continueRender(handle));},[handle]);
 return <style>{`@font-face{font-family:Montserrat;src:url('${staticFile('Montserrat.ttf')}') format('truetype');font-weight:100 900;}`}</style>;
};
export const Logo: React.FC<{light?:boolean}> = ({light=false}) => <Img src={staticFile(light?'logo-artyz-white.svg':'logo-artyz.svg')} style={{width:230,height:88,objectFit:'contain'}}/>;
export const BrandShapes: React.FC<{dark?:boolean}> = ({dark=false}) => {
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <>
  <div style={{position:'absolute',right:72,top:130,width:145,height:145,backgroundColor:dark?palette.lime:palette.violet,maskImage:`url(${staticFile('shape-tambourine.svg')})`,maskSize:'contain',maskRepeat:'no-repeat',rotate:`${interpolate(f,[0,6*fps],[0,32],ease)}deg`}}/>
  <div style={{position:'absolute',right:-80,top:635,width:290,height:205,backgroundColor:dark?palette.violet:palette.pink,maskImage:`url(${staticFile('shape-violin.svg')})`,maskSize:'contain',maskRepeat:'no-repeat',rotate:`${interpolate(f,[0,6*fps],[-14,8],ease)}deg`}}/>
  <div style={{position:'absolute',left:-58,top:1330,width:205,height:212,backgroundColor:dark?palette.pink:palette.violet,maskImage:`url(${staticFile('shape-piano.svg')})`,maskSize:'contain',maskRepeat:'no-repeat',rotate:`${interpolate(f,[0,6*fps],[12,-8],ease)}deg`}}/>
 </>;
};
export const Shell: React.FC<{children:React.ReactNode}> = ({children}) => <AbsoluteFill style={{fontFamily:'Montserrat, sans-serif',color:palette.dark}}><Font/>{children}</AbsoluteFill>;
export const Label: React.FC<{children:React.ReactNode}> = ({children}) => <div style={{fontSize:27,fontWeight:650,letterSpacing:5,textTransform:'uppercase',marginBottom:30}}>{children}</div>;
export const Book: React.FC<{rotation:number;tilt?:number;width?:number}> = ({rotation,tilt=-12,width=840}) => {
 const height=width*754/1076;
 return <div style={{position:'relative',width,height,transformStyle:'preserve-3d',transform:`rotateX(${tilt}deg) rotateY(${rotation}deg) rotateZ(-5deg)`}}>
  {Array.from({length:14},(_,i)=><div key={i} style={{position:'absolute',inset:0,background:i%2?'#efeee6':'#fff',border:'1px solid #d2d0c7',borderRadius:4,transform:`translateZ(${-i*1.3}px)`}}/>)}
  <div style={{position:'absolute',inset:0,background:palette.dark,transform:'translateZ(-20px) rotateY(180deg)',backfaceVisibility:'hidden',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center'}}><Img src={staticFile('logo-artyz-white.svg')} style={{width:'48%',height:'auto'}}/></div>
  <Img src={staticFile('cover.png')} style={{position:'absolute',inset:0,width:'100%',height:'100%',backfaceVisibility:'hidden',transform:'translateZ(1px)',borderRadius:4}}/>
  <div style={{position:'absolute',left:0,top:0,width:20,height,background:'linear-gradient(90deg,#e4e3d9,#fff)',transformOrigin:'left',transform:'rotateY(90deg)'}}/>
 </div>;
};
export const Rise: React.FC<{children:React.ReactNode;delay?:number}> = ({children,delay=0}) => {
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <div style={{opacity:interpolate(f,[delay*fps,(delay+.45)*fps],[0,1],ease),translate:`0 ${interpolate(f,[delay*fps,(delay+.55)*fps],[35,0],ease)}px`}}>{children}</div>;
};
