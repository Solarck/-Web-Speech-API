const elementoVoz = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  voz = (e.results[0][0].transcript)
  exibeVoz(voz)
}

function exibeVoz(voz){
  elementoVoz.innerHTML = `
  <div>Você disse</div>
  <span class="box">${chute}</span>
  `
}