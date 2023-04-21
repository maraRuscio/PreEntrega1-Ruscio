import React from 'react'
import instagram from '../../img/int.png'
//import twitter from '../../img/twtt.png'
import facebook from '../../img/face.png'
import './footer.css';


export const FooterComponent = () => {
  return (
    <div className='container-fluid fondo'>
        <div className='row'>
            <div className="col">
                <h2>Nuestras redes</h2>
                <a href="https://www.instagram.com/p/BmLqQrynFeV/?igshid=1scuf4iyncq5p&utm_source=fb_www_attr" target='new'><img src={instagram} alt="" height="30px" /></a>
                {/* <a href="/" target='new'><img src={twitter} alt="" height="30px"/></a> */}
                <a href="https://www.facebook.com/envaruta/?locale=es_LA" target='new'><img src={facebook} alt="" height="30px"/></a>
            </div>
            <div className="col">
                <h2>Contactenos</h2>
                <p>Dirección :Calle 14 No 1220 entre 57 y 58 • 1900 La Plata, Bs. As. Argentina</p>
                <p>Teléfono: 54 221 4823870</p>
                <p>email: <span className='mail'>envasesruta@gmail.com</span></p>
            </div>
        </div>
        <div className='row cright'>
            <p>© 2023 Ruscio Mara</p>
        </div>
    </div>
  )
}
