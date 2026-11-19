(async(plan)=>{ // plan: [[sizesRegexOrNull, price],...]
const W=ms=>new Promise(r=>setTimeout(r,ms));
for(let k=0;k<20&&!document.querySelector('tr');k++)await W(500);
const opt=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Opt-out');if(opt){opt.click();await W(800);}
const SETV=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));};
const tab=[...document.querySelectorAll('button,a,div')].find(b=>b.innerText&&b.innerText.trim()==='Detailed table view');if(tab){tab.click();await W(800);}
const rows=()=>[...document.querySelectorAll('tr')].filter(r=>/USD/.test(r.innerText));
const out=[];
for(const [re,price] of plan){
  for(const r of rows()){const cb=r.querySelector('input[type=checkbox]');const sz=r.innerText.trim().split(/\s+/)[1]||r.innerText.trim().split(/\s+/)[0];const want=!re||new RegExp(re).test(sz);if(cb&&cb.checked!==want){cb.click();await W(150);}}
  const ep=[...document.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Edit price');(ep[ep.length-1]).click();await W(900);
  const pin=[...document.querySelectorAll('input')].find(i=>i.type!=='checkbox'&&i.offsetParent&&i.closest('[role=dialog],.modal,[class*=modal],[class*=dialog]'));
  if(!pin){out.push('noinput');continue;}
  SETV(pin,String(price));await W(300);[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Apply').click();await W(1200);
}
return rows().map(r=>r.innerText.replace(/\s+/g,' ').match(/^\S+ (\S+).*?USD ([\d.]+) USD ([\d.-]+)/)?.slice(1).join(' ')).concat(out);
})
