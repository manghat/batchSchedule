function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
$.getJSON('http://freegeoip.net/json/', function (result) {
    if (result.country_code == "IN") {
        if (getCookie("pop") == "") setCookie("pop", "yes", 3);
        else if (getCookie("pop") == "yes") {
            var target = $('#countryModal');
            $(target).css({
                'visibility': 'visible',
                'opacity': '1'
            });

            $('.close').click(function () {
                $(target).css({
                    'visibility': 'hidden',
                    'opacity': '0'
                });

            });
            $("#pop-cookie").click(function(){
                setCookie("pop","no",3);
            })
        }

    };
});
