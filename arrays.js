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

  }
};


