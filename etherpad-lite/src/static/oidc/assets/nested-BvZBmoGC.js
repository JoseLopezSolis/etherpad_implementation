import"./style-Dnfg2NQt.js";const l=new URLSearchParams(window.location.search);document.getElementById("client").innerText=l.get("client_id");const i=document.querySelector("form");i.addEventListener("submit",function(t){t.preventDefault();const a=new FormData(i),s={};a.forEach((e,d)=>{s[d]=e});const c=new URLSearchParams(window.location.search).get("state");fetch("/interaction/"+c,{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(s)}).then(e=>{e.ok?e.redirected&&(window.location.href=e.url):document.getElementById("error").innerText="Error signing in"}).catch(e=>{document.getElementById("error").innerText="Error signing in"+e})});const n=document.querySelector(".toggle-password-visibility"),o=document.getElementById("eye-hide"),r=()=>{const t=document.getElementsByName("password")[0];t.type==="password"?(o.style.display="block",n.style.display="none",t.type="text"):(o.style.display="none",n.style.display="block",t.type="password")};n.addEventListener("click",r);o.addEventListener("click",r);