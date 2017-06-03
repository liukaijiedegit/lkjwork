;(function () {
    $(".bg").css({
        width: document.documentElement.clientWidth || document.body.clientWidth,
        height: document.documentElement.clientHeight || document.body.clientHeight
    });
    setTimeout(function () {
        $(".bg").css({
            opacity: "0",
            display: "none"
        });
        $(".content").css({
            opacity: "1",
            display: "block"
        })
    }, 1000)
})();
