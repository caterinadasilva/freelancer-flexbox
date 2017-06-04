// // EFECTO SCROLL DEL NAV // //
/* Código de Liliana Kastilio: https://codepen.io/lili2311/pen/dJjuL< */
window.addEventListener('scroll', function () {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.getElementById('js-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
});

// // MODAL // //
(function modal(){
	var boxes = Array.from(document.getElementsByClassName("project"));
	var modal = document.getElementById("work-modal");
	var modalBody = document.getElementsByClassName('modal-body')[0];
	var closeX = document.getElementById("close");
	var closeBtn = document.getElementsByClassName('close')[0];
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			event.preventDefault();
			modalBody.innerHTML = box.innerHTML;
			modal.classList.remove("hidden");
			closeX.addEventListener("click",function(){
				modal.classList.add("hidden");
			});
			closeBtn.addEventListener("click",function(){
				modal.classList.add("hidden");
			});
		});
	});
})();

// // VALIDACIÓN FORMULARIO // //
(function validateForm(){
	document.getElementById('sendBtn').addEventListener('click', function(event) {
		event.preventDefault();
	// ELIMINAR SMALLS DE VALIDACIONES ANTERIORES
		document.querySelectorAll(".form-input small").forEach(function(small) {small.remove()});
	// VALORES VALUE
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var textarea = document.getElementById('textarea').value;
		var validaciones = true;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	////// NOMBRE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO
		if (name === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-input')[0].appendChild(labelErr());
			console.log("Nombre:" + name);
			validaciones = validaciones && false;
		} else {
		// IMPRIMIR
			console.log("Nombre:" + name);
			validaciones = validaciones && true;
		}
	////// EMAIL
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (email === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-input')[1].appendChild(labelErr());
			console.log("Correo: " + email);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validEmail.test(email)) {
			var rellenarText = document.createTextNode("Este correo no es válido.");
			document.getElementsByClassName('form-input')[1].appendChild(labelErr());
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Correo: " + email);
			validaciones = validaciones && true;
		}
	////// TELÉFONO
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (phone === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-input')[2].appendChild(labelErr());
			console.log("Phone: " + phone);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validPhone.test(phone)) {
			var rellenarText = document.createTextNode("Este número no es válido.");
			document.getElementsByClassName('form-input')[2].appendChild(labelErr());
			console.log("Teléfono: " + phone + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Teléfono: " + phone);
			validaciones = validaciones && true;
		}
	////// MENSAJE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO	
		if (textarea === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			document.getElementsByClassName('form-input')[3].appendChild(labelErr());
			console.log("Mensaje:" + textarea);
			validaciones = validaciones && false;
		} else {
		// IMPRIMIR
			console.log("Mensaje:" + textarea);
			validaciones = validaciones && true;
		}
	////// VACIAR CAMPOS
		if (validaciones == true) {
			document.getElementById('name').value = "";
			document.getElementById('email').value = "";
			document.getElementById('phone').value = "";
			document.getElementById('textarea').value = "";
		}

		function labelErr() {
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			return labelError;
		}
	////// FIN
	});
})();