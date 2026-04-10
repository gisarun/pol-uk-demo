app.controller('SharedController', function ($scope, $compile) {
    // $(document).ready(function () {
        $scope.Policies = [{}];
        if(window.localStorage.getItem("tripDetailsData") != " "){
            $scope.Policies = JSON.parse(window.localStorage.getItem("tripDetailsData"));
        }
    
        $scope.policyType = $scope.Policies[0].PolicyType;
        $scope.address = $scope.Policies[0].UFEDestination == 'UK' ? "Worldwide excluding USA, Canada, Bermuda, The Caribbean, Mexico and Greenland" : "Cape Verde, Cyprus, Spain, Balearic Islands, Canary Islands, Turkey";
        $scope.departingOn = $scope.Policies[0].TripStartDate;
        $scope.returningOn = $scope.Policies[0].TripEndDate;
        $scope.coverType = $scope.Policies[0].CoverType;
        console.log("$scope.policySingleTrip ",$scope.Policies);
        $scope.Gadget_cover = window.localStorage.getItem("Gadget_cover");
        $scope.Excess_waiver = window.localStorage.getItem("Excess_waiver");
        $scope.Sports_and_Activities = window.localStorage.getItem("Sports_and_Activities");
        $scope.Trip_Disruption_cover = window.localStorage.getItem("Trip_Disruption_cover");
        $scope.Covid_Cover = window.localStorage.getItem("Covid-19_Cover");
    
        // return window.localStorage.getItem("priceSingleTrip")
        // $("#Account_Address_County").attr("required", "true");
        // $('#Account_Address_County').each(function (index) {
        //     $(this).rules("add", {
        //         messages: {
        //             required: "Please enter address details"
        //         }
        //     });
        // });
        // $('.actions__item--back').find('a.btn2--back').wrapInner('<span></span>');
        // $("#div-autorenewfalse").hide();
        // var autoRenew = $("input[name='Account.AutoRenew']:checked").val();
        // if (autoRenew == "True") {
        //     $("#div-autorenewfalse").hide();
        //     $("#div-autorenewtrue").show();
        // }
        // else {
        //     $("#div-autorenewtrue").hide();
        //     $("#div-autorenewfalse").show();
        // }
    // });
});