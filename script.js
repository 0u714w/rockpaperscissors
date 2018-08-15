let option = ["Rock", "Paper", "Scissors"]

p1Score = 1
cScore = 1

function rock() {

    let result = option[Math.floor((Math.random() * option.length))]
    document.getElementById("result1").innerHTML = "Computer: " + result

    if (result == option[1]) {
        document.getElementById("result2").innerHTML = ("You Lose!")
        document.getElementById("scorediv2").innerHTML = (cScore++)

    }

    if (result == option[0]) {
        document.getElementById("result2").innerHTML = ("Draw")
    }
    if (result == option[2]) {
        document.getElementById("result2").innerHTML = ("You Win!")
        document.getElementById("scorediv1").innerHTML = (p1Score++)
    }

    return result




}

function paper() {

    let result = option[Math.floor((Math.random() * option.length))]
    document.getElementById("result1").innerHTML = "Computer: " + result

    if (result == option[2]) {
        document.getElementById("result2").innerHTML = ("You Lose!")
        document.getElementById("scorediv2").innerHTML = (cScore++)
    }

    if (result == option[1]) {
        document.getElementById("result2").innerHTML = ("Draw")
    }
    if (result == option[0]) {
        document.getElementById("result2").innerHTML = ("You Win!")
        document.getElementById("scorediv1").innerHTML = (p1Score++)
    }

    return result

}

function scissors() {

    let result = option[Math.floor((Math.random() * option.length))]
    document.getElementById("result1").innerHTML = "Computer: " + result

    if (result == option[0]) {
        document.getElementById("result2").innerHTML = ("You Lose!")
        document.getElementById("scorediv2").innerHTML = (cScore++)
    }

    if (result == option[2]) {
        document.getElementById("result2").innerHTML = ("Draw")
    }
    if (result == option[1]) {
        document.getElementById("result2").innerHTML = ("You Win!")
        document.getElementById("scorediv1").innerHTML = (p1Score++)
    }
    return result

}