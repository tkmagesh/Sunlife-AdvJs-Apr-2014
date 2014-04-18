
function getPrimeFinder(){
  var result = { 0 : true, 1 : false, 2 : true, 3 : true };

  return function isPrime(n){
    
    if (typeof result[n] !== "undefined"){
       console.log("From cache..");
       return result[n];
    }
    result[n] = true;
    for(var i=2;i<= (n/2);i++){
       if (n % i === 0) result[n] = false;
       break;
     }
    console.log("freshly brewed..");
    return result[n];
  }

}

/* Using "Self rewriting functions*/

function isPrime(n){
  var result = { 0 : true, 1 : false, 2 : true, 3 : true };

  isPrime = function(n){
    
    if (typeof result[n] !== "undefined"){
       console.log("From cache..");
       return result[n];
    }
    result[n] = true;
    for(var i=2;i<= (n/2);i++){
       if (n % i === 0) result[n] = false;
       break;
     }
    console.log("freshly brewed..");
    return result[n];
  }
  return isPrime(n);

}