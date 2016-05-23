exports.journal = function(title) {

  return output;
}

//business logic
// function JournalEntry(title, timeStamp, wordCount, bodyText) {
function JournalEntry(title, timeStamp, bodyText) {
  this.newTitle = title;
  this.newTimeStamp = timeStamp;
  // this.newWordCount = wordCount;
  this.newBodyText = bodyText;
}

JournalEntry.prototype.concatEntryDetails = function() {
  // return this.newTitle + " " + this.newTimeStamp + " " + this.newWordCount + " " + this.newBodyText;
    return this.newTitle + " " + this.newTimeStamp + " " + this.newBodyText;
}

JournalEntry.prototype.bodyWordCount = function() {
  return this.newBodyText.split(" ").length;
  //quotes is where the split will occur
}

//user interface logic
$(document).ready(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var body = $('input#body').val();
    var title = $('input#title').val();
    // var wordCount = newEntry.bodyWordCount($('input#body').val());
    var timeStamp = moment().format();
    var newEntry = new JournalEntry(title, timeStamp, body);
    debugger;
    console.log(newEntry.timeStamp);

    $("h3#blogEntry").append(newEntry.concatEntryDetails());
  });
});
