const topbar=document.getElementById('topbar');
window.addEventListener('scroll',()=>topbar.classList.toggle('scrolled',window.scrollY>40),{passive:true});
const menu=document.querySelector('.menu');
const nav=document.querySelector('.topbar nav');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open'); menu.classList.toggle('open')})}
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
