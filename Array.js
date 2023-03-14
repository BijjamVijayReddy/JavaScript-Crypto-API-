A typed array of 32-bit unsigned integer values. The contents are  to 0. If the requested number of bytes could not be allocated an exception is raised.
  
let randomArray = new Uint32Array(2);
window.crypto.getRandomValues(randomArray);


randomArray[0] // first number
randomArray[1] // first number
