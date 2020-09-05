// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window){

    var yaakovGreeter = {};
    yaakovGreeter.name = names ;
    var greeting = "Hello";
    yaakovGreeter.sayHello = function(){
    	console.log(greeting + yaakovGreeter.name);
    } 
    window.yaakovGreeter = yaakovGreeter;

})(window);
yaakovGreeter.sayHello();


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
 var helloSpeaker = {};
 yaakovGreeter.name = "yaakov";
 helloSpeaker.speak = function () {
   console.log("Hello" + names);

 }



// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(speakWord + "yaakovGreeter.name " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
var names ="helloSpeaker";