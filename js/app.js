$(document).ready(function () {
	splash();

  //	Imprimir restaurantes
 	$.each(data, function() {
	  $('.rest-list').append('<div class="rest col-md-5 col-10" id = '+ this.id +' data-type = '+ this.type +' data-toggle="modal" data-target="#restModal"></div>');

	  $('#'+this.id).css({
      'background': 'url(' + this.image + ')', 'background-size': 'cover', 'background-position': 'center left'});
    });
    
  // Efecto mouseover
  $('.rest').mouseover(function() {
    $(this).css({
    'opacity': '0.7', 'height': '35vh'});
  });   

  $('.rest').mouseout(function() {
    $(this).css({
    'opacity': '1', 'height': '25vh'});
  });

  // Filtrar resultados
  $('#search-input').keyup(function() {
    var filter = $(this).val().toLowerCase();
    $('.rest').hide();
    $('.rest').each(function() {
      console.log(this);
      var search = $(this).data( "type");
      if (search.indexOf(filter) !== -1) {
        $(this).fadeIn();
      }
    });
  });

  //Completar modal
  $('.rest').click(function() {
    var getRest = data[$(this).attr("id")];
    var map = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyC6Wjl1gMxg1pJHeUfMpQmg1Ykt0hZQ3-4='+' &origin=Laboratoria,Benavides+1180&destination='+ getRest.name + getRest.address.split(' ').join('%20');
    $('.modal-title').text(getRest.name);
    $('#mapModal').attr("src", map);
    $('#priceModal').text('El precio promedio por persona oscila entre '+getRest.price);
    $('#addressModal').text('Av. '+getRest.address);


  });

});

function splash() {
	setTimeout(function () {
		$('#splash-effect').fadeOut(500);
	}, 1000);
}