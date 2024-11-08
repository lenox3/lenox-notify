window.addEventListener('message', function (event) {
    switch (event.data.action) {
        default:
            Notify(event.data);
            break;
    }
});

function Notify(data) {
    const notificationTypes = {
        success: './success-icon.svg',
        warning: './warn-icon.svg',
        error: './error-icon.svg',
        primary: './primary-icon.svg'
    };

    const type = data.type || 'primary';
    const iconPath = notificationTypes[type] || notificationTypes.primary;
    const length = data.length || 3500;

    const $notification = $('.notification.template').clone(true, true);
    $notification.removeClass('template'); 
    $notification.addClass(type); 
    $notification.find('img').attr('src', iconPath);
    $notification.find('span').text(data.text || 'Notification');

    $notification.css({
        display: 'flex',
        opacity: 0
    });

    $('.notify-container').prepend($notification);
    $notification.fadeTo(300, 1);

    setTimeout(function() {
        $notification.fadeTo(300, 0, function() {
            $(this).slideUp(200, function() {
                $(this).remove();
            });
        });
    }, length);
}
