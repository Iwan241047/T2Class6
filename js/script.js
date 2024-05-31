let numbers = [40, 100, 1];
let points = new Array(40, 100, 1);

console.log(numbers);
console.log(points);

let good = [40];
let bad = new Array(40);

console.log(good);
console.log(bad);8

let dogs = ["golden retriever", "labrador", "staffi", "bulldog", "rotweiler", "toi-pom"];

console.log(dogs);
console.log(dogs.length);
console.log(dogs[0]);
console.log(dogs[dogs.length-1]);
console.log(Array.isArray(dogs));
console.log(dogs.toString());
console.log(dogs.join(" * "));

dogs.pop();

console.log(dogs);

dogs.push("toi-pom");

console.log(dogs);

let dog = dogs.pop();

console.log(dog);
console.log(dogs);

let newDogs = dog.slice(0,4);

console.log(newDogs);
console.log(dogs);

dogs.splice(1,2,"jack russel", "doberman", "pitbull");

function decreaseMars(){
    if (document.getElementById('ticketsMars').value != 0){
        document.getElementById('ticketsMars').value = document.getElementById('ticketsMars').value - 1;
    }
    else{
        document.getElementById('ticketsMars').value = 0;
    }
}

function decreaseSaturn(){
    if (document.getElementById('ticketsSaturn').value != 0){
        document.getElementById('ticketsSaturn').value = document.getElementById('ticketsSaturn').value - 1;
    }
    else{
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;

}

function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;

}

totalMarsCost = 0;
totalSaturnCost = 0;
totalCost = 0;

function total(){
    totalMarsCost = parseInt(document.getElementById('ticketsMars').value ) * 50;
    totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value ) * 70;
    totalCost = totalMarsCost + totalSaturnCost;
    document.getElementById('total').innerHTML = "R " + totalCost;
}