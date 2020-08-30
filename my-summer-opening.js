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
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const buttonE = document.getElementById("buttonE");
const buttonF = document.getElementById("buttonF");
const kagawaQusetion = document.getElementById("kagawa-question");
const kagawaNg = document.getElementById("kagawa-ng");

//香川県民の場合はプレイできない
//基本的にアニメーションと分を切り替えるのみ。リンクをクリックすると別のファイルに飛ばし、本編がはじまる

buttonA.onclick = () => {
  //香川県民である場合
  kagawaQusetion.remove();
  kagawaNg.style.display = "block";
}

buttonB.onclick = () => {
  //香川県民でない場合
kagawaQusetion.remove();
opening1A.style.display = "block";
opening1B.style.display = "block";
opening1B.classList.add("first-anime");
setTimeout("firstRemoveAndFlash()",6000);}

buttonC.onclick = () => {
  //香川県民
  document.location.href = "https://www.google.com";
}

buttonD.onclick = () => {
  //香川県民でない場合
kagawaQusetion.remove();
kagawaNg.remove();
opening1A.style.display = "block";
opening1B.style.display = "block";
opening1B.classList.add("first-anime");
setTimeout("firstRemoveAndFlash()",6000);}

buttonE.onclick = () => {
  //香川県民でない場合
kagawaQusetion.remove();
kagawaNg.remove();
opening1A.style.display = "block";
opening1B.style.display = "block";
opening1B.classList.add("first-anime");
setTimeout("firstRemoveAndFlash()",6000);}

buttonF.onclick = () => {
  //香川県民でない場合
kagawaQusetion.remove();
kagawaNg.remove();
opening1A.style.display = "block";
opening1B.style.display = "block";
opening1B.classList.add("first-anime");
setTimeout("firstRemoveAndFlash()",6000);}

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
