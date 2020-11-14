const app8 = new Vue({
    el: '#app8',
    data: {
    segundoInicio :"10",
    palabras: ['Patineta', 'Dinosaurio', 'Tiburon', 'Ardilla', 'Enamorado'],
    palabra: '',
    largo:'',
    num:'',
    estado:'',
    estados:''
    
    },
    created() {
        this.elegirpalabra();
    },
  
    methods: {

        visibilidad(){

            var estado = document.getElementById("mostrar").style.visibility
            if( estado == 'hidden'){
                document.getElementById("mostrar").style.visibility= 'visible';
                document.getElementById("mostrar2").style.visibility= 'hidden';
                this.actualizartiempo();
             
            } else {
                this.actualizartiempo();
             
            }
        }, 
        actualizartiempo(){


            document.getElementById("countdown").innerHTML = this.segundoInicio;
            var estados = document.getElementById("mostrar").style.visibility
               if (this.segundoInicio == 0 && estados == 'visible'){
                
                    swal('Perdiste!!! A tomar ')
                
             } 
             if(this.segundoInicio == 0){
                this.segundoInicio = 10        
            }else{
                    
                this.segundoInicio = this.segundoInicio - 1;
                setTimeout(this.actualizartiempo, 1E3);   
            }
            }

        ,
        detenerreloj(){

            document.getElementById("mostrar").style.visibility= 'hidden';
            document.getElementById("mostrar2").style.visibility= 'visible';
            this.segundoInicio = 0
        }

      ,
        elegirpalabra(){
        var largo = this.palabras.length
        var num = Math.floor((Math.random() * (largo-0))+0);

           this.palabra= this.palabras[num]
            }

    },
    computed: {
        deshabilitado(){
            return this.segundoInicio === 1 || this.segundoInicio === 2 || this.segundoInicio === 3 || this.segundoInicio === 4|| this.segundoInicio === 5
            ||this.segundoInicio === 6 || this.segundoInicio === 7 || this.segundoInicio === 8 || this.segundoInicio === 9 ;
        },
        deshabilitado2(){
            return  this.estado === 'hidden' || this.segundoInicio === 10
        },
        
    }

})
