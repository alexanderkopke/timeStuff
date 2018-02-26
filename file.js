var result;
 // I want to try to create a function that takes in seconds and converts those seconds into minutes
// and then displays how many minutes and seconds that comes from it. 
function timeR(seconds){
  return seconds > 59? {minutes: Math.floor(seconds / 60), seconds: seconds % 60} : {seconds: seconds};
}
function displayTime(obj){ 
  if(obj.minutes){
    if(obj.seconds) return isPlural(obj.minutes, "minute")+ " " + isPlural(obj.seconds, "second");
    return isPlural(obj.minutes, "minute");
  } 
  return obj.seconds === 1 ? obj.seconds + " second": obj.seconds + " seconds";
}
function isPlural(value, singular){
  return value === 1? value + " " + singular : value + " " + singular + "s";
}
result = timeR(Number(prompt("Please enter a number")));
console.log(displayTime(result));
