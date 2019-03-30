  $(document).ready(function() {
  $("form#vacation-qtn").submit(function(event) {
    event.preventDefault();

    $("#vacation-qtn").slideUp();
    $("#load").slideDown().delay(3000).slideUp();
    $("#loading").delay(1000).slideDown();
    $("#vac1").hide();
    $("#vac2").hide();
    $("#vac3").hide();
    $("#vac4").hide();
    $("#vac5").hide();



    var quest1score = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2score = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3score = parseInt($("input:radio[name=quest3]:checked").val());
    var quest4score = parseInt($("input:radio[name=quest4]:checked").val());
    var quest5score = parseInt($("input:radio[name=quest5]:checked").val());

    var totalScore = quest1score + quest2score + quest3score + quest4score + quest5score;

    if (totalScore <= 6) {
      $("#vac1").delay(2000).slideDown();
    } else if (totalScore <= 9) {
      $("#vac2").delay(2000).slideDown();
    } else if (totalScore <= 12) {
      $("#vac3").delay(2000).slideDown();
    } else if (totalScore <= 15) {
      $("#vac4").delay(2000).slideDown();
    } else {
      $("#vac5").delay(2000).slideDown();
    }

  });

  $("form#restartQuiz").submit(function(event) {
    event.preventDefault();

    location.reload();
  });

});
