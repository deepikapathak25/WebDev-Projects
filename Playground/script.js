
function changeColor(){
    document.body.style.background= '#'+ Math.floor(Math.random()*16777215).toString(16);
}

// function showTime(){
//     const now = new Date();
//     document.getElementById("time").innerText = "⏰ " + now.toLocaleTimeString();
// }
const now = new Date();
console.log(now);                     // Shows full date and time
console.log(now.toLocaleTimeString()); // Just time


const moods = ["😄 Happy", "😢 Sad", "😡 Angry", "😎 Cool", "🤯 Confused", "🥱 Sleepy"];
function changeMood(){
    const randomMood = moods[Math.floor(Math.random()*moods.length)];
    document.getElementById("mood").innerText = "I am feeling..." + randomMood;
}