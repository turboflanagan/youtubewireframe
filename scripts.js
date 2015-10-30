var otherVideos = [
	{
	    vidtitle: "The Best of Rachmaninoff",
	    thumb: "https://i.ytimg.com/vi/vpaPWuDQUcc/default.jpg",
	    url: "https://www.youtube.com/watch?v=vpaPWuDQUcc",
	    duration: "2:43:58",
	    postedBy: "Classical Music11",
	    totalViews: 857721
	},
	{
	    vidtitle: "Mix - Chopin - Complete Nocturnes",
	    thumb: "https://i.ytimg.com/vi/liTSRH4fix4/default.jpg",
	    url: "https://www.youtube.com/watch?v=liTSRH4fix4&list=RDliTSRH4fix4",
	    duration: "1:56:17",
	    postedBy: "Brigitte Engerer",
	    totalViews: 3885112
	},
	{
	    vidtitle: "The Best of Debussy",
	    thumb: "https://i.ytimg.com/vi/qRZmdzCGLYw/default.jpg",
	    url: "https://www.youtube.com/watch?v=qRZmdzCGLYw",
	    duration: "1:47:16",
	    postedBy: "Classical Music11",
	    totalViews: 3885112
	},
	{
		vidtitle: "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin...",
	    thumb: "https://i.ytimg.com/vi_webp/jgpJVI3tDbY/default.webp",
	    url: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
	    duration: "3:28:20",
	    postedBy: "Live your Dreams 2",
	    totalViews: 12215066
	},
	{
		vidtitle: "Clair de Lune (Extended)",
	    thumb: "https://i.ytimg.com/vi/ea2WoUtbzuw/default.jpg",
	    url: "https://www.youtube.com/watch?v=ea2WoUtbzuw",
	    duration: "58:09",
	    postedBy: "luthfoxian",
	    totalViews: 3886245
	},
	{
		vidtitle: "The Best of Chopin",
	    thumb: "https://i.ytimg.com/vi_webp/wygy721nzRc/default.webp",
	    url: "https://www.youtube.com/watch?v=wygy721nzRc",
	    duration: "1:54:57",
	    postedBy: "HALIDONMUSIC",
	    totalViews: 30945365
	},
	{
		vidtitle: "Beethoven 9 - Chicago Symphony Orchestra - Riccardo Muti",
	    thumb: "https://i.ytimg.com/vi_webp/rOjHhS5MtvA/default.webp",
	    url: "https://www.youtube.com/watch?v=rOjHhS5MtvA",
	    duration: "1:21:23 ",
	    postedBy: "Chicago Symphony Orchestra",
	    totalViews: 848039
	},
	{
		vidtitle: "Four Seasons ~ Vivaldi",
	    thumb: "https://i.ytimg.com/vi_webp/GRxofEmo3HA/default.webp",
	    url: "https://www.youtube.com/watch?v=GRxofEmo3HA",
	    duration: "42:00 ",
	    postedBy: "AnAmericanComposer",
	    totalViews: 77817789
	}
];

var videosBySamePoster = [
	{
	    title: "Legacy of the Void",
	    thumb: "https://i.ytimg.com/vi_webp/M_XwzBMTJaM/default.webp",
	    url: "https://www.youtube.com/watch?v=M_XwzBMTJaM",
	    duration: "29:51",
	    postedBy: "StarCraft",
	    totalViews: 3927195
	},
	{
	    title: "Whispers of Oblivion",
	    thumb: "https://i.ytimg.com/vi/2qJgSR7C2FM/default.jpg",
	    url: "https://www.youtube.com/watch?v=2qJgSR7C2FM",
	    duration: "3:19",
	    postedBy: "StarCraft",
	    totalViews: 640699
	},
	{
	    title: "Protoss Overview",
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

function addVideos(){
	videohtml="";
	for(i=0; i<otherVideos.length; i++){
		videohtml += '<div class = "more-videos-previews col-sm-3"><div class ="more-thumbnails"><a href=' + otherVideos[i].url + '><img src=';
		videohtml += otherVideos[i].thumb + '></a></div><div class="thumbnail-text">';
		videohtml += '<p class="video-title">' + otherVideos[i].vidtitle + '</p><p>' + otherVideos[i].postedBy + '</p></div></div>';
		console.log(videohtml);
	}
	$('#more-videos').html(videohtml);
}

addVideos();
});
