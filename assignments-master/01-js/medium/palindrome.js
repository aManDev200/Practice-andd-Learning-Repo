/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) 
{
  if(str=="")
  {
    return true;
  }
  if(str.length==1)
  {
    return true;
  }
  let str1 = str.toLowerCase().replace(/[\s,\.?!]/g, '');
  let i=0;
  let j=str1.length-1;
  while(i<=j)
  {
    if(str1[i]!=str1[j])
    {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
