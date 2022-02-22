// problem: suppose you have an array. now you have to add first index and second index and store it to new array. again
// you have to add third and fourth index and store it to the array. you have to do this respectively till the end of array
// index.
// N:B: your array elements must be even. so at first check if the array is even or odd. if odd then terminate the program.
// input: [1,2,3,4,5,6,7,8,9,10]
// output: [3, 7, 11, 15, 19]

let mainArray = [1,2,3,4,5,6,7,8,9,10];

let calculatedArray = [];

let summation = 0;

let count = 0;

if(mainArray.length%2 == 0){
    for(let i = 0; i<mainArray.length; i++){
        summation = summation + mainArray[i];
        count++;
        if(count == 2){
            calculatedArray.push(summation);
            count = 0;
            summation = 0;
            mainArray.slice(mainArray[i]);
        }
    }
}
else{
    console.log('this algorithm can not be applied on odd array elements');
}

for(let i=0; i<calculatedArray.length; i++){
    console.log(calculatedArray[i]);
}

// warning: you are thinking this problem can be solved another way easily. remember you and me are totally different person. so your 
// thinking may better than me. go with your thinking. i am just sharing here mine. 