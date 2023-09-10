$(document).ready(function() {
    const totalPages = 34;
    const flipbook = document.getElementById('flipbook');

    for (let i = 1; i <= totalPages / 2; i++) {
        const leftPage = document.createElement('div');
        leftPage.className = 'page';
        leftPage.style.backgroundImage = 'url(./pages/page' + (i * 2 - 1) + '.jpg)';
        flipbook.appendChild(leftPage);

        const rightPage = document.createElement('div');
        rightPage.className = 'page';
        rightPage.style.backgroundImage = 'url(./pages/page' + (i * 2) + '.jpg)';
        flipbook.appendChild(rightPage);
    }

    $('#flipbook').turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 50,
        when: {
            turned: function(e, page) {
                console.log('Current view: ', $(this).turn('view'));
            }
        },
        swipe: {
            forward: function() {
                console.log('Swipe forward');
                $(this).turn('next');
            },
            backward: function() {
                console.log('Swipe backward');
                $(this).turn('previous');
            }
        }
    });

    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.addEventListener('click', showNavigationInfo);
    });

    function showNavigationInfo() {
        alert("Press → on your keyboard to navigate through pages");
    }
});

$(document).bind('keydown', function(e) {
    if (e.keyCode == 37)
        $('#flipbook').turn('previous');
    else if (e.keyCode == 39)
        $('#flipbook').turn('next');
});
