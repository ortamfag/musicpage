const player = document.querySelector('.player')
const playBtn = document.querySelector('.play')
const progressContainer = document.querySelector('.progress__container')
const progress = document.querySelector('.progress')
const imgSrc = document.querySelector('.img__src')
const title = document.querySelector('.song')
const audio = document.querySelector('.audio')

// Названия песен
const songs = ['pigs', 'pigs1']

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

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

}
audio.addEventListener('timeupdate', updateProgress)

// Set progress
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)