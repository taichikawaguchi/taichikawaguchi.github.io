$(document).ready(function() {
    $('.fadeinfirst').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).css('opacity', '1');
        } else {
            $(this).css('opacity', '0');
        }
    });
});
$(document).ready(function() {
    $('.fadeinsecond').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).css('opacity', '1');
        } else {
            $(this).css('opacity', '0');
        }
    });
});
$(document).ready(function() {
    $('.fadeinthird').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).css('opacity', '1');
        } else {
            $(this).css('opacity', '0');
        }
    });
});
$(document).ready(function() {
    $('.fadeinimg').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).css('opacity', '1');
        } else {
            $(this).css('opacity', '0');
        }
    });
});
$(document).ready(function() {
    $('.SNS').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).css('opacity', '1');
        } else {
            $(this).css('opacity', '0');
        }
    });
});
