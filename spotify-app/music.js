console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Chak-de-India",filePath: "songs/1.mp3" ,coverPath: "cover/cover1.jpg"},
    {songName:"Ziddi dil",filePath: "songs/2.mp3" ,coverPath: "cover/cover6.jpg"},
    {songName:"Badal pe paun hai",filePath: "songs/3.mp3" ,coverPath: "cover/cover3.jpg"},
    {songName:"Zinda",filePath: "songs/4.mp3" ,coverPath: "cover/cover4.jpg"},
    {songName:"Ek Zindegi",filePath: "songs/5.mp3" ,coverPath: "cover/cover5.jpg"},
   
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressBar.value= progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}  

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id); 
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= 'songs/1.mp3';


        audioElement.currentTime=0;
        audioElement.play();
       
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex+=1;
    }
    audioElement.src= 'songs/1.mp3';


    audioElement.currentTime=0;
    audioElement.play();
   
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex-=1;
    }
    audioElement.src= 'songs/1.mp3';


    audioElement.currentTime=0;
    audioElement.play();
   
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})











