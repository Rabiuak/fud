
$(document).ready(function(){
            $(".fag").click(function(){
                $(".courses_txt,.fass_cour,.fcp_cour,.fcs_cour,.fsc_cour,.fms_cour,.fed_cour").hide('slow');
                $(".fag_cour").show('slow');
            });
            $(".fass").click(function(){
                $(".courses_txt,.fag_cour,.fcp_cour,.fcs_cour,.fsc_cour,.fms_cour,.fed_cour").hide('slow');
                $(".fass_cour").show('slow');
            });
            $(".fcp").click(function(){
                $(".courses_txt,.fag_cour,.fass_cour,.fcs_cour,.fsc_cour,.fms_cour,.fed_cour").hide('slow');
                $(".fcp_cour").show('slow');
            });
            $(".fcs").click(function(){
                $(".courses_txt,.fag_cour,.fass_cour,.fcp_cour,.fsc_cour,.fms_cour,.fed_cour").hide('slow');
                $(".fcs_cour").show('slow');
            });
            $(".fsc").click(function(){
                $(".courses_txt,.fag_cour,.fass_cour,.fcp_cour,.fcs_cour,.fms_cour,.fed_cour").hide('slow');
                $(".fsc_cour").show('slow');
            });
            $(".fms").click(function(){
                $(".courses_txt,.fag_cour,.fass_cour,.fcp_cour,.fcs_cour,.fsc_cour,.fed_cour").hide('slow');
                $(".fms_cour").show('slow');
            });
            $(".fed").click(function(){
                $(".courses_txt,.fag_cour,.fass_cour,.fcp_cour,.fcs_cour,.fsc_cour,.fms_cour").hide('slow');
                $(".fed_cour").show('slow');
            });
        })


