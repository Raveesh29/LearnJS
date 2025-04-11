// function to find out maxium of two numbers

function find_max(num1,num2){
    if (num1 > num2) return num1;
    
    return num2;
}


function isLandscape(width,height){
    return width > height;
}

function fizzBuzz(input){
    if (typeof(input) !== 'number'){
        return 'not a number';
    }
    if (input % 15 === 0){
        return 'FizzBuzz';
    }
    else if(input % 3 === 0){
        return 'Fizz';
    }
    else if(input % 5 === 0){
        return 'Buzz';
    }else{
        return input;
    }


}

console.log('---- Exercise -----')

console.log(find_max(10,-9));
console.log(isLandscape(40,10))

console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(2));
console.log(fizzBuzz('Hello'));