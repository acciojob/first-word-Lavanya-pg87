function firstWord(s) {
  // your code here
	let a = s.split(" ");
	if(a[0] === ""){
		return a[1];
	}
		return a[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
