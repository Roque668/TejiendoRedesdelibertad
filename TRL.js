// Actualizar datos
function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

// Configurar el Editor
function setupEditor()
{
    window.editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(`<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>

    <!-- Prueba tu codigo aqui -->

    </body>

    </html>`,1); //1 = moves cursor to end

    editor.getSession().on('change', function() {
        update();
    });

    editor.focus();
    
    
    editor.setOptions({
        fontSize: "12pt",
        showLineNumbers: false,
        showGutter: false,
        vScrollBarAlwaysVisible:true,
        enableBasicAutocompletion: false, enableLiveAutocompletion: false
    });

    editor.setShowPrintMargin(false);
    editor.setBehaviours
}

// Comenzar el Editor
setupEditor();
update();

// Track de clicks
var clicks = 1

// Cambio de lecciones - boton siguiente
$(document).ready(function(){
    $("#btn-siguiente").on("click", function(){
        if(clicks === 1){
            $("#leccion").html(
                "<h1>Bases del HTML</h1><br><h2>En este capitulo veremos las bases de HTML y etiquetas para texto</h2><br><ul style='list-style-type:circle'> <li>Todos los documents HTML deben comenzar con  &lt;DOCTYPE html&gt;</li><li>El documento HTML de por si comienza con la etiqueta &lt;html&gt; y termina con &lt;/html&gt;</li><li>La parte visible del documento HTML va despues de la etiqueta &lt;body&gt; y termina antes de &lt;/body&gt;</li></ul><p>Mira el siguiente video para conocer mas sobre las bases y etiquetas utilizadas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/TNQleomUw6U' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
                ) 
            clicks += 1
        }
        else if(clicks === 2){
            $("#leccion").html(
                "<h1>Enlaces</h1><br><h2>En este capitulo veremos las etiquetas para enlaces</h2><br><ul style='list-style-type:circle'> <li>Los enlaces en HTML son definidos por la etiqueta &lt;a&gt;</li><li>El destino del link se espicifica con el atributo 'href'.</li><li>Los atributos son utilizados para dar mas informacion sobre los elementos HTML.</li></ul><p>Mira el siguiente video para conocer mas sobre los enlaces en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/RdnS55MbdY4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
            )
            clicks += 1
        }
        else if(clicks === 3){
            $("#leccion").html(
                "<h1>Listas en HTML</h1><br><h2>Listas de HTML permiten a desarrolladores web agrupar items relacionados</h2><br><ul style='list-style-type:circle'> <li>Existen las listas no ordenadas en donde cada item sera marcado con punto bullet. Estas utilizan la etiqueta &lt;ul&gt;</li><li>Estan las listas ordenadas, las cuales cada item sera enumerado. Estas utilizan la etiqueta &lt;ol&gt;</li></ul><p>Mira el siguiente video para conocer mas sobre las listas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/IRbEXqBBOCo' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
            )
            clicks += 1
        }
        else if(clicks === 4){
            $("#leccion").html(
                "<h1>Imagenes</h1><br><h2>Las imagenes pueden mejorar la apariencia y diseno de tu pagina.</h2><br><ul style='list-style-type:circle'> <li>Para insertar una imagen utilizas la etiqueta &lt;img&gt;</li><li>La etiqueta &lt;img&gt; esta vacia, contiene solo atributos y no utiliza etiquetas de cierre.</li><li>Esta etiqueta tiene dos atributos como requisito. <ol><li>src - es la direccion de la imagen.</li><li>alt - es el texto alternativo que se muestra si la imagen no carga.</li></ol></li></ul><p>Mira el siguiente video para conocer mas sobre las listas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/lAoeALwWKo0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
            )
        }
    })
    // Cambio de lecciones - boton anterior
    $("#btn-anterior").on("click", function(){
        if(clicks === 4){
            $("#leccion").html(
                "<h1>Listas en HTML</h1><br><h2>Listas de HTML permiten a desarrolladores web agrupar items relacionados</h2><br><ul style='list-style-type:circle'> <li>Existen las listas no ordenadas en donde cada item sera marcado con punto bullet. Estas utilizan la etiqueta &lt;ul&gt;</li><li>Estan las listas ordenadas, las cuales cada item sera enumerado. Estas utilizan la etiqueta &lt;ol&gt;</li></ul><p>Mira el siguiente video para conocer mas sobre las listas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/IRbEXqBBOCo' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
            )
            clicks -= 1
        }
        else if(clicks === 3){
            $("#leccion").html(
                "<h1>Enlaces</h1><br><h2>En este capitulo veremos las etiquetas para enlaces</h2><br><ul style='list-style-type:circle'> <li>Los enlaces en HTML son definidos por la etiqueta &lt;a&gt;</li><li>El destino del link se espicifica con el atributo 'href'.</li><li>Los atributos son utilizados para dar mas informacion sobre los elementos HTML.</li></ul><p>Mira el siguiente video para conocer mas sobre los enlaces en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/RdnS55MbdY4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
            )
            clicks -= 1
        }
        else if(clicks === 2){
            $("#leccion").html(
                "<h1>Bases del HTML</h1><br><h2>En este capitulo veremos las bases de HTML y etiquetas para texto</h2><br><ul style='list-style-type:circle'> <li>Todos los documents HTML deben comenzar con  &lt;DOCTYPE html&gt;</li><li>El documento HTML de por si comienza con la etiqueta &lt;html&gt; y termina con &lt;/html&gt;</li><li>La parte visible del documento HTML va despues de la etiqueta &lt;body&gt; y termina antes de &lt;/body&gt;</li></ul><p>Mira el siguiente video para conocer mas sobre las bases y etiquetas utilizadas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/TNQleomUw6U' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
            )
            clicks -= 1
        }
        else if(clicks === 1){
            $("#leccion").html(
                "<h1>Que es HTML?</h1><br><h2>HTML es el lenguaje estandar de marcado de hipertexto utilizado para crear paginas Web.</h2><br><ul style='list-style-type:circle'><li>HTML significa Lenguaje de marcado de hipertexto.</li><li>HTML describe la estructura de una pagina web.</li><li>HTML consiste en una serie de elementos.</li><li>Los elementos HTML le dice al navegador como ensenar el contenido.</li><li>Los elementos HTML etiqueta pedazos de contenido tales como: 'Esto es un titulo', 'esto es un parrafo', etc.</li></ul><p>Mira el video de abajo para tener una introduccion a HTML</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/cqMfPS8jPys' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div>"
            )
        }
    })
    // Cambio de leccion menu
    $("#btn-leccion1").on("click", function(){
        $("#leccion").html(
            "<h1>Que es HTML?</h1><br><h2>HTML es el lenguaje estandar de marcado de hipertexto utilizado para crear paginas Web.</h2><br><ul style='list-style-type:circle'><li>HTML significa Lenguaje de marcado de hipertexto.</li><li>HTML describe la estructura de una pagina web.</li><li>HTML consiste en una serie de elementos.</li><li>Los elementos HTML le dice al navegador como ensenar el contenido.</li><li>Los elementos HTML etiqueta pedazos de contenido tales como: 'Esto es un titulo', 'esto es un parrafo', etc.</li></ul><p>Mira el video de abajo para tener una introduccion a HTML</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/cqMfPS8jPys' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div>"
        )
    })
    $("#btn-leccion2").on("click", function(){
        $("#leccion").html(
            "<h1>Bases del HTML</h1><br><h2>En este capitulo veremos las bases de HTML y etiquetas para texto</h2><br><ul style='list-style-type:circle'> <li>Todos los documents HTML deben comenzar con  &lt;DOCTYPE html&gt;</li><li>El documento HTML de por si comienza con la etiqueta &lt;html&gt; y termina con &lt;/html&gt;</li><li>La parte visible del documento HTML va despues de la etiqueta &lt;body&gt; y termina antes de &lt;/body&gt;</li></ul><p>Mira el siguiente video para conocer mas sobre las bases y etiquetas utilizadas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/TNQleomUw6U' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        )
    })
    $("#btn-leccion3").on("click", function(){
        $("#leccion").html(
            "<h1>Enlaces</h1><br><h2>En este capitulo veremos las etiquetas para enlaces</h2><br><ul style='list-style-type:circle'> <li>Los enlaces en HTML son definidos por la etiqueta &lt;a&gt;</li><li>El destino del link se espicifica con el atributo 'href'.</li><li>Los atributos son utilizados para dar mas informacion sobre los elementos HTML.</li></ul><p>Mira el siguiente video para conocer mas sobre los enlaces en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/RdnS55MbdY4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        )
    })
    $("#btn-leccion4").on("click", function(){
        $("#leccion").html(
            "<h1>Listas en HTML</h1><br><h2>Listas de HTML permiten a desarrolladores web agrupar items relacionados</h2><br><ul style='list-style-type:circle'> <li>Existen las listas no ordenadas en donde cada item sera marcado con punto bullet. Estas utilizan la etiqueta &lt;ul&gt;</li><li>Estan las listas ordenadas, las cuales cada item sera enumerado. Estas utilizan la etiqueta &lt;ol&gt;</li></ul><p>Mira el siguiente video para conocer mas sobre las listas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/IRbEXqBBOCo' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        )
    })
    $("#btn-leccion5").on("click", function(){
        $("#leccion").html(
            "<h1>Imagenes</h1><br><h2>Las imagenes pueden mejorar la apariencia y diseno de tu pagina.</h2><br><ul style='list-style-type:circle'> <li>Para insertar una imagen utilizas la etiqueta &lt;img&gt;</li><li>La etiqueta &lt;img&gt; esta vacia, contiene solo atributos y no utiliza etiquetas de cierre.</li><li>Esta etiqueta tiene dos atributos como requisito. <ol><li>src - es la direccion de la imagen.</li><li>alt - es el texto alternativo que se muestra si la imagen no carga.</li></ol></li></ul><p>Mira el siguiente video para conocer mas sobre las listas en HTML.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/lAoeALwWKo0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        )
    })
    $("#btn-leccion1css").on("click", function(){
        $("#leccion").html(
            "<h1>Que es CSS?</h1><br><h2>CSS describe como elementos de HTML van a ser mostrados en la pantalla.</h2><br><ul style='list-style-type:circle'> <li>CSS es una abreviacion de 'Cascading Style Sheets' (Hoja de estilos en cascada)</li><li>CSS ahorra tiempo y trabajo. Se puede controlar el estilo de varias paginas con un<li>Archivos externos de estilos se guardan en archivos CSS.</li></ul><p>Mira el siguiente video para conocer mas sobre CSS.</p><br><div class='d-flex justify-content-center video'><iframe width='750' height='441' src='https://www.youtube.com/embed/24gNhTcy6pw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
        )
    })
}); 