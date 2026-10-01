(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const P=/non[-\s]?con|dub[-\s]?con|\brape\b|sexual assault|\bSA\b|traffick|torture|kidnap|incest|\babuse/i;function N(e){const t=String(e||"");if(/not found/i.test(t))return null;const s=t.match(/(\d+(?:\.\d+)?)/);if(!s)return null;const n=Number(s[1]);return Number.isFinite(n)?n:null}function R(e){return[...new Set(e.map(t=>t.peppers))].sort((t,s)=>s-t)}function D(e){const t=new Map;for(const s of e)for(const n of s.tropes||[])t.set(n,(t.get(n)||0)+1);return[...t.entries()].map(([s,n])=>({name:s,count:n})).sort((s,n)=>n.count-s.count||s.name.localeCompare(n.name))}function L(e){const t=e.series_note||"",s=/standalone/i.test(t),n=/#\s*\d|\btrilogy\b|\bduology\b|\bsaga\b|\bseries\b|\bcollection\b|\bomnibus\b/i.test(t);return{standalone:s,series:n||!s&&t.trim().length>0}}function T(e){return P.test(e.cw||"")}function E(e,t){const s=String(t||"").trim().toLowerCase();return s?(e.tropes||[]).some(n=>n.toLowerCase().includes(s)):!1}function W(e){return[e.title,e.author,e.synopsis,e.cw,e.series_note,e.pepper_note,e.star_rating,e.star_source,e.ku,e.ending,e.cheating,e.multiple_partners,...e.tropes||[]].join(`
`).toLowerCase()}function z(e,t){let s=e.map((a,c)=>({book:a,index:c}));const n=(t.q||"").trim().toLowerCase();if(n&&(s=s.filter(({book:a})=>W(a).includes(n))),t.pepper&&t.pepper!=="all"){const a=Number(t.pepper);s=s.filter(({book:c})=>c.peppers===a)}t.ku&&t.ku!=="all"&&(s=s.filter(({book:a})=>a.ku===t.ku)),t.ending&&t.ending!=="all"&&(s=s.filter(({book:a})=>a.ending===t.ending)),t.cheating&&t.cheating!=="all"&&(s=s.filter(({book:a})=>a.cheating===t.cheating)),t.partners&&t.partners!=="all"&&(s=s.filter(({book:a})=>a.multiple_partners===t.partners)),t.series==="series"?s=s.filter(({book:a})=>L(a).series):t.series==="standalone"&&(s=s.filter(({book:a})=>L(a).standalone));const o=t.tropes||[];if(o.length){const a=t.tropeMode==="all";s=s.filter(({book:c})=>{const d=o.filter(f=>E(c,f));return a?d.length===o.length:d.length>0})}const r=t.sort||"hot";return r==="mild"?s.sort((a,c)=>a.book.peppers-c.book.peppers||a.index-c.index):r==="title"?s.sort((a,c)=>a.book.title.localeCompare(c.book.title)||a.index-c.index):r==="stars"?s.sort((a,c)=>{const d=N(a.book.star_rating),f=N(c.book.star_rating);return(f??-1)-(d??-1)||a.index-c.index}):s.sort((a,c)=>c.book.peppers-a.book.peppers||a.index-c.index),s}function O(e){return[e.title,e.synopsis,e.series_note,e.pepper_note,...e.tropes||[]].filter(t=>t!=null&&t!=="").join(`
`)}const M=[{id:"holiday",title:"Holiday",blurb:"Festive and seasonal",reason:"Matches your holiday vibe",match:e=>/\b(holiday|christmas|xmas|halloween|thanksgiving|yuletide|festive|valentines?|new year)\b/i.test(e)},{id:"dark",title:"Dark",blurb:"Dark romance and gothic nights",reason:"Matches your dark vibe",match:e=>new RegExp("(?<!not[-\\s])\\bdark\\b(?![-\\s]?purple)(?![-\\s]moody)|\\bgothic\\b|\\bserial killer\\b|\\bpredator\\/prey\\b|\\btouch her and die\\b","i").test(e)},{id:"mafia",title:"Mafia",blurb:"Crime families and made men",reason:"Hits mafia",match:e=>/\b(mafia|bratva|cartel|organized crime|cosa nostra|mob boss)\b/i.test(e)},{id:"billionaire",title:"Billionaire",blurb:"Wealth, power, and luxury",reason:"Hits billionaire",match:e=>/\bbillionaires?\b/i.test(e)},{id:"small-town",title:"Small town",blurb:"Tight communities and local ties",reason:"Hits small town",match:e=>/\bsmall[-\s]?town\b/i.test(e)},{id:"enemies",title:"Enemies to lovers",blurb:"Rivals before they fall",reason:"Hits enemies to lovers",match:e=>/\benemies[-\s]to[-\s]lovers\b|\brivals to lovers\b/i.test(e)},{id:"romcom",title:"Rom-com / banter",blurb:"Laughs, banter, and rom-com energy",reason:"Matches your rom-com vibe",match:e=>/\b(?:rom-?coms?|romantic comed(?:y|ies)|banter|grumpy sunshine)\b/i.test(e)},{id:"kink",title:"BDSM / kink",blurb:"Kink, power exchange, and BDSM",reason:"Hits kink",match:e=>/\b(bdsm|kinks?|kinky|d\/s|dominance|submission|power exchange|daddy kink|knife play|master\/slave|softdom|bondage|impact play|forced submission|object play)\b/i.test(e)?!0:/\bdaddy dynamics\b/i.test(e)&&!/\bdadcom\b/i.test(e)},{id:"why-choose",title:"Reverse harem / why choose",blurb:"More than one love interest",reason:"Hits why choose",match:e=>/\breverse harem\b|\bwhy[-\s]?choose\b/i.test(e)},{id:"stalker",title:"Stalker / captivity",blurb:"Pursuit, captivity, and obsession",reason:"Hits stalker / captivity",match:e=>/\b(stalkers?|captiv\w*|kidnapp\w*|abduct\w*|predator\/prey)\b/i.test(e)},{id:"sports",title:"Sports / hockey",blurb:"Hockey, football, and the field",reason:"Hits sports",match:e=>/\b(hockey|football|goalies?)\b|\bsports?(?![\s-]*car)\b/i.test(e)},{id:"workplace",title:"Workplace / boss",blurb:"Bosses, offices, and the job",reason:"Hits the workplace",match:e=>new RegExp("\\b(workplace|offices?|boss\\/assistant|grumpy boss|billionaire boss|boss romance|assistants?)\\b|(?<!(?:mafia|mob|bratva|crime|cartel)\\s)\\bboss\\b","i").test(e)}];function V(e,t){const s=M.find(n=>n.id===t);return s?s.match(O(e)):!1}function Y(e){return M.map(t=>({id:t.id,title:t.title,blurb:t.blurb,count:e.reduce((s,n)=>s+(t.match(O(n))?1:0),0)})).filter(t=>t.count>=1)}function G(e){const t=M.find(s=>s.id===e);return t?t.reason:`Matches your ${e} vibe`}function J(e,t,s){if(s===0)return"Best match";const n=t?e/t:0;return n>=.85?"Strong match":n>=.62?"Close match":"Worth a look"}function B(e,t){var S;const s=t.include||[],n=t.avoid||[],o=t.surprise?[]:Array.isArray(t.vibes)?t.vibes:[],r={avoid:0,ku:0,comfort:0},a=[];e.forEach((u,b)=>{if(n.filter(v=>E(u,v)).length){r.avoid+=1;return}if(t.kuOnly&&u.ku!=="yes"){r.ku+=1;return}if(t.comfort==="lighter"&&T(u)){r.comfort+=1;return}let m=0;const g=[],x=o.filter(v=>V(u,v));if(!o.length)m+=12,g.push("Any vibe is welcome tonight");else if(x.length){m+=x.length*42;for(const v of x)g.push(G(v))}const k=s.filter(v=>E(u,v));k.length&&(m+=k.length*26,g.push(k.length===1?`Includes ${k[0]}`:`Includes ${k.slice(0,3).join(", ")}`)),t.kuOnly&&u.ku==="yes"&&(m+=8,g.push("On Kindle Unlimited")),t.comfort==="lighter"?(m+=6,g.push("Content notes stay off the heavier list")):t.comfort==="dark"&&T(u)&&(m+=10,g.push("Heavier content notes, which you welcomed")),t.landing==="soft"?u.ending==="HEA"?(m+=16,g.push("Ends in a happily ever after")):u.ending==="HFN"?(m+=12,g.push("Ends hopeful")):u.ending==="cliff"&&(m-=10):t.landing==="cliff"&&u.ending==="cliff"&&(m+=12,g.push("Leaves you on a cliffhanger")),a.push({book:u,index:b,score:m,reasons:g,hits:k.length,vibeHits:x.length})});let c=null,d=a;if(o.length){const u=a.filter(b=>b.vibeHits>0);u.length?d=u:c="No title matches the vibes you named. These still pass your other limits."}if(s.length){const u=d.filter(b=>b.hits>0);u.length?d=u:c||(c=o.length?"No title in this vibe has the tropes you named. These still match the vibe.":"No title has the tropes you named. These still pass your other limits.")}d.sort((u,b)=>b.vibeHits-u.vibeHits||b.score-u.score||u.index-b.index);const f=((S=d[0])==null?void 0:S.score)||0;return{matches:d.slice(0,8).map((u,b)=>({book:u.book,index:u.index,score:u.score,reasons:(u.reasons.length?u.reasons:["Fits the limits you set"]).slice(0,4),label:c?"Closest available":J(u.score,f,b)})),hidden:r,note:c,total:d.length}}function X(e){const t=[];return e.avoid&&t.push(`${e.avoid} for a trope you are skipping`),e.ku&&t.push(`${e.ku} not marked Kindle Unlimited`),e.comfort&&t.push(`${e.comfort} with heavier content notes`),t.length?`Set aside ${t.join(", ")}.`:""}const C=document.querySelector("#app");let p=[],F={};const i={view:"browse",browse:{q:"",pepper:"all",ku:"all",ending:"all",cheating:"all",partners:"all",series:"all",sort:"hot",tropes:[],tropeMode:"any",tropeQuery:"",open:null},picker:{step:0,includeQuery:"",avoidQuery:"",open:null,shown:!1,answers:{vibes:[],surprise:!1,include:[],avoid:[],kuOnly:!1,comfort:"any",landing:"any"}}},U=Y(p),Z=[{id:"lighter",title:"Keep the night gentler",hint:"Hide notes that mention non-consent, kidnapping, trafficking, or abuse."},{id:"any",title:"I will read the notes",hint:"Every match stays. Content notes remain on the card."},{id:"dark",title:"Dark themes are welcome",hint:"Heavier notes can rank higher. They still show on the card."}],ee=[{id:"soft",title:"Happy or hopeful ending",hint:"Prefer HEA or HFN. A cliffhanger sinks a little."},{id:"any",title:"Ending does not matter",hint:"HEA, HFN, cliffhanger, or unknown can all match."},{id:"cliff",title:"A cliffhanger is fine",hint:"Books that stop on a cliff get a small lift."}];function l(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function te(e,t){const s=new Set(p.map(n=>n[e]));return t.filter(n=>s.has(n))}function w(e,t){return`<div class="seg" data-key="${e}">${t.map(s=>{const n=s.value==="all";return`<button type="button" data-value="${l(s.value)}" class="${n?"on":""}" aria-pressed="${n?"true":"false"}" aria-label="${l(s.aria)}">${l(s.label)}<em>${s.count}</em></button>`}).join("")}</div>`}function A(e,t,s){const n=te(e,t);return[{value:"all",label:"Any",count:p.length,aria:`Any, ${p.length} books`},...n.map(o=>{const r=p.filter(c=>c[e]===o).length,a=s(o);return{value:o,label:a,count:r,aria:`${a}, ${r} books`}})]}function se(){const e=[{value:"all",label:"Any",count:p.length,aria:`Any heat, ${p.length} books`},...R(p).map(s=>{const n=p.filter(o=>o.peppers===s).length;return{value:String(s),label:String(s),count:n,aria:`${s} peppers, ${n} books`}})],t={series:p.filter(s=>L(s).series).length,standalone:p.filter(s=>L(s).standalone).length};return`
    <div class="wrap">
      <header class="top">
        <div>
          <p class="eyebrow">Romance shelf · ${p.length} books</p>
          <h1>The Night Shelf</h1>
          <p class="lede">Browse the stack, or take a short mood quiz. Every title is loaded from the shelf list.</p>
        </div>
        <nav class="tabs" role="tablist">
          <button type="button" id="tab-browse" role="tab" aria-selected="true" data-view="browse" class="on">
            <span class="full">Browse the shelf</span><span class="short">Browse</span>
          </button>
          <button type="button" id="tab-picker" role="tab" aria-selected="false" data-view="picker">
            <span class="full">What should I read tonight?</span><span class="short">Tonight</span>
          </button>
        </nav>
      </header>

      <section id="browse" role="tabpanel" aria-labelledby="tab-browse">
        <div class="toolbar">
          <p id="count" class="count" role="status"></p>
          <button type="button" class="filter-toggle" id="filter-toggle" aria-expanded="false">Filters</button>
          <label class="sort">Sort
            <select id="sort">
              <option value="hot">Hottest</option>
              <option value="mild">Mildest</option>
              <option value="title">Title</option>
              <option value="stars">Stars</option>
            </select>
          </label>
        </div>
        <div class="layout" id="layout">
          <aside class="filters">
            <div class="field">
              <label class="lbl" for="q">Search</label>
              <input id="q" type="search" placeholder="Title, author, trope, note" autocomplete="off" />
            </div>
            <div class="field">
              <p class="lbl">Peppers</p>
              ${w("pepper",e)}
              <p class="hint">This shelf runs ${Math.min(...p.map(s=>s.peppers))} to ${Math.max(...p.map(s=>s.peppers))}.</p>
            </div>
            <div class="field">
              <p class="lbl">Kindle Unlimited</p>
              ${w("ku",A("ku",["yes","no","unknown"],s=>s))}
            </div>
            <div class="field">
              <p class="lbl">Ending</p>
              ${w("ending",A("ending",["HEA","HFN","cliff","unknown"],s=>s==="cliff"?"Cliff":s==="unknown"?"Unknown":s))}
            </div>
            <div class="field">
              <p class="lbl">Cheating</p>
              ${w("cheating",A("cheating",["no","yes","ambiguous","unknown"],s=>({no:"No",yes:"Yes",ambiguous:"Unclear",unknown:"Unknown"})[s]||s))}
            </div>
            <div class="field">
              <p class="lbl">Multiple partners</p>
              ${w("partners",A("multiple_partners",["no","yes","unknown"],s=>s==="unknown"?"Unknown":s==="yes"?"Yes":"No"))}
            </div>
            <div class="field">
              <p class="lbl">Series</p>
              ${w("series",[{value:"all",label:"Any",count:p.length,aria:`Any series status, ${p.length} books`},{value:"series",label:"In a series",count:t.series,aria:`In a series, ${t.series} books`},{value:"standalone",label:"Standalone",count:t.standalone,aria:`Standalone, ${t.standalone} books`}])}
            </div>
            <div class="field">
              <p class="lbl">Tropes</p>
              <div class="mode" id="trope-mode">
                <button type="button" data-mode="any" class="on" aria-pressed="true">Match any</button>
                <button type="button" data-mode="all" aria-pressed="false">Match all</button>
              </div>
              <div id="trope-picks" class="picks"></div>
              <input id="trope-search" type="search" placeholder="Find a trope" autocomplete="off" style="margin-top:8px" />
              <div id="trope-list" class="trope-list"></div>
            </div>
            <button type="button" class="btn-text" id="clear">Clear filters</button>
          </aside>
          <div id="cards" class="cards"></div>
        </div>
      </section>

      <section id="picker" role="tabpanel" aria-labelledby="tab-picker" hidden>
        <div id="quiz"></div>
      </section>
      <p class="foot">Titles, heat, tropes, and notes come from books.json only. ${p.length} books on the shelf.</p>
    </div>
  `}function ne(e){const t=L(e),s={HEA:"HEA",HFN:"HFN",cliff:"Cliffhanger",unknown:"Ending unknown"}[e.ending]||e.ending,n={yes:"KU yes",no:"KU no",unknown:"KU unknown"}[e.ku]||e.ku,o={no:"No cheating",yes:"Cheating",ambiguous:"Cheating unclear",unknown:"Cheating unknown"}[e.cheating]||e.cheating,r={no:"No extra partners",yes:"Multiple partners",unknown:"Partners unknown"}[e.multiple_partners]||e.multiple_partners;let a="Series note";return t.series&&t.standalone?a="Series, can read alone":t.series?a="Series":t.standalone&&(a="Standalone"),[n,s,o,r,a].map(c=>`<li>${l(c)}</li>`).join("")}function oe(e){const s=N(e.star_rating)==null?"Stars not listed":`★ ${e.star_rating}`,n=e.star_source&&!/not found/i.test(e.star_source)?`<small>${l(e.star_source)}</small>`:"";return`<p class="stars">${l(s)}${n}</p>`}function K(e,t,s,n){const o=e.tropes||[],r=s?o:o.slice(0,6),a=o.length-r.length,c=Math.round(Number(e.peppers)/5*100),d=n?`<ol class="reasons">${n.reasons.map(f=>`<li>${l(f)}</li>`).join("")}</ol>`:"";return`
    <article class="card${s?" open":""}" data-card="${t}">
      ${n?`<p class="fit">${l(n.label)}</p>`:""}
      <p class="heatline"><span class="meter" style="--p:${c}%" aria-hidden="true"><span></span></span><span>${l(e.peppers)} peppers</span></p>
      <h3>${l(e.title)}</h3>
      <p class="author">${l(e.author)}</p>
      ${d}
      <p class="series-note">${l(e.series_note||"")}</p>
      <ul class="flags">${ne(e)}</ul>
      <div class="tropes">${r.map(f=>`<span>${l(f)}</span>`).join("")}${a>0?`<span>+${a}</span>`:""}</div>
      <p class="synopsis">${l(e.synopsis||"")}</p>
      ${e.pepper_note?`<p class="pepper-note">${l(e.pepper_note)}</p>`:""}
      ${oe(e)}
      <div class="cw"><strong>Content notes</strong>${l(e.cw||"None listed")}</div>
      <button type="button" class="open-btn" data-open="${t}">${s?"Hide full notes":"Full notes"}</button>
    </article>
  `}function ae(e){const t=i.browse,s=[];if(t.q.trim()&&s.push(`“${t.q.trim()}”`),t.pepper!=="all"&&s.push(`${t.pepper} peppers`),t.ku!=="all"&&s.push(`KU ${t.ku}`),t.ending!=="all"){const o={HEA:"HEA",HFN:"HFN",cliff:"cliffhanger",unknown:"ending unknown"}[t.ending]||t.ending;s.push(o)}if(t.cheating!=="all"){const o={no:"no cheating",yes:"cheating",ambiguous:"cheating unclear",unknown:"cheating unknown"}[t.cheating]||t.cheating;s.push(o)}t.partners!=="all"&&s.push(t.partners==="yes"?"multiple partners":t.partners==="no"?"no extra partners":"partners unknown"),t.series==="series"&&s.push("in a series"),t.series==="standalone"&&s.push("standalone"),t.tropes.length&&s.push(`${t.tropeMode==="all"?"all tropes":"any trope"}: ${t.tropes.join(", ")}`);const n=`${e.length} of ${p.length}`;return s.length?`${n} · ${s.join(" · ")}`:`${n} books`}function y(){const e=z(p,i.browse);document.querySelector("#count").textContent=ae(e);const t=document.querySelector("#cards");if(!e.length){t.innerHTML='<div class="empty"><h3>Nothing matches this mix.</h3><p>Clear a filter, or search a shorter phrase. The shelf does not add titles.</p></div>';return}t.innerHTML=e.map(({book:s,index:n})=>K(s,n,i.browse.open===n,null)).join("")}function Q(e,t){const s=e.trim().toLowerCase(),n=new Set(t.map(r=>r.toLowerCase()));let o=F.filter(r=>!n.has(r.name.toLowerCase()));return s?o=o.filter(r=>r.name.toLowerCase().includes(s)).slice(0,40):o=o.slice(0,18),o}function $(){const e=i.browse.tropes;document.querySelector("#trope-picks").innerHTML=e.map(s=>`<button type="button" data-remove-trope="${l(s)}">${l(s)}</button>`).join("");const t=Q(i.browse.tropeQuery,e);document.querySelector("#trope-list").innerHTML=t.length?t.map(s=>`<button type="button" data-add-trope="${l(s.name)}">${l(s.name)}<em>${s.count}</em></button>`).join(""):'<p class="hint">No trope matches that search.</p>';for(const s of document.querySelectorAll("#trope-mode button")){const n=s.dataset.mode===i.browse.tropeMode;s.classList.toggle("on",n),s.setAttribute("aria-pressed",n?"true":"false")}}function I(){for(const e of document.querySelectorAll(".filters .seg")){const t=e.dataset.key;for(const s of e.querySelectorAll("button")){const n=s.dataset.value===String(i.browse[t]);s.classList.toggle("on",n),s.setAttribute("aria-pressed",n?"true":"false")}}}function re(e){const t=new Set(e.vibes),s=U.map(r=>{const a=t.has(r.id);return`<button type="button" data-vibe="${l(r.id)}" class="${a?"on":""}" aria-pressed="${a?"true":"false"}"><strong>${l(r.title)}</strong><span>${l(r.blurb)}<em>${r.count}</em></span></button>`}).join(""),n=e.surprise;return`<div class="choices">${s}${`<button type="button" data-vibe="any" class="${n?"on":""}" aria-pressed="${n?"true":"false"}"><strong>Surprise me / any vibe</strong><span>Clears the other vibes. No vibe filter.</span></button>`}</div>`}function j(e,t,s){return`<div class="choices">${e.map(n=>{const o=String(t)===n.id;return`<button type="button" data-${s}="${l(n.id)}" class="${o?"on":""}" aria-pressed="${o?"true":"false"}"><strong>${l(n.title)}</strong><span>${l(n.hint)}</span></button>`}).join("")}</div>`}function _(e,t,s){const n=t.map(a=>`<button type="button" data-drop="${l(s)}" data-name="${l(a)}">${l(a)}</button>`).join(""),r=Q(e,t).map(a=>`<button type="button" data-take="${l(s)}" data-name="${l(a.name)}">${l(a.name)}<em>${a.count}</em></button>`).join("");return`
    <div class="picks">${n}</div>
    <div class="trope-list">${r||'<p class="hint">No trope matches that search.</p>'}</div>
  `}function ie(){const e=i.picker;if(e.shown)return le();const t=["What vibe do you want tonight?","What should the book lean toward?","Anything to leave off the nightstand?","A few practicalities"],s=["Pick one or more. Surprise me leaves the vibe open.","Optional. Choose a few tropes, or skip ahead.","Optional. A skipped trope removes books that carry it.","Kindle Unlimited, content notes, and the ending."];let n="";if(e.step===0&&(n=re(e.answers)),e.step===1&&(n=`
      <input id="include-search" type="search" placeholder="Search tropes" value="${l(e.includeQuery)}" autocomplete="off" />
      ${_(e.includeQuery,e.answers.include,"include")}
    `),e.step===2&&(n=`
      <input id="avoid-search" type="search" placeholder="Search tropes to skip" value="${l(e.avoidQuery)}" autocomplete="off" />
      ${_(e.avoidQuery,e.answers.avoid,"avoid")}
    `),e.step===3){const a=B(p,e.answers);n=`
      <p class="group-label">Kindle Unlimited</p>
      <div class="seg" data-group="ku">
        <button type="button" data-ku="no" class="${e.answers.kuOnly?"":"on"}" aria-pressed="${e.answers.kuOnly?"false":"true"}">Does not matter</button>
        <button type="button" data-ku="yes" class="${e.answers.kuOnly?"on":""}" aria-pressed="${e.answers.kuOnly?"true":"false"}">KU only</button>
      </div>
      <p class="group-label">Content notes</p>
      ${j(Z,e.answers.comfort,"comfort")}
      <p class="group-label">Ending</p>
      ${j(ee,e.answers.landing,"landing")}
      <p class="hint" id="preview">${a.total} of ${p.length} books pass these limits.</p>
    `}const o=e.step===3?"Show my matches":"Next",r=e.step===0&&!e.answers.surprise&&e.answers.vibes.length===0;return`
    <div class="paper">
      <p class="step">Step ${e.step+1} of 4</p>
      <h2>${t[e.step]}</h2>
      <p class="lede">${s[e.step]}</p>
      ${n}
      <div class="quiz-nav">
        <button type="button" class="btn-ghost" data-back ${e.step===0?"disabled":""}>Back</button>
        <button type="button" class="btn-primary" data-next ${r?"disabled":""}>${o}</button>
      </div>
    </div>
  `}function le(){const e=B(p,i.picker.answers),t=X(e.hidden),s=ce(),n=e.matches.length?`<div class="cards">${e.matches.map(o=>K(o.book,o.index,i.picker.open===o.index,o)).join("")}</div>`:'<div class="empty"><h3>Nothing clears every limit.</h3><p>Go back and loosen Kindle Unlimited, a skipped trope, or the gentler-notes choice.</p></div>';return`
    <div class="paper" style="max-width:1100px">
      <p class="step">Your shortlist</p>
      <h2>Tonight, from the shelf</h2>
      <p class="lede">${l(s)}</p>
      ${e.note?`<div class="banner"><p>${l(e.note)}</p></div>`:""}
      <p class="hint">Showing ${Math.min(8,e.total)} of ${e.total} that passed. ${l(t)}</p>
      <div class="quiz-nav">
        <button type="button" class="btn-ghost" data-back-results>Adjust answers</button>
        <button type="button" class="btn-primary" data-reset>Start again</button>
      </div>
    </div>
    <div style="height:14px"></div>
    ${n}
  `}function ce(){const e=i.picker.answers,t=(e.vibes||[]).map(n=>{const o=U.find(r=>r.id===n);return o?o.title:n}),s=[e.surprise||!t.length?"Any vibe":t.join(", ")];return e.include.length&&s.push(`leaning ${e.include.join(", ")}`),e.avoid.length&&s.push(`skipping ${e.avoid.join(", ")}`),e.kuOnly&&s.push("Kindle Unlimited only"),e.comfort==="lighter"&&s.push("gentler notes"),e.comfort==="dark"&&s.push("dark themes welcome"),e.landing==="soft"&&s.push("happy or hopeful ending"),e.landing==="cliff"&&s.push("cliffhanger welcome"),s.join(" · ")}function h(){const e=document.querySelector("#quiz"),t=document.activeElement,s=t&&e.contains(t)?t.id:"",n=s?t.selectionStart:null;if(e.innerHTML=ie(),s){const o=document.getElementById(s);o&&(o.focus(),n!=null&&o.setSelectionRange&&o.setSelectionRange(n,n))}}function ue(e){i.view=e,document.querySelector("#browse").hidden=e!=="browse",document.querySelector("#picker").hidden=e!=="picker",document.querySelector("#tab-browse").classList.toggle("on",e==="browse"),document.querySelector("#tab-picker").classList.toggle("on",e==="picker"),document.querySelector("#tab-browse").setAttribute("aria-selected",e==="browse"?"true":"false"),document.querySelector("#tab-picker").setAttribute("aria-selected",e==="picker"?"true":"false")}function H(e,t){const s=t.toLowerCase(),n=e.findIndex(o=>o.toLowerCase()===s);n>=0?e.splice(n,1):e.push(t)}function pe(){i.browse={q:"",pepper:"all",ku:"all",ending:"all",cheating:"all",partners:"all",series:"all",sort:"hot",tropes:[],tropeMode:"any",tropeQuery:"",open:null},document.querySelector("#q").value="",document.querySelector("#trope-search").value="",document.querySelector("#sort").value="hot",I(),$(),y()}function de(){document.querySelector(".tabs").addEventListener("click",e=>{const t=e.target.closest("[data-view]");t&&ue(t.dataset.view)}),document.querySelector("#q").addEventListener("input",e=>{i.browse.q=e.target.value,y()}),document.querySelector("#sort").addEventListener("change",e=>{i.browse.sort=e.target.value,y()}),document.querySelector(".filters").addEventListener("click",e=>{const t=e.target.closest(".seg button");if(t){const r=t.closest(".seg").dataset.key;i.browse[r]=t.dataset.value,I(),y();return}const s=e.target.closest("#trope-mode button");if(s){i.browse.tropeMode=s.dataset.mode,$(),y();return}const n=e.target.closest("[data-add-trope]");if(n){H(i.browse.tropes,n.dataset.addTrope),$(),y();return}const o=e.target.closest("[data-remove-trope]");o&&(H(i.browse.tropes,o.dataset.removeTrope),$(),y())}),document.querySelector("#trope-search").addEventListener("input",e=>{i.browse.tropeQuery=e.target.value,$()}),document.querySelector("#clear").addEventListener("click",pe),document.querySelector("#filter-toggle").addEventListener("click",()=>{const e=document.querySelector("#layout");e.classList.toggle("show-filters");const t=e.classList.contains("show-filters");document.querySelector("#filter-toggle").setAttribute("aria-expanded",t?"true":"false")}),document.querySelector("#cards").addEventListener("click",e=>{const t=e.target.closest("[data-open]");if(!t)return;const s=Number(t.dataset.open);i.browse.open=i.browse.open===s?null:s,y()}),document.querySelector("#picker").addEventListener("click",e=>{const t=e.target.closest("[data-vibe]");if(t){const d=t.dataset.vibe;d==="any"?(i.picker.answers.surprise=!0,i.picker.answers.vibes=[]):(i.picker.answers.surprise=!1,H(i.picker.answers.vibes,d)),h();return}const s=e.target.closest("[data-comfort]");if(s){i.picker.answers.comfort=s.dataset.comfort,h();return}const n=e.target.closest("[data-landing]");if(n){i.picker.answers.landing=n.dataset.landing,h();return}const o=e.target.closest("[data-ku]");if(o){i.picker.answers.kuOnly=o.dataset.ku==="yes",h();return}const r=e.target.closest("[data-take]");if(r){const d=i.picker.answers[r.dataset.take],f=r.dataset.take==="include"?i.picker.answers.avoid:i.picker.answers.include;H(d,r.dataset.name);const q=f.findIndex(S=>S.toLowerCase()===r.dataset.name.toLowerCase());q>=0&&f.splice(q,1),h();return}const a=e.target.closest("[data-drop]");if(a){H(i.picker.answers[a.dataset.drop],a.dataset.name),h();return}if(e.target.closest("[data-next]")){if(i.picker.step===0&&!i.picker.answers.surprise&&i.picker.answers.vibes.length===0)return;i.picker.step>=3?(i.picker.shown=!0,i.picker.open=null):i.picker.step+=1,h();return}if(e.target.closest("[data-back]")){i.picker.step>0&&(i.picker.step-=1),h();return}if(e.target.closest("[data-back-results]")){i.picker.shown=!1,i.picker.step=3,h();return}if(e.target.closest("[data-reset]")){i.picker={step:0,includeQuery:"",avoidQuery:"",open:null,shown:!1,answers:{vibes:[],surprise:!1,include:[],avoid:[],kuOnly:!1,comfort:"any",landing:"any"}},h();return}const c=e.target.closest("#picker [data-open]");if(c){const d=Number(c.dataset.open);i.picker.open=i.picker.open===d?null:d,h()}}),document.querySelector("#picker").addEventListener("input",e=>{e.target.id==="include-search"?(i.picker.includeQuery=e.target.value,h()):e.target.id==="avoid-search"&&(i.picker.avoidQuery=e.target.value,h())})}async function he(){try{p=(await Promise.all([0,1,2].map(async t=>{const s=await fetch(`/books-${t}.json`,{cache:"no-cache"});if(!s.ok)throw new Error(String(s.status));return s.json()}))).flat()}catch{C.innerHTML='<p class="booting">The shelf file did not load.</p>';return}if(!Array.isArray(p)||p.length===0){C.innerHTML='<p class="booting">The shelf file did not load.</p>';return}F=D(p),C.innerHTML=se(),de(),$(),y(),h()}he();
