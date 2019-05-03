// This algorithm check if a word is Palindrome or not

function isPalim(word){
  let og = word;
  let newWord = "";
  for (let i = 0; i<word.length; i++ ){
    newWord = word.charAt(i) + newWord;
  }
  if (og === newWord)return true;
  else return false;
}
