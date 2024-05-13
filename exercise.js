// ============ exercise ============

// query 1 
// Create a function to check if two objects are equal

function equalObject(obj1, obj2){
    for (var i of Object.keys(obj1)){
        //console.log("i--->",i);
        //console.log("object keys", Object.keys(obj1));
        //console.log("obj1[i]",obj1[i],"obj2[i]",obj2[i]);
        if(obj1[i] !== obj2[i]){
            return false;
        }
    }

    return true;
}

var obj1 = { a : 1, b: 2, d:3};
var obj2 = { a : 1, b: 2, c:3};

console.log(equalObject(obj1,obj2));

// second way

function equalObject2(obj1, obj2){
    for(var key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

var obj1 = { a : 1};
var obj2 = { a : 1};

console.log(equalObject2(obj1,obj2));

// query 2 
// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }


function intersectionObject(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    var tempObj = {};

    for (var item of keys1) {
        if(obj1[item] === obj2[item]){
            tempObj[item] = obj1[item];
        }
    }

    return tempObj;
}

var obj1 = {a:1, b:2}
var obj2 = {a:1, c:3}

console.log(intersectionObject(obj1, obj2));

// query 3
// Exercise
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email

function removeDuplicate(data1, data2) {
    var tempData = data1.concat(data2);
    var nonDuplicateData = [];

    for (var key in tempData) {
        var isfound = false;
        for (var i = 0; i <= nonDuplicateData.length -1 ; i++) {
            if (nonDuplicateData[i].name === tempData[key].name &&
                nonDuplicateData[i].email === tempData[key].email ) {
                isfound = true;
                break;
            }
        }
        if (!isfound) {
            nonDuplicateData.push(tempData[key]);
        }
    }

    return nonDuplicateData;
}

var Data1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 1", email: "student1@mail.com" }
];

var Data2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 1", email: "student1@mail.com" }
    
];

console.log(removeDuplicate(Data1, Data2));

// query 4
// skip

function switchKey(data){
    var result = [];
    for (let item of data){
        var  newObj = {};
        for(let key in item){
            newObj[item[key]] = key;
        }
        result.push(newObj)
    }
    return result;
}

var data = [{name:"Luna", age:20}, {name:"noah", age: 41}];
console.log(data);
console.log(switchKey(data));


// query 5



function factorial(n) { 
    if (n <= 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
console.log(factorial(6));