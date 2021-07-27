"use strict";
// i was helped from TA boshra

let leftImageElement = document.getElementById('left');

let centerImageElement = document.getElementById('center');


let rightImageElement = document.getElementById('right');


let MaxAttempts = 10;
let userAttemptscounter = 0;

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;
let namesArr = [];
let votesArr = [];
let shownArr = [];
let number = [];

class Mall {
    constructor(name, source) {


        this.name = name;
        this.source = source;
        this.votes = 0;
        this.shown = 0;
        allMall.push(this);
        namesArr.push(this.name);

    }
}
let allMall = [];


new Mall("banan", 'banana.jpg');
new Mall("bathroom", 'bathroom.jpg');
new Mall("boots", 'boots.jpg');
new Mall("breakfast", 'breakfast.jpg');
new Mall("bubblegum", 'bubblegum.jpg');
new Mall("chair", 'chair.jpg');
new Mall("cthulhu", 'cthulhu.jpg');
new Mall("dog-duck", 'dog-duck.jpg');
new Mall("dragon", 'dragon.jpg');
new Mall("pen", 'pen.jpg');
new Mall("pet-sweep", 'pet-sweep.jpg');
new Mall("scissors", 'scissors.jpg');
new Mall("shark", 'shark.jpg');
new Mall("sweep", 'sweep.png');
new Mall("tauntaun", 'tauntaun.jpg');
new Mall("unicorn", 'unicorn.jpg');
new Mall("water-can", 'water-can.jpg');
new Mall("wine-glass", 'wine-glass.jpg');


// console.log(Mall);

function getRandomIndex() {

    return Math.floor(Math.random() * allMall.length);
}

let pic = [leftImageIndex, rightImageIndex, centerImageIndex];
// console.log(number);

// console.log(getRandomIndex());
let shownpic = [];
function renderThreeImages() {


    leftImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
    // console.log('befor', pic);


    while (leftImageIndex === rightImageIndex || rightImageIndex === centerImageIndex || centerImageIndex === leftImageIndex || number.includes(leftImageIndex) || number.includes(rightImageIndex) || number.includes(centerImageIndex)) {
        rightImageIndex = getRandomIndex();
        leftImageIndex = getRandomIndex();
        centerImageIndex = getRandomIndex();


        shownpic = [leftImageIndex, centerImageIndex, rightImageIndex]
        // console.log('after', pic);
    }







    leftImageElement.src = allMall[leftImageIndex].source;
    rightImageElement.src = allMall[rightImageIndex].source;
    centerImageElement.src = allMall[centerImageIndex].source;
    allMall[leftImageIndex].shown++;
    allMall[rightImageIndex].shown++;
    allMall[centerImageIndex].shown++;


}

renderThreeImages();

leftImageElement.addEventListener('click', handleClick);
rightImageElement.addEventListener('click', handleClick);
centerImageElement.addEventListener('click', handleClick);



function handleClick(event) {
    if (userAttemptscounter < MaxAttempts) {
        if (event.target.id === "left") {
            allMall[leftImageIndex].votes++;

        }

        else if (event.target.id === "right") {
            allMall[rightImageIndex].votes++;

        }
        else {
            allMall[centerImageIndex].votes++;
        }
        renderThreeImages();
        userAttemptscounter++;
    }

    else {
        rightImageElement.removeEventListener('click', handleClick);
        centerImageElement.removeEventListener('click', handleClick);
        leftImageElement.removeEventListener('click', handleClick);
        showChart();

    }

    updateStorge();
}



let parent = document.getElementById("botoon")
let butoon = document.createElement("button")
parent.appendChild(butoon);
butoon.innerHTML = "result";

butoon.addEventListener('click', handleButoon);



function handleButoon(event) {
    // console.log(event.target);
    let list = document.getElementById('result-list');

    for (let i = 0; i < allMall.length; i++) {

        let listItem = document.createElement('li');

        list.appendChild(listItem);

        listItem.textContent = `${allMall[i].name} has ${allMall[i].votes} votes and itis showing ${allMall[i].shown}`

    }
    butoon.removeEventListener('click', handleButoon);

}
// console.log(allMall);


// console.log( votesArr);

let votes = [];
let shown = [];

function updateStorge() {
    // console.log(votes);
    // console.log(shown);
    let stringArr = JSON.stringify(allMall);
    console.log(stringArr);
    localStorage.setItem('allMall', stringArr)
    console.log(allMall);
}






function gitStoreg() {
    let data = localStorage.getItem('allMall');
    console.log(data);

    // console.log(parsedArr);

    if (data !== null) {
        let parsedArr = JSON.parse(data);
        allMall = parsedArr;
        // for (let i = 0; i < parsedArr.length; i++) {


        // new votes(parsedArr[i].votes);
        // new shown(parsedArr[i].shown);
        // }
        // console.log(votes);
        // console.log(shown);
        console.log(parsedArr[i]);
    }
}








// updateStorge();
// showChart();     

function showChart() {
    for (let i = 0; i < allMall.length; i++) {
        console.log(allMall);
        console.log(allMall[i].votes);
        votesArr.push(allMall[i].votes);
        shownArr.push(allMall[i].shown);

    }
    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 3
        },
        {
            label: 'Shown',
            data: shownArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 3
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true

                }
            }
        },
    };


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}



gitStoreg();
// leftImageElement.removeEventListener('click', handleClick);
// rightImageElement.removeEventListener('click', handleClick);
// centerImageElement.removeEventListener('click', handleClick);
