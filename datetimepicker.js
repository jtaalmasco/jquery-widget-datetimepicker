//customize datetimepicker
$(function(){
    $.widget("custom.datetimepicker1",{
        options:{

        },
        _create: function(){
            this.element.addClass("custom-datetimepicker");
            $('<div class="datetimepicker-main-container"></div>').appendTo(this.element);
        },
        _init: function(){
            
        }
    })

    //create helpers
})