//PROBLEM_0_A
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   //add height and weight to fluffy
   cat["height"]=3;
   cat["weight"]=3;
  
    //Fluffy name is spelled wrongly. Update it to Fluffyy
   cat["name"].concat('y');

   //List all the activities of Fluffyy’s catFriends.
   for(var friend = 0;friend<cat["catFriends"].length;friend++){
       console.log(cat["catFriends"][friend]["activities"].join(","));
   }

   //Print the catFriends names.
   for(var friend = 0;friend<cat["catFriends"].length;friend++){
    console.log(cat["catFriends"][friend]["name"]);
   }

   //Print the total weight of catFriends.
   let totalWeight=0;
   for(var friend = 0;friend<cat["catFriends"].length;friend++){
    totalWeight=totalWeight+cat["catFriends"][friend]["weight"];
   }

   //Print the total activities of all cats
   console.log(cat["activities"].join(","));
   for(var friend = 0;friend<cat["catFriends"].length;friend++){
    console.log(cat["catFriends"][friend]["activities"].join(","));
   }

   //Add 2 more activities to bar & foo cats
   cat["catFriends"][0]["activities"].push("cleaning");
   cat["catFriends"][0]["activities"].push("naps");
   cat["catFriends"][1]["activities"].push("cleaning");
   cat["catFriends"][1]["activities"].push("eating");

   //Update the fur color of bar
   cat["catFriends"][0]["furcolor"]="grey";



//PROBLEM_0_B
var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }

   //Loop over the accidents array. Change atFaultForAccident from true to false.
   for(accident=0;accident<myCar["accidents"].length;accident++){
       myCar["accidents"][accident]["atFaultForAccident"]=false;
   }

   //Print the dated of my accidents.
   for(accident=0;accident<myCar["accidents"].length;accident++){
    console.log(myCar["accidents"][accident]["date"]);
   }

//PROBLEM_1
var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
 var vals = Object.values(obj);
 return(vals);
}
console.log(printAllValues(obj));

//PROBLEM_2
var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
 var vals = Object.keys(obj);
 return(vals);
}
console.log(printAllValues(obj));

//PROBLEM_3
var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 return Object.entries(obj);
}
console.log(convertListToObject(obj));

//PROBLEM_4
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var newObject={};
    newObject[arr[0]]=arr[arr.length-1];
 return newObject;
};
console.log(transformFirstAndLast(arr));

//PROBLEM_5
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(i=0;i<arr.length;i++){
     newObject[arr[i][0]]=arr[i][1];
 }
 return newObject;
}
console.log(fromListToObject(arr));

//PROBLEM_6
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(i=0;i<arr.length;i++){
     tranformEmployeeList[i]={};
     for(j=0;j<arr[i].length;j++){
         tranformEmployeeList[i][arr[i][j][0]]=arr[i][j][1];

     }
 }
 
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));

//PROBLEM_7
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
 if(JSON.stringify(actual)==JSON.stringify(expected))
 console.log("PASSED");
 else
 console.log("FAILED",testName,"EXPECTED",actual,"BUT GOT",expected);

}
assertObjectsEqual(actual,expected,"same");


//PROBELM_8
var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,question,answer) {
       for(i=0;i<securityQuestions.length;i++){
           if(securityQuestions[i]["question"]==question && securityQuestions[i]["expectedAnswer"]==answer)
           return true
        }
           return false;
       }
   
    // your code here
    
   
   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true
   //Test case2:
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase


   //PROBLEM_9
   var students = [
    {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
   function returnMinors(arr)
   { var minors=[];
       for(student=0;student<students.length;student++){
           if(students[student]["age"]<20){
             minors.push(students[student]["name"]);  
           }
       }
       return minors;
   }
   console.log(returnMinors(students));
   



   










