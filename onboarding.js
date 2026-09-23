let step=1,shop='Kirana',habit='stock',who='Me';
const screens=[...document.querySelectorAll('.screen')],labels=[...document.querySelectorAll('.receipt li')];
function show(n){step=n;screens.forEach((s,i)=>s.classList.toggle('active',i===n-1));labels.forEach((l,i)=>{l.classList.toggle('active',i===n-1);l.classList.toggle('done',i<n-1)});scrollTo(0,0)}
document.querySelector('#sendOtp').onclick=()=>{const p=phone.value.replace(/\D/g,'');if(p.length!==10){phone.parentElement.classList.add('shake');setTimeout(()=>phone.parentElement.classList.remove('shake'),500);return}otp.classList.add('open')};
document.querySelector('#verify').onclick=()=>{otp.classList.remove('open');show(2)};
document.querySelectorAll('.shop-grid button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.shop-grid button').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');shop=b.dataset.shop});
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>show(+b.dataset.next));
document.querySelectorAll('.habit-cards button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.habit-cards button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');habit=b.dataset.habit});
document.querySelectorAll('.choice button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.choice button').forEach(x=>x.classList.remove('active'));b.classList.add('active');who=b.dataset.who;whoOut.textContent=who==='Me'?'Only you':who==='Manager'?'Your manager':'You + manager'});
document.querySelector('#different').onclick=()=>show(3);document.querySelector('#skip').onclick=()=>location.href='app.html';

const hs=location.hash.match(/^#step-(\d)$/);if(hs)show(+hs[1]);
