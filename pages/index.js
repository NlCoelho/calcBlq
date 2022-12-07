//import { useEffect } from 'react';
import Homecss from './Home.module.css'


export default function Home() {

    /*useEffect(() => {
        window.onload = function () {
           
        }
    }, [])

    if(typeof window !== "undefined"){
        
    } */

    var titleCB = "Curso de Bloqueio", titleTol = "Tolerância", titleAltPadrao = "Altura do Padrão", titleEsp = "Esp. do Material", titlePH1 = "Ponto Plano PH1", titlePH2 = "Ponto Plano  PH2"

    var ph = [
        [], { nome: "PH1", max: "Máx", min: "Mín", n: "Nominal" },
        { nome: "PH2", max: "Máx", min: "Mín", n: "Nominal" }]

    function fChange() {
        
        var elCB = document.getElementById(titleCB)
        elCB.type = "text"
        elCB.value = parseFloat(elCB.value).toFixed(2)

        var elTol = document.getElementById(titleTol)
        elTol.type = "text"
        elTol.value = parseFloat(elTol.value).toFixed(2)

        var elAltPadrao = document.getElementById(titleAltPadrao)
        elAltPadrao.type = "text"
        elAltPadrao.value = parseFloat(elAltPadrao.value).toFixed(2)

        var elEsp = document.getElementById(titleEsp)
        elEsp.type = "text"
        elEsp.value = parseFloat(elEsp.value).toFixed(2)

        var elPH1 = document.getElementById(titlePH1)
        elPH1.type = "text"
        elPH1.value = parseFloat(elPH1.value).toFixed(2)

        var elPH2 = document.getElementById(titlePH2)
        elPH2.type = "text"
        elPH2.value = parseFloat(elPH2.value).toFixed(2)

        var cb = parseFloat(elCB.value)
        var tol = parseFloat(elTol.value)
        var altPadrao = parseFloat(elAltPadrao.value)
        var esp = parseFloat(elEsp.value)
        var ph1 = parseFloat(elPH1.value)
        var ph2 = parseFloat(elPH2.value)

        var soma = cb + altPadrao - esp
        var somaPH1 = soma + ph1
        var somaPH2 = soma + ph2

        document.getElementById(ph[1].nome + ph[1].min).textContent = (somaPH1 + tol).toFixed(2)
        document.getElementById(ph[1].nome + ph[1].n).textContent = somaPH1.toFixed(2)
        document.getElementById(ph[1].nome + ph[1].max).textContent = (somaPH1 - tol).toFixed(2)

        document.getElementById(ph[2].nome + ph[2].min).textContent = (somaPH2 + tol).toFixed(2)
        document.getElementById(ph[2].nome + ph[2].n).textContent = somaPH2.toFixed(2)
        document.getElementById(ph[2].nome + ph[2].max).textContent = (somaPH2 - tol).toFixed(2)

        const el = document.querySelectorAll("span")
        for (let i = 0; i < el.length; i++) {
            el[i].style.color = "#000";
            el[i].style.fontWeight = "700";
        }

    }

    function btEnter(event) {
        if (event.keyCode == 13) {
            let elr = document.activeElement
            var elements = document.querySelectorAll("input")
            for (let i = 0; i < elements.length - 1; i++) {
                if (elr == elements[i]) {
                    elements[i + 1].focus()
                }
            }
            elr.blur()
        }
    }

    function typeNum() {
        document.activeElement.type = "number"
    }

    return (

        <div className={Homecss.container}>
            <div className={Homecss.titulo}>
                <h2>Calculadora de Bloqueio</h2>
            </div>
            <hr />
            <div className={Homecss.corpo}>
                <div className={Homecss.labels}>
                    <label>{titleCB}
                        <input id={titleCB} onFocus={typeNum} onKeyDown={btEnter} onBlur={fChange} className={Homecss.input} type="text" step=".01" min="2" max="5" defaultValue="3.50" />
                    </label>
                    <label>{titleTol}
                        <input id={titleTol} onFocus={typeNum} onKeyDown={btEnter} onBlur={fChange} className={Homecss.input} type="text" step=".05" min="0" max="1" defaultValue="0.50" />
                    </label>
                    <label>{titleAltPadrao}
                        <input id={titleAltPadrao} onFocus={typeNum} onKeyDown={btEnter} onBlur={fChange} className={Homecss.input} type="text" step=".01" defaultValue="10.03" />
                    </label>
                    <label>{titleEsp}
                        <input id={titleEsp} onFocus={typeNum} onKeyDown={btEnter} onBlur={fChange} className={Homecss.input} type="text" step=".05" min="2" max="5" defaultValue="2.75" />
                    </label>
                    <label>{titlePH2}
                        <input id={titlePH2} onFocus={typeNum} onKeyDown={btEnter} onBlur={fChange} className={Homecss.input + " " + Homecss.inputPH} type="text" step=".01" min="20" defaultValue="35.70" />
                    </label>
                    <label>{titlePH1}
                        <input id={titlePH1} onFocus={typeNum} onKeyDown={btEnter} onBlur={fChange} className={Homecss.input + " " + Homecss.inputPH} type="text" step=".01" min="20" defaultValue="35.70" />
                    </label>
                </div>

                <hr />
                <div className={Homecss.spans}>
                    <label>{ph[2].nome}</label>
                    <span id={ph[2].nome + ph[2].min} className={Homecss.span}>{ph[2].min}</span>
                    <span id={ph[2].nome + ph[2].n} className={Homecss.span}>{ph[2].n}</span>
                    <span id={ph[2].nome + ph[2].max} className={Homecss.span}>{ph[2].max}</span>
                </div>
                <div className={Homecss.spans}>
                    <label>{ph[1].nome}</label>
                    <span id={ph[1].nome + ph[1].min} className={Homecss.span}>{ph[1].min}</span>
                    <span id={ph[1].nome + ph[1].n} className={Homecss.span}>{ph[1].n}</span>
                    <span id={ph[1].nome + ph[1].max} className={Homecss.span}>{ph[1].max}</span>
                </div>
            </div>

        </div>

    )
}
