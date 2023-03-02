const botaoIniciaCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')
const botaTiraFoto = document.querySelector('[data-tirar-foto]')
const canvas = document.querySelector('[data-video-canvas]')
const mensagem = document.querySelector('[data-mensagem]')
const botaoEnviar = document.querySelector('[data-enviar]')

let imagemURL = ""

botaoIniciaCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoIniciaCamera.style.display = "none"
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo    
})

botaTiraFoto.addEventListener("click", function (){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/jpg")

    campoCamera.style.display = "none"
    mensagem.style.display = "block"

})

botaoEnviar.addEventListener("click", () => {
    const recebeDadosLocalStorage = localStorage.getItem("cadastro")
    const converteRetorno = JSON.parse(recebeDadosLocalStorage)

    console.log(recebeDadosLocalStorage)

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = "./abrir-conta-form-3.html"
    
})

