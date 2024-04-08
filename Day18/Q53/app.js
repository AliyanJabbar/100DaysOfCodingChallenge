// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// A list showing a programmer's skills in detail
var programmer = {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameworks: ["Java", "React", "Vue.js"],
    tools: ["Git", "Visual Studio Code", "Notepad"],
};
// Getting specific skills from the list
var languages = programmer.languages, frameworks = programmer.frameworks, tools = programmer.tools;
// Showing a skill from each category
console.log("A programmer should know \"".concat(languages[2], "\" language , \"").concat(frameworks[1], "\" framework, and should use important tool such as\" ").concat(tools[0], "\""));
