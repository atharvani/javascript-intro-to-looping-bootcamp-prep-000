function forLoop(array)
{
  for(var i = 0; i<25; i++)
  {
      array.push("I am ${i} strange loop.")
  }
  return array;
}

function whileLoop(n)
{
  var countDown = n;
  while(n > 0)
  {
    countDown--;
  }
  return 'done';
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array)
{
  do{
     array.pop();
  }while(array.length >= 0 && maybeTrue())
  return array;
}
