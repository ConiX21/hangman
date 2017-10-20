var Avatar = (function () {
    function Avatar() {

    }

    Avatar.prototype.loadAvatars = function () {
        var template = $('#mustache-avatar').html();
        var templateLi = $('#mustache-li').html();

        $.ajax({
            url: "datas/avatar.json",
            async: true,
            success: function (data) {
                var rendered = Mustache.render(template, { avatars: data });
                var renderedLi = Mustache.render(templateLi, data);

                $('div.carousel-inner').html(rendered);
                //$('ol.carousel-indicators').html(renderedLi);

                $('div.carousel-inner div:first-child').addClass("active");
                $('ol.carousel-indicators li:first-child').addClass("active");

                $("#carousel-avatar").fadeIn(6000);
            }
        });
    }

    return Avatar;

})();