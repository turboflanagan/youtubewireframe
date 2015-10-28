var videosBySamePoster = [
	{
	    title: "StarCraft II: Legacy of the Void Opening Cinematic",
	    thumb: "https://i.ytimg.com/vi_webp/M_XwzBMTJaM/default.webp",
	    url: "https://www.youtube.com/watch?v=M_XwzBMTJaM",
	    duration: "29:51",
	    postedBy: "StarCraft",
	    totalViews: 3927195
	},
	{
	    title: "Legacy of the Void Prologue - Whispers of Oblivion",
	    thumb: "https://i.ytimg.com/vi/2qJgSR7C2FM/default.jpg",
	    url: "https://www.youtube.com/watch?v=2qJgSR7C2FM",
	    duration: "3:19",
	    postedBy: "StarCraft",
	    totalViews: 640699
	},
	{
	    title: "StarCraft II - Protoss Overview",
	    thumb: "https://i.ytimg.com/vi/m0g0MpllFCs/default.jpg",
	    url: "https://www.youtube.com/watch?v=m0g0MpllFCs",
	    duration: "3:36",
	    postedBy: "StarCraft",
	    totalViews: 1112322
	}
];
$(document).ready(function(){
	
	for(i=0; i<videosBySamePoster.length; i++){
		var title = videosBySamePoster[i].title;
		var thumb = videosBySamePoster[i].thumb;
		var url = videosBySamePoster[i].url;
		var duration = videosBySamePoster[i].duration;
		var postedby = videosBySamePoster[i].postedby;
		var totalViews = videosBySamePoster[i].totalViews;

		$('#suggested-videos-'+i).html('<a href='+url+'><img src='+thumb+'></a>');
		$('#summary-'+i).html('<p><strong>Title:</strong> '+title+'</p><p><strong>Duration:</strong> '+duration+'</p><p><strong>Posted By:</strong> '+postedby+'</p><p><strong>Total Views:</strong> '+totalViews+'</p>');
	};

})
