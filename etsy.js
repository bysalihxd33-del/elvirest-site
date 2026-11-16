window.R='https://raw.githubusercontent.com/bysalihxd33-del/elvirest-site/tmp-nk-q7z/';
window.SL=ms=>new Promise(r=>setTimeout(r,ms));
window.A=async function(i,J){const S=(await fetch(R+(J||'b1.json')).then(r=>r.json()))[i];
 const sw=[...document.querySelectorAll('button')].find(b=>/Switch to standard/i.test(b.textContent)); if(sw) sw.click(); await SL(1500);
 const fs=[]; for(let k=1;k<=7;k++){const b=await fetch(R+S.id+'/m'+k+'.jpg').then(r=>r.blob()); fs.push(new File([b],S.file.replace('.pdf','').toLowerCase()+'-'+k+'.jpg',{type:'image/jpeg'}));}
 const vb=await fetch(R+S.id+'/video.mp4').then(r=>r.ok?r.blob():null); if(vb) fs.push(new File([vb],S.id+'-video.mp4',{type:'video/mp4'}));
 const inp=document.querySelector('input[type=file]'); const dt=new DataTransfer(); fs.forEach(f=>dt.items.add(f)); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true}));
 await SL(6000); const e=document.querySelector('#listing-editor_category-search-typeahead'); e.scrollIntoView({block:'center'}); await SL(800); const r=e.getBoundingClientRect(); return [S.cat, Math.round(r.y+r.height/2)];};
window.PICK=async function(re){await SL(1200); const o=[...document.querySelectorAll('[role=option]')].find(o=>re.test(o.textContent.trim())); o?.click(); await SL(1500);
 const b=[...document.querySelectorAll('button')].find(b=>/^(Physical|Digital)$/.test(b.textContent.trim())); if(!b) return ['auto-digital',!!o]; b.scrollIntoView({block:'center'}); await SL(500); const r=b.getBoundingClientRect(); return [b.textContent.trim(), Math.round(r.x+60), Math.round(r.y+r.height/2), !!o];};
window.DIG=function(){const li=[...document.querySelectorAll('ul[aria-label="Physical or digital listing type"] li')].find(l=>/Digital/.test(l.textContent)); const r=li?.getBoundingClientRect(); return r?[Math.round(r.x+40),Math.round(r.y+r.height/2)]:null;};
window.C=async function(i,J){const S=(await fetch(R+(J||'b1.json')).then(r=>r.json()))[i];
 function setv(el,v){const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype; Object.getOwnPropertyDescriptor(p,'value').set.call(el,v); ['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})));}
 const fi=[...document.querySelectorAll('input[type=file]')].find(x=>x.name!=='listing-media-upload'); if(!fi) return 'NO DIGITAL INPUT';
 const b=await fetch(R+S.id+'/'+S.file).then(r=>r.blob()); const dt=new DataTransfer(); dt.items.add(new File([b],S.file,{type:'application/pdf'})); fi.files=dt.files; fi.dispatchEvent(new Event('change',{bubbles:true}));
 const D=S.name+': '+S.sub+'.\n\nPrint at home in minutes and make this season a little more magical. Instant download, no shipping, no waiting.\n\n★ WHAT\'S INCLUDED (US Letter, prints on A4)\n'+S.inc.map(x=>'• '+x).join('\n')+'\n\n★ HOW IT WORKS\n'+S.how.join('\n')+'\n\n★ GOOD TO KNOW\n• This is a DIGITAL download. No physical item will be shipped.\n• Fillable fields work in free Adobe Acrobat Reader and most browsers, or print blank and write by hand.\n• Colors may vary slightly by screen and printer.\n• Personal use only. Please do not resell or share the file.\n• Something not right? Message us and we\'ll fix it fast.\n\nLove our printables? Visit NestOfKeepsakes for more printables for every celebration.\n\nThank you for shopping small with NestOfKeepsakes!';
 setv(document.querySelector('#listing-title-input'),S.T); setv(document.querySelector('#listing-description-textarea'),D);
 setv(document.querySelector('#listing-price-input'),S.price); setv(document.querySelector('#listing-quantity-input'),'999');
 document.querySelectorAll('input[name=whoMade]')[0]?.click(); document.querySelectorAll('input[name=isSupply]')[0]?.click();
 const tg=document.querySelector('#listing-tags-input'); const add=[...tg.closest('div').parentElement.querySelectorAll('button')].find(b=>b.textContent.trim()==='Add');
 for(const t of S.tags.filter(t=>t.length<=20)){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(tg,t); tg.dispatchEvent(new Event('input',{bubbles:true})); await SL(300); add.click(); await SL(700);}
 await SL(2500); const n=document.querySelectorAll('button[aria-label^="Delete tag "]').length; const ok=document.body.innerText.includes(S.file);
 if(n>=12&&ok){[...document.querySelectorAll('button')].filter(b=>b.textContent.trim()==='Publish').at(-1).click(); await SL(3000); const d=[...document.querySelectorAll('[role=dialog] button')].filter(b=>b.textContent.trim()==='Publish'); d.at(-1)?.click(); await SL(5000);}
 return [S.id,n,ok,location.href];};

window.V=async function(pid){const b=await fetch(R+pid+'/video.mp4').then(r=>r.blob()); const inp=document.querySelector('input[name=listing-media-upload]')||document.querySelector('input[type=file]'); const dt=new DataTransfer(); dt.items.add(new File([b],pid+'-video.mp4',{type:'video/mp4'})); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true})); await SL(15000); return [...document.querySelectorAll('button')].map(b=>b.textContent.trim()).filter(t=>/Publish|Update|Save/.test(t));};
