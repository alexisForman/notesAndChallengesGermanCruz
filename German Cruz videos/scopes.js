// **Scope
// Accessibility of variables

// Global Scopes:  These variable are visible throughout entire script/program. 
//                 Think of the global scope as a box and everything presented 
//                 in it is looked at from top to bottom left to right.

// Local scopes / inner scope/ block scope / function scope: These have access to 
//                     their own variables as well as their outer scope variables. 
//                     Local scopes are created by functions, conditional statements,
//                     classes, loops, etc.  It does not have access to its inner scope

//                     When we console log something we are looking at its scope. 

function logToConsole() {
    let y = 1;
    console.log(x,y);

    function makeAnotherFunction()  {
`$A function in a function is fine.`
    }

}

