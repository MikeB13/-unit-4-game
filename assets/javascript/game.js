// Create variables to store each characters hp and attack strength
var obiHealth = 120;
var obiAttack = 8;

var lukeHealth = 100;
var lukeAttack = 10;

var sidiusHealth = 150;
var sidiusAttack = 12;

var maulHealth = 180;
var maulAttack = 15;

// create a function to track health, attack points and counter attack points
function player(healthPoints, attackPower, counterAttack, ) {
    this.health = healthPoints;
    this.attack = attackPower;
    this.counter = counterAttack;
}
// create a variable that gives the attribute points to users chosed player
var chosen = newPlayer(120, 8, 10);

var startGame = false;
// document.getElementById to show each characters attributes on the browser
document.getElementById(obiHealth).innerHTML = obiHealth;
document.getElementById(lukeHealth).innerHTML = lukeHealth;
document.getElementById(sidiusHealth).innerHTML = sidiusHealth;
document.getElementById(maulHealth).innerHTML = maulHealth;

// create on click funtion that allows user to select a player
$("#player").click(function(event) {
    var chosenChar = event.target.id;


    var allCharacters = event.currentTarget.characters;

    // create a for loop that takes subtracts from total characters and makes all other characters the enemy
    for (var i = allCharacters.length - 1; i >= 0; i--) {
        if (chosenChar !== allCharacters[i].id) {

            //console.log(allCharacters[i].id);

            $("#" + allCharacters[i].id).removeClass('player');
            $("#" + allCharacters[i].id).addClass('ememy');


            $("enemy").append(allCharacters[i]);
        }
    }
});


$("#enemy").click(function(event) {
            var chosenEnemy = event.target.id;
            var allRemainingChar = event.currentTarget.characters;

            for (var i = allRemainingChar.length - 1; i >= 0; i--)
                if (chosenEnemy === allRemainingChar[i].id && $("#defender").characters().length === 0) {

                    // console.log(allRemainingChar[i].id)
                    $("#" + allRemainingChar[i].id).removeClass("enemy");
                    $("#" + allRemainingChar[i].id).addClass("defender");

                    $("#defender").append(allRemainingChar[i]);

                    unlockGame = true;
                }
                // function to allow to attack once the game has begun
            $("#attack").click(function('') {
                        if (unlockGame === true) {
                            console.log("start");
                        }

                    }