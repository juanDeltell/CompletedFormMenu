<?php
	$nombre = $_POST["nombre"];
	$apellidos = $_POST["apellidos"];
	$direccion = $_POST["direccion"];
	$codigoPostal = $_POST["codigoPostal"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$primerPlato = $_POST["primerPlato"];	
	$segundoPlato = $_POST["segundoPlato"];	
	$ingredienteExtra = $_POST["ingredienteExtra"];	
	$bebida = $_POST["bebida"];
	$hayDescuento = $_POST["cuponDescuento"];
	$cantidadTotal = $_POST["cantidadTotal"];
	$codigoDescuento = $_POST["codigoDescuento"];
	$cantidadTotalConDescuento = $_POST["cantidadTotalConDescuento"];
	$subtotal = $cantidadTotalConDescuento + $cantidadTotal;

	echo ("Nombre: $nombre <br>");
	echo ("Apellidos: $apellidos <br>");
	echo ("Direcci&oacute;n: $direccion <br>");
	echo ("C&oacute;digo Postal: $codigoPostal<br>");
	echo ("Correo Electr&oacute;nico: $correo<br>");
	echo ("Tel&eacute;fono: $telefono<br>");
	echo ("Precio Primer Plato: $primerPlato<br>");
	
	echo ("Precio Segundo Plato: $segundoPlato<br>");
	
	echo ("Precio Ingredientes extra:<br>");
	foreach($ingredienteExtra as $aaa){
		echo "&nbsp;&nbsp;&nbsp;" ;
		echo $aaa."<br>";
		};
	
	echo ("Precio Bebida: $bebida<br>");
	echo ("Subtotal:  $subtotal  <br>");
	echo ("Hay cupon de descuento: $hayDescuento<br>");
	echo("Codigo de descuento : $codigoDescuento<br>");
	echo ("descuento: $cantidadTotalConDescuento<br>");
	echo ("Catidad final : $cantidadTotal&nbsp;&nbsp;€<br>");
	

?>