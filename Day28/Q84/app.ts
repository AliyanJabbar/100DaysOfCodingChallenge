// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.

// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacingText(sentence: string): string {
  return sentence.replace("JavaScript", "TypeScript");
}
console.log(replacingText("JavaScript is a super set of JavaScript"));
//Output: TypeScript is a super set of JavaScript

//for replacement of a word from whole text, we will use /word/g

function replacingWordText(sentence: string): string {
  return sentence.replace(/JavaScript/g, "TypeScript");
  // Uses a regular expression with the 'g' flag for a global replacement
}
console.log(
  replacingWordText(
    "I love JavaScript becuase I started coding from JavaScript"
  )
);
//Output: I love TypeScript becuase I started coding from TypeScript
