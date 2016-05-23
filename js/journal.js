exports.journal = function(title) {

  return output;
}

//business logic
function JournalEntry(title, timeStamp, wordCount, bodyText) {
  this.newTitle = title;
  this.newTimeStamp = timeStamp;
  this.newWordCount = wordCount;
  this.newBodyText = bodyText;
}

JournalEntry.prototype.concatEntryDetails = function() {
  return this.newTitle + " " + this.newTimeStamp + " " + this.newWordCount + " " + this.newBodyText;
}

JournalEntry.prototype.bodyWordCount = function() {
  return str.split(this.newBodyText).length;
}

//user interface logic
$(document).ready(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var body = $('input#body').val();
    var title = $('input#title').val();
    var wordCount = body.bodyWordCount();
    var timestamp = 



    var newEntry = new JournalEntry(title, timeStamp, wordCount, body);

      $("ul#locations").append("<li><span class='location'>" + newPlace.fullDescript() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-season").val("");



    $(".location").last().click(function() {
    $("#show-locations").show();
    $("#show-locations h2").text(newPlace.newLocation);
    $(".newLocation").text(newPlace.newLocation);
    $(".newLandmark").text(newPlace.newLandmark);
    $(".newSeason").text(newPlace.newSeason);
    });
  });
});
