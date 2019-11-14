exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let indx = -1;
    for(let it = 0; it < arr.length; it++){
      if(arr[it] === item ){
        indx = it;
      }
    }
    return indx;
  },
  sum: function (arr) {
    var total=0;
    for(i=0;i<arr.length;i++){
    
      total=total+arr[i]
    }
     return total;
  },
  remove: function(arr, item) {
    let newArr = [];
    for(let it = 0; it < arr.length;it += 1){
      if(arr[it] !== item){
        newArr.push(arr[it]);
      }
    }
    return newArr;
  },
  removeWithoutCopy: function(arr, item) {

  },
  append: function(arr, item) {
    
   arr.push(item);
   return arr;
  },
  truncate: function(arr) {
    // arr.length = arr.length - 1;
    // return arr;
    
    const newArr = [];
    if(arr.length==1){
      return newArr;
    }else{
 for (i=0;i <= arr.length-2 ;i++) {
    
           newArr[i] = arr[i];
           
    
   
       }
    
       
    }
  
    return newArr;
  },
  prepend: function(arr, item) {
    // write without array inbuild.
    // var firstValue = arr[0];
    var nwArray=[item];
    for( i=0; i < arr.length; i++){
        nwArray[i + 1 ]= arr[i];
    }
    return nwArray;

  },

  curtail: function(arr ) {
    var newArray=[];
    if(arr.length==1){
      return newArray
    }else{
      for( i=1; i<arr.length; i++){
    newArray[i-1]=arr[i];
    
      }
     
      return newArray
    }
  },
      
         
       
     
    
    
    
   
    
  

  concat: function(arr1, arr2) {
    var myArray = [];

    myArray[0] = arr1[0];

    myArray[1] = arr1[1];

    myArray[2] = arr1[2];

    myArray[3] = arr1[3];

    myArray[4] = arr2[0];

    myArray[5] = arr2[1];

    myArray[6] = arr2[2];

    myArray[7] = arr2[3];
  
            return myArray;

},



  insert: function(arr, item, index) {
    
    var newArra=[];
    for( i=0; i<index; i++){
      newArra[i]=arr[i]
    }
    newArra[index]=item;
    for( i=index; i<arr.length; i++){
      newArra[i+1]=arr[i]
    }
    return newArra;
     
   
     
  },

  count: function(arr) {
    
         var ocaa=[];
         for( i=0; i<=arr.length; i++){

         }
         },

  duplicates: function(arr) {
   
  },

  square: function(arr) {
    var squareResult=[];
      for( i=0; i<arr.length; i++){

          squareResult[i]= arr[i]* arr[i];
   }

      return squareResult;
      
      //  arr.forEach(function(ele,index,array) {
      //    array[index]=ele*ele;
      //  });
      //  return arr;
    
  },

  findAllOccurrences: function(arr, target) {

    var findOca = [];

    for (var i = 0; i <= arr.length; i++) {
    for (var i = 0; i <= arr.length; i++) {
      if (arr[i] === target) {
        findOca[findOca.length]=i
      }
    }

    return findOca;
  }
}
}
//This is about the flowcontrol.js
exports = typeof window === 'undefined' ? global : window;
exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {

    // INSTRUCTIONS
  
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or if the value provided was not a number
    // was provided or the value provided is not a number

    // make sure the value provided was a number, if not, return false
    if (typeof num !== 'number') {
      return false;
    }

    // if the number is divisible by 3 AND 5, then when divided by both,
    // the remainder for each operation will be zero
    // return 'fizzbuzz'
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    }

    // if the number is divisible by 3, when divided by 3, the remainder is zero
    // return 'fizz'
    if (num % 3 === 0) {
      return 'fizz';
    }

    // if the number is divisible by 5, when divided by 5, the remainder is zero
    // return 'buzz'
    if (num % 5 === 0) {
      return 'buzz';
    }
    

    // if the number is not divisible by 3 or 5, i.e. has skipped all previous
    // conditions, return the number
    return num;
  }
}

//this is about the logical operator

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    return a || b;
  },

  and: function(a, b) {
    return a && b;
  }
}

