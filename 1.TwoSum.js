/*Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

var twoSum = function(nums, target){
    var previousValues = {};
    for (let i=0; i<nums.length; i++){
        const currentNumber = nums[i];
        const neededNumber = target-currentNumber;
        const index2 = previousValues[neededNumber];

        if(index2 != null)
            return [index2, i] ;
            
        else{
            previousValues[currentNumber] = i;
        }
            
    }
};

var nums = [2,7,11,15];
var target = 9;

console.log(twoSum(nums, target));