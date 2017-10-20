var Word = (function () {
    function Word() {
        this.activeWord = "";
    }

    Word.prototype.getRandomWord = function (niveau) {
        var tableWords = [];
        var position = 0;
        var w = "";

        $.ajax({
            url: 'datas/words.json',
            async: false,
            method: 'GET',
            success: function (datas) {
                switch (niveau) {
                    case "facile":
                        tableWords = datas.facile;
                        break;
                    case "moyen":
                        tableWords = datas.moyen;
                        break;
                    case "difficile":
                        tableWords = datas.difficile;
                        break;
                }

                position = Math.round(Math.random() * (tableWords.length - 1));

                w = tableWords[position].mot;
            }
        });

        this.activeWord = w;

    }
    
    Word.prototype.renderLetters = function (charsInWord)
    {
        var that = this;
        
        for (var i = 0; i < charsInWord.length  ; i++) {
          
            var elem = $(".word h1 span:nth-child(" + (charsInWord[i].position + 1) + ")");
            var letter = charsInWord[i].letter;

            elem.fadeOut('slow', function () {
                $(this).html(letter);
                $(this).fadeIn('slow', function () {
                    if (that.checkAllLettersComplete())
                        $("#endGameTrueModal").modal('show');
                });
            });
            
        }
       
    }

    Word.prototype.checkAllLettersComplete = function()
    {
        for (var i = 0; i < $(".word h1 span").length; i++) {
            if ($(".word h1 span")[i].innerHTML === "_") {
                return false;
            }
        }

        return true;
        
    }

    Word.prototype.searchLetterInWord = function (char) {
        char = char.toLowerCase();
        //var index = this.activeWord.lastIndexOf(char.toLowerCase());
        var letters = this.activeWord.split('');
        var charsInWord = [];

        
        for (var i = 0; i < letters.length  ; i++) {
            if (letters[i] === char)
                charsInWord.push({ 'letter': char, position: i });
        }


        if (charsInWord.length == 0) {
            app.hangman.changeHangmanState(app.essai);
            app.essai++;
        }
        else {
            this.renderLetters(charsInWord);
        }
    }

    Word.prototype.renderWordInHIM = function () {    
        var template = $("#mustache-wordLetter").html();
        var tempWord = this.activeWord.replace(/[a-z]/gi, '_');
        var render = Mustache.render(template, { "letters": tempWord.split('') });
        console.log(this.activeWord);
        $(".word").html(render);

        $(".word h1").removeClass();
        $(".word h1").addClass("animated bounceIn");
    }

    return Word;

})();