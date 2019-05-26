(function($){


$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    smartSpeed : 3000
});
$(document).ready(function(){
      let mixer = mixitup('.mixitup-container')
    });

$( function() {
    $( "#accordion" ).accordion();
  } );
// $( function() {
// 	$( "#progressbar-90" ).progressbar({
// 		value: 90,
// 	});
// 	$( "#progressbar-80" ).progressbar({
// 		value: 80
// 	});
// 	$( "#progressbar-55" ).progressbar({
// 		value: 55
// 	});
// 	$( "#progressbar-50" ).progressbar({
// 		value: 50
// 	})
// })
$( '#progressbar-90' ).LineProgressbar({
	percentage: 90,
	fillBackgroundColor: '#60ba60',
	backgroundColor: '#EEEEEE',
  	radius: '5px',
  	height: '10px',
  	width: '100%'
})
$( '#progressbar-80' ).LineProgressbar({
	percentage: 80,
	fillBackgroundColor: '#60c2df',
	backgroundColor: '#EEEEEE',
  	radius: '5px',
  	height: '10px',
  	width: '100%'
})
$( '#progressbar-55' ).LineProgressbar({
	percentage: 55,
	fillBackgroundColor: '#f0af53',
	backgroundColor: '#EEEEEE',
  	radius: '5px',
  	height: '10px',
  	width: '100%'
})
$( '#progressbar-50' ).LineProgressbar({
	percentage: 50,
	fillBackgroundColor: '#db5a57',
	backgroundColor: '#EEEEEE',
  	radius: '5px',
  	height: '10px',
  	width: '100%'
})

}(jQuery))