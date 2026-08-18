const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="70px";nav.style.left="0";nav.style.right="0";nav.style.background="#fff";nav.style.padding="20px";nav.style.flexDirection="column";nav.style.boxShadow="0 10px 20px #0001"});

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("trackingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const n=document.getElementById("trackingNumber").value.trim();
  document.getElementById("trackingResult").textContent=`Tracking request received for ${n}. For live status, contact AmahDrop on WhatsApp: +237 659 390 725.`;
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const msg=`Hello AmahDrop,%0A%0AName: ${encodeURIComponent(f.get("name"))}%0APhone: ${encodeURIComponent(f.get("phone"))}%0AService: ${encodeURIComponent(f.get("service"))}%0AMessage: ${encodeURIComponent(f.get("message")||"")}`;
  window.open(`https://wa.me/237659390725?text=${msg}`,"_blank");
});

document.getElementById("langBtn").addEventListener("click",()=>{
  alert("French version can be added as a full /fr page. The current website is ready in English.");
});
