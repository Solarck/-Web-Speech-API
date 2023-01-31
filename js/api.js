window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

  function onSpeak (e) {
    document.alert(e.results[0][0].transcript)
}