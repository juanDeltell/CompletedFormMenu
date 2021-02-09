	
		function muestraCuponDescuento() {
			document.getElementById('codigoDescuentoEncabezado').style.display = 'block';
			document.getElementById('codigoDescuento').style.display = 'block';
			document.getElementById('codigoDescuento').required = true;
			
			
			document.getElementById("codigoDescuento").onchange=function(){updateCodigoDescuento()};
		}
		
		function ocultaCuponDescuento() {
			document.getElementById('codigoDescuentoEncabezado').style.display = 'none';
			document.getElementById('codigoDescuento').style.display = 'none';
			document.getElementById('codigoDescuento').required = false;
			document.getElementById('cantidadTotalConDescuento').value = 0;
			document.getElementById('codigoDescuento').value = null;
			document.getElementById('cantidadTotalConDescuento').style.visibility = 'hidden';
			document.getElementById('descuento25').style.visibility = 'hidden';
			document.getElementById('eurosDescuento').style.visibility = 'hidden';
			updatePlatosForm();


			
			document.getElementById("codigoDescuento").onchange=null;
		}
		
		function muestraNombre() {
			document.getElementById('hoverNombre').style.visibility = 'visible';
			
		}
		function ocultaNombre() {
			document.getElementById('hoverNombre').style.visibility = 'hidden';

		}
		function muestraNIF() {
			document.getElementById('hoverNIF').style.visibility = 'visible';
			
		}
		function ocultaNIF() {
			document.getElementById('hoverNIF').style.visibility = 'hidden';

		}
				
		function muestraApellido() {
			document.getElementById('hoverApellido').style.visibility = 'visible';
			
		}
		function ocultaApellido() {
			document.getElementById('hoverApellido').style.visibility = 'hidden';

		}
		
		function muestraDireccion() {
			document.getElementById('hoverDireccion').style.visibility = 'visible';
			
		}
		function ocultaDireccion() {
			document.getElementById('hoverDireccion').style.visibility = 'hidden';

		}
		
		function muestraCodigoPostal() {
			document.getElementById('hoverCodigoPostal').style.visibility = 'visible';
			
		}
		function ocultaCodigoPostal() {
			document.getElementById('hoverCodigoPostal').style.visibility = 'hidden';

		}
		
		function muestraCorreo() {
			document.getElementById('hoverCorreo').style.visibility = 'visible';
			
		}
		function ocultaCorreo() {
			document.getElementById('hoverCorreo').style.visibility = 'hidden';

		}	
		function muestraTelefono() {
			document.getElementById('hoverTelefono').style.visibility = 'visible';
			
		}
		function ocultaTelefono() {
			document.getElementById('hoverTelefono').style.visibility = 'hidden';

		}
		function muestraPrimerPlato() {
			document.getElementById('hoverPrimerPlato').style.visibility = 'visible';
			
		}
		function ocultaPrimerPlato() {
			document.getElementById('hoverPrimerPlato').style.visibility = 'hidden';

		}
		function muestraSegundoPlato() {
			document.getElementById('hoverSegundoPlato').style.visibility = 'visible';
			
		}
		function ocultaSegundoPlato() {
			document.getElementById('hoverSegundoPlato').style.visibility = 'hidden';

		}
		function muestraIngredientesExtra() {
			document.getElementById('hoverIngredientesExtra').style.visibility = 'visible';
			
		}
		function ocultaIngredientesExtra() {
			document.getElementById('hoverIngredientesExtra').style.visibility = 'hidden';

		}
		function muestraBebida() {
			document.getElementById('hoverBebida').style.visibility = 'visible';
			
		}
		function ocultaBebida() {
			document.getElementById('hoverBebida').style.visibility = 'hidden';

		}
		function muestraCodigoDescuentoAyuda() {
			document.getElementById('hoverCodigoDescuentoAyuda').style.visibility = 'visible';
			
		}
		function ocultaCodigoDescuentoAyuda() {
			document.getElementById('hoverCodigoDescuentoAyuda').style.visibility = 'hidden';

		}
		
		
		function muestraTotal() {
			document.getElementById('hoverCodigoDescuentoAyuda').style.visibility = 'hidden';

		}
		
		function updatePlatosForm(){
			var form = document.getElementById("platosForm");
			var totalValue = 0;
			for(var i = 0; i < form.elements.length; i++){
				var newValue=0;
				if(form.elements[i].type == "checkbox"){
					if(form.elements[i].checked){
						newValue = parseFloat(form.elements[i].value);

					}
				}else if(form.elements[i].type == "radio"){
						if(form.elements[i].checked){
						newValue = parseFloat(form.elements[i].value);
						}
					}
				if(!isNaN(newValue) && newValue != "undefined" && newValue != null){
					totalValue = totalValue + newValue;
					}
				
				document.getElementById("cantidadTotal").value = totalValue;
			}
		}
		
		function comprobarIngredientes(){
			var formulario = document.getElementById("platosForm");
			var totalSeleccionados = 0;
			for(var i = 0; i < formulario.elements.length; i++){
				if(formulario.elements[i].type == "checkbox"){
					if(formulario.elements[i].checked){
						totalSeleccionados++;
					}
					if(totalSeleccionados>3){
						alert("Has seleccionado mas de 3 ingredientes, solo se pueden seleccionar hasta 3.");
						formulario.elements[i].checked = false;
					}
					
				}

			}
		}
		
		function registerChangeHandlers() {
			var form = document.getElementById("platosForm");
			
			for (var i = 0; i < form.elements.length; i++) {
			
				form.elements[i].onchange=function(){updatePlatosForm(); comprobarIngredientes();};
				/*if(!form.elements[i].checkValidity())
				{
					console.log(form.elements[i].style.border + " borde");
					form.elements[i].style.border = "1px solid #f00";
				}
				else{
					form.elements[i].style.border = "thick solid #0000FF ";
				}*/
			}
			
			codigoIsValid();
		}
		
		function codigoIsValid(){
			var codigo = document.getElementById("cuponDescuento");
			
			document.getElementById('cantidadTotalConDescuento').style.visibility = 'hidden';
			document.getElementById('descuento25').style.visibility = 'hidden';
			document.getElementById('eurosDescuento').style.visibility = 'hidden';

		}
		
		function muestracamposDescuento(newValue){
			
			document.getElementById('cantidadTotal').value = document.getElementById('cantidadTotal').value -newValue;
			document.getElementById('cantidadTotalConDescuento').value = newValue;
			document.getElementById('cantidadTotalConDescuento').style.visibility = 'visible';
			document.getElementById('descuento25').style.visibility = 'visible';
			document.getElementById('eurosDescuento').style.visibility = 'visible';

		}	
		
		function updateCodigoDescuento(){
			
			var suma = 0;
			var codigo = document.getElementById("codigoDescuento").value;
			
			var uno = codigo.charAt(0);
			var unos = uno.toUpperCase();
			var dos = codigo.charAt(1);
			var doss = dos.toUpperCase();
			var tres = codigo.charAt(2);
			var cuatro = codigo.charAt(3);
			var cinco = codigo.charAt(4);
			/*
			 Cada letra posee el valor de su posicion en el alfabeto multiplicado por 10.
			 El valor de un codigo se obtiene sumando el valor de las letras y el de los digitos.
			 Ejemplo: BB234 vale 20+20+2+3+4.
			 Un codigo es correcto si su valor es 101.
			*/
			var primerDigito = unos.charCodeAt(0);
			var segundoDigito = doss.charCodeAt(0);
			
			
			
			primerDigito = primerDigito-64;
			segundoDigito = segundoDigito-64;
			
			
			suma =  parseInt(10*primerDigito);
			suma = suma + parseInt(10*segundoDigito);
			suma = suma + parseInt(tres);
			suma = suma + parseInt(cuatro);
			suma = suma + parseInt(cinco);
			

			if (document.getElementById("codigoDescuento").checkValidity()) {
				if(suma != 43){//aa111
					console.log("El código que has introducido no es correcto.");
					document.getElementById('cantidadTotalConDescuento').value = 0;
					document.getElementById('cantidadTotalConDescuento').style.visibility = 'hidden';
					document.getElementById('descuento25').style.visibility = 'hidden';
					document.getElementById('eurosDescuento').style.visibility = 'hidden';
					updatePlatosForm();
					
				}else{
					//aplicamosDescuento
					
					
					var total = document.getElementById('cantidadTotal');
					var totalConDescuento = total.value * 0.75;
					console.log("antes descuento " + total.value);
					console.log("despues " + totalConDescuento);
					muestracamposDescuento(total.value - totalConDescuento);
				}
			}
			else{
					document.getElementById('cantidadTotalConDescuento').value = 0;
					document.getElementById('cantidadTotalConDescuento').style.visibility = 'hidden';
					document.getElementById('descuento25').style.visibility = 'hidden';
					document.getElementById('eurosDescuento').style.visibility = 'hidden';
					updatePlatosForm();
			}
		}
		
		function permitirSubmit(){
			var formulario = document.getElementById("platosForm");
			var activar = true;	
				for (var i = 0; i < formulario.elements.length; i++) {
					if(!formulario.elements[i].checkValidity()){
						activar = false;
					}
				}
				
			if(activar)
			{
				document.getElementById('enviar').disabled=true;
			}
			else
			{
				document.getElementById('enviar').disabled=false;
			}
		}
		
		
		function controlNumeroMaximoIngredientesExtra(){
			var formulario = document.getElementById("platosForm");
			
			for (var i = 0; i < formulario.elements.length; i++) {
				formulario.elements[i].onchange=function(){comprobarIngredientes()};
			}
			
		}
		
		function contacto(){
			var correo = document.getElementById("correo");
			var telefono = document.getElementById("telefono");
			
			//si esta chequeado correo, no hace falta chequear telefono
			if(correo.checkValidity()){
				telefono.required = false;
			}else if(telefono.checkValidity()){
				//si esta chequeado telefono, no hace falta chequear correo
				correo.required = false;
			}else if(!correo.checkValidity() && !correo.checkValidity()){
				//si no esta ninguno chequeado, se dejan obligados
				telefono.required = true;
				correo.required = true;
			}
			
			
		}
		
		function onLoad(){
			registerChangeHandlers();
			permitirSubmit();
		}