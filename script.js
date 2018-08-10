let option = ["Rock", "Paper", "Scissors"]

function rock() {

    let result = option[Math.floor((Math.random() * option.length))]
    document.getElementById("result1").innerHTML = "Computer: " + result

    if (result == option[1]) {
        document.getElementById("result2").innerHTML = ("You Lose!")
    }

    if (result == option[0]) {
        document.getElementById("result2").innerHTML = ("Draw")
    }
    if (result == option[2]) {
        document.getElementById("result2").innerHTML = ("You Win!")
    }

    return result




}

function paper() {

    let result = option[Math.floor((Math.random() * option.length))]
    document.getElementById("result1").innerHTML = "Computer: " + result

    if (result == option[2]) {
        document.getElementById("result2").innerHTML = ("You Lose!")
    }

    if (result == option[1]) {
        document.getElementById("result2").innerHTML = ("Draw")
    }
    if (result == option[0]) {
        document.getElementById("result2").innerHTML = ("You Win!")
    }

    return result

}

function scissors() {

    let result = option[Math.floor((Math.random() * option.length))]
    document.getElementById("result1").innerHTML = "Computer: " + result

    if (result == option[0]) {
        document.getElementById("result2").innerHTML = ("You Lose!")
    }

    if (result == option[2]) {
        document.getElementById("result2").innerHTML = ("Draw")
    }
    if (result == option[1]) {
        document.getElementById("result2").innerHTML = ("You Win!")
    }
    return result

}