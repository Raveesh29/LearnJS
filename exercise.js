let result
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

console.log('--- Exercise : max of a number ----')

console.log(find_max(10,-9));
console.log(isLandscape(40,10))

console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(2));
console.log(fizzBuzz('Hello'));

function checkSpeed(speed){
    const SpeedLimit = 70
    points = (Math.floor(speed / 5  - (SpeedLimit/5)))
    // console.log(points)
    if (points <=0){
        return 'Ok'
    }
    if (points >= 12){
        return "Liscence Suspended"
    }

    return "Points --> "+points

}

console.log('--- Exercise : check speed ---');
console.log(checkSpeed(10));
console.log(checkSpeed(75));
console.log(checkSpeed(92));
console.log(checkSpeed(180));
console.log(checkSpeed(130));
console.log(checkSpeed(73));
console.log(checkSpeed(88));

console.log('--- Exercise : even or odd --- ')

function showNumbers(limit){

    for(let i = 0; i<=limit; i++){
        const evenOrOdd = (i%2 === 0) ? "EVEN" : "ODD"
        console.log(i,evenOrOdd)
    }
}

showNumbers(15);

console.log('--- Exercise : count truthy values --- ')


function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value){
            count = count + 1;
        }
    }
    return count;
}

result = countTruthy([1,0,'hello',false,NaN]);
console.log(result);

console.log('--- Exercise : string properties --- ');

const movie = {
    title:'a',
    releaseYear:2018,
    rating:4.5,
    director:'b'
};

function showProperties(obj){
    for(let key in obj){
        value = obj[key];
        if (typeof(value) == 'string'){
            console.log(key,value);
        };
    };
}

showProperties(movie)

console.log('--- Exercise : Sum of multiples of 3 and 5 ---');

function sum(limit){
    let total = 0;
    
    for(let i = 0;i<=limit;i++){
        if(i%3 == 0){
            total = total + i;
            continue;
        }
        if(i%5 == 0){
            total = total + i;
            continue;
        }
    }
    
    return total;
}

result = sum(10);
console.log(result);


// calculate the grade 

console.log('--- Exercise: Calculate Grade ---');

const marks = [80,80,50];


result = calculateGrade(marks)
console.log(result)

function calculateGrade(marks){
    const averageMarks = calculateAverage(marks);

    if (averageMarks<=59) return 'F';
    if (averageMarks<=69) return 'D';
    if (averageMarks<=79) return 'C';
    if (averageMarks<=89) return 'B';
    if (averageMarks<=100) return 'A';

};

function calculateAverage(marks) {
    let totalMarks = 0;
    for (let score of marks) {
        totalMarks += score;
    }
    return totalMarks / marks.length;
};

console.log('--- Exercise : show stars ---')

function showStars(rows){
    
    for(let row =1; row <= rows; row++){
        pattern = "";
        for(let i = 0; i < row; i++)
        pattern+="*";
    console.log(pattern);
    }
}

showStars(5);


