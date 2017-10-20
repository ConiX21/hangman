function transitionStep(containerOut, containerIn, classCssIn, classCssOut, delay) {
    $(containerOut).addClass("animated");
    $(containerOut).addClass(classCssOut);

    setTimeout(function () {
        $(containerOut).css("display", "none");
        $(containerIn).css("display", "");
        $(containerIn).addClass("animated");
        $(containerIn).addClass(classCssIn);
        setTimeout(function () {
            $(containerIn).removeClass(classCssIn);
        }, delay);
    }, delay);
}

function createKeyboard() {

    var letters = {
        "lettersGroup":
            [
                {
                    "letters":
                        [
                            { "letter": 'A' }, { "letter": 'Z' },
                            { "letter": 'E' }, { "letter": 'R' },
                            { "letter": 'T' }, { "letter": 'Y' },
                            { "letter": 'U' }, { "letter": 'I' },
                            { "letter": 'O' }, { "letter": 'P' }
                        ]
                },
                {
                    "letters":
                        [
                            { "letter": 'Q' }, { "letter": 'S' },
                            { "letter": 'D' }, { "letter": 'F' },
                            { "letter": 'G' }, { "letter": 'H' },
                            { "letter": 'J' }, { "letter": 'K' },
                            { "letter": 'L' }, { "letter": 'M' }
                        ]
                },
                {
                    "letters":
                        [
                            { "letter": 'W' }, { "letter": 'X' },
                            { "letter": 'C' }, { "letter": 'V' },
                            { "letter": 'B' }, { "letter": 'N' }
                        ]
                }
            ]
    }

    var template = $("#mustache-letters").html();
    var render = Mustache.render(template, letters);
    $(".keyboard").html(render);

    $(".keyboard > div").removeClass("animated bounceIn");
    $(".keyboard  > div").addClass("animated bounceIn");

    $(".keyboard button").unbind("click");

    $(".keyboard button").click(function () {
        if (app.essai >= 6)
        {
            app.endGame();
        }

        app.word.searchLetterInWord($(this).attr("data-letter"));
    });
}

function lockKeyboard(){
    $(".keyboard button").attr("disabled", "");
}

function unLockKeyboard() {
    $(".keyboard button").removeAttr("disabled");
}