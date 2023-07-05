import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const noticias = () => {
    return(
        [{tipo:"Cientificas", titulo:"Físicos encuentran un nuevo núcleo atómico en el elemento natural más raro", imagen:"https://www.robotitus.com/wp-content/uploads/2023/06/Astronauta-1.jpg" ,Cuerpo:`Acabamos de identificar un nuevo isótopo del elemento más raro en la corteza terrestre. Investigadores del Laboratorio de Aceleradores de la Universidad de Jyväskylä en Finlandia han identificado un nuevo núcleo atómico, el 190-Astatine. Los detalles del trabajo fueron publicados en Physical Review C. El 190-Astatine es ahora el isótopo más ligero conocido del astato, un elemento raro que se descompone rápidamente. Su creación fue posible gracias a la fusión de partículas de haz de 84Sr con átomos diana de plata. Luego, mediante el uso de los detectores del separador de retroceso RITU, se identificó el isótopo entre los productos de fusión.`},
        {tipo:"Tecnologicas", titulo:"Este nuevo satélite podrá transmitir energía solar desde el espacio hacia la Tierra", imagen:"https://www.robotitus.com/wp-content/uploads/2023/06/Concepto-base-solar.jpg" ,Cuerpo:`Este nuevo satélite podrá transmitir energía solar desde el espacio hacia la Tierra`},
        {tipo:"Tecnologicas", titulo:"Inteligencia artificial, ciberseguridad, robótica y transformación digital entre los empleos del futuro", imagen:"https://www.infobae.com/new-resizer/T-h6HqunoAQCpFCsjqEqHsRM9XA=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/GSYVK2XX5BBGVARJKPHDALRWTE.jpg" ,Cuerpo:`Con las nuevas tecnologías también surgen nuevas necesidades y, por lo tanto, también se generan nuevas oportunidades de empleo para aquellas personas que tienen mayores conocimientos en su aplicación. Por lo tanto, es normal que en los próximos años aparezcan más ofertas laborales dirigidas a estos profesionales.`},
        {tipo:"Cientificas", titulo:"Científicos identifican un nuevo subtipo de depresión que afecta la capacidad cognitiva", imagen:"https://www.robotitus.com/wp-content/uploads/2023/06/despaired-2261021_1280.jpg" ,Cuerpo:`Científicos han identificado un subtipo de depresión que afecta a una cuarta parte de las personas diagnosticadas con trastorno depresivo mayor (MDD, por sus siglas en inglés). El estudio, publicado en JAMA Network, revela que este «subtipo cognitivo», se caracteriza por problemas para desempeñarse en tareas cognitivas.`},
        {tipo:"Cientificas", titulo:"Astrónomos detectan emisión de neutrinos de alta energía del plano galáctico de la Vía Láctea", imagen:"https://www.robotitus.com/wp-content/uploads/2023/06/Galaxia.jpg" ,Cuerpo:`En lo profundo de nuestra Vía Láctea, se está produciendo una danza cósmica. Partículas cargadas giran en rayos cósmicos y corren a través del espacio, casi tan rápido como la luz. Ahora, una investigación publicada en la revista científica Science puede ayudarnos a comprender sus orígenes.`},
        {tipo:"Tecnologicas", titulo:"¿Por qué la FDA tardó tanto en aprobar el implante cerebral Neuralink?", imagen:"https://www.robotitus.com/wp-content/uploads/2023/06/imagen_2023-06-03_095545109.png" ,Cuerpo:`En medio de la noticia sobre la aprobación de Neuralink por parte de la FDA para probar su nueva generación de implantes cerebrales en humanos, el especialista en Ética aplicada y Ciberseguridad, David Tuffley, ha analizado las causas de la demora en la aprobación y sus implicaciones.`},
        {tipo:"Cientificas", titulo:"Las aves pueden activar y apagar su brújula de navegación de manera voluntaria", imagen:"https://www.robotitus.com/wp-content/uploads/2023/06/bird-6022818_1280.jpg" ,Cuerpo:`Es muy sabido que las aves tienen su propio sistema de GPS valiéndose del campo magnético del planeta pero una nueva investigación ha encontrado que pueden desactivarlo a voluntad cuando ya no lo necesitan.`}]
    )
}
const Home  = () => {
const [categoria,cambiarCategoria] = useState("")

return(
<>
<div className="Bienvenida">
        <h1> Bienvenido a nuestro canal de ciencia y tecnologia</h1>
</div>

<div id="dropmenu">
<DropdownButton
            as={ButtonGroup}
            key='secondary'
            id={`dropdown-variants-secondary`}
            variant='secondary'
            title="Seleccionar Categoria"
          >
            <Dropdown.Item onClick={()=>cambiarCategoria("")} eventKey="1 active">Todas</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>cambiarCategoria("Tecnologicas")} eventKey="2">Tecnologia</Dropdown.Item>
            <Dropdown.Item onClick={()=>cambiarCategoria("Cientificas")}eventKey="3">Ciencia</Dropdown.Item>
</DropdownButton>
</div>
<div className="Contenido">
    <div className="seccion">
        <h2>Noticias {categoria}</h2>
        { categoria===""? noticias().map(noticia => 
                <div className="row"> 
                    <div className='col-md-4 col-sm-12'><img className='imagen' src={noticia.imagen}></img></div>
                    <div className='col-md-8 col-sm-12'>
                        <div class="noticia">
                            <h4><b>{noticia.titulo}</b></h4>
                            <p>{noticia.Cuerpo}</p>
                         </div>
                    </div>
                </div>
        ) 
        :
        noticias().filter(n => n.tipo===categoria).map(noticia => 
            <div className="row"> 
                <div className='col-md-4 col-sm-12'><img className='imagen' src={noticia.imagen}></img></div>
                <div className='col-md-8 col-sm-12'>
                    <div class="noticia">
                        <h4><b>{noticia.titulo}</b></h4>
                        <p>{noticia.Cuerpo}</p>
                     </div>
                </div>
            </div>
    )}
    </div>
</div>



</>
)    
}

export default Home