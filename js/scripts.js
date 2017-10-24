$(document).ready(function () {
    $("#table").tablesorter();
    var mouseover = function () {
        this.style.opacity = 1;
        this.style.cursor = "pointer";
    };

    var makeOpaque = function () {
        this.style.opacity = null;
    };
    var arrowUp = this.getElementById("arrow-up");
    var arrowDown = this.getElementById("arrow-down");
    var arrows = [arrowUp, arrowDown];
    $(arrows[0]).css(
        'border-bottom', '60px solid darkgrey'
    );
    $(arrows[1]).css(
        'border-top', '60px solid darkgrey'
    );
    var divList = ["Säljande", "Bilder", "Specifikationer", "Köp"];
    $(".container").hide();
    var updateArrows = function () {
        if ($("#menu .link4 a").hasClass("currentpage")) {
            $(arrows).off('click');
            $(arrows[1]).off("mouseover", mouseover);
            $(arrows[0]).on("mouseover", mouseover);
            $(arrows[0]).on("mouseout", makeOpaque);
            $(arrows[0]).bind("click", moveUp);
            $(arrows[1]).css(
                'border-top', '60px solid darkgrey'
            );
            $(arrows[0]).css(
                'border-bottom', '60px solid red'
            );
        } else if ($("#menu .link1 a").hasClass("currentpage")) {
            $(arrows).off('click');
            $(arrows[0]).off("mouseover", mouseover);
            $(arrows[1]).on("mouseover", mouseover);
            $(arrows[1]).on("mouseout", makeOpaque);
            $(arrows[1]).bind("click", moveDown);
            $(arrows[0]).css(
                'border-bottom', '60px solid darkgrey'
            );
            $(arrows[1]).css(
                'border-top', '60px solid red'
            );
        } else {
            $(arrows).off('click');
            $(arrows).on("mouseover", mouseover);
            $(arrows).on("mouseout", makeOpaque);
            $(arrows[0]).unbind("click", moveUp);
            $(arrows[1]).unbind("click", moveDown);
            $(arrows[0]).bind("click", moveUp);
            $(arrows[1]).bind("click", moveDown);
            $(arrows[0]).css(
                'border-bottom', '60px solid red'
            );
            $(arrows[1]).css(
                'border-top', '60px solid red'
            );
        }
    };
    var moveUp = function () {
        page = $(".currentpage");
        parent = page.parent();
        page.removeClass("currentpage");
        prevPage = parent.prev().find("a");
        prevPage.addClass("currentpage");
        showPage(prevPage);
    }
    var moveDown = function () {
        page = $(".currentpage");
        parent = page.parent();
        page.removeClass("currentpage");
        nextPage = parent.next().find("a");
        nextPage.addClass("currentpage");
        showPage(nextPage);
    }
    var showPage = function (page) {
        current = page.text();
        $(".container").hide();
        updateArrows();
        for (var i = 0; i < divList.length; i++) {
            if (divList[i].indexOf(current) > -1) {
                console.log($("#" + divList[i]));
                $("#" + divList[i]).show(1000);
            };
        };
    };
    var switchPage = function () {
        $("a").removeClass("currentpage");
        var page = $(this).find("a");
        page.addClass("currentpage");
        showPage(page);

    };
    $('#menu li').click(switchPage);
    $("#menu").menu();
    $("#selectmenu").selectmenu();
    // Hover states on the static widgets
    $("#dialog-link, #icons li").hover(
        function () {
            $(this).addClass("ui-state-hover");
        },
        function () {
            $(this).removeClass("ui-state-hover");
        }
    );

});
