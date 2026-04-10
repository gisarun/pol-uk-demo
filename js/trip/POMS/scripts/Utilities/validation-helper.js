'use strict';

// Declare ValidationHelper 'class' - JS doesn't really have classes, only objects, and a function is an object.
// Yes it's confusing - but Google is your friend.
// Tom was here
function ValidationHelper(name) {
    this.name = name;
    this.activated = false;

    this.activationFuncs = [];
    this.deactivationFuncs = [];
}

ValidationHelper.prototype.Activate = function () {
    this.activated = true;
    this.activationFuncs.forEach(function (func) {
        func();
    });
};

ValidationHelper.prototype.Deactivate = function () {
    this.activated = false;
    this.deactivationFuncs.forEach(function (func) {
        func();
    });
};

// Element - the element to require or not
// Condition - a callback encapsulating the condition which will resolve to true or false
ValidationHelper.prototype.RequireIf = function (obj) {
    var field = obj.field;
    var condition = obj.condition;
    var triggers = obj.triggers;
    var self = this;

    var activationFunc = function () {
        triggers.forEach(function (trigger) {
            trigger(function () {
                if (self.activated && condition()) {
                    field.attr('data-val-required', 'true');
                } else {
                    field.attr('data-val-required', 'false');
                }
            });
        });
    };

    var deactivationFunc = function () {
        child.attr('data-val-required', 'false');
    }

    if (this.activated) {
        activationFunc();
    } else {
        deactivationFunc();
    }

    this.activationFuncs.push(activationFunc);
    this.deactivationFuncs.push(deactivationFunc);
};

$(document).ready(function () {
    $("#email-error-section").css("display", "none");
    var oldemail = ""; var errorCount = 0;
    if (location.href.indexOf("yourdetail") > 0) {
        CheckEmailExists();
        document.getElementById("Account_Email").onblur = function () {
            CheckEmailExists();
        };

        if ($("#yourdetails-next").length > 0) {
            document.getElementById("yourdetails-next").onclick = function (e) {
                if (errorCount === 1 || $("#invalid-message-email-div").html().toString() !== "") {
                    $('#Account_Email').focus();
                    e.preventDefault();
                    return false;
                }
                SetYourDetailsPageValues();
                return true;
            };
        }
        else if ($("#renewal-yourdetails-next").length > 0) {
            document.getElementById("renewal-yourdetails-next").onclick = function (e) {
                SetYourDetailsPageValues();
                return true;
            };
        }
    }

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

        var billingAddressEmail = "";
        var billingAddressPrimaryPhone = "";
        var billingAddressLine1 = "";
        var billingAddressLine2 = "";
        var billingAddressCity = "";
        var billingAddressPostCode = "";

        var wantBillingInfo = $("input[name='radio-NeedBillingAddress']:checked").val();
        if (wantBillingInfo === "No") {
            window.localStorage.setItem("IsCardHolderSame", "No");
            billingAddressPrimaryPhone = $("#Billing_Address_Mobile").val().trim();
            billingAddressEmail = $("#Billing_Address_Email").val().trim();
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

        window.localStorage.setItem("HPP_CUSTOMER_EMAIL", billingAddressEmail);
        window.localStorage.setItem("HPP_CUSTOMER_PHONENUMBER_MOBILE", billingAddressPrimaryPhone);
        window.localStorage.setItem("HPP_BILLING_STREET1", billingAddressLine1);
        window.localStorage.setItem("HPP_BILLING_STREET2", billingAddressLine2);
        window.localStorage.setItem("HPP_BILLING_CITY", billingAddressCity);
        window.localStorage.setItem("HPP_BILLING_POSTALCODE", billingAddressPostCode);
        window.localStorage.setItem("HPP_Challenge_Request_Indicator", challengeRequestIndicator);
    }

    function CheckEmailExists() {
        if (document.getElementsByClassName("checkEmailExists").length > 0) {
            if ($("#Account_Email").val() !== '' && oldemail !== $("#Account_Email").val()) {
                oldemail = $("#Account_Email").val();
                var form = $("#Account_Email").serializeArray();
                form = jQuery.param(form);
                $.ajax({
                    url: '/web/travel/account/existinguseremail?E=' + poms.getParameterByName("E"),
                    type: 'GET',
                    data: form,
                    cache: false,
                    success: function (partialViewResult) {
                        if (partialViewResult !== undefined && partialViewResult.toString().length > 0) {
                            $("#email-error-section").css("display", "block");
                            $("#after-email-text").css("display", "none");
                            $("#invalid-message-email-div").html(partialViewResult);
                            $('#Account_Email').focus();
                            errorCount = 1;
                        }
                        else {
                            $("#invalid-message-email-div").html("");
                            $("#email-error-section").css("display", "none");
                            $("#after-email-text").css("display", "block");
                            errorCount = 0;
                        }
                    },
                    error: function () {
                    }
                });
            }
        }
    }

    $(".btn-client-submit").click(function () {
        var clickforSelfQuote = '/web/travel/quote/tripdetails?Client=1';
        $("#nextstep").val(clickforSelfQuote);
        return true;
    });
    $(".btn-noclient-submit").click(function () {
        var clickforSelfQuote = '/web/travel/quote/tripdetails';
        $("#nextstep").val(clickforSelfQuote);
        return true;
    });
});