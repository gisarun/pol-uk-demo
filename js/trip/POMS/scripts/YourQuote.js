$(document).ready(function () {
    initBaseQuoteTable();

    yourQuoteCoverageInit();

    var code = $('#Policies_0__PromotionCodes').val();
    if (code == null || code == undefined || code == "") {
        $('.promo-code').each(function () {
            var $cta = $(this).find('.promo-code__cta');
            var $body = $(this).find('.promo-code__body');
            $(this).find('[data-promo-code]').on('click', function () {
                $cta.addClass('hide');
                $body.removeClass('hide');
            });
        });
    }
});


function yourQuoteCoverageInit() {
    $('.your-quote__coverage').each(function () {
        var visibeLimit = 6;
        var $parent = $(this).parents('.your-quote').first()
        var $parent2 = $(this).parents('.your-quote__col').first();
        $(this).find('[data-coverage-item="1"]').slice(visibeLimit).attr('data-coverage-item', '2');

        $(this).after('<div class="your-quote__seemore mg-left-30"><span data-coverage-expand>Show more</span><span data-coverage-collapse>Show less</span></div>');

        $parent2.find('[data-coverage-expand]').on('click', function () {
            $parent.addClass('your-quote--expanded');
            $parent2.addClass('your-quote__col--expanded');
        });

        $parent2.find('[data-coverage-collapse]').on('click', function () {
            $parent2.removeClass('your-quote__col--expanded');
            if (window.innerWidth > "360") {
                $parent.removeClass('your-quote--expanded');
                $('.your-quote__col--expanded').removeClass('your-quote__col--expanded');
                
            }
            else {
                if ($parent.find('.your-quote__col--expanded').length === 0) {
                    $parent.removeClass('your-quote--expanded');
                }
            }
            
        });
    });

    $('.your-quote-upgrade__coverage').each(function () {
        var visibeLimit = 6;
        var $parent = $(this).parents('.your-quote-upgrade').first();
        var $parent2 = $(this).parents('.your-quote-upgrade__col').first();
        $(this).find('[data-coverage-item="3"]').slice(visibeLimit).attr('data-coverage-item', '4');

        $(this).after('<div class="your-quote-upgrade__seemore text-center"><span data-coverage-expand>Show more</span><span data-coverage-collapse>Show less</span></div>');

        $parent2.find('[data-coverage-expand]').on('click', function () {
            $parent.addClass('your-quote-upgrade--expanded');
            $parent2.addClass('your-quote-upgrade__col--expanded');
        });

        $parent2.find('[data-coverage-collapse]').on('click', function () {
            $parent2.removeClass('your-quote-upgrade__col--expanded');
            if (window.innerWidth > "360") {
                $parent.removeClass('your-quote-upgrade--expanded');
                $('.your-quote-upgrade__col--expanded').removeClass('your-quote-upgrade__col--expanded');

            }
            else {
                if ($parent.find('.your-quote-upgrade__col--expanded').length === 0) {
                    $parent.removeClass('your-quote-upgrade--expanded');
                }
            }

        });
    });

}

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
        url: '/web/travel/quote/savequote?E=' + poms.getParameterByName("E") + "&page=y&email=" + email_address,
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

function initBaseQuoteTable() {
    $('.fixed-height').each(function () {
        $(this).children(':first').height($(this).height());
    })
    $(window).resize(function () {
        initBaseQuoteTable();
    })
}

function applyPromoCode() {
    if ($("#promo").valid()) {
        var form = $("#promo").serializeArray();
        var code = $('#Policies_0__PromotionCodes').val();
        form = jQuery.param(form);
        $.ajax({
            url: '/' + poms.getChannel() + '/' + poms.getLineOfBusiness() + '/' + poms.getRoute() + '/QuotePromoCode?E=' + poms.getParameterByName("E"),
            type: 'POST',
            data: form,
            cache: false,
            success: function (partialViewResult) {
                $("#prmocodeerror").addClass("hide");
                if (partialViewResult === "") {
                    var promoInput = $("#Policies_0__PromotionCodes");
                    $(promoInput).closest('.form-group').addClass('invalid-section');
                    $(promoInput).closest('.form-group').find('.field-validation-valid').html(promoInput.data("val-custom"))
                    $(promoInput).closest('.form-group').find('.invalid-msg').removeClass('hide');
                }
                else {
                    // $("#quotetable").slideUp();
                    $("#quotetable").html(partialViewResult);
                    //$("#quotetable").slideDown();
                    poms.recompileAngular('#quotetable');
                    yourQuoteCoverageInit();
                    $("#promocodeinput").hide();
                    $("[data-promo-code-val]").text(code);
                    $("#prmocodeapplied").removeClass("hide");
                    // Update header block
                    //var price = $.trim($('#quotetable').find('.your-quote__price').first().text());
                    var price = amnt;
                    $('.header-funnel__title').text('Cover available from ' + price);
                    if ($('#tripupgrade').length) {
                        var annualPrice = $.trim($('.your-quote--upgrade').find('.your-quote__price').first().text());
                        var priceDiff = parseFloat(annualPrice.substring(1)) - parseFloat(price.substring(1));
                        $('.header-funnel__sub-header-text').text('Upgrade to an Annual policy for just £' + priceDiff.toFixed(2) + ' more');
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

$("td").hover(function () {
    var row = $(this).closest('tr');
    var column = ($(this).prevAll().length) + 1;
    $('table td:nth-child(' + column + ')').addClass('hover');
    row.addClass("hover");
}, function () {
    var row = $(this).closest('tr');
    var column = ($(this).prevAll().length) + 1;
    $('table td:nth-child(' + column-- + ')').removeClass('hover');
    row.removeClass("hover");
});

function annualPopup(buttonId) {
    $('#annualPopupButton').val(buttonId);
    $('#annualPopup').modal('toggle');
    return false;
}

function annualButtonClick() {
    var buttonId = $('#annualPopupButton').val();
    $('#' + buttonId + '').attr('onclick', 'return true');
    $('#annualPopup').modal('toggle');
    $('#' + buttonId + '').click();
}

$("#txtEmail").on('input', function (e) {
    var email_address = $("#txtEmail").val();
    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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