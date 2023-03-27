import Homecss from './Home.module.css'


export default function Home() {

    /*useEffect(() => {
        window.onload = function () {
           
        }
    }, [])

    if(typeof window !== "undefined"){
         
    }*//*
    if (typeof(window) !== "undefined") {
        document.addEventListener("keydown", function bt1Enter(event) {
            if (event.key == "enter") {
                let elr = document.activeElement
                var elements = document.querySelectorAll("input")
                for (let i = 0; i < elements.length - 1; i++) {
                    if (elr == elements[i]) {
                        elements[i + 1].focus()
                        elements[i + 1].select()
                    }
                }
                elr.blur()
            }
        })
    }
    */

    var titleCB = "Curso de Bloqueio", titleTol = "Tolerância", titleAltPadrao = "Altura do Padrão", titleEsp = "Esp. do Material", titlePH1 = "Ponto Plano PH1", titlePH2 = "Ponto Plano  PH2"

    var ph = [
        [], { nome: "PH1", max: "PH1Máx", min: "PH1Mín", n: "PH1Nominal" },
        { nome: "PH2", max: "PH2Máx", min: "PH2Mín", n: "PH2Nominal" }]

    if (typeof window !== "undefined") {
        const puts = document.querySelectorAll("input")
        puts.forEach(function (e) {
            e.addEventListener("focus", () => {
                //e.selectionStart = e.value.length
                const el = document.querySelectorAll("span")
                for (let i = 0; i < el.length; i++) {
                    el[i].style.color = "#fff";
                    el[i].style.fontWeight = "700";
                    
                }
            })
            e.addEventListener("keyup", (dig) => {
                inputFocus(e, dig)
            })
            e.addEventListener("blur", () => {
                inputFormat(e)
                Calc()
            })
        })
    }

    function inputFormat(el) {
        let val = []
        val = el.value.split("")

        if (el.id == titleCB || el.id == titleEsp) {
            while (val.length > 4) {
                val.shift()
            }
            if (val.join("") < 1) {
                el.value = val.join("") * 10

            } else {
                el.value = val.join("")

            }
        }
    }

    function Calc() {

        var elCB = document.getElementById(titleCB)
        elCB.value = parseFloat(elCB.value).toFixed(2)

        var elTol = document.getElementById(titleTol)
        elTol.value = parseFloat(elTol.value).toFixed(2)

        var elAltPadrao = document.getElementById(titleAltPadrao)
        elAltPadrao.value = parseFloat(elAltPadrao.value).toFixed(2)

        var elEsp = document.getElementById(titleEsp)
        elEsp.value = parseFloat(elEsp.value).toFixed(2)

        var elPH1 = document.getElementById(titlePH1)
        elPH1.value = parseFloat(elPH1.value).toFixed(2)

        var elPH2 = document.getElementById(titlePH2)
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

        document.getElementById(ph[1].min).textContent = (somaPH1 + tol).toFixed(2)
        document.getElementById(ph[1].n).textContent = somaPH1.toFixed(2)
        document.getElementById(ph[1].max).textContent = (somaPH1 - tol).toFixed(2)

        document.getElementById(ph[2].min).textContent = (somaPH2 + tol).toFixed(2)
        document.getElementById(ph[2].n).textContent = somaPH2.toFixed(2)
        document.getElementById(ph[2].max).textContent = (somaPH2 - tol).toFixed(2)

/*
        function getColorRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        const cor = getColorRandom(521092, 321092)*/
        const el = document.querySelectorAll("span")
        for (let i = 0; i < el.length; i++) {
            el[i].style.color = "black";
            el[i].style.fontWeight = "700";
        }

    }

    /*
     
     function btEnter(event) {
         if (event.keyCode == 13) {
             let elr = document.activeElement
             var elements = document.querySelectorAll("input")
             for (let i = 0; i < elements.length - 1; i++) {
                 if (elr == elements[i]) {
                     elements[i + 1].focus()
                     elements[i + 1].select()
                 }
             }
             elr.blur()
         }
     }
    */



    function inputFocus(e, dig) {
        const el = document.querySelectorAll("span")
        for (let i = 0; i < el.length; i++) {
            el[i].style.color = "#fff";

        }
        var memo = [], valor = ""
        if (dig.keyCode == 13) {
            var elements = document.querySelectorAll("input")
            elements.forEach((el, i, array) => {
                if (e.id == el.id) {
                    if (i == elements.length - 1) {
                        e.blur()

                    } else {
                        if (array[i + 1].id == titleTol) i += 1
                        if (array[i + 1].id == titleAltPadrao) i += 1

                        array[i + 1].focus()

                    }
                }
            })


        } else if (!isNaN(dig.key)) {
            valor = e.value
            valor = valor.replace(".", "")
            memo = valor.split("")
            while (memo.length > 4) {
                memo.shift()
            }

            valor = memo.join("")
            valor = parseFloat(valor)
            e.value = parseFloat(valor / 100).toFixed(2)
        }

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
                        <input id={titleCB} className={Homecss.input} inputMode="numeric" type="text" step=".01" min="2" max="5" defaultValue="3.50" />
                    </label>
                    <label>{titleTol}
                        <input id={titleTol} tabIndex="1" className={Homecss.input} inputMode="numeric" type="text" step=".05" min="0" max="1" defaultValue="0.50" />
                    </label>
                    <label>{titleAltPadrao}
                        <input id={titleAltPadrao} tabIndex="1" className={Homecss.input} inputMode="numeric" type="text" step=".01" defaultValue="10.03" />
                    </label>
                    <label>{titleEsp}
                        <input id={titleEsp} className={Homecss.input} inputMode="numeric" type="text" step=".05" min="2" max="5" defaultValue="2.75" />
                    </label>
                    <label>{titlePH2}
                        <input id={titlePH2} className={Homecss.input + " " + Homecss.inputPH} inputMode="numeric" type="text" step=".01" min="20" defaultValue="35.70" />
                    </label>
                    <label>{titlePH1}
                        <input id={titlePH1} className={Homecss.input + " " + Homecss.inputPH} inputMode="numeric" type="text" step=".01" min="20" defaultValue="35.70" />
                    </label>
                </div>

                <hr />
                <div className={Homecss.spans}>
                    <label>{ph[2].nome}</label>
                    <span id={ph[2].min} className={Homecss.span}>Máx</span>
                    <span id={ph[2].n} className={Homecss.span}>Nominal</span>
                    <span id={ph[2].max} className={Homecss.span}>Mín</span>
                </div>
                <div className={Homecss.spans}>
                    <label>{ph[1].nome}</label>
                    <span id={ph[1].min} className={Homecss.span}>Máx</span>
                    <span id={ph[1].n} className={Homecss.span}>Nominal</span>
                    <span id={ph[1].max} className={Homecss.span}>Mín</span>
                </div>
            </div>

        </div>

    )
}
