const IdSelect = document.getElementById("idInput")
console.log(IdSelect)

function setId (){
    const IdSelect = document.getElementById("idInput").value
    console.log(IdSelect)
    const url = `https://rickandmortyapi.com/api/character/${IdSelect}`

fetch(url).then((response)=>
response.json()
.then((data)=>{
    console.log(data)
}))
}


function setOptions (){
    const url = "https://rickandmortyapi.com/api/character/"
    fetch(url).then((response)=>
    response.json()
    .then((data)=>{
    console.log(data.results)
    }
    
    ))
}

function MostrarArray(){
    console.log(arrayNames)
}

setOptions()