function firstWord(s) {
  // your code here
	 if (str === '' || !str.includes(' ')) {
    return str;
  }

  // Find the index of the first space
  const firstSpaceIndex = str.indexOf(' ');

  // Extract and return the first word up to the first space
  return str.substring(0, firstSpaceIndex);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
