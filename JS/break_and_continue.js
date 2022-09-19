// function oddNumbers() {
//     let userOddNumber = prompt("Pick an odd number between 1 and 50!")
//     for (let i = 1; i <= 50; i += 2) {
//         if (userOddNumber % 2 === 0) {
//             alert('That is an even number. I said to pick an odd number!')
//             break;
//         } else if (i === userOddNumber) {
//             continue;
//         }
//           console.log('Here is an odd number: ' + i)
//       }
// }
//oddNumbers()


function oddNumbers() {
    let userOddNumber;
    for(i = 1;; i++){
        userOddNumber = prompt("Pick an odd number between 1 and 50!");
        if(userOddNumber % 2 === 1 && userOddNumber > 0 && userOddNumber < 50){
            break;
        }
    }
    for(i = 1; i < 50; i += 2){
        if (i === userOddNumber){
            continue;
        }
        console.log('Here is an odd number: ' + i);
    }
}
//oddNumbers()