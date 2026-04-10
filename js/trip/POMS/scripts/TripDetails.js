var nbstartdate = new Date();
var amtstartdate = new Date();
nbstartdate = $("#NBStartDate").val();
amtstartdate = $("#AMTStartDate").val();

var setCnfgNbDate = $("#setCnfgNbDate").val();
var setCnfgAmtDate = $("#setCnfgAmtDate").val();

$(document).ready(function () {
    checkBoxTrip = document.getElementById('CruiseAndWinterSports-WinterSports');
    checkBoxTrip1 = document.getElementById('CruiseAndWinterSports-Cruise');
    checkBoxTrip2 = document.getElementById('CruiseAndWinterSports-Neither');

    if(window.localStorage.getItem("isWinterSportsSelected")=='true'){
        $(checkBoxTrip).parent().parent().addClass("checkbox-on-check");
    }
    if(window.localStorage.getItem("isGoingOnCruise")=='true'){
        $(checkBoxTrip1).parent().parent().addClass("checkbox-on-check");
    }
    if(window.localStorage.getItem("isWinterSportsSelected")=='false' && window.localStorage.getItem("isGoingOnCruise")=='false') {
        $(checkBoxTrip).parent().parent().removeClass("checkbox-on-check");
        $(checkBoxTrip1).parent().parent().removeClass("checkbox-on-check");
        $(checkBoxTrip2).parent().parent().addClass("checkbox-on-check");
    }

    // if(checkBoxTrip.checked) {
    //     $(checkBoxTrip).parent().parent().addClass("checkbox-on-check");
    // }
    // if(checkBoxTrip1.checked) {
    //     $(checkBoxTrip1).parent().parent().addClass("checkbox-on-check");
    // }
    // if(checkBoxTrip2.checked) {
    //     $(checkBoxTrip2).parent().parent().addClass("checkbox-on-check");
    // }
    // else
    // {
    //     $(checkBoxTrip).parent().parent().removeClass("checkbox-on-check");
    //     $(checkBoxTrip2).parent().parent().removeClass("checkbox-on-check");
    // }
    // if(checkBoxTrip1.checked) {
    //     $(checkBoxTrip1).parent().parent().addClass("checkbox-on-check");
    // }
    // else
    // {
    //     $(checkBoxTrip1).parent().parent().removeClass("checkbox-on-check");
    //     $(checkBoxTrip2).parent().parent().removeClass("checkbox-on-check");
    // }
    // if(checkBoxTrip2.checked) {alert("3");
    // $(checkBoxTrip2).parent().parent().addClass("checkbox-on-check");
    // $(checkBoxTrip).parent().parent().removeClass("checkbox-on-check");
    // $(checkBoxTrip1).parent().parent().removeClass("checkbox-on-check");
    // }
    $('label[for="Policies_0__Destination-W1"]').attr("ng-show", "Policies[0].UFEDestination == 'W'");
    $('label[for="Policies_0__Destination-W2"]').attr("ng-show", "Policies[0].UFEDestination == 'W'");
    $('label[for="Policies_0__Destination-EUR1"]').attr("ng-show", "Policies[0].UFEDestination == 'EUR' && Policies[0].PolicyType != 'A'");
    $('label[for="Policies_0__Destination-EUR2"]').attr("ng-show", "Policies[0].UFEDestination == 'EUR' && Policies[0].PolicyType != 'A'");
    $('label[for="Policies_0__CoverType-FAM"]').attr("ng-show", "Policies[0].PolicyType != 'L' ");
    $('#eur').attr("ng-show", "Policies[0].UFEDestination == 'EUR' && Policies[0].PolicyType != 'A'");
    $('#w').attr("ng-show", "Policies[0].UFEDestination == 'W'");
    $('#Policies_0__UFEDestination').siblings('hr').hide();
    $('label[for="Policies_0__Destination-UK"]').hide();
    $('label[for="Policies_0__Destination-EUR"]').hide();

    if ($('#Policies_0__TripStartDate').val() !== '') {
        ChangeDateOnStartDate();
    }
    poms.recompileAngular('#form');

    $('input[type=checkbox]').on('change',
        function () {
            if ($(this).is(':checked')) {
                var id = this.id;
                if (id == 'CruiseAndWinterSports-Neither') {
                    $("#CruiseAndWinterSports-WinterSports").removeAttr('checked');
                    $("#CruiseAndWinterSports-Cruise").removeAttr('checked');
                }
                else if (id == 'CruiseAndWinterSports-Cruise' || id == 'CruiseAndWinterSports-WinterSports') {
                    $("#CruiseAndWinterSports-Neither").removeAttr('checked');
                }
            }
        });


    if (setCnfgAmtDate == "true") {
        var $datepickerInput = $('#Policies_0__EffectiveDate');
        reinitialiseDatePicker($datepickerInput, amtstartdate, '+31d');
    }

    if (setCnfgNbDate == "true") {
        $datepickerInput = $('#Policies_0__TripStartDate');
        reinitialiseDatePicker($datepickerInput, nbstartdate, null);
    }
    var localData = JSON.parse(window.localStorage.getItem("tripDetailsData"))
    var isUkResident = JSON.parse(window.localStorage.getItem("isUkResident"))
    if(localData){
    $("#P0-103--DateOfBirth-YYYY-1").val(localData[0].Risk[0].Traveller.Year);
    $("#P0-103--DateOfBirth-MM-1").val(localData[0].Risk[0].Traveller.Month);
    $("#P0-103--DateOfBirth-DD-1").val(localData[0].Risk[0].Traveller.Day); 
    }
    if(isUkResident){
        $("#Account_UkResident").prop('checked', true);
    }
});

$('#tripdeatails-next').click(function () {
    $(':checkbox:checked').each(function (i) {
        var id = this.id;
        if (id === 'CruiseAndWinterSports-WinterSports') {
            $("#Policies_0__WinterSports").val("true");
        } else if (id === 'CruiseAndWinterSports-Cruise') {
            $("#Policies_0__GoingOnCruise").val("true");
        } else if (id !== 'Account_UkResident') {
            $("#Policies_0__WinterSports").val("false");
            $("#Policies_0__GoingOnCruise").val("false");
        }
    })

    $('input[type=checkbox]:not(:checked)').each(function (i) {
        var id = this.id;
        if (id === 'CruiseAndWinterSports-WinterSports') {
            $("#Policies_0__WinterSports").val("false");
        } else if (id === 'CruiseAndWinterSports-Cruise') {
            $("#Policies_0__GoingOnCruise").val("false");
        }
    })
    SetTripDetailsPageValues();
    
});

//when radio button is checked: yes/no, who to cover options
$('input:radio').click(function () {
    $('input:checked').parent().addClass("radio-on-check");
    $('input:not(:checked)').parent().removeClass("radio-on-check");
});


$('#CruiseAndWinterSports-Neither').on('change', function () {
    
    if ($('#CruiseAndWinterSports-Neither').is(':checked')) {
        $('#NeitherTrip').addClass('checkbox-on-check');

        $('#CruiseTrip').removeClass('checkbox-on-check');
        //$('#CruiseAndWinterSports-Cruise').attr('disabled', 'disabled');
        $('#WinterSports').removeClass('checkbox-on-check');
        //$('#CruiseAndWinterSports-WinterSports').attr('disabled', 'disabled');

        //$('#CruiseAndWinterSports-WinterSports').attr('class','ng-dirty ng-touched ng-valid-parse ng-invalid ng-invalid-required');
        //$('#CruiseAndWinterSports-Cruise').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-invalid ng-invalid-required');     
    } else {
        $('#NeitherTrip').removeClass('checkbox-on-check');

        //$('#CruiseAndWinterSports-Cruise').removeAttr('disabled');
        //$('#CruiseAndWinterSports-WinterSports').removeAttr('disabled');
      
    }
});

function NitherOn() {
    //alert('hi');
    $('#CruiseTrip').removeClass('checkbox-on-check');
    $('#WinterSports').removeClass('checkbox-on-check');
    $('#CruiseAndWinterSports-Cruise').attr('disabled', 'disabled');
    $('#CruiseAndWinterSports-WinterSports').attr('disabled', 'disabled');

    $('#CruiseAndWinterSports-WinterSports').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-invalid ng-invalid-required');
    $('#CruiseAndWinterSports-Cruise').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-invalid ng-invalid-required');
}

$('#CruiseAndWinterSports-WinterSports').on('change', function () {
    
    //if ($('#CruiseAndWinterSports-Neither').is(':checked')) {
    //    NitherOn();
    //} else {

        if ($('#CruiseAndWinterSports-WinterSports').is(':checked')) {
            $('#WinterSports').addClass('checkbox-on-check');
            $('#NeitherTrip').removeClass('checkbox-on-check');
        } else {
            $('#WinterSports').removeClass('checkbox-on-check')
        }

    //}
});

//$('#CruiseAndWinterSports-WinterSports').on('change', function () {
//    if ($('#CruiseAndWinterSports-WinterSports').is(':checked')) {
//        $('#CruiseAndWinterSports-WinterSports').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-valid ng-valid-required');

//    } else {
//        $('#CruiseAndWinterSports-WinterSports').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-invalid ng-invalid-required');
//    }
//});

//$('#CruiseAndWinterSports-Cruise').on('change', function () {
//    if ($('#CruiseAndWinterSports-Cruise').is(':checked')) {
//        $('#CruiseAndWinterSports-Cruise').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-valid ng-valid-required');
//    } else {
//        $('#CruiseAndWinterSports-Cruise').attr('class', 'ng-dirty ng-touched ng-valid-parse ng-invalid ng-invalid-required');
//    }
//});


$('#CruiseAndWinterSports-Cruise').on('change', function () {
    //alert($('#CruiseAndWinterSports-Neither').is(':checked'));
    //if ($('#CruiseAndWinterSports-Neither').is(':checked')) {
    //    NitherOn();
    //} else {
        if ($('#CruiseAndWinterSports-Cruise').is(':checked')) {
            $('#CruiseTrip').addClass('checkbox-on-check');
            $('#NeitherTrip').removeClass('checkbox-on-check');
        } else {
            $('#CruiseTrip').removeClass('checkbox-on-check')
        }
    //}
});

function SetTripDetailsPageValues() {    
    var isUkResident = $("#Account_UkResident").prop('checked');
    var selectedPolicyType = "";
    var policyTypeS = $("#Policies_0__PolicyType-S").attr('aria-checked');
    var policyTypeA = $("#Policies_0__PolicyType-A").attr('aria-checked');
    var policyTypeL = $("#Policies_0__PolicyType-L").attr('aria-checked');

    var selectedUFEDestination = "";
    var isSelectedUFEDestinationUK = $("#Policies_0__UFEDestination-UK").attr('aria-checked');
    var isSelectedUFEDestinationEUR = $('#Policies_0__UFEDestination-EUR').attr('aria-checked');
    var IsSelectedUFEDestinationWORLD = $('#Policies_0__UFEDestination-W').attr('aria-checked');

    var selectedDestination = "";
    var isSelectedDestinationWORLD1 = $('#Policies_0__Destination-W1').attr('aria-checked');
    var isSelectedDestinationWORLD2 = $('#Policies_0__Destination-W2').attr('aria-checked');

    var isGoingOnCruise = $('#CruiseAndWinterSports-Cruise').prop('checked');
    var isWinterSportsSelected = $('#CruiseAndWinterSports-WinterSports').prop('checked');

    var dateOfBirthStr = [];
    var dateOfBirthUTC = [];
    var dateOfBirth = [];

    for (var i = 0; i < 8; i++) {
        var dobDayvalue = $('#P0-103--DateOfBirth-DD-' + i).val();
        var dobMonthvalue = $('#P0-103--DateOfBirth-MM-' + i).val();
        var dobYearvalue = $('#P0-103--DateOfBirth-YYYY-' + i).val();
        //var dateOfBirthStrId = '#Policies_0__Risk_' + i + '__Traveller_DateOfBirth';
        if (dobDayvalue != null && dobDayvalue != undefined && dobDayvalue != "" &&
            dobMonthvalue != null && dobMonthvalue != undefined && dobMonthvalue != "" &&
            dobYearvalue != null && dobYearvalue != undefined && dobYearvalue != "") {
            dateOfBirthStr[i] = dobDayvalue + '/' + dobMonthvalue + '/' + dobYearvalue;
            //$(dateOfBirthStrId).val();

            if (dateOfBirthStr[i] != null) {
                window.localStorage.setItem('dateOfBirthStr[' + i + ']', dateOfBirthStr[i]);
            }
        }
    }

    var tripStartDateStr = $('#Policies_0__TripStartDate').val();
    var tripEndDateStr = $('#Policies_0__TripEndDate').val();
    var effectiveDateStr = $('#Policies_0__EffectiveDate').val();

    if (tripEndDateStr != null) {
        window.localStorage.setItem("tripStartDateStr", tripEndDateStr);
    }

    if (tripEndDateStr != null) {
        window.localStorage.setItem("tripEndDateStr", tripEndDateStr);
    }

    if (effectiveDateStr != null) {
        window.localStorage.setItem("effectiveDateStr", effectiveDateStr);
    }

    var selectedCoverType = "";
    var isIndividualSelected = $('#Policies_0__CoverType-IND').attr('aria-checked');
    var isFamilySelected = $('#Policies_0__CoverType-FAM').attr('aria-checked');
    var isCoupleSelected = $('#Policies_0__CoverType-COU').attr('aria-checked');
    var isGroupSelected = $('#Policies_0__CoverType-GRP').attr('aria-checked');

    var isSameAddress = $('#Policies_0__SameAddress-True').prop('checked');
    var isExistingMedicalConditions = $('#Policies_0__ExistingMedicalConditions-True').prop('checked');
   // alert(isExistingMedicalConditions);

    if (policyTypeS == "true") {
        selectedPolicyType = $("#Policies_0__PolicyType-S").val();
    }
    else if (policyTypeA == "true") {
        selectedPolicyType = $("#Policies_0__PolicyType-A").val();
    }
    else {
        selectedPolicyType = $("#Policies_0__PolicyType-L").val();
    }

    if (isSelectedUFEDestinationUK == "true") {
        selectedUFEDestination = $("#Policies_0__UFEDestination-UK").val();
    }

    else if (isSelectedUFEDestinationEUR == "true") {
        selectedUFEDestination = $('#Policies_0__UFEDestination-EUR').val();
    }
    else {
        selectedUFEDestination = $('#Policies_0__UFEDestination-W').val();
    }

    if (isSelectedDestinationWORLD1 == "true") {
        selectedDestination = $('#Policies_0__Destination-W1').val();
    }
    else {
        selectedDestination = $('#Policies_0__Destination-W2').val();
    }

    if (isIndividualSelected == "true") {
        selectedCoverType = $('#Policies_0__CoverType-IND').val();
    }

    else if (isFamilySelected == "true") {    
        selectedCoverType = $('#Policies_0__CoverType-FAM').val();
    }

    else if (isGroupSelected == "true") {
        selectedCoverType = $('#Policies_0__CoverType-GRP').val();
    }

    else {
        selectedCoverType = $('#Policies_0__CoverType-COU').val();
    }

    window.localStorage.setItem("isUkResident", isUkResident);
    window.localStorage.setItem("selectedPolicyType", selectedPolicyType);
    window.localStorage.setItem("selectedUFEDestination", selectedUFEDestination);
    window.localStorage.setItem("selectedDestination", selectedDestination);
    window.localStorage.setItem("isGoingOnCruise", isGoingOnCruise);
    window.localStorage.setItem("isWinterSportsSelected", isWinterSportsSelected);

    window.localStorage.setItem("selectedCoverType", selectedCoverType);
    window.localStorage.setItem("isIndividualSelected", isIndividualSelected);
    window.localStorage.setItem("isCoupleSelected", isCoupleSelected);
    window.localStorage.setItem("isFamilySelected", isFamilySelected);
    window.localStorage.setItem("isGroupSelected", isGroupSelected);
    window.localStorage.setItem("isSameAddress", isSameAddress);
    window.localStorage.setItem("isSameAddress", isSameAddress);
    window.localStorage.setItem("isExistingMedicalConditions", isExistingMedicalConditions);
}

$('#Policies_0__PolicyType-A').click(function () {
  //  alert('A');
    if ($(this).is(':checked')) {
        $('label[for="Policies_0__TripStartDate"]').html('Starting On');
        //$('#trip-dates').children().html('When do you want your cover to begin?');
        // $('#section-title').children().innertext('When do you want your cover to begin?');
        $('#trip-dates').find('#section-title').text('When do you want your cover to begin?');
        //$('#section-title').html('When do you want your cover to begin?');
        $('#Policies_0__EffectiveDate').val('');
        $('#Policies_0__EffectiveDate-label').val('');
        $('#Policies_0__EffectiveDate-label').text('');
        var $datepickerInput = $('#Policies_0__EffectiveDate');

        if (setCnfgAmtDate == "true") {
            reinitialiseDatePicker($datepickerInput, amtstartdate, '+31d');
        }
        else {
            reinitialiseDatePicker($datepickerInput, '-0m', '+31d');
        }

        $datepickerInput.closest('div.control-label').hide();

        if ($("#Policies_0__UFEDestination-EUR").val() == 'EUR') {
            $('#w').siblings(".radio-group").removeClass("invalid-section");
            $('#w').siblings(".radio-group").find(".invalid-msg").addClass("hide");
        }
        $("#dvTripStartDateMsg").removeClass("hide");
    }
       
});

$('#Policies_0__PolicyType-L').click(function () {
    //alert('Policies_0__PolicyType-L');
    if ($(this).is(':checked')) {
        //$('#trip-dates').children().html('When will you be travelling?');
        $('#trip-dates').find('#section-title').text('When will you be travelling?');
       // $('#section-title').html('When will you be travelling?');
        $('label[for="Policies_0__TripStartDate"]').html('Departing On');

        $datepickerInput = $('#Policies_0__TripStartDate');

        if (setCnfgNbDate == "true") {
            reinitialiseDatePicker($datepickerInput, nbstartdate, '+12m');
        }
        else {
            reinitialiseDatePicker($datepickerInput, null, '+12m');
        }

        $datepickerInput = $('#Policies_0__TripEndDate');
        if ($('#Policies_0__TripStartDate').val() !== '') {
            var date = FormatUkDate($('#Policies_0__TripStartDate').val());
            var sd = moment(date).add(30, "days").format('DD-MM-YYYY');
            reinitialiseDatePicker($datepickerInput, sd, '+18m');
        }
        else {
            //reinitialiseDatePicker($datepickerInput, '+30d', '+18m');
            if (setCnfgNbDate == "true")
                reinitialiseDatePicker($datepickerInput, nbstartdate, '+18m');
            else
                reinitialiseDatePicker($datepickerInput, '+30d', '+18m');
        }

        $('#Policies_0__CoverType-FAM').attr('checked', false);
        $('#Policies_0__Destination-EUR').attr('checked', false);

        if ($('#Policies_0__TripStartDate').val() !== '' && $('#Policies_0__TripEndDate').val() !== '') {
            var startDate = FormatUkDate($('#Policies_0__TripStartDate').val());
            var endDate = FormatUkDate($('#Policies_0__TripEndDate').val());
            startDate = moment(startDate);
            endDate = moment(endDate);
            var dif = endDate.diff(startDate, 'days') + 1;
            if (dif < 31) {
                $('#Policies_0__TripEndDate').val('');
            }
        }

        $("#dvTripStartDateMsg").addClass("hide");
    };
});

$('#Policies_0__PolicyType-S').click(function () {
    //alert('Policies_0__PolicyType-s');
    if ($(this).is(':checked')) {
        //$('#trip-dates').children().html('When will you be travelling?');
        $('#trip-dates').find('#section-title').text('When will you be travelling?');
        $('label[for="Policies_0__TripStartDate"]').html('Departing On');

        $datepickerInput = $('#Policies_0__TripStartDate');

        if (setCnfgNbDate == "true")
            reinitialiseDatePicker($datepickerInput, nbstartdate, null);
        else
            reinitialiseDatePicker($datepickerInput, null, null);


        $datepickerInput = $('#Policies_0__TripEndDate');
        if ($('#Policies_0__TripStartDate').val() !== '') {
            var date = FormatUkDate($('#Policies_0__TripStartDate').val());
            var sd = moment(date).format('DD-MM-YYYY');
            reinitialiseDatePicker($datepickerInput, sd, null)
        }
        else {
            if (setCnfgNbDate == "true")
                reinitialiseDatePicker($datepickerInput, nbstartdate, null);
            else
                reinitialiseDatePicker($datepickerInput, null, null);
            // reinitialiseDatePicker($datepickerInput, null, null)
        }
        $("#dvTripStartDateMsg").addClass("hide");
    };
});

$('#Policies_0__TripStartDate, #Policies_0__TripStartDate+span').click(function () {
    $('#Policies_0__TripStartDate').on('changeDate', function () {
        ChangeDateOnStartDate();
    });
});

function ChangeDateOnStartDate() {
    var date = FormatUkDate($('#Policies_0__TripStartDate').val());
    var sd = moment(date);
    var ed = moment(date);

    $datepickerInput = $('#Policies_0__TripEndDate');

    if ($("#Policies_0__PolicyType-L").is(':checked')) {
        sd = sd.add(30, "days").format('DD-MM-YYYY');
        ed = ed.add(18, "months").add(-1, "days").format('DD-MM-YYYY');
        reinitialiseDatePicker($datepickerInput, sd, ed)
    }
    else if ($("#Policies_0__PolicyType-S").is(':checked')) {
        sd = sd.format('DD-MM-YYYY');
        ed = ed.add(365, "days").format('DD-MM-YYYY');
        reinitialiseDatePicker($datepickerInput, sd, ed)
    }
    else {
        var $datepickerInput = $('#Policies_0__EffectiveDate');
        //reinitialiseDatePicker($datepickerInput, '-0m', '+31d');
        if (setCnfgAmtDate == "true")
            reinitialiseDatePicker($datepickerInput, amtstartdate, '+31d');
        else
            reinitialiseDatePicker($datepickerInput, '-0m', '+31d');
        $datepickerInput.closest('div.control-label').hide();
    }
}

$('#Policies_0__SameAddress-False').change(function () {
    //alert('TripDetails.js no clicked');
    if ($(this).is(':checked')) {
        $('label[for="Policies_0__CoverType-GRP"]').trigger("click");
        $('#Policies_0__CoverType-GRP').trigger("click");
        $('#friends-message').removeClass('hide');
    };
});

$('#Policies_0__CoverType-COU').click(function () {
    if ($(this).is(':checked')) {
        changeToPartner();
        removeAllTravellers();
        poms.resetFormValidator();
        $('#Policies_0__SameAddress-False').prop('checked', false);
        $('#Policies_0__SameAddress-True').prop('checked', false);

    }
    
});

$('#Policies_0__CoverType-GRP').click(function () {
    //alert('M');
    if ($(this).is(':checked')) {
        changeFromPartner();
        poms.resetFormValidator();
    }
});

$('#Policies_0__CoverType-GRP').change(function () {
    //alert('R');
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



function upperAgeLimit() {
    var IsOneUnderwriter = $("#hdn_on_load_IsOneUnderwriter").val();
    var IsBranch = $("#hdn_on_load_IsBranch").val();
    if (IsBranch == "True") {
        return 75;
    } 

    if ($("#Policies_0__PolicyType-A").is(':checked') && IsOneUnderwriter == "True") {
        return 76;
    }
    else if ($("#Policies_0__PolicyType-S").is(':checked')) {
        return 111;
    }
    else if ($("#Policies_0__PolicyType-L").is(':checked')) {
        return 61;
    }
    else {
        return 111;
    }
}

function lowerAgeLimit() {
    if ($("#Policies_0__PolicyType-A").is(':checked')) {
        return 0;
    }
    else if ($("#Policies_0__PolicyType-S").is(':checked')) {
        return 0;
    }
    else if ($("#Policies_0__PolicyType-L").is(':checked')) {
        return 18;
    }
    else {
        return 0;
    }
}

function getStartDate() {
    if ($("#Policies_0__PolicyType-A").is(':checked')) {
        var $startDatepickerInput = $('#Policies_0__EffectiveDate');
        if ($startDatepickerInput != null && typeof ($startDatepickerInput) != "undefined" && $startDatepickerInput.val() != "") {
            var date = FormatUkDate($startDatepickerInput.val());
            return moment(date);
        }
        else {
            return moment(new Date());
        }
    }
    else {
        return moment(new Date());
    }
}

$('#Policies_0__UFEDestination-EUR, #Policies_0__UFEDestination-W').click(function () {
    if ($(this).is(':checked')) {
        poms.resetFormValidator();
        $('#Policies_0__Destination-UK').prop('checked', false);
    }
});

$('.closing-icon').click(function () {
 
    //$('.closing-icon').parent().parent().parent().attr("style", "opacity:0; display:none;")
 
})