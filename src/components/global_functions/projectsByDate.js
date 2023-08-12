// This script is custom and not intended to be re-implemented on other places
// It is only intended to work with the projects array 
// It's already organized from oldest to new

// projects array
// const projects = require("../data/projects.json")

// since the array is already from old to new, simple reverse is sufficient
export function newToOld(array){
  let reversedArray = []
  // this is a backwards loop, it starts at the lenght of the array and decreases by 1 until it reaches 0
  for(let i = array.length-1; i >= 0;i--){
    reversedArray.push(array[i])
  }
  return reversedArray
}
