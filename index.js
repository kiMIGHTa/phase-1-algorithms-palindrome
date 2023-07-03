function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord=[]
  for(i=word.length-1;i>=0;i--){
    reverseWord+=word[i]
  }
 

  if(reverseWord===word){
    return true
  }else{
    return false
  }
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The code creates an empty array reverseWord and pushes each character from the original word backwards
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
