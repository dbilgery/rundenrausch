const cards = [
  {type:'vote',level:1,moods:['locker','frech','chaos'],text:'Wer würde am ehesten spontan auswandern?',hint:'Zeigt gleichzeitig auf eine Person.'},
  {type:'everyone',level:1,moods:['locker','frech','chaos'],text:'Alle, die heute zu spät gekommen sind.',hint:'Ehrlichkeit wird heute belohnt. Fast.'},
  {type:'category',level:1,moods:['locker','chaos'],text:'Nennt reihum Automarken.',hint:'Keine Wiederholungen. Maximal 3 Sekunden.'},
  {type:'vote',level:1,moods:['locker','frech','chaos'],text:'Wer würde eine Woche ohne Handy am schlechtesten überstehen?',hint:'Auf drei zeigt ihr gleichzeitig.'},
  {type:'duel',level:1,moods:['locker','frech','chaos'],text:'Schnick, Schnack, Schnuck – Best of Three.',hint:'Wähle deinen Gegner.'},
  {type:'everyone',level:1,moods:['locker','frech','chaos'],text:'Alle, die heute schon eine Ausrede benutzt haben.',hint:'„Keine Zeit“ zählt natürlich.'},
  {type:'category',level:1,moods:['locker','chaos'],text:'Dinge, die man an einer Tankstelle kaufen kann.',hint:'Reihum, schnell und ohne Wiederholung.'},
  {type:'vote',level:1,moods:['locker','frech','chaos'],text:'Wer lacht am lautesten über die eigenen Witze?',hint:'Diskutieren dürft ihr erst danach.'},
  {type:'timer',level:1,moods:['locker','frech','chaos'],text:'Stoppe den Timer bei genau 5 Sekunden.',hint:'Nach dem Start verschwindet die Zeit.'},
  {type:'confession',level:1,moods:['locker','frech'],text:'Welcher unnötige Kauf hat sich trotzdem gelohnt?',hint:'Erzählen oder einen Punkt nehmen.'},
  {type:'mission',level:2,moods:['locker','frech','chaos'],text:'Geheime Mission',secret:'Bring jemanden dazu, das Wort „Urlaub“ zu sagen.',hint:'Zeig das Display niemandem.'},
  {type:'vote',level:2,moods:['frech','chaos'],text:'Wer würde eine Nachricht lesen und drei Tage nicht antworten?',hint:'Keine Verteidigungsreden.'},
  {type:'rule',level:2,moods:['locker','chaos'],text:'Vornamen sind ab jetzt verboten.',rule:'Keine Vornamen',hint:'Gilt bis zur nächsten Regelkarte.'},
  {type:'duel',level:2,moods:['locker','frech','chaos'],text:'Starrduell. Wer zuerst lacht, verliert.',hint:'Der Rest darf ablenken – ohne Berührung.'},
  {type:'confession',level:2,moods:['frech','chaos'],text:'Was war deine schlechteste Ausrede, um ein Treffen abzusagen?',hint:'Die Gruppe entscheidet, ob sie zählt.'},
  {type:'category',level:2,moods:['locker','chaos'],text:'Dinge, die man niemals beim ersten Date sagen sollte.',hint:'Wer nichts mehr weiß, verliert.'},
  {type:'everyone',level:2,moods:['frech','chaos'],text:'Alle, die schon einmal absichtlich eine Nachricht ignoriert haben.',hint:'Ja, „später antworten“ zählt.'},
  {type:'mission',level:2,moods:['locker','frech','chaos'],text:'Geheime Mission',secret:'Lass dir von jemandem freiwillig einen Gegenstand geben.',hint:'Du hast bis zu deinem nächsten Zug Zeit.'},
  {type:'rule',level:2,moods:['locker','chaos'],text:'Jeder Satz muss mit „Ganz ehrlich“ beginnen.',rule:'Ganz ehrlich …',hint:'Ersetzt die vorherige Regel.'},
  {type:'vote',level:2,moods:['locker','frech','chaos'],text:'Wer wäre in einer Zombie-Apokalypse zuerst weg?',hint:'Mehrheit entscheidet.'},
  {type:'chaos',level:3,moods:['chaos'],text:'Alle tauschen ihre Plätze – aber nicht ihre Getränke.',hint:'Die letzte Person am neuen Platz verliert.'},
  {type:'mission',level:3,moods:['frech','chaos'],text:'Geheime Mission',secret:'Überzeuge die Gruppe, gemeinsam ein Lied anzustimmen.',hint:'Unauffällig bleiben.'},
  {type:'confession',level:3,moods:['frech','chaos'],text:'Welche Person hier hatte den völlig falschen ersten Eindruck von dir?',hint:'Name und Erklärung – oder zwei Punkte.'},
  {type:'rule',level:3,moods:['chaos'],text:'Wer „ja“ oder „nein“ sagt, verliert.',rule:'Kein Ja, kein Nein',hint:'Ersetzt die vorherige Regel.'},
  {type:'duel',level:3,moods:['frech','chaos'],text:'Macht euch gegenseitig ein Kompliment. Wer zuerst lacht, verliert.',hint:'Blickkontakt ist Pflicht.'},
  {type:'vote',level:3,moods:['frech','chaos'],text:'Wer würde für 10.000 Euro am ehesten alle Chats offenlegen?',hint:'Die gewählte Person darf kurz widersprechen.'},
  {type:'everyone',level:3,moods:['frech','chaos'],text:'Alle, die beim Stalken versehentlich etwas gelikt haben.',hint:'Wir urteilen nur ein bisschen.'},
  {type:'category',level:3,moods:['chaos'],text:'Ausreden, warum man morgen nicht arbeiten kann.',hint:'Die schlechteste Ausrede verliert.'},
  {type:'chaos',level:3,moods:['locker','frech','chaos'],text:'Richtungswechsel! Die Reihenfolge läuft ab jetzt andersherum.',hint:'Der aktuelle Spieler bestimmt die neue Richtung.'},
  {type:'timer',level:3,moods:['locker','frech','chaos'],text:'Stoppe den Timer bei genau 7 Sekunden.',target:7,hint:'Wer näher dran ist, verteilt einen Punkt.'}
];

const meta={
  vote:{label:'ABSTIMMUNG',icon:'☝',color:'#8b5cf6'},everyone:{label:'ALLE',icon:'◎',color:'#ff6b35'},
  category:{label:'KATEGORIE',icon:'↻',color:'#147d64'},duel:{label:'DUELL',icon:'⚡',color:'#d64061'},
  timer:{label:'ZEITGEFÜHL',icon:'◷',color:'#2563a9'},rule:{label:'HAUSREGEL',icon:'⚑',color:'#4169e1'},
  confession:{label:'EHRLICH',icon:'?',color:'#bd5b00'},mission:{label:'MISSION',icon:'◉',color:'#6d28d9'},
  chaos:{label:'CHAOS',icon:'✦',color:'#7c3aed'},custom:{label:'EURE KARTE',icon:'★',color:'#b4236c'}
};
const state={players:[],mood:'locker',scoring:'sips',max:30,index:0,journey:[],scores:{},vibration:true,activeRule:'',timerStart:0,timerTick:null};
const $=selector=>document.querySelector(selector);
const list=$('#player-list');
const unit=value=>state.scoring==='sips'?(value+' '+(value===1?'Sip':'Sips')):(value+' '+(value===1?'Punkt':'Punkte'));

function addPlayer(value=''){
  if(list.children.length>=10)return;
  const row=document.createElement('div');row.className='player-row';
  const input=document.createElement('input');input.maxLength=18;input.placeholder='Name '+(list.children.length+1);input.value=value;input.setAttribute('aria-label','Name von Person '+(list.children.length+1));
  const remove=document.createElement('button');remove.type='button';remove.className='remove-player';remove.textContent='−';remove.setAttribute('aria-label','Person entfernen');remove.onclick=()=>{if(list.children.length>2)row.remove()};
  row.append(input,remove);list.append(row);
}

let saved={};try{saved=JSON.parse(localStorage.getItem('rundenrausch-setup')||'{}')}catch(error){saved={}}
(saved.players&&saved.players.length?saved.players:['','','']).forEach(addPlayer);
if(saved.mood){const option=document.querySelector('input[name="mood"][value="'+saved.mood+'"]');if(option)option.checked=true}
if(saved.max)$('#game-length').value=String(saved.max);
if(saved.scoring)$('#scoring').value=saved.scoring;
$('#add-player').onclick=()=>addPlayer();

function buildJourney(custom){
  const customCards=custom.map(text=>({type:'custom',level:2,moods:[state.mood],text:text,hint:'Eure Runde, eure Regeln.'}));
  const source=cards.filter(card=>card.moods.includes(state.mood)).concat(customCards),result=[],recent=[];
  for(let i=0;i<state.max;i++){
    const phase=Math.min(3,Math.floor(i/state.max*3)+1);
    let pool=source.filter(card=>card.level<=phase&&!recent.includes(card.text));
    if(!pool.length)pool=source.filter(card=>card.level<=phase);
    const pick=pool[Math.floor(Math.random()*pool.length)];
    result.push(Object.assign({},pick));recent.push(pick.text);if(recent.length>5)recent.shift();
  }
  return result;
}

$('#setup-form').onsubmit=event=>{
  event.preventDefault();state.players=[...list.querySelectorAll('input')].map(input=>input.value.trim()).filter(Boolean);
  if(state.players.length<2){$('#setup-error').textContent='Trag mindestens zwei Namen ein.';return}
  if(new Set(state.players.map(name=>name.toLowerCase())).size!==state.players.length){$('#setup-error').textContent='Jeder Name darf nur einmal vorkommen.';return}
  state.mood=new FormData(event.currentTarget).get('mood');state.max=Number($('#game-length').value);state.scoring=$('#scoring').value;state.scores={};
  state.players.forEach(player=>state.scores[player]=0);
  const custom=$('#custom-input').value.split('\n').map(line=>line.trim()).filter(Boolean).slice(0,10);
  state.journey=buildJourney(custom);state.index=0;state.activeRule='';
  localStorage.setItem('rundenrausch-setup',JSON.stringify({players:state.players,mood:state.mood,max:state.max,scoring:state.scoring}));
  switchScreen('game');showCard();
};

function switchScreen(id){document.querySelectorAll('.screen').forEach(screen=>screen.classList.toggle('active',screen.id===id));window.scrollTo(0,0)}

function showCard(){
  const card=state.journey[state.index],info=meta[card.type],phase=Math.min(3,Math.floor(state.index/state.max*3)+1);
  $('#round-label').textContent='KARTE '+(state.index+1)+' / '+state.max;$('#progress').style.width=((state.index+1)/state.max*100)+'%';
  $('#current-player').textContent=state.players[state.index%state.players.length];$('#card-type').textContent=info.label;$('#card-icon').textContent=info.icon;$('#card-text').textContent=card.text;$('#card-hint').textContent=card.hint;$('#card').style.background=info.color;
  const intensity=$('.intensity');intensity.className='intensity '+(phase===2?'hot':phase===3?'chaos':'');$('#intensity-label').textContent=['WARM-UP','ES WIRD HEISS','ESKALATION'][phase-1];
  const extra=$('#card-extra');extra.replaceChildren();
  if(card.type==='mission')renderMission(card,extra);
  if(card.type==='timer')renderTimer(card,extra);
  if(card.type==='rule')state.activeRule=card.rule;
  updateRule();
  renderAwardButtons();
}

function renderMission(card,extra){
  const button=document.createElement('button');button.className='card-action';button.textContent='Mission heimlich ansehen';
  button.onclick=()=>{const secret=document.createElement('div');secret.className='secret';secret.textContent=card.secret;extra.replaceChildren(secret);buzz([40,50,40])};extra.append(button);
}

function renderTimer(card,extra){
  const display=document.createElement('div');display.className='timer-display';display.textContent='0.00';
  const button=document.createElement('button');button.className='card-action';button.textContent='Timer starten';
  button.onclick=()=>{
    if(!state.timerStart){state.timerStart=performance.now();button.textContent='STOPP';state.timerTick=setInterval(()=>{const elapsed=(performance.now()-state.timerStart)/1000;display.textContent=elapsed>.65?'?.??':elapsed.toFixed(2)},40)}
    else{const elapsed=(performance.now()-state.timerStart)/1000,target=card.target||5,diff=Math.abs(elapsed-target);clearInterval(state.timerTick);state.timerStart=0;display.textContent=elapsed.toFixed(2)+' s';button.textContent=diff<.2?'Punktlandung!':diff.toFixed(2)+' s daneben';button.disabled=true;buzz(diff<.2?[60,50,100]:[80])}
  };extra.append(display,button);
}

function updateRule(){const rule=$('#active-rule');rule.classList.toggle('hidden',!state.activeRule);rule.querySelector('span').textContent=state.activeRule}
function renderAwardButtons(){
  const holder=$('#award-players');holder.replaceChildren();$('#award-title').textContent=state.scoring==='sips'?'SIP VERGEBEN':'PUNKT VERGEBEN';
  state.players.forEach(player=>{const button=document.createElement('button');button.className='player-chip';button.textContent=player;button.onclick=()=>{state.scores[player]++;button.classList.add('bump');button.textContent=player+' +1';buzz(35);setTimeout(()=>{button.classList.remove('bump');button.textContent=player},650)};holder.append(button)});
}
function buzz(pattern){if(state.vibration&&navigator.vibrate)navigator.vibrate(pattern)}

$('#next-card').onclick=()=>{
  clearInterval(state.timerTick);state.timerStart=0;const card=$('#card');card.classList.add('swap');buzz(20);
  setTimeout(()=>{state.index++;if(state.index>=state.max){showFinish();card.classList.remove('swap');return}showCard();card.classList.remove('swap')},210);
};
$('#vibration').onclick=event=>{state.vibration=!state.vibration;event.currentTarget.textContent=state.vibration?'≈':'×';event.currentTarget.setAttribute('aria-label',state.vibration?'Vibration ausschalten':'Vibration einschalten')};
$('#quit').onclick=()=>{if(confirm('Spiel wirklich beenden?')){clearInterval(state.timerTick);state.index=0;switchScreen('setup')}};

function makeStats(target){
  target.replaceChildren();
  [...state.players].sort((a,b)=>state.scores[b]-state.scores[a]).forEach(player=>{const row=document.createElement('div');row.className='stat-row';const name=document.createElement('span');name.textContent=player;const score=document.createElement('span');score.textContent=unit(state.scores[player]);row.append(name,score);target.append(row)});
}
function openStats(){makeStats($('#stats-list'));$('#stats-dialog').showModal()}
$('#stats').onclick=openStats;$('#close-stats').onclick=()=>$('#stats-dialog').close();$('#resume').onclick=()=>$('#stats-dialog').close();

function showFinish(){
  const ordered=[...state.players].sort((a,b)=>state.scores[a]-state.scores[b]),lowest=ordered[0],highest=ordered[ordered.length-1];
  $('#awards').innerHTML='<div class="award-card"><span>🛡️</span><small>STANDFEST</small><strong></strong></div><div class="award-card"><span>🧲</span><small>RUNDENMAGNET</small><strong></strong></div>';
  const names=$('#awards').querySelectorAll('strong');names[0].textContent=lowest;names[1].textContent=highest;makeStats($('#final-stats'));switchScreen('finish');buzz([50,60,50,60,120]);
}
$('#rematch').onclick=()=>{state.players.forEach(player=>state.scores[player]=0);state.index=0;state.activeRule='';state.journey=buildJourney([]);switchScreen('game');showCard()};
$('#new-group').onclick=()=>{state.index=0;switchScreen('setup')};
