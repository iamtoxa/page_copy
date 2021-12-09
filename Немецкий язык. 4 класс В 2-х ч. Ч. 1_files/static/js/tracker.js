document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('visibilitychange', function logData() {
        if (document.visibilityState === 'hidden') {
            navigator.sendBeacon("/usage/stop/?location=" + window.location.href);
        } else {
            navigator.sendBeacon("/usage/start/?location=" + window.location.href);
        }
    });
    navigator.sendBeacon("/usage/start/?location=" + window.location.href);

});