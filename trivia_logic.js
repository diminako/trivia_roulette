let trivia = '';
fetch("./trivia_locations.json")
    .then(response => {
        return response.json();
    })
    .then(data => trivia = data);

const weekday = document.getElementById("weekday");
const roulette_btn = document.getElementById("roulette_btn");
const name_target = document.getElementById("name_target");
const time_target = document.getElementById("time_target");
const company_target = document.getElementById("company_target");
const notes_target = document.getElementById("notes_target");
const rating_target = document.getElementById("rating_target");
const dayCheckbox = document.getElementsByName("dayCheckbox")
let days = [];

// Assign the values to the HTML 
const assignValues = (selectedDay, choice, daysValue) => {
    weekday.innerHTML = daysValue
    name_target.innerHTML = trivia[selectedDay][choice].name
    time_target.innerHTML = trivia[selectedDay][choice].time
    company_target.innerHTML = trivia[selectedDay][choice].company
    notes_target.innerHTML = trivia[selectedDay][choice].notes
    rating_target.innerHTML = trivia[selectedDay][choice].rating
}


const pushDaysChecked = () => {
    days = [];
    dayCheckbox.forEach(day => {
        if (day.checked === true) {
            days.push(day)
        } 
//         else {
//             weekday.innerHTML = "Choose a day, Please.";
//             return
//         }
    })
}

// event listener on the Button click
roulette_btn.addEventListener("click", function () {
    pushDaysChecked()

    function randomSelection(selectedDay) {
        return Math.floor(Math.random() * trivia[selectedDay].length);
    }

    let selectedDay = Math.floor(Math.random() * days.length)
    let choice = randomSelection(selectedDay);
    let daysValue = days[selectedDay].id;

    assignValues(selectedDay, choice, daysValue)
})

