// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2)
{
  return Math.max(num1,num2);
}
// Progression #2: The lengthy word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words1 = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
function findScaryWord(arr)
{
  let result='';
  if(arr.length==0)
  {
    return null;
  }
  for(let i=0;i<arr.length;i++)
  {  
    let currentItem=arr[i];
    let letter=currentItem.split(',');
    if(letter[i]==letter[i+1])
    {
      letter[i]="";
      currentItem.join(',');
    }
    if(currentItem.length  > result.length)
    {
      result=arr[i];
    }
   return result;
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr1)
{
  let result=0;
  if(arr1.length==0)
  {
    return 0;
  }
 for(let i=0;i<arr1.length;i+=1)
  {
    result=result+arr1[i];
  }
  return result;
}

// Progression #3.1: add
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(arr1)
{
    let result=0;
    if(arr1.length==0)
    {
      return 0;
    }
    for(let i=0;i<arr1.length;i+=1)
    {
      if(typeof arr1[i] == 'number' && arr1.length==1)
      {
        return arr1[i];
      }
      if(arr1[i]==0)
      {
        return 0;
      }
    }
  for(let i=0;i<arr1.length;i+=1)
   {
    if(typeof arr1[i]== 'number')
    {
    result=result+arr1[i];
    }
    else if (typeof arr1[i] == 'string')
    {
      result=result+arr1[i].length;
    }
    else if(arr1[i]== "true")
    {
    result=result+1;
    }
    else
    {
    result=result+0;
    }
  }
  return result;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr1)
{
  let result=0;
  if(arr1.length==0)
  {
    return null;
  }
  for(let i=0;i<arr1.length;i+=1)
  {
   result=result+arr1[i];
   avg1=result/arr1.length;
  }
  return avg1;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr2)
{
  let result=0;
  if(arr2.length==0)
  {
    return null;
  }
  for(let i=0;i<arr2.length;i+=1)
  {
    if(typeof arr2[i]=='string')
    {
      result=result+arr2[i].length;
     }
  avg1=result/arr2.length;
  }
  return avg1;
}
//

function avg(arr)
{
    let result=0;
    if(arr.length==0)
    {
      return null;
    }
  for(let i=0;i<arr.length;i+=1)
   {
    if(typeof arr[i]== 'number')
    {
    result=result+arr[i];
    }
    else if (typeof arr[i] == 'string')
    {
      result=result+arr[i].length;
    }
    else if(arr[i]== "true")
    {
    result=result+1;
    }
    else
    {
    result=result+0;
    }
  }
  avg=result/arr.length;
  return avg;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr)
{
    let result=0;
    if(arr.length==0)
    {
      return null;
    }
    Array.prototype.unique = function()
    {
      return this.filter(function (value, index, self) { 
        return self.indexOf(value) === index;
      });
      }
    res=arr.unique();
    return res;
  }
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr)
{
    let result=0;
    if(arr.length==0)
    {
      return null;
    }
  for(let i=0;i<arr.length;i+=1)
   {
     ele=arr[i];
     if(ele==arr[i])
     {
       res="true";
     }
     else
     {
       res="false";
     }
     return res;
   }
  }

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr)
{
  let count=0;
  if(arr.length==0)
  {
    return 0;
  }
for(let i=0;i<arr.length;i+=1)
 {
   if(arr[i]!=arr[i+1])
   {
     return 0;
   }
  if(arr[i]==arr[i+1])
   {
     count=count+1;
   }
   else
   {
     count=count+0;
   }  
   if(count==1)
   {
     return 1;
   }
   if(count==5)
   {
     return 5;
   }
   return count;
 }
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
  
}
