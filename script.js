*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:#0b6b4f;--primary-dark:#084d3a;--primary-light:#eaf6f1;--accent:#f5a623;--accent-light:#fff5df;--dark:#12221d;--text:#42504b;--muted:#6d7975;--light:#f4f8f6;--white:#fff;--border:#dce7e2;--shadow-sm:0 8px 25px rgba(11,107,79,.08);--shadow-md:0 18px 45px rgba(11,107,79,.12);--shadow-lg:0 30px 70px rgba(11,107,79,.15)}
html{scroll-behavior:smooth;scroll-padding-top:85px}
body{font-family:Arial,Helvetica,sans-serif;color:var(--text);background:var(--white);line-height:1.6}
body.menu-open{overflow:hidden}
a{text-decoration:none;color:inherit}
button{font:inherit}
.container{width:90%;max-width:1150px;margin:auto}

.navbar{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,.97);border-bottom:1px solid var(--border);backdrop-filter:blur(10px)}
.nav-content{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.logo,.footer-logo{display:flex;align-items:center;gap:10px;font-weight:800}
.logo{font-size:22px;color:var(--primary)}
.logo img{width:48px;height:48px;object-fit:contain;border-radius:8px}
.desktop-nav{display:flex;gap:20px}
.desktop-nav a{position:relative;font-size:14px;font-weight:700}
.desktop-nav a:after{content:"";position:absolute;left:0;bottom:-8px;width:0;height:2px;background:var(--primary);transition:.3s}
.desktop-nav a:hover{color:var(--primary)}
.desktop-nav a:hover:after{width:100%}
.nav-actions{display:flex;align-items:center;gap:8px}
.whatsapp-nav{background:var(--primary);color:#fff;padding:11px 15px;border-radius:8px;font-weight:700;font-size:13px}
.whatsapp-nav:hover{background:var(--primary-dark)}
.language-switch{display:flex;border:1px solid var(--border);border-radius:8px;overflow:hidden}
.language-switch button,.mobile-language button{border:0;background:#fff;color:var(--text);padding:8px 9px;font-size:12px;font-weight:800;cursor:pointer}
.language-switch button.active,.mobile-language button.active{background:var(--primary);color:#fff}
.menu-toggle{display:none;width:44px;height:44px;border:1px solid var(--border);border-radius:9px;background:#fff;cursor:pointer;align-items:center;justify-content:center;flex-direction:column;gap:5px}
.menu-toggle span{width:21px;height:2px;background:var(--dark);border-radius:10px;transition:.3s}
.menu-toggle.active span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.menu-toggle.active span:nth-child(2){opacity:0}
.menu-toggle.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.mobile-menu{display:none;padding:15px 5% 25px;background:#fff;border-top:1px solid var(--border);box-shadow:var(--shadow-md)}
.mobile-menu.active{display:flex;flex-direction:column}
.mobile-menu>a{padding:13px 0;border-bottom:1px solid var(--border);font-weight:700}
.mobile-menu>a:hover{color:var(--primary)}
.mobile-language{display:flex;gap:8px;padding:15px 0}
.mobile-language button{flex:1;border:1px solid var(--border);border-radius:7px}
.mobile-whatsapp{margin-top:5px;text-align:center;background:var(--primary);color:#fff!important;border-radius:8px;padding:13px!important}

.hero{position:relative;background:radial-gradient(circle at 85% 20%,rgba(245,166,35,.18),transparent 30%),linear-gradient(135deg,#edf8f3,#fff);padding:100px 0;overflow:hidden}
.hero:before{content:"";position:absolute;width:350px;height:350px;border-radius:50%;background:rgba(11,107,79,.04);right:-150px;bottom:-150px}
.hero-content{position:relative;z-index:1;display:grid;grid-template-columns:1.2fr .8fr;align-items:center;gap:70px}
.badge,.section-heading>span,.about-label,.partner-copy>span,.contact-info>span{display:inline-block;color:var(--primary);font-size:12px;font-weight:800;letter-spacing:1.5px;margin-bottom:14px}
.hero h1{color:var(--dark);font-size:clamp(42px,6vw,72px);line-height:1.05;margin-bottom:25px;letter-spacing:-2px}
.hero h1 span{color:var(--primary)}
.hero-text>p{max-width:640px;font-size:18px;margin-bottom:32px}
.hero-buttons{display:flex;flex-wrap:wrap;gap:15px}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 22px;border-radius:9px;font-weight:800;border:1px solid transparent;transition:.3s}
.btn:hover{transform:translateY(-2px)}
.btn.primary{background:var(--primary);color:#fff;box-shadow:0 8px 20px rgba(11,107,79,.15)}
.btn.primary:hover{background:var(--primary-dark)}
.btn.secondary{background:#fff;border-color:var(--border);color:var(--primary)}
.btn.secondary:hover{border-color:var(--primary)}
.hero-features{display:flex;flex-wrap:wrap;gap:20px;margin-top:28px;font-size:14px;font-weight:700}
.hero-card{background:#fff;border-radius:25px;padding:55px 35px;text-align:center;box-shadow:var(--shadow-lg);border:1px solid var(--border)}
.delivery-icon{font-size:70px;margin-bottom:20px}
.hero-card h3{color:var(--dark);font-size:28px;line-height:1.2;margin-bottom:15px}
.hero-card p{margin-bottom:25px}
.hero-card-badge{display:inline-block;background:var(--primary-light);color:var(--primary);padding:9px 14px;border-radius:50px;font-size:13px;font-weight:800}

.section{padding:90px 0}
.section.light{background:var(--light)}
.section-heading{text-align:center;max-width:720px;margin:0 auto 50px}
.section-heading h2{color:var(--dark);font-size:clamp(30px,4vw,46px);line-height:1.15;margin-bottom:12px;letter-spacing:-1px}
.section-heading p{font-size:16px}
.cards,.benefits-grid,.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.card{background:#fff;padding:32px 25px;border:1px solid var(--border);border-radius:15px;transition:.3s}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:rgba(11,107,79,.25)}
.featured-card{border-color:rgba(11,107,79,.35);box-shadow:var(--shadow-sm)}
.card-icon{font-size:38px;margin-bottom:16px}
.card-label{display:block;color:var(--primary);font-size:10px;font-weight:900;letter-spacing:1.2px;margin-bottom:7px}
.card h3{color:var(--dark);font-size:21px;margin-bottom:10px}
.card p{font-size:14px;margin-bottom:20px}
.card-link{color:var(--primary);font-size:14px;font-weight:800}
.benefit{background:#fff;border:1px solid var(--border);border-radius:15px;padding:30px 25px;text-align:center;transition:.3s}
.benefit:hover{transform:translateY(-5px);box-shadow:var(--shadow-sm)}
.benefit-icon{font-size:34px;margin-bottom:14px}
.benefit h3{color:var(--dark);margin-bottom:8px}
.benefit p,.step p{font-size:14px}
.step{text-align:center}
.step-number{width:55px;height:55px;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;background:var(--primary);color:#fff;border-radius:50%;font-size:20px;font-weight:800;box-shadow:0 8px 20px rgba(11,107,79,.16)}
.step h3{color:var(--dark);margin-bottom:8px}

.partner-section{padding:90px 0;background:radial-gradient(circle at 85% 20%,rgba(245,166,35,.15),transparent 28%),linear-gradient(135deg,var(--primary-dark),var(--primary));color:#fff}
.partner-content{display:grid;grid-template-columns:1.3fr .7fr;gap:70px;align-items:center}
.partner-copy{max-width:720px}
.partner-copy>span{color:var(--accent)}
.partner-copy h2{font-size:clamp(32px,5vw,52px);line-height:1.1;margin-bottom:20px}
.partner-copy p{font-size:17px;margin-bottom:25px}
.partner-copy ul{list-style:none;margin-bottom:30px}
.partner-copy li{margin:11px 0;font-weight:600}
.partner-btn{background:#fff;color:var(--primary)}
.partner-btn:hover{background:var(--accent-light);color:var(--primary-dark)}
.partner-highlight{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:22px;padding:40px 30px;text-align:center;backdrop-filter:blur(8px)}
.partner-highlight-icon{font-size:60px;margin-bottom:15px}
.partner-highlight h3{font-size:28px;line-height:1.15;margin-bottom:12px}

.about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:80px}
.about-label{color:var(--primary)}
.about-grid h2{color:var(--dark);font-size:clamp(30px,4vw,45px);line-height:1.15}
.about-grid p{margin-bottom:18px;font-size:17px}

.contact-box{max-width:900px;margin:auto;padding:38px;background:var(--light);border:1px solid var(--border);border-radius:18px;display:flex;justify-content:space-between;align-items:center;gap:30px;box-shadow:var(--shadow-sm)}
.contact-info h3{color:var(--primary);font-size:26px;margin-bottom:6px}
.contact-info p{font-size:14px}
.contact-buttons{display:flex;gap:10px;flex-wrap:wrap}

footer{background:var(--dark);color:#dce7e2;padding-top:55px}
.footer-content{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:50px;padding-bottom:45px}
.footer-logo{color:#fff;font-size:24px;margin-bottom:10px}
.footer-logo img{width:45px;height:45px;object-fit:contain;border-radius:7px}
.footer-brand p,.footer-links a,.footer-contact a,.footer-contact p{font-size:14px;margin-bottom:8px;color:#b8c7c1}
.footer-links,.footer-contact{display:flex;flex-direction:column;align-items:flex-start}
.footer-links h4,.footer-contact h4{color:#fff;margin-bottom:13px}
.footer-links a:hover,.footer-contact a:hover{color:#fff}
.copyright{border-top:1px solid rgba(255,255,255,.1);text-align:center;padding:20px;font-size:13px;color:#9daea8}
.floating-whatsapp{position:fixed;right:20px;bottom:20px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#25d366;color:#fff;font-size:27px;box-shadow:0 10px 25px rgba(0,0,0,.2);z-index:900}
.floating-whatsapp:hover{transform:scale(1.08)}

@media(max-width:1050px){
.desktop-nav{gap:13px}.desktop-nav a{font-size:13px}
.hero-content{gap:45px}
.cards,.benefits-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:900px){
.desktop-nav{display:none}.menu-toggle{display:flex}
.hero-content,.partner-content,.about-grid{grid-template-columns:1fr}
.hero{padding:75px 0}.partner-content{gap:40px}.about-grid{gap:30px}
.footer-content{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
.container{width:92%}.nav-content{min-height:65px}
.logo{font-size:19px}.logo img{width:40px;height:40px}
.whatsapp-nav{padding:9px 10px;font-size:11px}
.language-switch{display:none}
.hero{padding:60px 0}.hero h1{font-size:43px;letter-spacing:-1.5px}
.hero-text>p{font-size:16px}.hero-buttons{flex-direction:column}.btn{width:100%}
.hero-features{flex-direction:column;gap:8px}.hero-card{padding:40px 25px}
.section{padding:65px 0}.section-heading{margin-bottom:35px}.section-heading h2{font-size:32px}
.cards,.benefits-grid,.steps{grid-template-columns:1fr}
.contact-box{flex-direction:column;align-items:stretch;text-align:center;padding:28px 20px}
.contact-buttons{flex-direction:column}.footer-content{grid-template-columns:1fr}
.partner-section{padding:70px 0}.partner-copy h2{font-size:36px}
.floating-whatsapp{width:52px;height:52px;right:16px;bottom:16px}
}
