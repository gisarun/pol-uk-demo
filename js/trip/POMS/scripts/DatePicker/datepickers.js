/* JS for datepickers */
var dates = {
    initDatePicker: function () {
        $('.new-date-picker').each(function () {
            var $datepickerInput = $(this);
            $datepickerInput.datepicker({
                defaultViewDate: { year: 1985, month: 5, day: 1 },
                format: $datepickerInput.data("format"),
                startDate: $datepickerInput.data("datepicker-sd"),
                endDate: $datepickerInput.data("datepicker-ed"),
                templates: {
                    leftArrow: '<i class="icon-poms icon-arrowleft"></i>',
                    rightArrow: '<i class="icon-poms icon-arrowright"></i>'
                },
                weekStart: 1
            }).on('changeDate', function () {
                var date = FormatUkDate(this.value);
                var longDate = moment(date);
                longDate = longDate.format('dddd Do MMMM YYYY');
                $datepickerInput.parent(".form-date-picker").siblings(".datepickedvalue").html(longDate);
                $('.datepicker-dropdown').remove();
            });
            $datepickerInput.parent(".form-date-picker").click(function (event) {
                $datepickerInput.datepicker('show');
                //adding space between trs in thead
                var $datepickerDropdown = $('.datepicker-dropdown');
                if ($datepickerDropdown.find("tr.spacing").length == 0) {
                    $datepickerDropdown.find("thead tr:last-child").before("<tr class='spacing'></tr>");
                }

                var screenWidth = screen.width;
                if (screenWidth >= 768) {
                    var coordinates = $('.datepicker-dropdown').offset();
                    var left = coordinates.left + $datepickerInput.outerWidth() - $('.datepicker-dropdown').outerWidth() / 2 + 16;
                    var top = coordinates.top - 10;
                    $('.datepicker-dropdown').css({ "left": left + 'px', "top": top + 'px' })
                }
                else {
                    var coordinates = $('.datepicker-dropdown').offset();
                    var left = coordinates.left + 0;
                    var top = coordinates.top - 10;
                    $('.datepicker-dropdown').css({ "left": left + 'px', "top": top + 'px' })
                }
            })
        })

        $.validator.methods.date = function (value, element) {
            return this.optional(element) || Globalize.parseDate(value, "dd/MM/yyyy", "en");
        }

        function FormatUkDate(dateStr) {
            dateStr = dateStr.split("/");
            return new Date(dateStr[2], dateStr[1] - 1, dateStr[0]).toDateString();
        }
    }
}

function setDatePickerPosition($datepickerInput) {
    $datepickerInput.parent(".form-date-picker").click(function (event) {
        event.preventDefault();
        $datepickerInput.datepicker('show');
        //adding space between trs in thead
        var $datepickerDropdown = $('.datepicker-dropdown');
        if ($datepickerDropdown.find("tr.spacing").length == 0) {
            $datepickerDropdown.find("thead tr:last-child").before("<tr class='spacing'></tr>");
        }

        var screenWidth = screen.width;
        var coordinates = $('.datepicker-dropdown').offset();
        var top = coordinates.top - 10;
        var left = coordinates.left + $datepickerInput.outerWidth() - $('.datepicker-dropdown').outerWidth() / 2 + 16;
        if (screenWidth < 768) {
            left = coordinates.left + 0;
        }
        $('.datepicker-dropdown').css({ "left": left + 'px', "top": top + 'px' })
    })
}

function bdaylimit() {
    $('.new-date-picker').each(function () {
        var $datepickerInput = $(this);
        $datepickerInput.datepicker({
            defaultViewDate: { year: 1985, month: 5, day: 1 },
            title: $datepickerInput.data("title"),
            format: $datepickerInput.data("format"),
            startDate: '-0m',
            endDate: $datepickerInput.data("datepicker-ed"),
            templates: {
                leftArrow: '<i class="icon-poms icon-arrowleft"></i>',
                rightArrow: '<i class="icon-poms icon-arrowright"></i>'
            },
            weekStart: 1
        });
        setDatePickerPosition($datepickerInput);
    })
}

$(document).ready(function () {
    dates.initDatePicker();
});