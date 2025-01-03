import Card from "./componentes/Card";
import Logo from "./img/Amigos-Top_01.png";
import Logo1 from "./img/Amigos-Top_04.png";
import Logo2 from "./img/Amigos-Top_07.png";
import Imagem3 from "./img/Amigos-Top_10.png";
import Card1 from "./componentes/Card1";

function App() {
  return (
    <div>
      {/*Cabeçalho*/}

      <header>
        <div className="img-topo">
          <img src={Logo} alt="" />
        </div>
        <div className="img-setas">
          <img src={Logo1} alt="" />
        </div>
        <div className="titulo1">
          <h1>OPORTUNIDADES</h1>
        </div>
      </header>

      {/*Informação*/}

      <main>
        <section className="container">
          <section className="products-container">
            {/* 3 Cards Parte de cima */}
            <Card />
            <Card />
            <Card />

            {/* 4 Cards Parte de baixo */}

            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
          </section>

          {/*Quem somos*/}

          <div className="Quem-somos">
            <div className="img-fundo">
              <img src={Logo2} alt="Imagem do grupo multiware" />
            </div>

            <div className="corpo-quem-somos">
              <h1 className="titulo-quem-somos">
                QUEM <br />
                SOMOS
              </h1>
              <br />
              <p className="Movidos">
                Movidos por tecnologia: sempre com o olhar para o futuro
              </p>

              <div className="img-notebook">
                <img src={Imagem3} alt="" />
              </div>

              <div className="texto-quem-somos">
                <br />
                <p>
                  Em meados do ano 2000 foi criado pelo empresário Adenilson
                  Rocha o TopSinop, primeiro site de entretenimento do norte de
                  Mato Grosso. A visão empreendedora de Adenilson mostrava um
                  caminho de sucesso e logo em 2002, Adenilson criou a MultiWare
                  Tecnologia, com sede em Sinop/MT, a empresa inicialmente era
                  voltada em assistência técnica de computadores com atendimento
                  domiciliar. O empreendedor enxergou uma lacuna a ser
                  preenchida no mercado, então surgiu a ideia de criar um
                  sistema de gestão para empresas de telecomunicação, sendo
                  atualmente uma das principais marcas deste segmento nacional,
                  o TopSapp.
                </p>

                <br />
                <p>
                  A partir do TopSapp a Multiware Tecnologia cresceu rapidamente
                  e surgem outras marcas como TwSpeed Telecom, A Folha Notícias,
                  TopDNS e TopCabo. Em 2019 um novo capítulo na história passa a
                  ser escrito, surge o Grupo Ad Brax.
                </p>

                <br />
                <p>
                  Ao longo de sua existência, Grupo Ad Brax ampliou seu rol de
                  serviços para a área de Tecnologia da Informação. Assim, nós,
                  do Grupo Ad Brax, desenvolvemos o nosso jeito de ser movidos
                  por tecnologia, investindo em empresas que vão ao encontro das
                  necessidades de empresas e da sociedade.
                </p>

                <br />
                <p>O grupo Ad Brax é um sonho que se tornou realidade.</p>
              </div>
            </div>
          </div>

          {/* CADASTRE-SE*/}

          <div className="cadastre-se">
            <h1 className="cadastre-se-txt">CADASTRE-SE</h1>
            <p className="p-baixo-cadastre-se">
              Cadastre o seu curriculo para participar do noso processo seletivo
            </p>

            <div className="form">
              <form action="">
                <form action="#"></form>

                <div className="input-group">
                  <div className="input-box">
                    <input
                      id="name1"
                      type="text"
                      name="nome"
                      placeholder="Nome Completo"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <input
                      id="e-mail1"
                      type="email"
                      name="nome"
                      placeholder="E-Mail"
                      required
                    />
                  </div>
                </div>

                {/* Seleção de gestão */}

                <div className="select">
                  <div id="category-select">
                    <label for="options-view-button">Categoria</label>
                    <input type="checkbox" id="options-view-button" />

                    <div id="select-button">
                      <div id="selected-value">Gestão de Contrato</div>

                      <div id="chevrons">
                        <i class="bx bxs-chevron-down"></i>
                        <i class="bx bx-chevron-up"></i>
                      </div>
                    </div>
                  </div>

                  <ul id="options">
                    <li className="option">
                      <input
                        type="radio"
                        name="category"
                        value="gestao1"
                        data-label="Gestão 1"
                      />

                      <span className="label">Gestão 1</span>
                      <i class="bx bx-check"></i>
                    </li>

                    <li className="option">
                      <input
                        type="radio"
                        name="category"
                        value="gestao2"
                        data-label="Gestão 2"
                      />

                      <span className="label">Gestão 2</span>
                      <i class="bx bx-check"></i>
                    </li>

                    <li className="option">
                      <input
                        type="radio"
                        name="category"
                        value="gestao3"
                        data-label="Gestão 3"
                      />
                      <span className="label">Gestão 3</span>
                      <i class="bx bx-check"></i>
                    </li>
                  </ul>
                </div>

                <div className="curriculo">
                  <p className="texto-curriculo">Selecionar o seu curriculo</p>
                </div>

                <div className="input-box-descreva">
                  <input
                    id="descreva"
                    type="text"
                    name="descreva"
                    placeholder="Descreva porque se interessou pela oportunidade"
                    required
                  />
                </div>

                <div className="continue-button">
                  <button>
                    <a href="#"></a>Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
