class Tabs {
    constructor(selector) {
        this.element = $(selector);
        this.init();
        this.bindEvents();
    }

    init() {
        this.element.each(function (index, element) {
            $(element).find('.tabs-bar > li:first-child').addClass('active');
            $(element).find('.tabs-content > li:first-child').addClass('active');
        });
    }

    bindEvents() {
        this.element.on('click', '.tabs-bar > li', function (e) {
            const $li = $(e.currentTarget);
            const index = $li.index();
            $li.addClass('active').siblings().removeClass('active');
            $li.closest('.tabs').find('.tabs-content > li').eq(index)
                .addClass('active').siblings().removeClass('active');
        });
    }
}

new Tabs('.xxx');
new Tabs('.ooo');