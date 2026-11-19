(async(plan)=>{
const W=ms=>new Promise(r=>setTimeout(r,ms));
for(let k=0;k<30&&!document.querySelector('tr');k++)await W(500);await W(800);
const opt=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Opt-out');if(opt){opt.click();await W(800);}
const tab=[...document.querySelectorAll('button,a,div')].find(b=>b.innerText&&b.innerText.trim()==='Detailed table view');if(tab){tab.click();await W(800);}
const rows=()=>[...document.querySelectorAll('tr')].filter(r=>/USD/.test(r.innerText));
for(const [re,price] of plan){
  await W(1500);
  for(const r of rows()){const cb=r.querySelector('input[type=checkbox]');const sz=(r.innerText.match(/\b(S|M|L|XL|2XL|3XL|One size|11oz)\b/)||[''])[0];const want=!re||new RegExp(re).test(sz);if(cb&&cb.checked!==want){cb.scrollIntoView({block:'center'});(cb.closest('label')||cb.parentElement).click();await W(400);}}
  const ep=[...document.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Edit price');ep[ep.length-1].click();await W(1300);
  const pin=[...document.querySelectorAll('input')].find(i=>i.type!=='checkbox'&&i.offsetParent&&i.closest('[role=dialog],.modal,[class*=modal],[class*=dialog]'));
  if(!pin) return 'noinput '+re;
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(pin,String(price));pin.dispatchEvent(new Event('input',{bubbles:true}));await W(300);
  [...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Apply').click();await W(1500);
}
const res=rows().map(r=>r.innerText.replace(/\s+/g,' ').match(/USD ([\d.]+)/)[1]).join(',');
[...document.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Publish').pop().click();await W(2500);
const cf=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Confirm'&&b.offsetParent);if(cf){cf.click();await W(3000);}
return res+' | '+(cf?'confirmed':'nodialog')+' | '+location.pathname;
})
