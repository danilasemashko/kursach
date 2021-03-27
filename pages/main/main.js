const smileContent1 = document.getElementsByClassName("smileContent1");
const smileContent2 = document.getElementsByClassName("smileContent2");
const smileContent3 = document.getElementsByClassName("smileContent3");
const smile = document.getElementsByClassName("smile");
const shadow = document.getElementsByClassName("shadow");
const smileHeader = document.getElementsByClassName("smileHeader");

const ls = localStorage.getItem('num');
if (ls == 1) {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg1");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
}
if (ls == 2) {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg2");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg1");
}
if (ls == 3) {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    smileHeader[0].classList.remove("new-bg1");
}
function showsmile1() {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg1");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    localStorage.setItem('num', '1');
}
function showsmile2() {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg2");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg1");
    localStorage.setItem('num', '2');
}

function showsmile3() {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    smileHeader[0].classList.remove("new-bg1");
    localStorage.setItem('num', '3');
}
function showsmile() {
    smile[0].style.display = "block";
    shadow[0].style.display = "block";
}






smileHeader[0].addEventListener("click", showsmile);
smileContent1[0].addEventListener("click", showsmile1);
smileContent2[0].addEventListener("click", showsmile2);
smileContent3[0].addEventListener("click", showsmile3);