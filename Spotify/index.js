console.log("weclm to Soptify")
//Intializw the variables

let songIndex =0;
let  audioElement = new Audio('songs/0.mp3');
let Play = document.getElementById('play');
let playsong = document.getElementsByClassName('playsong')
let mastersong = document.getElementById('mastersong');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songitmes = Array.from( document.getElementsByClassName("songitmes"));
let songs = [
    {songName: "Bappu_Zimidar" , filePath:"songs/Bapu_Zimidar.mp3" ,  coverPath:"covers/cover1.jpg"},
    {songName: "Barrish" , filePath:"songs/Baarish.mp3" ,  coverPath:"covers/barrish.jpg"},
    {songName: "Zindagi Di Paudi" , filePath:"songs/Millind Gaba Zindagi Di Paudi.mp3" ,  coverPath:"covers/download.jpg"},
    {songName: "Main Wahi Hoon Chand" , filePath:"songs/Main Wahi Hoon .mp3" ,  coverPath:"covers/main hoon chand.jpg"},
    {songName: "Mere Mehboob Qayamat Hogi" , filePath:"songs/Mere Mehboob Qayamat Hogi.mp3" ,  coverPath:" covers/download1.jpg"},
    {songName: "Na_Na_Na-J_Star" , filePath:"songs/Na_Na_Na-J_Star.mp3" ,  coverPath:"covers/na na na.jpg"},
    {songName: "One Dream" , filePath:"songs/One Dream.mp3" ,  coverPath:"covers/one dream.jpg"},
    {songName: "Patola" , filePath:"songs/Patola.mp3" ,  coverPath:"covers/patola.jpg"},
    {songName: "Photo Singga" , filePath:"songs/Photo Singga.mp3" ,  coverPath:"covers/photo.jpg"},
    {songName: "Pinda Aale Jatt" , filePath:"songs/Pinda Aale Jatt.mp3" ,  coverPath:"covers/pinda alae jatta.jpg"} 

]

songitmes.forEach((element ,i) => {
    // console.log(element,i)
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;  
  element.getElementsByClassName("songname")[0].innertext = songs[i].songName
});



//audioElement.play();

//Handle play/pause click
Play.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
       audioElement.play();
      Play.classList.remove("fa-circle-play") ;
       Play.classList.add("fa-circle-pause") ;
       gif.style.opacity =1;

    } else{
    audioElement.pause();
    Play.classList.remove("fa-circle-pause") ;
    Play.classList.add("fa-circle-play") ;
    gif.style.opacity =0;

    };
});

//listen to event
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressbar.value = progress;  
});

progressbar.addEventListener("change",()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{  
Array.from(document.getElementsByClassName("playsong")) .forEach((element)=>{
    element.classList.add("fa-circle-play");
    element.classList.remove("fa-circle-pause");
})
}


Array.from(document.getElementsByClassName("playsong")) .forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src =`songs/${songIndex}.mp3`;
    mastersong.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.add("fa-circle-play") ;
        Play.classList.remove("fa-circle-pause") ;

    })
});
document.getElementById("prev").addEventListener('click',() => {
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    mastersong.innerText = songs[songIndex].songName
    audioElement.src =`songs/${songIndex}.mp3`;

        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove("fa-circle-play") ;
        Play.classList.add("fa-circle-pause") ;
})
document.getElementById("next").addEventListener('click',() => {
    if(songIndex > 10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    mastersong.innerText = songs[songIndex].songName
    audioElement.src =`songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove("fa-circle-play") ;
        Play.classList.add("fa-circle-pause") ;
})


