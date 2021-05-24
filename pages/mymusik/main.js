const smileContent1 = document.getElementsByClassName("smileContent1");
const smileContent2 = document.getElementsByClassName("smileContent2");
const smileContent3 = document.getElementsByClassName("smileContent3");
const smile = document.getElementsByClassName("smile");
const shadow = document.getElementsByClassName("shadow");
const smileHeader = document.getElementsByClassName("smileHeader");
const musik = document.getElementsByClassName("musik");

const ls = localStorage.getItem('num');
if (ls == 1) {
    smileHeader[0].classList.add("new-bg1");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    musik[0].src = '../../assets/audio/smile/1.mp3'
    musik[1].src = '../../assets/audio/smile/2.mp3'
    musik[2].src = '../../assets/audio/smile/3.mp3'
}
if (ls == 2) {
    smileHeader[0].classList.add("new-bg2");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg1");
    musik[0].src = '../../assets/audio/neutral/1.mp3'
    musik[1].src = '../../assets/audio/neutral/2.mp3'
    musik[2].src = '../../assets/audio/neutral/3.mp3'
}
if (ls == 3) {
    smileHeader[0].classList.add("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    smileHeader[0].classList.remove("new-bg1");
    musik[0].src = '../../assets/audio/sad/1.mp3'
    musik[1].src = '../../assets/audio/sad/2.mp3'
    musik[2].src = '../../assets/audio/sad/3.mp3'
}
