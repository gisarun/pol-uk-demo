$(document).ready(function () {
    initRadioToggles();
})

/* 40 ms per radio toggle to init */
function initRadioToggles() {
    $.each($(".radio-group .toggle-group"), function (key, value) {
        var topHeight;
        var radios = $(value).find(".equal-width");
        $.each(radios, function (key1, value1) {
            var curHeight = $(value1).actual("height");
            if (topHeight == undefined || curHeight > topHeight) {
                topHeight = curHeight;
            }
        });

        var wrappingRoom = 60;
        radios.css("height", topHeight + wrappingRoom);

        $(value).removeClass("visibility-hidden");
    });
}