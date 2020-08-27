'usestrict'

const roomA = document.getElementById("room");
const roomB = document.getElementById("room");
const roomC = document.getElementById("room");
const roomD = document.getElementById("room");
const roomE = document.getElementById("room");
const humanA = document.getElementById("human");
const humanB = document.getElementById("human");
const humanC = document.getElementById("human");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const buttonE = document.getElementById("buttonE");
const dayArea = document.getElementById("day");
const dayAnime = document.getElementById("day-anime");
const dayflame = document.getElementById("day-flame");
const monologueA = document.getElementById("monologueA");
const monologueB = document.getElementById("monologueB");
const blackBack = document.getElementById("black-back");
const tutorialA = document.getElementById("tutorialA");
const tutorialB1 = document.getElementById("tutorialB-1");
const tutorialB2 = document.getElementById("tutorialB-2");
const tutorialC = document.getElementById("tutorialC");
const tutorialButton = document.getElementById("tutorial-button");
const tutorialArea = document.getElementById("tutorial-area");
const sleep = document.getElementById("sleep");
const knight = document.getElementById("knight");
const deviation = document.getElementById("deviation");
const event1 = document.getElementById("event-1");
const event2 = document.getElementById("event-2");
const event3 = document.getElementById("event-3");
const event4 = document.getElementById("event-4");
const event5 = document.getElementById("event-5");
const eButton1 = document.getElementById("event-button-1");
const eButton2 = document.getElementById("event-button-2");
const eButton3 = document.getElementById("event-button-3");
const eButton4 = document.getElementById("event-button-4");
const eButton5 = document.getElementById("event-button-5");
const eButton6 = document.getElementById("event-button-6");
var eventChecked = 0;
var dayValue = 1;



function beNone(element){
  element.style.display = "none";
}
function beBlock(element){
  element.style.display = "block";
}
function firstFunction(){
  blackBack.classList.add("black-flash");
  setTimeout("monologueRemove()",2000);}

function monologueRemove(){
  monologueA.remove();
  monologueB.remove();
  setTimeout("blackNone()",1000);
}
function blackNone(){
  blackBack.classList.remove("black-flash");
  beNone(blackBack);
  document.title = "チュートリアル";
}
function monologue(){
monologueA.classList.add("monologueA");
monologueB.classList.add("monologueB");
setTimeout("firstFunction()",6000);
}


function knightFunc(){
  beBlock(knight);
  knight.classList.add("flash4");
  setTimeout("dayAnimeFunc()",4000);
  dayArea.innerText = dayValue + "日";
  dayAnime.innerText = dayValue + "日目";
}

function dayAnimeFunc(){
  beNone(sleep);
  beNone(knight);
  sleep.classList.remove("flash4");
  knight.classList.remove("flash4");
  beBlock(dayAnime);
  dayAnime.classList.add("flash4");
  setTimeout("nextDayFunc()",4000);

  var day5 = dayValue % 5;
  if(day5 == 0){
  blackBack.classList.remove("flash8");}
  event2Start();
  event3Start();
  setTimeout("nextDayFunc()",4000);
}

function nextDayFunc(){
  if(dayValue == 5){
    beNone(dayAnime);
    dayAnime.classList.remove("flash4");
    deviation.style.display = "block";
    setTimeout("deviationFuncA()",1000);
  }else if(dayValue == 10){
    beNone(dayAnime);
    dayAnime.classList.remove("flash4");
    deviation.style.display = "block";
    deviation.innerText = "英:38.国:46.数:46";
    setTimeout("deviationFuncA()",1000);
  }else if(dayValue == 15){
    beNone(dayAnime);
    dayAnime.classList.remove("flash4");
    deviation.style.display = "block";
    deviation.innerText = "英:37.国:46.数:47";
    setTimeout("deviationFuncA()",1000);
  }else if(dayValue == 20){
    beNone(dayAnime);
    dayAnime.classList.remove("flash4");
    deviation.style.display = "block";
    deviation.innerText = "英:36.国:46.数:45";
    setTimeout("deviationFuncA()",1000);
  }else{
  beNone(blackBack);
  beNone(dayAnime);
  dayAnime.classList.remove("flash4");
  blackBack.classList.remove("flash8");
  setTimeout("event1Start()",500);
}
}

function event1Start(){
  if(dayValue == 6){
    event1.style.display = "block"
    var Y = 2000;
    setTimeout("eventStart2(eButton1,eButton2,event1,event2,event3," + Y + ")",3000);
  }
}

function event2Start(){
  if(dayValue == 12){
  event4.style.display = "block";
  eButton3.style.display = "block";
  eButton4.style.display = "block";
  eButton4.onclick = () =>{
    event4.remove();
    eButton3.remove();
    eButton4.remove();
    setTimeout("eventStart3()",0);
  }
  eButton3.onclick = () =>{
    alert("カズマは　からだがだるく　うごけない！");
  }
  }
}

function event3Start(){
  if(dayValue == 18){
  event5.style.display = "block";
  eButton5.style.display = "block";
  eButton6.style.display = "block";
  eButton6.onclick = () =>{
    event5.remove();
    eButton5.remove();
    eButton6.remove();
    setTimeout("eventStart3()",0);
  }
  eButton5.onclick = () =>{
    alert("カズマは　ねむったふりをしている");
  }
  }
}

function eventStart2(eButtonA,eButtonB,eventA,eventB,eventC,time){
  eventA.remove();
  eventB.style.display = "block";
  eButtonA.style.display = "block";
  eButtonB.style.display = "block";
  eButtonB.onclick = () =>{
    eventB.remove();
    eButtonA.remove();
    eButtonB.remove();
    eventC.style.display = "block";
    setTimeout("eventStart3(event3)",time);
  }
  eButtonA.onclick = () =>{
    alert("しかし　カズマは　まだ　現状を　認識できていない！");
  }
}

function eventStart3(eventX){
  eventChecked++;
  eventX.remove();
}

function deviationFuncA(){
  blackBack.classList.add("black-flash");
  deviation.classList.add("black-flash");
  setTimeout("deviationFuncB()",4000);
}

function deviationFuncB(){
  blackBack.classList.remove("black-flash");
  deviation.classList.remove("black-flash");
  blackBack.style.display = "none";
  deviation.style.display = "none";
}


function clickA(){
  console.log(dayValue);
  console.log(eventChecked);
  if(dayValue == 6 && eventChecked == 0){
    console.log("aaa");
    return;
  }else if(dayValue == 12 && eventChecked == 1){
    return;
  }else if(dayValue == 18 && eventChecked == 2){
    return;
  }
    dayValue++;
    if(dayValue === 21){
      window.location.href　=　"file:///Users/katotakuto/workspace/my-summer/my-summer-ending.html";
    }
    console.log(dayValue);
    setTimeout("dayAnimeFunc()",4000);
    beBlock(blackBack);
    blackBack.classList.add("flash8");
    beBlock(sleep);
    sleep.classList.add("flash4");
    dayArea.innerText = dayValue + "日";
    dayAnime.innerText = dayValue + "日目";
}

function clickB(){
  console.log(dayValue);
  console.log(eventChecked);
  if(dayValue == 6 && eventChecked == 0){
    console.log("aaa");
    return;
  }else if(dayValue == 12 && eventChecked == 1){
    return;
  }else if(dayValue == 18 && eventChecked == 2){
    return;
  }
  dayValue++;
  if(dayValue >= 21){
    window.location.href　=　"file:///Users/katotakuto/workspace/my-summer/my-summer-ending.html";
  }
  var deviation = dayValue % 5;
  if(deviation == 0){
    //偏差値を入れる
  }
  console.log(dayValue);
  setTimeout("dayAnimeFunc()",4000);
  beBlock(blackBack);
  blackBack.classList.add("flash8");
  beBlock(knight);
  knight.classList.add("flash4");
  dayArea.innerText = dayValue + "日";
  dayAnime.innerText = dayValue + "日目";
}




monologue();


tutorialButton.onclick = () => {
  //チュートリアルonclick1回目。チュートリアルのメッセージを切り替える
  beNone(tutorialA);
  beBlock(tutorialB1);
  beBlock(tutorialB2);
tutorialButton.onclick = () => {
  //チュートリアルonclick2回目。メッセージを切り替える。ボタンの位置とメッセージを「次へ」からゲームを始めるにかえる
  beNone(tutorialB1);
  beNone(tutorialB2);
  beBlock(tutorialC);
  tutorialButton.innerText = "ゲームを始める";
  tutorialButton.style.marginTop = "33vw";
  tutorialButton.style.marginLeft = "68vw";
tutorialButton.onclick = () => {
  //チュートリアルonclick3回目。チュートリアルを削除し、タイトルを変える
  document.title = "ぼくのながいなつやすみ";
  tutorialArea.remove();
  buttonA.onclick = () => {
    console.log(dayValue);
    console.log(eventChecked);
    var tenValue = document.a.ten.checked;
    console.log(tenValue);
    
    if(tenValue){
      console.log("bbb");
      var eventChecked = Math.floor(dayValue / 6);
      for(let i = 0; i<10; i++){
        clickA();
      }}else{
      clickA();
    }
  }
  buttonB.onclick = () => {
    console.log(dayValue);
    console.log(eventChecked);
    var tenValue = document.a.ten.checked;
    console.log(tenValue);
    if(tenValue){
      var eventChecked = Math.floor(dayValue / 6);
      for(let i = 0; i<10; i++){
        clickB();}
      }else{
      clickB();
    }}
  buttonC.onclick = () => {
    if(dayValue == 6 && eventChecked == 0){
      return;
    }else if(dayValue == 12 && eventChecked == 1){
      return;
    }else if(dayValue == 18 && eventChecked == 2){
      return;
    }else{
    alert("しかし体力が足りない");}}
  buttonD.onclick = () => {
    if(dayValue == 6 && eventChecked == 0){
      return;
    }else if(dayValue == 12 && eventChecked == 1){
      return;
    }else if(dayValue == 18 && eventChecked == 2){
      return;
    }else{
    alert("しかし体力が足りない");}}
  buttonE.onclick = () => {
    if(dayValue == 6 && eventChecked == 0){
      return;
    }else if(dayValue == 12 && eventChecked == 1){
      return;
    }else if(dayValue == 18 && eventChecked == 2){
      return;
    }else{
    alert("しかし体力が足りない");}}}}}







