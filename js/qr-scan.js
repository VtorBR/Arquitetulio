function StartQrScan()
{
	var video = document.querySelector('video');
	if (video)
	{
		QCodeDecoder().decodeFromVideo(video, function(err, result) {
			if (!err)
			{
				alert(result);
			}
		}, true);
	}
	else
	{
		setTimeout(StartQrScan, 1000);
	}
}
