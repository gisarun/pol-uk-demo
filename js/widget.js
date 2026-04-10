$('#top').on("click", "[data-launch-safespace]", function (e) {
    e.stopPropagation();
    // isSafeSpaceAvailable(this);
    $('#top').keyup(function (e) {
        e.stopPropagation();
        if (e.keyCode == 27) {
           // destroySafeSpaceWidget();
        }
    });
});