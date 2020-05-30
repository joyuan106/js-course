//The Complete JavaScript Course 2020


//================================================================
// Coding Challenge #3

var bills = [124, 48, 268];
console.log("bills: " + bills);

function calcTips (bill) {
    if (bill < 50) {
        return (bill*0.2).toFixed(2);
    } else if (bill>200) {
        return (bill*0.1).toFixed(2);
    } else {
        return (bill*0.15).toFixed(2);
    }
}

var tips = [];
bills.forEach((bill) => {
    tips.push(calcTips(bill));
});
console.log("tips: " + tips);

var totals = bills.map((t, i) => (parseFloat(t) + parseFloat(tips[i])).toFixed(2));
console.log("totals: " + totals);

//================================================================
// Arrays

// // common arrays functions
// var myArr = ['a', false, 'b', true, 5];

// console.log(myArr);
// myArr.push('d');
// console.log(myArr);
// myArr.unshift(0);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.indexOf('b'));
// console.log(myArr.indexOf(6));

//================================================================
// Function Statements + Expressions

// // function declaration
// function funcD(p1, p2) {
//     return p1*p2;
// };

// // function expression
// var funcE = function(p1, p2) {
//     return p1+p2;
// }

//================================================================
// Coding Challenge #2

// function Team(name, scores) {
//     this.name = name,
//     this.scores = scores,
//     this.avg = calcAvg(scores)
// }

// var teams = [
//     new Team('John', [89, 120, 103]),
//     new Team('Mike', [116, 94, 123]),
//     new Team('Mike2', [97, 134, 105])
// ]

// function calcAvg (scores) {
//     return scores.reduce((s,c) => s+c, 0) / scores.length;
// }

// // Seong's soln
// function getAverage(teams) {
//     let avg = 0;
   
//     return teams.reduce((acc, item) => item.avg > avg ? item : acc, {}).name
// }

// // my soln
// function highestAvg (teams) {
//     var highestName = [];
//     var currHighestAvg = 0;
//     for (let i=0; i<teams.length; i++) {
//         if (teams[i].avg > currHighestAvg) {
//             currHighestAvg = teams[i].avg;
//             highestName.length = 0;
//             highestName.push(teams[i].name);
//         } else if (teams[i].avg == currHighestAvg) {
//             highestName.push(teams[i].name);
//         }
//     }
//     return highestName;
// }

// function retAvg (teams, name) {
//     for (let i=0; i<teams.length; i++) {
//         if (teams[i].name == name) {
//             return teams[i].avg;
//         }
//     }
//     return 'Team name not found';
// }

// console.log("#1:");
// console.log("John's average: " + retAvg(teams,'John'));
// console.log("Mike's average: " + retAvg(teams,'Mike'));
// console.log("Any's average: " + retAvg(teams,'Any'));
// console.log("--------------");
// console.log("#2:");
// console.log("Higher average goes to: " + highestAvg(teams));
// console.log("--------------");
// console.log("#3:");
// console.log("skipped");
// console.log("--------------");
// console.log("#4:");
// teams.push(new Team('Mary', [97, 134, 105]));
// console.log("Highest average goes to: " + highestAvg(teams));
// console.log("getAverage: " + getAverage(teams));

//================================================================

