//var currentPage = window.tmParam.page_type;
var currentPage = localStorage.getItem("currentpage", 'yourdetails');
var referrer = document.referrer;

var amnt = '';
var single = '21.24';
var multiple = '39';

var annual = '28';
if(window.localStorage.getItem("selectedPolicyType")=='S'){
    amnt = single;
}else if(window.localStorage.getItem("selectedPolicyType")=='A'){
    amnt = multiple;
}else if(window.localStorage.getItem("selectedPolicyType")=='L'){
    amnt = annual;
}
price = amnt;
$('#amnt').html(amnt);
// window.localStorage.setItem("priceSingleTrip",parseFloat(amnt),2)
$(".ng-isolate-scope").click(function(){
    $(this).parent().hide();
    amnt = Number(amnt) + 18.05;
    $('#amnt').html(amnt);
    window.localStorage.setItem("priceSingleTrip",parseFloat(amnt),2)
    window.localStorage.setItem("isAnnualPolicy",true);
})
$(".btn2--forward").click(function(){
    window.localStorage.setItem("priceSingleTrip",parseFloat(amnt),2)
})
window['adrum-config'] = {
    xhr: {
        payloadParams: [{ method: 'POST' }]
    },

    userEventInfo: {
        "PageView": function (context) {
            switch (currentPage) {
                case 'tripdetails':
                    if (referrer.indexOf("Index") != -1) {
                        var isUkResident = window.localStorage.getItem("isUkResident");
                        var isGoingOnCruise = window.localStorage.getItem("isGoingOnCruise");
                        var isWinterSportsSelected = window.localStorage.getItem("isWinterSportsSelected");
                        var isSameAddress = window.localStorage.getItem("isSameAddress");
                        var isExistingMedicalConditions = window.localStorage.getItem("isExistingMedicalConditions");

                        var policyType = window.localStorage.getItem("selectedPolicyType");
                        var uFEDestination = window.localStorage.getItem("selectedUFEDestination");
                        var destination = window.localStorage.getItem("selectedDestination");
                        var coverType = window.localStorage.getItem("selectedCoverType");

                        var dateOfBirthStr = [];
                        var dateOfBirthUTC = [];
                        var dateOfBirth = [];

                        for (var i = 0; i < 8; i++) {
                            var dateOfBirthStrId = 'dateOfBirthStr[' + i + ']';

                            dateOfBirthStr[i] = localStorage.getItem(dateOfBirthStrId);

                            if (dateOfBirthStr[i] != "undefined" && dateOfBirthStr[i] != null) {
                                dateOfBirthStr[i] = dateOfBirthStr[i].split("/");
                                dateOfBirthUTC[i] = new Date(new Date(dateOfBirthStr[i][2], dateOfBirthStr[i][1] - 1, dateOfBirthStr[i][0]).getTime());
                                dateOfBirth[i] = new Date(dateOfBirthUTC[i].getTime() - dateOfBirthUTC[i].getTimezoneOffset() * 60000);
                            }
                        }

                        var tripStartDateStr = localStorage.getItem("tripStartDateStr");
                        var tripEndDateStr = localStorage.getItem("tripEndDateStr");
                        var effectiveDateStr = localStorage.getItem("effectiveDateStr");

                        var tripStartDateUTC = null;
                        var tripEndDateUTC = null;
                        var effectiveDateUTC = null;

                        var tripStartDate = null;
                        var tripEndDate = null;
                        var effectiveDate = null;

                        if (tripStartDateStr != "undefined" && tripStartDateStr != null) {
                            tripStartDate = tripStartDateStr.split("/");
                            tripStartDateUTC = new Date(new Date(tripStartDateStr[2], tripStartDateStr[1] - 1, tripStartDateStr[0]).getTime());
                            tripStartDate = new Date(tripStartDateUTC.getTime() - tripStartDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (tripEndDateStr != "undefined" && tripEndDateStr != null) {
                            tripEndDateStr = tripEndDateStr.split("/");
                            tripEndDateUTC = new Date(new Date(tripEndDateStr[2], tripEndDateStr[1] - 1, tripEndDateStr[0]).getTime());
                            tripEndDate = new Date(tripEndDateUTC.getTime() - tripEndDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (effectiveDateStr != "undefined" && effectiveDateStr != null) {
                            effectiveDateStr = effectiveDateStr.split("/");
                            effectiveDateUTC = new Date(new Date(effectiveDateStr[2], effectiveDateStr[1] - 1, effectiveDateStr[0]).getTime());
                            effectiveDate = new Date(effectiveDateUTC.getTime() - effectiveDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (isUkResident == "true") {
                            isUkResident = true;
                        }
                        else {
                            isUkResident = false;
                        }

                        if (isGoingOnCruise == "true") {
                            isGoingOnCruise = true;
                        }
                        else {
                            isGoingOnCruise = false;
                        }

                        if (isWinterSportsSelected == "true") {
                            isWinterSportsSelected = true;
                        }
                        else {
                            isWinterSportsSelected = false;
                        }
                        if (isSameAddress == "true") {
                            isSameAddress = true;
                        }
                        else {
                            isSameAddress = false;
                        }

                        if (isExistingMedicalConditions == "true") {
                            isExistingMedicalConditions = true;
                        }
                        else {
                            isExistingMedicalConditions = false;
                        }

                        return {
                            userData: {
                                PolicyType: policyType,
                                UFEDestination: uFEDestination,
                                Destination: destination,
                                CoverType: coverType
                            },
                            userDataDate: {
                                TripStartDate: ((new Date(tripStartDate)).getTime()),
                                TripEndDate: ((new Date(tripEndDate)).getTime()),
                                EffectiveDate: ((new Date(effectiveDate)).getTime()),
                                DateOfBirth0: ((new Date(dateOfBirth[0])).getTime()),
                                DateOfBirth1: ((new Date(dateOfBirth[1])).getTime()),
                                DateOfBirth2: ((new Date(dateOfBirth[2])).getTime()),
                                DateOfBirth3: ((new Date(dateOfBirth[3])).getTime()),
                                DateOfBirth4: ((new Date(dateOfBirth[4])).getTime()),
                                DateOfBirth5: ((new Date(dateOfBirth[5])).getTime()),
                                DateOfBirth6: ((new Date(dateOfBirth[6])).getTime()),
                                DateOfBirth7: ((new Date(dateOfBirth[7])).getTime())
                            },
                            userDataBoolean: {
                                UKResident: isUkResident,
                                GoingOnCruise: isGoingOnCruise,
                                WinterSports: isWinterSportsSelected,
                                SameAddress: isSameAddress,
                                ExistingMedicalConditions: isExistingMedicalConditions
                            }
                        }
                    }

                    else {
                        var isUkResident = false;
                        if (referrer.indexOf("myaccount") != -1 || referrer.indexOf("mta") != -1) {
                            isUkResident = true;
                        }
                        else {
                            isUkResident = $("#Account_UkResident").prop('checked');
                        }

                        var selectedPolicyType = "";
                        var policyTypeS = $("#Policies_0__PolicyType-S").attr('aria-checked');
                        var policyTypeA = $("#Policies_0__PolicyType-A").attr('aria-checked');
                        var policyTypeL = $("#Policies_0__PolicyType-L").attr('aria-checked');

                        if (policyTypeS != null && policyTypeS == "true") {
                            selectedPolicyType = $("#Policies_0__PolicyType-S").val();
                        }
                        else if (policyTypeA != null && policyTypeA == "true") {
                            selectedPolicyType = $("#Policies_0__PolicyType-A").val();
                        }
                        else if (policyTypeL != null) {
                            selectedPolicyType = $("#Policies_0__PolicyType-L").val();
                        }

                        var selectedUFEDestination = "";
                        var isSelectedUFEDestinationUK = $("#Policies_0__UFEDestination-UK").attr('aria-checked');
                        var isSelectedUFEDestinationEUR = $('#Policies_0__UFEDestination-EUR').attr('aria-checked');
                        var IsSelectedUFEDestinationWORLD = $('#Policies_0__UFEDestination-W').attr('aria-checked');

                        var selectedDestination = "";
                        var isSelectedDestinationWORLD1 = $('#Policies_0__Destination-W1').attr('aria-checked');
                        var isSelectedDestinationWORLD2 = $('#Policies_0__Destination-W2').attr('aria-checked');

                        var isGoingOnCruise = $('#CruiseAndWinterSports-Cruise').prop('checked');
                        var isWinterSportsSelected = $('#CruiseAndWinterSports-WinterSports').prop('checked');

                        var selectedCoverType = "";
                        var isIndividualSelected = $('#Policies_0__CoverType-IND').attr('aria-checked');
                        var isFamilySelected = $('#Policies_0__CoverType-FAM').attr('aria-checked');
                        var isCoupleSelected = $('#Policies_0__CoverType-COU').attr('aria-checked');
                        var isGroupSelected = $('#Policies_0__CoverType-GRP').attr('aria-checked');

                        var title = [];
                        var firstName = [];
                        var lastName = [];
                        var dateOfBirthStr = [];
                        var dateOfBirthUTC = [];
                        var dateOfBirth = [];

                        for (var i = 0; i < 8; i++) {
                            var titleId = '#Policies_0__Risk_' + i + '__Traveller_Title';
                            var firstNameId = '#Policies_0__Risk_' + i + '__Traveller_FirstName';
                            var lastNameId = '#Policies_0__Risk_' + i + '__Traveller_LastName';
                            var dateOfBirthStrId = '#Policies_0__Risk_' + i + '__Traveller_DateOfBirth';

                            title[i] = $(titleId).val();
                            firstName[i] = $(firstNameId).val();
                            lastName[i] = $(lastNameId).val();
                            dateOfBirthStr[i] = $(dateOfBirthStrId).val();

                            if (dateOfBirthStr[i] != null) {
                                dateOfBirthStr[i] = dateOfBirthStr[i].split("/");
                                dateOfBirthUTC[i] = new Date(new Date(dateOfBirthStr[i][2], dateOfBirthStr[i][1] - 1, dateOfBirthStr[i][0]).getTime());
                                dateOfBirth[i] = new Date(dateOfBirthUTC[i].getTime() - dateOfBirthUTC[i].getTimezoneOffset() * 60000);
                            }
                        }

                        var isSameAddress = $('#Policies_0__SameAddress-True').prop('checked');

                        var tripStartDateStr = $('#Policies_0__TripStartDate').val();
                        var tripEndDateStr = $('#Policies_0__TripEndDate').val();
                        var effectiveDateStr = $('#Policies_0__EffectiveDate').val();

                        var tripStartDateUTC = null;
                        var tripEndDateUTC = null;
                        var effectiveDateUTC = null;

                        var tripStartDate = null;
                        var tripEndDate = null;
                        var effectiveDate = null;

                        if (tripStartDateStr != null) {
                            tripStartDate = tripStartDateStr.split("/");
                            tripStartDateUTC = new Date(new Date(tripStartDateStr[2], tripStartDateStr[1] - 1, tripStartDateStr[0]).getTime());
                            tripStartDate = new Date(tripStartDateUTC.getTime() - tripStartDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (tripEndDateStr != null) {
                            tripEndDateStr = tripEndDateStr.split("/");
                            tripEndDateUTC = new Date(new Date(tripEndDateStr[2], tripEndDateStr[1] - 1, tripEndDateStr[0]).getTime());
                            tripEndDate = new Date(tripEndDateUTC.getTime() - tripEndDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (effectiveDateStr != null) {
                            effectiveDateStr = effectiveDateStr.split("/");
                            effectiveDateUTC = new Date(new Date(effectiveDateStr[2], effectiveDateStr[1] - 1, effectiveDateStr[0]).getTime());
                            effectiveDate = new Date(effectiveDateUTC.getTime() - effectiveDateUTC.getTimezoneOffset() * 60000);
                        }

                        var isExistingMedicalConditions = $('#Policies_0__ExistingMedicalConditions-True').prop('checked');

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
                         //   alert(9);
                            selectedCoverType = $('#Policies_0__CoverType-FAM').val();
                        }

                        else if (isGroupSelected == "true") {
                            selectedCoverType = $('#Policies_0__CoverType-GRP').val();
                        }

                        else {
                            selectedCoverType = $('#Policies_0__CoverType-COU').val();
                        }

                        return {
                            userData: {
                                PolicyType: selectedPolicyType,
                                UFEDestination: selectedUFEDestination,
                                Destination: selectedDestination,
                                CoverType: selectedCoverType,
                                Title1: title[0],
                                FirstName1: firstName[0],
                                LastName1: lastName[0],
                                Title2: title[1],
                                FirstName2: firstName[1],
                                LastName2: lastName[1],
                                Title3: title[2],
                                FirstName3: firstName[2],
                                LastName3: lastName[2],
                                Title4: title[3],
                                FirstName4: firstName[3],
                                LastName4: lastName[3],
                                Title5: title[4],
                                FirstName5: firstName[4],
                                LastName5: lastName[4],
                                Title6: title[5],
                                FirstName6: firstName[5],
                                LastName6: lastName[5],
                                Title7: title[6],
                                FirstName7: firstName[6],
                                LastName7: lastName[6],
                                Title8: title[7],
                                FirstName8: firstName[7],
                                LastName8: lastName[7]
                            },
                            userDataDate: {
                                TripStartDate: ((new Date(tripStartDate)).getTime()),
                                TripEndDate: ((new Date(tripEndDate)).getTime()),
                                EffectiveDate: ((new Date(effectiveDate)).getTime()),
                                DateOfBirth0: ((new Date(dateOfBirth[0])).getTime()),
                                DateOfBirth1: ((new Date(dateOfBirth[1])).getTime()),
                                DateOfBirth2: ((new Date(dateOfBirth[2])).getTime()),
                                DateOfBirth3: ((new Date(dateOfBirth[3])).getTime()),
                                DateOfBirth4: ((new Date(dateOfBirth[4])).getTime()),
                                DateOfBirth5: ((new Date(dateOfBirth[5])).getTime()),
                                DateOfBirth6: ((new Date(dateOfBirth[6])).getTime()),
                                DateOfBirth7: ((new Date(dateOfBirth[7])).getTime())
                            },
                            userDataBoolean: {
                                UKResident: isUkResident,
                                GoingOnCruise: isGoingOnCruise,
                                WinterSports: isWinterSportsSelected,
                                SameAddress: isSameAddress,
                                ExistingMedicalConditions: isExistingMedicalConditions
                            }
                        }
                    }

                case 'medicalscreening':
                    if (referrer.indexOf("tripdetails") != -1) {
                        var isUkResident = localStorage.getItem("isUkResident");
                        var isGoingOnCruise = localStorage.getItem("isGoingOnCruise");
                        var isWinterSportsSelected = localStorage.getItem("isWinterSportsSelected");
                        var isSameAddress = localStorage.getItem("isSameAddress");
                        var isExistingMedicalConditions = localStorage.getItem("isExistingMedicalConditions");
                        var selectedPolicyType = localStorage.getItem("selectedPolicyType");
                        var selectedCoverType = localStorage.getItem("selectedCoverType");
                        var selectedUFEDestination = localStorage.getItem("selectedUFEDestination");
                        var selectedDestination = localStorage.getItem("selectedDestination");

                        var title = [];
                        var firstName = [];
                        var lastName = [];
                        var dateOfBirthStr = [];
                        var dateOfBirthUTC = [];
                        var dateOfBirth = [];

                        for (var i = 0; i < 8; i++) {
                            var titleId = 'title[' + i + ']';
                            var firstNameId = 'firstName[' + i + ']';
                            var lastNameId = 'lastName[' + i + ']';
                            var dateOfBirthStrId = 'dateOfBirthStr[' + i + ']';

                            title[i] = localStorage.getItem(titleId);
                            firstName[i] = localStorage.getItem(firstNameId);
                            lastName[i] = localStorage.getItem(lastNameId);
                            dateOfBirthStr[i] = localStorage.getItem(dateOfBirthStrId);

                            if (dateOfBirthStr[i] != "undefined" && dateOfBirthStr[i] != null) {
                                dateOfBirthStr[i] = dateOfBirthStr[i].split("/");
                                dateOfBirthUTC[i] = new Date(new Date(dateOfBirthStr[i][2], dateOfBirthStr[i][1] - 1, dateOfBirthStr[i][0]).getTime());
                                dateOfBirth[i] = new Date(dateOfBirthUTC[i].getTime() - dateOfBirthUTC[i].getTimezoneOffset() * 60000);
                            }
                        }

                        var tripStartDateStr = localStorage.getItem("tripStartDateStr");
                        var tripEndDateStr = localStorage.getItem("tripEndDateStr");
                        var effectiveDateStr = localStorage.getItem("effectiveDateStr");

                        var tripStartDateUTC = null;
                        var tripEndDateUTC = null;
                        var effectiveDateUTC = null;

                        var tripStartDate = null;
                        var tripEndDate = null;
                        var effectiveDate = null;

                        if (tripStartDateStr != "undefined" && tripStartDateStr != null) {
                            tripStartDate = tripStartDateStr.split("/");
                            tripStartDateUTC = new Date(new Date(tripStartDateStr[2], tripStartDateStr[1] - 1, tripStartDateStr[0]).getTime());
                            tripStartDate = new Date(tripStartDateUTC.getTime() - tripStartDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (tripEndDateStr != "undefined" && tripEndDateStr != null) {
                            tripEndDateStr = tripEndDateStr.split("/");
                            tripEndDateUTC = new Date(new Date(tripEndDateStr[2], tripEndDateStr[1] - 1, tripEndDateStr[0]).getTime());
                            tripEndDate = new Date(tripEndDateUTC.getTime() - tripEndDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (effectiveDateStr != "undefined" && effectiveDateStr != null) {
                            effectiveDateStr = effectiveDateStr.split("/");
                            effectiveDateUTC = new Date(new Date(effectiveDateStr[2], effectiveDateStr[1] - 1, effectiveDateStr[0]).getTime());
                            effectiveDate = new Date(effectiveDateUTC.getTime() - effectiveDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (isUkResident == "true") {
                            isUkResident = true;
                        }
                        else {
                            isUkResident = false;
                        }

                        if (isGoingOnCruise == "true") {
                            isGoingOnCruise = true;
                        }
                        else {
                            isGoingOnCruise = false;
                        }

                        if (isWinterSportsSelected == "true") {
                            isWinterSportsSelected = true;
                        }
                        else {
                            isWinterSportsSelected = false;
                        }
                        if (isSameAddress == "true") {
                            isSameAddress = true;
                        }
                        else {
                            isSameAddress = false;
                        }

                        if (isExistingMedicalConditions == "true") {
                            isExistingMedicalConditions = true;
                        }
                        else {
                            isExistingMedicalConditions = false;
                        }

                        return {
                            userData: {
                                PolicyType: selectedPolicyType,
                                UFEDestination: selectedUFEDestination,
                                Destination: selectedDestination,
                                CoverType: selectedCoverType,
                                Title1: title[0],
                                FirstName1: firstName[0],
                                LastName1: lastName[0],
                                Title2: title[1],
                                FirstName2: firstName[1],
                                LastName2: lastName[1],
                                Title3: title[2],
                                FirstName3: firstName[2],
                                LastName3: lastName[2],
                                Title4: title[3],
                                FirstName4: firstName[3],
                                LastName4: lastName[3],
                                Title5: title[4],
                                FirstName5: firstName[4],
                                LastName5: lastName[4],
                                Title6: title[5],
                                FirstName6: firstName[5],
                                LastName6: lastName[5],
                                Title7: title[6],
                                FirstName7: firstName[6],
                                LastName7: lastName[6],
                                Title8: title[7],
                                FirstName8: firstName[7],
                                LastName8: lastName[7]
                            },
                            userDataDate: {
                                TripStartDate: new Date(new Date(tripStartDate)).getTime(),
                                TripEndDate: new Date(new Date(tripEndDate)).getTime(),
                                EffectiveDate: new Date(new Date(effectiveDate)).getTime(),
                                DateOfBirth0: new Date(new Date(dateOfBirth[0])).getTime(),
                                DateOfBirth1: new Date(new Date(dateOfBirth[1])).getTime(),
                                DateOfBirth2: new Date(new Date(dateOfBirth[2])).getTime(),
                                DateOfBirth3: new Date(new Date(dateOfBirth[3])).getTime(),
                                DateOfBirth4: new Date(new Date(dateOfBirth[4])).getTime(),
                                DateOfBirth5: new Date(new Date(dateOfBirth[5])).getTime(),
                                DateOfBirth6: new Date(new Date(dateOfBirth[6])).getTime(),
                                DateOfBirth7: new Date(new Date(dateOfBirth[7])).getTime()
                            },
                            userDataBoolean: {
                                UKResident: isUkResident,
                                GoingOnCruise: isGoingOnCruise,
                                WinterSports: isWinterSportsSelected,
                                SameAddress: isSameAddress,
                                ExistingMedicalConditions: isExistingMedicalConditions
                            }
                        }
                    }

                    else {
                        var medcialConditionsDescriptionArray = [];
                        var medcialConditionsDescriptionItem = "";

                        for (var i = 0; i < 5; i++) {
                            medcialConditionsDescriptionItem = $('#travellerConditions-' + i + '').text();
                            medcialConditionsDescriptionArray[i] = medcialConditionsDescriptionItem;
                        }

                        var medcialConditionsDescription = medcialConditionsDescriptionArray.join('|');

                        return {
                            userData: {
                                MedicalConditionDescription: medcialConditionsDescription
                            }
                        }
                    }

                case 'yourquote':
                    if (referrer.indexOf("tripdetails") != -1) {
                        var isUkResident = localStorage.getItem("isUkResident");
                        var isGoingOnCruise = localStorage.getItem("isGoingOnCruise");
                        var isWinterSportsSelected = localStorage.getItem("isWinterSportsSelected");
                        var isSameAddress = localStorage.getItem("isSameAddress");
                        var isExistingMedicalConditions = localStorage.getItem("isExistingMedicalConditions");

                        var policyType = localStorage.getItem("selectedPolicyType");
                        var uFEDestination = localStorage.getItem("selectedUFEDestination");
                        var destination = localStorage.getItem("selectedDestination");
                        var coverType = localStorage.getItem("selectedCoverType");

                        var dateOfBirthStr = [];
                        var dateOfBirthUTC = [];
                        var dateOfBirth = [];

                        for (var i = 0; i < 8; i++) {
                            var dateOfBirthStrId = 'dateOfBirthStr[' + i + ']';

                            dateOfBirthStr[i] = localStorage.getItem(dateOfBirthStrId);

                            if (dateOfBirthStr[i] != "undefined" && dateOfBirthStr[i] != null) {
                                dateOfBirthStr[i] = dateOfBirthStr[i].split("/");
                                dateOfBirthUTC[i] = new Date(new Date(dateOfBirthStr[i][2], dateOfBirthStr[i][1] - 1, dateOfBirthStr[i][0]).getTime());
                                dateOfBirth[i] = new Date(dateOfBirthUTC[i].getTime() - dateOfBirthUTC[i].getTimezoneOffset() * 60000);
                            }
                        }

                        var tripStartDateStr = localStorage.getItem("tripStartDateStr");
                        var tripEndDateStr = localStorage.getItem("tripEndDateStr");
                        var effectiveDateStr = localStorage.getItem("effectiveDateStr");

                        var tripStartDateUTC = null;
                        var tripEndDateUTC = null;
                        var effectiveDateUTC = null;

                        var tripStartDate = null;
                        var tripEndDate = null;
                        var effectiveDate = null;

                        if (tripStartDateStr != "undefined" && tripStartDateStr != null) {
                            tripStartDate = tripStartDateStr.split("/");
                            tripStartDateUTC = new Date(new Date(tripStartDateStr[2], tripStartDateStr[1] - 1, tripStartDateStr[0]).getTime());
                            tripStartDate = new Date(tripStartDateUTC.getTime() - tripStartDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (tripEndDateStr != "undefined" && tripEndDateStr != null) {
                            tripEndDateStr = tripEndDateStr.split("/");
                            tripEndDateUTC = new Date(new Date(tripEndDateStr[2], tripEndDateStr[1] - 1, tripEndDateStr[0]).getTime());
                            tripEndDate = new Date(tripEndDateUTC.getTime() - tripEndDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (effectiveDateStr != "undefined" && effectiveDateStr != null) {
                            effectiveDateStr = effectiveDateStr.split("/");
                            effectiveDateUTC = new Date(new Date(effectiveDateStr[2], effectiveDateStr[1] - 1, effectiveDateStr[0]).getTime());
                            effectiveDate = new Date(effectiveDateUTC.getTime() - effectiveDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (isUkResident == "true") {
                            isUkResident = true;
                        }
                        else {
                            isUkResident = false;
                        }

                        if (isGoingOnCruise == "true") {
                            isGoingOnCruise = true;
                        }
                        else {
                            isGoingOnCruise = false;
                        }

                        if (isWinterSportsSelected == "true") {
                            isWinterSportsSelected = true;
                        }
                        else {
                            isWinterSportsSelected = false;
                        }
                        if (isSameAddress == "true") {
                            isSameAddress = true;
                        }
                        else {
                            isSameAddress = false;
                        }

                        if (isExistingMedicalConditions == "true") {
                            isExistingMedicalConditions = true;
                        }
                        else {
                            isExistingMedicalConditions = false;
                        }

                        return {
                            userData: {
                                PolicyType: policyType,
                                UFEDestination: uFEDestination,
                                Destination: destination,
                                CoverType: coverType
                            },
                            userDataDate: {
                                TripStartDate: ((new Date(tripStartDate)).getTime()),
                                TripStartDate: ((new Date(tripStartDate)).getTime()),
                                TripEndDate: ((new Date(tripEndDate)).getTime()),
                                EffectiveDate: ((new Date(effectiveDate)).getTime()),
                                DateOfBirth0: ((new Date(dateOfBirth[0])).getTime()),
                                DateOfBirth1: ((new Date(dateOfBirth[1])).getTime()),
                                DateOfBirth2: ((new Date(dateOfBirth[2])).getTime()),
                                DateOfBirth3: ((new Date(dateOfBirth[3])).getTime()),
                                DateOfBirth4: ((new Date(dateOfBirth[4])).getTime()),
                                DateOfBirth5: ((new Date(dateOfBirth[5])).getTime()),
                                DateOfBirth6: ((new Date(dateOfBirth[6])).getTime()),
                                DateOfBirth7: ((new Date(dateOfBirth[7])).getTime())
                            },
                            userDataBoolean: {
                                UKResident: isUkResident,
                                GoingOnCruise: isGoingOnCruise,
                                WinterSports: isWinterSportsSelected,
                                SameAddress: isSameAddress,
                                ExistingMedicalConditions: isExistingMedicalConditions
                            }
                        }
                    }

                    else if (referrer.indexOf("medicalscreening") != -1) {
                        var medcialConditionsDescription = localStorage.getItem("medcialConditionsDescription");

                        return {
                            userData: {
                                MedicalConditionDescription: medcialConditionsDescription
                            }
                        }
                    }
                    else {
                        return;
                    }

                case 'additionalcovers':
                    if (referrer.indexOf("yourquote") != -1) {
                        var selectedPackage = localStorage.getItem("selectedPackage");

                        return {
                            userData: {
                                SelectedPackage: selectedPackage
                            }
                        }
                    }

                    else if (referrer.indexOf("medicalscreening") != -1) {
                        var medcialConditionsDescription = localStorage.getItem("medcialConditionsDescription");

                        return {
                            userData: {
                                MedicalConditionDescription: medcialConditionsDescription
                            }
                        }
                    }

                    else if (referrer.indexOf("tripdetails") != -1) {
                        var isUkResident = localStorage.getItem("isUkResident");
                        var isGoingOnCruise = localStorage.getItem("isGoingOnCruise");
                        var isWinterSportsSelected = localStorage.getItem("isWinterSportsSelected");
                        var isSameAddress = localStorage.getItem("isSameAddress");
                        var isExistingMedicalConditions = localStorage.getItem("isExistingMedicalConditions");
                        var selectedPolicyType = localStorage.getItem("selectedPolicyType");
                        var selectedCoverType = localStorage.getItem("selectedCoverType");
                        var selectedUFEDestination = localStorage.getItem("selectedUFEDestination");
                        var selectedDestination = localStorage.getItem("selectedDestination");

                        var title = [];
                        var firstName = [];
                        var lastName = [];
                        var dateOfBirthStr = [];
                        var dateOfBirthUTC = [];
                        var dateOfBirth = [];

                        for (var i = 0; i < 8; i++) {
                            var titleId = 'title[' + i + ']';
                            var firstNameId = 'firstName[' + i + ']';
                            var lastNameId = 'lastName[' + i + ']';
                            var dateOfBirthStrId = 'dateOfBirthStr[' + i + ']';

                            title[i] = localStorage.getItem(titleId);
                            firstName[i] = localStorage.getItem(firstNameId);
                            lastName[i] = localStorage.getItem(lastNameId);
                            dateOfBirthStr[i] = localStorage.getItem(dateOfBirthStrId);

                            if (dateOfBirthStr[i] != "undefined" && dateOfBirthStr[i] != null) {
                                dateOfBirthStr[i] = dateOfBirthStr[i].split("/");
                                dateOfBirthUTC[i] = new Date(new Date(dateOfBirthStr[i][2], dateOfBirthStr[i][1] - 1, dateOfBirthStr[i][0]).getTime());
                                dateOfBirth[i] = new Date(dateOfBirthUTC[i].getTime() - dateOfBirthUTC[i].getTimezoneOffset() * 60000);
                            }
                        }

                        var tripStartDateStr = localStorage.getItem("tripStartDateStr");
                        var tripEndDateStr = localStorage.getItem("tripEndDateStr");
                        var effectiveDateStr = localStorage.getItem("effectiveDateStr");

                        var tripStartDateUTC = null;
                        var tripEndDateUTC = null;
                        var effectiveDateUTC = null;

                        var tripStartDate = null;
                        var tripEndDate = null;
                        var effectiveDate = null;

                        if (tripStartDateStr != "undefined" && tripStartDateStr != null) {
                            tripStartDate = tripStartDateStr.split("/");
                            tripStartDateUTC = new Date(new Date(tripStartDateStr[2], tripStartDateStr[1] - 1, tripStartDateStr[0]).getTime());
                            tripStartDate = new Date(tripStartDateUTC.getTime() - tripStartDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (tripEndDateStr != "undefined" && tripEndDateStr != null) {
                            tripEndDateStr = tripEndDateStr.split("/");
                            tripEndDateUTC = new Date(new Date(tripEndDateStr[2], tripEndDateStr[1] - 1, tripEndDateStr[0]).getTime());
                            tripEndDate = new Date(tripEndDateUTC.getTime() - tripEndDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (effectiveDateStr != "undefined" && effectiveDateStr != null) {
                            effectiveDateStr = effectiveDateStr.split("/");
                            effectiveDateUTC = new Date(new Date(effectiveDateStr[2], effectiveDateStr[1] - 1, effectiveDateStr[0]).getTime());
                            effectiveDate = new Date(effectiveDateUTC.getTime() - effectiveDateUTC.getTimezoneOffset() * 60000);
                        }

                        if (isUkResident == "true") {
                            isUkResident = true;
                        }
                        else {
                            isUkResident = false;
                        }

                        if (isGoingOnCruise == "true") {
                            isGoingOnCruise = true;
                        }
                        else {
                            isGoingOnCruise = false;
                        }

                        if (isWinterSportsSelected == "true") {
                            isWinterSportsSelected = true;
                        }
                        else {
                            isWinterSportsSelected = false;
                        }
                        if (isSameAddress == "true") {
                            isSameAddress = true;
                        }
                        else {
                            isSameAddress = false;
                        }

                        if (isExistingMedicalConditions == "true") {
                            isExistingMedicalConditions = true;
                        }
                        else {
                            isExistingMedicalConditions = false;
                        }

                        return {
                            userData: {
                                PolicyType: selectedPolicyType,
                                UFEDestination: selectedUFEDestination,
                                Destination: selectedDestination,
                                CoverType: selectedCoverType,
                                Title1: title[0],
                                FirstName1: firstName[0],
                                LastName1: lastName[0],
                                Title2: title[1],
                                FirstName2: firstName[1],
                                LastName2: lastName[1],
                                Title3: title[2],
                                FirstName3: firstName[2],
                                LastName3: lastName[2],
                                Title4: title[3],
                                FirstName4: firstName[3],
                                LastName4: lastName[3],
                                Title5: title[4],
                                FirstName5: firstName[4],
                                LastName5: lastName[4],
                                Title6: title[5],
                                FirstName6: firstName[5],
                                LastName6: lastName[5],
                                Title7: title[6],
                                FirstName7: firstName[6],
                                LastName7: lastName[6],
                                Title8: title[7],
                                FirstName8: firstName[7],
                                LastName8: lastName[7]
                            },
                            userDataDate: {
                                TripStartDate: ((new Date(tripStartDate)).getTime()),
                                TripStartDate: ((new Date(tripStartDate)).getTime()),
                                TripEndDate: ((new Date(tripEndDate)).getTime()),
                                EffectiveDate: ((new Date(effectiveDate)).getTime()),
                                DateOfBirth0: ((new Date(dateOfBirth[0])).getTime()),
                                DateOfBirth1: ((new Date(dateOfBirth[1])).getTime()),
                                DateOfBirth2: ((new Date(dateOfBirth[2])).getTime()),
                                DateOfBirth3: ((new Date(dateOfBirth[3])).getTime()),
                                DateOfBirth4: ((new Date(dateOfBirth[4])).getTime()),
                                DateOfBirth5: ((new Date(dateOfBirth[5])).getTime()),
                                DateOfBirth6: ((new Date(dateOfBirth[6])).getTime()),
                                DateOfBirth7: ((new Date(dateOfBirth[7])).getTime())
                            },
                            userDataBoolean: {
                                UKResident: isUkResident,
                                GoingOnCruise: isGoingOnCruise,
                                WinterSports: isWinterSportsSelected,
                                SameAddress: isSameAddress,
                                ExistingMedicalConditions: isExistingMedicalConditions
                            }
                        }
                    }

                    else {
                        var selectedCoversList = [];

                        $('input:checked').each(function () {
                            var txt = $('#Policies_0__Packages_1__Coverages_6__IsSelected').parent('label').parent('span').parent('span').parent('span').find('.accordion-heading').text().trim();
                            var selectedCoverType = $(this).parent('label').parent('span').parent('span').parent('span').find('.accordion-heading').text().trim();
                            selectedCoversList.push(selectedCoverType);
                        });

                        var selectedAdditionalCovers = selectedCoversList.join("|");

                        return {
                            userData: {
                                SelectedAdditionalCovers: selectedAdditionalCovers
                            }
                        }
                    }

                case "yourdetails":

                   // alert(localStorage.getItem("selectedAdditionalCovers"));
                    var selectedAdditionalCovers = localStorage.getItem("selectedAdditionalCovers");
                   // alert('case yourdetails');
                    //var sacArray = selectedAdditionalCovers.split('|');
                    
                    //if (sacArray.length > 0) {
                    //    for (let j = 0; j < sacArray.length; j++) {
                    //        sacArray[j] = sacArray[j].replace(' ', '');
                    //    }
                    //    //var totalPriceAC = localStorage.getItem("totalPriceAdditionalCovers");
                    //    var overallPrice = $('#prices').children('.summary__value').text().substring(1);
                    //    overallPrice = Number(overallPrice || 2);
                    //    //for (let j = 0; j < sacArray.length; j++) {
                    //    const countLen = $('div.additional_item').length / 2;
                    //    var jLen = 0;
                    //        $('div.additional_item').each(function () {                                
                    //                const matchItem = sacArray.find(ele => ele === $(this).attr('data-title'));
                    //                if (matchItem) {
                    //                    //if ($(this).attr('data-title') === sacArray[j].replace(' ', '')) {
                    //                    $(this).attr('style', 'display:flex');
                    //                    if (jLen < countLen) {
                    //                        var coverPrice = $(this).children('.summary__value').text().substring(1);
                    //                        coverPrice = Number(coverPrice || 2);
                    //                        overallPrice = overallPrice + coverPrice;
                    //                    }
                    //                } //else {
                    //                //}
                                
                    //            jLen = jLen + 1;

                    //        });
                    //    //}
                    //    $('#prices').children('.summary__value').text('£' + Number(overallPrice || 2));
                    //}
                    

                    
                    var title = $('#Policies_0__Risk_0__Traveller_Title').val();
                    var firstName = $('#Policies_0__Risk_0__Traveller_FirstName').val();
                    var lastName = $('#Policies_0__Risk_0__Traveller_LastName').val();
                    var email = $('#Account_Email').val();

                    var mobileNumber = $("#Account_MobilePhone").val();
                    var landlineNumber = $("#Account_PrimaryPhone").val();
                    var line1 = $("#Account_Address_Line1").val();
                    var line2 = $("#Account_Address_Line2").val();
                    var city = $("#Account_Address_City").val();
                    var county = $("#Account_Address_County").val();
                    var postCode = $("#Account_Address_PostCode").val();
                    var marketingContactType = $('#Account_MarketingContactType').val();

                    var selectedMarketingMethod = "";
                    var marketingMethodMail = $('#Account_MarketingMethodMail').prop('checked');
                    var marketingMethodEmail = $('#Account_MarketingMethodEmail').prop('checked');
                    var marketingMethodSms = $('#Account_MarketingMethodSms').prop('checked');
                    var marketingMethodPhone = $('#Account_MarketingMethodPhone').prop('checked');

                    if (marketingMethodMail) {
                        selectedMarketingMethod += "Post|";
                    }
                    if (marketingMethodEmail) {
                        selectedMarketingMethod += "Email|";
                    }
                    if (marketingMethodSms) {
                        selectedMarketingMethod += "Text|";
                    }
                    if (marketingMethodPhone) {
                        selectedMarketingMethod += "Phone|";
                    }

                    return {
                        userData: {
                            SelectedAdditionalCovers: selectedAdditionalCovers,
                            Title: title,
                            FirstName: firstName,
                            LastName: lastName,
                            PrimaryPhone: primaryPhone,
                            MobilePhone: mobilePhone,
                            Email: email,
                            Line1: line1,
                            Line2: line2,
                            City: city,
                            County: county,
                            PostCode: postCode,
                            MarketingContactType: marketingContactType,
                            BranchCode: branchCode
                        },

                        userDataBoolean: {
                            MarketingMethodMail: marketingMethodMail,
                            MarketingMethodEmail: marketingMethodEmail,
                            MarketingMethodSms: marketingMethodSms,
                            MarketingMethodPhone: marketingMethodPhone,
                            PostDocumentIndicator: postDocumentIndicator
                        }
                    }

                case "payment":
                    if (referrer.indexOf("yourdetails") != -1) {
                        var title = localStorage.getItem("title");
                        var firstName = localStorage.getItem("firstName");
                        var lastName = localStorage.getItem("lastName");
                        var primaryPhone = localStorage.getItem("primaryPhone");
                        var mobilePhone = localStorage.getItem("mobilePhone");
                        var email = localStorage.getItem("email");
                        var line1 = localStorage.getItem("line1");
                        var line2 = localStorage.getItem("line2");
                        var city = localStorage.getItem("city");
                        var county = localStorage.getItem("county");
                        var postCode = localStorage.getItem("postCode");
                        var marketingContactType = localStorage.getItem("marketingContactType");
                        var branchCode = localStorage.getItem("branchCode");
                        var selectedMarketingMethod = localStorage.getItem("selectedMarketingMethod");
                        var postDocumentIndicator = localStorage.getItem("postDocumentIndicator");
                        var marketingMethodMail = localStorage.getItem("marketingMethodMail");
                        var marketingMethodEmail = localStorage.getItem("marketingMethodEmail");
                        var marketingMethodSms = localStorage.getItem("marketingMethodSms");
                        var marketingMethodPhone = localStorage.getItem("marketingMethodPhone");

                        if (marketingMethodMail == "true") {
                            marketingMethodMail = true;
                        }
                        else {
                            marketingMethodMail = false;
                        }

                        if (marketingMethodEmail == "true") {
                            marketingMethodEmail = true;
                        }
                        else {
                            marketingMethodEmail = false;
                        }

                        if (marketingMethodSms == "true") {
                            marketingMethodSms = true;
                        }
                        else {
                            marketingMethodSms = false;
                        }

                        if (marketingMethodPhone == "true") {
                            marketingMethodPhone = true;
                        }
                        else {
                            marketingMethodPhone = false;
                        }

                        if (postDocumentIndicator == "true") {
                            postDocumentIndicator = true;
                        }
                        else {
                            postDocumentIndicator = false;
                        }

                        return {
                            userData: {
                                Title: title,
                                FirstName: firstName,
                                LastName: lastName,
                                PrimaryPhone: primaryPhone,
                                MobilePhone: mobilePhone,
                                Email: email,
                                Line1: line1,
                                Line2: line2,
                                City: city,
                                County: county,
                                PostCode: postCode,
                                MarketingContactType: marketingContactType,
                                BranchCode: branchCode,
                            },

                            userDataBoolean: {
                                MarketingMethodMail: marketingMethodMail,
                                MarketingMethodEmail: marketingMethodEmail,
                                MarketingMethodSms: marketingMethodSms,
                                MarketingMethodPhone: marketingMethodPhone,
                                PostDocumentIndicator: postDocumentIndicator
                            }
                        }
                    }

                    else {
                        var isAutoRenew = $('#Account_AutoRenew-True').val()
                        if (isAutoRenew == "true") {
                            isAutoRenew = true;
                        }
                        else {
                            isAutoRenew = false;
                        }

                        return {
                            userDataBoolean: {
                                AutoRenew: isAutoRenew
                            }
                        }
                    }

                case "confirmation":
                    var isAutoRenew = localStorage.getItem("isAutoRenew");
                    if (isAutoRenew == "true") {
                        isAutoRenew = true;
                    }
                    else {
                        isAutoRenew = false;
                    }

                    return {
                        userDataBoolean: {
                            AutoRenew: isAutoRenew
                        }
                    }

                case "policycontactdetails":
                    var mobileNumber = $("#Account_MobilePhone").val();
                    var landlineNumber = $("#Account_PrimaryPhone").val();
                    var line1 = $("#Account_Address_Line1").val();
                    var line2 = $("#Account_Address_Line2").val();
                    var city = $("#Account_Address_City").val();
                    var county = $("#Account_Address_County").val();
                    var postCode = $("#Account_Address_PostCode").val();

                    var selectedMarketingMethod = "";
                    var marketingMethodMail = $('#Account_MarketingMethodMail').prop('checked');
                    var marketingMethodEmail = $('#Account_MarketingMethodEmail').prop('checked');
                    var marketingMethodSms = $('#Account_MarketingMethodSms').prop('checked');
                    var marketingMethodPhone = $('#Account_MarketingMethodPhone').prop('checked');

                    if (marketingMethodMail) {
                        selectedMarketingMethod += "Post|";
                    }
                    if (marketingMethodEmail) {
                        selectedMarketingMethod += "Email|";
                    }
                    if (marketingMethodSms) {
                        selectedMarketingMethod += "Text|";
                    }
                    if (marketingMethodPhone) {
                        selectedMarketingMethod += "Phone|";
                    }

                    return {
                        userData: {
                            MobileNumber: mobileNumber,
                            Landlinenumber: landlineNumber,
                            Line1: line1,
                            Line2: line2,
                            City: city,
                            County: county,
                            Postcode: postCode,
                            MarketingMethod: selectedMarketingMethod
                        },

                        userDataBoolean: {
                            MarketingMethodMail: marketingMethodMail,
                            MarketingMethodEmail: marketingMethodEmail,
                            MarketingMethodSMS: marketingMethodSms,
                            MarketingMethodPhone: marketingMethodPhone
                        }
                    }
                case "myaccount":
                    if (referrer.indexOf("policycontactdetails") != -1) {
                        var mobileNumber = localStorage.getItem("mobileNumber");
                        var landlinenumber = localStorage.getItem("landlineNumber");
                        var line1 = localStorage.getItem("line1");
                        var line2 = localStorage.getItem("line2");
                        var city = localStorage.getItem("city");
                        var county = localStorage.getItem("county");
                        var postcode = localStorage.getItem("postCode");

                        var selectedMarketingMethod = localStorage.getItem("selectedMarketingMethod");
                        var marketingMethodMail = localStorage.getItem("marketingMethodMail");
                        var marketingMethodEmail = localStorage.getItem("marketingMethodEmail");
                        var marketingMethodSms = localStorage.getItem("marketingMethodSms");
                        var marketingMethodPhone = localStorage.getItem("marketingMethodPhone");

                        if (marketingMethodMail == "true") {
                            marketingMethodMail = true;
                        }
                        else {
                            marketingMethodMail = false;
                        }

                        if (marketingMethodEmail == "true") {
                            marketingMethodEmail = true;
                        }
                        else {
                            marketingMethodEmail = false;
                        }

                        if (marketingMethodSms == "true") {
                            marketingMethodSms = true;
                        }
                        else {
                            marketingMethodSms = false;
                        }

                        if (marketingMethodPhone == "true") {
                            marketingMethodPhone = true;
                        }
                        else {
                            marketingMethodPhone = false;
                        }

                        return {
                            userData: {
                                MobileNumber: mobileNumber,
                                Landlinenumber: landlinenumber,
                                Line1: line1,
                                Line2: line2,
                                City: city,
                                County: county,
                                Postcode: postcode,
                                MarketingMethod: selectedMarketingMethod
                            },

                            userDataBoolean: {
                                MarketingMethodMail: marketingMethodMail,
                                MarketingMethodEmail: marketingMethodEmail,
                                MarketingMethodSMS: marketingMethodSms,
                                MarketingMethodPhone: marketingMethodPhone
                            }
                        }
                    }
                    else {
                        break;
                    }

                case "default":
                    break;
            }
        }
    }
};