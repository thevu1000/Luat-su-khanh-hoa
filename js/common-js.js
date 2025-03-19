var validateBeforePostback = false;
function CheckPageIsValid() {
    if (validateBeforePostback) {
        Page_IsValid = jQuery("#aspnetForm").validationEngine("validate", {
            promptPosition: "topRight",
            autoHidePrompt: false,
            scroll: false,
            showOneMessage: true
        });
        return Page_IsValid
    } else {
        jQuery("#aspnetForm").validationEngine("detach")
    }
    return true
}
function DisableValidateBeforePostback() {
    validateBeforePostback = false
}
function EnableValidateBeforePostback() {
    validateBeforePostback = true
}
function HideAllValidatorPrompts() {
    jQuery("#aspnetForm").validationEngine("hideAll")
}
function AttachValidation() {
    jQuery('div[id$="pnlContact"]').validationEngine("attach", {
        promptPosition: "topRight",
        scroll: false,
        showOneMessage: true
    })
}
function ValidateEditContact() {
    return Validate(jQuery('div[id$="pnlContact"]'))
}
function ValidateLogin() {
    return Validate(jQuery('div[id$="pnlContact"]'))
}
function Validate(elem) {
    return jQuery(elem).validationEngine("validate", {
        promptPosition: "topRight",
        scroll: false,
        showOneMessage: true
    })
}
var browserUserAgentHeader = navigator.userAgent.toLowerCase();
function IsAppleMobile() {
    return browserUserAgentHeader.indexOf("iphone") != -1 || browserUserAgentHeader.indexOf("ipod") != -1 || browserUserAgentHeader.indexOf("ipad") != -1
}
function IsAndroid() {
    return browserUserAgentHeader.indexOf("android") != -1
}
function IsMobileBrowser() {
    return browserUserAgentHeader.indexOf("iphone") != -1 || browserUserAgentHeader.indexOf("ipod") != -1 || browserUserAgentHeader.indexOf("ipad") != -1 || browserUserAgentHeader.indexOf("android") != -1 || browserUserAgentHeader.indexOf("bada") != -1 || browserUserAgentHeader.indexOf("zunewp7") != -1 || browserUserAgentHeader.indexOf("webos") != -1
}
function IsSupportFlash() {
    var flashVersion = swfobject.getFlashPlayerVersion();
    return flashVersion.major > 8
}
jQuery(function() {
    if (typeof $.fn.mmenu === "function") {
        var ul = jQuery("#menu-menu-header").clone();
        ul.find("*").removeClass().removeAttr();
        ul.appendTo(jQuery("#menu"));
        jQuery("#menu").mmenu({
            offCanvas: {
                position: "front"
            }
        }).find("ul.hide").removeClass("hide");
        var delay = function() {
            var timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms)
            }
        }();
        function HideMMenu() {
            if (jQuery(window).width() > 767)
                jQuery("#menu").data("mmenu").close()
        }
        jQuery(window).resize(function() {
            delay(HideMMenu, 400)
        })
    }
    jQuery("#tg-language").click(function() {
        var l = parseFloat(jQuery("#language").css("left"));
        if (l === -354) {
            jQuery("#tg-language .fa").removeClass("fa-arrow-right").addClass("fa-arrow-left");
            jQuery("#language").animate({
                left: -5
            })
        } else {
            jQuery("#tg-language .fa").removeClass("fa-arrow-left").addClass("fa-arrow-right");
            jQuery("#language").animate({
                left: -354
            })
        }
    })
});
