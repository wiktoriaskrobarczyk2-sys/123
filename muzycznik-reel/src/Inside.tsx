import React from 'react';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BrandShapes, ease, Label, Logo, palette, Rise, Shell} from './Design';
import {pageFiles} from './pages';
import {rapidPageFiles} from './rapidPages';

const turnEase = {...ease, easing: Easing.bezier(.32, .05, .65, 1)};
const paper = 'linear-gradient(90deg,#eeede6 0%,#fff 12%,#fafaf5 95%,#dfddd4 100%)';
const face: React.CSSProperties = {position:'absolute',inset:0,width:'100%',height:'100%',backfaceVisibility:'hidden'};

// Both sides belong to one physical leaf. Keep filters and opacity off its
// 3D parent: those flatten the faces and cause mirrored / jumping artwork.
const Leaf: React.FC<{angle:number;front?:string;back?:string;closing?:boolean;z?:number;frontBlur?:number;backBlur?:number}> = ({angle,front,back,closing=false,z=3,frontBlur=0,backBlur=frontBlur}) => <div style={{position:'absolute',left:closing?0:490,top:0,width:490,height:345,transformOrigin:closing?'right center':'left center',transformStyle:'preserve-3d',transform:`translateZ(${z}px) rotateY(${angle}deg)`}}>
 {front?<Img src={staticFile(front)} style={{...face,transform:'translateZ(.3px)',filter:frontBlur?`blur(${frontBlur}px)`:undefined}}/>:<div style={{...face,background:paper,transform:'translateZ(.3px)',border:'1px solid #dcd9d0'}}/>}
 {back?<Img src={staticFile(back)} style={{...face,transform:'rotateY(180deg) translateZ(.3px)',filter:backBlur?`blur(${backBlur}px)`:undefined}}/>:<div style={{...face,background:paper,transform:'rotateY(180deg) translateZ(.3px)',border:'1px solid #dcd9d0'}}/>}
</div>;

// Closely spaced leaves move only through a narrow fan. All faces use
// authentic printed artwork; face blur and short exposure conceal the text.
const riffle = Array.from({length:18},(_,index)=>{
 const start=7.2+.04*index+.16*(1-Math.exp(-index/3));
 return {start,end:start+.16-.005*index};
});

export const Inside = () => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig(); const t=f/fps;
 const opening=t<1.4;
 const closing=t>=8.16;
 const turn1=t>=3.2 && t<3.9;
 const turn2=t>=5.5 && t<6.15;
 const pair=t>=6.15?2:t>=3.9?1:0;
 const active=turn1?{old:0,next:1,start:3.2,end:3.9}:turn2?{old:1,next:2,start:5.5,end:6.15}:null;
 const rightPair=active?active.next:pair;
 const scale=interpolate(f,[0,.2*fps,1.4*fps,1.8*fps,2.2*fps,2.65*fps,3.05*fps,3.2*fps,5.5*fps,6.3*fps,6.9*fps,7.25*fps,8.16*fps,8.82*fps],[840/490,840/490,1,1.32,1.32,1.32,1.32,1,1,1.5,1.5,1.3,1.3,840/490],ease);
 const pan=interpolate(f,[0,.2*fps,1.4*fps,1.8*fps,2.2*fps,2.65*fps,3.05*fps,3.2*fps,5.5*fps,6.3*fps,6.9*fps,7.25*fps,8.16*fps,8.82*fps],[-420,-420,0,300,300,-300,-300,0,0,367,367,0,0,-420],ease);
 const fan=interpolate(f,[7*fps,7.2*fps],[0,58],ease);
 const leftAngle=fan;
 const rightAngle=closing?interpolate(f,[8.16*fps,8.82*fps],[-58,0],turnEase):-fan;
 const fold=interpolate(f,[8.16*fps,8.82*fps],[58,180],turnEase);
 const cursor=Math.max(0,riffle.filter(sheet=>t>=sheet.start).length-1);
 const rapidLeft=rapidPageFiles[(cursor*2+1)%rapidPageFiles.length];
 const rapidRight=rapidPageFiles[(cursor*2+2)%rapidPageFiles.length];
 const leftImage=t>=7.2?rapidLeft:pageFiles[pair*2];
 const rightImage=t>=7?rapidRight:rightPair<2?pageFiles[rightPair*2+1]:rapidPageFiles[0];
 const leftBlur=interpolate(f,[7*fps,7.2*fps],[0,8],ease);
 const showLeftStack=!opening&&!closing;
 return <Shell>
  <AbsoluteFill style={{background:palette.pink}}/>
  <BrandShapes/>
  <div style={{position:'absolute',left:80,top:125}}><Logo/></div>
  <div style={{position:'absolute',left:80,right:80,top:330}}><Rise><Label>Zajrzyj do środka</Label><div style={{fontSize:90,fontWeight:800,lineHeight:1.06,letterSpacing:-2}}>Odkrywaj.<br/><span style={{fontFamily:'"Transforma Mix"'}}>Graj.</span> Rozwijaj się.</div></Rise></div>
  <div style={{position:'absolute',left:50,top:935,width:980,height:345,perspective:2200,transform:`translateX(${pan}px) scale(${scale})`,transformOrigin:'center',transformStyle:'preserve-3d'}}>
   {showLeftStack && <div style={{position:'absolute',left:0,top:0,width:490,height:361,background:'repeating-linear-gradient(0deg,#dedbd2 0px,#dedbd2 1px,#fff 1px,#fff 3px)',transformOrigin:'right center',transform:`translateZ(-4px) rotateY(${leftAngle}deg)`,boxShadow:'0 30px 40px #14313425'}}/>}
   <div style={{position:'absolute',left:490,top:0,width:490,height:361,background:'repeating-linear-gradient(0deg,#dedbd2 0px,#dedbd2 1px,#fff 1px,#fff 3px)',transformOrigin:'left center',transform:`translateZ(-4px) rotateY(${rightAngle}deg)`,boxShadow:'0 30px 40px #14313425'}}/>
   {showLeftStack && <div style={{position:'absolute',left:0,top:0,width:490,height:345,background:'#fcfcf8',transformOrigin:'right center',transform:`rotateY(${leftAngle}deg)`}}><Img src={staticFile(leftImage)} style={{...face,filter:leftBlur?`blur(${leftBlur}px)`:undefined}}/></div>}
   <div style={{position:'absolute',left:490,top:0,width:490,height:345,background:'#fcfcf8',transformOrigin:'left center',transform:`rotateY(${rightAngle}deg)`}}>
    <Img src={staticFile(rightImage)} style={{...face,filter:t>=7||rightPair>=2?'blur(8px)':undefined}}/>
   </div>
   {showLeftStack && t<7 && <div style={{position:'absolute',left:478,top:0,width:24,height:345,background:'linear-gradient(90deg,transparent,#14313422,transparent)'}}/>}
   {opening && <Leaf angle={interpolate(f,[.2*fps,1.4*fps],[0,-180],turnEase)} front="cover.png" back={pageFiles[0]}/>}
   {active && <Leaf angle={interpolate(f,[active.start*fps,active.end*fps],[0,-180],turnEase)} front={pageFiles[active.old*2+1]} back={pageFiles[active.next*2]}/>}
   {riffle.map((sheet,index)=>t>=sheet.start && t<sheet.end?<Leaf key={index} angle={interpolate(f,[sheet.start*fps,sheet.end*fps],[-fan,-(180-fan)],ease)} front={rapidPageFiles[(index*2)%rapidPageFiles.length]} back={rapidPageFiles[(index*2+1)%rapidPageFiles.length]} frontBlur={8} z={5+index*.4}/>:null)}
   {closing && <Leaf closing angle={fold} front={rapidLeft} back="cover.png" frontBlur={8} backBlur={0} z={12}/>}
  </div>
  <div style={{position:'absolute',left:80,right:80,bottom:250,fontSize:42,fontWeight:650,lineHeight:1.3}}><Rise delay={1.4}>{t<7?<>Pierwsze kroki.<br/>Wielka muzyczna przygoda.</>:<>A w środku jeszcze więcej…<br/>Nie zdradzamy wszystkiego!</>}</Rise></div>
 </Shell>;
};
