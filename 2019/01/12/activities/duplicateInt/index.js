var arr1 = [ 2, 5, 6, 3, 5 ]
var arr2 = [ 1, 3, 4, 1, 3, 4 ]
var arr3 = [ 2, 4, 5 ]
var dupInt = function(nums){
    var index =nums.length;
    for (var i = 0; i < nums.length; i++) {
        if(nums.includes(nums[i], i+1) && (nums.indexOf(nums[i],i+1) < index)){
            index = nums.indexOf(nums[i],i+1);
        }
    }
    return nums[index];
}
console.log(dupInt(arr1));
console.log(dupInt(arr2));
console.log(dupInt(arr3));
//Tom
// var findDup = function(arr){
//     var duplicate;
//     for(var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 duplicate = arr[i];
//                 return duplicate;
//             }
//         }
//     }

//     return duplicate;
// }
// const duplicate = array => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//       if (newArray.includes(array[i])) {
//         return array[i];
//       } else {
//         newArray.push(array[i]);
//       }
//     }
//   };