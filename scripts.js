var otherVideos = [
	{
	    title: "The Best of Rachmaninoff",
	    thumb: "https://i.ytimg.com/vi/vpaPWuDQUcc/default.jpg",
	    url: "https://www.youtube.com/watch?v=vpaPWuDQUcc",
	    duration: "2:43:58",
	    postedBy: "Classical Music11",
	    totalViews: 857721
	},
	{
	    title: "Mix - Chopin - Complete Nocturnes",
	    thumb: "https://i.ytimg.com/vi/liTSRH4fix4/default.jpg",
	    url: "https://www.youtube.com/watch?v=liTSRH4fix4&list=RDliTSRH4fix4",
	    duration: "1:56:17",
	    postedBy: "Brigitte Engerer",
	    totalViews: 3885112
	},
	{
	    title: "The Best of Debussy",
	    thumb: "https://i.ytimg.com/vi/qRZmdzCGLYw/default.jpg",
	    url: "https://www.youtube.com/watch?v=qRZmdzCGLYw",
	    duration: "1:47:16",
	    postedBy: "Classical Music11",
	    totalViews: 3885112
	},
	{
		title: "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin",
	    thumb: "https://i.ytimg.com/vi_webp/jgpJVI3tDbY/default.webp",
	    url: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
	    duration: "3:28:20",
	    postedBy: "Live your Dreams 2",
	    totalViews: 12215066
	},
	{
		title: "Clair de Lune (Extended)",
	    thumb: "https://i.ytimg.com/vi/ea2WoUtbzuw/default.jpg",
	    url: "https://www.youtube.com/watch?v=ea2WoUtbzuw",
	    duration: "58:09",
	    postedBy: "luthfoxian",
	    totalViews: 3886245
	},
	{
		title: "The Best of Chopin",
	    thumb: "https://i.ytimg.com/vi_webp/wygy721nzRc/default.webp",
	    url: "https://www.youtube.com/watch?v=wygy721nzRc",
	    duration: "1:54:57",
	    postedBy: "HALIDONMUSIC",
	    totalViews: 30945365
	},
	{
		title: "Beethoven 9 - Chicago Symphony Orchestra - Riccardo Muti",
	    thumb: "https://i.ytimg.com/vi_webp/rOjHhS5MtvA/default.webp",
	    url: "https://www.youtube.com/watch?v=rOjHhS5MtvA",
	    duration: "1:21:23 ",
	    postedBy: "Chicago Symphony Orchestra",
	    totalViews: 848039
	},
	{
		title: "Four Seasons ~ Vivaldi",
	    thumb: "https://i.ytimg.com/vi_webp/GRxofEmo3HA/default.webp",
	    url: "https://www.youtube.com/watch?v=GRxofEmo3HA",
	    duration: "42:00 ",
	    postedBy: "AnAmericanComposer",
	    totalViews: 77817789
	}
];



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
 var videohtml="";
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
	addVideos();

function addVideos(){
	videohtml="";
	for(i=0;i<otherVideos.length; i++){
		var title = otherVideos[i].title;
		var thumb = otherVideos[i].thumb;
		var url = otherVideos[i].url;
		videohtml = '<div id="small"><div class="small-vids"><a href='+url+'><img src='+thumb+'></a></div><div id="small-vid-text"><p><strong>Title:</strong> '+title+'</p></div></div>';	
		$('#more-videos').append(videohtml);
		console.log(otherVideos);
	}

}
	$('#form-submit').submit(function(){
		videohtml="";
		var myobject = {
			title : $('#title').val(),
			thumb : $('#thumb').val(),
			url : $('#url').val()
		}
		
		otherVideos.unshift(myobject);
		otherVideos.pop();
		console.log(otherVideos);
		$('#more-videos').html(videohtml);
		addVideos();	
		event.preventDefault();
		$('#myModal2').modal('hide');
		
	})
})
