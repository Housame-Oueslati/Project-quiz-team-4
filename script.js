
console.log("Script loaded successfully.");

@param {Array} arr
@returns {Array}

function shuffle(arr) {
  let lastQuestion = arr.length -1;
  
  while(lastIndex > 0) {
    const randQuestion = Math.floor(Math.random() * (lastQuestion +1));
    [arr[lastQuestion], arr[randQuestion]] = [arr[randQuestion], arr[lastQuestion]];
    lastQuestion -= 1;
  }
  return arr;
}

/*
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
//function shuffle(arr) {
  // 1. Initialize last_index (using JavaScript's camelCase convention)
  // We start from the last element (array.length - 1).
  //let lastIndex = arr.length - 1;

  // 2. Loop backwards while there are elements left to shuffle
  // while (lastIndex > 0) {
    // 3. Pick a random index from 0 up to the current lastIndex
    // Math.random() * (lastIndex + 1) gives a float between 0 and (lastIndex + 1)
    // Math.floor() converts it to an integer (e.g., 0 to 10 if lastIndex is 10)
  //  const randIndex = Math.floor(Math.random() * (lastIndex + 1));

    // 4. Swap the element at lastIndex with the element at randIndex
    // This is the modern, clean "destructuring" way to swap in JavaScript
  //  [arr[lastIndex], arr[randIndex]] = [arr[randIndex], arr[lastIndex]];

    /* // This is the traditional swap, just like your Python 'temp' variable
    let temp = arr[lastIndex];
    arr[lastIndex] = arr[randIndex];
    arr[randIndex] = temp;
    */

    // 5. Move to the previous element
  //  lastIndex -= 1;
 // }

  // Return the array, which has been modified in place
 // return arr;
//}

/*
def shuffle(arr):
while last_index > 0:
   rand_index = random.randint(0, last_index)
   temp = arr[last_index] 
   arr[last_index]= arr[rand_index]
   arr[rand_rand_index] = temp
   last_index -= 1
*/


// 2. THE "GLUE" FUNCTION TO FETCH, SHUFFLE, AND START
// =====================================================
/**
 * Fetches the questions, shuffles them, and selects 20
 */

/*
async function getQuizQuestions() {
  console.log("Starting quiz... Fetching questions...");

  try {
    // --- THIS IS THE FETCH PART ---
    // 'await' pauses the function until fetch gets a response
    const response = await fetch('questions.json'); 
    
    // Check if the file was found and the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // --- THIS IS THE JSON PART ---
    // 'await' pauses until the .json() method is done parsing
    const allQuestions = await response.json(); 
    console.log(`Successfully fetched ${allQuestions.length} questions.`);

    // --- THIS IS THE SHUFFLE PART ---
    // Now you just use your 'allQuestions' array
    const shuffledQuestions = shuffle(allQuestions);

    // --- THIS IS THE SLICE PART ---
    const twentyRandomQuestions = shuffledQuestions.slice(0, 20);

    // Now you have your 20 unique random questions!
    console.log("Here are your 20 random questions:");
    console.log(twentyRandomQuestions);

    // You would then call your function to display them
    // displayQuiz(twentyRandomQuestions);

  } catch (error) {
    // Handle any errors (e.g., file not found, invalid JSON)
    console.error("Could not load the quiz:", error);
  }
}

// 3. START THE PROCESS
// ====================
getQuizQuestions();
*/