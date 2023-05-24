

const soundCloud = document.querySelector('.sound-cloud')
const off = document.querySelector('#off')
const on = document.querySelector('#on')
const myAudio = document.querySelector('#myAudio')

off.addEventListener('click', () => soundTrack('off'))
on.addEventListener('click', () => soundTrack('on'))

const soundTrack = (soundState) => {
  if (soundState === 'off') {
    on.style.display = 'block'
    off.style.display = 'none'
    soundCloud.style.color = '#08fdd8'
    myAudio.play()
  } else if (soundState === 'on') {
    on.style.display = 'none'
    off.style.display = 'block'
    soundCloud.style.color = '#f50057'
    myAudio.pause()
  }
}

// Part 1 javascript functionality ends here
$(document).ready(function () {
    if (
      !$('#myCanvas').tagcanvas(
        {
          textColour: '#e9123d',
          outlineColour: 'transparent',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          weight: true,
        },
        'tags',
      )
    ) {
      // something went wrong hide the canvas container,
      $('#myCanvasContainer')
    }
  })


  