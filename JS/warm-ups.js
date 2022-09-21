function areaTriangle(b, h){

    console.log('The area of the triangle is ' + (b * h) / 2 )
}
//areaTriangle(6, 4)


function countUp(){
    for(i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log(i + ' Fizz')
    }
    }
}

countUp()
