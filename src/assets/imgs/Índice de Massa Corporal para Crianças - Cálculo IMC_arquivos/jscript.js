var tabelaIMC = {
	0 : {"min": 0, "max": 17, "msg": "Voc&ecirc; est&aacute; muito abaixo do seu peso ideal!"},	
	1 : {"min": 17, "max": 18.5, "msg": "Voc&ecirc; est&aacute; abaixo do seu peso ideal!"},
	2 : {"min": 18.5, "max": 25, "msg": "Parab&eacute;ns, voc&ecirc; est&aacute; em seu peso ideal!"},
	3 : {"min": 25, "max": 30, "msg": "Sobrepeso - Voc&ecirc; est&aacute; acima do seu peso ideal."},
	4 : {"min": 30, "max": 35, "msg": "Obesidade - grau I"},
	5 : {"min": 35, "max": 40, "msg": "Obesidade - grau II (severa)"},
	6 : {"min": 40, "max": 1000, "msg": "Obesidade - grau III (m&oacute;rbida)"}
};

var ctrl_arr = {'peso': false,'altura': false};

var hasLoad = false;

var resultado;

function calcularIMC() {

	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	if(peso == "" || altura == "" || !ctrl_arr['peso'] || !ctrl_arr['altura'] ){
		alert('Preencha o peso e a altura');
		return false;
	}
	
	/* TODO check numbers */
	
	
	/* troca virgula por ponto */
	if(peso.indexOf(",")!= -1){
		peso = peso.replace(",", ".");
	}

	if(altura.indexOf(",")!= -1){
		altura = altura.replace(",", ".");
	}
	
	/* calcula o IMC */
	resultado = 0;
	
	peso = parseFloat(peso);
	altura = parseFloat(altura);
	
	if(altura > 100){
		altura = altura / 100;
	}
	
	resultado = peso / (altura * altura);
	resultado = resultado.toFixed(2); // ajusta o numero de casas decimais
	
	/* exibe o resultado */
	jQuery("#resultado_nr").html(resultado.replace(".",","));

	/* busca intervalo na tabela */
	var i =0;
	for (i in tabelaIMC){
		if((resultado > parseFloat(tabelaIMC[i]['min'])) && (resultado <= parseFloat(tabelaIMC[i]['max']))){
		    jQuery("#resultado_msg").html(tabelaIMC[i]['msg']);

		    jQuery("#resultado_nr").removeAttr("class");
		    jQuery("#resultado_msg").removeAttr("class");
			
		    jQuery("#resultado_nr").addClass("msg_"+i);
		    jQuery("#resultado_msg").addClass("msg_"+i);
		    
		    var rows = jQuery("#tabela-resultado-imc tbody tr");
		    jQuery(rows).removeAttr("class");
		    jQuery(rows[i]).addClass("selected-row");
			break;
		}		
	}

	/* calcula resultado ideal */
	var peso_min;
	var peso_max;
	
	peso_min = 18.5 * altura * altura;
	peso_min = peso_min.toFixed(0);
	jQuery("#resultado_ideal_min").html(peso_min); 
	
	peso_max = 25 * altura * altura;
	peso_max = peso_max.toFixed(0);
	jQuery("#resultado_ideal_max").html(peso_max);
	
	if(!hasLoad){
	    
    	/* links para compartilhar */
    	//jQuery("<img />")
    	//    .attr("src", "arquivos/twitter.jpg")
    	//    .attr("alt", "Compartilhar no Twitter")
    	//    .appendTo("#link_share_twitter");

	 jQuery("<img />").attr("src", "arquivos/facebook.jpg").attr("alt", "Compartilhar no Facebook").appendTo("#link_share_facebook");
        
        //jQuery.getScript('http://platform.twitter.com/widgets.js');
        
        //jQuery("#form_twitter_status").click(function(){ 
        //    _gaq.push(['_trackEvent', 'Share', 'Twitter']);
        //});
	}
	
	//jQuery("#form_twitter_status").attr("href", "http://www.twitter.com/share?text=O+meu+IMC+deu+"+resultado.replace(".",",")+".+E+o+seu?");


	/* exibe resultados */
	jQuery("#result").fadeIn();
	
	/* track analytics */

	_gaq.push(['_trackEvent', 'Calculo', 'Click']);
	
	/* flag */
	hasLoad = true;
	
	/* salva */
	var dataString = 'acao=imc&peso=' + peso + '&altura=' + altura + '&imc=' + resultado;
	jQuery.ajax({
		type: "POST",
		url: "acoes.php",
		data: dataString,
		success: function() {
		//display message back to user here
	}
	});
	
	return false;
}

function shareFacebook(){
	
	/* track analytics */
	_gaq.push(['_trackEvent', 'Share', 'Facebook']);
	
	FB.init({
			appId  : '219758321386875',
			channelUrl  : 'http://www.calculoimc.com.br/channel.html',  // custom channel
			xfbml : 1
	});
	
	 FB.ui({ 
	 		 method: 'feed',
	 		 name: 'Meu IMC &eacute; '+resultado+'. E o seu?',
	 		 link: 'http://www.calculoimc.com.br/',
	 		 picture: 'http://www.calculoimc.com.br/arquivos/icon_facebook.png',
	 		 caption: 'http://www.calculoimc.com.br',
	 		 description: 'Eu fiz o c&aacute;lculo do meu &Iacute;ndice de Massa Corporal (IMC) e o meu resultado foi '+resultado,
	 		 message: ''
	 },
	 		 
	 		 function(response) {
	 		 	 if (response && response.post_id) {
	 		 	 	 alert('Publicado com sucesso.');
	 		 	 } else {
	 		 	 	 alert('Ocorreu um erro e nada foi publicado.');
	 		 	 }
	 		 });
}

function ctrlFocusInput(id){
    if(!ctrl_arr[id]){
        jQuery('#'+id).attr('value', '');
        jQuery('#'+id).attr('class', 'activated');
        ctrl_arr[id] = true;
    }
}

function ctrlBlurInput(id){
    if(jQuery('#'+id).attr('value').length == 0){
        jQuery('#'+id).attr('class', 'deactivated');
        if(id == "peso"){
            jQuery('#'+id).attr('value', 'peso (em kg)');
        }else if(id == "altura"){
            jQuery('#'+id).attr('value', 'altura (em metros)');
        }
        ctrl_arr[id] = false;
    }
}
