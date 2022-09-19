 function double(){
     var i = 1;
     while(i <= 32768){
         console.log(i * 2);
         i *= 2
     }
 }
//double()



function iceCream() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    do {
        let customerCones = Math.floor(Math.random() * 5) + 1;
        if ((allCones - customerCones) < 0) {
            console.log(('I cannot sell you ' + customerCones));
        } else {
            console.log((customerCones + ' cones sold'));
            allCones -= customerCones
            console.log('cones left: ' + allCones)
        }
    } while (allCones > 0);
}
//iceCream()

