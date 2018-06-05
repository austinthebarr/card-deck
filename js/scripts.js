$(function(){
  $("h1#click").click(function(){

    var ranks = ["ace", "jack", "queen", "king", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
    var suits = ["clubs", "diamonds", "spades", "hearts"];

    ranks.forEach(function(rank){
      suits.forEach(function(suit){
        $(".card").append("<li>" + rank + " of " + suit + "</li>");
      });
    });

  });
});
