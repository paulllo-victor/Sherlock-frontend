/********
AUTHOR: PAULO VICTOR;
DATA DE CRIACAO:04/04/2020 - 10:13;
PROJETO:GOODVIBES;
EMPRESA:SHAWEE - HACKTHON FOR GOOD;
EQUIPE:BRUNO, PAULO, RODRIGO E WAGNER;
TIPO DO ARQUIVO: FUNCTIONS (JS);
*********/

/*CARRREGAMENTO PAGE*/
$(window).on('load',function(){
	$('.carregamento-page').fadeOut();
	$('.wrapper').fadeIn();
})
/***/

/*TAMANHO DA TELA*/
$(function(){
	$(window).resize(function(){
		var tam = $(document).height();
		console.log(tam);
		if(tam > 1834 ){
			$('#coluna').removeClass('col-md-8');
		}
		if(tam ==  1834){
			$('#coluna').addClass('col-md-8');
		}
	})

	
})
/***/

$(function(){
	$('.form-contatos').submit(function(){
		alert('Mensagem enviada com sucesso');
	})
})