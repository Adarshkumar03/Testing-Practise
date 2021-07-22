const caesar = (str, key)=>{
  key = key % 26;  
  let lowerCaseStr = str.toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";
  for (let index = 0; index < lowerCaseStr.length; index++) {
      let currentLetter = lowerCaseStr[index];
      if(currentLetter === " "){
          newStr += currentLetter;
          continue;
      }
      let currentIndex = alphabets.indexOf(currentLetter);
      let newIndex = currentIndex + key;
      if(newIndex > 25) newIndex = newIndex - 26;
      if(newIndex < 0) newIndex = newIndex + 26;
      if(str[index] === str[index].toUpperCase()){
          newStr += alphabets[newIndex].toUpperCase();
      }
      else newStr += alphabets[newIndex];
  }
  return newStr;
}

module.exports  = caesar;