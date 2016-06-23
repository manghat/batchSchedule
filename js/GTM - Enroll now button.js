  function getMonth(a) {
    return $.inArray(a, months) + 1
}
var $ = jQuery,
    pathname = window.location.pathname,
    container = $(".BSdl_pan"),
//"/" == pathname ? $(".BSdl_pan") : $(".BchSdl_Grid").find("div").find("div").find("div").find("div").find("div"),
    baseURL = "https://www.instamojo.com/jamboree_education/gmat-coaching-at-jamboree?",
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$.each(container, function () {
    var a, t = $(this).find("h3").text(),
        n = $(this).find("tbody tr"),
        e = n.slice(2).find("td:nth-child(1)"),
        d = 0,
        r = 0,
        i = 0;
    $.each(e, function () {
        var n = $(this),
            e = n.parent().find("td:nth-child(2)").text(),
            h = n.parent().find("td:nth-child(3)").text(),
            o = n.parent().find("td:nth-child(4)").text(),
            u = e.split("-"),
            l = n.parent().find("td:nth-child(5)").text();
        o = o.concat(" (" + l + ")");
        var c = new Date(u[2], getMonth(u[1]) - 1, u[0]),
            p = new Date;
        if (p - 12096e5 >= c) {return void n.parent().hide();}
        if (t=="Dehradun"||t=="Chandigarh") {return;}
        if (c - 86400 >= p) {
            if ("GRE" == n.text()) {
                if (!(2 > r)) return;
                "Ahmedabad" == t ? a = 21500 : "Dehradun" == t ? a = 24e3 : "Indiranagar" == t || "Jayanagar" == t || "Malleshwaram" == t ? a = 25e3 : "Adyar" == t || "Annanagar" == t || "Nungambakkam" == t ? a = 25500 : "Adhchini" == t || "Faridabad" == t || "Greater Noida" == t || "Gurgaon" == t || "Hudson Line" == t || "New Friends Colony" == t || "Noida" == t || "Raja Garden" == t ? a = 27500 : "Begumpet" == t || "Kukatpally" == t || "Madhapur" == t ? a = 17e3 : "Jaipur" == t ? a = 25500 : "Kolkata" == t ? a = 2e4 : "Pune" == t ? a = 22e3 : ("Andheri (W)" == t || "Dadar (W)" == t || "Thane (W)" == t || "Vashi" == t) && (a = 26500), r++
            } else if ("GMAT" == n.text()) {
                if (!(2 > d)) return;
                "Ahmedabad" == t ? a = 27500 : "Dehradun" == t ? a = 26e3 : "Indiranagar" == t || "Jayanagar" == t || "Malleshwaram" == t ? a = 30500 : "Adyar" == t || "Annanagar" == t || "Nungambakkam" == t ? a = 31500 : "Adhchini" == t || "Faridabad" == t || "Greater Noida" == t || "Gurgaon" == t || "Hudson Line" == t || "New Friends Colony" == t || "Noida" == t || "Raja Garden" == t ? a = 35500 : "Begumpet" == t || "Kukatpally" == t || "Madhapur" == t ? a = 28500 : "Jaipur" == t ? a = 28500 : "Kolkata" == t ? a = 29000 : "Pune" == t ? a = 35500 : ("Andheri (W)" == t || "Dadar (W)" == t || "Thane (W)" == t || "Vashi" == t) && (a = 35800), d++
            } else if ("SAT" == n.text() || "NewSAT" == n.text() || "New SAT" == n.text() || "NEW SAT" == n.text()) {
                if (!(2 > i)) return;
                "Ahmedabad" == t ? a = 26500 : "Dehradun" == t ? a = 26500 : "Indiranagar" == t || "Jayanagar" == t || "Malleshwaram" == t ? a = 32500 : "Adyar" == t || "Annanagar" == t || "Nungambakkam" == t ? a = 31500 : "Adhchini" == t || "Faridabad" == t || "Greater Noida" == t || "Gurgaon" == t || "Hudson Line" == t || "New Friends Colony" == t || "Noida" == t || "Raja Garden" == t ? a = 35500 : "Begumpet" == t || "Kukatpally" == t || "Madhapur" == t ? a = 28500 : "Jaipur" == t ? a = 3e4 : "Kolkata" == t ? a = 28e3 : "Pune" == t ? a = 32e3 : ("Andheri (W)" == t || "Dadar (W)" == t || "Thane (W)" == t || "Vashi" == t) && (a = 35800), i++
            }("SAT" == n.text() || "NewSAT" == n.text() || "New SAT" == n.text() || "NEW SAT" == n.text() || "GMAT" == n.text() || "GRE" == n.text()) && n.parent().find("td:nth-child(5)").append('<button class="btn-modal btn-enroll" data-center="' + t + '" data-course="' + n.text() + '" data-price="' + a + '" data-batch-date="' + e + '" data-batch-duration="' + h + '" data-batch-timings="' + o + '" type="button" data-target-modal="#payModal">Enroll Now</button>')
        }
    })
});
