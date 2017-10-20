var Hangman = (function () {

    function Hangman()
    {
        this.hangmanStruct = ["corde", "tete", "corps", "brasDroit", "brasGauche", "jambeDroite", "jambeGauche"];
        this.initializeHangman();
    }

    Hangman.prototype.changeHangmanState = function (essai) {
        $("#" + this.hangmanStruct[essai]).css("display", "");
    }

    Hangman.prototype.initializeHangman = function() {
        for (var i = 0; i < this.hangmanStruct.length; i++) {
            $("#" + this.hangmanStruct[i]).css("display", "none");
        }
    }

    return Hangman;
})();