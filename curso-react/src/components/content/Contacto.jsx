import React from 'react';

const Contacto = () => {
    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        console.log(datosFormulario);
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
    }

    return (

        <>
        <body className='Home'>
           <div className='container'>
            <form onSubmit={consultarForm} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />

                  </div> 
                  <div className="mb-3">
                <textarea name="floatingTextarea" rows={10} cols={40} defaultValue={"Escriba su consulta"} />
                  </div> 
            
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>   
        </body>
      
            

        </>
    );
}

export default Contacto;
