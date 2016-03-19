var Modal = function($, win, doc){
    var module = function(options){
        this.body = doc.body;
        this.content = options.content;
        this.modal = buildModal.call(this);

        bindEvents.call(this);
    };

    function bindEvents(){
        this.modal.find('.y-modal__close').on('click', function(){
            this.close();
        }.bind(this));
    }

    function getScrollWidth(){
        return win.innerWidth - doc.documentElement.clientWidth;
    }

    function lockBody(){
        this.body.style.paddingRight = getScrollWidth() + 'px';
        this.body.style.overflow = 'hidden';
    }

    function unlockBody(){
        this.body.style.paddingRight = 0;
        this.body.style.overflow = 'visible';
    }

    function buildModal(){
        var modal = $('<div class="y-modal"><div class="y-modal__wrapper"></div><div class="y-modal__veil"></div></div>');
        modal.find('.y-modal__wrapper').append('<div class="y-modal__expander"></div><div class="y-modal__content"></div>');
        $(this.content).appendTo(modal.find('.y-modal__content'));
        modal.find('.y-modal__content').append('<div class="y-modal__close"></div>');

        modal.appendTo('body');

        return modal;
    }

    module.prototype = {
        constructor: Modal,

        open: function(){
            lockBody.call(this);
            this.modal.addClass('y-modal_visible');
        },

        close: function(){
            unlockBody.call(this);
            this.modal.removeClass('y-modal_visible');
        }
    };

    return module;
}(jQuery, window, document);
