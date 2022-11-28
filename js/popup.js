$(document).ready(function() {
	$('.openMyPopup').click(function(e) {e.preventDefault();
    openPopup($(this).attr("data-popup"));});

$('.closePopup').click(function(e) {e.preventDefault();
    closePopup($(this).attr("data-popup"));});
	
//$('.popup ').click(function(e) {e.preventDefault();
//    closePopup($(this).attr("data-popup"));});


function openPopup(popup) {

	$("#"+popup).show();
console.log(popup)
}

function closePopup(popup) {
	
	$("#"+popup).hide();
	
}

});
