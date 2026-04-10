//const { localstorage } = require("modernizr");
function setTripDaysExtensionButtons() {
    jQuery("#Policies_0__AMTUFETripExtension option").each(function (i, e) {
        (jQuery("<input type='radio' name='trip-days-extension' class='radio' />")
            .attr("value", jQuery(this).val())
            .attr("class", "trip-extension-input")
            .attr("id", this.value)
            /* .attr("checked", i == 0)*/
            .click(function () {
                //alert('button clicked');
                jQuery("#Policies_0__AMTUFETripExtension").val(jQuery(this).val());
                //alert(jQuery("#Policies_0__AMTUFETripExtension").val());
                //alert('calling change function');                
                $("#Policies_0__AMTUFETripExtension").change();

                var optionSelected = $("option:selected", $('#Policies_0__AMTUFETripExtension'));
                let selectedOptionValue = optionSelected.val();
                let selectedOptionPrice = $("#hdn-trip-ext-" + selectedOptionValue).val();
                if (typeof (selectedOptionPrice) == "undefined" || selectedOptionPrice == null || selectedOptionPrice == "") {
                    $("#selected-price").text("+ £0.00");
                    $('#selected-price-small-screen').text("+ £0.00");
                }
                else {
                    $("#selected-price").text("+ " + selectedOptionPrice);
                    $('#selected-price-small-screen').text("+ " + selectedOptionPrice);
                }

                $('input[type="radio"][name="trip-days-extension"]').each(function () {
                    if ($(this).is(':checked')) {
                        $(this).parent().addClass("selected-extension-button");
                        $(this).parent().removeClass("days-extented-style");
                    } else {
                        $(this).parent().removeClass("selected-extension-button");
                        $(this).parent().addClass("days-extented-style");
                    }
                });


            }).add($("<label class=" + (jQuery(this).val() === '17' ? "'col-lg-2 col-sm-2 mg-right-10 btn selected-extension-button'>" : "'col-lg-2 col-sm-2 mg-right-10 btn days-extented-style'>") +
                "<span>" + this.value + " Days" + "<svg class='chechbox-mark-check mg-left-10' width='19' height='18' viewBox='0 0 19 18' fill='' xmlns='http://www.w3.org/2000/svg'><path d='M1.5 7.82323L7.18878 14.0005L17.4286 2.26367' stroke ='white' stroke width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg >" + "</span>" + "</label>")))
            .appendTo("#trip-extensions-buttons-container");

        $('#trip-extensions-buttons-container label').prepend(function () {
            return $(this).prev("input")
        });

    });
}

function selectTripExtensionButton() {
    const selectedExtDays = $('select[name="Policies[0].AMTUFETripExtension"] option:selected').val();

    $('input[type="radio"][name="trip-days-extension"]').each(function () {
        if ($(this).val() === selectedExtDays) {
            $(this).parent().addClass("selected-extension-button");
            $(this).parent().removeClass("days-extented-style");
        } else {
            $(this).parent().removeClass("selected-extension-button");
            $(this).parent().addClass("days-extented-style");
        }
    });

    var optionSelected = $("option:selected", $('#Policies_0__AMTUFETripExtension'));
    let selectedOptionValue = optionSelected.val();
    let selectedOptionPrice = $("#hdn-trip-ext-" + selectedOptionValue).val();
    if (typeof (selectedOptionPrice) == "undefined" || selectedOptionPrice == null || selectedOptionPrice == "") {
        $("#selected-price").text("+ £0.00");
        $('#selected-price-small-screen').text("+ £0.00");
    }
    else {
        $("#selected-price").text("+ " + selectedOptionPrice);
        $('#selected-price-small-screen').text("+ " + selectedOptionPrice);
    }
}

function applyPromoCode() {
    //alert('applying promo code');
    if ($("#promo").valid()) {        
        var form = $("#form").serializeArray();
        var code = $('#Policies_0__PromotionCodes').val();
        if (code.trim().length === 0) {
            var promoInput = $("#Policies_0__PromotionCodes");
            $(promoInput).closest('.form-group').addClass('invalid-section');
            $(promoInput).closest('.form-group').find('.field-validation-valid').html(promoInput.data("val-custom"))
            $(promoInput).closest('.form-group').find('.invalid-msg').removeClass('hide');
            return;
        }

        form.push({
            name: "promoCode",
            value: code
        });

        $('input:checked').each(function () {
            const checkName = $(this).attr('name');

            for (var key in form) {
                const obj = form[key];
                if (obj.name === checkName) {
                    form[key].value = "true";
                }
            }
        });

        const selectedExtDays = $('select[name="Policies[0].AMTUFETripExtension"] option:selected').val();

        form = jQuery.param(form);
        $.ajax({
            url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/AdditionalCoversPromoCode?E=' + poms.getParameterByName("E"),
            type: 'POST',
            data: form,
            cache: false,
            success: function (partialViewResult) {
                $("#prmocodeerror").addClass("hide");
                if (partialViewResult === "") {
                    var promoInput = $("#Policies_0__PromotionCodes")
                    $(promoInput).closest('.form-group').addClass('invalid-section');
                    $(promoInput).closest('.form-group').find('.field-validation-valid').html(promoInput.data("val-custom"))
                    $(promoInput).closest('.form-group').find('.invalid-msg').removeClass('hide');
                }
                else {
                    $("#promocodeinput").hide();
                    $("[data-promo-code-val]").text(code);
                    $("#prmocodeapplied").removeClass("hide");
                    $("#addcoverslist").html(partialViewResult.AdditionalCoversList);
                    $("#tillrecipt").html(partialViewResult.TillRecipt)
                    $("#mobtillrecipt").html(partialViewResult.TillRecipt)
                    poms.recompileAngular('#addcoverslist');
                    poms.recompileAngular('#mobtillrecipt');
                    poms.recompileAngular('#tillrecipt');

                    setTripDaysExtensionButtons();

                    $('input[type="radio"][name="trip-days-extension"]').each(function () {
                        if ($(this).val() === selectedExtDays) {
                            //$(this).trigger('click');
                            //$(this).prop('checked', true);

                            $(this).parent().addClass("selected-extension-button");
                            $(this).parent().removeClass("days-extented-style");
                        } else {
                            //$(this).prop('checked', false);
                            $(this).parent().removeClass("selected-extension-button");
                            $(this).parent().addClass("days-extented-style");
                        }
                    });

                    var optionSelected = $("option:selected", $('#Policies_0__AMTUFETripExtension'));
                    let selectedOptionValue = optionSelected.val();
                    let selectedOptionPrice = $("#hdn-trip-ext-" + selectedOptionValue).val();
                    if (typeof (selectedOptionPrice) == "undefined" || selectedOptionPrice == null || selectedOptionPrice == "") {
                        $("#selected-price").text("+ £0.00");
                        $('#selected-price-small-screen').text("+ £0.00");
                    }
                    else {
                        $("#selected-price").text("+ " + selectedOptionPrice);
                        $('#selected-price-small-screen').text("+ " + selectedOptionPrice);
                    }
                }
            },
            error: function (data) {
                $("#prmocodeapplied").addClass("hide");
                var promoInput = $("#Policies_0__PromotionCodes");
                if (promoInput != null && promoInput != undefined && promoInput != "") {
                    $('#prmocodeerror').html(promoInput.data("val-unknown-error"));
                }
                else {
                    $('#prmocodeerror').html("An error occurred while applying promo code.");
                }
                $("#prmocodeerror").removeClass("hide");
            }
        });

        return false;
    }
}

$('#Policies_0__PromotionCodes').on('input', function () {
    $(this).closest('.form-group').removeClass('invalid-section');
    $(this).closest('.form-group').find('.invalid-msg').addClass('hide');
});

function openOnPageCol(id, version, policyWording) {
    var IsOneUnderwriter = $("#hdn_on_load_IsOneUnderwriter").val();
    var IsAggregator = $("#hdn_on_load_IsAggregator").val();
    if (version === "V3" || version === "V4" || version === "V5" || version === "V6" || version === "V7" || version === "V8" || version === "V9") {
        var page = "";
        switch (id) {
            case "already-covered-additional-activities": page = 17; break;
            case "additional-activities": page = 18; break;
            case "business-cover": page = 19; break;
            case "golf-cover": page = 19; break;
            case "cruise-cover": page = 37; break;
            case "gadget-cover": page = 15; break;
            case "natural-cover": page = 21; break;
            case "enhancedtrip-cover": page = 21; break;
        }
    }
    else if (version === "V10" && IsAggregator == "True" && IsOneUnderwriter == "True") {
        switch (id) {
            case "already-covered-additional-activities": page = 23; break;
            case "additional-activities": page = 1; break;
            case "gadget-cover": page = 20; break;
            case "enhancedtrip-cover": page = 10; break;
        }
    }
    else if (version === "V10" && IsAggregator == "False" && IsOneUnderwriter == "True") {
        switch (id) {
            case "already-covered-additional-activities": page = 24; break;
            case "additional-activities": page = 1; break;
            case "gadget-cover": page = 21; break;
            case "enhancedtrip-cover": page = 10; break;
            case "Covid19Cover": page = 10; break;
        }
    }
    return page !== "" ? policyWording + "#page=" + page : policyWording;
    return policyWording;
}

function openOnPageTif(id, selectedPackage, version, policyWording) {
    if (version === "V4") {
        if (selectedPackage !== null && selectedPackage !== "") {
            var page = "";
            switch (id) {
                case "already-covered-additional-activities": page = 29; break;
                case "additional-activities": page = 29; break;
                case "business-cover": page = 25; break;
                case "golf-cover": page = 23; break;
                case "gadget-cover": page = 24; break;
            }
            return page !== "" ? policyWording + "#page=" + page : policyWording;
        }
    }
    return policyWording;
}

function openOnPageErv(id, policyWording) {
    var page = "";
    var _PolicyWordingVersion = policyWording.split('Documents/', 10)[1].split('/')[0];

    if (_PolicyWordingVersion === "V3") {
        switch (id) {
            case "additional-activities": page = 85; break;
            case "golf-cover": page = 81; break;
            case "gadget-cover": page = 70; break;
            case "travel-disruption": page = 67; break;
        }
    }
    else if (_PolicyWordingVersion === "V6") {
        switch (id) {
            case "additional-activities": page = 83; break;
            case "golf-cover": page = 80; break;
            case "gadget-cover": page = 69; break;
            case "travel-disruption": page = 66; break;
        }
    }
    else if (_PolicyWordingVersion === "V8") {
        switch (id) {
            case "additional-activities": page = 86; break;
            case "golf-cover": page = 80; break;
            case "gadget-cover": page = 69; break;
            case "travel-disruption": page = 66; break;
        }
    }
    else if (_PolicyWordingVersion === "V9") {
        switch (id) {
            case "additional-activities": page = 87; break;
            case "golf-cover": page = 81; break;
            case "gadget-cover": page = 70; break;
            case "travel-disruption": page = 67; break;
        }
    }
    else {
        switch (id) {
            case "additional-activities": page = 81; break;
            case "golf-cover": page = 78; break;
            case "gadget-cover": page = 67; break;
        }
    }
    return page !== "" ? policyWording + "#page=" + page : policyWording;
}

$(document).ready(function () {
    var selectedPackage = $('#selectedPackage').val();
    window.localStorage.setItem("selectedPackage", selectedPackage);

    var code = $('#Policies_0__PromotionCodes').val();
    if (code == null || code == undefined || code == "") {
        $('.promo-codes').each(function () {
            var $cta = $(this).find('.promo-codes__cta');
            var $body = $(this).find('.promo-codes__body');
            $(this).find('[data-promo-code]').on('click', function () {
                $cta.addClass('hide');
                $body.removeClass('hide');
            });
        });
    }

    setTripDaysExtensionButtons();

    selectTripExtensionButton();
    // var app = angular.module('PomsApp', ['ngAria', 'smoothScroll']);
    // app.controller('SharedController', function ($scope, $compile) {
    //     $scope.price = 40.44
    // })
});



$(".btnSaveQuoteOk").click(function (e) {
    var email_address = $("#txtEmail").val();
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (!email_regex.test(email_address)) {
        $("#errorsection").addClass("invalid-section");
        $("#emailError").removeClass("hide");
        e.preventDefault();
        return false;
    }

    $("#errorsection").removeClass("invalid-section");
    $("#emailError").css("hide");
    $(".btnSaveQuote").css("display", "none");

    var form = $("form").serializeArray();
    form = jQuery.param(form);
    $.ajax({
        url: '/web/travel/quote/savequote?E=' + poms.getParameterByName("E") + "&page=a&email=" + email_address,
        type: 'POST',
        data: form,
        cache: false,
        success: function (evt) {
            $(".divSaveQuote").html("");
        },
        error: function (evt) {
            $(".btnSaveQuote").css("display", "block");
        }
    });
});

$('#additionalcovers-next').on('click', function () {
   // alert('Next Click');
    SetSelectedCoversList();
});

$('#mta-additionalcovers-next').on('click', function () {
    SetSelectedCoversList();
});

function SetSelectedCoversList() {
//alert('in SetSelectedCoversList');
    var selectedCoversList = [];

    $('input:checked').each(function () {
        var selectedCoverType = $(this).parent('label').parent('span').parent('span').parent('span').find('div.coverage-accordion-title').text().trim();
        
        selectedCoversList.push(selectedCoverType);
        $(this).removeAttr('disabled');
    });

    var selectedAdditionalCovers = selectedCoversList.join("|");

    window.localStorage.setItem("selectedAdditionalCovers", selectedAdditionalCovers);
    //window.localStorage.setItem("totalPriceAdditionalCovers", '50');
    //alert('Total: ' + $('#prices').children('.summary__value'));

    //window.localstorage.setItem("totalPriceAdditionalCovers", $('#prices').children('.summary__value').text());
}

$("#txtEmail").on('input', function (e) {
    var email_address = $("#txtEmail").val();
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/i;

    if (email_address.length > 0) {
        if (!email_regex.test(email_address)) {
            $("#errorsection").addClass("invalid-section");
            $("#emailError").removeClass("hide");
        }
        else {
            $("#errorsection").removeClass("invalid-section");
            $("#emailError").addClass("hide");
        }
    }
    else {
        $("#errorsection").removeClass("invalid-section");
        $("#emailError").addClass("hide");
    }
});

//when radio button is checked: yes/no, who to cover options
$('input:radio').click(function () {
    $('input:checked').parent().addClass("day-button-on-check");
    $('input:not(:checked)').parent().removeClass("day-button-on-check");
    
});



//when trip extension day is selected add/remove style of parent label
$('input[type="radio"][name="trip-days-extension"]').change(function () {
    
    $("input[name='trip-days-extension']").parent().removeClass("selected-extension-button");
    $("input[name='trip-days-extension']").parent().addClass("days-extented-style");
    $("input[name='trip-days-extension']:checked").parent().addClass("selected-extension-button");
    $("input[name='trip-days-extension']:checked").parent().removeClass("days-extented-style");
   
});

$('#Policies_0__AMTUFETripExtension').on('change', function (e) {
    
    var optionSelected = $("option:selected", this);
    let selectedOptionValue = optionSelected.val();
    let selectedOptionPrice = $("#hdn-trip-ext-" + selectedOptionValue).val();
    if (typeof (selectedOptionPrice) == "undefined" || selectedOptionPrice == null || selectedOptionPrice == "") {
        $("#selected-price").text("+ £0.00");
        $('#selected-price-small-screen').text("+ £0.00");
    }
    else {
        $("#selected-price").text("+ " + selectedOptionPrice);
        $('#selected-price-small-screen').text("+ " + selectedOptionPrice);
    }

    $('input[type="radio"][name="trip-days-extension"]').each(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected-extension-button");
            $(this).parent().removeClass("days-extented-style");
        } else {
            $(this).parent().removeClass("selected-extension-button");
            $(this).parent().addClass("days-extented-style");
        }
    });
});