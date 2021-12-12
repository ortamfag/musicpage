const player = document.querySelector('.player')
const playBtn = document.querySelector('.play')
const progressContainer = document.querySelector('.progress__container')
const progress = document.querySelector('.progress')
const imgSrc = document.querySelector('.img__src')
const title = document.querySelector('.song')
const audio = document.querySelector('.audio')

// Названия песен
const songs = ['童话故事', '童话故事1']

// Песня по умолчанию
let songIndex = 0

//Init
function loadSong(song) {
    title.innerHTML = song
    audio.src = `public/${song}.mp3`
}

loadSong(songs[songIndex])

//Play
function playSong() {
    player.classList.add('play')
    imgSrc.src = './public/pause.svg'
    audio.play()
}

//Pause
function pauseSong() {
    player.classList.remove('play')
    imgSrc.src = './public/play.svg'
    audio.pause()
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()

    } else {
        playSong()
    }
})

// Progress Bar


audio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100
    progress.style.width = `${progressWidth}%`


    let musicCurrentTime = document.querySelector(".current")
    let musicDuration = document.querySelector(".duration")

    audio.addEventListener("loadeddata", () => {
        let audioDuration = audio.duration
        let totalMin = Math.floor(audioDuration / 60)
        let totalSec = Math.floor(audioDuration % 60)
        if (totalSec < 10) {
            totalSec = `0${totalSec}`
        }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`
    })
    
        let currentMin = Math.floor(currentTime / 60)
        let currentSec = Math.floor(currentTime % 60)
        if (currentSec < 10) {
            currentSec = `0${currentSec}`
        }
        musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
    
    
})

// Set progress
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

//Duration

function audioTime(){

}