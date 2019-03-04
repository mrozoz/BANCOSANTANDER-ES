/**
 * JS que lee la cookie de sesión
 * @Copyright ISBAN
 * @date 04/02/2016
 * @see sin referencias
 */
function leerCookie(nombre) 
{
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search(nombre);
		if (busca > -1) {micookie=lista[i]}
	}
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual+1);
	return valor;
}

<!-- Recogemos variables -->

var valorCookie = leerCookie('___trt00490086');
var arrayValoresCookie = valorCookie.split('#');
var valorCC;
var valorMrk;
var valorSqcon;
var valorSqconDos;
var valorGre;
var valorHgch;

for( i=0; i < arrayValoresCookie.length; i++ )
{
    if(arrayValoresCookie[i].indexOf('SQcon.js')!='-1'){valorSqcon = arrayValoresCookie[i];}
    if(arrayValoresCookie[i].indexOf('cc.js')!='-1'){valorCC = arrayValoresCookie[i];}
    if(arrayValoresCookie[i].indexOf('mrk.js')!='-1'){valorMrk = arrayValoresCookie[i];}
	if(arrayValoresCookie[i].indexOf('SQcon2.js')!='-1'){valorSqconDos = arrayValoresCookie[i];}
	if(arrayValoresCookie[i].indexOf('gre.js')!='-1'){valorGre = arrayValoresCookie[i];}
	if(arrayValoresCookie[i].indexOf('hg_ch.js')!='-1'){valorHgch = arrayValoresCookie[i];}
}

var sessionID = arrayValoresCookie[arrayValoresCookie.length - 2];
var identifUsu = arrayValoresCookie[arrayValoresCookie.length - 1];;

<!-- Fin -->

<!-- Recogemos variables de cookie temporal -->
var valorCookieTemp = leerCookie('___tmptrt00490086');
var arrayValoresCookieTemp = new Array(0);
var identifUsuarioLogado;
if(valorCookieTemp!='')
{
	arrayValoresCookieTemp = valorCookieTemp.split('#');	
	identifUsuarioLogado = arrayValoresCookieTemp[1];
}
else
{
	identifUsuarioLogado = arrayValoresCookie[arrayValoresCookie.length - 1];
}

<!-- Fin -->

function utag7(){return sessionID;}

function utag8(){return identifUsu;}

function utag6(){ return { "p": [identifUsuarioLogado]}; }


(function(d,f){var b={src:(d.location.protocol=="https:"?"https:":"http:")+"//"+valorSqconDos+"?r=" + Math.random(),async:true,type:"text/javascript"},g="XMLHttpRequest",c=f.createElement("script"),h=f.getElementsByTagName("head")[0],a;if(d[g]&&(a=new d[g]()).withCredentials!==undefined){a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(e){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b.src;h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var e in b){c.setAttribute(e,b[e])}h.appendChild(c)},0)}})(window,document);
(function(d,f){var b={src:(d.location.protocol=="https:"?"https:":"http:")+"//"+valorGre+"?r=" + Math.random(),async:true,type:"text/javascript"},g="XMLHttpRequest",c=f.createElement("script"),h=f.getElementsByTagName("head")[0],a;if(d[g]&&(a=new d[g]()).withCredentials!==undefined){a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(e){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b.src;h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var e in b){c.setAttribute(e,b[e])}h.appendChild(c)},0)}})(window,document);
(function(d,f){var b={src:(d.location.protocol=="https:"?"https:":"http:")+"//"+valorHgch+"?r=" + Math.random(),async:true,type:"text/javascript"},g="XMLHttpRequest",c=f.createElement("script"),h=f.getElementsByTagName("head")[0],a;if(d[g]&&(a=new d[g]()).withCredentials!==undefined){a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(e){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b.src;h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var e in b){c.setAttribute(e,b[e])}h.appendChild(c)},0)}})(window,document);
(function(){var d=document,c=window,g=c.location.protocol,e="XMLHttpRequest",a,h=c[e]&&(a=new c[e]()).withCredentials!==undefined,b=d.createElement("script"),f=d.getElementsByTagName("head")[0];b.src=(g=="https:"?"https://":"http://")+valorSqcon+"?r=" + Math.random();b.async=true;if(!h){setTimeout(function(){b.type="text/javascript";f.appendChild(b)},0)}else{a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(i){if(a.readyState==4&&a.status==200){b.type="script/meta";f.appendChild(b);new Function(a.responseText)()}};a.send()}})();
(function(d,f){var b={src:(d.location.protocol=="https:"?"https:":"http:")+"//"+valorCC+"?r=" + Math.random(),async:true,type:"text/javascript"},g="XMLHttpRequest",c=f.createElement("script"),h=f.getElementsByTagName("head")[0],a;if(d[g]&&(a=new d[g]()).withCredentials!==undefined){a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(e){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b.src;h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var e in b){c.setAttribute(e,b[e])}h.appendChild(c)},0)}})(window,document); 
(function(d,f){var b={src:(d.location.protocol=="https:"?"https:":"http:")+"//"+valorMrk+"?r=" + Math.random(),async:true,type:"text/javascript"},g="XMLHttpRequest",c=f.createElement("script"),h=f.getElementsByTagName("head")[0],a;if(d[g]&&(a=new d[g]()).withCredentials!==undefined){a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(e){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b.src;h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var e in b){c.setAttribute(e,b[e])}h.appendChild(c)},0)}})(window,document); 