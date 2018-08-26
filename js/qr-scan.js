function StartQrScan()
{
	var video = document.querySelector('video');
	var modelName;
	if (video)
	{
		QCodeDecoder().decodeFromVideo(video, function (error, result)
		{
			if (!error && result.slice(-4).toLowerCase() == ".dae" && result != modelName)
			{
				modelName = result;
				alert(modelName);
				ChangeModel(modelName);
				console.log(modelName);
			}
		}, false);
	}
	else
	{
		setTimeout(StartQrScan, 1000);
	}
}

function ChangeModel(name)
{
	var model = document.querySelector('a-collada-model ');
	model.setAttribute('collada-model', 'url(' + name + ')');
	model.setAttribute("scale", '0.1 0.1 0.1');
}
