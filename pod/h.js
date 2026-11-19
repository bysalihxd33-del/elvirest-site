(async(id,price)=>{
const W=ms=>new Promise(r=>setTimeout(r,ms));
for(let k=0;k<20&&!document.getElementById('pfy-input-1');k++)await W(500);
const opt=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Opt-out');if(opt){opt.click();await W(800);}
const L=await fetch('https://raw.githubusercontent.com/bysalihxd33-del/elvirest-site/c8ee1d2a9394ec81650242a26329462f67f421c5/pod/pod_listings.json').then(r=>r.json());
const SUF="\n\n🎄 CHRISTMAS DELIVERY: Order by December 8 for US Christmas delivery (made to order, ships in 2-5 business days + transit).\n\n✨ COMPLETE THE SET: Pair it with our printable Christmas games, Santa letters and gift tags from NestOfKeepsakes, instant download, ready tonight.\n\nDETAILS\n• Printed and shipped from the USA by our production partner\n• Made to order just for you\n• Damaged or misprinted? Message us with a photo within 30 days for a free replacement.\n\nThank you for supporting a small shop! 💛";
const SETV=(el,v)=>{const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(p,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
const x=L[id];SETV(document.getElementById('pfy-input-1'),x.t);SETV(document.querySelector('textarea'),x.d+SUF);
const ti=document.getElementById('pfy-input-2');const addB=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Add');
for(const t of x.tags){SETV(ti,t);await W(150);addB.click();await W(200);}
// price
const tab=[...document.querySelectorAll('button,a,div')].find(b=>b.innerText&&b.innerText.trim()==='Detailed table view');if(tab){tab.click();await W(800);}
const ep=[...document.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Edit price');(ep[ep.length-1]||ep[0]).click();await W(1000);
const dlg=[...document.querySelectorAll('[role=dialog], .modal, .pfy-modal')].pop()||document;
const pin=[...dlg.querySelectorAll('input')].find(i=>i.type!=='checkbox'&&i.type!=='radio'&&i.offsetParent);
if(pin){SETV(pin,String(price));await W(300);const ap=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Apply');ap&&ap.click();await W(1200);}
return [document.body.innerText.match(/\d+\/13 tags added/)?.[0], !!pin, (document.body.innerText.match(/USD \d+\.\d\d/g)||[]).slice(0,4).join(',')];
})
