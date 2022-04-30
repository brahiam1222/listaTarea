const contenido = document.getElementById('contenido');

const agregarTarea = e =>{
    e.preventDefault();
    const {value} = e.target.textoTarea;
    const tarea = document.createElement('div');
    const boton = document.createElement('button');
    tarea.classList.add('tarea' , 'borde');
    tarea.addEventListener('click', cambioEstado);
    tarea.textContent = value;
    contenido.prepend(tarea, boton);
    e.target.reset();

}

const cambioEstado = e =>{
    e.target.classList.toggle('completado');
}


const ordenado = () =>{

    const pendiente = [];
    const completado = [];
    contenido.childNodes.forEach(item =>{
        if(item.classList.contains('completado')){
            completado.push(item);
        }else{
        
            pendiente.push(item);
        
        };
        
        });
         return [...pendiente , ...completado];
        
        }

        const ordenar = () =>{

            ordenado().forEach(item => contenido.appendChild(item));
            
            
            };

        const addBtnEliminar = () =>{
                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent='x';
                
                deleteBtn.addEventListener('click', e=>{
                    const item = e.target.parentElement;
                    div.removeChild(item);
                });

                return deleteBtn;


        }




