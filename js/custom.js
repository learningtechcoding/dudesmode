
$(document).ready(function () {
    // Function to handle active class and smooth scrolling
    function handleMenuClick(e) {
        e.preventDefault();

        // Remove "active-menu" from all and add to clicked item
        $(".navigation li").removeClass("current");
        $(this).parent().addClass("current");
        $(".navigation li a").removeClass("active");
        $(this).parent().addClass("active");

        // Smooth scrolling to section
        var target = $(this).attr("href");
        if ($(target).length) {
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top + 0, // Adjust offset as needed
                },
                800
            );
        }
    }

    // Add click event to desktop and mobile menu items
    $(".navigation li a").on("click", handleMenuClick);

    // Add "active-menu" class on scroll
    $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop();
        $(".navigation li a").each(function () {
            var section = $(this).attr("href");
            if ($(section).length) {
                var sectionOffset = $(section).offset().top - 50; // Adjust offset as needed
                if (scrollPos >= sectionOffset) {
                    $(".navigation li").removeClass("current");
                    $(this).parent().addClass("current");
                }
            }
        });
    });
});
 
