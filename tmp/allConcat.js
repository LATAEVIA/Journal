var myJournalModule = require('./../js/journal.js');

//user interface logic
$(document).ready(function() {
  console.log(myJournalModule.myName);
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var body = $('input#body').val();
    var title = $('input#title').val();
    var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    var newEntry = new myJournalModule.JournalEntry(title, timeStamp, body);
    console.log(newEntry.timeStamp);

    $("h3#blogEntry").append(newEntry.concatEntryDetails() + "<br>" + newEntry.bodyWordCount());
  });
});
