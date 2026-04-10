// Primary Angular JS init file
var app = angular.module('PomsApp', ['ngAria', 'smoothScroll']);
var addedTE = false;
var TEPrice = 0;
var travellerOver75 = false;

app.controller('SharedController', function ($scope, $compile) {
    $scope.Policies = [{}];
    if(window.localStorage.getItem("tripDetailsData") != " "){
        $scope.Policies = JSON.parse(window.localStorage.getItem("tripDetailsData"));
    }

    var policyName = window.localStorage.getItem("selectedPolicyType");
    var policyCategory="";
    if(policyName  === 'S'){
        policyCategory = 'Single Trip'
    }else if (policyName === 'A'){
        policyCategory  = 'Annual Multi Trip'
    }else{
         policyCategory  = 'Back Packers'
    }

    if(policyCategory != 'Annual Multi Trip'){
       var travelInsurance = document.getElementById("travelInsuranceExtensionMultiTripCover")
        if(travelInsurance != null){
            document.getElementById("travelInsuranceExtensionMultiTripCover").style.display = 'none';
        }
    }

    $scope.price;
    $scope.gadgetCover;
    $scope.excessWaiver;
    $scope.sportsandActivities;
    $scope.tripDisruptionCover;
    $scope.covidCover;
    $scope.travelExtensionCover;
    $scope.covers=[];
    $scope.coverTypes=[];
    $scope.totalPrice;
    $scope.policyType;
    $scope.tripExtension;
    $scope.showOptionalLabel;
    $scope.selectedCoveragesCount = 0;
    $scope.selectedTECount = 0;
    $scope.addedOptionalTE = false;
    $scope.hideOptionalLabel;
    $scope.initOptionalLabel = function (coverageCount, teCount) {
        $scope.selectedCoveragesCount = coverageCount;
        $scope.selectedTECount = teCount;

        showOptionalLabelFunction();
    }

    $scope.changePolicy = function (item) {
        if (item === "Collinsons") {
            $scope.showCol = true;
            $scope.showTIF = false;
            $scope.showERV = false;
        }
        else if (item === "TIF") {
            $scope.showCol = false;
            $scope.showTIF = true;
            $scope.showERV = false;
        }
        else if (item === "ERV") {
            $scope.showCol = false;
            $scope.showTIF = false;
            $scope.showERV = true;
        }
        else {
            $scope.showCol = false;
            $scope.showTIF = false;
            $scope.showERV = false;
        }
    }
    $scope.priceSingleTrip = function ($event, cost) {
        $scope.policyType = $scope.Policies[0].PolicyType;
        if($scope.policyType  === 'S'){
            $scope.policyType = 'Single Trip'
           }else if ($scope.policyType === 'A'){
            $scope.policyType  = 'Annual Multi Trip'
           }else{
            $scope.policyType  = 'Back Packers'
           }

        if($scope.policyType != 'Annual Multi Trip'){
            if(document.getElementById("travelInsuranceAnnualMultiTrip_value")!=null){
                document.getElementById("travelInsuranceAnnualMultiTrip_value").style.display = 'none';
            }
            var itemToRemove="Travel_Insurance_Extension_Cover";
            window.localStorage.removeItem(itemToRemove);
            if(window.localStorage.getItem("covertypes") && window.localStorage.getItem("covertypes").length > 0){
                $scope.coverTypes = JSON.parse(window.localStorage.getItem("covertypes"));
            }
            if($scope.coverTypes.length>0){
                $scope.coverTypes = removeExistingCover(itemToRemove);
                window.localStorage.setItem("covertypes",JSON.stringify($scope.coverTypes));
                $scope.covers = JSON.parse(window.localStorage.getItem("coversItems"));
            }
            if($scope.covers){
                let index = $scope.covers.indexOf(itemToRemove);
                $scope.covers.splice(index,1);
                window.localStorage.setItem("coversItems",JSON.stringify($scope.covers));
            }
            
        }

        if(window.localStorage.getItem("isGoingOnCruise")==='false'){
            if(document.getElementById("travelInsuranceExtensionCruise_value")!=null){
                document.getElementById("travelInsuranceExtensionCruise_value").style.display = 'none';
            }
        }

        $scope.standardCover=window.localStorage.getItem("priceSingleTrip")!=null?window.localStorage.getItem("priceSingleTrip"):0;
        $scope.gadgetCover=window.localStorage.getItem("Gadget_cover")!=null?window.localStorage.getItem("Gadget_cover"):0;
        $scope.excessWaiver=window.localStorage.getItem("Excess_waiver")!=null?window.localStorage.getItem("Excess_waiver"):0;
        $scope.sportsandActivities=window.localStorage.getItem("Sports_and_Activities")!=null?window.localStorage.getItem("Sports_and_Activities"):0;
        $scope.tripDisruptionCover=window.localStorage.getItem("Trip_Disruption_cover")!=null?window.localStorage.getItem("Trip_Disruption_cover"):0;
        $scope.covidCover=window.localStorage.getItem("Covid-19_Cover")!=null?window.localStorage.getItem("Covid-19_Cover"):0;
        $scope.travelExtensionCover=window.localStorage.getItem("Travel_Insurance_Extension_Cover")!=null?window.localStorage.getItem("Travel_Insurance_Extension_Cover"):0;
       // var annualMultiTripPrice = $scope.policyType === 'Annual Multi Trip'?39.29:0;
        var goingOnCruisePrice = window.localStorage.getItem("isGoingOnCruise")==='true'?4.00:0;
        $scope.totalPrice=parseFloat(Number($scope.gadgetCover)) + parseFloat(Number($scope.excessWaiver))+parseFloat(Number($scope.sportsandActivities)) + parseFloat(Number($scope.tripDisruptionCover))+parseFloat(Number($scope.covidCover))+parseFloat(Number($scope.standardCover))+parseFloat(Number(goingOnCruisePrice))+parseFloat(Number($scope.travelExtensionCover));
        window.localStorage.setItem("totalPrice",$scope.totalPrice);
        $scope.covers=[];
        if($scope.gadgetCover!=0){
            if(!stringExists('Gadget_cover')){
                $scope.covers.push('Gadget_cover');
                $('#Gadget_cover-remove-button').attr("class", "button-link");
            }
        }
        if($scope.excessWaiver!=0){
            if(!stringExists('Excess_waiver')){
                $scope.covers.push('Excess_waiver');
                $('#Excess_waiver-remove-button').attr("class", "button-link");
            }
        }
        if($scope.sportsandActivities!=0){
            if(!stringExists('Sports_and_Activities')){
                $scope.covers.push('Sports_and_Activities');
                $('#Sports_and_Activities-remove-button').attr("class", "button-link");
            }
        }
        if($scope.tripDisruptionCover!=0){
            if(!stringExists('Trip_Disruption_cover')){
                $scope.covers.push('Trip_Disruption_cover');
                $('#Trip_Disruption_cover-remove-button').attr("class", "button-link");
            }
        }
        if($scope.covidCover!=0){
            if(!stringExists('19_Cover')){
                $scope.covers.push('Covid-19_Cover');
                $('#Covid-19_Cover-remove-button').attr("class", "button-link");
            }
        }
        if($scope.travelExtensionCover!=0){
            if(!stringExists('Travel_Insurance_Extension_Cover')){
                $scope.covers.push('Travel_Insurance_Extension_Cover');
                $('#Travel-Insurance-Extension-remove-button').attr("class", "button-link");
            }
        }

        if( $event &&  $event.target){
            var removeButton = $event.target;
            $(removeButton).attr("class", "hidden");
        }
        $scope.policyType = $scope.Policies[0].PolicyType;
        if($scope.policyType  === 'S'){
            $scope.policyType = 'Single Trip';
            $scope.Policies[0].EffectiveDate = '';
           }else if ($scope.policyType === 'A'){
            $scope.policyType  = 'Annual Multi Trip';
            $scope.Policies[0].TripStartDate = '';
           }else{
            $scope.policyType  = 'Back Packers'
           }

        $scope.coverName = parseFloat(Number(window.localStorage.getItem("addCover")));

        if($scope.policyType  == 'Annual Multi Trip'){
            $scope.departingOn = $scope.Policies[0].EffectiveDate;
        }else{
            $scope.departingOn = $scope.Policies[0].TripStartDate;
        }
        $scope.returningOn = $scope.Policies[0].TripEndDate;
        $scope.coverType = $scope.Policies[0].CoverType; 
        $scope.address = $scope.Policies[0].UFEDestination;
       if( $scope.address == 'W'){
        $scope.address = "Worldwide excluding USA, Canada, Bermuda, The Caribbean, Mexico and Greenland";
       }else if($scope.address == 'EUR'){
        $scope.address = "Cape Verde, Cyprus, Spain, Balearic Islands, Canary Islands, Turkey";
       }else{
        $scope.address = "UK"
       }
        console.log("$scope.policySingleTrip ",$scope.Policies);
        return window.localStorage.getItem("priceSingleTrip")
    };
    $scope.tripDetails = function ($event, cost) {
        window.localStorage.setItem("tripDetailsData"," ") 
        var yourDate = $scope.Policies[0].Risk[0].Traveller.DateOfBirth.split("/");
        $scope.Policies[0].Risk[0].Traveller.Day = yourDate[0];
        $scope.Policies[0].Risk[0].Traveller.Month = yourDate[1];
        $scope.Policies[0].Risk[0].Traveller.Year = yourDate[2];
        window.localStorage.setItem("tripDetailsData",JSON.stringify($scope.Policies))
    };
    $scope.backToTripDetails = function ($event, cost) {
        $scope.Policies = JSON.parse(window.localStorage.getItem("tripDetailsData")); 
        return;
    };
    $scope.gadgetCoverValue = function ($event, cost) {
        return JSON.parse(window.localStorage.getItem("Gadget_cover")) != null ? true : false ; 
    };
    $scope.SportsandActivitiesValue = function ($event, cost) {
        return JSON.parse(window.localStorage.getItem("Sports_and_Activities")) != null ? true : false ; 
    };
    $scope.TripDisruptioncoverValue = function ($event, cost) {
        return JSON.parse(window.localStorage.getItem("Trip_Disruption_cover")) != null ? true : false ; 
    };
    $scope.CovidCoverValue = function ($event, cost) {
        return JSON.parse(window.localStorage.getItem("Covid-19_Cover")) != null ? true : false ; 
    };
    $scope.ExcesswaiverValue = function ($event, cost) {
        return JSON.parse(window.localStorage.getItem("Excess_waiver")) != null ? true : false ; 
    };
    $scope.TravelInsuranceExtensionCoverValue = function ($event, cost) {
        return JSON.parse(window.localStorage.getItem("Covid-19_Cover")) != null ? true : false ; 
    };
    $scope.additionalCover = function ($event, cost) {
        console.log("window.localStorage.setItem('additionalCoverPrice' = " + $scope.price);
        window.localStorage.setItem("additionalCoverPrice",parseFloat(Number($scope.price),2));
        return;
    }; 
    $scope.additionalCoverPrice = function ($event, cost) {
        console.log("window.localStorage.getItem('additionalCoverPrice') = " + window.localStorage.getItem("additionalCoverPrice") );
        return parseFloat(Number(window.localStorage.getItem("additionalCoverPrice"),2));
    };
    function stringExists(searchStr){
        return ($scope.covers.indexOf(searchStr) > -1)
    }
    $scope.addCovers = function ($event, item, itemId, cost, description) {
       // alert('add clicked');
       if(item == "Gadget_cover"){
            $('#Gadget_cover-remove-button').attr("class", "button-link");
        }
        if(item == "Excess_waiver"){
            $('#Excess_waiver-remove-button').attr("class", "button-link");
        }
        if(item == "Sports_and_Activities"){
            $('#Sports_and_Activities-remove-button').attr("class", "button-link");
        }
        if(item == "Trip_Disruption_cover"){
            $('#Trip_Disruption_cover-remove-button').attr("class", "button-link");
        }
        if(item == "Covid-19_Cover"){
            $('#Covid-19_Cover-remove-button').attr("class", "button-link");
        }
        if(item == "Travel_Insurance_Extension_Cover"){
            $('#Travel-Insurance-Extension-remove-button').attr("class", "button-link");
        }
        
       if(!stringExists(item)){
            var covertype={"ProductCode":itemId, "ProductName":item, "Amount":cost, "Description":description};
            $scope.coverTypes =[];
            if(window.localStorage.getItem("covertypes") && window.localStorage.getItem("covertypes").length>0){
                $scope.coverTypes = JSON.parse(window.localStorage.getItem("covertypes"));
            }
            $scope.coverTypes.push(covertype);
            window.localStorage.setItem("covertypes",JSON.stringify($scope.coverTypes));
            window.localStorage.setItem(item,cost)
            $scope.covers.push(item);
            window.localStorage.setItem("coversItems",JSON.stringify($scope.covers));
            $scope.totalPrice=$scope.totalPrice+cost;
            window.localStorage.setItem("totalPrice",$scope.totalPrice);
       }

       $scope.gadgetCover=window.localStorage.getItem("Gadget_cover")!=null?window.localStorage.getItem("Gadget_cover"):0;
       $scope.excessWaiver=window.localStorage.getItem("Excess_waiver")!=null?window.localStorage.getItem("Excess_waiver"):0;
       $scope.sportsandActivities=window.localStorage.getItem("Sports_and_Activities")!=null?window.localStorage.getItem("Sports_and_Activities"):0;
       $scope.tripDisruptionCover=window.localStorage.getItem("Trip_Disruption_cover")!=null?window.localStorage.getItem("Trip_Disruption_cover"):0;
       $scope.covidCover=window.localStorage.getItem("Covid-19_Cover")!=null?window.localStorage.getItem("Covid-19_Cover"):0;
       $scope.travelExtensionCover=window.localStorage.getItem("Travel_Insurance_Extension_Cover")!=null?window.localStorage.getItem("Travel_Insurance_Extension_Cover"):0;

        var overallPrice = Number($scope.price.toString() || 2);
        var coverPrice = Number(cost.toString() || 2);
        var checkbox = $event.target;
        coverPrice = (checkbox.checked ? coverPrice : -coverPrice);
        var checkedCount = Number($scope.selectedCoveragesCount.toString());
        var svgIcon = $(' <svg class="added-extension-icon" width="19" height="18" viewBox="0 0 19 18" fill="#333333" xmlns="http://www.w3.org/2000/svg"><path d ="M1.5 7.82323L7.18878 14.0005L17.4286 2.26367" stroke = "white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg >');
       
        if ($scope.coolingOffPeriod != "False") {
            $scope.price = overallPrice + coverPrice;
        }
        else if ($scope.coolingOffPeriod === "False" && $scope.price === "0" && coverPrice > 0) {
            $scope.price = overallPrice + coverPrice;
        }
        else {
            if ((overallPrice + coverPrice) < 0) {
                $scope.price = 0.00
        }
            else {
                $scope.price = overallPrice + coverPrice;
                $scope.Policies = JSON.parse(window.localStorage.setItem("tripDetailsData"))
            }
        }

        //For showing optional label in till receipt
        if (checkbox.checked) {
           
            checkedCount++;
            $scope.selectedCoveragesCount = "" + checkedCount;
            $(checkbox).parent().next().attr("class", "btn btn-link remove-traveller-button");
            $(checkbox).next().next().text("Added");
            $(checkbox).next().next().append(svgIcon);
            $(checkbox).attr("disabled", "disabled")
        }
        else {
            
            checkedCount--;
            $scope.selectedCoveragesCount = "" + checkedCount;
            $(checkbox).next().next().text("Add");
            $(checkbox).parent().next().attr("class", "hidden");
        }
        $scope.price = parseFloat($scope.price,2);
        showOptionalLabelFunction();
    };
    function removeExistingCover(item){
        $scope.coverTypes =[]
        if(window.localStorage.getItem("covertypes")!="undefined"){
            $scope.coverTypes = JSON.parse(window.localStorage.getItem("covertypes"));
        }
        if($scope.coverTypes){
            return $scope.coverTypes.filter(function(e){
                return e.ProductName !== item;
            });
        }
    }
    $scope.removeAdditionalCover = function ($event,item,cost) {
        if(stringExists(item)){
            $scope.coverTypes = removeExistingCover(item);
            window.localStorage.setItem("covertypes",JSON.stringify($scope.coverTypes));
            window.localStorage.removeItem(item);
            $scope.covers = JSON.parse(window.localStorage.getItem("coversItems"));
            let index = $scope.covers.indexOf(item);
            $scope.covers.splice(index,1);
            $scope.totalPrice=$scope.totalPrice-Number(cost);
            window.localStorage.setItem("totalPrice",$scope.totalPrice);
        }

        $scope.gadgetCover=window.localStorage.getItem("Gadget_cover")!=null?window.localStorage.getItem("Gadget_cover"):0;
        $scope.excessWaiver=window.localStorage.getItem("Excess_waiver")!=null?window.localStorage.getItem("Excess_waiver"):0;;
        $scope.sportsandActivities=window.localStorage.getItem("Sports_and_Activities")!=null?window.localStorage.getItem("Sports_and_Activities"):0;;
        $scope.tripDisruptionCover=window.localStorage.getItem("Trip_Disruption_cover")!=null?window.localStorage.getItem("Trip_Disruption_cover"):0;;
        $scope.covidCover=window.localStorage.getItem("Covid-19_Cover")!=null?window.localStorage.getItem("Covid-19_Cover"):0;;
        $scope.travelExtensionCover=window.localStorage.getItem("Travel_Insurance_Extension_Cover")!=null?window.localStorage.getItem("Travel_Insurance_Extension_Cover"):0;

        //alert('remove clicked');
        var removeButton = $event.target;
        $(removeButton).attr("class", "hidden");

        var inputValue = $(removeButton).prev().children().first();
        $(inputValue).attr("checked", false);
        $(inputValue).removeAttr("disabled");
        $(inputValue).next().next().text("Add");
        
        var cost = $(inputValue).attr("cost");

        //var overallPrice = Number($scope.price.toString() || 2);
        //var coverPrice = Number(cost.toString() || 2);
        //var checkedCount = Number($scope.selectedCoveragesCount.toString());
        
       
        //if ($scope.coolingOffPeriod != "True") {
        //    $scope.price = overallPrice - coverPrice;
        //}
        //else if ($scope.coolingOffPeriod === "True" && $scope.price === "0" && coverPrice < 0) {
        //    $scope.price = overallPrice - coverPrice;
        //}
        //else {
        //    if ((overallPrice + coverPrice) < 0) {
        //        $scope.price = 0.00
        //    }
        //    else {
        //        $scope.price = overallPrice - coverPrice;
        //    }
        //}
        //checkedCount--;
        //$scope.selectedCoveragesCount = "" + checkedCount;
        ///////////////////////////////////////////////////////////////

        var overallPrice = Number($scope.price.toString() || 2);
        var coverPrice = Number(cost.toString() || 2);
        var checkbox = inputValue;
        coverPrice = (checkbox.checked ? coverPrice : -coverPrice);
        var checkedCount = Number($scope.selectedCoveragesCount.toString());
        //var svgIcon = $(' <svg class="added-extension-icon" width="19" height="18" viewBox="0 0 19 18" fill="#333333" xmlns="http://www.w3.org/2000/svg"><path d ="M1.5 7.82323L7.18878 14.0005L17.4286 2.26367" stroke = "white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg >');

        if ($scope.coolingOffPeriod != "False") {
            $scope.price = overallPrice + coverPrice;
        }
        else if ($scope.coolingOffPeriod === "False" && $scope.price === "0" && coverPrice > 0) {
            $scope.price = overallPrice + coverPrice;
        }
        else {
            if ((overallPrice + coverPrice) < 0) {
                $scope.price = 0.00
            }
            else {
                $scope.price = overallPrice + coverPrice;
            }
        }

        //For showing optional label in till receipt
        if (checkbox.checked) {
            checkedCount++;
            $scope.selectedCoveragesCount = "" + checkedCount;
            //$(checkbox).parent().next().attr("class", "btn btn-link remove-traveller-button");
            //$(checkbox).next().next().text("Added");
            //$(checkbox).next().next().append(svgIcon);
            //$(checkbox).attr("disabled", "disabled")
        }
        else {

            checkedCount--;
            $scope.selectedCoveragesCount = "" + checkedCount;

            //$(checkbox).next().next().text("Add");
            //$(checkbox).parent().next().attr("class", "hidden");
        }
        showOptionalLabelFunction();
        window.localStorage.removeItem(item)
        ///////////////////////////////////////////////////////////
        
    }


    function showOptionalLabelFunction() {
        $scope.showOptionalLabel = (Number($scope.selectedCoveragesCount) + Number($scope.selectedTECount)) > 0 ? true : false;
    }
  
    $scope.addTripExtension = function (id, teAmt, defaultPrice, isMandatory) {
        dropdown = ("#" + id);
        var sel = $(dropdown);
        var options = $(sel).find('option:selected');
        var label = options.text();
        var priceArray = label.split('£');

        if (priceArray.length < 2) {
            price = Number(defaultPrice);
        }
        else {
            price = Number(priceArray[1]);
        }
        var overallPrice = Number($scope.price);
        if (priceArray[0] === "Trip Extensions 17 days") {
            price = 0;
        }

        if (addedTE === false) {
            if ((overallPrice - teAmt + price) < 0 && $scope.coolingOffPeriod != "True") {
                $scope.price = 0.00
            }
            else {
                $scope.price = overallPrice - teAmt + price;
            }
            addedTE = true;
            TEPrice = price;
        }
        else if (addedTE === true) {
            if (($scope.price - TEPrice) < 0 && $scope.coolingOffPeriod != "True") {
                $scope.price = 0.00
                $scope.price = $scope.price + price;
            }
            else {
                overallPrice = $scope.price - TEPrice;
                $scope.price = overallPrice + price;
            }
            TEPrice = price;
        }

        //For showing optional label in till receipt
        var checkedCount = Number($scope.selectedTECount.toString());

        //added checks for default TEs because we shouldn't show optional label if default TEs are selected in Add ons page
        if (label == isMandatory || priceArray[0] === "Trip Extensions 17 days" || (priceArray[0] === "Trip Extensions 31 days - " && priceArray[1] === "0.00")) {
            $scope.addedOptionalTE = false;
            checkedCount--;
            $scope.selectedTECount = "" + checkedCount;
        }
        else if (label != isMandatory && $scope.addedOptionalTE == false) {
            if (checkedCount < 1) {
                checkedCount++;
                $scope.selectedTECount = "" + checkedCount;
            }
            $scope.addedOptionalTE = true;
        }

        showOptionalLabelFunction();
    };

    $scope.sendByPost = function ($event, price) {
        if (price === 0) {
            $scope.price = $scope.price;
        }
        else {
            var overallPrice = Number($scope.price || 2);
            price = Number(price || 2);
            var checkbox = $event.target;
            price = (checkbox.checked ? price : -price);
            $scope.price = overallPrice + price;
        }
    };

    $scope.ShowDependant = function (id, index) {
      //  alert('ShowDependant')
        if ($scope.Policies && $scope.Policies.length > 0 && $scope.Policies[0].CoverType != "FAM") {
            return false;
        }
        var startdate = new Date(getStartDate());
        var bdayvalue = angular.element('#' + id).val();
        if (bdayvalue != null) {
            var bdayvalues = bdayvalue.split("/");
            var birthDateYear = bdayvalues[2];
            var birthDateMonth = bdayvalues[1];
            var age = startdate.getFullYear() - birthDateYear;
            var birthDate = new Date(bdayvalues[1] + "/" + bdayvalues[0] + "/" + bdayvalues[2]);
            //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
            var m = (startdate.getMonth() + 1) - birthDateMonth;
            if (m < 0 || (m === 0 && startdate.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 18) {
                var falseInput = "Policies_0__Risk_" + index + "__Traveller_NonDependant-False"
                var trueInput = "Policies_0__Risk_" + index + "__Traveller_NonDependant-True"
                $('#' + falseInput).attr('required', 'required');
                $('#' + trueInput).attr('required', 'required');
                $('#' + falseInput).attr('data-val', 'true');
                $('#' + trueInput).attr('data-val', 'true');
                $('#' + falseInput).attr('data-val-required', 'Please confirm if the child is not dependent on you.');
                $('#' + trueInput).attr('data-val-required', 'Please confirm if the child is not dependent on you.');
                poms.resetFormValidator();
                return true
            }
            return false;
        }
    };

    $scope.ShowCruise = function () {
        checkAge();
        if ($scope.Policies[0].ExistingMedicalConditions === 'True' || travellerOver75 === true) {
            return true;
        }
        else {
            return false;
        }
    }

    function checkAge() {
        $.each($('input.nodatepicker:text'), function () {
            var today = new Date();
            var bdayvalue = $(this).val();
            if (bdayvalue != "") {
                var bdayvalues = bdayvalue.split("/");
                var birthDateYear = bdayvalues[2];
                var birthDateMonth = bdayvalues[1];
                var age = today.getFullYear() - birthDateYear;
                var m = today.getMonth() - birthDateMonth;
                //if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                //    age--;
                //}
                if (age > 74 && age < 87) {
                    travellerOver75 = true;
                    return true;
                }
                else if (age < 75) {
                    travellerOver75 = false;
                    return false;
                }
            }
        });
    }

    $scope.logout = function (step) {
        if (step == "no") {
            $('#myModal').modal('toggle');
            $('#global-modal').empty();
        }
        else if (step == "logout") {
            $.ajax({
                url: '/web/travel/account/logoutmodal',
                type: 'POST',
                data: {},
                cache: false,
                success: function (partialViewResult) {
                    $('#global-modal').empty();
                    partialViewResult = $compile(partialViewResult)($scope);
                    $('#global-modal').html(partialViewResult);
                    $('#myModal').modal('toggle');
                },
                error: function (data) {
                }
            });
        }
        return false;
    }

    $scope.address = function (step) {
        if ($("#AddressLookup_Address_PostCode").valid()) {
            if (step == "find") {
                $('#address-sm-btn').prop('disabled', true);
                $('#address-md-btn').prop('disabled', true);
            }
            else if (step == "select") {
                if ($('#AddressLookup_QueryId').val() == "") {
                    return false;
                }
                $('#ok-btn').prop('disabled', true);
            }
            var form = $("#form").serializeArray();
            form.push(
                {
                    name: "nextstep",
                    value: step
                }
            );
            form = jQuery.param(form);
            $.ajax({
                url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/Address?E=' + poms.getParameterByName("E"),
                type: 'POST',
                data: form,
                cache: false,
                success: function (partialViewResult) {
                    if (step == "find") {
                        partialViewResult = $compile(partialViewResult)($scope);
                        $('#global-modal').html(partialViewResult);
                        $('#myModal').modal('toggle');
                        $('#address-sm-btn').prop('disabled', false);
                        $('#address-md-btn').prop('disabled', false);
                    } else if (step == "select") {
                        $('#myModal').modal('toggle');
                        $('#global-modal').empty();
                        $('#address-lookup').empty();
                        partialViewResult = $compile(partialViewResult)($scope);
                        $('#address-lookup').html(partialViewResult);
                        $('#ok-btn').prop('disabled', false);
                    }
                },
                error: function (data) {
                   // alert("error");
                    $('#address-sm-btn').prop('disabled', false);
                    $('#address-md-btn').prop('disabled', false);
                    $('#ok-btn').prop('disabled', false);
                }
            });

            return false;
        }
        else {
            return false;
        }
    }

    function getStartDate() {
        if ($("#Policies_0__PolicyType-A").is(':checked')) {
            var $startDatepickerInput = $('#Policies_0__EffectiveDate');
            var date = FormatUkDate($startDatepickerInput.val());
            return moment(date);
        }
        else {
            return moment(new Date());
        }
    }
});