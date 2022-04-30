const contenido = document.getElementById('contenido');
contenido.setAttribute('display', 'grid', 'grid-template-columns' , '2fr 1fr');

const agregarTarea = e =>{
    e.preventDefault();
    const {value} = e.target.textoTarea;
    const tarea = document.createElement('div');
    tarea.setAttribute('id', 'listTarea');
    // const idTarea = document.getElementById('listTarea');
    const boton = document.createElement('button');
    boton.textContent = 'x';
    tarea.classList.add('tarea' , 'borde');
    tarea.addEventListener( 'click', cambioEstado);
    boton.addEventListener('click', eliminar);
    boton.addEventListener('click', Eliminado);
    tarea.textContent = value;
    tarea.prepend(boton);
    contenido.prepend(tarea);
    
    e.target.reset();
    
    // console.log(contenido);
}

const cambioEstado = e =>{
    e.target.classList.toggle('completado');
}

const eliminar = e =>{

    e.target.id = 'eliminar';

    
}



const Eliminado = () =>{
    
    contenido.childNodes.forEach(recurso =>{
        recurso.childNodes.forEach(item =>{
            if(item.id === 'eliminar'){
                item.parentNode.remove();
            }
        })
                  
    });
    console.log(Eliminado);
    
    
    
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





