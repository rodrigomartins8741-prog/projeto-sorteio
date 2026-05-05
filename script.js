function buttonGenerate(){

    const min = Math.ceil (document.querySelector('.input-min').value)
    const max = Math.floor (document.querySelector('.input-max').value)
    const numberDrawn = document.querySelector('.number-drawn')


    if(max > min){
        const result = Math.floor(Math.random() * (max - min * 1) ) + min
        numberDrawn.innerHTML = (result)
    }

    else{
        alert ('valor maximo tem que ser maior que o valor minimo')
        
    }

}

function resetNumber(){
   location.reload()
}

/*function buttonGenerate(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const numberDrawn = document.querySelector('.number-drawn')

    // ✅ VALIDAR PRIMEIRO
    if(max > min){
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        numberDrawn.innerHTML = result
    }
    else{
        alert('Valor máximo tem que ser maior que o valor mínimo')
        // ✅ NÃO ALTERA O VALOR
    }
}

function resetNumber(){
   location.reload()
}*/