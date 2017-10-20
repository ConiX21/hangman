var AppHangman = (function () {

    function AppHangman() {
        this.hangman = new Hangman();
        this.avatar = new Avatar();
        this.word = new Word();
        this.player = new Player();
        this.essai = 0;
        this.hangman.initializeHangman();
    }

    AppHangman.prototype.initializeGame = function () {
        this.essai = 0;
        this.word.getRandomWord(this.player.getDifficulty());
        this.word.renderWordInHIM();
        this.hangman = new Hangman();
        this.setIHMComponents();

        unLockKeyboard();
        createKeyboard();
    }

    AppHangman.prototype.setIHMComponents = function()
    {
        $("#nameIHM").html(this.player.getName());
        $("#avatarIHM").attr("src",this.player.getAvatar());
    }

    AppHangman.prototype.endGame = function () {
        lockKeyboard();
        $('#endGameModal').modal('show');
    }

    return AppHangman;
})();

var app = new AppHangman();



