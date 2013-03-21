console.log('Loading HTML..');
var htmlBody = document.getElementsByTagName('body')[0].innerHTML;
console.log('HTML Loaded');

console.log('Formatting HTML');
//Array
var htmlReplacement = htmlBody.replace(/(array\([0-9]+\))/g, "<span class='array'>$1</span>");

//Bold
var htmlReplacement = htmlReplacement.replace(/(\[)/g, "<br>$1");

//Indent
var htmlReplacement = htmlReplacement.replace(/({)/g, "$1<span class='indent'>");
var htmlReplacement = htmlReplacement.replace(/(})/g, "</span>$1");

//String Matching: 
//a-z good
//A-Z good
//0-9 good
// . = \\. good
// & = & good
// ! = \\!
// _ = _ good
// (spaces) = \s* good
// - = \- good
// : = : good
// , = , good
// + = \+
// ~ = ~ good
// / = \/ good
// ( = \( good
// ) = \) good
// ; = ; 
var htmlReplacement = htmlReplacement.replace(/(string\([0-9]+\))\s\"([a-zA-Z0-9\\.&!_\s*:,\+~\/\\(\);-]+)\"/g, "$1 \"<span class='string'>$2</span>\"");

document.getElementsByTagName('body')[0].innerHTML = htmlReplacement;

console.log('HTML Formatted Successfully');