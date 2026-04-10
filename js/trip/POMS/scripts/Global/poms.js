$(document).ready(function () {
    $("form").bind("invalid-form.validate", poms.onValidationHandler);
    poms.initQtip('body');
    poms.recompileAngular('#prices');

    $('[data-summary-toggle]').on('click', function (event) {
        event.preventDefault();
        $(this).parents('.summary').first().toggleClass('summary--collapsed');
        var priceToPayDiv = document.getElementsByClassName('price-to-pay__container')
        if (!$(this).parents('.summary').first().hasClass("summary--collapsed")) {
            $(priceToPayDiv).removeClass("visible-xs")
            $(priceToPayDiv).addClass("hidden-xs")
        } else {
            $(priceToPayDiv).removeClass("hidden-xs")
            $(priceToPayDiv).addClass("visible-xs")
        }
    });
});

var poms = {
    recompileAngular: function ($element) {
        angular.element($("[ng-app]")).injector().invoke(function ($compile) {
            var $scope = angular.element($("[ng-app]")).scope();
            $compile($element)($scope);
        });
    },

    getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&][" + name + name.toLowerCase() + "]=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    getChannel: function () {
        return location.pathname.split('/')[1];
    },
    getRoute: function () {
        return location.pathname.split('/')[3];
    },
    getLineOfBusiness: function () {
        return location.pathname.split('/')[2];
    },

    isTravellerMinor: function (year, month, day) {
        var isMinor = false;
        var startdate = new Date(getStartDate());
        if ((year != null && year != undefined) && (month != null && month != undefined) && (day != null && day != undefined)) {
            var age = startdate.getFullYear() - year;
            var birthDate = new Date(year + "-" + month + "-" + day);
            //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
            var m = (startdate.getMonth() + 1) - month;
            if (m < 0 || (m === 0 && startdate.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 18) {
                isMinor = true;
            }
        }
        return isMinor;
    },

    isSeniorTraveller: function (year, month, day) {
        var isMajor = false;
        var startdate = new Date(getStartDate());
        if ((year != null && year != undefined) && (month != null && month != undefined) && (day != null && day != undefined)) {
            var age = startdate.getFullYear() - year;
            var birthDate = new Date(year + "-" + month + "-" + day);
            //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
            var m = (startdate.getMonth() + 1) - month;
            if (m < 0 || (m === 0 && startdate.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age > 60) {
                isMajor = true;
            }
        }
        return isMajor;
    },

    isPolicyTC: function () {
        const policyno = $('#policyno').val();
        let isTC = false;
        if (policyno) {
            if (policyno.substring(0, 2) === "TC") {
                isTC = true;
            }
        }
        return isTC;
    },

    setFormValidation: function () {
        $.validator.addMethod("mainextrapastdatecheck", function (value, element) {
            let day;
            let month;
            let year;
            if (element.id == "P0-103--DateOfBirth-YYYY-1") {
                day = $('#P0-103--DateOfBirth-DD-1').val();
                month = $('#P0-103--DateOfBirth-MM-1').val();
                year = $('#P0-103--DateOfBirth-YYYY-1').val();
            }
            else if (element.id == "P0-103--DateOfBirth-YYYY-2") {
                day = $('#P0-103--DateOfBirth-DD-2').val();
                month = $('#P0-103--DateOfBirth-MM-2').val();
                year = $('#P0-103--DateOfBirth-YYYY-2').val();
            }

            if (day != null && day != undefined && day != "" && month != null && month != undefined && month != "" && year != null && year != undefined && year != "") {
                let fullDatePast = (year + '-' + month + '-' + day).toString();
                let pastDate = new Date(fullDatePast);
                if (pastDate > moment(new Date())) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }, "Date of birth has to be in the past");

        $.validator.addMethod("maintravelleremptycheck", function (value, element) {
            const day = $('#P0-103--DateOfBirth-DD-1').val();
            const month = $('#P0-103--DateOfBirth-MM-1').val();
            const year = $('#P0-103--DateOfBirth-YYYY-1').val();

            if (element.id == "P0-103--DateOfBirth-YYYY-1") {
                if (day.trim().length === 0 || month.trim().length === 0 || year.trim().length === 0 || isValidDateCheck(parseInt(day), parseInt(month), parseInt(year)) == false) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }, "Date of birth is invalid. Please complete the lead travellers date of birth");

        $.validator.addMethod("mainTraverllerMinorCheck", function (value, element) {
            const day = $('#P0-103--DateOfBirth-DD-1').val();
            const month = $('#P0-103--DateOfBirth-MM-1').val();
            const year = $('#P0-103--DateOfBirth-YYYY-1').val();
            if (element.id == "P0-103--DateOfBirth-YYYY-1") {
                return (isTravellerMinor(parseInt(year), parseInt(month), parseInt(day), true) === false);
            }
            else {
                return true;
            }
        }, "Main traveller has to be over 18");

        let ageLimitErrorMsg = "Main traveller must be under 111";
        const messanger = function () {
            return ageLimitErrorMsg;
        }

        $.validator.addMethod("mainTraverllerMajorCheck", function (value, element) {

            var majorAgeLimit = upperAgeLimit();
            if ($('#Policies_0__PolicyType-L').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-S').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-A').attr('aria-checked') === "true") {
                if (element.id == "P0-103--DateOfBirth-YYYY-1") {
                    const day = $('#P0-103--DateOfBirth-DD-1').val();
                    const month = $('#P0-103--DateOfBirth-MM-1').val();
                    const year = $('#P0-103--DateOfBirth-YYYY-1').val();
                    ageLimitErrorMsg = "Main traveller must be under " + majorAgeLimit.toString();
                    return (isSeniorTraveller(parseInt(year), parseInt(month), parseInt(day), majorAgeLimit) === false);
                }
                else {
                    return true;
                }

            }
            else if ($('#typeofpolicy')) {
                if (element.id == "P0-103--DateOfBirth-YYYY-1") {
                    const typeofPolicy = $('#typeofpolicy').val();
                    const day = $('#P0-103--DateOfBirth-DD-1').val();
                    const month = $('#P0-103--DateOfBirth-MM-1').val();
                    const year = $('#P0-103--DateOfBirth-YYYY-1').val();
                    ageLimitErrorMsg = "Main traveller must be under " + majorAgeLimit.toString();
                    return (isSeniorTraveller(parseInt(year), parseInt(month), parseInt(day), majorAgeLimit) === false);
                }
                else {
                    return true;
                }

            } else {
                return true;
            }
        }, messanger);

        $.validator.addMethod("extratravelleremptycheck", function (value, element) {
            const day = $('#P0-103--DateOfBirth-DD-2').val();
            const month = $('#P0-103--DateOfBirth-MM-2').val();
            const year = $('#P0-103--DateOfBirth-YYYY-2').val();;
            if (element.id == "P0-103--DateOfBirth-YYYY-2") {
                if (day.trim().length === 0 || month.trim().length === 0 || year.trim().length === 0 || isValidDateCheck(parseInt(day), parseInt(month), parseInt(year)) == false) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }, function () {
            let errorMsg = "Date of birth is invalid. Please complete traveller 2's date of birth";
            if ($("input[name='Policies[0].CoverType']:checked").val().toString() === 'COU') {
                errorMsg = "Date of birth is invalid. Please complete your partner's date of birth";
            }
            return errorMsg;
        }
        );

        let eAgeLimitErrorMsg = "Traveller 2 must be under 111";
        const eMessanger = function () {
            return eAgeLimitErrorMsg;
        }
        $.validator.addMethod("extraTraverllerMajorCheck", function (value, element) {
            var majorAgeLimit = upperAgeLimit();
            
            const isMeandMypartner = $('#Policies_0__CoverType-COU').attr('aria-checked');
            if ($('#Policies_0__PolicyType-L').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-S').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-A').attr('aria-checked') === "true") {
                if (element.id == "P0-103--DateOfBirth-YYYY-2") {
                    const day = $('#P0-103--DateOfBirth-DD-2').val();
                    const month = $('#P0-103--DateOfBirth-MM-2').val();
                    const year = $('#P0-103--DateOfBirth-YYYY-2').val();
                    if (isMeandMypartner === "true") {
                        eAgeLimitErrorMsg = "Your partner must be under " + majorAgeLimit.toString();
                    } else {
                        eAgeLimitErrorMsg = "Traveller 2 must be under " + majorAgeLimit.toString();
                    }
                    return (isSeniorTraveller(parseInt(year), parseInt(month), parseInt(day), majorAgeLimit) === false);
                }
                else {
                    return true;
                }
            } else if ($('#typeofpolicy')) {
                if (element.id == "P0-103--DateOfBirth-YYYY-2") {
                    const typeofPolicy = $('#typeofpolicy').val();
                    const day = $('#P0-103--DateOfBirth-DD-2').val();
                    const month = $('#P0-103--DateOfBirth-MM-2').val();
                    const year = $('#P0-103--DateOfBirth-YYYY-2').val();
                    const isMeandMypartner = $('#Policies_0__CoverType-COU').attr('aria-checked');

                    if (isMeandMypartner === "true") {
                        eAgeLimitErrorMsg = "Your partner must be under " + majorAgeLimit.toString();
                    } else {
                        eAgeLimitErrorMsg = "Traveller 2 must be under " + majorAgeLimit.toString();
                    }
                    return (isSeniorTraveller(parseInt(year), parseInt(month), parseInt(day), majorAgeLimit) === false);
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }, eMessanger);

        const e1Messanger = function () {
            return e1AgeLimitErrorMsg;
        }
        $.validator.addMethod("extraTraverllerMinorCheck", function (value, element) {
            const isMeandMypartner = $('#Policies_0__CoverType-COU').attr('aria-checked');
            const isGrp = $('#Policies_0__PolicyType-L').attr('aria-checked');
            var isMeandMypartnerbool = false;
            if ($('#Policies_0__PolicyType-L').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-S').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-A').attr('aria-checked') === "true") {
                if (element.id == "P0-103--DateOfBirth-YYYY-2") {
                    const day = $('#P0-103--DateOfBirth-DD-2').val();
                    const month = $('#P0-103--DateOfBirth-MM-2').val();
                    const year = value;
                    if (isMeandMypartner === "true") {
                        e1AgeLimitErrorMsg = "Your partner has to be over 18";
                        isMeandMypartnerbool = true;
                    }
                    else if (isGrp === "true") {
                        e1AgeLimitErrorMsg = "Traveller 2 has to be over 18";
                        isMeandMypartnerbool = true;
                    }
                    return (isTravellerMinor(parseInt(year), parseInt(month), parseInt(day), isMeandMypartnerbool) === false);
                }
                else {
                    return true;
                }
            } else if ($('#typeofpolicy')) {
                if (element.id == "P0-103--DateOfBirth-YYYY-2") {
                    const typeofPolicy = $('#typeofpolicy').val();
                    const day = $('#P0-103--DateOfBirth-DD-2').val();
                    const month = $('#P0-103--DateOfBirth-MM-2').val();
                    const year = $('#P0-103--DateOfBirth-YYYY-2').val();
                    const isMeandMypartner = $('#Policies_0__CoverType-COU').attr('aria-checked');

                    if (isMeandMypartner === "true") {
                        e1AgeLimitErrorMsg = "Your partner has to be over 18";
                        isMeandMypartnerbool = true;
                    }
                    else if (isGrp === "true") {
                        e1AgeLimitErrorMsg = "Traveller 2 has to be over 18";
                        isMeandMypartnerbool = true;
                    }
                    return (isTravellerMinor(parseInt(year), parseInt(month), parseInt(day), isMeandMypartnerbool) === false);
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }, e1Messanger);

        $.validator.addMethod("newtravelleremptycheck", function (value, element, params) {
            const day = $(document.getElementById(params[0])).val();
            const month = $(document.getElementById(params[1])).val();
            const year = $(document.getElementById(params[2])).val();
            if (element.id == "P0-103--DateOfBirth-YYYY-" + params[3]) {
                if (day.trim().length === 0 || month.trim().length === 0 || year.trim().length === 0 || isValidDateCheck(parseInt(day), parseInt(month), parseInt(year)) == false) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }, $.format("Date of birth is invalid. Please complete traveller {3}'s date of birth"));

        let nAgeLimitErrorMsg = "Traveller 3 must be under 61";
        const nMessanger = function () {
            return nAgeLimitErrorMsg;
        }
        let nAgeLimitErrorMsg1 = "Traveller 3 must be under 61";
        const nMessanger1 = function () {
            return nAgeLimitErrorMsg1;
        }

        $.validator.addMethod("newTraverllerMajorCheck", function (value, element, params) {
            var majorAgeLimit = upperAgeLimit();
            if ($('#Policies_0__PolicyType-L').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-S').attr('aria-checked') === "true" || $('#Policies_0__PolicyType-A').attr('aria-checked') === "true") {
                const day = $(document.getElementById(params[0])).val();
                const month = $(document.getElementById(params[1])).val();
                const year = $(document.getElementById(params[2])).val();
                const travellerNo = params[3];
                if (element.id == "P0-103--DateOfBirth-YYYY-" + travellerNo) {
                    nAgeLimitErrorMsg = "Traveller " + travellerNo + " must be under " + majorAgeLimit.toString();
                    return (isSeniorTraveller(parseInt(year), parseInt(month), parseInt(day), majorAgeLimit) === false);
                }
                else {
                    return true;
                }

            } else if ($('#typeofpolicy')) {
                const typeofPolicy = $('#typeofpolicy').val();
                const day = $(document.getElementById(params[0])).val();
                const month = $(document.getElementById(params[1])).val();
                const year = $(document.getElementById(params[2])).val();
                const travellerNo = params[3];
                if (element.id == "P0-103--DateOfBirth-YYYY-" + travellerNo) {
                    nAgeLimitErrorMsg = "Traveller " + travellerNo + " must be under " + majorAgeLimit.toString();
                    return (isSeniorTraveller(parseInt(year), parseInt(month), parseInt(day), majorAgeLimit) === false);
                }
                else {
                    return true;
                }

            } else {
                return true;
            }
        }, nMessanger);
        $.validator.addMethod("newTraverllerMinorCheck", function (value, element, params) {
            if ($('#Policies_0__PolicyType-L').attr('aria-checked') === "true") {
                const day = $(document.getElementById(params[0])).val();
                const month = $(document.getElementById(params[1])).val();
                const year = $(document.getElementById(params[2])).val();
                const travellerNo = params[3];
                if (element.id == "P0-103--DateOfBirth-YYYY-" + travellerNo) {
                    nAgeLimitErrorMsg1 = "Traveller " + travellerNo + " has to be over 18";
                    return (isTravellerMinor(parseInt(year), parseInt(month), parseInt(day), true) === false);
                }
                else {
                    return true;
                }

            } else if ($('#typeofpolicy')) {
                if ($('#Policies_0__PolicyType-L').attr('aria-checked') === "true") {
                    const day = $(document.getElementById(params[0])).val();
                    const month = $(document.getElementById(params[1])).val();
                    const year = $(document.getElementById(params[2])).val();
                    const travellerNo = params[3];
                    if (element.id == "P0-103--DateOfBirth-YYYY-" + travellerNo) {
                        nAgeLimitErrorMsg1 = "Traveller " + travellerNo + " has to be over 18";
                        return (isTravellerMinor(parseInt(year), parseInt(month), parseInt(day), true) === false);
                    }
                    else {
                        return true;
                    }

                }
                else {
                    return true;
                }
            }
        }, nMessanger1);
        $.validator.addMethod("newtravellerDateCheck", function (value, element, params) {
            let day;
            let month;
            let year;
            let dynamicid;
            const travellerNo = params[3];
            if (element.id == "P0-103--DateOfBirth-YYYY-" + travellerNo) {
                day = $(document.getElementById(params[0])).val();
                month = $(document.getElementById(params[1])).val();
                year = $(document.getElementById(params[2])).val();
            }

            let fullDatePast = (year + '-' + month + '-' + day).toString();
            let pastDate = new Date(fullDatePast);
            if (pastDate > moment(new Date())) {
                return false;
                //return (setDateLabel(day, month,year) === false);
            }
            else {
                return true;
            }
        }, "Date of birth has to be in the past");

        $.validator.setDefaults({
            ignoreTitle: true,
            highlight: function (element) {
                var $element = $(element);
                //Policies[0].Destination
                if ($element.closest('.error-section').length > 0) {
                    $(element).closest('.error-section').addClass('invalid-section');
                    //$($(element).closest('.error-section').find('.invalid-msg')[0]).removeClass('hide');
                    $(element).closest('.error-section').find('.invalid-msg').removeClass('hide');
                }
                else {
                    $(element).closest('.radio-group').find('.invalid-msg').removeClass('hide');
                    $(element).closest('.radio-group').addClass('invalid-section');
                }
                //,
                //errorPlacement: function (error, element) {
                //    var $errorElement = $(error);
                //    if ($errorElement.closest('.error-section').length > 0) {
                //        $($errorElement).closest('.error-section').addClass('invalid-section');
                //        $($errorElement).closest('.error-section').find('.invalid-msg').removeClass('hide');
                //    }
                //}


            },
            unhighlight: function (element) {
                var $element = $(element);

                if ($element.closest('.error-section').length > 0) {
                    $(element).closest('.error-section').removeClass('invalid-section');
                    $(element).closest('.error-section').find('.invalid-msg').addClass('hide');

                } else {
                    $(element).closest('.radio-group').removeClass('invalid-section');
                    $(element).closest('.radio-group').find('.invalid-msg').addClass('hide');
                }
            },
            ////errorPlacement: function (error, element) {
            ////    var $errorElement = $(error);
            ////    if ($errorElement.closest('.error-section').length > 0) {
            ////        $($errorElement).closest('.error-section').addClass('invalid-section');
            ////        $($errorElement).closest('.error-section').find('.invalid-msg').removeClass('hide');
            ////    }
            ////}
        });
    },

    resetFormValidator: function () {
        var form = $('form');
        form.off('submit');
        form.removeData("validator");
        form.removeData("unobtrusiveValidation");
        $.validator.unobtrusive.parse('form');
    },

    initQtip: function (parent) {
        $(parent).find("span[data-qtip='true']").each(function () {
            var position = $(this).data('position');
            var atPosition = "top center";
            var myPosition = "bottom center";
            var adjustX = 0;
            var adjustY = -10;

            switch (position) {
                case 'left': atPosition = 'left center';
                    myPosition = 'right center';
                    adjustX = -10;
                    adjustY = 0;
                    break;
                case 'right': atPosition = 'right center';
                    myPosition = 'left center';
                    adjustX = 10;
                    adjustY = 0;
                    break;
                case 'bottom': atPosition = 'bottom center';
                    myPosition = 'top center';
                    adjustX = 0;
                    adjustY = 10;
                    break;
            }
            $(this).qtip({
                content: {
                    text: $(this).next('.qtip-text'),
                    //button: $("<span class='close-icon icon-2x'>X</span>")
                },
                show: 'click',
                hide: 'unfocus, click',
                position: {
                    target: 'event',
                    at: atPosition,
                    my: myPosition,
                    adjust: {
                        x: adjustX,
                        y: adjustY,
                        resize: true,
                        scroll: false
                    },
                    viewport: $(window)
                },
                style: {
                    tip: {
                        width: 12,
                        height: 12
                    }
                }
            })
        })
    },

    init: function () {
        this.initQtip('body');
    },

    autoFormat: function () {
        $(".nodatepicker").keyup(function (e) {
            if (e.keyCode != 193 && e.keyCode != 111) {
                if (e.keyCode != 8) {
                    if ($(this).val().length == 2) {
                        $(this).val($(this).val() + "/");
                    }
                    else if ($(this).val().length == 5) {
                        $(this).val($(this).val() + "/");
                    }
                    else if ($(this).val().length == 4 && e.keyCode == 191) {
                        var str = $(this).val()
                        str = str.substring(0, str.length - 1);
                        $(this).val(str);
                    }
                    else if ($(this).val().length == 7 && e.keyCode == 191) {
                        var str = $(this).val()
                        str = str.substring(0, str.length - 1);
                        $(this).val(str);
                    }
                    else if ($(this).val().length == 10) {
                        var date = FormatUkDate($(this).val());
                        var longDate = moment(date);
                        longDate = longDate.format('dddd Do MMMM YYYY');
                        $(this).parent(".form-date-picker").siblings(".datepickedvalue").html(longDate);
                    }
                }
                else {
                    var temp = $(this).val();
                    if ($(this).val().length == 5) {
                        $(this).val(temp.substring(0, 4));
                    }
                    else if ($(this).val().length == 2) {
                        $(this).val(temp.substring(0, 1));
                    }
                    else if ($(this).val().length < 10) {
                        $(this).parent(".form-date-picker").siblings(".datepickedvalue").empty();
                    }
                }
            }
            else {
                var temp = $(this).val();
                var tam = $(this).val().length;
                $(this).val(temp.substring(0, tam - 1));
            }
        });
    }
};

function FormatUkDate(dateStr) {
    dateStr = dateStr.split("/");
    return new Date(dateStr[2], dateStr[1] - 1, dateStr[0]).toDateString();
}

poms.setFormValidation();


function setDateLabel(dayId, monthId, yearId, trigerredFrom) {
    const convDateIdStr = 'P0-103--ConvertedDate-' + yearId.charAt(yearId.length - 1);
    const dateInputTraveller = document.getElementById(yearId);
    const dateInputTravellerSpan = document.getElementById(convDateIdStr);
    try {
        if (trigerredFrom === "day") {
            dayBirthValidation(dayId);
        }
        else if (trigerredFrom === "month") {
            monthBirthValidation(monthId);
        }
        else {
            dayBirthValidation(dayId);
            monthBirthValidation(monthId);
        }
    } catch (err) {
        dateInputTravellerSpan.innerHTML = "";
        $(dateInputTravellerSpan).addClass("hidden");
        $(dateInputTravellerSpan).removeClass("conv-date-cont");
        throw err;
    }

    const dayTraveller = document.getElementById(dayId);
    const monthTraveller = document.getElementById(monthId);
    const yearTraveller = dateInputTraveller;
    const hiddenInputId = 'Policies_0__Risk_' + (yearId.charAt(yearId.length - 1) - 1) + '__Traveller_DateOfBirth';
    let fullDate = "";
    let date = "";
    let [month, day, dayNumber, year] = [];
    let dayNumberString = "";
    let formattedDayforInput = "";

    const todaysDate = new Date();
    const todaysYear = todaysDate.getFullYear();
    const todaysYearConv = parseInt(todaysYear, 10);
    const yearTravellerConv = parseInt(yearTraveller.value, 10);
    const errorMsgSectionString = "yearOfBirthTraveller-";
    const fullSpanelementId = errorMsgSectionString + (yearId.charAt(yearId.length - 1)).toString();
    const errorMessageSpan = document.getElementById(fullSpanelementId);
    const errorMessagge2 = "The field Date Of Birth must be a date."
    const errorMessagge3 = "The selected month has 30 days. Please enter the correct date."
    const errorMessagge4 = "The selected year is leap year and February has 29 days.";
    const errorMessagge5 = "The selected year is not leap year and February has 28 days.";
    const errorMessagge6 = "The selected month has 31 days. Please enter the correct date."
    const leapYearResult = checkLeapYear(yearTravellerConv);

    const dayStringValue = dayTraveller.value;
    const monthStringValue = monthTraveller.value;
    const monthLength = monthStringValue.trim().length;
    let monthStringValue2 = monthStringValue;
    if (monthLength === 2 && monthStringValue.charAt(0) === '0') {
        monthStringValue2 = monthStringValue.charAt(monthStringValue.length - 1);
    }
    const dayToNumberConverted = parseInt(dayStringValue, 10);
    const monthToNumberConverted = parseInt(monthStringValue2);

    
    if (monthStringValue.trim().length === 0 || dayStringValue.trim().length === 0 || yearTraveller.value.trim().length === 0) {
        dateInputTravellerSpan.innerHTML = "";
        $(dateInputTravellerSpan).addClass("hidden");
        $(dateInputTravellerSpan).removeClass("conv-date-cont");

        return;
    }

    let fullDateLabel = "";
    let formattedDateString = "";
    if (yearTraveller.value.length == 1) {
        yearTraveller.value = "000" + yearTraveller.value;
    }
    else if (yearTraveller.value.length == 2) {
        yearTraveller.value = "00" + yearTraveller.value;
    }
    else if (yearTraveller.value.length == 3) {
        yearTraveller.value = "0" + yearTraveller.value;
    }


   
    $(errorMessageSpan).addClass("hidden");
    $(yearTraveller).removeClass("form-control-on-error");
    if (leapYearResult) {
        if ((dayToNumberConverted >= 31 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) ||
            (dayToNumberConverted > 31 & (monthToNumberConverted === 1 || monthToNumberConverted === 3 || monthToNumberConverted === 5 || monthToNumberConverted === 7 || monthToNumberConverted === 8 || monthToNumberConverted === 10 || monthToNumberConverted === 12))) {
            errorMessageSpan.innerText = errorMessagge3;
            $(errorMessageSpan).removeClass("hidden");
            $(dayTraveller).addClass("form-control-on-error");
            $(monthTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");
            if (dayToNumberConverted > 31) {
                throw errorMessagge6;
            } else {
                throw errorMessagge3;
            }
        } else if ((dayToNumberConverted <= 30 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) ||
            (dayToNumberConverted <= 31 & (monthToNumberConverted === 1 || monthToNumberConverted === 3 || monthToNumberConverted === 5 || monthToNumberConverted === 7 || monthToNumberConverted === 8 || monthToNumberConverted === 10 || monthToNumberConverted === 12))) {
            $(dayTraveller).removeClass("form-control-on-error");
            $(monthTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
            
            dayNumberString = Dateofbirthstring(dayNumber);
            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeek[day] + ' ' + dayNumberString + ' ' + monthNames[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }

        else if (dayToNumberConverted >= 30 & monthToNumberConverted === 2) {
            errorMessageSpan.innerText = errorMessagge2 + ' ' + errorMessagge4;
            $(errorMessageSpan).removeClass("hidden");
            $(yearTraveller).addClass("form-control-on-error");
            $(dayTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");

            throw errorMessagge2;
        }
        else if (dayToNumberConverted <= 29 & monthToNumberConverted === 2) {
            $(dayTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
           
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeek[day] + ' ' + dayNumberString + ' ' + monthNames[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }
    } else if (!leapYearResult) {
        if (dayToNumberConverted >= 31 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) {
            errorMessageSpan.innerText = errorMessagge3;
            $(errorMessageSpan).removeClass("hidden");
            $(dayTraveller).addClass("form-control-on-error");
            $(monthTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");

            throw errorMessagge3;
        } else if (dayToNumberConverted <= 30 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) {
            $(dayTraveller).removeClass("form-control-on-error");
            $(monthTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
           
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeek[day] + ' ' + dayNumberString + ' ' + monthNames[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }
        if (dayToNumberConverted >= 29 & monthToNumberConverted === 2) {
            errorMessageSpan.innerText = errorMessagge2 + errorMessagge5;
            $(errorMessageSpan).removeClass("hidden");
            $(yearTraveller).addClass("form-control-on-error");
            $(dayTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");

            throw errorMessagge2;
        } else {
            $(dayTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
           
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeek[day] + ' ' + dayNumberString + ' ' + monthNames[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }
    }

}


function isTravellerMinor(year, month, day,travellertype) {

    var isMinor = false;
    var startdate = new Date(getStartDate());
    if ((year != null && year != undefined) && (month != null && month != undefined && !isNaN(month)) && (day != null && day != undefined && !isNaN(day))) {
        var age = startdate.getFullYear() - year;
        var birthDate = new Date(year + "-" + month + "-" + day);
        //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
        var m = (startdate.getMonth() + 1) - month;
        if (m < 0 || (m === 0 && startdate.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18 && travellertype === true && age >= 0) {
            isMinor = true;
        }
    }
    return isMinor;
    // }
}

function isSeniorTraveller(year, month, day, ageLimit = 60) {
    var isMajor = false;
    var startdate = new Date(getStartDate());
    if ((year != null && year != undefined) && (month != null && month != undefined && !isNaN(month)) && (day != null && day != undefined && !isNaN(day))) {
        var age = startdate.getFullYear() - year;
        var birthDate = new Date(year + "-" + month + "-" + day);
        //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
        var m = (startdate.getMonth() + 1) - month;
        if (m < 0 || (m === 0 && startdate.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age >= ageLimit) {
            isMajor = true;
        }
    }
    return isMajor;
}



function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}

function dayBirthValidation(dayId) {
    const errorMessage1 = "Invalid date format. For days 1 to 9 please provide '0' before, e.g. 01";
    const errorMessage = "Day of birth cannot be > 31. Please enter correct value.";
    const errorMessage3 = "Day cannot be blank.";
    const errorMessage4 = "Day of birth cannot be zero. Please enter correct value.";
    const dayTraveller = document.getElementById(dayId);
    const errorMsgSectionString = "dayOfBirthTraveller-";
    const fullSpanelementId = errorMsgSectionString + (dayId.charAt(dayId.length - 1)).toString();
    const dayNumber = parseInt(dayTraveller.value, 10);
    const errorMessageSpan = document.getElementById(fullSpanelementId);

    if (dayNumber >= 1 && dayNumber <= 9 && dayTraveller.value.toString().trim().length === 1) {
        errorMessageSpan.innerText = errorMessage1;
        $(errorMessageSpan).removeClass("hidden");
        $(dayTraveller).addClass("form-control-on-error");
        throw errorMessage1;
    } else if (dayNumber > 31) {
        errorMessageSpan.innerText = errorMessage;
        $(errorMessageSpan).removeClass("hidden");
        $(dayTraveller).addClass("form-control-on-error");
        throw errorMessage;
    } else if (dayNumber <= 0) {
        errorMessageSpan.innerText = errorMessage4;
        $(errorMessageSpan).removeClass("hidden");
        $(dayTraveller).addClass("form-control-on-error");
        throw errorMessage;
    } else if (dayNumber == null || dayNumber == undefined || dayNumber == "" || isNaN(dayNumber)) {
        errorMessageSpan.innerText = errorMessage3;
        $(errorMessageSpan).removeClass("hidden");
        $(dayTraveller).addClass("form-control-on-error");
        throw errorMessage3;
    } else {
        $(errorMessageSpan).addClass("hidden");
        $(dayTraveller).removeClass("form-control-on-error");
        return false;
    }

}

function monthBirthValidation(monthId) {
    const errorMessage1 = "Invalid date format. For months January to September please provide '0' before, e.g. 01";
    const errorMessage2 = "Invalid month value. Month must be within range of 01-12. Please enter a correct value."
    const errorMessage3 = "Month cannot be blank.";
    const monthTraveller = document.getElementById(monthId);
    const errorMsgSectionString = "monthOfBirthTraveller-";
    const fullSpanelementId = errorMsgSectionString + (monthId.charAt(monthId.length - 1)).toString();
    const monthNumber = monthTraveller.value;
    const monthNumberConv = parseInt(monthTraveller.value, 10);
    const errorMessageSpan = document.getElementById(fullSpanelementId);

    if (monthNumber === '1' || monthNumber === '2' || monthNumber === '3' || monthNumber === '4' ||
        monthNumber === '5' || monthNumber === '6' || monthNumber === '7' || monthNumber === '8' ||
        monthNumber === '9') {
        errorMessageSpan.innerText = errorMessage1;
        $(errorMessageSpan).removeClass("hidden");
        $(monthTraveller).addClass("form-control-on-error");
        throw errorMessage1;
    } else if (monthNumberConv >= 13 || monthNumberConv <= 0) {
        errorMessageSpan.innerText = errorMessage2;
        $(errorMessageSpan).removeClass("hidden");
        $(monthTraveller).addClass("form-control-on-error");
        throw errorMessage2;
    } else if (monthNumber == null || monthNumber == undefined || monthNumber == "") {
        errorMessageSpan.innerText = errorMessage3;
        $(errorMessageSpan).removeClass("hidden");
        $(monthTraveller).addClass("form-control-on-error");
        throw errorMessage3;
    }
    else {
        $(errorMessageSpan).addClass("hidden");
        $(monthTraveller).removeClass("form-control-on-error");
        return false;
    }

}

function setDateLabelForMTA(dayId, monthId, yearId, trigerredFrom) {
    const daysOfWeekMTA = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNamesMTA = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const convDateIdStr = 'MTA-P0-103--ConvertedDate-' + yearId.charAt(yearId.length - 1);
    const dateInputTraveller = document.getElementById(yearId);
    const dateInputTravellerSpan = document.getElementById(convDateIdStr);
    try {
        if (trigerredFrom === "day") {
            dayBirthValidation(dayId);
        }
        else if (trigerredFrom === "month") {
            monthBirthValidation(monthId);
        }
        else {
            dayBirthValidation(dayId);
            monthBirthValidation(monthId);
        }
    } catch (err) {
        dateInputTravellerSpan.innerHTML = "";
        $(dateInputTravellerSpan).addClass("hidden");
        $(dateInputTravellerSpan).removeClass("conv-date-cont");
        throw err;
    }

    const dayTraveller = document.getElementById(dayId);
    const monthTraveller = document.getElementById(monthId);
    const yearTraveller = dateInputTraveller;
    const hiddenInputId = 'Policies_0__Risk_' + (yearId.charAt(yearId.length - 1) - 1) + '__Traveller_DateOfBirth';
    let fullDate = "";
    let date = "";
    let [month, day, dayNumber, year] = [];
    let dayNumberString = "";
    let formattedDayforInput = "";

    const todaysDate = new Date();
    const todaysYear = todaysDate.getFullYear();
    const todaysYearConv = parseInt(todaysYear, 10);
    const yearTravellerConv = parseInt(yearTraveller.value, 10);
    const errorMsgSectionString = "yearOfBirthTraveller-";
    const fullSpanelementId = errorMsgSectionString + (yearId.charAt(yearId.length - 1)).toString();
    const errorMessageSpan = document.getElementById(fullSpanelementId);
    const errorMessageMainTravellerMinor = "Main traveller has to be of age over 18."
    const errorMessageMainTravellerBlank = "Main traverller birthdate cannot be blank."
    const errorMessagge2 = "The field Date Of Birth must be a date."
    const errorMessagge3 = "The selected month has 30 days. Plese enter the correct date."
    const errorMessagge4 = "The selected year is leap year and February has 29 days.";
    const errorMessagge5 = "The selected year is not leap year and February has 28 days.";
    const errorMessagge6 = "The selected month has 31 days. Plese enter the correct date."
    const leapYearResult = checkLeapYear(yearTravellerConv);

    const dayStringValue = dayTraveller.value;
    const monthStringValue = monthTraveller.value;
    const monthLength = monthStringValue.trim().length;
    let monthStringValue2 = monthStringValue;
    if (monthLength === 2 && monthStringValue.charAt(0) === '0') {
        monthStringValue2 = monthStringValue.charAt(monthStringValue.length - 1);
    }
    const dayToNumberConverted = parseInt(dayStringValue, 10);
    const monthToNumberConverted = parseInt(monthStringValue2);

    
    if (monthStringValue.trim().length === 0 || dayStringValue.trim().length === 0 || yearTraveller.value.trim().length === 0) {
        dateInputTravellerSpan.innerHTML = "";
        $(dateInputTravellerSpan).addClass("hidden");
        $(dateInputTravellerSpan).removeClass("conv-date-cont");

        return;
    }

    let fullDateLabel = "";
    let formattedDateString = "";

    if (yearTraveller.value.length == 1) {
        yearTraveller.value = "000" + yearTraveller.value;
    }
    else if (yearTraveller.value.length == 2) {
        yearTraveller.value = "00" + yearTraveller.value;
    }
    else if (yearTraveller.value.length == 3) {
        yearTraveller.value = "0" + yearTraveller.value;
    }


    

    $(errorMessageSpan).addClass("hidden");
    $(yearTraveller).removeClass("form-control-on-error");
    if (leapYearResult) {
        if ((dayToNumberConverted >= 31 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) ||
            (dayToNumberConverted > 31 & (monthToNumberConverted === 1 || monthToNumberConverted === 3 || monthToNumberConverted === 5 || monthToNumberConverted === 7 || monthToNumberConverted === 8 || monthToNumberConverted === 10 || monthToNumberConverted === 12))) {
            errorMessageSpan.innerText = errorMessagge3;
            $(errorMessageSpan).removeClass("hidden");
            $(dayTraveller).addClass("form-control-on-error");
            $(monthTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");
            if (dayToNumberConverted > 31) {
                throw errorMessagge6;
            } else {
                throw errorMessagge3;
            }
        } else if ((dayToNumberConverted <= 30 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) ||
            (dayToNumberConverted <= 31 & (monthToNumberConverted === 1 || monthToNumberConverted === 3 || monthToNumberConverted === 5 || monthToNumberConverted === 7 || monthToNumberConverted === 8 || monthToNumberConverted === 10 || monthToNumberConverted === 12))) {
            $(dayTraveller).removeClass("form-control-on-error");
            $(monthTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
            
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeekMTA[day] + ' ' + dayNumberString + ' ' + monthNamesMTA[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }

        else if (dayToNumberConverted >= 30 & monthToNumberConverted === 2) {
            errorMessageSpan.innerText = errorMessagge2 + ' ' + errorMessagge4;
            $(errorMessageSpan).removeClass("hidden");
            $(yearTraveller).addClass("form-control-on-error");
            $(dayTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");

            throw errorMessagge2;
        }
        else if (dayToNumberConverted <= 29 & monthToNumberConverted === 2) {
            $(dayTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
           
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeekMTA[day] + ' ' + dayNumberString + ' ' + monthNamesMTA[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }
    } else if (!leapYearResult) {
        if (dayToNumberConverted >= 31 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) {
            errorMessageSpan.innerText = errorMessagge3;
            $(errorMessageSpan).removeClass("hidden");
            $(dayTraveller).addClass("form-control-on-error");
            $(monthTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");

            throw errorMessagge3;
        } else if (dayToNumberConverted <= 30 & (monthToNumberConverted === 4 || monthToNumberConverted === 6 || monthToNumberConverted === 9 || monthToNumberConverted === 11)) {
            $(dayTraveller).removeClass("form-control-on-error");
            $(monthTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
           
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeekMTA[day] + ' ' + dayNumberString + ' ' + monthNamesMTA[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }
        if (dayToNumberConverted >= 29 & monthToNumberConverted === 2) {
            errorMessageSpan.innerText = errorMessagge2 + errorMessagge5;
            $(errorMessageSpan).removeClass("hidden");
            $(yearTraveller).addClass("form-control-on-error");
            $(dayTraveller).addClass("form-control-on-error");

            dateInputTravellerSpan.innerHTML = "";
            $(dateInputTravellerSpan).addClass("hidden");
            $(dateInputTravellerSpan).removeClass("conv-date-cont");

            throw errorMessagge2;
        } else {
            $(dayTraveller).removeClass("form-control-on-error");
            fullDate = (yearTraveller.value + '-' + monthTraveller.value + '-' + dayTraveller.value).toString();
            date = new Date(fullDate);
            [month, day, dayNumber, year] = [date.getMonth(), date.getDay(), date.getDate(), date.getFullYear()];
            
            dayNumberString = Dateofbirthstring(dayNumber);

            formattedDayforInput = dayNumber;
            fullDateLabel = daysOfWeekMTA[day] + ' ' + dayNumberString + ' ' + monthNamesMTA[month] + ' ' + year;
            formattedDateString = formattedDayforInput + '/' + monthTraveller.value + "/" + year;
            dateInputTravellerSpan.innerHTML = fullDateLabel;

            $(dateInputTravellerSpan).addClass("conv-date-cont");
            $(dateInputTravellerSpan).removeClass("hidden");
            $("#" + hiddenInputId).val(formattedDateString);
            dayTraveller.removeAttribute('readonly');
            $("#" + hiddenInputId).val(formattedDateString).change();
            return false;
        }
    }

    //return false;
    //}


}

function isValidDateCheck(dtDay = 0, dtMonth = 0, dtYear = 0) {
    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
        return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
            return false;
    }
    return true;
}

function Dateofbirthstring(dayNumber) {
    let dayNumberString = "";
    var j = dayNumber % 10,
        k = dayNumber % 100;
    if (j == 1 && k != 11) {
        dayNumberString = dayNumber + "st";

    }
    else if (j == 2 && k != 12) {
        dayNumberString = dayNumber + "nd";
    }
    else if (j == 3 && k != 13) {
        dayNumberString = dayNumber + "rd";
    }
    else {
        dayNumberString = dayNumber + "th";
    }
    return dayNumberString;
}