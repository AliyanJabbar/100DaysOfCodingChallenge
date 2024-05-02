// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance(mean example).

// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.

import { user } from "./class";

let ali = new user("Ali");
ali.greet();
