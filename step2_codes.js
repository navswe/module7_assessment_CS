/* 1) Sum Zero
 Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise. */

function addToZero(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return `True`;
      }
    }
  }
  return `False`;
}

//test cases:
console.log(addToZero([])); // False
console.log(addToZero([1])); // False
console.log(addToZero([1, 2, 3])); //f=False
console.log(addToZero([1, 2, 3, -2])); //True

/*
TIME COMPLEXITY: Quadratic Time O(n^2), due to the two nested for-loops iterating over an array.
SPACE COMPLEXITY: Linear Space O(1), because the output is binary (True/False) and independent of the size of the input array.
*/

/* 2) Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise. */

function hasUniqueChars(word) {
  //use for loop to iterate through each character in a string
  for (let i = 0; i < word.length; i++) {
    // includes() string method format: includes(searchvalue, start position)
    // if the character in word at index [i] is also in the rest of the word string, returns true.
    if (word.includes(word[i], i + 1) === true) {
      return `False`;
    }
  }
  return `True`; // if all the characters are unique after running the for-loop, return false.
}

//test cases:
console.log(hasUniqueChars("Monday")); // True
console.log(hasUniqueChars("Moonday")); // False

/*
TIME COMPLEXITY: Quadratic Time O(n^2), due to the for-loop, which is O(n), and the includes() method inside the loop, which is also O(n). 
SPACE COMPLEXITY: Linear Space O(1), because the output is binary (True/False) and independent of the size of the input array.
*/

/* 3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not. */

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercaseSentence = sentence.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    if (!lowercaseSentence.includes(letter)) {
      return `False`;
    }
  }
  return `True`;
}

//test cases:
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // True
console.log(isPangram("I like cats, but not mice")); // False

/*
TIME COMPLEXITY: Linear time O(n), because the for-loop is iterating through the alphabet string which will always be the same length, independent of the input string "sentence" that is being pass into the function.
SPACE COMPLEXITY: Linear Space O(1), because the output is binary (True/False) and independent of the size of the input array. There is a local variable "lowercaseSentence" being created inside the function but it is not part of the function's output. */

/* 4) Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.*/

//test cases:

function findLongestWord(wordsList) {
  let longestLength = 0;

  for (let i = 0; i < wordsList.length; i++) {
    const currentLength = wordsList[i].length;
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }

  return longestLength;
}

// test cases:
console.log(findLongestWord(["hi", "hello"])); //5

/*
TIME COMPLEXITY: Linear time O(n), the number of iterations by the for-loop is based on the length of the input array 'wordsList'.
SPACE COMPLEXITY: Linear Space O(1), because the output variable 'longestLength' is a constant-sized variable that is an integer. The variable size does not change based on the input array. */
