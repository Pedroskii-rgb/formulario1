function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    const opcionSi = document.getElementById("opcionSi");
    const opcionNo = document.getElementById("opcionNo");
    const selectOpciones = document.getElementById("selectOpciones");

    const opcionSi2 = document.getElementById("opcionSi2");
    const opcionNo2 = document.getElementById("opcionNo2");
    const selectOpciones2 = document.getElementById("selectOpciones2");

    const opcionSi3 = document.getElementById("opcionSi3");
    const opcionNo3 = document.getElementById("opcionNo3");
    const oms = document.getElementById("oms");

    const opcionSi4 = document.getElementById("opcionSi4");
    const opcionNo4 = document.getElementById("opcionNo4");
    const esp = document.getElementById("esp");

    const opcionSi5 = document.getElementById("opcionSi5");
    const opcionNo5 = document.getElementById("opcionNo5");
    const esp2 = document.getElementById("esp2");

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //////Evaluar los datos colocados en el formulario//////
        let zona = document.getElementById('zona').value;
        let area = document.getElementById('area').value;
        let circuito = document.getElementById('circuito').value;
        let red = document.getElementById('red').value;
        let direccion = document.getElementById('direccion').value;
        let colonia = document.getElementById('colonia').value;
        let poblacion = document.getElementById('poblacion').value;
        let clave = document.getElementById('clave').value;
        let ucm = document.getElementById('ucm').value;
        let numsiad = document.getElementById('numsiad').value;
        let utrsiad = document.getElementById('utrsiad').value;
        let marca = document.getElementById('marca').value;
        let fechinst = document.getElementById('fechinst').value;
        let capin = document.getElementById('capin').value;
        let noin = document.getElementById('noin').value;
        let nocon = document.getElementById('nocon').value;
        let nopedido = document.getElementById('nopedido').value;
        
        ///////////segunda parte del formulario////////////////////
        let dañado = document.querySelector('input[name="dañado"]:checked').value;
        let taller = document.getElementById('taller').value;
        let fecharep = document.getElementById('fecharep').value;
        let ncontrato = document.getElementById('ncontrato').value;
        let partes = document.getElementById('partes').value;
        let garantia = document.getElementById('garantia').value;
        //////////////////////////////////////////////////////////////
        let fechadaño = document.getElementById('fechadaño').value;
        let horadaño = document.getElementById('horadaño').value;
        let lluvia = document.querySelector('input[name="lluvia"]:checked').value;
        let vientos = document.querySelector('input[name="vientos"]:checked').value;
        let neblina = document.querySelector('input[name="neblina"]:checked').value;
        let polvos = document.querySelector('input[name="polvos"]:checked').value;
        let nublado = document.querySelector('input[name="nublado"]:checked').value;
        let frio = document.querySelector('input[name="frio"]:checked').value;
        let descargas = document.querySelector('input[name="descargas"]:checked').value;
        let udes = document.querySelector('input[name="udes"]:checked').value;
        let humos = document.querySelector('input[name="humos"]:checked').value;
        let despejado = document.querySelector('input[name="despejado"]:checked').value;
        let sismo = document.querySelector('input[name="sismo"]:checked').value;
        let uracan = document.querySelector('input[name="uracan"]:checked').value;
        /////////////////////////////////////////////////////////////////////////////
        let dañosis = document.getElementById('dañosis').value;
        let dañolinea = document.getElementById('dañolinea').value;
        let dañocontrol = document.getElementById('dañocontrol').value;
        ////////////////////////////////////////////////////////////////////////////////
        let dtanque = document.querySelector('input[name="dtanque"]:checked').value;
        let sf6 = document.querySelector('input[name="sf6"]:checked').value;

        /////////////////////////////////////////////////////////////////////////////
        ////////////////opcion para poder escribir en las fases/////////////////////
        let opcion = document.querySelector('input[name="opcion"]:checked').value;
        let opcion2 = document.querySelector('input[name="opcion2"]:checked').value;
        let opcion3 = document.querySelector('input[name="opcion3"]:checked').value;
        let opcion4 = document.querySelector('input[name="opcion4"]:checked').value;
        let opcion5 = document.querySelector('input[name="opcion5"]:checked').value;

        let selectOpciones = document.getElementById('selectOpciones').value;
        let selectOpciones2 = document.getElementById('selectOpciones2').value;
        let oms = document.getElementById('oms').value;
        let esp = document.getElementById('esp').value;
        let esp2 = document.getElementById('esp2').value;
        ////////////////////////////////////////////////////////////////////////////

        let fauna = document.querySelector('input[name="fauna"]:checked').value;
        let tanquefl = document.querySelector('input[name="tanquefl"]:checked').value;
        let tcortada = document.querySelector('input[name="tcortada"]:checked').value;
        
        let fcontacto = document.querySelector('input[name="fcontacto"]:checked').value;
        let impacto = document.querySelector('input[name="impacto"]:checked').value;
        let brotas = document.querySelector('input[name="brotas"]:checked').value;
        let bflameadas = document.querySelector('input[name="bflameadas"]:checked').value;
        let bflojas = document.querySelector('input[name="bflojas"]:checked').value;
        let antifauna = document.querySelector('input[name="antifauna"]:checked').value;
        let bajante = document.querySelector('input[name="bajante"]:checked').value;
        /////////////////////////////////////////////////////////////////////////////////
        let dgab = document.querySelector('input[name="dgab"]:checked').value;
        let ph = document.querySelector('input[name="ph"]:checked').value;
        let pfauna = document.querySelector('input[name="pfauna"]:checked').value;
        let van = document.querySelector('input[name="van"]:checked').value;
        let ADP = document.querySelector('input[name="ADP"]:checked').value;
        let flameados = document.querySelector('input[name="flameados"]:checked').value;
        let gndcortada = document.querySelector('input[name="gndcortada"]:checked').value;
        let falsoc = document.querySelector('input[name="falsoc"]:checked').value;
        let imp = document.querySelector('input[name="imp"]:checked').value;
        let adañada = document.querySelector('input[name="adañada"]:checked').value;
        let bflameadas2 = document.querySelector('input[name="bflameadas2"]:checked').value;
        let bflojas2 = document.querySelector('input[name="bflojas2"]:checked').value;
        let antifauna2 = document.querySelector('input[name="antifauna2"]:checked').value;
        ////////////////////////////////////////////////////////////////////////////////////////////////
        let fcom = document.getElementById('fcom').value;
        let reporto = document.getElementById('reporto').value;
        let fechf = document.getElementById('fechaf').value;
        let horaf = document.getElementById('horaf').value;
        let recib= document.getElementById('recib').value;
        let zona2= document.getElementById('zona2').value;


        generatePDF(zona, area, circuito, red, direccion, colonia, dañado, poblacion, clave, ucm, numsiad, utrsiad, 
             marca, fechinst, capin, noin, nocon, nopedido, taller, fecharep,ncontrato, partes, garantia, fechadaño, 
             horadaño, lluvia,vientos,neblina, nublado, polvos,frio,descargas,udes, humos, despejado, sismo, uracan,
             dañosis, dañolinea, dañocontrol,dtanque,sf6,opcionSi,opcionNo,selectOpciones,opcion,fauna,tanquefl,tcortada,
             opcionSi2,opcionNo2,selectOpciones2,opcion2,fcontacto,impacto,brotas,bflameadas,bflojas,antifauna,bajante,
             opcionSi3,opcionNo3,opcion3,oms,opcionSi4, opcionNo4, opcion4,esp,dgab,ph,pfauna,van,ADP,flameados,gndcortada,
             falsoc,imp,adañada,bflameadas2,bflojas2,antifauna2,opcionSi5,opcionNo5,opcion5,esp2,fcom,reporto,fechf,horaf,
             recib,zona2);
    })
    // Función para habilitar o deshabilitar el select según la opción seleccionada
    function habilitarSelect() {
        if (opcionSi.checked) {
          selectOpciones.disabled = false;
        } else {
          selectOpciones.disabled = true;
        }
        if (opcionSi2.checked) {
            selectOpciones2.disabled = false;
        } else {
            selectOpciones2.disabled = true;
        }

        if (opcionSi3.checked) {
            oms.disabled = false;
        } else {
            oms.disabled = true;
        }
        if (opcionSi4.checked) {
            esp.disabled = false;
        } else {
            esp.disabled = true;
        }
        if (opcionSi5.checked) {
            esp2.disabled = false;
        } else {
            esp2.disabled = true;
        }
        
    }
    // Agregar eventos para detectar el cambio en los radio buttons
    opcionSi.addEventListener("change", habilitarSelect);
    opcionNo.addEventListener("change", habilitarSelect);
    opcionSi2.addEventListener("change", habilitarSelect);
    opcionNo2.addEventListener("change", habilitarSelect);
    opcionSi3.addEventListener("change", habilitarSelect);
    opcionNo3.addEventListener("change", habilitarSelect);
    opcionSi4.addEventListener("change", habilitarSelect);
    opcionNo4.addEventListener("change", habilitarSelect);
    opcionSi5.addEventListener("change", habilitarSelect);
    opcionNo5.addEventListener("change", habilitarSelect);

});

async function generatePDF(zona, area, circuito, red, direccion, colonia, dañado, poblacion, clave, ucm, numsiad, utrsiad, 
    marca, fechinst, capin, noin, nocon, nopedido, taller, fecharep,ncontrato, partes, garantia, fechadaño, 
    horadaño, lluvia,vientos,neblina, nublado, polvos,frio,descargas,udes, humos, despejado, sismo, uracan,
    dañosis, dañolinea, dañocontrol,dtanque,sf6,opcionSi,opcionNo,selectOpciones,opcion,fauna,tanquefl,tcortada,
    opcionSi2,opcionNo2,selectOpciones2,opcion2,fcontacto,impacto,brotas,bflameadas,bflojas,antifauna,bajante,
    opcionSi3,opcionNo3,opcion3,oms,opcionSi4, opcionNo4, opcion4,esp,dgab,ph,pfauna,van,ADP,flameados,gndcortada,
    falsoc,imp,adañada,bflameadas2,bflojas2,antifauna2,opcionSi5,opcionNo5,opcion5,esp2,fcom,reporto,fechf,horaf,
    recib,zona2) {
    const image = await loadImage("img/formulario.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 610, 790);
    pdf.addImage(signatureImage, 'PNG', 81, 670, 180, 30);

    //////Seccion para colocar los datos en el formulario//////
    pdf.setFontSize(9);
    pdf.text(zona, 135, 130);
    pdf.setFontSize(9);
    pdf.text(area, 135, 140);
    pdf.text(circuito, 150, 150);
    pdf.text(red, 185, 160);
    pdf.text(direccion, 150, 170);
    pdf.text(colonia, 150, 180);
    pdf.text(poblacion, 150, 190);
    pdf.text(clave, 165, 200);
    pdf.text(ucm, 170, 210);
    pdf.text(numsiad, 180, 220);
    pdf.text(utrsiad, 150, 230);
    pdf.text(marca, 145, 240);
    pdf.text(fechinst, 180, 250);
    pdf.text(capin, 180, 260);
    pdf.text(noin, 180, 270);
    pdf.text(nocon, 180, 280);
    pdf.text(nopedido, 180, 290);

    pdf.text(taller, 350, 130);
    pdf.text(fecharep, 350, 140);
    pdf.text(ncontrato, 350, 150);
    pdf.text(partes, 330, 160);
    pdf.text(garantia, 430, 170);

    pdf.text(fechadaño, 400, 209);
    pdf.text(horadaño, 410, 219);
    pdf.text(dañosis, 390, 302);
    pdf.text(dañolinea, 370, 312);
    pdf.text(dañocontrol, 370, 322);

    pdf.text(fcom, 200, 660);
    pdf.text(reporto, 100, 690);
    pdf.setFontSize(8);
    pdf.text(fechf, 246, 690);
    pdf.setFontSize(9);
    pdf.text(horaf, 308, 690);
    pdf.text(recib, 355, 690);
    pdf.text(zona2, 460, 692);

      //////Linea para colocar fecha//////
      // crea un nuevo objeto `Date`
      var today = new Date();
      // obtener la fecha de hoy en formato `MM/DD/YYYY`
      var now = today.toLocaleDateString('en-US');
      pdf.text(now, 464, 710)
  

    //////Empieza if//////
    pdf.setFillColor(0,0,255); //color del circulo a pintar
    if (parseInt(dañado) === 1) {
        pdf.circle(406, 107, 3, 'FD');
    } else {
        pdf.circle(460, 107, 3, 'FD');
    }
    if (parseInt(lluvia) === 1) {
        pdf.circle(384, 236, 3, 'FD');
    } else {
    }
    if (parseInt(vientos) === 1) {
        pdf.circle(384, 246, 3, 'FD');
    } else {
    }
    if (parseInt(neblina) === 1) {
        pdf.circle(384, 257, 3, 'FD');
    } else {
    }
    if (parseInt(polvos) === 1) {
        pdf.circle(384, 268, 3, 'FD');
    } else {
    }
    if (parseInt(nublado) === 1) {
        pdf.circle(384, 278, 3, 'FD');
    } else {
    }
    if (parseInt(frio) === 1) {
        pdf.circle(384, 288, 3, 'FD');
    } else {
    }
    if (parseInt(descargas) === 1) {
        pdf.circle(481, 236, 3, 'FD');
    } else {
    }
    if (parseInt(udes) === 1) {
        pdf.circle(481, 246, 3, 'FD');
    } else {
    }
    if (parseInt(humos) === 1) {
        pdf.circle(481, 257, 3, 'FD');
    } else {
    }
    if (parseInt(despejado) === 1) {
        pdf.circle(481, 268, 3, 'FD');
    } else {
    }
    if (parseInt(sismo) === 1) {
        pdf.circle(481, 278, 3, 'FD');
    } else {
    }
    if (parseInt(uracan) === 1) {
        pdf.circle(481, 288, 3, 'FD');
    } else {
    }
    if (parseInt(dtanque) === 1) {
        pdf.circle(225.5, 358, 3, 'FD');
    } else {
    }
    if (parseInt(sf6) === 1) {
        pdf.circle(225.5, 368, 3, 'FD');
    } else {
    }
    if (opcionSi.checked) {
        selectOpciones.disabled = false;
        pdf.circle(225.5, 379, 3, 'FD');
        pdf.setFontSize(6);
        pdf.text(selectOpciones, 222, 391);
    } else {
        selectOpciones.disabled = true;
    }
    if (opcionSi2.checked) {
        selectOpciones2.disabled = false;
        pdf.circle(225.5, 431, 3, 'FD');
        pdf.setFontSize(6);
        pdf.text(selectOpciones2, 222, 443);
    } else {
        selectOpciones2.disabled = true;
    }
    if (opcionSi3.checked) {
        oms.disabled = false;
        pdf.circle(384, 420, 3, 'FD');
        pdf.setFontSize(9);
        pdf.text(oms,430, 422);
    } else {
        oms.disabled = true;
    }
    if (opcionSi4.checked) {
        esp.disabled = false;
        pdf.circle(384, 430, 3, 'FD');
        pdf.setFontSize(9);
        pdf.text(esp,330, 445);
    } else {
        oms.disabled = true;
    }
    if (opcionSi5.checked) {
        esp.disabled = false;
        pdf.circle(384, 544, 3, 'FD');
        pdf.setFontSize(9);
        pdf.text(esp2,330, 559);
    } else {
        oms.disabled = true;
    }
    pdf.setFillColor(0,0,255);
    if (parseInt(fauna) === 1) {
        pdf.circle(225.5, 400, 3, 'FD');
    } else {
    }
    if (parseInt(tanquefl) === 1) {
        pdf.circle(225.5, 410, 3, 'FD');
    } else {
    }
    if (parseInt(tcortada) === 1) {
        pdf.circle(225.5, 420, 3, 'FD');
    } else {
    }
    if (parseInt(fcontacto) === 1) {
        pdf.circle(225.5, 451, 3, 'FD');
    } else {
    }
    if (parseInt(impacto) === 1) {
        pdf.circle(384, 358, 3, 'FD');
    } else {
    }
    if (parseInt(brotas) === 1) {
        pdf.circle(384, 368, 3, 'FD');
    } else {
    }
    if (parseInt(bflameadas) === 1) {
        pdf.circle(384, 379, 3, 'FD');
    } else {
    }
    if (parseInt(bflojas) === 1) {
        pdf.circle(384, 389, 3, 'FD');
    } else {
    }
    if (parseInt(antifauna) === 1) {
        pdf.circle(384, 400, 3, 'FD');
    } else {
    }
    if (parseInt(bajante) === 1) {
        pdf.circle(384, 410, 3, 'FD');
    } else {
    }
    if (parseInt(oms) === 1) {
        pdf.circle(384, 410, 3, 'FD');
    } else {
    }
    if (parseInt(dgab) === 1) {
        pdf.circle(225.5, 493, 3, 'FD');
    } else {
    }
    if (parseInt(ph) === 1) {
        pdf.circle(225.5, 503, 3, 'FD');
    } else {
    }
    if (parseInt(pfauna) === 1) {
        pdf.circle(225.5, 513, 3, 'FD');
    } else {
    }
    if (parseInt(van) === 1) {
        pdf.circle(225.5, 524, 3, 'FD');
    } else {
    }
    if (parseInt(ADP) === 1) {
        pdf.circle(225.5, 535, 3, 'FD');
    } else {
    }
    if (parseInt(flameados) === 1) {
        pdf.circle(225.5, 545, 3, 'FD');
    } else {
    }
    if (parseInt(gndcortada) === 1) {
        pdf.circle(225.5, 555, 3, 'FD');
    } else {
    }
    if (parseInt(falsoc) === 1) {
        pdf.circle(225.5, 565, 3, 'FD');
    } else {
    }
    if (parseInt(imp) === 1) {
        pdf.circle(384, 493, 3, 'FD');
    } else {
    }
    if (parseInt(adañada) === 1) {
        pdf.circle(384, 503, 3, 'FD');
    } else {
    }
    if (parseInt(bflameadas2) === 1) {
        pdf.circle(384, 514, 3, 'FD');
    } else {
    }
    if (parseInt(bflojas2) === 1) {
        pdf.circle(384, 524, 3, 'FD');
    } else {
    }
    if (parseInt(antifauna2) === 1) {
        pdf.circle(384, 534, 3, 'FD');
    } else {
    }
    
   
     //////Termina if//////

    pdf.save("example.pdf");    

}