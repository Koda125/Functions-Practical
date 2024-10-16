console.log("Hello World");
function logger(){
    console.log("in 'logger'")
}

function returner(){
    console.log('In returner')
    return true;
}
function mathExample(){
    console.log("In mathExample")
    let answer= 10*100;
    return answer;
}

function actualMath( num0, num1 ){
    console.log("In actualMath", num0, num1)
    let answer = num0 * num1;
    return answer;
}

function funMath(num3, num4, num5){
    console.log("in funMath", num3, num4, num5);
    let answer = num3 * num5 / num4;
    return answer;

}

logger();
returner();
console.log('Running the returner', returner() );
console.log("Running mathExample", mathExample() );
console.log("Running actualMath with 30 & 1.63", actualMath( 30, 1.63 ));
console.log("Running actualMath with 453 & .57", actualMath( 453, .57 ));
console.log("running the funMath 40, 259, 95", funMath(40, 259, 95))


let array = [2, -3, 0, -4, 7]

let positives = []
let negatives = []
let zeroes = []

for (let i = 0; i <= array.length; i++){
    if (array[i] == 0){
        zeroes.push(array[i])
    }
    if (array[i] > 0){
        positives.push(array[i])
    }
    if (array[i] < 0){
        negatives.push(array[i])
    }
}
console.log(zeroes);
console.log(positives);
console.log(negatives);

// Roadtrip!

let seatsInCar = 4;
let passengers = [];
let fullTank = false;

function enoughSeats(){
    console.log('in enoughSeats' );
    if(seatsInCar >= passengers.length){
        return true
    }
    else(seatsInCar < passengers.length)
        return false;
    }
        
    


console.log(enoughSeats());

function getInCar( nameOfPassenger ){
    console.log("In getInCar", nameOfPassenger );
    passengers.push( nameOfPassenger );
    return passengers;
}
getInCar( 'Julie');
getInCar( 'Dev');
getInCar( 'Matt');
getInCar( 'Blake');
getInCar( 'Sid');
console.log(enoughSeats());
