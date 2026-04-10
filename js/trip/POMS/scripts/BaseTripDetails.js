
$(document).ready(function () {
    $('.datepickedvalue').each(function () {
        var date = $(this).html();
        if (date != "") {
            date = FormatUkDate($(this).html());
            var longDate = moment(date);
            longDate = longDate.format('dddd Do MMMM YYYY');
            $(this).html(longDate);
        }
    });
    poms.autoFormat();

   
});

$('#Policies_0__SameAddress-False').change(function () {
    //alert('BaseTripDetails.js no clicked');
    if ($(this).is(':checked')) {
        $('label[for="Policies_0__CoverType-GRP"]').trigger("click");
        $('#Policies_0__CoverType-GRP').trigger("click");
        $('#Policies_0__CoverType-GRP').trigger("change");
        $('#friends-message').removeClass('hide');
    };
});

$('#Policies_0__CoverType-GRP').click(function () {
    if ($(this).is(':checked')) {
        changeFromPartner();
        poms.resetFormValidator();
    }
});

$('#Policies_0__CoverType-FAM').click(function () {
    if ($(this).is(':checked')) {
        changeFromPartner();
        poms.resetFormValidator();
    }
});

function addTraveller(step) {
    var form = $("#form").serializeArray();
    form.push(
        {
            name: "nextstep",
            value: step
        }
    );
    form = jQuery.param(form);
    $.ajax({
        url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/AddTraveller?E=' + poms.getParameterByName("E"),
        type: 'POST',
        data: form,
        cache: false,
        success: function (partialViewResult) {

            partialViewResult = partialViewResult.replaceAll('poms.autoFormat();', '');
            partialViewResult = partialViewResult.replaceAll("poms.initQtip('body');", "poms.initQtip('#newTravellers');");
            $('#newTravellers').html(partialViewResult);

            let newTravellersCount = 2;
            $('#newTravellers').children('div').each(function () {
                if (this.id.indexOf('date-') !== -1) {
                    newTravellersCount = newTravellersCount + 1;
                }
            });

            $('#newTravellers').children('div').each(function () {
                if (this.id.indexOf('date-') !== -1) {
                    const lastChar = this.id.charAt(this.id.length - 1);
                    //Policies_0__Risk_2__Traveller_DateOfBirth
                    const dt = $(this).find('#Policies_0__Risk_' + lastChar + '__Traveller_DateOfBirth').val().substring(0, 10);
                    dtParts = dt.split('/');
                    $(this).find(':input[type=number]').eq(0).val(dtParts[0]);
                    $(this).find(':input[type=number]').eq(1).val(dtParts[1]);
                    $(this).find(':input[type=number]').eq(2).val(dtParts[2]);

                    $(this).find('span.icon-poms').attr('data-qtip', 'true');
                    $(this).find('span.icon-poms').attr('data-hasqtip', '5');
                    $(this).find('span.icon-poms').attr('aria-describedby', 'qtip-5');

                    if (dtParts[2] !== undefined && dtParts[1] !== undefined && dtParts[0] !== undefined) {
                        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                        const dt = new Date((dtParts[2] + '-' + dtParts[1] + '-' + dtParts[0]).toString());
                        const fullDateLabel = daysOfWeek[parseInt(dt.getDay())] + ' ' + dtParts[0] + ' ' + monthNames[parseInt(dtParts[1])-1] + ' ' + dtParts[2];
                        let dateInputTravellerSpan = $(this).find('span.the-converted-date');
                        $(dateInputTravellerSpan).text(fullDateLabel);
                        $(dateInputTravellerSpan).addClass("conv-date-cont");
                        $(dateInputTravellerSpan).removeClass("hidden");
                    }


                    
                    const idNum = parseInt(lastChar) + 1;
                    $(this).find(':input[type=number]').eq(2).attr('name', 'Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Year');
                
                    const emptyCheckParams = '["P0-103--DateOfBirth-DD-' + idNum.toString() + '"' + ', "P0-103--DateOfBirth-MM-' + idNum.toString() + '"' + ', "P0-103--DateOfBirth-YYYY-' + idNum.toString() + '"' + ', "' + idNum.toString() + '"' + ']';
                    $(this).find(':input[type=number]').eq(2).attr('data-rule-newtravelleremptycheck', emptyCheckParams);
                    $(this).find(':input[type=number]').eq(2).attr('data-rule-newTraverllerMajorCheck', emptyCheckParams);
                    //<input class="form-control" id="P0-103--DateOfBirth-YYYY-4" type="number" pattern="[0-9]*" value="" autocomplete="off" placeholder="YYYY" maxlength="4" name="Policies[0].Risk[4].Traveller.DateOfBirth.Year" data-rule-newtravelleremptycheck="[&quot;P0-103--DateOfBirth-DD-4&quot;, &quot;P0-103--DateOfBirth-MM-4&quot;, &quot;P0-103--DateOfBirth-YYYY-4&quot;, &quot;4&quot;]" oninput="this.value=this.value.slice(0,this.maxLength)" onchange="setDateLabel('P0-103--DateOfBirth-DD-4', 'P0-103--DateOfBirth-MM-4', 'P0-103--DateOfBirth-YYYY-4')">

                    const containerEl = $(this).find('#' + 'P0-103--DateOfBirthContainer-' + idNum.toString());
                    $(containerEl).addClass('error-section');
                    const invalidMsgDiv = $(containerEl).children('div:first-child').find('div.invalid-msg');
                    if (invalidMsgDiv === undefined || invalidMsgDiv === null) {
                    $(containerEl).children('div:first-child').append('<div class="invalid-msg hide col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10"><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Day" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Month" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Year" data-valmsg-replace="true"></span></div>');
                    //if (invalidMsgDiv === undefined || invalidMsgDiv === null) {
                    //    $(containerEl).first().append('<div class="invalid-msg hide col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10"><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Day" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Month" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Year" data-valmsg-replace="true"></span></div>');
                    }

                    const errorDiv = '<div id="errDiv" style="margin-bottom:10px"></div>';

                    // mta title
                    const titleEl = $(this).find("#Policies_0__Risk_" + (idNum - 1).toString() + "__Traveller_Title");
                    if (titleEl) {
                        titleEl.attr('onchange', 'validateDynamicTitle(' + (idNum - 1) + ')');
                        $(titleEl).parent().after(errorDiv);
                        $(titleEl).parent().parent().find('#errDiv').append('<div id = "titleTraveller-' + idNum.toString() + '" class= "mg-bottom-10 col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10 birth-day-validation-error hidden" ></div >');
                    }

                    // mta first name
                    const firstNameEl = $(this).find("#Policies_0__Risk_" + (idNum - 1).toString() + "__Traveller_FirstName");
                    if (firstNameEl) {
                        firstNameEl.attr('onchange', 'validateDynamicFirstName(' + (idNum - 1) + ')');
                        $(firstNameEl).parent().after(errorDiv);
                        $(firstNameEl).parent().parent().find('#errDiv').append('<div id = "firstNameTraveller-' + idNum.toString() + '" class= "mg-bottom-10 col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10 birth-day-validation-error hidden" ></div >');

                    }

                    // mta last name
                    const lastNameEl = $(this).find("#Policies_0__Risk_" + (idNum - 1).toString() + "__Traveller_LastName");
                    if (lastNameEl) {
                        lastNameEl.attr('onchange', 'validateDynamicLastName(' + (idNum - 1) + ')');
                        $(lastNameEl).parent().after(errorDiv);
                        $(lastNameEl).parent().parent().find('#errDiv').append('<div id = "lastNameTraveller-' + idNum.toString() + '" class= "mg-bottom-10 col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10 birth-day-validation-error hidden" ></div >');
                    }
                    
                }
            });
            formatDate($('#newTravellers'));
            showEligibilityQuestionIfRequired();
            poms.recompileAngular('#newTravellers');
            poms.resetFormValidator();
            // validate date of birth
            for (var i = 3; i < newTravellersCount; i++) {
                $('#P0-103--DateOfBirth-YYYY-' + i.toString() + '').valid();
            }
        },
        error: function (data) {
           // alert("error");
        }
    });

    return false;
}

function removeTraveller(id) {
    var form = $("#form").serializeArray();
    form.push(
        {
            name: "nextstep",
            value: id
        }
    );
    form = jQuery.param(form);
    $.ajax({
        url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/AddTraveller?E=' + poms.getParameterByName("E"),
        type: 'POST',
        data: form,
        cache: false,
        success: function (partialViewResult) {
            $(partialViewResult).find('div#addtraveller').attr("ng-show", "Policies[0].CoverType == 'FAM'||Policies[0].CoverType == 'GRP'");
            $(partialViewResult).find('div#addtraveller').attr("aria-hidden", "false");

            let outerhtml = $($(partialViewResult).prop('outerHTML'))[0];

            if (outerhtml.id === 'addtraveller') {
                partialViewResult = outerhtml;
            }

            $('#newTravellers').html(partialViewResult);

            let newTravellersCount = 2;
            $('#newTravellers').children('div').each(function () {
                if (this.id.indexOf('date-') !== -1) {
                    newTravellersCount = newTravellersCount + 1;
                }
            });

            $('#newTravellers').children('div').each(function () {
                if (this.id.indexOf('date-') !== -1) {
                    const lastChar = this.id.charAt(this.id.length - 1);                    
                    //Policies_0__Risk_2__Traveller_DateOfBirth
                    const dt = $(this).find('#Policies_0__Risk_' + lastChar + '__Traveller_DateOfBirth').val().substring(0, 10);
                    dtParts = dt.split('/');
                    $(this).find(':input[type=number]').eq(0).val(dtParts[0]);
                    $(this).find(':input[type=number]').eq(1).val(dtParts[1]);
                    $(this).find(':input[type=number]').eq(2).val(dtParts[2]);

                    if (dtParts[2] !== undefined && dtParts[1] !== undefined && dtParts[0] !== undefined) {
                        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                        const dt = new Date((dtParts[2] + '-' + dtParts[1] + '-' + dtParts[0]).toString());
                        const fullDateLabel = daysOfWeek[parseInt(dt.getDay())] + ' ' + dtParts[0] + ' ' + monthNames[parseInt(dtParts[1]) - 1] + ' ' + dtParts[2];
                        let dateInputTravellerSpan = $(this).find('span.the-converted-date');
                        $(dateInputTravellerSpan).text(fullDateLabel);
                        $(dateInputTravellerSpan).addClass("conv-date-cont");
                        $(dateInputTravellerSpan).removeClass("hidden");
                    }

                    const idNum = parseInt(lastChar) + 1;
                    $(this).find(':input[type=number]').eq(2).attr('name', 'Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Year');

                    const emptyCheckParams = '["P0-103--DateOfBirth-DD-' + idNum.toString() + '"' + ', "P0-103--DateOfBirth-MM-' + idNum.toString() + '"' + ', "P0-103--DateOfBirth-YYYY-' + idNum.toString() + '"' + ', "' + idNum.toString() + '"' + ']';
                    $(this).find(':input[type=number]').eq(2).attr('data-rule-newtravelleremptycheck', emptyCheckParams);
                    $(this).find(':input[type=number]').eq(2).attr('data-rule-newTraverllerMajorCheck', emptyCheckParams);
                    //<input class="form-control" id="P0-103--DateOfBirth-YYYY-4" type="number" pattern="[0-9]*" value="" autocomplete="off" placeholder="YYYY" maxlength="4" name="Policies[0].Risk[4].Traveller.DateOfBirth.Year" data-rule-newtravelleremptycheck="[&quot;P0-103--DateOfBirth-DD-4&quot;, &quot;P0-103--DateOfBirth-MM-4&quot;, &quot;P0-103--DateOfBirth-YYYY-4&quot;, &quot;4&quot;]" oninput="this.value=this.value.slice(0,this.maxLength)" onchange="setDateLabel('P0-103--DateOfBirth-DD-4', 'P0-103--DateOfBirth-MM-4', 'P0-103--DateOfBirth-YYYY-4')">

                    const containerEl = $(this).find('#' + 'P0-103--DateOfBirthContainer-' + idNum.toString());
                    $(containerEl).addClass('error-section');
                    const invalidMsgDiv = $(containerEl).children('div:first-child').find('div.invalid-msg');
                    if (invalidMsgDiv === undefined || invalidMsgDiv === null) {
                        $(containerEl).children().first().append('<div class="invalid-msg hide col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10"><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Day" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Month" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="Policies[0].Risk[' + idNum.toString() + '].Traveller.DateOfBirth.Year" data-valmsg-replace="true"></span></div>');
                    }
                    const errorDiv = '<div id="errDiv" style="margin-bottom:10px"></div>';

                    // mta title
                    const titleEl = $(this).find("#Policies_0__Risk_" + (idNum - 1).toString() + "__Traveller_Title");
                    if (titleEl) {
                        titleEl.attr('onchange', 'validateDynamicTitle(' + (idNum - 1) + ')');
                        $(titleEl).parent().after(errorDiv);
                        $(titleEl).parent().parent().find('#errDiv').append('<div id = "titleTraveller-' + idNum.toString() + '" class= "mg-bottom-10 col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10 birth-day-validation-error hidden" ></div >');
                    }

                    // mta first name
                    const firstNameEl = $(this).find("#Policies_0__Risk_" + (idNum - 1).toString() + "__Traveller_FirstName");
                    if (firstNameEl) {
                        firstNameEl.attr('onchange', 'validateDynamicFirstName(' + (idNum - 1) + ')');
                        $(firstNameEl).parent().after(errorDiv);
                        $(firstNameEl).parent().parent().find('#errDiv').append('<div id = "firstNameTraveller-' + idNum.toString() + '" class= "mg-bottom-10 col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10 birth-day-validation-error hidden" ></div >');
                    }

                    // mta last name
                    const lastNameEl = $(this).find("#Policies_0__Risk_" + (idNum - 1).toString() + "__Traveller_LastName");
                    if (lastNameEl) {
                        lastNameEl.attr('onchange', 'validateDynamicLastName(' + (idNum - 1) + ')');
                        $(lastNameEl).parent().after(errorDiv);
                        $(lastNameEl).parent().parent().find('#errDiv').append('<div id = "lastNameTraveller-' + idNum.toString() + '" class= "mg-bottom-10 col-lg-12 col-sm-12 col-xs-12 pd-left-0 pd-top-10 birth-day-validation-error hidden" ></div >');
                    }

                    
                    validateDynamicTitle(idNum - 1);
                    validateDynamicFirstName(idNum - 1);
                    validateDynamicLastName(idNum - 1);
                }                
            })
                
            formatDate($('#newTravellers'));
            poms.recompileAngular('#newTravellers');
            poms.resetFormValidator();
            showEligibilityQuestionIfRequired();

        },
        error: function (data) {
          //  alert("error");
        }
    });

    return false;
}

function removeAllTravellers() {
    var form = $("#form").serializeArray();
    form.push(
        {
            name: "nextstep",
            value: "removeAll"
        }
    );
    form = jQuery.param(form);
    $.ajax({
        url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/AddTraveller?E=' + poms.getParameterByName("E"),
        type: 'POST',
        data: form,
        cache: false,
        success: function (partialViewResult) {
            $('#newTravellers').html(partialViewResult);
            poms.recompileAngular('#newTravellers');
            poms.resetFormValidator();
            showEligibilityQuestionIfRequired();
        },
        error: function (data) {
          //  alert("error");
        }
    });

    return false;
}

function reinitialiseDatePicker($datepickerInput, startDate, endDate) {
    startDate = (startDate == null) ? $datepickerInput.data("datepicker-sd") : startDate;
    endDate = (endDate == null) ? $datepickerInput.data("datepicker-ed") : endDate;
    $datepickerInput.datepicker('remove');
    $datepickerInput.datepicker({
        defaultViewDate: { year: 1985, month: 5, day: 1 },
        format: $datepickerInput.data("format"),
        startDate: startDate,
        endDate: endDate,
        templates: {
            leftArrow: '<i class="icon-poms icon-arrowleft"></i>',
            rightArrow: '<i class="icon-poms icon-arrowright"></i>'
        },
        weekStart: 1
    });
    setDatePickerPosition($datepickerInput);
}

function formatDate(id) {
    id.find('.datepickedvalue').each(function () {
        var date = $(this).html();
        if (date != "") {
            date = FormatUkDate($(this).html());
            var longDate = moment(date);
            longDate = longDate.format('dddd Do MMMM YYYY');
            $(this).html(longDate);
        }
    });
}

$.validator.addMethod('dateofbirthvalidation', function (value, element, param) {
    if (element.id === "Policies_0__EffectiveDate" || element.id === "Policies_0__TripStartDate" || element.id === "Policies_0__TripEndDate" ) {
        return true;  //Skipping validation for effective date
    }

    if (testDateFormat(value) === false) {
        $.validator.messages.dateofbirthvalidation = "Date of birth has to be dd/mm/yyyy";
    }
    else {
        var dateValue = moment(FormatUkDate($('#' + element.id).val()));
        var years = getStartDate().diff(dateValue, 'years');

        if (dateValue > moment(new Date())) {
            // date is a future date
            $.validator.messages.dateofbirthvalidation = "Date of birth has to be in the past";
            return false;
        }

        if (element.id === "Policies_0__Risk_0__Traveller_DateOfBirth") {
            if ((isNaN(years) || years == null || years == "") && years != "0") {
                return true;
            }

            if (years >= 18 && years < upperAgeLimit()) {
                return true;
            }
            else if (years < 18) {
                $.validator.messages.dateofbirthvalidation = "Main traveller has to be over 18";
            }
            else if (years >= upperAgeLimit()) {
                $.validator.messages.dateofbirthvalidation = "Main traveller must be under " + upperAgeLimit();
            }
        }
        else if ($('#Policies_0__CoverType-COU').is(':checked')) {
            if (element.id === "Policies_0__Risk_1__Traveller_DateOfBirth") {
                if (years >= 18 && years < upperAgeLimit()) {
                    return true;
                }
                else if (years < 18) {
                    $.validator.messages.dateofbirthvalidation = "Traveller must be over 18";
                }
                else if (years >= upperAgeLimit()) {
                    $.validator.messages.dateofbirthvalidation = "Traveller must be under " + upperAgeLimit();
                }
            }
        }
        else if ($('#Policies_0__CoverType-GRP').is(':checked') || $('#Policies_0__CoverType-FAM').is(':checked')) {
           // alert(5);
            if (years >= lowerAgeLimit() && years < upperAgeLimit()) {
                return true;
            }
            else if (years < lowerAgeLimit()) {
                $.validator.messages.dateofbirthvalidation = "Traveller must be over " + lowerAgeLimit();
            }
            else if (years >= upperAgeLimit()) {
                $.validator.messages.dateofbirthvalidation = "Traveller must be under " + upperAgeLimit();
            }
        }
    }
    return false;
}, $.validator.messages.dateofbirthvalidation);

$.validator.addClassRules({
    nodatepicker: {
        required: true,
        dateofbirthvalidation: true
    }
});

$.validator.addClassRules({
    nodatepickernew: {
        required: false,
        maintravelleremptycheck: true,
        mainTraverllerMinorCheck: true,
        mainTraverllerMajorCheck: true,
        extratravelleremptycheck: true,
        extraTraverllerMajorCheck: true,
        extraTraverllerMinorCheck: true,
        newtravelleremptycheck: true,
        newTraverllerMajorCheck: true,
        newTraverllerMinorCheck: true,
        mainextrapastdatecheck: true,
        newtravellerDateCheck: true        
    }
});

function testDateFormat(str) {
    var t = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (t === null)
        return false;
    var d = +t[1], m = +t[2], y = +t[3];
    //below should be more acurate algorithm
    if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
        return true;
    }
    return false;
}

$('#Policies_0__UFEDestination-EUR').click(function () {
    $('#Policies_0__Destination-W1').prop('checked', false);
    $('#Policies_0__Destination-W2').prop('checked', false);
    clearValErrorMessage($("#Policies_0__Destination-EUR1"))
});

$('#Policies_0__UFEDestination-W').click(function () {
    $('#Policies_0__Destination-EUR1').prop('checked', false);
    $('#Policies_0__Destination-EUR2').prop('checked', false);
    clearValErrorMessage($("#Policies_0__Destination-W1"))
});

$('#Policies_0__UFEDestination-UK').click(function () {
    clearValErrorMessage($("#Policies_0__Destination-EUR1"))
});

function clearValErrorMessage(Input) {
    $(Input).closest('.form-group').removeClass('invalid-section');
    $(Input).closest('.form-group').find('.invalid-msg').addClass('hide');
}

// Only required for MTA travel quotes so this checks if
// function is defined before calling ( in MTATripDetails.js )
function showEligibilityQuestionIfRequired() {
    if (typeof (showEligibilityQuestion) === typeof (Function))
        showEligibilityQuestion();
}

$('#Policies_0__Risk_2__Traveller_Title').change(function () {
    validateTitle(this, "titleTraveller-3");
});

function validateDynamicTitle(idNum) {
    var valEl = document.getElementById('Policies_0__Risk_' + idNum.toString() + '__Traveller_Title');
    const titleTravellerId = "titleTraveller-" + (idNum + 1).toString();
    var errEl = document.getElementById(titleTravellerId);

    if (valEl && errEl) {
        if ($(valEl).val().length == 0) {
            errEl.innerHTML = "Please select title of traveller";

            $(errEl).removeClass("hidden");
            $(valEl).addClass("form-control-on-error");
        } else {
            $(errEl).addClass("hidden");
            $(valEl).removeClass("form-control-on-error");
        }
    }
}

function validateDynamicFirstName(idNum) {
    const errorMessageEmptyField = "The first name field cannot be empty.";
    const valEl = document.getElementById('Policies_0__Risk_' + idNum.toString() + '__Traveller_FirstName');
    const errEl = document.getElementById("firstNameTraveller-" + (idNum + 1).toString());
    if ($(valEl).val() == "") {
        errEl.innerHTML = errorMessageEmptyField;
        $(errEl).removeClass("hidden");
        $(valEl).addClass("form-control-on-error");
        //throw errorMessageEmptyField;

    } else {
        $(errEl).addClass("hidden");
        $(valEl).removeClass("form-control-on-error");
        return false;
    }
}

function validateDynamicLastName(idNum) {
    const errorMessageEmptyField = "The last name field cannot be empty.";
    const valEl = document.getElementById('Policies_0__Risk_' + idNum.toString() + '__Traveller_LastName');
    const errEl = document.getElementById("lastNameTraveller-" + (idNum + 1).toString());
    if ($(valEl).val() == "") {
        errEl.innerHTML = errorMessageEmptyField;
        $(errEl).removeClass("hidden");
        $(valEl).addClass("form-control-on-error");
        //throw errorMessageEmptyField;

    } else {
        $(errEl).addClass("hidden");
        $(valEl).removeClass("form-control-on-error");
        return false;
    }
}

function validateDynamicDateOfBirth(idNum) {
    const errorMessageEmptyField = "Please complete traveller " + idNum.toString() + "'s date of birth";
    const valEl = document.getElementById('P0-103--DateOfBirth-YYYY-' + idNum.toString());
    const errEl = document.getElementById("yearOfBirthTraveller-" + idNum.toString());

    if (valEl != null && valEl != undefined && valEl != ""
        && errEl != null && errEl != undefined && errEl != "") {
        if ($(valEl).val() == "") {
            errEl.innerHTML = errorMessageEmptyField;
            $(errEl).removeClass("hidden");
            $(valEl).addClass("form-control-on-error");
        }
        else {
            $(errEl).addClass("hidden");
            $(valEl).removeClass("form-control-on-error");
            return false;
        }
    }
}