const weekday = document.getElementById("weekday");
const roulette_btn = document.getElementById("roulette_btn");
const name_target = document.getElementById("name_target");
const time_target = document.getElementById("time_target");
const company_target = document.getElementById("company_target");
const notes_target = document.getElementById("notes_target");
const rating_target = document.getElementById("rating_target");
const dayCheckbox = document.getElementsByName("dayCheckbox");
var selectedDays = [];

// Assign the values to the HTML 
const assignValues = (selectedDay, choice) => {
    let capDay = selectedDays[selectedDay][choice].day.charAt(0).toUpperCase() + selectedDays[selectedDay][choice].day.slice(1);
    weekday.innerHTML = capDay;
    name_target.innerHTML = selectedDays[selectedDay][choice].name;
    time_target.innerHTML = selectedDays[selectedDay][choice].time;
    company_target.innerHTML = selectedDays[selectedDay][choice].company;
    notes_target.innerHTML = selectedDays[selectedDay][choice].notes;
    rating_target.innerHTML = selectedDays[selectedDay][choice].rating;
}

// create an array using only the days checked
const pushDaysChecked = () => {
    selectedDays = [];
    dayCheckbox.forEach(day => {
        if (day.checked === true) {
            switch (day.id) {
                case "monday":
                    selectedDays.push(monday)
                    break;
                case "tuesday":
                    selectedDays.push(tuesday)
                    break;
                case "wednesday":
                    selectedDays.push(wednesday)
                    break;
                case "thursday":
                    selectedDays.push(thursday)
                    break;
            }
        }
    })
}

const randomSelection = (selectedDay) => {
    return Math.floor(Math.random() * selectedDays[selectedDay].length);
}

// event listener on the Button click to have the logic pick the correct date and array to run the function to assign the values to the HTML.
roulette_btn.addEventListener("click", function () {
    pushDaysChecked()
    let selectedDay = Math.floor(Math.random() * selectedDays.length)

    let choice = randomSelection(selectedDay);
    assignValues(selectedDay, choice)
})
