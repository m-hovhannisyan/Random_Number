arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0

function Retry(){
    location.reload()
}
function Cancel(){
    document.querySelector(".header").innerHTML = text
}

function RandomNumber(){
    if(count == 10){
        let res = confirm("There are no numbers left")
        if(res){
            location.reload()
        } else {
            
        }
    } else {
        document.getElementById("description").innerHTML = "Random number in the range of 1 to 10"
        document.getElementById("hint").innerHTML = ""
        let a = Math.floor(Math.random() * 10 - count)
        if(a < 0) a = 0
        let num = arr[a]
        document.getElementById("random_number").innerHTML = "- "+num+" -"
        arr.splice(a , 1)
        count ++ 
    }
}