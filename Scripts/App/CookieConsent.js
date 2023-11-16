$(function () {

    //alert(document.cookie.indexOf("CookieConsent"));

    var url = window.location.href;
    var id = url.substring(url.lastIndexOf("/") + 1);

    if (document.cookie.indexOf("CookieConsent") < 0) {
        $("#cookieConsent").slideDown("slow");
    }

    $("#Consent").on("click", function () {
        document.cookie = "CookieConsent=yes;path=/;max-age=" + (1 * 365 * 24 * 60 * 60); // Will be stored for 1 year
        $('#cookieConsent').slideUp('slow');

    });

    $("#Refuse").on("click", function () {
        document.cookie = "CookieConsent=no;path=/;max-age=" + (1 * 365 * 24 * 60 * 60); // Will be stored for 1 year
        $('#cookieConsent').slideUp('slow');

    });


    $("#LearnMore").on("click", function () {
        location.href = "/mentions_legales.html";
    })
});