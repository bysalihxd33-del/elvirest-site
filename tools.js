window.R='https://raw.githubusercontent.com/bysalihxd33-del/elvirest-site/'+window.SHA+'/';
window.SL=ms=>new Promise(r=>setTimeout(r,ms));
const U='https://d8j0ntlcm91z4.cloudfront.net/user_3JQfT48ldCNuzZzIhr2ccF3AAse/hf_2026111';
window.BG={wood:U+'7_064442_f168d884-fcc5-4b0a-9a75-420c884184af.png',marble:U+'7_064442_3b1beb41-8b50-4646-a6d6-58428833f653.png',love:U+'7_064525_31bdf81a-a5ec-4842-aa65-7c37a9ce2fc7.png'};
const img=src=>new Promise((ok,no)=>{const i=new Image(); i.crossOrigin='anonymous'; i.onload=()=>ok(i); i.onerror=no; i.src=src;});
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath();}
window.COVER=async function(pid,bgk,title,sub){
 const W=2000,H=1500,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
 const bg=await img(BG[bgk]); const s=Math.max(W/bg.width,H/bg.height); x.drawImage(bg,(W-bg.width*s)/2,(H-bg.height*s)/2,bg.width*s,bg.height*s);
 const P=[]; for(let k=0;k<3;k++) P.push(await img(R+'pg/'+pid+'_'+k+'.jpg'));
 const place=(im,cx,cy,ang,h)=>{const w=im.width*h/im.height;x.save();x.translate(cx,cy);x.rotate(ang*Math.PI/180);x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=40;x.shadowOffsetY=18;x.fillStyle='#fff';x.fillRect(-w/2,-h/2,w,h);x.shadowColor='transparent';x.drawImage(im,-w/2,-h/2,w,h);x.restore();};
 place(P[1],W/2-330,H/2+90,-9,830); place(P[2],W/2+330,H/2+90,9,830); place(P[0],W/2,H/2+70,0,900);
 x.font='600 66px Georgia, serif'; const tw=Math.max(x.measureText(title).width,700)+120;
 x.save();x.shadowColor='rgba(0,0,0,0.25)';x.shadowBlur=24;x.fillStyle='rgba(255,252,245,0.94)';rr(x,(W-tw)/2,40,tw,175,30);x.fill();x.restore();
 x.textAlign='center';x.fillStyle='#2f3b2f';x.fillText(title,W/2,125);
 x.font='500 34px Arial, sans-serif';x.fillStyle='#9a6b3c';x.fillText(sub,W/2,180);
 x.font='700 30px Arial, sans-serif';const bt='INSTANT DOWNLOAD  •  EDITABLE PDF',bw=x.measureText(bt).width+80;
 x.save();x.shadowColor='rgba(0,0,0,0.25)';x.shadowBlur=18;x.fillStyle='#b8323f';rr(x,(W-bw)/2,H-120,bw,74,37);x.fill();x.restore();x.fillStyle='#fff';x.fillText(bt,W/2,H-72);
 return await new Promise(r=>c.toBlob(r,'image/jpeg',0.9));};
window.CV={p31:['wood','Christmas Mini Fun Pack','3 Games  ·  Try Us for Under $1'],p32:['wood','Christmas Eve Magic Set','Santa Letter  ·  Nice List  ·  Eve Box'],p33:['marble','Christmas Party Pack','4 Party Kits in One Download'],p34:['love',"Valentine's Love Bundle",'For Kids, Couples & Besties']};
window.F=async(p)=>{const r=await fetch(R+p); return r.ok?await r.blob():null;};
window.A=async function(i){const S=(await fetch(R+'b3.json').then(r=>r.json()))[i];
 const sw=[...document.querySelectorAll('button')].find(b=>/Switch to standard/i.test(b.textContent)); if(sw) sw.click(); await SL(1200);
 const cv=CV[S.id]; const fs=[new File([await COVER(S.id,cv[0],cv[1],cv[2])],S.id+'-cover.jpg',{type:'image/jpeg'})];
 for(let k=1;k<=8;k++){const b=await F(S.id+'/m'+k+'.jpg'); if(b) fs.push(new File([b],S.id+'-'+k+'.jpg',{type:'image/jpeg'}));}
 const v=await F(S.id+'/video.mp4'); if(v) fs.push(new File([v],S.id+'.mp4',{type:'video/mp4'}));
 const inp=document.querySelector('input[type=file]'); const dt=new DataTransfer(); fs.forEach(f=>dt.items.add(f)); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true}));
 await SL(4000); const e=document.querySelector('#listing-editor_category-search-typeahead'); e.scrollIntoView({block:'center'}); await SL(600); return [S.cat,fs.length];};
window.PICK=async function(re){await SL(1200); const o=[...document.querySelectorAll('[role=option]')].find(o=>re.test(o.textContent.trim())); o?.click(); await SL(1500);
 const b=[...document.querySelectorAll('button')].find(b=>/^(Physical|Digital)$/.test(b.textContent.trim())); if(!b) return 'auto'; document.activeElement.blur(); b.scrollIntoView({block:'center'}); await SL(500); b.click(); await SL(800);
 const li=[...document.querySelectorAll('ul[aria-label="Physical or digital listing type"] li')].find(l=>/Digital/.test(l.textContent)); const r=li?.getBoundingClientRect(); return r?[Math.round(r.x+30),Math.round(r.y+r.height/2)]:'nolist';};
window.DFILES=async function(pid,inp){const m=(await fetch(R+'files.json').then(r=>r.json()))[pid]; const dt=new DataTransfer();
 dt.items.add(new File([await F('x/'+pid+'.pdf')],m[0],{type:'application/pdf'})); if(m[2]) dt.items.add(new File([await F('a4/'+pid+'.pdf')],m[1],{type:'application/pdf'}));
 dt.items.add(new File([await F('guide.pdf')],'How-To-Print-And-Fill.pdf',{type:'application/pdf'})); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true})); return dt.files.length;};
window.C=async function(i){const S=(await fetch(R+'b3.json').then(r=>r.json()))[i];
 function setv(el,v){const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype; Object.getOwnPropertyDescriptor(p,'value').set.call(el,v); ['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})));}
 const fi=[...document.querySelectorAll('input[type=file]')].find(x=>x.name!=='listing-media-upload'); if(!fi) return 'NO DIGITAL INPUT';
 const nf=await DFILES(S.id,fi);
 const D=S.name+': '+S.sub+'.\n\nPrint at home in minutes and make the season a little more magical. Instant download, no shipping, no waiting.\n\n★ WHAT\'S INCLUDED (US Letter + A4 versions)\n'+S.inc.map(x=>'• '+x).join('\n')+'\n• Bonus: How to Print & Fill guide\n\n★ HOW IT WORKS\n'+S.how.join('\n')+'\n\n★ GOOD TO KNOW\n• DIGITAL download. No physical item will be shipped.\n• Fillable fields work in free Adobe Acrobat Reader and most browsers, no Canva account needed.\n• Personal use only. Please do not resell or share the file.\n• Something not right? Message us, we reply within 24 hours.\n\n★ COMPLETE THE SET\nBuying more than one? Every file includes a 15% off code for your next order.\n\nThank you for shopping small with NestOfKeepsakes!';
 setv(document.querySelector('#listing-title-input'),S.T); setv(document.querySelector('#listing-description-textarea'),D);
 setv(document.querySelector('#listing-price-input'),S.price); setv(document.querySelector('#listing-quantity-input'),'999');
 document.querySelectorAll('input[name=whoMade]')[0]?.click(); document.querySelectorAll('input[name=isSupply]')[0]?.click();
 const tg=document.querySelector('#listing-tags-input'); const add=[...tg.closest('div').parentElement.querySelectorAll('button')].find(b=>b.textContent.trim()==='Add');
 for(let pass=0;pass<2;pass++){const have=[...document.querySelectorAll('button[aria-label^="Delete tag "]')].map(b=>b.getAttribute('aria-label').slice(11)); for(const t of S.tags.filter(t=>t.length<=20&&!have.includes(t))){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(tg,t); tg.dispatchEvent(new Event('input',{bubbles:true})); await SL(300); add.click(); await SL(800);}}
 return [S.id,nf,document.querySelectorAll('button[aria-label^="Delete tag "]').length];};
window.PUBN=async function(){[...document.querySelectorAll('button')].filter(b=>b.textContent.trim()==='Publish').at(-1).click(); await SL(3000); [...document.querySelectorAll('[role=dialog] button')].filter(b=>b.textContent.trim()==='Publish').at(-1)?.click(); await SL(5000); return location.href.slice(-25);};
window.FIX2=async function(pid){
 const kb=()=>[...document.querySelectorAll('*')].filter(e=>e.childElementCount===0&&/^[\d.]+ kb$/i.test(e.textContent.trim()));
 const old=kb(); const oldN=old.length;
 const fi=[...document.querySelectorAll('input[type=file]')].find(x=>x.name!=='listing-media-upload'); if(!fi) return 'nofi';
 await DFILES(pid,fi); await SL(6000);
 if(kb().length<=oldN) return ['upload?',oldN,kb().length];
 for(const el of old){let p=el; for(let i=0;i<3;i++) p=p.parentElement; const b=[...p.querySelectorAll('button')].find(x=>(x.textContent.trim()||x.getAttribute('aria-label'))==='Remove'); b?.click(); await SL(1000);}
 const left=kb().length;
 [...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Publish changes')?.click(); await SL(6000);
 return [pid,oldN,left,location.href.slice(-10)];};
