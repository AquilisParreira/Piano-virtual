const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider =document.querySelector(".volume-slider input")
let mapedKeys=[];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) =>{
audio.src =`src/tunes/${key}.wav`;
audio.play();

const clickedKey =document.querySelector(`[data-key"${key}"]`)
clickedKey.classList("active")
setTimeout(() => {
    clickedKey.classList.remove("active");
}, 150);

};

pianoKeys.forEach((key)=>{

key.addEventListener("click",()=> playTune (key.dataset.key));
mapedKeys.push(key.dataset.key);
});
document.addEventListener("keydown",
(e) =>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
   
});
const handleVolume = (e) => {
    audio.volume = e.taget.value;
};
volume-slider.addEventListener("input",handleVolume)

const keysCheck = document.querySelector("keys-check input");

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keysCheck.addEventListener(click, showHideKeys)

