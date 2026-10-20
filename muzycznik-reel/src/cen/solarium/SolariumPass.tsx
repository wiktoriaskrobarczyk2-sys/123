import React from 'react';
import {AbsoluteFill,Img,staticFile,interpolate,useCurrentFrame,useVideoConfig,Easing} from 'remotion';
import {Font} from '../Stage';
import {cen} from '../palette';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const Pass:React.FC<{minutes:number;price:string;number:number}>=({minutes,price,number})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 const turn=interpolate(f,[0,1.6*fps,2.6*fps,4.5*fps,5.5*fps,6*fps],[-12,-5,175,185,347,350],{...clamp,easing:Easing.bezier(.45,0,.25,1)});
 return <AbsoluteFill style={{background:cen.navy,color:cen.white,fontFamily:'Cen Montserrat, sans-serif'}}>
  <Font/>
  <AbsoluteFill style={{background:'radial-gradient(ellipse at 55% 48%,#1c83c94d,transparent 60%)'}}/>
  <div style={{position:'absolute',left:80,top:114,borderLeft:`4px solid ${cen.blue}`,paddingLeft:24}}><div style={{fontSize:48,fontWeight:800,letterSpacing:4,lineHeight:1}}>CEN</div><div style={{fontSize:23,fontWeight:600,letterSpacing:5,marginTop:12}}>WYDMINY</div></div>
  <div style={{position:'absolute',right:80,top:126,fontSize:21,fontWeight:650,letterSpacing:3,textAlign:'right',lineHeight:1.6}}>SOLARIUM<br/><span style={{color:cen.blue}}>KARNETY</span></div>
  <div style={{position:'absolute',top:345,left:80,right:80,opacity:interpolate(f,[0,.35*fps],[.4,1],clamp)}}>
   <div style={{fontSize:30,fontWeight:700,letterSpacing:3,color:cen.blue,marginBottom:20}}>WYBIERZ SWÓJ KARNET</div>
   <div style={{fontSize:112,fontWeight:800,letterSpacing:-4,lineHeight:1.03}}>{minutes} minut.</div>
   <div style={{fontSize:33,fontWeight:550,marginTop:25}}>Drukowany. Dwustronny. Twój.</div>
  </div>
  <div style={{position:'absolute',top:695,left:0,width:1080,height:500,perspective:1700}}>
   <div style={{position:'absolute',top:30,left:90,width:900,height:390,transformStyle:'preserve-3d',transform:`rotateX(-8deg) rotateY(${turn}deg) rotateZ(-3deg)`,translate:`0 ${interpolate(f,[0,6*fps],[12,-10],clamp)}px`}}>
    <div style={{position:'absolute',inset:0,background:'#dce2e7',transform:'translateZ(-1px)',borderRadius:5}}/>
    <div style={{position:'absolute',inset:0,background:'#e7ecf1',transform:'translateZ(0px)',borderRadius:5}}/>
    <div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',transform:'translateZ(1px)',borderRadius:5,overflow:'hidden',boxShadow:'0 30px 70px #0008',background:cen.navy}}>
     <Img src={staticFile(`cen/solarium/pass-${minutes}-front.png`)} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
    </div>
    <div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',transform:'rotateY(180deg) translateZ(2px)',borderRadius:5,overflow:'hidden',boxShadow:'0 30px 70px #0008',background:'white'}}>
     <Img src={staticFile(`cen/solarium/pass-${minutes}-back.png`)} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
    </div>
   </div>
  </div>
  <div style={{position:'absolute',top:1210,left:80,right:80,textAlign:'center'}}>
   <div style={{fontSize:26,letterSpacing:3,color:'#a4c8e5',fontWeight:650}}>{turn>90&&turn<270?'TYŁ • POLA DO ZAZNACZANIA MINUT':'PRZÓD • TWÓJ KARNET'}</div>
   <div style={{marginTop:60,fontSize:91,fontWeight:800,letterSpacing:-3}}>{price} zł</div>
   <div style={{display:'inline-block',marginTop:25,background:cen.blue,padding:'18px 30px',borderRadius:3,fontSize:30,fontWeight:650}}>Karnet {minutes} minut</div>
  </div>
  <div style={{position:'absolute',left:80,right:80,bottom:145,borderTop:'1px solid #ffffff40',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontSize:25,fontWeight:550,letterSpacing:2}}>CEN WYDMINY • SOLARIUM</div><div style={{color:cen.blue,fontSize:21,fontWeight:600}}>0{number} / 06</div></div>
 </AbsoluteFill>;
};
export const SolariumPass50=()=> <Pass minutes={50} price="115" number={4}/>;
export const SolariumPass100=()=> <Pass minutes={100} price="230" number={5}/>;
