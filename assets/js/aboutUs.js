
        var i = 0;//start point
		var images = [];

		var time = 1500;
		//Image List
		images[0] = '../images/fudlog2.png';
		images[1] = '../images/fudlog5.jfif';
		images[2] = '5.jpeg';
		images[3] = 'Div Style.png';

		//Change Images
		function changeImg(){
			document.slide.src = images[i];

			if (i < images.length - 1){
				i++;
			}
			else{
				i = 0;
			}
			setTimeout("changeImg()", time); 
		}
		window.onload = changeImg;

