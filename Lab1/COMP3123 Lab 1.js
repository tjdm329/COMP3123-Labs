// COMP3123 Full Stack/Javascript ~ Lab Exercise 1
// Thomas del Mundo ~ 101498572
function question1(string) {
    return string
        .split(" ")         //split the string using " " as the separator
                            //capitalize every character at position 0 for every split string
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");         //join the strings back together
}

function question2(a, b, c) {
    return Math.max( a,b,c );
}

function question3(string) {
    if (string.length >= 3) {
        let lastThree = string.slice(-3);   //slice the last 3 characters
        let word = string.slice(0, -3);     //slice every character but the last 3
        return lastThree + word;            //return the rearranged word
    }
    return string;
}

function question4(angle) {
    if (angle > 0  && angle < 90) { return "Acute Angle"}
    else if (angle === 90) { return "Right Angle" }
    else if (angle > 90 && angle < 180) { return "Obtuse Angle" }
    else if (angle === 180) { return "Straight Angle" }
    return "Undefined value"
}

function question5(arr, k) {
    if (arr.length <k){
        return "Array is too small."
    }
    let maxSum = 0
    for (let i = 0; i < k; i++) {   //get first max sum
       maxSum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) { //loop through every index
        let currentIndex = arr[i];

        for (let j = 1; j < k; j++) { //from current index, add the next 2 integers
           currentIndex += arr[i+j];
        }

        if (currentIndex >= maxSum){
            maxSum = currentIndex;
        }
    }
    return maxSum;
}

console.log("--- LAB 1 EXERCISE ---");

console.log("Question 1");
console.log(question1("the quick brown fox"));

console.log("\nQuestion 2");
console.log(question2(1, 0, 1));
console.log(question2(0, -10, -20));
console.log(question2(1000, 510, 440));

console.log("\nQuestion 3");
console.log(question3("Python"));
console.log(question3("Javascript"));
console.log(question3("Hi"));

console.log("\nQuestion 4");
console.log(question4(47));
console.log(question4(90));
console.log(question4(145));
console.log(question4(180));
console.log(question4("a"));

console.log("\nQuestion 5");
console.log(question5([1, 2, 3, 14, 5], 2));
console.log(question5([2, 3, 5, 1, 6], 3));
console.log(question5([9, 3, 5, 1, 7], 2));


