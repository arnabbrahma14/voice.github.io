const btn = document.querySelector(".talk")
const content = document.querySelector(".content")
const video = document.getElementById("video")

const greetings = ['Shut The Fuck Up Bitch!', 'Leave Me Alone', 'Sorry, I love Jayanta']
const archit = ['Ek Number Ka bharwa..!!', 'Chutiya Sala..!!', 'Havas Ka Pujari..!!', 'Did you mean Shit ??']
const Tamoghna = 'Acha Admi hae'
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log(`voice is activated. Start speaking`)
    content.innerHTML = 'voice is activated. Start speaking'
}

recognition.onresult = function(event){
    var current = event.resultIndex
    var transcript = event.results[0][0].transcript
    console.log(transcript)
    content.innerHTML = transcript
    readOutLoud(transcript)
}
var i = 0
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    
    if(message.includes('how are you')){
    speech.text = greetings[Math.floor(Math.random() * greetings.length )] 
    content.innerHTML = speech.text
    }

    if(message.includes('Archit') || message.includes('Singh') || message.includes('Benipal') || message.includes('Manipal') || message.includes('Arijit')){

        speech.text = archit[i++ % archit.length]
        content.innerHTML = speech.text
        
    }
    
    if(message.includes('Tommy') || message.includes('Tamoghna')){

        speech.text = Tamoghna
        content.innerHTML = speech.text
        
    }
    if(message.includes('Jayanta') || message.includes('Pal') || message.includes('join') || message.includes('to') || message.includes('pintu') || message.includes('Pal')){
        speech.text = 'Jayanta Pal is the Head Of the Department of CSE. He runs away in case of emergency. He is also known as Bhalo Baba'
        content.innerHTML = speech.text
    }

    if(message.includes('anubrata') || message.includes('Mondal')){
        speech.text = 'Sutea Lal Kore Debo. Nakamu Ber Kore Debo..!!'
        content.innerHTML = speech.text
    }

    speech.volume = 1
    speech.rate = 0.5
    speech.pitch = 1

    window.speechSynthesis.speak(speech)

}

btn.addEventListener('click', () => (recognition.start()))