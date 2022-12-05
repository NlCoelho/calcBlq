import { useState } from 'react'
import Homecss from './Home.module.css'

export default function Home() {



    var cb = "Curso de Bloqueio", tol = "Tolerância", altPadrao = "Altura do Padrão", esp = "Esp. do Material", ph1 = "Ponto Plano PH1", ph2 = "Ponto Plano  PH2"

    var ph = [
        [], { nome: "PH1", max: "Máx", min: "Mín", n: "Nominal" },
        { nome: "PH2", max: "Máx", min: "Mín", n: "Nominal" }]

    function fChange() {
        var soma =parseFloat(document.getElementById(cb).value) + parseFloat(document.getElementById(altPadrao).value ) - parseFloat(document.getElementById(esp).value)
        var somaPH1 = soma + parseFloat(document.getElementById(ph1).value)
        var somaPH2 = soma + parseFloat(document.getElementById(ph2).value)
        var tolerancia = parseFloat(document.getElementById(tol).value)
        
        document.getElementById(ph[1].nome + ph[1].min).textContent =  parseFloat(somaPH1.toFixed(2)) + parseFloat(tolerancia.toFixed(2))
        document.getElementById(ph[1].nome + ph[1].n).textContent =  parseFloat(somaPH1.toFixed(2))
        document.getElementById(ph[1].nome + ph[1].max).textContent =  parseFloat(somaPH1.toFixed(2)) - parseFloat(tolerancia.toFixed(2))

        document.getElementById(ph[2].nome + ph[2].min).textContent =  parseFloat(somaPH2.toFixed(2)) + parseFloat(tolerancia.toFixed(2))
        document.getElementById(ph[2].nome + ph[2].n).textContent =  parseFloat(somaPH2.toFixed(2))
        document.getElementById(ph[2].nome + ph[2].max).textContent =  parseFloat(somaPH2.toFixed(2)) - parseFloat(tolerancia.toFixed(2))
        
        const el = document.querySelectorAll("span")
        for (let i = 0; i < el.length; i++) {
            el[i].style.color = "#000";
            el[i].style.fontWeight = "700";
          }
        
    }

    function btEnter(event) {
        if(event.keyCode==13){
            let elr=document.activeElement
            elr.blur()
        } 
    }

    function Contador() {
        const [contador, setContador] = useState(0)

        function adicionaContador() {
            setContador(contador + ph1)
        }
        //return(
        //   <div>
        //     <div>{contador}</div>
        //   <button onClick={adicionaContador}>Mais</button>
        // </div>
        // )
    }

    return (

        <div className={Homecss.container}>
            <Contador />

            <div className={Homecss.titulo}>
                <h2>Calculadora de Bloqueio</h2>
            </div>
            <hr />
            <div className={Homecss.corpo}>
                <div className={Homecss.labels}>
                    <label>{cb}
                        <input id={cb} onChange={fChange} className={Homecss.input} type="number" step=".01" placeholder="3.5" min="2" max="5" defaultValue="3.5" />
                    </label>
                    <label>{tol}
                        <input id={tol} onChange={fChange} className={Homecss.input} type="number" step=".05" placeholder="0.5" min="0" max="1" defaultValue="0.5" />
                    </label>
                    <label>{altPadrao}
                        <input id={altPadrao} onChange={fChange} className={Homecss.input} type="number" step=".01" placeholder={altPadrao} defaultValue="10.08" />
                    </label>
                    <label>{esp}
                        <input id={esp} onChange={fChange} className={Homecss.input} type="number" step=".05" placeholder={esp} min="2" max="5" defaultValue="2.75" />
                    </label>
                    <label>{ph2}
                        <input id={ph2} onChange={fChange} className={Homecss.input + " " + Homecss.inputPH} type="number" step=".01" placeholder={ph2} min="20" defaultValue="35.70" />
                    </label>
                    <label>{ph1}
                        <input id={ph1} onKeyDown={btEnter} onChange={fChange} className={Homecss.input + " " + Homecss.inputPH} type="number" step=".01" placeholder={ph2} min="20" defaultValue="35.70" />
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
