/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var counter = 0; counter < names.length; counter++) {

  if (names[counter][0].toLowerCase() == 'j') {
    byeSpeaker.speak(names[counter]);
  } else {
    helloSpeaker.speak(names[counter]);
  }
}
