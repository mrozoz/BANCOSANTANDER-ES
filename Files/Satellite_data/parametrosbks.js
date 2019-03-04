var nombreParametro = Array(); 
var valorParametro = Array();
var escenarios = new Array();

/**
 * Devuelve el valor de la url concatenando los valores de nombreParametro y valorParametro
 * nombreParametro y valorParametro se cargan en la pagina
 * @see
 * @param urlFija
 * @return String
*/
function buildURL(urlFija,sParametros)
    	{ 
    	var num_param = nombreParametro.length;
	    var url1 = urlFija;
	    if (sParametros)
	    {
	    	var separador= ",";
	    	var parametros= sParametros.split(separador); 
	    	var num_parametros=parametros.length;
		    for (var i=0; i<num_param; i++)
	  	  {
	  	  	  for (var j=0; j<num_parametros; j++)
	  	  		{
	    	      if (nombreParametro[i].toLowerCase()==parametros[j].toLowerCase())
	    	      {
	    	      	url1 += '&'+nombreParametro[i]+'='+valorParametro[i];
	    	      	break;
	    	      }
			    	}
	    	}
	    }
	    else
	   {
	     for (var i=0; i<num_param; i++)
	    		{
	        url1 += '&'+nombreParametro[i]+'='+valorParametro[i];
	    	  }
	    }	
	    return url1;
        }

/**
 * Añade un escenario
 * @see
 * @param name
 * @param value
 * @return
 * @call buildURL
*/        
function addEscen(name, value)
{
	escenarios[name] = value;
}

/**
 * Abre en la misma vta url que se le pasa como parametro en la pagina actual parametrizando el escenario
 * @see
 * @param sUrl
 * @param escen
 * @return
 * @call buildURL
*/        
function goURL(escen, sUrl)
{
	goURL2(escenarios[escen] + sUrl);
}
        
/**
 * Abre en la misma vta url que se le pasa como parametro en la pagina actual
 * @see
 * @param sUrl,
 * @return
 * @call buildURL
*/        
function goURL2(sUrl)
{
 var urldest = buildURL(sUrl,null);
 document.location=urldest;
}
/**
 * Abre en la misma vta url que se le pasa como parametro y los parametros especificados
 * @see
 * @param sUrl,
 * @param sParametros
 * @return
 * @call buildURL
*/        
function goURLP(sUrl,sParametros)
{
 var urldest = buildURL(sUrl,sParametros);
 document.location=urldest;
}
/**
 * Asocia las funciones de la pagina al frame sin parent.funcion
 * @see
 * @param
 * @param 
 * @return
*/ 
function cargaFunciones(frm)
{
frames[frm].goURL=goURL;
frames[frm].goURLP=goURLP;		
}
