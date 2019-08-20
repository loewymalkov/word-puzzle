// business logic




// front end ui
$(document).ready(function(){
  var vowels = ["a", "e", "i", "o", "u"];
  $("#stringInput").submit(function(event){
    event.preventDefault();
    var letters = $("#sentenceInput").val();

      for (var i=0; i<letters.length; i++) {
        for (var x=0; x<vowels.length; x++) {
          if (letters[i] === vowels[x]) {
            letters = letters.replace(letters[i], "-");
            console.log(letters);
          }
        }
      }
      $("#output").text(letters);
  });
});
