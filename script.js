function firstWord(str) {
  // Trim leading and trailing whitespaces
  const trimmedStr = str.trim();

  // Check if the trimmed string is empty
  if (trimmedStr === '') {
    return str;
  }

  // Find the index of the first space
  const firstSpaceIndex = trimmedStr.indexOf(' ');

  // If no space is found, return the entire string, otherwise return the first word
  return firstSpaceIndex === -1 ? trimmedStr : trimmedStr.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

