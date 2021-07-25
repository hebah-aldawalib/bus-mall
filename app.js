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


function Mall(name, source) {


    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    mall.push(this);


}
let mall = [];


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


console.log(Mall);

function getRandomIndex() {

    return Math.floor(Math.random() * mall.length);
}

// console.log(getRandomIndex());

function renderThreeImages() {

    leftImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
    console.log(leftImageIndex);
    while (leftImageIndex === rightImageIndex || rightImageIndex === centerImageIndex || centerImageIndex === leftImageIndex) {
        rightImageIndex = getRandomIndex();
        leftImageIndex = getRandomIndex();
        centerImageIndex = getRandomIndex();
    }


    leftImageElement.src = mall[leftImageIndex].source;
    rightImageElement.src = mall[rightImageIndex].source;
    centerImageElement.src = mall[centerImageIndex].source;
    mall[leftImageIndex].shown++;
    mall[rightImageIndex].shown++;
    mall[centerImageIndex].shown++;
}
renderThreeImages();

leftImageElement.addEventListener('click', handleClick);
rightImageElement.addEventListener('click', handleClick);
centerImageElement.addEventListener('click', handleClick);

function handleClick(event) {
    if (userAttemptscounter < MaxAttempts)

       

    {
        if (event.target.id === "left") {
            mall[leftImageIndex].votes++;

        }

        else if (event.target.id === "right") {
            mall[rightImageIndex].votes++;

        }
        else {
            mall[centerImageIndex].votes++;
        }
        renderThreeImages();
        userAttemptscounter++;
    }
   
  else {
 rightImageElement.removeEventListener('click', handleClick);
centerImageElement.removeEventListener('click', handleClick); 
leftImageElement.removeEventListener('click', handleClick);

    }

    
}

let parent = document.getElementById("botoon")
let butoon = document.createElement("button")
parent.appendChild(butoon);
butoon.innerHTML = "result";

butoon.addEventListener('click', handleButoon);



function handleButoon(event) {
    // console.log(event.target);
    let list = document.getElementById('result-list');

    for (let i = 0; i < mall.length; i++) {

        let listItem = document.createElement('li');

        list.appendChild(listItem);

        listItem.textContent = `${mall[i].name} has ${mall[i].votes} votes and itis showing ${mall[i].shown}`

    }
    butoon.removeEventListener('click', handleButoon);
}




// leftImageElement.removeEventListener('click', handleClick);
// rightImageElement.removeEventListener('click', handleClick);
// centerImageElement.removeEventListener('click', handleClick);
