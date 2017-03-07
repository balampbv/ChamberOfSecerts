
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
Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
