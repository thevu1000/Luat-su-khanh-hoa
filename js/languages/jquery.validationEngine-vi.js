(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Phải nhập thông tin cho trường này",
                    "alertTextCheckboxMultiple": "* Vui lòng chọn một",
                    "alertTextCheckboxe": "* Vui lòng chọn",
                    "alertTextDateRange": "* Phải nhập dữ liệu cho cả hai trường"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Không hợp lệ ",
                    "alertText2": "Khoảng ngày"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Không hợp lệ ",
                    "alertText2": "Khoảng giờ"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Cho phép tối thiểu ",
                    "alertText2": " ký tự"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Cho phép tối đa ",
                    "alertText2": " ký tự"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* Bạn phải điền thông tin cho một trong các trường sau"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Giá trị tối thiểu là "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Giá trị tối đa là "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Khoảng thời gian đến "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Ngày đã qua "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Cho phép tối đa ",
                    "alertText2": " lựa chọn"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Vui lòng chọn ",
                    "alertText2": " lựa chọn"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Không phù hợp"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Số điên thoại không đúng"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                    "alertText": "* Địa chỉ email không đúng"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Không phải là số nguyên"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Không phải số thập phân"
                },
                "date": {
                "regex": /^(?:(?:(?:0?[1-9]|1\d|2[0-8])\/(?:0?[1-9]|1[0-2]))\/(?:(?:1[6-9]|[2-9]\d)\d{2}))$|^(?:(?:(?:31\/0?[13578]|1[02])|(?:(?:29|30)\/(?:0?[1,3-9]|1[0-2])))\/(?:(?:1[6-9]|[2-9]\d)\d{2}))$|^(?:29\/0?2\/(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26]))))$/,
                    "alertText": "* Ngày không hợp lệ theo format [dd/MM/yyyy]"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Địa chỉ IP không đúng"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL không đúng"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Chỉ nhập số"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Chỉ nhập chữ"
                },
                "onlyLetterNumber": {
                "regex": /^[0-9a-zA-ZáảãàạÁÀẢÃẠắẳẵằặăẮẰẲẴẶĂâấẫẩầậẤẨẪẦẬÂđĐêếềểễệÊẾỀỄỂỆíìỉĩịÍÌỊỈĨóòọỏõỎÓÒỌÕôổốồộỗÔỐỒỘỖỔởơớờỡợỞỚỜỠỢƠỷýỳỹỵÝỲỴỶỸ ]+$/,
                    "alertText": "* Chỉ nhập chữ hoặc số"
                }
            };
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);