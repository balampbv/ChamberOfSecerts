
function check()
{
		var qid = $("#home").attr("qid");
	    var points =$("#home").attr("points");
		var subans = $("#subans").val();
		var query = {};
		query.qid = qid;
		query.subans = subans;
		query.points = points;
		console.log(query);
	    $.post("/i/verify", query, function(data) {
	    	if(data=="correct")
	    	{
	    		location.reload();
	    	}
	    	else
	    	{
	    		alert("Incorrect");
	    	}
	    });

}

 <script type="text/javascript">

    $(function(){
    var unique_id = $.gritter.add({
                title: 'welcome to chamber of secrets!',
                text: 'explore the secrets',
                image: '/images/3.jpg',
                sticky: true,
                time: '',
                class_name: 'my-sticky-class'
            });
            return false;
        });
        
</script>
