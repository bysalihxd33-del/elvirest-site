window.R='https://raw.githubusercontent.com/bysalihxd33-del/elvirest-site/tmp-nk-q7z/';
window.SL=ms=>new Promise(r=>setTimeout(r,ms));
const U='https://d8j0ntlcm91z4.cloudfront.net/user_3JQfT48ldCNuzZzIhr2ccF3AAse/hf_2026111';
window.BG={wood:U+'7_064442_f168d884-fcc5-4b0a-9a75-420c884184af.png',marble:U+'7_064442_3b1beb41-8b50-4646-a6d6-58428833f653.png',nye:U+'7_064525_c9273abf-db3a-49cb-97cc-42b041e1d30b.png',love:U+'7_064525_31bdf81a-a5ec-4842-aa65-7c37a9ce2fc7.png',baby:U+'7_064442_2269edc7-561f-4f68-8b04-c1f59260b2b6.png',kids:U+'7_064604_7c23070f-6aed-470f-9317-47bfada77871.png',bridal:U+'7_064657_0a7cc8aa-51aa-452b-89d8-b1ba065e5684.png'};
const img=src=>new Promise((ok,no)=>{const i=new Image(); i.crossOrigin='anonymous'; i.onload=()=>ok(i); i.onerror=no; i.src=src;});
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath();}
window.COVER=async function(pid,bgk,title,sub,dark){
 const W=2000,H=1500,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
 const bg=await img(BG[bgk]); const s=Math.max(W/bg.width,H/bg.height); x.drawImage(bg,(W-bg.width*s)/2,(H-bg.height*s)/2,bg.width*s,bg.height*s);
 const P=[]; for(let k=0;k<3;k++) P.push(await img(R+'pg/'+pid+'_'+k+'.jpg'));
 const land=P[0].width>P[0].height; const ph=land?720:900;
 const place=(im,cx,cy,ang,h)=>{const w=im.width*h/im.height;x.save();x.translate(cx,cy);x.rotate(ang*Math.PI/180);x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=40;x.shadowOffsetY=18;x.fillStyle='#fff';x.fillRect(-w/2,-h/2,w,h);x.shadowColor='transparent';x.drawImage(im,-w/2,-h/2,w,h);x.restore();};
 place(P[1],W/2-330,H/2+90,-9,ph*0.92); place(P[2],W/2+330,H/2+90,9,ph*0.92); place(P[0],W/2,H/2+70,0,ph);
 x.font='600 66px Georgia, "Times New Roman", serif'; const tw=Math.max(x.measureText(title).width, 700)+120;
 x.save();x.shadowColor='rgba(0,0,0,0.25)';x.shadowBlur=24;x.fillStyle=dark?'rgba(20,24,40,0.88)':'rgba(255,252,245,0.94)';rr(x,(W-tw)/2,40,tw,175,30);x.fill();x.restore();
 x.textAlign='center';x.fillStyle=dark?'#f3d98a':'#2f3b2f';x.fillText(title,W/2,125);
 x.font='500 34px "Helvetica Neue", Arial, sans-serif';x.fillStyle=dark?'#ffffff':'#9a6b3c';x.fillText(sub,W/2,180);
 x.font='700 30px "Helvetica Neue", Arial, sans-serif';const bt='INSTANT DOWNLOAD  •  EDITABLE PDF',bw=x.measureText(bt).width+80;
 x.save();x.shadowColor='rgba(0,0,0,0.25)';x.shadowBlur=18;x.fillStyle='#b8323f';rr(x,(W-bw)/2,H-120,bw,74,37);x.fill();x.restore();x.fillStyle='#fff';x.fillText(bt,W/2,H-72);
 return await new Promise(r=>c.toBlob(r,'image/jpeg',0.9));};
window.SHOW=async function(pid,bgk,t,s,d){const b=await COVER(pid,bgk,t,s,d);let o=document.getElementById('ov');if(!o){o=document.createElement('div');o.id='ov';o.style='position:fixed;inset:0;z-index:99999;background:#fff';document.body.appendChild(o);}o.innerHTML='';const i=document.createElement('img');i.src=URL.createObjectURL(b);i.style='width:100%';o.appendChild(i);return b.size;};
window.M={
p1:['wood','Christmas Party Games','7 Printable Games  ·  Family & Office',4618771053,5],
p2:['marble','Secret Santa Kit','Fillable Wish Lists  ·  Office & Family',4618780376,5],
p3:['wood','Christmas Bucket List','Family Traditions  ·  Countdown',4618774059,4],
p4:['wood','Letter from Santa','Personalized  ·  Fillable  ·  2 Designs',4618815189,8],
p5:['marble','Nice List Certificate',"Fillable Child's Name  ·  2 Designs",4618825526,8],
p6:['marble','Christmas Gift Tags','36 Tags  ·  Includes From Santa',4618826412,8],
p7:['wood','Christmas Eve Box Kit','Box Labels  ·  Cards  ·  Reindeer Food',4618827278,8],
p8:['wood','Ultimate Christmas Bundle','7 Printable Sets  ·  Save 40%',4618819695,8],
p9:['wood','Advent Activity Cards','24 Days of Christmas Fun',4618846373,8],
p10:['marble','Christmas Scavenger Hunt','12 Clue Cards  ·  Ages 4-10',4618855842,8],
p11:['wood','Christmas Pictionary & Charades','54 Game Cards',4618848723,8],
p12:['marble','Christmas Dinner Menu','Fillable Menu  ·  Place Cards',4618849367,8],
p13:['marble','Holiday Budget Planner','Gift Tracker  ·  Card List',4618850069,8],
p14:['wood','Kids Thank You Notes','Fill-in & Draw  ·  8 Notes',4618859170,8],
p15:['nye',"New Year's Eve Games",'5 Games for Family & Friends',4618859952,8,1],
p16:['wood','Christmas Story Game','Silly Fill-in-the-Blank Fun',4618867066,8],
p17:['marble','Christmas Recipe Cards','Fillable Family Keepsake',4618868186,8],
p18:['wood','Teacher Gift Tags','24 Punny Christmas Tags',4618869112,8],
p19:['marble','Christmas Photo Hunt','30 Photo Challenges',4618870250,8],
p20:['wood','Ugly Sweater Party Kit','Awards  ·  Ballots  ·  Sign',4618871206,8],
p21:['marble','Cookie Exchange Kit','Invite  ·  Labels  ·  Sign-Up',4618863597,8],
p22:['nye','Kids New Year Goals 2027','Goal Sheet  ·  Time Capsule',4618864517,8,1],
p23:['love',"Kids Valentine's Cards",'24 Punny Classroom Cards',4618865291,8],
p24:['love','Love Coupons','24 Coupons for Him or Her',4618874568,8],
p25:['love','Reasons I Love You','Fillable Love Notes Keepsake',4618866761,8],
p26:['love',"Galentine's Party Games",'4 Games for Besties',4618867439,8],
p27:['kids','Kids Birthday Party Games','5 Games  ·  Ages 5-10',4618876718,8],
p28:['baby','Baby Shower Games','5 Games  ·  Gender Neutral',4618877360,8],
p29:['bridal','Bridal Shower Games','5 Elegant Games',4618878052,8],
p30:['baby','Weekly Meal Planner','Meal Plan  ·  Grocery List',4618880148,8]};
window.UP=async function(pid){const m=M[pid]; const b=await COVER(pid,m[0],m[1],m[2],m[5]); const inp=document.querySelector('input[name=listing-media-upload]'); const dt=new DataTransfer(); dt.items.add(new File([b],pid+'-cover.jpg',{type:'image/jpeg'})); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true})); window.scrollTo(0,0); const n=m[4]; return [285+(n%5)*103, 425+Math.floor(n/5)*87];};
window.PUB=async function(){const f=[...document.querySelectorAll('img')].filter(i=>{const r=i.getBoundingClientRect(); return r.width>60&&r.width<200&&r.top>300&&r.top<700})[0]?.src||''; [...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Publish changes')?.click(); await SL(7000); return [f.slice(40,60), location.href.slice(-10)];};
