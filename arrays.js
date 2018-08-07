var studentNames = [
  "Pauline",
  "John",
  "Mohamed",
  "Paul",
  "Julie",
  "Luca"
];

// add to the end (new last index)
studentNames.push("Alice");

// add to the start (new index 0)
studentNames.unshift("Abi");


// sPlice is for removing items anywhere in the array

// remove starting at INDEX 4
// remove ONLY 1 item
var index = studentNames.indexOf("Paul");
console.log("Removing Paul (index " + index + ")");
studentNames.splice(index, 1);

console.log(studentNames);


console.log(studentNames.length);

console.log(studentNames[0]);

console.log(studentNames[studentNames.length - 1]);


for (var i = 0; i < studentNames.length; i += 1) {
  var name = studentNames[i];
  console.log(name.charAt(0) + ".");
}

// forEach (better loop for arrays)
studentNames.forEach(function logInitial (name) {
  console.log(name.charAt(0) + ".");
});

// logInitial(studentNames[0])
// logInitial(studentNames[1])
// logInitial(studentNames[2])
// ....
