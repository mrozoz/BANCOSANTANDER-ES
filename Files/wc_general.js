/**
 * Javascript general
 * @Copyright VECTOR 
 * @date 01/01/2007 
 * @see sin referencias
*/
window.onload=enabled;
window.scrollbars="no";
var menuactivo=null;
var submenuactivo=null;

var iframeid="WORKAREA";

var CTE_Scroll = 20; // Para evitar scroll horizontal en ciertas paginas que hay una label como final de pagina.
var alturaMinima = 696; // Para evitar situaciones donde el area derecha pueda ser mayor que el workarea, caso de pagos se pone una altura mnima de 696.




function resizeCaller() {

	if (document.getElementById)
	{
		resizeIframe("WORKAREA");
		if (document.getElementById){
			var tempobj=document.getElementById("WORKAREA");
			tempobj.style.display="block";
		}
	}
	
}	

function resizeIframe(frameid) {

	var currentfr=document.getElementById(frameid);
	var menuIzq=document.getElementById("menu");
	
	
	document.getElementById("WORKAREA").style.visibility="visible";
	document.getElementById("menuDisabled").style.display="none";
	try{
		if (navigator.appName != 'Microsoft Internet Explorer' && currentfr.contentDocument && currentfr.contentDocument.body.scrollHeight)
		{
			currentfr.setAttribute("style", style="position: absolute; top: 66px;width:814px;left: 189px; overflow-x:hidden;overflow-y:auto; 	SCROLLBAR-FACE-COLOR: #efe5e5; SCROLLBAR-HIGHLIGHT-COLOR: #fdfdfe;SCROLLBAR-SHADOW-COLOR: #dcc6c8; SCROLLBAR-3DLIGHT-COLOR: #c90212; SCROLLBAR-ARROW-COLOR: #5a5a5a; PADDING-TOP: 0px; SCROLLBAR-TRACK-COLOR: #ebebeb; SCROLLBAR-DARKSHADOW-COLOR: #c90212; BACKGROUND-COLOR: transparent;height:0px");
		}
	}catch (exception){}
	
		var currentHeight=calcHeight();	
		menuIzq.style.height=currentHeight;
		
		currentfr.style.display="block";

		if (currentfr.addEventListener){
			currentfr.addEventListener("load", readjustIframe, false);
		}else if (currentfr.attachEvent){
			currentfr.detachEvent("onload", readjustIframe); // Bug fix line
			currentfr.attachEvent("onload", readjustIframe);
		}

		if (navigator.appName != 'Microsoft Internet Explorer')
		{
			currentfr.setAttribute("style", style="position: absolute; top: 66px;width:814px;left: 189px; overflow-x:hidden;overflow-y:auto; SCROLLBAR-FACE-COLOR: #efe5e5; SCROLLBAR-HIGHLIGHT-COLOR: #fdfdfe;SCROLLBAR-SHADOW-COLOR: #dcc6c8; SCROLLBAR-3DLIGHT-COLOR: #c90212; SCROLLBAR-ARROW-COLOR: #5a5a5a; PADDING-TOP: 0px; SCROLLBAR-TRACK-COLOR: #ebebeb; SCROLLBAR-DARKSHADOW-COLOR: #c90212; BACKGROUND-COLOR: transparent;height:"+currentHeight+"px");
			menuIzq.setAttribute("style", style="position: absolute; top: 66px; width: 189px; height:"+currentHeight+"px;");
		}else{
			currentfr.height= currentHeight;
			menuIzq.style.height=currentHeight;
		}
	

}
function readjustIframe(loadevt) {
	window.scroll(0,0);
	var crossevt=(window.event)? event : loadevt;
	var iframeroot=(crossevt.currentTarget)? crossevt.currentTarget : crossevt.srcElement;
	
	document.getElementById("WORKAREA").style.visibility="hidden";
	
	if (iframeroot){
		resizeIframe(iframeroot.id);
	}
}

function calcHeight () {
	var currentHeight;
	try{
		var currentfr=document.getElementById("WORKAREA");
		if (currentfr.contentDocument && currentfr.contentDocument.body.scrollHeight) //ff 
			// Para evitar scroll horizontal en ciertas paginas que hay una label como final de pagina se añade 20px.
			currentHeight = currentfr.contentDocument.body.scrollHeight+20; 
		
		if (currentfr.Document && currentfr.Document.body.scrollHeight) //ie
			// Para evitar scroll horizontal en ciertas paginas que hay una label como final de pagina se añade 20px.
			currentHeight = currentfr.Document.body.scrollHeight+20;
		
		if(currentHeight==0 || currentHeight =='undefined' || currentHeight==null){
		
			var a=document.getElementById("WORKAREA");
			var b=a.contentDocument;
			if (b == null || b == 'undefined' || b.getElementById('Workarea') == null || b.getElementById('Workarea') == 'undefined')
			{
				// Para evitar situaciones donde el area derecha pueda ser mayor que el workarea, caso de pagos se pone una altura minima de 696.
				 currentHeight=696;
			}
			else{
				var c=b.getElementById('Workarea').offsetHeight;
				// Para evitar scroll horizontal en ciertas paginas que hay una label como final de pagina se añade 20px.
				currentHeight=c+20;
			}
		}	
		// Para evitar situaciones donde el area derecha pueda ser mayor que el workarea, caso de pagos se pone una altura minima de 696.
		if (currentHeight < 696) {
			currentHeight = 696;
		}
	}catch(exception){
		currentHeight=696;
	}
	return currentHeight;
}

function resizeIframeFirstTime() {
	document.getElementById("WORKAREA").style.visibility="hidden";
	disabledM(false);
	hilitie(document.getElementById('id0'));
}

function disabledM(x){   
 document.getElementById('menuvert').disabled=x;
}

function enabled(){
  disabledM(false);
}

function loadFrame(obj){
     
    obj.style.visibility="visible";

    disabledM(false); 
}


function iniciar(url){
	if (window.addEventListener){
		window.addEventListener("load", resizeCaller, false);
	}else if (window.attachEvent){
		window.attachEvent("onload", resizeCaller);
	}else{
		window.onload=resizeCaller;
	}

    document.body.innerHTML += '<iframe onload="loadFrame(this);" src="'+url+'" id="WORKAREA" name="WORKAREA"  frameborder="0" framespacing="0" border="0"  style="position: absolute; top: 66px;width:814px;left: 189px; overflow-x:hidden;overflow-y:auto; SCROLLBAR-FACE-COLOR: #efe5e5; SCROLLBAR-HIGHLIGHT-COLOR: #fdfdfe;SCROLLBAR-SHADOW-COLOR: #dcc6c8; SCROLLBAR-3DLIGHT-COLOR: #c90212; SCROLLBAR-ARROW-COLOR: #5a5a5a; PADDING-TOP: 0px; SCROLLBAR-TRACK-COLOR: #ebebeb; SCROLLBAR-DARKSHADOW-COLOR: #c90212; BACKGROUND-COLOR: transparent"></iframe>';
 
 
	document.body.style.visibility="visible";
	document.getElementById("WORKAREA").style.visibility="hidden";
	
}

//*Añadimos los eventos * @Copyright VECTOR * @date 01/01/2007 * @see sin referencias

function addEvent(obj,type,fn){
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent){
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}

// * ponemos el mens vertical oculto (y mostrado el activo) * @Copyright VECTOR * @date 01/01/2007 * @see sin referencias

function menuVert(){
	if(document.getElementById('menuvert')){
	    disabledM(true);
		//ocultamos los submenus
		var i=0;
		for(i=0;i<document.getElementById('menuvert').getElementsByTagName('li').length;i++){
			if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('ul').length>0){
				if(document.getElementById('menuvert').getElementsByTagName('li')[i].className=='abierto'){
			
					document.getElementById('menuvert').getElementsByTagName('li')[i].className= document.getElementById('menuvert').getElementsByTagName('li')[i].className.replace('abierto','cerrado');
				}
				document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className = 'conhijos';
				menuVertComportamiento(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0]);
			}
		}
	}
}

// * añadimos el comportamiento * @Copyright VECTOR * @date 01/01/2007 * @see sin referencias 

function menuVertComportamiento(elEnlace){
	addEvent( elEnlace, 'click', plegardesplegar );
}


function plegardesplegar(){menuVertDesplegar(this);return false;}

// * mostramos - ocultamos los submenus * @Copyright VECTOR * @date 01/01/2007 * @see sin referencias 

function menuVertDesplegar(elSubmenu){
	if(elSubmenu.parentNode.className.indexOf('abierto')!=-1){
		elSubmenu.parentNode.className=elSubmenu.parentNode.className.replace('abierto','cerrado');
		if(elSubmenu.className!="conhijosActivo")
		{
			elSubmenu.className="conhijos";	
			submenuactivo =null;
		}
	}else if(elSubmenu.parentNode.className.indexOf('cerrado')!=-1){
		elSubmenu.parentNode.className=elSubmenu.parentNode.className.replace('cerrado','abierto');
		submenuactivo = elSubmenu;
	}
	
	return false;
}

function raiseItemSelect(id)
{
	var i;
	var j;
	var x;
	var submenuNoActivo=false;
	for(i=0;i<document.getElementById('menuvert').getElementsByTagName('li').length;i++)
	{
		if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('ul').length>0)
		{
			if(document.getElementById('menuvert').getElementsByTagName('li')[i].className=='abierto')
			{
				document.getElementById('menuvert').getElementsByTagName('li')[i].className= document.getElementById('menuvert').getElementsByTagName('li')[i].className.replace('abierto','cerrado');
			}
			if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className == 'conhijosActivo')
			{
				for(j=0;j<document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a').length;j++)
				{
					if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[j].id==id)
					{
						document.getElementById('menuvert').getElementsByTagName('li')[i].className= document.getElementById('menuvert').getElementsByTagName('li')[i].className.replace('cerrado','abierto');
						submenuNoActivo=true;
					}
					
				}
				if(!submenuNoActivo)
				{
					document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className = 'conhijos';
				}
				document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className == 'conhijos';
			}
			for(x=0;x<document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('ul')[0].getElementsByTagName('a').length;x++)
			{
				if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('ul')[0].getElementsByTagName('li')[x].className=='enabled')	
				{
					document.getElementById('menuvert').getElementsByTagName('li')[i].className= document.getElementById('menuvert').getElementsByTagName('li')[i].className.replace('cerrado','abierto');
					document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className = 'conhijosActivo';
				}
			}
		}
	}


 	if(!document.getElementById('menuvert').disabled){
    
		var pestana = menu[id][2];
	    var url; 
    
    	if (pestana == "3"){
			url = (menu[id][4]=="O")?menu[id][1]:menu[id][0];  
			//cambio de pestañas, para ms adelante
			// primero preguntar si tienen que estar activas o desactivas 
		}
		else if (pestana == "0")
		{
			// desactivar las pestañas
			document.getElementById("pestana").style.visibility = "hidden";
			 url  = (menu[id][4]=="O")?menu[id][1]:menu[id][0];  
		}
		else if (pestana == "1")
		{
			//ids correspondientes a los del MenuEstatico_xxx_xxx.properties para activar la pestaña por defecto(los 400 son de OPEN INT)
			if(id=='id173'||id=='id174'||id=='id26'||id=='id27'||id=='id18'||id=='id44'||id=='id46'||id=='id400'||id=='id401'||id=='id402'||id=='id403'||
				id=='id404'||id=='id405'||id=='id406'||id=='id407'||id=='id408'||id=='id409'||id=='id410'||id=='id411'||id=='id412'||id=='id413')
			{
				// activar la pestaña de contratacion
				document.getElementById("pestana").style.visibility = "visible";		
				document.getElementById("pestanaOperativa").className  = "";
				document.getElementById("pestanaContratacion").className  = "activo";
				document.getElementById("pestanaOperativa").onclick= function() {changeTab(id,1);} 
				document.getElementById("pestanaContratacion").onclick= function() {changeTab(id,2);} 
				url  = menu[id][0];
			}
			else
			{
				// activar la pestaña de operativa
				document.getElementById("pestana").style.visibility = "visible";		
				document.getElementById("pestanaOperativa").className  = "activo";
				document.getElementById("pestanaContratacion").className  = "";
				document.getElementById("pestanaOperativa").onclick= function() {changeTab(id,1);} 
				document.getElementById("pestanaContratacion").onclick= function() {changeTab(id,2);} 
			    url  = menu[id][1];
			}
		}
		else
		{
			// activar la pestaña de contratacion
			document.getElementById("pestana").style.visibility = "visible";		
			document.getElementById("pestanaOperativa").className  = "";
			document.getElementById("pestanaContratacion").className  = "activo";
			document.getElementById("pestanaOperativa").onclick= function() {changeTab(id,1);} 
			document.getElementById("pestanaContratacion").onclick= function() {changeTab(id,2);} 
			url  = menu[id][0];
		}
		
		var opcionAhorra = document.getElementById("id150");
		if (opcionAhorra != null && opcionAhorra != "undefined"){
			if (id == "id150"){
				opcionAhorra.style.backgroundPosition = "-462px -516px";
			}else{
				opcionAhorra.style.backgroundPosition = "-22.1em -36.2em";
			}
		}
		submit(url,id);
	}
} 	

function changeTab(id, pestana)
{
	var url;
	
	if (pestana == "1")
	{
		document.getElementById("pestanaOperativa").className = "activo";
		document.getElementById("pestanaContratacion").className = "";
		url=menu[id][1];
		document.getElementById("operativa_href").href="#";		
	}
	else
	{
		document.getElementById("pestanaOperativa").className = "";
		document.getElementById("pestanaContratacion").className = "activo";
		url=menu[id][0];
		document.getElementById("contratacion_href").href="#";
	}
	
	document.getElementById(id).className = "activo";
	//lanzar formulario
    submit(url,id);	
}

function submit(url, id){   
   var method = "POST";
   var target = "WORKAREA";

   if (url.indexOf("?newTab=S") != -1 || url.indexOf("&newTab=S") != -1){
	   target = "_blank";
   }
   
   if (url.indexOf(".pdf") != -1){
	   method = "GET";
	   target = "_blank";
   }else if (id == "id77"){
	   target= "";
   }
   
   url = url.replace("?newTab=S","").replace("&newTab=S","").replace("?newTab=N","").replace("&newTab=N","");
   
   document.accesibleform.action= url;
   document.accesibleform.target= target;     	
   document.accesibleform.method= method;
   document.accesibleform.submit();
}

function hilitie(obj){
	if(!document.getElementById('menuvert').disabled){
	   
	   if(submenuactivo!=null)
	   {
	      submenuactivo.className="conhijosActivo";
	      submenuactivo=null;
	   }
	   else
	   {
	    var i=0;
		for(i=0;i<document.getElementById('menuvert').getElementsByTagName('li').length;i++){
			if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('ul').length>0){
				if(document.getElementById('menuvert').getElementsByTagName('li')[i].className=='abierto')
				{
					document.getElementById('menuvert').getElementsByTagName('li')[i].className= document.getElementById('menuvert').getElementsByTagName('li')[i].className.replace('abierto','cerrado');
				}
				if(document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className == 'conhijosActivo')
				{
					document.getElementById('menuvert').getElementsByTagName('li')[i].className= document.getElementById('menuvert').getElementsByTagName('li')[i].className.replace('cerrado','abierto');
				}

				document.getElementById('menuvert').getElementsByTagName('li')[i].getElementsByTagName('a')[0].className == 'conhijos';
			
			}
		}
	   }
	   if(menuactivo!=null)
	   {
   	   		menuactivo.parentNode.className="";
	   }
	   menuactivo=obj;   
	   menuactivo.parentNode.className="enabled";
	}else{
	  var e = window.event;
	  // cancel event
	  if(e!=null){
	     e.cancelBubble = true;
	  	if (e.stopPropagation) e.stopPropagation();
	  }
	
	}   
}

function enlaceCabecera(url){
	document.getElementById("pestana").style.visibility = "hidden";
	submit(url);
}

function ocultaPestanas(){	
	document.getElementById("pestana").style.visibility = "hidden";
}

function openWin(url){
	window.open(url,"supernet");
}

function openDemo(url){
	window.open(url,"supernet","toolbar=no,titlebar=no,location=no,status=yes,menubar=no,"
				  + "scrollbars=no,resizable=no,maximize=yes,left=0,top=0,width=792,height=568");
}