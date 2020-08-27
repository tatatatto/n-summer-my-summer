'usestrict'

const ending1 = document.getElementById("ending-1");
const ending2 = document.getElementById("ending-2");
const ending3 = document.getElementById("ending-3");
const ending4 = document.getElementById("ending-4");
const black = document.getElementById("black");
const p = document.getElementById("p");
const link = document.getElementById("link");
const p2 = document.getElementById("p2");
const rollP =document.getElementById("roll-p");
const monologue = document.getElementById("monologue");


black.classList.add("flashflash");
setTimeout("pFunc()",1000);
setTimeout("blackA()",6000);

function removeBlock(elementA,elementB,elementC){
  elementA.remove();
  elementB.style.display = "block";
  elementC.style.display = "block";
}

function pFunc(){
  monologue.classList.add("flashA");
  setTimeout("pFunc2()",3000);
}

function pFunc2(){
  monologue.remove();
}

function blackA(){
  black.classList.remove("flashflash");
  black.style.display = "none";
  setTimeout("endingA()",3000);
}

function endingA(){
  black.style.display = "block";
  black.classList.add("flashB");
  setTimeout("removeBlock(ending1,ending2)",3600);
  setTimeout("endingB()",6000);
}

function endingB(){
  black.style.display = "none";
  black.classList.remove("flashB");
  setTimeout("endingC()",3000);
}

function endingC(){
  black.style.display = "block";
  black.classList.add("flashB");
  setTimeout("removeBlock(ending2,ending3,ending4)",3600);
  setTimeout("endingD()",6000);
}

function endingD(){
  p.innerText = "全入底無底辺大学（偏差値35、経済学部）入学";
  black.style.display = "none";
  black.classList.remove("flashB");
  setTimeout("endingE()",3000);
}

function endingE(){
  black.style.display = "block";
  black.classList.add("flashC");
  setTimeout("endingF()",2000);
}

function endingF(){
  black.classList.remove("flashC");
  p.style.marginTop = "16vw";
  p.style.fontSize = "100px";
  p.style.color = "white";
  p.innerText = "ど、どうして......";
  p.classList.add("flashC5");
  setTimeout("endingG()",5000);
}

function endingG(){
  p.classList.remove("flashC5");
  p.classList.add("flashA");
  setTimeout("endingH()",3000);
}

function endingH(){
  p.remove();
  rollP.classList.add("roll-p");
  rollP.style.display = "block";
  setTimeout("endingI()",15000);
}

function endingI(){
  rollP.remove();
  p2.style.display = "block";
  setTimeout("endingJ()",5000);
}

function endingJ(){
  p2.remove();
  link.innerText = "続編　ぼくのさむいなつやすみ";
}


