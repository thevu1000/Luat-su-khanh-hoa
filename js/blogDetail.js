$(document).ready(function () {
    const currentUrl = encodeURIComponent('https://honsoi.vn/');
    const postTitle = encodeURIComponent(document.title);

    $('.facebook-share').on('click', function () {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
    });

    $('.zalo-share').on('click', function () {
        const zaloUrl = `https://zalo.me/share?url=${currentUrl}&title=${postTitle}`;
        window.open(zaloUrl, '_blank', 'width=600,height=400');
    });

    $('.mail-share').on('click', function () {
        const emailSubject = `Check out this article: ${decodeURIComponent(postTitle)}`;
        const emailBody = `I found this interesting article and thought you might like it. Check it out here: ${decodeURIComponent(currentUrl)}`;
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
    });

    $('.indexList .indexItemLink').on('click', function (event) {
        event.preventDefault();

        
        var targetText = $(this).text().trim();
        console.log(targetText);
        
        var keyword = targetText.split(/[:\-]/)[0].trim();
        console.log(keyword);
        
        var targetElement = $('.blogContent *').filter(function () {
            return $(this).text().toLowerCase().includes(keyword.toLowerCase());
        }).first();
        console.log(targetElement);
        
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top - 80
            }, 800);
        } else {
            console.warn("Không tìm thấy phần tử phù hợp cho từ khóa:", keyword);
        }
    });
    
    
});
