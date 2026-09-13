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
const state={players:[],mode:'classic',mood:'locker',scoring:'sips',max:30,index:0,journey:[],scores:{},vibration:true,activeRule:'',timerStart:0,timerTick:null,arcadeIndex:0,arcadeMax:10,arcadeOrder:[],arcadeWins:{},arcadeTimer:null,arcadeInterval:null};
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
if(saved.mode){const modeOption=document.querySelector('input[name="mode"][value="'+saved.mode+'"]');if(modeOption)modeOption.checked=true}
$('#add-player').onclick=()=>addPlayer();
function updateSetupMode(){const arcade=document.querySelector('input[name="mode"]:checked').value==='arcade';$('#mood-fieldset').classList.toggle('hidden',arcade);$('#custom-cards').classList.toggle('hidden',arcade)}
document.querySelectorAll('input[name="mode"]').forEach(input=>input.onchange=updateSetupMode);updateSetupMode();

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
  state.mode=new FormData(event.currentTarget).get('mode');state.mood=new FormData(event.currentTarget).get('mood');state.max=Number($('#game-length').value);state.scoring=$('#scoring').value;state.scores={};
  state.players.forEach(player=>state.scores[player]=0);
  const custom=$('#custom-input').value.split('\n').map(line=>line.trim()).filter(Boolean).slice(0,10);
  state.journey=buildJourney(custom);state.index=0;state.activeRule='';
  localStorage.setItem('rundenrausch-setup',JSON.stringify({players:state.players,mode:state.mode,mood:state.mood,max:state.max,scoring:state.scoring}));
  if(state.mode==='arcade')startArcade();else{switchScreen('game');showCard()}
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
const arcadeGames=[
  {kind:'reaction',title:'Reaktionsduell',instruction:'Tippt erst, wenn beide Flächen grün werden.'},
  {kind:'taps',title:'Tap-Race',instruction:'Wer schafft in fünf Sekunden mehr Treffer?'},
  {kind:'bomb',title:'Bombenhandy',instruction:'Weitergeben, bevor die Bombe hochgeht.'},
  {kind:'fingers',title:'Finger-Roulette',instruction:'Alle legen einen Finger auf das Feld.'},
  {kind:'time',title:'Zeitgefühl',instruction:'Stoppe die verdeckte Zeit so genau wie möglich.'}
];

function clearArcadeTimers(){clearTimeout(state.arcadeTimer);clearInterval(state.arcadeInterval);state.arcadeTimer=null;state.arcadeInterval=null}
function createArcadeOrder(){
  const count={18:6,30:10,45:15}[state.max]||10;state.arcadeMax=count;const order=[];
  while(order.length<count){const cycle=[...arcadeGames].sort(()=>Math.random()-.5);cycle.forEach(game=>{if(order.length<count)order.push(game)})}
  return order;
}
function startArcade(){
  clearArcadeTimers();state.arcadeIndex=0;state.arcadeWins={};state.players.forEach(player=>state.arcadeWins[player]=0);state.arcadeOrder=createArcadeOrder();switchScreen('arcade');showArcadeGame();
}
function arcadePair(){return[state.players[state.arcadeIndex%state.players.length],state.players[(state.arcadeIndex+1)%state.players.length]]}
function renderArcadeScore(){
  const holder=$('#arcade-score');holder.replaceChildren();state.players.forEach(player=>{const pill=document.createElement('div');pill.className='score-pill';pill.append(document.createTextNode(player));const score=document.createElement('b');score.textContent=state.arcadeWins[player];pill.append(score);holder.append(pill)});
}
function arcadeStart(label,action){
  const button=document.createElement('button');button.className='arcade-start';button.textContent=label;button.onclick=action;$('#arcade-stage').append(button);
}
function completeArcade(message,winner){
  clearArcadeTimers();if(winner)state.arcadeWins[winner]++;renderArcadeScore();$('#arcade-result').textContent=message;$('#arcade-result').classList.remove('hidden');$('#arcade-next').classList.remove('hidden');buzz(winner?[70,50,110]:[120]);
}
function showArcadeGame(){
  clearArcadeTimers();const game=state.arcadeOrder[state.arcadeIndex],stage=$('#arcade-stage');stage.replaceChildren();$('#arcade-result').classList.add('hidden');$('#arcade-next').classList.add('hidden');
  $('#arcade-round').textContent='SPIEL '+(state.arcadeIndex+1)+' / '+state.arcadeMax;$('#arcade-progress').style.width=((state.arcadeIndex+1)/state.arcadeMax*100)+'%';$('#arcade-title').textContent=game.title;$('#arcade-instruction').textContent=game.instruction;renderArcadeScore();
  if(game.kind==='reaction')renderReaction(stage);if(game.kind==='taps')renderTapRace(stage);if(game.kind==='bomb')renderBomb(stage);if(game.kind==='fingers')renderFingers(stage);if(game.kind==='time')renderTimeGame(stage);
}

function renderReaction(stage){
  const pair=arcadePair();arcadeStart('DUELL STARTEN',()=>{
    stage.replaceChildren();const grid=document.createElement('div');grid.className='duel-grid';let live=false,done=false;
    pair.forEach((player,index)=>{const pad=document.createElement('button');pad.className='duel-pad';pad.textContent=player;pad.onclick=()=>{if(done)return;done=true;const winner=live?player:pair[1-index];const loser=live?pair[1-index]:player;grid.querySelectorAll('button').forEach(button=>button.disabled=true);pad.classList.add(live?'go':'loser');completeArcade((live?'Blitzschnell: ':'Frühstart von ')+player+' · '+winner+' gewinnt!',winner)};grid.append(pad)});
    stage.append(grid);state.arcadeTimer=setTimeout(()=>{if(done)return;live=true;grid.querySelectorAll('button').forEach(button=>{button.classList.add('go');button.textContent='JETZT!' });buzz([30,30,30])},1400+Math.random()*2200);
  });
}

function renderTapRace(stage){
  const pair=arcadePair();arcadeStart('5 SEKUNDEN STARTEN',()=>{
    stage.replaceChildren();const grid=document.createElement('div');grid.className='duel-grid',counts=[0,0],pads=[];
    pair.forEach((player,index)=>{const pad=document.createElement('button');pad.className='duel-pad';const name=document.createElement('span');name.textContent=player;const count=document.createElement('b');count.className='tap-count';count.textContent='0';pad.append(name,count);pad.onclick=()=>{counts[index]++;count.textContent=String(counts[index])};pads.push(pad);grid.append(pad)});stage.append(grid);
    let remaining=5;state.arcadeInterval=setInterval(()=>{remaining-=.1;$('#arcade-instruction').textContent=remaining.toFixed(1)+' Sekunden';if(remaining<=0){clearArcadeTimers();pads.forEach(pad=>pad.disabled=true);const winner=counts[0]===counts[1]?null:pair[counts[0]>counts[1]?0:1];completeArcade(winner?winner+' gewinnt '+Math.max(...counts)+' zu '+Math.min(...counts)+'!':'Unentschieden – beide bekommen Ruhm.',winner)}},100);
  });
}

function renderBomb(stage){
  arcadeStart('BOMBE ZÜNDEN',()=>{
    stage.replaceChildren();let holder=state.arcadeIndex%state.players.length,done=false;const bomb=document.createElement('div');bomb.className='bomb';bomb.textContent='💣';const name=document.createElement('div');name.className='holder';name.textContent=state.players[holder];const pass=document.createElement('button');pass.className='pass-button';pass.textContent='WEITERGEBEN';pass.onclick=()=>{if(done)return;holder=(holder+1)%state.players.length;name.textContent=state.players[holder];buzz(18)};stage.append(bomb,name,pass);
    state.arcadeTimer=setTimeout(()=>{done=true;pass.disabled=true;bomb.textContent='💥';completeArcade('Boom! '+state.players[holder]+' wurde erwischt.',null)},6500+Math.random()*6000);
  });
}

function renderFingers(stage){
  const zone=document.createElement('div');zone.className='finger-zone';const note=document.createElement('div');note.className='finger-note';note.textContent='Mindestens zwei Finger gleichzeitig auflegen und halten.';zone.append(note);stage.append(zone);
  const fingers=new Map();let choosing=false,finished=false;
  const moveDot=event=>{const rect=zone.getBoundingClientRect(),dot=fingers.get(event.pointerId);if(dot){dot.style.left=(event.clientX-rect.left)+'px';dot.style.top=(event.clientY-rect.top)+'px'}};
  zone.onpointerdown=event=>{if(finished||fingers.has(event.pointerId))return;event.preventDefault();zone.setPointerCapture(event.pointerId);const dot=document.createElement('i');dot.className='finger-dot';fingers.set(event.pointerId,dot);zone.append(dot);moveDot(event);note.textContent=fingers.size+' Finger erkannt';if(fingers.size>=2&&!choosing){choosing=true;note.textContent='Nicht loslassen …';state.arcadeTimer=setTimeout(()=>{const ids=[...fingers.keys()];if(ids.length<2){choosing=false;return}finished=true;const chosen=fingers.get(ids[Math.floor(Math.random()*ids.length)]);chosen.classList.add('chosen');note.textContent='Dieser Finger wurde erwischt!';setTimeout(()=>completeArcade('Der ausgewählte Finger verliert die Runde.',null),900)},1900)}};
  zone.onpointermove=moveDot;zone.onpointerup=event=>{if(finished)return;const dot=fingers.get(event.pointerId);if(dot)dot.remove();fingers.delete(event.pointerId);if(fingers.size<2&&choosing){clearTimeout(state.arcadeTimer);choosing=false;note.textContent='Noch einmal: Finger auflegen und halten.'}};
  zone.onpointercancel=zone.onpointerup;
}

function renderTimeGame(stage){
  const player=state.players[state.arcadeIndex%state.players.length],target=[5,7,10][Math.floor(Math.random()*3)];$('#arcade-instruction').textContent=player+': Stoppe bei genau '+target+' Sekunden.';
  const display=document.createElement('div');display.className='time-stop';display.textContent='0.00';const button=document.createElement('button');button.className='pass-button';button.textContent='START';
  let started=0;button.onclick=()=>{if(!started){started=performance.now();button.textContent='STOPP';state.arcadeInterval=setInterval(()=>{const elapsed=(performance.now()-started)/1000;display.textContent=elapsed.toFixed(2);if(elapsed>.7)display.classList.add('hidden-time')},35)}else{const elapsed=(performance.now()-started)/1000,diff=Math.abs(elapsed-target);clearArcadeTimers();display.classList.remove('hidden-time');display.textContent=elapsed.toFixed(2)+' s';button.disabled=true;completeArcade(diff<.35?'Stark! Nur '+diff.toFixed(2)+' Sekunden daneben.':diff.toFixed(2)+' Sekunden daneben – knapp ist anders.',diff<.35?player:null)}};stage.append(display,button);
}

$('#arcade-next').onclick=()=>{state.arcadeIndex++;if(state.arcadeIndex>=state.arcadeMax)showArcadeFinish();else showArcadeGame()};
$('#arcade-quit').onclick=()=>{if(confirm('Arcade wirklich beenden?')){clearArcadeTimers();switchScreen('setup')}};
function makeArcadeStats(target){
  target.replaceChildren();[...state.players].sort((a,b)=>state.arcadeWins[b]-state.arcadeWins[a]).forEach(player=>{const row=document.createElement('div');row.className='stat-row';const name=document.createElement('span');name.textContent=player;const score=document.createElement('span');score.textContent=state.arcadeWins[player]+' '+(state.arcadeWins[player]===1?'Sieg':'Siege');row.append(name,score);target.append(row)});
}
function showArcadeFinish(){
  const ordered=[...state.players].sort((a,b)=>state.arcadeWins[b]-state.arcadeWins[a]),champion=ordered[0],underdog=ordered[ordered.length-1];$('#awards').innerHTML='<div class="award-card"><span>🏆</span><small>ARCADE-CHAMPION</small><strong></strong></div><div class="award-card"><span>🫠</span><small>PECHVOGEL</small><strong></strong></div>';const names=$('#awards').querySelectorAll('strong');names[0].textContent=champion;names[1].textContent=underdog;makeArcadeStats($('#final-stats'));switchScreen('finish');buzz([70,50,70,50,160]);
}

$('#rematch').onclick=()=>{if(state.mode==='arcade'){startArcade();return}state.players.forEach(player=>state.scores[player]=0);state.index=0;state.activeRule='';state.journey=buildJourney([]);switchScreen('game');showCard()};
$('#new-group').onclick=()=>{state.index=0;switchScreen('setup')};
