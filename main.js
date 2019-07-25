const songs =[ 'bensound-energy.mp3', 
'bensound-happyrock.mp3', 
'bensound-jazzyfrenchy.mp3', 
'bensound-onceagain.mp3',
'Calum Scott, Leona Lewis - You Are The Reason (Duet Version).mp3', 
'Jessie J - Who You Are.mp3', 
'Sam Smith - How Do You Sleep.mp3'
];

const createSongList = () => {
    const list =document.createElement('ol');

    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item);
    }

    return list;
};

document.getElementById('songList').appendChild(createSongList());

function songList(e) {
    const clickedItem  = e.target;
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerHTML;

    document.getElementById('currentSong').innerHTML = clickedItem.innerText;
    document.getElementById('currentlyPlayingSong').innerHTML = "Currently Playing: "
    player.load();
    player.play();
}

document.getElementById('songList').addEventListener("click", songList);


const playAudio = () => {
    if (player.readyState) {
        player.play();
    }
 };

const pauseAudio = () => {
    player.pause();
};

const slider = document.getElementById('volumenSlider')
slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;
}

const updateProgress = () => {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }  
};

console.log(player.currentTime);
console.log(player.duration);
/* 
songList.onclick = (e) => {
    const clickedItem = e.target;
    const source = document.getElementByID('source');
    source.src = 'songs/' + clickedItem.innerText;

    player.load();
    player.play();
}
*/

