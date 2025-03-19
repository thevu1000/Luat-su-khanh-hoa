var create_js = function() {
    return {}
}();
var js_fw = function() {
    "use strict";
    return {
        go_element: go_element,
        go_top: go_top,
        open_popup: open_popup,
        setImage: setImage
    };
    function go_element(element, delay, verticalOffset) {
        var offset = $(element).offset()
          , offsetTop = offset.top + verticalOffset;
        delay = typeof delay !== "undefined" ? delay : 1e3;
        verticalOffset = typeof verticalOffset !== "undefined" ? verticalOffset : 0;
        $("html,body").animate({
            scrollTop: offsetTop
        }, delay)
    }
    function go_top(delay) {
        delay = typeof delay !== "undefined" ? delay : 1e3;
        $("html,body").animate({
            scrollTop: 0
        }, delay)
    }
    function open_popup(params) {
        if (typeof $.magnificPopup === "undefined") {
            alert("popup: magnificPopup not found!");
            return false
        } else {
            var o = $.extend({
                rel: "",
                type: "inline",
                width: 800,
                removeDelay: 300,
                closeOnBg: true,
                enableEscapeKey: true,
                alignTop: false,
                showCloseBtn: true,
                closeBtnInside: true,
                effect: "fromTop",
                overflowY: "auto",
                fixedBgPos: "fixed",
                index: null,
                beforeOpen: function() {
                    this.st.mainClass = o.effect
                },
                open: function() {},
                beforeClose: function() {},
                close: function() {},
                afterClose: function() {}
            }, params);
            var $element = $(o.rel);
            if ($element.length > 0) {
                $element.css({
                    maxWidth: o.width
                });
                $.magnificPopup.open({
                    removalDelay: o.removeDelay,
                    enableEscapeKey: o.enableEscapeKey,
                    alignTop: o.alignTop,
                    overflowY: o.overflowY,
                    fixedBgPos: o.fixedBgPos,
                    showCloseBtn: o.showCloseBtn,
                    closeBtnInside: o.closeBtnInside,
                    closeOnBgClick: o.closeOnBg,
                    index: o.index,
                    callbacks: {
                        beforeOpen: o.beforeOpen,
                        open: o.open,
                        beforeClose: o.beforeClose,
                        close: o.close,
                        afterClose: o.afterClose
                    },
                    items: {
                        src: o.rel,
                        type: "inline"
                    }
                })
            } else {
                alert("popup: rel not found!");
                return false
            }
        }
    }
    function setImage(elementData, elementImage) {
        elementData.each(function() {
            var dataImg = $(this).attr("data-img");
            $(this).find(elementImage).attr("style", "background-image:url('" + dataImg + "')")
        })
    }
}();
(function() {
    "use strict";
    var mdl = $("#mdl-menu");
    var menuHome = $("#home-page #mdl-menu");
    var menuInsidePage = $("#inside-page #mdl-menu");
    $(document).ready(function() {
        setImageUser();
        toggleSub();
        scrollMenuHome();
        toggleMenuMb();
        setHeightBanner();
        scrollMenuMb()
    });
    $(window).resize(function() {
        setHeightBanner();
        scrollMenuMb()
    });
    function setHeightBanner() {
        var heightCurrent = $(window).outerHeight();
        $("#mdl-home").find(".banner").outerHeight(heightCurrent);
        scrollChangeColor()
    }
    function setImageUser() {
        var wrapUser = $(".logined");
        wrapUser.each(function() {
            var dataImg = $(this).attr("data-img");
            $(this).find(".user").attr("style", "background-image:url('" + dataImg + "')")
        })
    }
    function toggleSub() {
        var imageUser = $(".logined .user")
          , subUser = $(".logined .wrap-sub-user");
        imageUser.on("click", function(e) {
            e.preventDefault();
            if ($(this).hasClass("is-open")) {
                $(this).removeClass("is-open");
                $(this).addClass("is-close");
                subUser.css({
                    visibility: "hidden",
                    opacity: 0
                })
            } else {
                $(this).addClass("is-open");
                $(this).removeClass("is-close");
                subUser.css({
                    visibility: "visible",
                    opacity: 1
                })
            }
        });
        subUser.on("mouseleave", function() {
            imageUser.addClass("is-close");
            imageUser.removeClass("is-open");
            $(this).css({
                visibility: "hidden",
                opacity: 0
            })
        })
    }
    function scrollMenuHome() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 30) {
                mdl.addClass("fixed");
                mdl.css({
                    top: 0
                })
            } else {
                mdl.removeClass("fixed");
                mdl.css({
                    top: 30
                })
            }
        });
        $(window).each(function() {
            if ($(this).scrollTop() > 30) {
                mdl.addClass("fixed");
                mdl.css({
                    top: 0
                })
            } else {
                mdl.removeClass("fixed");
                mdl.css({
                    top: 30
                })
            }
        })
    }
    function scrollChangeColor() {
        if ($("#page-home").length) {
            var heightBanner = $("#mdl-home .banner").outerHeight();
            $(window).scroll(function() {
                if ($(this).scrollTop() > heightBanner - 61) {
                    mdl.css({
                        backgroundColor: "#443846"
                    })
                } else {
                    mdl.css({
                        backgroundColor: "transparent"
                    })
                }
            });
            if ($(window).width() < 1025) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > heightBanner - 61) {
                        mdl.find(".menu").css({
                            top: 45
                        })
                    } else {
                        mdl.find(".menu").css({
                            top: 50
                        })
                    }
                })
            } else {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > heightBanner - 61) {
                        mdl.find(".menu").css({
                            top: 50
                        })
                    } else {
                        mdl.find(".menu").css({
                            top: 50
                        })
                    }
                })
            }
            $(window).each(function() {
                if ($(this).scrollTop() > heightBanner - 61) {
                    mdl.css({
                        backgroundColor: "#443846"
                    })
                } else {
                    mdl.css({
                        backgroundColor: "transparent"
                    })
                }
                if ($(window).width() < 1025) {
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > heightBanner - 61) {
                            mdl.find(".menu").css({
                                top: 45
                            })
                        } else {
                            mdl.find(".menu").css({
                                top: 50
                            })
                        }
                    })
                } else {
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > heightBanner - 61) {
                            mdl.find(".menu").css({
                                top: 50
                            })
                        } else {
                            mdl.find(".menu").css({
                                top: 50
                            })
                        }
                    })
                }
            })
        }
        if ($("#page-child").length) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 30) {
                    mdl.css({
                        backgroundColor: "#443846"
                    })
                } else {
                    mdl.css({
                        backgroundColor: "transparent"
                    })
                }
            });
            if ($(window).width() < 1025) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 30) {
                        mdl.find(".menu").css({
                            top: 45
                        })
                    } else {
                        mdl.find(".menu").css({
                            top: 50
                        })
                    }
                })
            } else {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 30) {
                        mdl.find(".menu").css({
                            top: 50
                        })
                    } else {
                        mdl.find(".menu").css({
                            top: 50
                        })
                    }
                })
            }
            $(window).each(function() {
                if ($(this).scrollTop() > 30) {
                    mdl.css({
                        backgroundColor: "#443846"
                    })
                } else {
                    mdl.css({
                        backgroundColor: "transparent"
                    })
                }
                if ($(window).width() < 1025) {
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > 30) {
                            mdl.find(".menu").css({
                                top: 45
                            })
                        } else {
                            mdl.find(".menu").css({
                                top: 50
                            })
                        }
                    })
                } else {
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > 30) {
                            mdl.find(".menu").css({
                                top: 50
                            })
                        } else {
                            mdl.find(".menu").css({
                                top: 50
                            })
                        }
                    })
                }
            })
        }
    }
    function scrollMenuPageInside() {
        var heightTop = $("#mdl-top-head").outerHeight();
        $(window).scroll(function() {
            if ($(this).scrollTop() > heightTop) {
                menuInsidePage.addClass("fixed")
            } else {
                menuInsidePage.removeClass("fixed")
            }
        });
        $(window).each(function() {
            if ($(this).scrollTop() > heightTop) {
                menuInsidePage.addClass("fixed")
            } else {
                menuInsidePage.removeClass("fixed")
            }
        })
    }
    function toggleMenuMb() {
        var iconMenu = $("#mdl-menu #nav-icon");
        iconMenu.on("click", function() {
            if ($(this).hasClass("is-open")) {
                $(this).removeClass("is-open");
                $(this).parent(".wrap-nav-icon").nextAll(".menu").slideUp()
            } else {
                $(this).addClass("is-open");
                $(this).parent(".wrap-nav-icon").nextAll(".menu").slideDown()
            }
        })
    }
    function scrollMenuMb() {
        var heightCurr = $(window).outerHeight()
          , menuMb = mdl.find(".menu");
        if ($(window).width() < 1025) {
            menuMb.height(heightCurr - 70);
            menuMb.mCustomScrollbar()
        } else {
            menuMb.height("");
            menuMb.mCustomScrollbar("destroy")
        }
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-home")
      , mdlAbout = $("#mdl-about");
    $(document).ready(function() {
        setImage();
        slideBanner();
        slideAbout();
        slideService();
        slideClientSay();
        counter();
        slideStaff();
        setHeightMainJob();
        toggleBtnScroll();
        $(".slick-dots button").empty();
        $("button.slick-arrow").empty()
    });
    $(window).resize(function() {
        setHeightMainJob();
        $(".slick-dots button").empty();
        $("button.slick-arrow").empty()
    });
    function toggleBtnScroll() {
        var heightCurr = $(window).outerHeight();
        $(window).scroll(function() {
            if ($(this).scrollTop() > heightCurr / 2) {
                $(".scroll-top").css({
                    transform: "translateY(0px)"
                })
            } else {
                $(".scroll-top").css({
                    transform: "translateY(100px)"
                })
            }
        });
        $(window).each(function() {
            if ($(this).scrollTop() > heightCurr / 2) {
                $(".scroll-top").css({
                    transform: "translateY(0px)"
                })
            } else {
                $(".scroll-top").css({
                    transform: "translateY(100px)"
                })
            }
        })
    }
    function slideBanner() {
        var slideBanner = mdl.find(".banner .slide-banner");
        slideBanner.slick({
            slidesToShow: 1,
            slideScroll: 1,
            fade: true,
            speed: 1e3,
            autoplay: true,
            dots: false,
            arrows: false
        })
    }
    function setImage() {
        var dataImg = $("#mdl-home,#mdl-about").find(".col,.slide-banner .wrap-img,.slide-services .inner,.client-say .client,.slide-staff .item");
        var img = dataImg.find(".img");
        js_fw.setImage(dataImg, img)
    }
    function slideService() {
        mdl.find(".slide-services").slick({
            slidesToShow: 6,
            slideScroll: 1,
            speed: 1e3,
            autoplay: true,
            dots: false,
            arrows: false,
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true
                }
            }, {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
    }
    function setHeightMainJob() {
        var heightCurr = $("#mdl-home,#mdl-about").find(".main-job .box-job").height();
        $("#mdl-home,#mdl-about").find(".main-job .box-job").height(heightCurr)
    }
    function slideClientSay() {
        var slideClientSay = mdl.find(".wrap-clients");
        slideClientSay.slick({
            slidesToShow: 1,
            slideScroll: 1,
            speed: 1e3,
            autoplay: true,
            dots: false,
            arrows: false
        })
    }
    function counter() {
        $("#mdl-home,#mdl-about").find(".counter").counterUp({
            delay: 10,
            time: 2e3
        })
    }
    function slideStaff() {
        $("#mdl-home,#mdl-about").find(".slide-staff").slick({
            slidesToShow: 5,
            slideScroll: 1,
            speed: 1e3,
            autoplay: true,
            dots: false,
            arrows: false,
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
    }
    function slideAbout() {
        mdl.find(".introduce .slide-about").slick({
            slidesToShow: 1,
            slideScroll: 1,
            speed: 1e3,
            autoplay: true,
            dots: true,
            arrows: false
        })
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-services");
    $(document).ready(function() {
        setHeight();
        setImage();
        $(".slick-dots button").empty();
        $("button.slick-arrow").empty()
    });
    $(window).resize(function() {
        setHeight();
        $(".slick-dots button").empty();
        $("button.slick-arrow").empty()
    });
    function setHeight() {
        var heightCurr = mdl.find(".col").outerHeight()
          , heightTitleCurr = mdl.find(".title-service").outerHeight();
        if ($(window).width() > 768) {
            mdl.find(".col").height(heightCurr);
            mdl.find(".title-service").height(heightTitleCurr)
        } else {
            mdl.find(".col").height("");
            mdl.find(".title-service").height("")
        }
    }
    function setImage() {
        var dataImg = mdl.find(".col")
          , img = dataImg.find(".img");
        js_fw.setImage(dataImg, img)
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-service-detail,#mdl-news,#mdl-faq,#mdl-gallery")
      , mdlVideo = $("#mdl-video.video-detail");
    $(document).ready(function() {
        slideServiceDiff();
        setImage();
        slideServiceDiffInVideoDetailPage()
    });
    // function slideServiceDiff() {
    //     var slideServiceDiff = mdl.find(".slide-service-diff");
    //     slideServiceDiff.slick({
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         adaptiveHeight: false,
    //         autoplay: true,
    //         autoplaySpeed: 2e3,
    //         vertical: true,
    //         arrows: false,
    //         responsive: [{
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 vertical: false
    //             }
    //         }, {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 vertical: false
    //             }
    //         }, {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 vertical: false
    //             }
    //         }]
    //     })
    // }
    function slideServiceDiffInVideoDetailPage() {
        var slideServiceDiffInVideoDetailPage = mdlVideo.find(".slide-service-diff");
        slideServiceDiffInVideoDetailPage.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 2e3,
            vertical: true,
            arrows: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    vertical: false
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false
                }
            }]
        })
    }
    function setImage() {
        var dataImg = mdl.find(".slide-service-diff .box")
          , dataImgPageVideo = mdlVideo.find(".slide-service-diff .box")
          , img = dataImg.find(".img")
          , imgPageVideo = dataImgPageVideo.find(".img");
        js_fw.setImage(dataImg, img);
        js_fw.setImage(dataImgPageVideo, imgPageVideo)
    }
}
)();
(function() {
    "use strict";
    var mod = $("#mdl-faq");
    $(document).ready(function() {
        toggleQuestion()
    });
    function toggleQuestion() {
        mod.find(".question").on("click", function() {
            if ($(this).hasClass("is-open")) {
                $(this).removeClass("is-open");
                $(this).addClass("is-close");
                $(this).next().removeClass("is-open");
                $(this).next().slideUp()
            } else {
                $(this).addClass("is-open");
                $(this).removeClass("is-close");
                $(this).next().removeClass("is-close");
                $(this).next().slideDown()
            }
        })
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-gallery.gallery-list");
    $(document).ready(function() {
        setImage()
    });
    function setImage() {
        var dataImg = mdl.find("a.gallery")
          , img = dataImg.find(".img");
        js_fw.setImage(dataImg, img)
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-gallery.gallery-detail");
    $(document).ready(function() {
        galleryImg();
        galleryPop()
    });
    function galleryImg() {
        mdl.find(".gallery").pinto({
            itemWidth: 250
        })
    }
    function galleryPop() {
        mdl.find(".gallery").magnificPopup({
            delegate: "a",
            mainClass: "mfp-with-zoom",
            type: "image",
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find("div")
                }
            }
        })
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-video.video-list");
    $(document).ready(function() {
        setImage()
    });
    function setImage() {
        var dataImg = mdl.find("a.video")
          , img = dataImg.find(".img");
        js_fw.setImage(dataImg, img)
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-lawyer");
    $(document).ready(function() {
        tabInfoLawyer()
    });
    function tabInfoLawyer() {
        mdl.find(".infomation").tabs()
    }
}
)();
(function() {
    "use strict";
    var mdl = $("#mdl-footer");
    $(document).ready(function() {
        setHeightEFooter()
    });
    $(window).resize(function() {
        setHeightEFooter()
    });
    function setHeightEFooter() {
        var heigthCurrent = mdl.find(".left").outerHeight();
        if ($(window).width() > 768) {
            mdl.find(".between,.right").height(heigthCurrent)
        } else {
            mdl.find(".between,.right").height("")
        }
    }
}
)();
