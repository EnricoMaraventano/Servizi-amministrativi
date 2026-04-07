<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Assistenza amministrativa | Landing page corporate</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#f6f8fb;
      --white:#ffffff;
      --navy:#0b1628;
      --navy-2:#12233d;
      --text:#142033;
      --muted:#5f6f86;
      --line:#dce3ee;
      --soft:#eef3f9;
      --accent:#1e5eff;
      --accent-soft:rgba(30,94,255,.10);
      --shadow:0 20px 60px rgba(10,22,40,.10);
      --radius:28px;
      --radius-sm:20px;
      --max:1240px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      font-family:'Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
      background:var(--bg);
      color:var(--text);
      line-height:1.6;
    }
    img{max-width:100%;display:block}
    a{text-decoration:none;color:inherit}
    .container{width:min(var(--max),calc(100% - 48px));margin:0 auto}

    /* Header + hero */
    .hero-wrap{
      position:relative;
      overflow:hidden;
      background:linear-gradient(135deg,#091321 0%,#112340 58%,#10294d 100%);
      color:#fff;
    }
    .hero-wrap::before,
    .hero-wrap::after{
      content:"";
      position:absolute;
      border-radius:999px;
      pointer-events:none;
      filter:blur(6px);
    }
    .hero-wrap::before{
      width:460px;height:460px;
      right:-140px;top:-120px;
      background:radial-gradient(circle,rgba(96,165,250,.20) 0%,rgba(96,165,250,0) 68%);
    }
    .hero-wrap::after{
      width:360px;height:360px;
      left:-110px;bottom:-80px;
      background:radial-gradient(circle,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 70%);
    }

    .topbar{
      position:relative;
      z-index:2;
      padding:28px 0 18px;
    }
    .topbar-inner{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:24px;
      padding-bottom:18px;
      border-bottom:1px solid rgba(255,255,255,.12);
    }
    .brand-kicker{
      margin:0 0 6px;
      font-size:11px;
      letter-spacing:.24em;
      text-transform:uppercase;
      color:rgba(255,255,255,.68);
      font-weight:700;
    }
    .brand-name{
      margin:0;
      font-size:28px;
      font-weight:700;
      letter-spacing:-.02em;
    }
    .nav{
      display:flex;
      gap:28px;
      flex-wrap:wrap;
      font-size:14px;
      color:rgba(255,255,255,.78);
      font-weight:500;
    }
    .nav a:hover{color:#fff}

    .hero{
      position:relative;
      z-index:2;
      display:grid;
      grid-template-columns:1.1fr .9fr;
      gap:52px;
      align-items:center;
      padding:44px 0 94px;
    }
    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:11px 16px;
      border:1px solid rgba(255,255,255,.14);
      background:rgba(255,255,255,.06);
      border-radius:999px;
      font-size:12px;
      text-transform:uppercase;
      letter-spacing:.18em;
      font-weight:700;
      color:rgba(255,255,255,.86);
      backdrop-filter:blur(6px);
    }
    .hero h1{
      margin:22px 0 0;
      font-size:clamp(40px,6vw,68px);
      line-height:1.03;
      letter-spacing:-.04em;
      max-width:760px;
    }
    .hero p{
      margin:24px 0 0;
      max-width:700px;
      font-size:18px;
      line-height:1.9;
      color:rgba(255,255,255,.76);
    }
    .hero-actions{
      display:flex;
      flex-wrap:wrap;
      gap:14px;
      margin-top:34px;
    }
    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:52px;
      padding:0 22px;
      border-radius:16px;
      font-size:14px;
      font-weight:700;
      transition:.22s ease;
      border:1px solid transparent;
    }
    .btn-primary{
      background:#fff;
      color:#0b1628;
      box-shadow:0 16px 30px rgba(0,0,0,.14);
    }
    .btn-primary:hover{transform:translateY(-2px)}
    .btn-secondary{
      border-color:rgba(255,255,255,.16);
      color:#fff;
      background:rgba(255,255,255,.04);
    }
    .btn-secondary:hover{
      background:rgba(255,255,255,.08);
      transform:translateY(-2px);
    }

    .hero-panel{
      position:relative;
      background:rgba(255,255,255,.07);
      border:1px solid rgba(255,255,255,.12);
      border-radius:32px;
      padding:24px;
      box-shadow:0 24px 70px rgba(0,0,0,.18);
      backdrop-filter:blur(8px);
    }
    .hero-panel::before{
      content:"";
      position:absolute;
      inset:-1px;
      border-radius:inherit;
      background:linear-gradient(180deg,rgba(255,255,255,.20),rgba(255,255,255,0));
      mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
      mask-composite:exclude;
      -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
      -webkit-mask-composite:xor;
      padding:1px;
      pointer-events:none;
      opacity:.6;
    }
    .hero-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }
    .panel-card{
      border-radius:24px;
      background:rgba(9,19,33,.50);
      border:1px solid rgba(255,255,255,.10);
      padding:22px;
      min-height:150px;
    }
    .panel-card.large{grid-column:1 / -1;min-height:170px}
    .panel-label{
      margin:0;
      font-size:11px;
      letter-spacing:.2em;
      text-transform:uppercase;
      color:rgba(255,255,255,.56);
      font-weight:700;
    }
    .panel-title{
      margin:14px 0 0;
      font-size:28px;
      line-height:1.2;
      font-weight:700;
      letter-spacing:-.03em;
      color:#fff;
    }
    .panel-text{
      margin:12px 0 0;
      font-size:14px;
      line-height:1.8;
      color:rgba(255,255,255,.72);
    }

    /* Stat strip */
    .strip{
      margin-top:-40px;
      position:relative;
      z-index:3;
    }
    .strip-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:18px;
    }
    .strip-card{
      background:#fff;
      border:1px solid var(--line);
      border-radius:24px;
      padding:24px 26px;
      box-shadow:var(--shadow);
    }
    .strip-number{
      font-size:14px;
      font-weight:800;
      color:var(--accent);
      letter-spacing:.16em;
    }
    .strip-title{
      margin:12px 0 0;
      font-size:19px;
      line-height:1.4;
      font-weight:700;
      color:var(--navy);
    }

    /* Sections */
    section{padding:92px 0}
    .section-head{
      display:grid;
      grid-template-columns:.72fr 1.28fr;
      gap:60px;
      align-items:start;
      margin-bottom:34px;
    }
    .kicker{
      margin:0;
      font-size:12px;
      font-weight:800;
      letter-spacing:.22em;
      color:#6e7b8f;
      text-transform:uppercase;
    }
    .section-head h2{
      margin:14px 0 0;
      font-size:clamp(32px,4vw,52px);
      line-height:1.06;
      letter-spacing:-.04em;
      color:var(--navy);
    }
    .section-head p{
      margin:10px 0 0;
      font-size:17px;
      line-height:1.95;
      color:var(--muted);
    }

    .services{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:20px;
    }
    .service{
      background:#fff;
      border:1px solid var(--line);
      border-radius:32px;
      padding:30px;
      box-shadow:0 16px 40px rgba(16,35,61,.05);
      transition:.22s ease;
    }
    .service:hover{
      transform:translateY(-5px);
      box-shadow:0 24px 54px rgba(16,35,61,.10);
    }
    .service-tag{
      display:inline-flex;
      padding:7px 11px;
      border-radius:999px;
      background:var(--accent-soft);
      color:var(--accent);
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:.18em;
      font-weight:800;
    }
    .service h3{
      margin:18px 0 0;
      font-size:24px;
      line-height:1.3;
      letter-spacing:-.02em;
      color:var(--navy);
    }
    .service p{
      margin:14px 0 0;
      font-size:15px;
      line-height:1.9;
      color:var(--muted);
    }
    .service-link{
      display:inline-block;
      margin-top:18px;
      font-size:14px;
      font-weight:700;
      color:var(--navy);
    }

    .method{
      background:linear-gradient(180deg,#0b1628 0%,#10203a 100%);
      color:#fff;
    }
    .method .section-head h2,
    .method .section-head p,
    .method .kicker{color:#fff}
    .method .section-head p{color:rgba(255,255,255,.74)}
    .method-grid{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:18px;
    }
    .method-card{
      border-radius:28px;
      padding:28px;
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.10);
      min-height:150px;
    }
    .method-card h3{
      margin:0;
      font-size:22px;
      letter-spacing:-.02em;
    }
    .method-card p{
      margin:10px 0 0;
      color:rgba(255,255,255,.72);
      font-size:15px;
      line-height:1.9;
    }

    .split-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:22px;
    }
    .split-card{
      border-radius:34px;
      padding:34px;
      background:#fff;
      border:1px solid var(--line);
      box-shadow:var(--shadow);
    }
    .split-card.soft{background:var(--soft)}
    .split-card h3{
      margin:16px 0 0;
      font-size:30px;
      line-height:1.18;
      letter-spacing:-.03em;
      color:var(--navy);
    }
    .split-card p{
      margin:16px 0 0;
      color:var(--muted);
      font-size:16px;
      line-height:1.95;
    }

    .cta-box{
      background:linear-gradient(135deg,#0b1628 0%,#12233d 100%);
      color:#fff;
      border-radius:40px;
      padding:46px;
      box-shadow:0 30px 80px rgba(9,19,33,.18);
    }
    .cta-grid{
      display:grid;
      grid-template-columns:1.08fr .92fr;
      gap:34px;
      align-items:end;
    }
    .cta-box h2{
      margin:16px 0 0;
      font-size:clamp(30px,4vw,52px);
      line-height:1.06;
      letter-spacing:-.04em;
    }
    .cta-box p{
      margin:16px 0 0;
      max-width:760px;
      color:rgba(255,255,255,.74);
      font-size:16px;
      line-height:1.95;
    }
    .contact-card{
      border-radius:28px;
      padding:28px;
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.05);
    }
    .contact-item + .contact-item{margin-top:18px}
    .contact-label{
      font-size:12px;
      text-transform:uppercase;
      letter-spacing:.18em;
      color:rgba(255,255,255,.46);
      font-weight:800;
    }
    .contact-value{
      margin-top:7px;
      font-size:16px;
      font-weight:600;
      color:#fff;
    }
    .contact-card .btn{margin-top:24px}

    footer{
      background:#091321;
      color:rgba(255,255,255,.72);
      border-top:1px solid rgba(255,255,255,.06);
    }
    .footer-inner{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:22px;
      flex-wrap:wrap;
      padding:30px 0;
    }
    .footer-brand strong{
      display:block;
      color:#fff;
      font-size:18px;
      margin-bottom:5px;
    }
    .footer-nav{
      display:flex;
      gap:24px;
      flex-wrap:wrap;
      font-size:14px;
    }
    .footer-nav a:hover{color:#fff}

    @media (max-width: 1120px){
      .hero,
      .section-head,
      .cta-grid{grid-template-columns:1fr}
      .hero{padding-bottom:82px}
    }
    @media (max-width: 860px){
      .services,
      .method-grid,
      .split-grid,
      .strip-grid,
      .hero-grid{grid-template-columns:1fr}
      .panel-card.large{grid-column:auto}
      .topbar-inner{align-items:flex-start;flex-direction:column}
      .nav{gap:16px}
      section{padding:76px 0}
      .cta-box{padding:34px}
      .service,
      .split-card,
      .method-card{padding:24px}
    }
    @media (max-width: 560px){
      .container{width:min(var(--max),calc(100% - 28px))}
      .brand-name{font-size:24px}
      .hero p,
      .section-head p,
      .split-card p,
      .cta-box p{line-height:1.8}
      .btn{width:100%}
      .hero-actions{flex-direction:column}
      .strip{margin-top:-28px}
    }
  </style>
</head>
<body>

  <header class="hero-wrap">
    <div class="container topbar">
      <div class="topbar-inner">
        <div>
          <p class="brand-kicker">Assistenza amministrativa</p>
          <h2 class="brand-name">Studio / Brand Name</h2>
        </div>
        <nav class="nav" aria-label="Navigazione principale">
          <a href="#servizi">Servizi</a>
          <a href="#metodo">Metodo</a>
          <a href="#valore">Valore</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </div>

      <div class="hero">
        <div>
          <div class="eyebrow">Outsourcing amministrativo per imprese e professionisti</div>
          <h1>Una presenza amministrativa più autorevole, più ordinata, più aziendale.</h1>
          <p>
            Questa proposta riparte da zero con un linguaggio visivo differente: niente impostazione infantile, niente fotografia personale, niente blocchi casuali. La pagina punta su credibilità, ordine e posizionamento consulenziale, per trasmettere affidabilità già dal primo impatto.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contatti">Richiedi una consulenza</a>
            <a class="btn btn-secondary" href="#servizi">Scopri i servizi</a>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Pannello introduttivo">
          <div class="hero-grid">
            <div class="panel-card large">
              <p class="panel-label">Focus</p>
              <h3 class="panel-title">Riduciamo complessità amministrativa e dispersione operativa.</h3>
              <p class="panel-text">Un banner costruito senza foto, ma con una presenza forte e corporate: più simile a una società di advisory che a una pagina improvvisata.</p>
            </div>
            <div class="panel-card">
              <p class="panel-label">Metodo</p>
              <h3 class="panel-title">+ Struttura</h3>
              <p class="panel-text">Processi, pratiche, coordinamento e supporto con una logica più professionale e leggibile.</p>
            </div>
            <div class="panel-card">
              <p class="panel-label">Obiettivo</p>
              <h3 class="panel-title">+ Controllo</h3>
              <p class="panel-text">Una comunicazione sobria, moderna e adatta a clienti business e realtà strutturate.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </header>

  <div class="strip">
    <div class="container">
      <div class="strip-grid">
        <div class="strip-card">
          <div class="strip-number">01</div>
          <div class="strip-title">Analisi iniziale dei flussi amministrativi</div>
        </div>
        <div class="strip-card">
          <div class="strip-number">02</div>
          <div class="strip-title">Presa in carico operativa con metodo definito</div>
        </div>
        <div class="strip-card">
          <div class="strip-number">03</div>
          <div class="strip-title">Presidio continuativo, ordinato e scalabile</div>
        </div>
      </div>
    </div>
  </div>

  <main>
    <section id="servizi">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="kicker">Servizi</p>
            <h2>Una griglia più ampia, più pulita, più credibile.</h2>
          </div>
          <div>
            <p>
              Qui ho seguito una logica più vicina alle strutture corporate: blocchi larghi, aria tra le sezioni, etichette sobrie e descrizioni sintetiche. Il risultato è una sezione servizi più elegante e più facile da leggere, senza l’effetto “pagina amatoriale”.
            </p>
          </div>
        </div>

        <div class="services">
          <article class="service">
            <span class="service-tag">Operatività quotidiana</span>
            <h3>Contabilità e tenuta registri</h3>
            <p>Gestione continuativa della documentazione contabile, registri obbligatori, raccolta dati e presidio delle attività ricorrenti.</p>
            <span class="service-link">Approfondisci →</span>
          </article>

          <article class="service">
            <span class="service-tag">Funzione esternalizzata</span>
            <h3>Supporto amministrativo outsourcing</h3>
            <p>Un riferimento esterno affidabile per alleggerire la struttura interna e garantire ordine, continuità e coordinamento.</p>
            <span class="service-link">Approfondisci →</span>
          </article>

          <article class="service">
            <span class="service-tag">Chiarezza gestionale</span>
            <h3>Reporting e controllo documentale</h3>
            <p>Report periodici, riepiloghi e monitoraggio amministrativo per una visione più leggibile delle attività in corso.</p>
            <span class="service-link">Approfondisci →</span>
          </article>

          <article class="service">
            <span class="service-tag">Conformità e ordine</span>
            <h3>Gestione adempimenti societari</h3>
            <p>Supporto nella raccolta documenti, nel coordinamento delle pratiche e nella gestione ordinata delle scadenze amministrative.</p>
            <span class="service-link">Approfondisci →</span>
          </article>

          <article class="service">
            <span class="service-tag">Approccio internazionale</span>
            <h3>Supporto a società estere in Italia</h3>
            <p>Una presenza locale per interlocutori internazionali che necessitano di supporto amministrativo, pratico e continuativo.</p>
            <span class="service-link">Approfondisci →</span>
          </article>

          <article class="service">
            <span class="service-tag">Processi più fluidi</span>
            <h3>Back office amministrativo</h3>
            <p>Gestione operativa dei flussi informativi e delle attività di supporto per migliorare efficienza e capacità di risposta.</p>
            <span class="service-link">Approfondisci →</span>
          </article>
        </div>
      </div>
    </section>

    <section id="metodo" class="method">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="kicker">Metodo di lavoro</p>
            <h2>Non solo assistenza. Un presidio amministrativo progettato con criterio.</h2>
          </div>
          <div>
            <p>
              Invece di limitarsi a elencare servizi, questa sezione costruisce percezione di valore. Serve a far capire che dietro l’operatività c’è organizzazione, responsabilità e un metodo chiaro.
            </p>
          </div>
        </div>

        <div class="method-grid">
          <article class="method-card">
            <h3>Approccio strutturato e aziendale</h3>
            <p>Una voce visiva più istituzionale, adatta a clienti che cercano affidabilità e non una semplice “pagina vetrina”.</p>
          </article>
          <article class="method-card">
            <h3>Interlocuzione chiara e tempi definiti</h3>
            <p>Testi più sobri, call to action pulite e gerarchia più netta tra ciò che conta e ciò che è secondario.</p>
          </article>
          <article class="method-card">
            <h3>Supporto continuativo e scalabile</h3>
            <p>Il layout è pensato per poter crescere: puoi aggiungere nuove sezioni senza rompere l’equilibrio della pagina.</p>
          </article>
          <article class="method-card">
            <h3>Visione ordinata di pratiche e scadenze</h3>
            <p>La grafica comunica controllo e precisione, due qualità fondamentali per chi offre assistenza amministrativa.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="valore">
      <div class="container">
        <div class="split-grid">
          <article class="split-card soft">
            <p class="kicker">Perché questa versione funziona meglio</p>
            <h3>Più autorevolezza, meno rumore visivo.</h3>
            <p>
              Ho eliminato l’effetto “childish” lavorando su contrasto, proporzioni, spaziatura e tono. La pagina appare più seria, più stabile e più vicina a una realtà professionale di consulenza o outsourcing amministrativo.
            </p>
          </article>

          <article class="split-card">
            <p class="kicker">Posizionamento</p>
            <h3>Un’immagine più coerente con un servizio business.</h3>
            <p>
              Header e footer scuri, hero elegante, sezioni larghe e cards ordinate: tutti elementi che aiutano a posizionarti meglio verso aziende, professionisti e clienti che cercano competenza e affidabilità.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="contatti">
      <div class="container">
        <div class="cta-box">
          <div class="cta-grid">
            <div>
              <p class="kicker" style="color:rgba(255,255,255,.5)">Contatti</p>
              <h2>Costruiamo una presenza amministrativa più ordinata, solida e professionale.</h2>
              <p>
                Qui possiamo inserire i tuoi dati reali, l’area geografica di attività, una frase più mirata sui clienti che vuoi attrarre e una call to action finale ancora più efficace.
              </p>
            </div>

            <aside class="contact-card">
              <div class="contact-item">
                <div class="contact-label">Email</div>
                <div class="contact-value">info@tuodominio.it</div>
              </div>
              <div class="contact-item">
                <div class="contact-label">Telefono</div>
                <div class="contact-value">+39 000 000 0000</div>
              </div>
              <div class="contact-item">
                <div class="contact-label">Sede</div>
                <div class="contact-value">Milano / Italia</div>
              </div>
              <a class="btn btn-primary" href="mailto:info@tuodominio.it">Contattami</a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-inner">
      <div class="footer-brand">
        <strong>Studio / Brand Name</strong>
        <span>Assistenza amministrativa e supporto outsourcing</span>
      </div>
      <nav class="footer-nav" aria-label="Navigazione footer">
        <a href="#servizi">Servizi</a>
        <a href="#metodo">Metodo</a>
        <a href="#contatti">Contatti</a>
      </nav>
    </div>
  </footer>

</body>
</html>
