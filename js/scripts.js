var vowels = ["a", "e", "i", "o", "u"];

$(document).ready(function(){
  $("#stringInput").submit(function(event){
    event.preventDefault();
    var letters = $("#sentenceInput").val().split('');
    console.log(letters);
    letters.forEach(function(letter){

      if (letter === "a" || "e" || "i"||"o"||"u") {
        return letter = "-";
      } else {
        return letter;
      };

    });

  $("#output").text(letters);

  });
});
