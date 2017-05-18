module.exports = function main(a) {
  // Write your cade here
  var num =a.split("");
  var sum=0;
  var length=num.length;
  for(var i=0;i<length;i++){
  sum+=parseInt(num[i])
  }
  return sum
};
