function showMultiplicationTable(x){
    for(let i = 1; i <= 10; i++){
        console.log(x * i);
    }
}
//showMultiplicationTable(7);


function randomNumber() {
    for (let i = 0; i < 10; i++) {
        var random = Math.floor((Math.random() * 180) + 21);
        if (random % 2 === 0) {
            console.log(random + " is even" )
        } else {
            console.log(random + " is odd")
        }
    }
}
//randomNumber()


function numberPyramid(){
for(i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}
}
//numberPyramid()


function countDown(){
for(let i = 100; i >= 5; i-= 5){
    console.log(i)
 }
}
//countDown()













