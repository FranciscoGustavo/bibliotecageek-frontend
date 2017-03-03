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

		// Codigo que se ejecuta automaticamente

			for (var i = 0; i < more.length; i++) {
				if(more[i].className == "material-icons more"){
					more[i].addEventListener("click", function(){
						console.log(this.getAttribute('data-key'))
						if (this.getAttribute('data-key') == "inactivo") {
							this.nextElementSibling.style.height = "58px";
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
	})
}())