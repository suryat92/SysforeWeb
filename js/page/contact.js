/*  ::

    :: Theme        : Jets
    :: Theme URI    : https://labs.funcoders.com/html/Jets

    :: File         : contact.js
    :: About        : Scripts for Contact page
    :: Version      : 1.3.1

::  */
var Contact = {
    init: function() {

        this.switcher();

    },
    switcher : function() {
        $(document).ready(function() {
            $('.to-form, .to-contact').click(function() {

                var formSwitch = ($(this).is('.to-form')) ? ["#content .form", "#content .address" ] : ["#content .address", "#content .form" ];

                $(formSwitch[0]).addClass('current');
                $(formSwitch[1]).removeClass('current');

                return false;
            });
        });
    }
};

Contact.init();