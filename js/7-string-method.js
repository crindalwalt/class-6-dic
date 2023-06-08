console.log("Hello world from String method");

let str = "My name is Shahzad Farooq";
// console.log("old string: "+str)


let update = str.toUpperCase();
update = str.toLowerCase();
update = str.length
update = str.charAt(13)
update = str.indexOf("Shahzad")
update = str.replace("Shahzad","Talha")
update = str.startsWith("sh")
update = str.concat(" and I am a full stack developer")
update = str.includes("tention")
update = str.endsWith("farooq");
update = str.lastIndexOf("Farooq")
update = str.substring(19,25)
// update = str.

// console.log("new string: "+update)


let friends = ["Shahzad","Zaid","Muhtshim","Haider","Abdullah","Bazaid"];


// let newFriend = prompt("Enter the name of your new friend");

friends.push("Maneer");
friends.pop();
friends.unshift("Ubaid");
friends.shift();
console.log(friends);
