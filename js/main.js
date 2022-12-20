var elForm = document.querySelector("form")
var elInput = document.querySelector("input")
var elbtn = document.querySelector('.btn')
var elPerson = document.querySelector('.person')
var elBike = document.querySelector('.bike')
var elCar = document.querySelector('.car')
var elAirplane = document.querySelector('.airplane')
var elTitle = document.querySelector("h1")
var elLabel = document.querySelector("label")

elForm.addEventListener('keyup', function (evn) {
    evn.preventDefault()
    if (elInput.value.length <= 10) {
        elInput.style.border = "2px solid green"
        elbtn.style.border = "2px solid green"
        elbtn.style.color = "green"
        elLabel.style.color = "green"
        
    }
     else {
        elInput.style.border = "2px solid red"
        elbtn.style.border = "2px solid red"
        elbtn.style.color = "red"
        elLabel.style.color = "red"
    }


    var input = document.querySelector('input').value


    let person = Math.floor(input / 4)
    let bike = Math.floor(input / 20)
    let car = Math.floor(input / 70)
    let airplane = Math.floor(input / 800)
    if (input.length <= 10) {
        if (0 < input) {
            elPerson.textContent = person

        } else {
            elTitle.textContent = "Faqat son kiriting 🤦‍♂️"
        }
        if (0 < input) {
            elBike.textContent = bike
        } else {
            elTitle.textContent = "Faqat son kiriting 🤦‍♂️"
        }
        if (0 < input) {
            elCar.textContent = car

        } else {
            elTitle.textContent = "Faqat son kiriting 🤦‍♂️"
        }
        if (0 < input) {
            elAirplane.textContent = airplane
        } else {
            elTitle.textContent = "Faqat son kiriting 🤦‍♂️"
        }

        if (10 >= input) {
            elTitle.textContent = "Sizga Pioda Borish Qulay 🚶‍♀️"

        } else if (50 >= input) {
            elTitle.textContent = 'Sizga Velosipetda Borish Qulay 🚲'
        } else if (300 >= input) {
            elTitle.textContent = "Sizga Mashinada Borish Qulay 🚖"

        } else if (300 <= input) {
            elTitle.textContent = "Sizga Samalyotda Borish Qulay 🛫"
        } else {
            elTitle.textContent = "Faqat son kiriting 🤦‍♂️"
        }
    } else {
        elTitle.textContent = "Ozroq Son Kiriting 🙅‍♂️"
}




})