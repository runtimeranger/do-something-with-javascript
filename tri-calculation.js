// problem: suppose you have an array. now you have to add first index, second index and third index and store it to new array. again
// you have to add third , fourth and fifth index and store it to the array. you have to do this respectively till the end of array
// index.
// N:B: your array elements must be devided by 3 and reminder should be 0. so at first check this. if not then terminate the program.
// input: [1,2,3,4,5,6,7,8,9]
// output: [6, 15, 24]

let mainArray = [1,2,3,4,5,6,7,8,9];

let calculatedArray = [];

let summation = 0;

let count = 0;

if(mainArray.length%3 == 0){
    for(let i = 0; i<mainArray.length; i++){
        summation = summation + mainArray[i];
        count++;
        if(count == 3){
            calculatedArray.push(summation);
            count = 0;
            summation = 0;
        }
    }
}
else{
    console.log('this algorithm can not be applied on that kind of array');
}

for(let i=0; i<calculatedArray.length; i++){
    console.log(calculatedArray[i]);
}

// warning: you are thinking this problem can be solved another way easily. remember you and me are totally different person. so your 
// thinking may better than me. go with your thinking. i am just sharing here mine. 
// thank you