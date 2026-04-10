app.controller('SharedController', function ($scope, $compile) {
    $(document).ready(function () {
    
        $scope.Policies = [{}];
        if(window.localStorage.getItem("tripDetailsData") != " "){
            $scope.Policies = JSON.parse(window.localStorage.getItem("tripDetailsData"));
        }
        $scope.price;
        $scope.covers=[];
        $scope.tripExtension;
        $scope.showOptionalLabel;
        $scope.selectedCoveragesCount = 0;
        $scope.selectedTECount = 0;
        $scope.addedOptionalTE = false;
        $scope.hideOptionalLabel;
        $scope.policyType = $scope.Policies[0].PolicyType;
        $scope.gadgetCover_val=window.localStorage.getItem("Gadget_cover")??0;
        $scope.excessWaiver_val=window.localStorage.getItem("Excess_waiver")??0;
        $scope.sportsandActivities_val=window.localStorage.getItem("Sports_and_Activities")??0;
        $scope.tripDisruptionCover_val=window.localStorage.getItem("Trip_Disruption_cover")??0;
        $scope.covidCover_val = window.localStorage.getItem("Covid-19_Cover")??0;
        $scope.postCodeValue = window.localStorage.getItem("postCodeValue")??0;
       if(window.localStorage.getItem("title") != null){
            $('#Policies_0__Risk_0__Traveller_Title').val(window.localStorage.getItem("title")).change();
        }

        if(window.localStorage.getItem("marketingContactType")!=null){
            $('#Account_MarketingContactType').val(window.localStorage.getItem("marketingContactType")).change();
            // $('#Account_TermsAndConditions').val(); 
            document.getElementById("Account_TermsAndConditions").checked = true;
        }
    
        if(window.localStorage.getItem("firstName") != null){
            $('#Policies_0__Risk_0__Traveller_FirstName').val(window.localStorage.getItem("firstName"));
        }
        if(window.localStorage.getItem("lastName") != null){
            $('#Policies_0__Risk_0__Traveller_LastName').val(window.localStorage.getItem("lastName"));
        }
        if(window.localStorage.getItem("primaryPhone") != null){
            $('#Account_PrimaryPhone').val(window.localStorage.getItem("primaryPhone"));
        }
        if(window.localStorage.getItem("mobilePhone") != null){
            $('#Account_MobilePhone').val(window.localStorage.getItem("mobilePhone"));
        }
        if(window.localStorage.getItem("email") != null){
            $('#Account_Email').val(window.localStorage.getItem("email"));
        }
        if(window.localStorage.getItem("postCodeValue") != null){
            $('#AddressLookup_Address_PostCode').val(window.localStorage.getItem("postCodeValue"));
        }
        if(window.localStorage.getItem("branchCode") != null){
            $('#Account_BranchCode').val(window.localStorage.getItem("branchCode"));
        }
        if(window.localStorage.getItem("IsCardHolderSame") == 'Yes'){
            $('#NeedBillingAddress-True').prop("checked", true)
        }
        if(window.localStorage.getItem("IsCardHolderSame") == 'No'){
            $('#NeedBillingAddress-False').prop("checked", true)
        }
        if(window.localStorage.getItem("marketingMethodEmail") == 'true'){
            $('#Account_MarketingMethodEmail').prop("checked", true)
        }
        if(window.localStorage.getItem("marketingMethodSms") == 'true'){
            $('#Account_MarketingMethodSms').prop("checked", true)
        }
        if(window.localStorage.getItem("marketingMethodPhone") == 'true'){
            $('#Account_MarketingMethodPhone').prop("checked", true)
        }
        if(window.localStorage.getItem("marketingMethodMail") == 'true'){
            $('#Account_MarketingMethodMail').prop("checked", true)
        }

        $("#Account_Address_County").attr("required", "true");
        $('#Account_Address_County').each(function (index) {
            $(this).rules("add", {
                messages: {
                    required: "Please enter address details"
                }
            });
        });
        $('.actions__item--back').find('a.btn2--back').wrapInner('<span></span>');
        $("#div-autorenewfalse").hide();
        var autoRenew = $("input[name='Account.AutoRenew']:checked").val();
        if (autoRenew == "True") {
            $("#div-autorenewfalse").hide();
            $("#div-autorenewtrue").show();
        }
        else {
            $("#div-autorenewtrue").hide();
            $("#div-autorenewfalse").show();
        }
    });
    
    function CytiPayment() {
        if ($('#form').valid()) {
            $.ajax({
                url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/CytiPaymentConfirmation?E=' + poms.getParameterByName("E"),
                type: 'POST',
                data: {},
                cache: false,
                success: function (partialViewResult) {
                    $('#global-modal').html(partialViewResult);
                    $('#myModal').modal('toggle');
                },
                error: function (data) {
                }
            });
        }
    }
    
    function showSpinner() {
        SetYourDetailsPageValues();
        $('#spinner').removeClass("hidden");
        $('#text').addClass("hidden");
        //$('#cytibuttons').addClass("hidden");
        $('#cytiCancel').addClass("hidden");
        $('#cytiNext').addClass("hidden");
        $('#form').submit();
        return false;
    }
    
    $("#yourdetails-next").click(function () {
        SetYourDetailsPageValues();
    });
    
    function SetYourDetailsPageValues() {
        var title = $('#Policies_0__Risk_0__Traveller_Title').val();
        var firstName = $('#Policies_0__Risk_0__Traveller_FirstName').val();
        var lastName = $('#Policies_0__Risk_0__Traveller_LastName').val();
        var primaryPhone = $('#Account_PrimaryPhone').val();
        var mobilePhone = $('#Account_MobilePhone').val();
        var email = $('#Account_Email').val();
        var line1 = $('#Account_Address_Line1').val();
        var line2 = $('#Account_Address_Line2').val();
        var city = $('#Account_Address_City').val();
        var county = $('#Account_Address_County').val();
        var postCode = $('#Account_Address_PostCode').val();
        var marketingContactType = $('#Account_MarketingContactType').val();
        var branchCode = $('#Account_BranchCode').val();
    
        var selectedMarketingMethod = "";
        var marketingMethodMail = $('#Account_MarketingMethodMail').prop('checked');
        var marketingMethodEmail = $('#Account_MarketingMethodEmail').prop('checked');
        var marketingMethodSms = $('#Account_MarketingMethodSms').prop('checked');
        var marketingMethodPhone = $('#Account_MarketingMethodPhone').prop('checked');
        var postCodeValue = $('#AddressLookup_Address_PostCode').val();
        var billingAddressEmail = "";
        var billingAddressPrimaryPhone = "";
        var billingAddressLine1 = "";
        var billingAddressLine2 = "";
        var billingAddressCity = "";
        var billingAddressPostCode = "";
    
        var wantBillingInfo = $("input[name='radio-NeedBillingAddress']:checked").val();
        if (wantBillingInfo === "No") {
            window.localStorage.setItem("IsCardHolderSame", "No");
            billingAddressEmail = $("#Billing_Address_Email").val().trim();
            billingAddressPrimaryPhone = $("#Billing_Address_Mobile").val().trim();
            billingAddressLine1 = $("#Billing_Address_Line1").val().trim();
            billingAddressLine2 = $("#Billing_Address_Line2").val().trim();
            billingAddressCity = $("#Billing_Address_City").val().trim();
            billingAddressPostCode = $("#Billing_Address_PostCode").val().trim();
        }
        else {
            window.localStorage.setItem("IsCardHolderSame", "Yes");
            billingAddressEmail = email;
            billingAddressPrimaryPhone = mobilePhone;
            billingAddressLine1 = line1;
            billingAddressLine2 = line2;
            billingAddressCity = city;
            billingAddressPostCode = postCode;
        }
    
        if (marketingMethodMail) {
            selectedMarketingMethod = "Post";
        }
        else if (marketingMethodEmail) {
            selectedMarketingMethod = "Email";
        }
        else if (marketingMethodSms) {
            selectedMarketingMethod = "Text";
        }
        else {
            selectedMarketingMethod = "Phone";
        }
    
        var selected = $('#Account_PostDocumentIndicator').val();
        var postDocumentIndicator = "";
        if (selected == "true") {
            postDocumentIndicator = "true";
        }
        else {
            postDocumentIndicator = "false";
        }
    
        window.localStorage.setItem("postCodeValue", postCodeValue);
        window.localStorage.setItem("postDocumentIndicator", postDocumentIndicator);
        window.localStorage.setItem("marketingMethodMail", marketingMethodMail);
        window.localStorage.setItem("marketingMethodEmail", marketingMethodEmail);
        window.localStorage.setItem("marketingMethodSms", marketingMethodSms);
        window.localStorage.setItem("marketingMethodPhone", marketingMethodPhone);
        window.localStorage.setItem("selectedMarketingMethod", selectedMarketingMethod);
    
        window.localStorage.setItem("branchCode", branchCode);
        window.localStorage.setItem("marketingContactType", marketingContactType);
        window.localStorage.setItem("postCode", postCode);
        window.localStorage.setItem("county", county);
        window.localStorage.setItem("city", city);
        window.localStorage.setItem("line2", line2);
        window.localStorage.setItem("line1", line1);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("mobilePhone", mobilePhone);
        window.localStorage.setItem("primaryPhone", primaryPhone);
        window.localStorage.setItem("lastName", lastName);
        window.localStorage.setItem("firstName", firstName);
        window.localStorage.setItem("title", title);
    
        window.localStorage.setItem("HPP_CUSTOMER_PHONENUMBER_MOBILE", billingAddressPrimaryPhone);
        window.localStorage.setItem("HPP_CUSTOMER_EMAIL", billingAddressEmail);
        window.localStorage.setItem("HPP_BILLING_STREET1", billingAddressLine1);
        window.localStorage.setItem("HPP_BILLING_STREET2", billingAddressLine2);
        window.localStorage.setItem("HPP_BILLING_CITY", billingAddressCity);
        window.localStorage.setItem("HPP_BILLING_POSTALCODE", billingAddressPostCode);
    }
    function BillingAddressToggle() {
        $("input[name='radio-NeedBillingAddress']").click(function () {
            var wantBillingInfo = $("input[name='radio-NeedBillingAddress']:checked").val();
            if (wantBillingInfo === "Yes") {
                $("input[name='Account.MobilePhone']").attr("required", "true");
                $("#div-billingAddress").addClass("hide");
            }
            else {
                $("input[name='Account.MobilePhone']").removeAttr("required");
                $("#div-billingAddress").removeClass("hide");
            }
        });
    }      
    function AutoRenewToggle() {
        $("input[type='radio']").change(function () {
            var autoRenew = $("input[name='Account.AutoRenew']:checked").val();
            if (autoRenew == "True") {
                $("#div-autorenewfalse").hide();
                $("#div-autorenewtrue").show();
            }
            else {
                $("#div-autorenewtrue").hide();
                $("#div-autorenewfalse").show();
            }
        });
    }
    });