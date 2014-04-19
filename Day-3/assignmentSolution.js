function bindThis(obj,fn){
   return function(){
      return fn.apply(obj,[].slice.call(arguments,0));
   }
}