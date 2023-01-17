/*
 *  Document   : disclosure.js
 *  Author     : Kyle Rove
 *  Description: Custom JS code used in COI Disclosure Page
 */

// Define main function
var CoiDisclosure = function() {

    var initValidationDisclosureForm = function(){
        jQuery('.conflict-of-interest-disclosure-form').validate({
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
                }
            }
        });
    };

    var updateDisclosureForm = function() {
        // name
        $("input[name='name']").change(function () {
            $('.conflict-of-interest-disclosure-form').validate();
        });
        
        // email
        $("input[name='email']").change(function () {
            $('.conflict-of-interest-disclosure-form').validate();
        });
        
        // COI
        if (typeof $("input[name='coi-yesno']:checked").val() === "undefined") {
            // hide detailed form block
            $("div.details").hide();
        }
        else if ($("input[name='coi-yesno']:checked").val() == "no") {
            // hide detailed form block
            $("div.details").hide();
        }
        else if ($("input[name='coi-yesno']:checked").val() == "yes") {
            // show detailed form block
            $("div.details").show();
        }
        
        // coi dropdown
        $("input[name='coi-yesno']").change(function () {
            if (typeof $("input[name='coi-yesno']:checked").val() === "undefined" ) {
                errMsg = $(this).attr("data-msg-valuenot");
                $("div.details").hide();
                $(this).parent().append("<div id=\"name-error\" class=\"invalid-feedback animated fadeInDown\" style=\"display: block;\">" + errMsg + "</div>");
                $(this).parent().removeClass('is-invalid').addClass('is-invalid');
            }
            else if ($("input[name='coi-yesno']:checked").val() == "no") {
                $("div.details").hide();
                $(this).parent().removeClass('is-invalid');
                $(this).siblings("div#name-error").remove();
            }
            else if ($("input[name='coi-yesno']:checked").val() == "yes") {
                $("div.details").show();
                $(this).parent().removeClass('is-invalid');
                $(this).siblings("div#name-error").remove();
            }
        });
        
        // research
        $("input[name='coi-research-personal']").change(function () {
            if ($("input[name='coi-research-personal']").val() == "") {
                $("div.form-row#research-row").removeClass("filled");
            }
            else {
                $("div.form-row#research-row").addClass("filled");
            }
        });
        
        $("input[name='coi-research-family']").change(function () {
            if ($("input[name='coi-research-family']").val() == "") {
                $("div.form-row#research-row").removeClass("filled");
            }
            else {
                $("div.form-row#research-row").addClass("filled");
            }
        });
        
        // investment
        $("input[name='coi-investment-personal']").change(function () {
            if ($("input[name='coi-investment-personal']").val() == "") {
                $("div.form-row#investment-row").removeClass("filled");
            }
            else {
                $("div.form-row#investment-row").addClass("filled");
            }
        });
        
        $("input[name='coi-investment-family']").change(function () {
            if ($("input[name='coi-investment-family']").val() == "") {
                $("div.form-row#investment-row").removeClass("filled");
            }
            else {
                $("div.form-row#investment-row").addClass("filled");
            }
        });
        
        // employee
        $("input[name='coi-employee-personal']").change(function () {
            if ($("input[name='coi-employee-personal']").val() == "") {
                $("div.form-row#employee-row").removeClass("filled");
            }
            else {
                $("div.form-row#employee-row").addClass("filled");
            }
        });
        
        $("input[name='coi-employee-family']").change(function () {
            if ($("input[name='coi-employee-family']").val() == "") {
                $("div.form-row#employee-row").removeClass("filled");
            }
            else {
                $("div.form-row#employee-row").addClass("filled");
            }
        });
        
        // expertwitness
        $("input[name='coi-expertwitness-personal']").change(function () {
            if ($("input[name='coi-expertwitness-personal']").val() == "") {
                $("div.form-row#expertwitness-row").removeClass("filled");
            }
            else {
                $("div.form-row#expertwitness-row").addClass("filled");
            }
        });
        
        $("input[name='coi-expertwitness-family']").change(function () {
            if ($("input[name='coi-expertwitness-family']").val() == "") {
                $("div.form-row#expertwitness-row").removeClass("filled");
            }
            else {
                $("div.form-row#expertwitness-row").addClass("filled");
            }
        });
        
        // speaker
        $("input[name='coi-speaker-personal']").change(function () {
            if ($("input[name='coi-speaker-personal']").val() == "") {
                $("div.form-row#speaker-row").removeClass("filled");
            }
            else {
                $("div.form-row#speaker-row").addClass("filled");
            }
        });
        
        $("input[name='coi-speaker-family']").change(function () {
            if ($("input[name='coi-speaker-family']").val() == "") {
                $("div.form-row#speaker-row").removeClass("filled");
            }
            else {
                $("div.form-row#speaker-row").addClass("filled");
            }
        });
        
        // consultant
        $("input[name='coi-consultant-personal']").change(function () {
            if ($("input[name='coi-consultant-personal']").val() == "") {
                $("div.form-row#consultant-row").removeClass("filled");
            }
            else {
                $("div.form-row#consultant-row").addClass("filled");
            }
        });
        
        $("input[name='coi-consultant-family']").change(function () {
            if ($("input[name='coi-consultant-family']").val() == "") {
                $("div.form-row#consultant-row").removeClass("filled");
            }
            else {
                $("div.form-row#consultant-row").addClass("filled");
            }
        });
        
        // owner
        $("input[name='coi-owner-personal']").change(function () {
            if ($("input[name='coi-owner-personal']").val() == "") {
                $("div.form-row#owner-row").removeClass("filled");
            }
            else {
                $("div.form-row#owner-row").addClass("filled");
            }
        });
        
        $("input[name='coi-owner-family']").change(function () {
            if ($("input[name='coi-owner-family']").val() == "") {
                $("div.form-row#owner-row").removeClass("filled");
            }
            else {
                $("div.form-row#owner-row").addClass("filled");
            }
        });
        
        // leadership
        $("input[name='coi-leadership-personal']").change(function () {
            if ($("input[name='coi-leadership-personal']").val() == "") {
                $("div.form-row#leadership-row").removeClass("filled");
            }
            else {
                $("div.form-row#leadership-row").addClass("filled");
            }
        });
        
        $("input[name='coi-leadership-family']").change(function () {
            if ($("input[name='coi-leadership-family']").val() == "") {
                $("div.form-row#leadership-row").removeClass("filled");
            }
            else {
                $("div.form-row#leadership-row").addClass("filled");
            }
        });

        // publishing
        $("input[name='coi-publishing-personal']").change(function () {
            if ($("input[name='coi-publishing-personal']").val() == "") {
                $("div.form-row#publishing-row").removeClass("filled");
            }
            else {
                $("div.form-row#publishing-row").addClass("filled");
            }
        });
        
        $("input[name='coi-publishing-family']").change(function () {
            if ($("input[name='coi-publishing-family']").val() == "") {
                $("div.form-row#publishing-row").removeClass("filled");
            }
            else {
                $("div.form-row#publishing-row").addClass("filled");
            }
        });
        
        // other
        $("input[name='coi-other-personal']").change(function () {
            if ($("input[name='coi-other-personal']").val() == "") {
                $("div.form-row#other-row").removeClass("filled");
            }
            else {
                $("div.form-row#other-row").addClass("filled");
            }
        });
        
        $("input[name='coi-other-family']").change(function () {
            if ($("input[name='coi-other-family']").val() == "") {
                $("div.form-row#other-row").removeClass("filled");
            }
            else {
                $("div.form-row#other-row").addClass("filled");
            }
        });
    };

    var checkDisclosure = function() {
        $("div.conflict-of-interest-disclosure").on("click","button#check-disclosure", function () {
            
            // initialize vars
            var Status, Name, Email, CoiYesNo, CoiResearchPersonal, CoiResearchFamily, CoiInvestmentPersonal, CoiInvestmentFamily, CoiEmploymentPersonal, CoiEmploymentFamily, CoiExpertwitnessPersonal, CoiExpertwitnessFamily, CoiSpeakerPersonal, CoiSpeakerFamily, CoiConsultantPersonal, CoiConsultantFamily, CoiOwnerPersonal, CoiOwnerFamily, CoiLeadershipPersonal, CoiLeadershipFamily, CoiPublishingPersonal, CoiPublishingFamily, CoiOtherPersonal, CoiOtherFamily, buttonVal;

            // validate
            $('.conflict-of-interest-disclosure-form').validate();
            
            // if valid, then continue, else, stop
            if ($('.conflict-of-interest-disclosure-form').valid()) {
                // start spinner
                buttonVal = $("button#check-disclosure").html();
                $("button#check-disclosure").html("<i class=\"fas fa-spinner fa-spin\"></i>");
                
                // send ajax request
                $.ajax({
                   type: "GET",
                   url: "https://streamteam.co/_utilities/forms/",
                   data: "check-coi-disclosure&name="+Name+"&email="+Email,
                   dataType: "text",
                   success: function (data) {
                        var len = data.length;

                        if (len == 1) {
                            for(var i = 0; i < len; i++){
                                Status = response[i].status;
                                Name = response[i].name;
                                Email = response[i].email;
                                
                                if (Status == 1) {
                                    $("div.conflict-of-interest-disclosure input[name=coi-yesno]").val(response[i].coi-yesno);
                                    $("div.conflict-of-interest-disclosure input[name=coi-research-personal]").val(response[i].coi-research-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-research-family]").val(response[i].coi-research-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-investment-personal]").val(response[i].coi-investment-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-investment-family]").val(response[i].coi-investment-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-employment-personal]").val(response[i].coi-employment-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-employment-family]").val(response[i].coi-employment-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-expertwitness-personal]").val(response[i].coi-expertwitness-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-expertwitness-family]").val(response[i].coi-expertwitness-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-speaker-personal]").val(response[i].coi-speaker-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-speaker-family]").val(response[i].coi-speaker-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-consultant-personal]").val(response[i].coi-consultant-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-consultant-family]").val(response[i].coi-consultant-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-owner-personal]").val(response[i].coi-owner-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-owner-family]").val(response[i].coi-owner-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-leadership-personal]").val(response[i].coi-leadership-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-leadership-family]").val(response[i].coi-leadership-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-publishing-personal]").val(response[i].coi-publishing-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-publishing-family]").val(response[i].coi-publishing-family);
                                    $("div.conflict-of-interest-disclosure input[name=coi-other-personal]").val(response[i].coi-other-personal);
                                    $("div.conflict-of-interest-disclosure input[name=coi-other-family]").val(response[i].coi-other-family);
                                }
                                
                                // on success
                                $("div.form-row").removeClass("d-none");
                                $("button#submit-disclosure").removeClass("d-none");
                                $("div.form-row.next").hide();
                                $("button#check-disclosure").html(buttonVal); 
                                updateDisclosureForm();
                            }
                        }
                        else {
                            // we were not successful for unclear reasons
                            $("#disclosureError").removeClass("d-none");
                            $("button#check-disclosure").html(buttonVal); 
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                        $("#disclosureError").removeClass("d-none"); 
                        $("button#check-disclosure").html(buttonVal);
                    }
                });
            }
            else {
                // invalid
                console.log("invalid")
            }
        });
    }

    var submitDisclosure = function() {
        
        $("div.conflict-of-interest-disclosure").on("click","button#submit-disclosure", function () {
            
            // initialize vars
            var Name, Email, CoiYesNo, CoiResearchPersonal, CoiResearchFamily, CoiInvestmentPersonal, CoiInvestmentFamily, CoiEmploymentPersonal, CoiEmploymentFamily, CoiExpertwitnessPersonal, CoiExpertwitnessFamily, CoiSpeakerPersonal, CoiSpeakerFamily, CoiConsultantPersonal, CoiConsultantFamily, CoiOwnerPersonal, CoiOwnerFamily, CoiLeadershipPersonal, CoiLeadershipFamily, CoiPublishingPersonal, CoiPublishingFamily, CoiOtherPersonal, CoiOtherFamily, buttonVal;

            // collect all the things
            Name = $("div.conflict-of-interest-disclosure input[name=name]").val();
            Email = $("div.conflict-of-interest-disclosure input[name=email]").val();
            CoiYesNo = $("div.conflict-of-interest-disclosure input[name=coi-yesno]:checked").val();
            CoiResearchPersonal = $("div.conflict-of-interest-disclosure input[name=coi-research-personal]").val();
            CoiResearchFamily = $("div.conflict-of-interest-disclosure input[name=coi-research-family]").val();
            CoiInvestmentPersonal = $("div.conflict-of-interest-disclosure input[name=coi-investment-personal]").val();
            CoiInvestmentFamily = $("div.conflict-of-interest-disclosure input[name=coi-investment-family]").val();
            CoiEmploymentPersonal = $("div.conflict-of-interest-disclosure input[name=coi-employment-personal]").val();
            CoiEmploymentFamily = $("div.conflict-of-interest-disclosure input[name=coi-employment-family]").val();
            CoiExpertwitnessPersonal = $("div.conflict-of-interest-disclosure input[name=coi-expertwitness-personal]").val();
            CoiExpertwitnessFamily = $("div.conflict-of-interest-disclosure input[name=coi-expertwitness-family]").val();
            CoiSpeakerPersonal = $("div.conflict-of-interest-disclosure input[name=coi-speaker-personal]").val();
            CoiSpeakerFamily = $("div.conflict-of-interest-disclosure input[name=coi-speaker-family]").val();
            CoiConsultantPersonal = $("div.conflict-of-interest-disclosure input[name=coi-consultant-personal]").val();
            CoiConsultantFamily = $("div.conflict-of-interest-disclosure input[name=coi-consultant-family]").val();
            CoiOwnerPersonal = $("div.conflict-of-interest-disclosure input[name=coi-owner-personal]").val();
            CoiOwnerFamily = $("div.conflict-of-interest-disclosure input[name=coi-owner-family]").val();
            CoiLeadershipPersonal = $("div.conflict-of-interest-disclosure input[name=coi-leadership-personal]").val();
            CoiLeadershipFamily = $("div.conflict-of-interest-disclosure input[name=coi-leadership-family]").val();
            CoiPublishingPersonal = $("div.conflict-of-interest-disclosure input[name=coi-publishing-personal]").val();
            CoiPublishingFamily = $("div.conflict-of-interest-disclosure input[name=coi-publishing-family]").val();
            CoiOtherPersonal = $("div.conflict-of-interest-disclosure input[name=coi-other-personal]").val();
            CoiOtherFamily = $("div.conflict-of-interest-disclosure input[name=coi-other-family]").val();

            // validate
            $('.conflict-of-interest-disclosure-form').validate();
            
            // if valid, then continue, else, stop
            if ($('.conflict-of-interest-disclosure-form').valid() && typeof $("div.conflict-of-interest-disclosure input[name=coi-yesno]:checked").val() !== "undefined") {
                // start spinner
                buttonVal = $("button#submit-disclosure").html();
                $("button#submit-disclosure").html("<i class=\"fas fa-spinner fa-spin\"></i>");
                
                // send ajax request
                $.ajax({
                   type: "POST",
                   url: "https://streamteam.co/_utilities/forms/",
                   data: "make-coi-disclosure&name="+Name+"&email="+Email+"&coi-yesno="+CoiYesNo+"&coi-research-personal="+CoiResearchPersonal+"&coi-research-family="+CoiResearchFamily+"&coi-investment-personal="+CoiInvestmentPersonal+"&coi-investment-family="+CoiInvestmentFamily+"&coi-employment-personal="+CoiEmploymentPersonal+"&coi-employment-family="+CoiEmploymentFamily+"&coi-expertwitness-personal="+CoiExpertwitnessPersonal+"&coi-expertwitness-family="+CoiExpertwitnessFamily+"&coi-speaker-personal="+CoiSpeakerPersonal+"&coi-speaker-family="+CoiSpeakerFamily+"&coi-consultant-personal="+CoiConsultantPersonal+"&coi-consultant-family="+CoiConsultantFamily+"&coi-owner-personal="+CoiOwnerPersonal+"&coi-owner-family="+CoiOwnerFamily+"&coi-leadership-personal="+CoiLeadershipPersonal+"&coi-leadership-family="+CoiLeadershipFamily+"&coi-publishing-personal="+CoiPublishingPersonal+"&coi-publishing-family="+CoiPublishingFamily+"&coi-other-personal="+CoiOtherPersonal+"&coi-other-family="+CoiOtherFamily,
                   dataType: "text",
                   success: function (data) {
                        //console.log(data);
                        if (data == "1") {
                            // on success
                            $("#disclosureSuccess").removeClass("d-none");
                            $("div.form-row").hide();
                            $("button#submit-disclosure").hide();
                        }
                        else {
                            // we were not successful for unclear reasons
                            $("#disclosureError").removeClass("d-none");
                            $("button#submit-disclosure").html(buttonVal); 
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                        $("#disclosureError").removeClass("d-none"); 
                        $("button#submit-disclosure").html(buttonVal);
                    }
                });
            }
       });
    };
    
    return {
        init: function () {
            // Init functions
            updateDisclosureForm();
            submitDisclosure();
            initValidationDisclosureForm();
            checkDisclosure();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ CoiDisclosure.init(); });