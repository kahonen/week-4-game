$(document).ready(function () {

    var crystal1=0;
    var crystal2=0;
    var crystal3=0;
    var crystal4=0;
    var wins = 0;
    var lose = 0;
    var counter = 0;
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    

    
    function newGame(){
        targetNumber = Math.floor(Math.random() * 102) + 19;
        $("#goalNumber").text(targetNumber);
        console.log(targetNumber);

        counter = 0;
        $("#total").text(counter)
        console.log(counter);
    };
        
    $("#goalNumber").text(targetNumber);
    console.log(targetNumber);

    crystal1 = Math.floor(Math.random() * 12) + 1;
    $("#crystal1").text("value", crystal1);
    console.log(crystal1)

    crystal2 = Math.floor(Math.random() * 12) + 1;
    $("#crystal2").text("value", crystal2);
    console.log(crystal2)

    crystal3 = Math.floor(Math.random() * 12) + 1;
    $("#crystal3").text("value", crystal3);
    console.log(crystal3)

    crystal4 = Math.floor(Math.random() * 12) + 1;
    $("#crystal4").text("value", crystal4);
    console.log(crystal4)


    $("#crystal1").on("click", function () {
        counter += crystal1;
        $("#total").text(counter)
        numChecker();
    });

    $("#crystal2").on("click", function () {
        counter += crystal2;
        $("#total").text(counter)
        numChecker();
    });

    $("#crystal3").on("click", function () {
        counter += crystal3;
        $("#total").text(counter)
        numChecker();
    });

    $("#crystal4").on("click", function () {
        counter += crystal4;
        $("#total").text(counter)
        numChecker();
    });



    var numChecker = function () {
        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);  
            newGame();
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
            lose++;
            $("#lose").text(lose);
            newGame();
        }
}

})


// var numberOptions = Math.floor(Math.random() * 12) + 1;
// console.log(numberOptions);

// $("data-crystalvalue").text(wins)
// // Next we create a for loop to create crystals for every numberOption.
// for (var i = 0; i < numberOptions.length; i++) {

//   // For each iteration, we will create an imageCrystal
//   var imageCrystal = $("<img>");

//   // First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
//   imageCrystal.addClass("crystal-image");

//   // Each imageCrystal will be given a src link to the crystal image
//   imageCrystal.attr("src", crystals[i]);

//   // Each imageCrystal will be given a data attribute called data-crystalValue.
//   // This data attribute will be set equal to the array value.
//   imageCrystal.attr("data-crystalvalue", numberOptions[i])
