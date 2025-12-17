
export class dark{

    #body
    #dark

    constructor(mode){
        this.#body = document.querySelector(mode)
        this.#dark = this.#body.querySelector('.input-dark')
        this.#verifierMode()
        this.#dark.addEventListener('change', this.#pasDark.bind(this))

      

    }

    #verifierMode(){
        
      if(localStorage.getItem('mode') !== null && localStorage.getItem('mode') === 'dart-mode' ){
            this.#body.classList.add('dart-mode')
            this.#dark.checked = true;

        }
        else{
            dark.checked = false; 
        } 
    }
    #pasDark(e){
        if(e.target.checked == true){
            localStorage.setItem('mode' , 'dart-mode') 
            this.#body.classList.add('dart-mode')
        }
        else{
            localStorage.removeItem('mode')
            this.#body.classList.remove('dart-mode')
        }
    }
}



