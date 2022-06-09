// Code your solution here
"use strict";
function findMatching(oneSauce, soughtAfter) {
  return oneSauce.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === soughtAfter.toLowerCase()
  );
}
function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}
function matchName(origin, nameLookedFor) {
  return origin.filter((record) => record.name === nameLookedFor);
}
