const cards = [
  {type:'VOTE',icon:'☝',color:'#8b5cf6',text:'Wer würde am ehesten spontan auswandern?',hint:'Zeigt gleichzeitig auf eine Person.',penalty:'MEISTE STIMMEN: 1 SIP'},
  {type:'EVERYONE',icon:'◎',color:'#ff6b35',text:'Alle, die heute zu spät gekommen sind.',hint:'Ehrlichkeit wird heute belohnt. Fast.',penalty:'BETROFFENE: 1 SIP'},
  {type:'CATEGORY',icon:'↻',color:'#147d64',text:'Nennt reihum Automarken.',hint:'Keine Wiederholungen. Maximal 3 Sekunden Zeit.',penalty:'ERSTER FEHLER: 1 SIP'},
  {type:'DUELL',icon:'⚡',color:'#d64061',text:'Wer schafft es näher an genau 5 Sekunden?',hint:'Wählt eine Person für das Duell und startet den Timer im Kopf.',penalty:'VERLIERER: 1 SIP'},
  {type:'RULE',icon:'⚑',color:'#4169e1',text:'Vornamen sind ab jetzt verboten.',hint:'Die Regel gilt bis zur nächsten Regelkarte.',penalty:'VERSPRECHER: 1 SIP'},
  {type:'VOTE',icon:'☝',color:'#8b5cf6',text:'Wer hat heute am längsten gebraucht, um sich fertig zu machen?',hint:'Keine Diskussion vor der Abstimmung.',penalty:'MEISTE STIMMEN: 1 SIP'},
  {type:'CONFESSION',icon:'?',color:'#bd5b00',text:'Was war dein peinlichster Kauf?',hint:'Erzählen oder die Strafe nehmen.',penalty:'PASSSEN: 2 SIPS'},
  {type:'CHAOS',icon:'✦',color:'#7c3aed',text:'Alle tauschen ihre Plätze – aber nicht ihre Getränke.',hint:'Die letzte Person am neuen Platz verliert.',penalty:'LETZTE PERSON: 1 SIP'},
  {type:'EVERYONE',icon:'◎',color:'#ff6b35',text:'Alle, die schon einmal eine Nachricht absichtlich ignoriert haben.',hint:'Ja, „später antworten“ zählt auch.',penalty:'BETROFFENE: 1 SIP'},
  {type:'DUELL',icon:'⚡',color:'#d64061',text:'Schnick, Schnack, Schnuck – Best of Three.',hint:'Wähle deinen Gegner.',penalty:'VERLIERER: 2 SIPS'},
  {type:'CATEGORY',icon:'↻',color:'#147d64',text:'Dinge, die man niemals beim ersten Date sagen sollte.',hint:'Wer lacht, darf trotzdem weitermachen.',penalty:'ERSTER FEHLER: 1 SIP'},
  {type:'VOTE',icon:'☝',color:'#8b5cf6',text:'Wer würde in einer Zombie-Apokalypse am längsten überleben?',hint:'Die gewählte Person verteilt einen Sip.',penalty:'GEWINNER VERTEILT 1 SIP'}
];

const state={players:[],mood:'locker',index:0,sips:{},sound:true};
const $=s=>document.querySelector(s); const list=$('#player-list');
function addPlayer(value=''){if(list.children.length>=10)return;const row=document.createElement('div');row.className='player-row';row.innerHTML=`<input maxlength="18" aria-label="Name von Person ${list.children.length+1}" placeholder="Name ${list.children.length+1}" value="${value}"><button type="button" class="remove-player" aria-label="Person entfernen">−</button>`;row.querySelector('button').onclick=()=>{if(list.children.length>2)row.remove()};list.append(row)}
['','',''].forEach(addPlayer); $('#add-player').onclick=()=>addPlayer();
$('#setup-form').onsubmit=e=>{e.preventDefault();state.players=[...list.querySelectorAll('input')].map(x=>x.value.trim()).filter(Boolean);if(state.players.length<2){$('#setup-error').textContent='Trag mindestens zwei Namen ein.';return}state.mood=new FormData(e.currentTarget).get('mood');state.players.forEach(p=>state.sips[p]=0);$('#setup').classList.remove('active');$('#game').classList.add('active');showCard()};
function getDeck(){if(state.mood==='locker')return cards.filter(c=>!['CONFESSION','CHAOS'].includes(c.type));if(state.mood==='frech')return cards.filter(c=>c.type!=='RULE');return cards}
function showCard(){const deck=getDeck(),c=deck[state.index%deck.length],round=Math.floor(state.index/deck.length)+1,player=state.players[state.index%state.players.length];$('#round-label').textContent=`RUNDE ${round}`;$('#progress').style.width=`${((state.index%deck.length)+1)/deck.length*100}%`;$('#current-player').textContent=player;$('#card-type').textContent=c.type;$('#card-icon').textContent=c.icon;$('#card-text').textContent=c.text;$('#card-hint').textContent=c.hint;$('#penalty').textContent=c.penalty;$('#card').style.background=c.color;$('#card-extra').innerHTML='';}
$('#next-card').onclick=()=>{const card=$('#card');card.classList.add('swap');setTimeout(()=>{state.index++;showCard();card.classList.remove('swap')},210)};
$('#quit').onclick=()=>{if(confirm('Spiel wirklich beenden?')){state.index=0;$('#game').classList.remove('active');$('#setup').classList.add('active')}};
$('#sound').onclick=e=>{state.sound=!state.sound;e.currentTarget.textContent=state.sound?'♪':'×';e.currentTarget.setAttribute('aria-label',state.sound?'Ton ausschalten':'Ton einschalten')};
function openStats(){const turns={};state.players.forEach((p,i)=>turns[p]=Math.floor((state.index+state.players.length-i)/state.players.length));$('#stats-list').innerHTML=state.players.map(p=>`<div class="stat-row"><span>${p}</span><span>${turns[p]}× am Zug</span></div>`).join('');$('#stats-dialog').showModal()}
$('#stats').onclick=openStats;$('#close-stats').onclick=()=>$('#stats-dialog').close();$('#resume').onclick=()=>$('#stats-dialog').close();
