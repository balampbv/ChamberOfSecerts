
	
<script type="text/javascript">
$( document ).ready(function() {
$(function() {
    $('#showhome').click(function() {
         $('#home').show();
        $('#rules').hide();
        $('#clues').hide();
        $('#leader').hide();
        $('#panel').hide();
        $('#contact').hide();
        $('#profile').hide();
    });
    $('#showrules').click(function() {
       $('#home').hide();
        $('#rules').show();
        $('#clues').hide();
        $('#leader').hide();
        $('#panel').hide();
        $('#contact').hide();
        $('#profile').hide();
    });

    $('#showclues').click(function() {
        $('#home').hide();
        $('#rules').hide();
        $('#clues').show();
        $('#leader').hide();
        $('#panel').hide();
        $('#contact').hide();
        $('#profile').hide();
    });

    $('#showleader').click(function() {
        $('#home').hide();
        $('#rules').hide();
        $('#clues').hide();
        $('#leader').show();
        $('#panel').hide();
        $('#contact').hide();
        $('#profile').hide();
    });


    $('#showpanel').click(function() {
        $('#home').hide();
        $('#rules').hide();
        $('#clues').hide();
        $('#leader').hide();
        $('#panel').show();
        $('#contact').hide();
        $('#profile').hide();
    });

    $('#showcontact').click(function() {
        $('#home').hide();
        $('#rules').hide();
        $('#clues').hide();
        $('#leader').hide();
        $('#panel').hide();
        $('#contact').show();
        $('#profile').hide();
    });


    $('#showprofile').click(function() {
        $('#home').hide();
        $('#rules').hide();
        $('#clues').hide();
        $('#leader').hide();
        $('#panel').hide();
        $('#contact').hide();
        $('#profile').show();
    });
});
});
</script>

		