/*
 *  Document   : contact-us.js
 *  Author     : Kyle Rove
 *  Description: Custom JS code used in Contact US page
 */

// Define main function
var ContactUs = function() {

    var initValidationContactForm = function(){
        jQuery('.contact-form').validate({
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('div.form-group > div').append(error);
            },
            highlight: function(e) {
                jQuery(e).parents('div.form-group > div').removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).parents('div.form-group > div').removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'name': {
                    required: true
                },
                'email': {
                    required: true,
                    email: true,
                    minlength: 5
                },
                'subject': {
                    required: true
                },
                'message': {
                    required: true
                }
            }
        });
    };

    var updateContactForm = function() {
        // name
        $("input[name='name']").change(function () {
            $('.contact-form').validate();
        });
        
        // email
        $("input[name='email']").change(function () {
            $('.contact-form').validate();
        });
        
        // subject
        $("input[name='subject']").change(function () {
            $('.contact-form').validate();
        });
        
        // message
        $("input[name='message']").change(function () {
            $('.contact-form').validate();
        });
    };

    var submitContactForm = function() {
        $("div.contact-us").on("click","button#submit", function () {
            
            // initialize vars
            var Name, Email, Subject, Message;
            
            // start spinner
            buttonVal = $("button#submit").attr("value");
            $("button#submit").attr("value", "<i class=\"fas fa-spinner fa-spin\"></i>");

            // collect all the things
            Name = $("div.contact-us input[name=name]").val();
            Email = $("div.contact-us input[name=email]").val();
            Subject = $("div.contact-us input[name=subject]").val();
            Message = $("div.contact-us input[name=message]").val();

            // validate
            $('.contact-form').validate();
            
            // if valid, then continue, else, stop
            if ($('.contact-form').valid()) {
            
                // send ajax request
                $.ajax({
                   type: "POST",
                   url: "https://streamteam.co/_utilities/forms/",
                   data: "contact-us&name="+Name+"&email="+Email+"&subject="+Subject+"&message="+Message,
                   dataType: "text",
                   success: function (data) {
                        //console.log(data);
                        if (data == "1") {
                            // on success
                            $("#contactSuccess").removeClass("d-none");
                            $("div.form-row").hide();
                            $("button#submit").hide();
                        }
                        else {
                            // we were not successful for unclear reasons
                            $("#contactError").removeClass("d-none");
                            $("button#submit").attr("value", buttonVal); 
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                        $("#contactError").removeClass("d-none"); 
                        $("button#submit").attr("value", buttonVal);
                    }
                });
            }
       });
    };
    
    return {
        init: function () {
            // Init functions
            updateContactForm();
            submitContactForm();
            initValidationContactForm();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ ContactUs.init(); });