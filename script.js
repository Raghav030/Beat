// console.log('welcome to spotify');
let audioElement= new Audio('songs/As-Long-As-You-Love-Me-downlaod.mp3');
// audioElement.play();

//Initate The Variables
let songindex =0;
let masterplay=document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songitem'));
// let songNameSinger= document.querySelector('mastersongname');
let mastersongname= document.getElementById('mastersongname');
let songs=[
    {songName: "as-long-as-you-love-me", filePath:'songs/As-Long-As-You-Love-Me-downlaod.mp3', coverPath:"song-background/song-background.jpg" },
    {songName: "Shape Of You", filePath:'songs/Shape-of-Youdownload.mp3', coverPath:"song-background/shapeofyou.jpg" },
    {songName: "Thunder", filePath:'songs/Thunderdownload.mp3', coverPath:"song-background/thunder.jpg" }

]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src= songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
});
//Handle Play/Pause Click
masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.src='pause.png';
        gif.style.opacity=1;
        // masterplay.classList.add('pause.png');
    }
    else{
        audioElement.pause();
        masterplay.src='play.png';
        gif.style.opacity=0;

    }
}
)
//Listne To Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress= parseInt((audioElement.currentTime/ audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})


myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value/100*audioElement.duration;
})
const makeallplay= () =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.src='play.png';

    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        songindex=parseInt(e.target.id);
        console.log(e.target);
        makeallplay();
        // e.target.src='pause.png';
        audioElement.src= songs[songindex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.src='pause.png';
        mastersongname.innerText=songs[songindex].songName;
        gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if (songindex>=songs.length){
        songindex=songs.length-1;
    }
    else {
        songindex+=1;
    }
    audioElement.src= songs[songindex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.src='pause.png';
    // songinfo.innerText=songs[songindex].songName
    mastersongname.innerText=songs[songindex].songName;
})
document.getElementById('previous').addEventListener('click', ()=>{
    if (songindex<=0){
        songindex=0;
    }
    else {
        songindex-=1;
    }
    audioElement.src= songs[songindex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.src='pause.png';
    mastersongname.innerText=songs[songindex].songName;
})


// document.getElementsByClassName('songinfo').addEventListener

