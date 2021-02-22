arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0
let text

function Retry(){
    location.reload()
}
function Cancel(){
    document.querySelector(".header").innerHTML = text
}

function createFinalWindow(){
    let div = document.createElement("div")
    div.className = "request"
    let p = document.createElement("p")
    p.innerHTML = "There are no numbers left"
    let but1 = document.createElement("button")
    let but2 = document.createElement("button")
    but1.innerHTML = "Cancel"
    but2.innerHTML = "Retry"
    but1.className = "but1"
    but2.className = "but2"
    but1.value = "No"
    but2.value = "Ok"
    but2.addEventListener("click" , Retry )
    but1.addEventListener("click" , Cancel )
    div.appendChild(p)
    div.appendChild(but2)
    div.appendChild(but1)
    text = document.querySelector(".header").innerHTML
    document.querySelector(".header").innerHTML = ""
    document.querySelector(".header").appendChild(div)
}

function RandomNumber(){
    if(count == 10){
        createFinalWindow()
    } else {
        document.getElementById("description").innerHTML = "Random number in the range of 1 to 10"
        document.getElementById("hint").innerHTML = ""
        let a = Math.floor(Math.random() * 10 - count)
        if(a < 0) a = 0
        let num = arr[a]
        document.getElementById("random_number").innerHTML = "- "+num+" -"
        arr.splice(a , 1)
        count++ 
    }
}
