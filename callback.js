/// callbacks

const hola = () => {

    sefTimeot(()=> {
        console.log('hola');
            }, 100)
}
///---
console.log('inicia el proyecto')
hola('erick');
console.log('termina el proyecto');

//Callbacks 
const hola = (name, micallback) => { 
    setTimeout(()=> { 
    console.log('hola ' + name); 
    micallback()
      }, 2000) 
} 
const adios = (name,otrocallback) => { 
    setTimeout(()=> { 
    console.log('adios ' + name); 
    otrocallback()
       }, 2000)
 } 
 const hablar = (myCallbackMessage) => { setTimeout(() => { 
    console.log("bla bla bla" ); myCallbackMessage(); }, 3000); } 


    /// promesas 

    console.log('inica el proyecto');
    console.log('hola erick');
    console.log('bienvenido a este nuevo semestre');
    console.log('adios erick);
    console.log('termina el proyecto');

    function proyecto(){
        return new Promise((resolved, reject) => {
            sefTimeout(() => {
                resolved(proyectoList);
                }, 2000);
        });
    }
      
    getUsers().then((res) => {
        console.log('proyecto-->',res);
    });


    ///--- async await
         async function getMiProyecto(){
            let mi_proyecto = await conseguirproyecto (); 
            console.log(mi_proyecto);

          }

          getMiProyecto();
      

          ///recursividad 
               
          public void proyecto(){

           System.out.PrintLn(
               "el proyecto de  +proyecto+" es :"+getproyecto(proyecto"));
           ) 


            proyecto();
          }

    //--- // implementarcon promesas async y await adiconal utlizar recursividad 
    console.log('iniciando el  proyecto'); 
    hola('erick', () => { 
        hablar(() => { hablar(() =>{
             adios('erick', ()=> {
         console.log('terminando el proceso');
             })
          }) 
       })
     });