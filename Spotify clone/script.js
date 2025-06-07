console.log("Welcome to Spotify");

//Ititialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs= [
    {songName: "Sansoon ko - Arijit Singh", filePath: "songs/1.mpeg", coverPath: "img/covers/1.jpg"},
    {songName: "Junooniyat - Armaan Malik", filePath: "songs/2.mpeg", coverPath: "img/covers/2.jpg"},
    {songName: "Ho sake to rahna - Armaan Malik", filePath: "songs/3.mpeg", coverPath: "img/covers/3.jpg"},
    {songName: "Dekhte-Dekhte - Arijit Singh", filePath: "songs/4.mpeg", coverPath: "img/covers/4.jpg"},
    {songName: "Tere bin - Armaan Malik", filePath: "songs/5.mpeg", coverPath: "img/covers/5.jpg"},
    {songName: "Vaste - Arijit Singh", filePath: "songs/6.mpeg", coverPath: "img/covers/6.jpg"},
    {songName: "Teri Hogaiyaan- Armaan Malik", filePath: "songs/7.mpeg", coverPath: "img/covers/7.jpg"},
    {songName: "Bhula dena - Arijit Singh", filePath: "songs/8.mpeg", coverPath: "img/covers/8.jpg"},
    {songName: "Tumhari kasam - Armaan Malik", filePath: "songs/9.mpeg", coverPath: "img/covers/9.jpg"},
    {songName: "Dil Nu- A P Dhillon", filePath: "songs/10.mpeg", coverPath: "img/covers/10.jpeg"},
    {songName: "We Don't talk anymore - Charlie Puth", filePath: "songs/11.mpeg", coverPath: "img/covers/11.jpg"},
    
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =  (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mpeg`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


function getCurrentTimestamp() {
    console.log("getCurrentTimestamp");
    return Date.now();
    
  }