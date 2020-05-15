function redireciona(x){
	var coordenada = $("#" + x).offset();
	var coordenada_top = coordenada.top;
	$('html, body').animate({ 
		scrollTop: coordenada_top - 80 
	}, 1000);
}
flag = 1;
function slideToggle(){
	if (flag == 1) {
		
	$("nav#menu").slideToggle(1000);
	$("img#seta").attr("src","imagem/down_arrow.png");
	flag = 0;
	
	}
	
	else {
		
	$("nav#menu").slideToggle(1000);
	$("img#seta").attr("src","imagem/up_arrow.png");
	flag = 1;
		
	}
	
}