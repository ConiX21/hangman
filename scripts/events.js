(function () {
    $("#step1 button").click(function () {
        app.player.setName($("#txtNickName").val());
        transitionStep(".containerStep1", ".containerStep2", "rollIn", "rollOut", 800);
        $("#step2 div.panel-body > div")
            .load("partialViews/avatar.html", function () {
                app.avatar.loadAvatars();
            });
    });
    $("#step2 button").click(function () {
        app.player.setAvatar($(".carousel-inner div.item.active img").attr("src"));
        transitionStep(".containerStep2", ".containerStep3", "rollIn", "rollOut", 800);
    });
    $("#step3 button").click(function () {
        transitionStep(".containerStep3", ".play", "rollIn", "rollOut", 800);
        setTimeout(function () {
            $(".stepper").css("display", "none");
            
            app.initializeGame();
        }, 800);

    });
    $("#step3 div[class*=level]").each(function () {
        $(this).click(function () {
            app.player.setDifficulty($(this).attr("data-level"));
            $(this).css("border", "5px solid #3cb3d6");
            $(this).siblings("div").css("border-width", "0");
        });
    });
    $(".newGame").click(function () {
        app.initializeGame();
        $('#endGameModal').modal('hide');
        $('#endGameTrueModal').modal('hide');
    });
})();