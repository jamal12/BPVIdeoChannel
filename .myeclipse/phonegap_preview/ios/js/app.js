$(document).ready(function(){
	document.addEventListener("deviceready",onDeviceReady, false);
   });

 function onDeviceReady(){
	 var channel= "aabphilips";
	 
	 getPlaylist(channel);
 }  
	 function getPlaylist(channel){
		$("vidlist").html(""); 
	    $.get(
		       "https://www.googleapis.com/youtube/v3/channels",
				{
			part: "contentDetails",
			forUsername: channel,
			key:'AIzaSyBH7kJTxm9LueTd1LZA-9K1y6XIVNnQTss'
				
			},
		    function(data){
				$.each(data.items,function(i, item){
					console.log(item);
					playlistId= item,contentDetails,relatedPlaylist,uploads;
					getvideos(playlistId, 15);
				}); 
				
			}	
     );
 }
	 
    function getvideos(playlistId, maxresults){
	     $.get{
			"https://www.googleapis.com/youtube/v3/playlistitems",
			{
				part:'snippet',
				maxResults: maxResults,
				playlistId: playlistId,
				key:'AIzaSyBH7kJTxm9LueTd1LZA-9K1y6XIVNnQTss'
	   }, function(data){
		   var output;
		   $.each(data.items, function(i, item){
			   id= items.snippet.resourceId.videoId;
			   title= item.snippet.title
			   thumb= item.snippet.thumbnails.default.url;
			   $("#vidlist").append('<li videoId="'+id+'"><img src="'+thumb+"'><h3>'+title+'</h3></li>");
			   $("#vidlist").listview('refresh');
		   });
	   }
	 );
}	 