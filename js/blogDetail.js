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
});
