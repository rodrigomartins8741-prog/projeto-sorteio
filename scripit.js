function buttonGenerate(){

    const min = Math.ceil (document.querySelector('.input-min').value)
    const max = Math.floor (document.querySelector('.input-max').value)
    const numberDrawn = document.querySelector('.number-drawn')


    const result = Math.floor(Math.random() * (max - min * 1) ) + min
   
    numberDrawn.innerHTML = (result)

}

function resetNumber(){
   location.reload()
}