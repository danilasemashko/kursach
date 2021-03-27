const smileContent1 = document.getElementsByClassName("smileContent1");
const smileContent2 = document.getElementsByClassName("smileContent2");
const smileContent3 = document.getElementsByClassName("smileContent3");
const smile = document.getElementsByClassName("smile");
const shadow = document.getElementsByClassName("shadow");
const smileHeader = document.getElementsByClassName("smileHeader");

const ls = localStorage.getItem('num');
if (ls == 1) {
    smileHeader[0].classList.add("new-bg1");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
}
if (ls == 2) {
    smileHeader[0].classList.add("new-bg2");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg1");
}
if (ls == 3) {
    smileHeader[0].classList.add("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    smileHeader[0].classList.remove("new-bg1");
}