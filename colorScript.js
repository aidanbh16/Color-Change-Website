let value = 0;
const colors = ["red", "orange", "yellow", "green", "blue", "violet", "purple", "black", "white"]

function setColor1() {
    const property = document.querySelector(".color");
    if (value === 8){
        value = value - 8;
    }
    else{
        value++;
    }
    property.style.backgroundColor = colors[value];
}

function setColor2() {
    const property = document.querySelector(".color");
    if (value === 0){
        value = value + 8;
    }
    else{
        value--;
    }
    property.style.backgroundColor = colors[value];
}

function setColor3() {
    const property = document.querySelector(".color");
    value = value - value;
    if (value === 0){
        let random = Math.floor(Math.random() * 9);
        value = value + random;
    }
    property.style.backgroundColor = colors[value];
}