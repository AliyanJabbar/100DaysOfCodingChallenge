// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// A list showing a programmer's skills in detail
let programmer = {
  languages: ["TypeScript", "JavaScript", "Python"],
  frameworks: ["Java", "React", "Vue.js"],
  tools: ["Git", "Visual Studio Code", "Notepad"],
};

// Getting specific skills from the list
let { languages, frameworks, tools } = programmer;


// Showing a skill from each category
console.log(`A programmer should know "${languages[2]}" language , "${frameworks[1]}" framework, and should use important tool such as" ${tools[0]}"`)
