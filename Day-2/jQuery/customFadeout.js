function fadeOut(elem,totalDurations,callbackFn){

  var totalIterations = 20,
      currentIteration = 0,
      
      opacity = elem.style.opacity || 1,
      opacityDelta = 1 / totalIterations;
  if (typeof totalDurations === "function"){
      var _totalDurations = 5000,
          _callbackFn = totalDurations;
  } else {
      var _totalDurations = totalDurations,
          _callbackFn = callbackFn;
  }
  var durationDelta = _totalDurations / totalIterations;
  function oneIter(){
      opacity -= opacityDelta;
      elem.style.opacity = opacity;
      if (++currentIteration < totalIterations){
          setTimeout(oneIter,durationDelta);
      } else {
          elem.style.opacity = 0;
          if (typeof _callbackFn === "function") _callbackFn();
      }
   }
  oneIter();
 }