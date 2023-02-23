let relogio = () => {
    let Data = new Date()
    let hou = Data.getHours()
    let min = Data.getMinutes()
    let sec = Data.getSeconds()

    if (hou < 10){
        hou = "0" + hou
    }

    if (min < 10){
        min = "0" + min
    }

    if (sec < 10){
        sec = "0" + sec
    }

    let horario = hou + ":" + min + ":" + sec
    let oRelogio = document.querySelector("#relogio")
    oRelogio.innerHTML = horario
}

setInterval(relogio, 1000) //chamar a função atualizarHorario() a cada 1000 milissegundos (1 segundo)

let setHoras = document.querySelector("#setHoras")
let setMinutos = document.querySelector("#setMinutos")