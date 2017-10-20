var Player = (function () {
    function Player() {
        this.playerStruct = {};// = {"name" : "", "avatar" : "", "difficulty" : 0};
    }

    Player.prototype.setName = function (value)
    {
        this.playerStruct.name = value;
    }

    Player.prototype.setAvatar = function (value)
    {
        this.playerStruct.avatar = value;
    }

    Player.prototype.setDifficulty = function (value)
    {
        this.playerStruct.difficulty = value;
    }

    Player.prototype.getName = function () {
        return this.playerStruct.name;
    }

    Player.prototype.getAvatar = function () {
        return this.playerStruct.avatar;
    }

    Player.prototype.getDifficulty = function () {
        return this.playerStruct.difficulty;
    }


    return Player;

})();