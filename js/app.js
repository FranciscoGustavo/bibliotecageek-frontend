(function (){
	//Compatibilidad de navegadores
	(function detectarNavegador(navegador) {
		html = document.getElementsByTagName("html")[0]
		if(navegador.indexOf("Chrome") != -1 ) {
			html.className = html.className + " chrome"
		}
		else if(navegador.indexOf("Opera") != -1 ) {
			html.className = html.className + " opera"
		}
		else if(navegador.indexOf("Firefox") != -1 ) {
			html.className = html.className + " firefox"
		}
		else if((navegador.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
			html.className = html.className + " ie"
		}
		else if(navegador.indexOf("Safari") != -1 ) {
			html.className = html.className + " safari"
		}
		else {
			html.className = html.className + " other"
		}
	})(navigator.userAgent);

	//Evento principal (espera a que el codigo HTML termine de cargar)
	window.addEventListener("load",function(){

		// variables
			right = document.querySelector('.arrow-right')
			left = document.querySelector('.arrow-left')
			slide = document.querySelector('.container')
			scale = 0
			more = document.getElementsByTagName('i')

			signUp = document.querySelector('#sign_up')
			signIn = document.querySelector('#sign_in')
			forms = document.getElementsByTagName("form")
				
		// funciones
			
			moveRight = function(){
				if(scale == 0){
					scale = -200
					slide.style.marginLeft = scale + "%"
				} else {
					scale += 100
					slide.style.marginLeft = scale + "%"
				}
			}

			moveLeft = function(){
				if(scale == -200){
					scale = 0
					slide.style.marginLeft = scale + "%"
				} else{
					scale -= 100
					slide.style.marginLeft = scale + "%"
				}
			}

		// Eventos
			right.addEventListener("click",moveRight)

			left.addEventListener("click",moveLeft)

			signIn.addEventListener("click",function(){
				document.querySelector('.sign_in').style.width = "100%"
				document.querySelector('.sign_in').style.height = "100vh"
			})
			signUp.addEventListener("click",function(){
				document.querySelector('.sign_up').style.width = "100%"
				document.querySelector('.sign_up').style.height = "100vh"
				console.log("Registrate")
			})

		// Codigo que se ejecuta automaticamente

			for (var i = 0; i < more.length; i++) {
				if(more[i].className == "material-icons more"){
					more[i].addEventListener("click", function(){
						console.log(this.getAttribute('data-key'))
						if (this.getAttribute('data-key') == "inactivo") {
							this.nextElementSibling.style.height = "87px";
							this.nextElementSibling.style.width = "125px";
							this.setAttribute('data-key',"activo")
						} else if(this.getAttribute('data-key') == "activo"){
							this.nextElementSibling.style.height = "0px";
							this.nextElementSibling.style.width = "0px";	
							this.setAttribute('data-key',"inactivo")			
						}

					})
				} 
			}

			for (var i = 0; i < forms.length; i++) {
				console.log(forms[i])
				for (var j = 0; j < forms[i].elements.length; j++) {
					if (forms[i].elements[j].type == "text" || forms[i].elements[j].type == "email" || forms[i].elements[j].type == "password"){
						forms[i].elements[j].addEventListener("focus",function(){
							console.log(this)
							this.nextElementSibling.className = this.nextElementSibling.className + " label-active"
						})

						forms[i].elements[j].addEventListener("blur",function(){
							console.log(this)
							if(this.value <= 0){
								this.nextElementSibling.className = this.nextElementSibling.className.replace("label-active", "")
							}
						})

					} else if(forms[i].elements[j].tagName == "BUTTON"){
						forms[i].elements[j].addEventListener("click",function(e){
							e.preventDefault()
							console.log("Cerrar")
							document.querySelector('.sign_in').style.height = "0"
							document.querySelector('.sign_up').style.height = "0"
							document.querySelector('.sign_in').style.width = "0"
							document.querySelector('.sign_up').style.width = "0"
						})
					}
				}
			}


	})
}())