import Homecss from './Home.module.css'


export default function Home() {
    return (
        <div className={Homecss.container}>
            <div className={Homecss.titulo}>
                <h2>Calculadora de Bloqueio</h2>
            </div>
            <hr />
            <div className={Homecss.corpo}>
                <div className={Homecss.inputs}>
                    <input className={Homecss.input} type="number" step=".01" placeholder="Curso de Bloqueio" min="2" max="5" />
                    <input className={Homecss.input} type="number" step=".05" placeholder="Tolerância" min="0" max="1" />
                    <input className={Homecss.input} type="number" step=".01" placeholder="Alt. do Padrão" value="10.08" />
                    <input className={Homecss.input} type="number" step=".05" placeholder="Esp. do Material" min="2" max="5" />
                    <input className={Homecss.input + " " + Homecss.inputPH} type="number" step=".01" placeholder="Ponto Plano PH2" min="20" />
                    <input className={Homecss.input + " " + Homecss.inputPH} type="number" step=".01" placeholder="Ponto Plano PH1" min="20" />
                </div>
                <hr />
                <div className={Homecss.spans}>
                    <span id="PH2+" className={Homecss.span}>35,73</span>
                    <span className={Homecss.span}>35,73</span>
                    <span id="PH2-" className={Homecss.span}>35,73</span>
                    <span className={Homecss.span}>35,73</span>
                    <span className={Homecss.span}>35,73</span>
                    <span className={Homecss.span}>35,73</span>
                </div>
            </div>
        </div>
    )
}
