'usestrict'

const opening1A = document.getElementById("opening1-A");
const opening1B = document.getElementById("opening1-B");
const opening2 = document.getElementById("opening2");
const opening3 = document.getElementById("opening3");
const opening4 = document.getElementById("opening4");
const opening5 = document.getElementById("opening5");
const opening6 = document.getElementById("opening6");
const monologue = document.getElementById("monologue");
const link = document.getElementById("link");

//基本的にアニメーションと分を切り替えるのみ。ボタンを押すと別のページに飛ばし、本編がはじまる

opening1B.classList.add("first-anime");
setTimeout("firstRemoveAndFlash()",6000);

function firstRemoveAndFlash(){
opening1A.remove();
opening1B.remove();
opening2.style.display = "block";
opening2.classList.add("flashB");
setTimeout("monologueFlash()",1500);
setTimeout("secondRemoveAndFlash()",6000);
}

function monologueFlash(){
  monologue.style.display = "block";
  monologue.classList.add("monologueB");
  setTimeout("monologueRemove()",3800);
}

function monologueRemove(){
  monologue.remove();
}

function secondRemoveAndFlash(){
opening2.remove();
opening3.style.display = "block";
opening3.classList.add("flash");
setTimeout("thirdRemoveAndFlash()",3000);
}

function thirdRemoveAndFlash(){
opening3.remove();
opening4.style.display = "block";
opening4.classList.add("flash");
setTimeout("fourthRemoveAndFlash()",3000);
}

function fourthRemoveAndFlash(){
opening4.remove();
opening5.style.display = "block";
opening5.classList.add("flash");
setTimeout("fifthRemoveAndFlash()",3000);
}

function fifthRemoveAndFlash(){
opening5.remove();
opening6.style.display = "block";
link.style.display ="block";
}
