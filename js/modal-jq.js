var $ = jQuery;
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
function checkNewsletter(t,d){
    var a = t.closest('.modal');
    if($(a).attr('id')=="modal-newsletter"){
            setCookie("pop-newsletter","no",d);
        }
}
function close(t){
    $(t).find(".close").click(function () {
        $(t).css({
            visibility: "hidden",
            opacity: "0"
        }), $(t).find(".im-checkout").remove(),checkNewsletter(this,14);
    });
    $(".modal").click(function (t) {
        var a = $(t.target);
        a.is(".modal") && ("payModal" == a.attr("id") && a.find(".im-checkout").remove(), $(a).css({
            visibility: "hidden",
            opacity: "0"
        })),checkNewsletter(this,7);
    })
}
function show(t){
     $(t).css({
        visibility: "visible",
        opacity: "1"
    }), close(t);
}
$(".btn-modal").click(function () {
    var t=$(this).data("target-modal");
    console.log(t);
    show(t);
});
    $("#agreed").click(function () {
    $(this).prop("checked") ? $(".im-checkout-btn").removeClass("inactive") : $(".im-checkout-btn").addClass("inactive")
});
    $(".btn-enroll").click(function () {
    var t = "https://www.instamojo.com/jamboree_education/gmat-coaching-at-jamboree?",
        a = $(this).data("course"),
        e = $(this).data("center"),
        o = $(this).data("price"),
        i = $(this).data("batch-duration"),
        d = $(this).data("batch-date"),
        s = $(this).data("batch-timings");
    $("#payModal .modal-footer").append('<a id="#btn-pay" href="' + t + "data_Field_38321=" + e + "&data_readonly=data_Field_38321&data_Field_37820=" + a + "&data_readonly=data_Field_37820&data_amount=" + o + "&data_readonly=data_amount&data_Field_76079=" + d + '&data_readonly=data_Field_76079" rel="im-checkout" data-behaviour="remote" data-style="light"  data-text="Enroll Now" data-token="628af412afe75212ab53c54df45fefbe"></a>'), $.getScript("/js/instamojo.min.js"), $.getScript("/js/immoral.min.js"), $("#agreed").prop("checked") ? (console.log("checked"), $(".im-checkout-btn").removeClass("inactive")) : (console.log("unchecked"), $(".im-checkout-btn").addClass("inactive")), $(".modal span.course").text(a), $(".modal span.center").text(e), $(".modal span.duration").text(i), $(".modal span.timing").text(s), $(".modal span.date").text(d), "GMAT" == a ? ($(".modal .item1").html("<strong>66 hours</strong> of structured & intensive classes"), $(".modal .item2").html("<strong>2017 GMAC Official guide</strong> + 2 Jamboree handbooks"), $(".modal .item3").html("<strong>Weekly webinars </strong>and post class <strong>Advanced webinars</strong>").show(), $(".modal .item4").html("<strong>12</strong> Full lenght tests"), $(".modal .item5").html("<strong>9</strong> months of validity")) : "GRE" == a ? ($(".modal .item1").html("<strong>60 hours</strong> of structured & intensive classes"), $(".modal .item2").html("<strong>ETS Official guide</strong> + 2 Jamboree handbooks"), $(".modal .item3").html("Weekly + post class <strong>Advanced webinars</strong>").hide(), $(".modal .item4").html("<strong>7</strong> Full lenght tests"), $(".modal .item5").html("<strong>1 Year</strong> validity")) : "SAT" == a && ($(".modal .item1").html("<strong>60 hours</strong> of structured & intensive classes"), $(".modal .item2").html("<strong>ETS Official guide</strong> + 2 Jamboree handbooks"), $(".modal .item3").html("Weekly + post class <strong>Advanced webinars</strong>").hide(), $(".modal .item4").html("<strong>13</strong> Full lenght mock tests at the center"), $(".modal .item5").html("<strong>1 Year</strong> validity"))
});

$.getJSON('http://freegeoip.net/json/', function (result) {
    if (result.country_code == "SG") {
        if (getCookie("pop") == "") setCookie("pop", "yes", 3);
        else if (getCookie("pop") == "yes") {
            var target = $('#countryModal');
            show(target);
            $("#pop-cookie").click(function(){
                if($(this).prop("checked"))setCookie("pop","no",3);
            })
        }

    };
});

setTimeout(function () {
    if (getCookie("pop-newsletter") == "") {
        setCookie("pop-newsletter", "yes", 14);
    } else if (getCookie("pop-newsletter") == "yes") {
        var t = $("#modal-newsletter");
        show(t);
    }
},90000);
var $ = jQuery;
