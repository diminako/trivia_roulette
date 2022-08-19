let trivia = '';
fetch("./trivia_locations.json")
    .then(response => {
        return response.json();
    })
    .then(data => trivia = data.weekdays[0]);

const roulette_btn = document.getElementById("roulette_btn")


function randomSelection() {
    let rando = Math.floor(Math.random() * trivia.monday.length);
    return rando
}

roulette_btn.addEventListener("click", function () {
    console.log(trivia.tuesday[randomSelection()].name)
    console.log(trivia.tuesday[randomSelection()].time)
    console.log(trivia.tuesday[randomSelection()].company)
})