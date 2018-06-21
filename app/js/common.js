$(function() {

	// Custom JS
    (function($) {
        $(function() {

            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('ul.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });

        });
    })(jQuery);
    $(".menu-lisy").click(function() {
        // $(".tabs__caption").slideToggle();
        $(".menu-lisy").toggleClass('menu-active');
    });

});
