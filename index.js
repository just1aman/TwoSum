//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1]

function FindMatchingSum(array, sum)
{
for(let i=1; i<array.length; i++)
{
  arrayitem1 = array[i-1]
  arrayitem2 = array[i]

  if(arrayitem1 + arrayitem2 == sum)
  {
    console.log(i)
    console.log(i-1)
    return [i-1, i]

  }
}
}

FindMatchingSum([2,7,11,15], 9)