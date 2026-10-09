import { useEffect, useRef, useState } from "react";
import logoLockup from "./imports/logo_illu_estu_dio-02.svg";
import logoSymbol from "./imports/logo_illu_estu_dio-01.svg";

const sections = [
  "introdução",
  "o momento da marca",
  "a marca hoje",
  "o que os clientes reconhecem",
  "diferentes momentos",
  "referências e território",
  "mercado e concorrência",
  "oportunidades",
  "o que a identidade precisa resolver",
  "nossa hipótese de direção",
  "próximos passos",
];

const timeline = [
  ["2017", "Os primeiros doces e bolos dos mesversários despertam o interesse de outras pessoas e dão início às encomendas."],
  ["2018", "A confeitaria ganha sua primeira página, ainda com o nome Estação do Doce."],
  ["2019", "A marca passa a se apresentar como Josy Assunção Confeitaria, acompanhando uma nova fase de crescimento."],
  ["2024", "Josy deixa a enfermagem para dedicar-se integralmente à confeitaria."],
];

const reputation = [
  ["sabor", "Sabor e qualidade", ["O sabor aparece como uma das principais razões de satisfação.", "Clientes descrevem bolos e doces como deliciosos, destacam textura, ingredientes e qualidade das preparações."], "O bolo estava lindo, além de muito delicioso.", "Dayana Santos", "Isso mostra que a experiência não depende apenas da aparência. O produto sustenta boa parte da reputação construída.", ""],
  ["cuidado", "Cuidado e apresentação", ["Capricho, delicadeza, beleza e atenção são características mencionadas pelos consumidores."], "Os melhores doces da cidade! Muito caprichosos, saborosos e delicados.", "Estela Ferreira", "Esse ponto é especialmente relevante porque o cuidado aparece tanto no discurso da Josy quanto na percepção dos clientes.", ""],
  ["confiança", "Confiança e relacionamento", ["Algumas avaliações demonstram fidelidade construída ao longo dos anos, atendimento próximo e disposição para recomendar."], "Já experimentei vários bolos e doces da Josy e todos são perfeitos, pedimos com ela há anos para os aniversários da família.", "Natália Franco", "Esse tipo de relacionamento tem um valor particular em encomendas para ocasiões importantes.", "Quando alguém escolhe uma confeitaria para um casamento, aniversário ou celebração familiar, não procura apenas um produto bonito. Também precisa confiar que o resultado corresponderá às expectativas."],
];

const moments = [
  ["pronta-entrega", "desejo · conveniência · recorrência", "Aqui, a decisão pode acontecer por impulso. O cliente encontra um produto nas redes sociais, sente vontade e procura uma maneira prática de comprar. A comunicação precisa despertar desejo, mostrar bem o produto e facilitar a escolha.", "05A — foto de produto de pronta-entrega"],
  ["presentes", "cuidado · gesto · experiência", "Quando a intenção é presentear, o produto assume outra função. Além do sabor, o cliente considera a apresentação, a embalagem e a sensação que deseja provocar em quem recebe. A experiência começa antes de abrir a caixa.", "05B — foto de produto presenteável"],
  ["encomendas", "personalização · confiança · proximidade", "Bolos e doces personalizados envolvem referências, sabores, tamanhos, decoração e expectativas particulares. A comunicação precisa mostrar possibilidades, mas também organização e confiança.", "05C — foto de bolo personalizado"],
  ["festas", "celebração · consistência · acabamento", "Em aniversários e comemorações maiores, acabamento, apresentação e variedade ganham importância. O cliente precisa perceber cuidado não apenas com uma peça individual, mas com o conjunto.", "05D — foto de festa ou mesa de doces"],
  ["casamentos / 15 anos", "sofisticação · segurança · presença", "Nessas ocasiões, o produto faz parte de uma experiência planejada com antecedência e geralmente envolve outros fornecedores. A apresentação precisa transmitir sofisticação, domínio técnico, profissionalismo e segurança.", "05E — foto de doces finos ou evento"],
];

const colors = [
  ["rosa amadurecido", "Preserva a memória feminina da marca, mas permite investigar uma expressão mais adulta e marcante.", "rose"],
  ["vinho / cherry", "Acrescenta profundidade e intensidade, sem depender do dourado para sugerir sofisticação.", "cherry"],
  ["creme", "Cria respiro e acolhimento, permitindo que fotografia e produto continuem protagonistas.", "cream"],
  ["contraste profundo", "Pode ajudar a construir presença, legibilidade e uma expressão mais refinada em aplicações especiais.", "deep"],
];

const references = [
  "Perdomo", "Fran Abreu", "Mariana Junqueira", "Márcia Suzuki", "outra referência do briefing",
];

const marketViews = [
  {
    label: "mesmo produto", title: "Outras confeitarias",
    body: ["No briefing, foram mencionadas Vanessa Krebs e Iolanda, em Paranaíta, e Kelly Romera, em Alta Floresta.", "A oferta observada da Kelly demonstra como o mercado pode atender diferentes ocasiões, com doces individuais, sobremesas, pronta-entrega, kits e produtos para festas. Isso indica que variedade e conveniência já fazem parte da disputa local.", "A oportunidade da Josy não precisa estar em oferecer mais produtos ou disputar o menor preço. A identidade pode valorizar características presentes em sua reputação: cuidado, acabamento, personalização e confiança."],
    note: "Esta é uma hipótese de diferenciação. Não significa que outras confeitarias não ofereçam essas qualidades.",
  },
  {
    label: "mesma ocasião", title: "A mesma ocasião, outros produtos",
    body: ["Uma pessoa que deseja presentear pode escolher uma caixa de doces, mas também flores, chocolates, uma cesta ou produtos de empório.", "Nesse momento, a Josy não disputa apenas a preferência por confeitaria. Disputa a escolha de um presente especial.", "Por isso, floriculturas, chocolaterias e empórios ampliam nossa leitura de mercado."],
    examples: "Empório Canastra · VivaFlor · chocolaterias · floriculturas · cafés e empórios",
  },
  {
    label: "mesmo desejo", title: "O que o cliente realmente procura?",
    body: ["A escolha não acontece somente pela categoria. A motivação pode ser matar uma vontade, presentear, celebrar, surpreender ou encontrar um fornecedor confiável.", "Compreender a ocasião ajuda a definir o que a comunicação precisa transmitir: desejo e praticidade na pronta-entrega; apresentação nos presentes; confiança, qualidade e consistência nos eventos."],
  },
];

const opportunities = [
  { title: "Do cuidado ao reconhecimento", found: "Cuidado, capricho e atenção aparecem na maneira como a Josy descreve seu trabalho e nas avaliações dos clientes.", opportunity: "Transformar essas características em uma linguagem visual reconhecível. Produto, cardápio e embalagem podem comunicar cuidado antes mesmo do atendimento.", role: "Criar consistência entre tipografia, fotografia, cores, composição e materiais." },
  { title: "Do produto à experiência", found: "A qualidade do produto sustenta a reputação. Mas a compra também envolve descoberta, escolha, atendimento, apresentação e recebimento.", opportunity: "Ampliar a percepção de valor para além do sabor. Fotografia, clareza e embalagem coerente podem comunicar uma experiência mais completa.", role: "Criar uma linguagem consistente antes, durante e depois da compra." },
  { title: "Da embalagem ao presente", found: "A Josy deseja desenvolver produtos presenteáveis, kits sazonais e uma experiência de abertura mais especial.", opportunity: "Permitir diferentes níveis de apresentação: do consumo cotidiano a caixas especiais com materiais e acabamentos mais elaborados.", role: "Construir uma linguagem para etiquetas, caixas, cartões, sacolas e futuras linhas, considerando produção e orçamento." },
  { title: "Da variedade ao sistema", found: "O portfólio já é diversificado e existe intenção de lançar produtos e atender outras ocasiões.", opportunity: "Evitar que cada novidade precise de uma linguagem independente.", role: "Definir elementos estáveis de reconhecimento e flexibilidade para campanhas, coleções e novas categorias." },
  { title: "Da reputação ao reconhecimento regional", found: "A marca possui avaliações positivas, atendimento próximo e histórico de indicações. Também deseja ampliar sua presença em Alta Floresta.", opportunity: "Conectar a reputação existente a uma apresentação consistente em todos os canais.", role: "Facilitar reconhecimento, continuidade visual e aplicação em materiais físicos, digitais e comerciais." },
];

const services = [
  ["site", "uma casa digital consistente, feita para apresentar a marca e facilitar escolhas."],
  ["landing page", "uma página focada para campanhas, coleções ou momentos específicos."],
  ["catálogo digital", "produtos organizados com clareza, desejo e atualização simples."],
  ["fotografia", "imagens que traduzem textura, cuidado e atmosfera sem perder verdade."],
  ["embalagens", "a experiência da marca continuando depois da escolha do produto."],
  ["presença no Google", "informação correta e uma marca fácil de encontrar quando importa."],
  ["sistemas e ferramentas digitais", "soluções sob medida para organizar rotinas e reduzir trabalho manual."],
];

function Mark() {
  return (
    <div className="mark" aria-label="illu estúdio">
      <span className="logo-lockup" aria-hidden="true">
        <img className="logo-base" src={logoLockup} alt="" />
        <img className="logo-accent" src={logoLockup} alt="" />
      </span>
      <img className="logo-symbol" src={logoSymbol} alt="" aria-hidden="true" />
    </div>
  );
}

function Arrow() {
  return <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M14 6l6 6-6 6" /></svg>;
}

function Eyebrow({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="eyebrow"><b>{number}</b><span>/</span><span>{children}</span></div>;
}

function Placeholder({ children, tone = "" }: { children: React.ReactNode; tone?: string }) {
  return <div className={`placeholder ${tone}`}><span>{children}</span><small>área reservada para material real</small></div>;
}

export default function App() {
  const [active, setActive] = useState(0);
  const [night, setNight] = useState(false);
  const [time, setTime] = useState(0);
  const [moment, setMoment] = useState(0);
  const [color, setColor] = useState(0);
  const [reputationIndex, setReputationIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [reference, setReference] = useState(0);
  const [market, setMarket] = useState(0);
  const [opportunity, setOpportunity] = useState(0);
  const [system, setSystem] = useState<"base" | "expressão">("base");
  const [validated, setValidated] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50, show: false });
  const root = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = night ? "night" : "day";
  }, [night]);

  useEffect(() => {
    document.documentElement.dataset.chapter = String(active + 1);
  }, [active]);

  useEffect(() => {
    const nodes = root.current?.querySelectorAll<HTMLElement>("[data-section], .observe");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        const index = (entry.target as HTMLElement).dataset.section;
        if (index) setActive(Number(index));
      });
    }, { rootMargin: "-30% 0px -48% 0px", threshold: 0.01 });
    nodes?.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateTimeline = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const element = timelineRef.current;
        if (!element || window.matchMedia("(max-width: 580px)").matches) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.max(1, element.offsetHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(0.999, -rect.top / distance));
        setTime(Math.min(timeline.length - 1, Math.floor(progress * timeline.length)));
      });
    };
    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  const goTo = (index: number) => {
    document.querySelector(`[data-section="${index}"]`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site" ref={root}>
      <header className="topbar">
        <Mark />
        <div className="project-name">Josy Assunção Confeitaria <span>/ diagnóstico inicial</span></div>
        <div className="top-actions">
          <button className="theme-toggle" onClick={() => setNight(!night)} aria-pressed={night}>
            <i />{night ? "daylight" : "nightshift"}
          </button>
          <span><b>{String(active + 1).padStart(2, "0")}</b> / 11</span>
        </div>
        <i className="progress" style={{ transform: `scaleX(${(active + 1) / 11})` }} />
      </header>

      <main>
        <section className="section hero is-visible" data-section="0">
          <div className="hero-stage">
            <div className="hero-meta reveal"><span>illu estúdio apresenta</span></div>
            <div className="hero-title reveal" onMouseMove={(event) => { const box = event.currentTarget.getBoundingClientRect(); setCursor({ x: event.clientX - box.left, y: event.clientY - box.top, show: true }); }} onMouseLeave={() => setCursor((value) => ({ ...value, show: false }))}>
              <span>Josy Assunção</span><span>Confeitaria</span>
              <i className={cursor.show ? "brand-cursor show" : "brand-cursor"} style={{ left: cursor.x, top: cursor.y }} />
            </div>
            <div className="hero-label reveal">Diagnóstico de identidade visual</div>
            <button className="text-link reveal" onClick={() => document.getElementById("intro-reading")?.scrollIntoView({ behavior: "smooth" })}>começar diagnóstico <Arrow /></button>
          </div>
          <div className="intro-reading observe" id="intro-reading">
            <div className="intro-heading"><span>01 / introdução</span><h2>Olá, Josy!</h2></div>
            <div className="intro-copy">
              <p>Antes de desenhar sua nova identidade, dedicamos um tempo a conhecer a história da confeitaria, seus objetivos e a forma como a marca se apresenta hoje.</p>
              <p>Analisamos o briefing, a identidade atual, os cardápios, os produtos, as avaliações de clientes e referências do mercado.</p>
              <p>A intenção não é transformar sua marca em algo que ela não é. É compreender o que já foi construído e como o design pode comunicar melhor seu valor nesta nova fase.</p>
              <blockquote><strong>Ainda não vamos escolher logotipo, cores ou fontes.</strong><span>Primeiro, queremos confirmar que entendemos corretamente a Josy Assunção Confeitaria que você deseja construir.</span></blockquote>
              <small>Esta é uma etapa de alinhamento. Você pode concordar, discordar ou complementar qualquer ponto.</small>
            </div>
          </div>
        </section>

        <section className="section history" data-section="1">
          <Eyebrow number="02">A trajetória da marca</Eyebrow>
          <div className="chapter-heading observe"><h2>Uma história que cresceu junto com a marca</h2><h3>A confeitaria mudou. E a forma de apresentá-la precisa acompanhar essa evolução.</h3></div>
          <div className="history-copy observe">
            <p>A Josy Assunção Confeitaria nasceu do desejo de preparar os doces e bolos dos mesversários de uma filha. Em 2017, esse início familiar despertou o interesse de outras pessoas e trouxe as primeiras encomendas.</p>
            <p>Depois da primeira página como Estação do Doce, a marca acompanhou o crescimento da atividade e a chegada a Alta Floresta. Em 2019, passou a se chamar Josy Assunção Confeitaria.</p>
            <p>Em 2024, Josy deixou a enfermagem para se dedicar integralmente ao negócio. Mais do que uma mudança profissional, foi uma nova forma de enxergar seus processos e possibilidades de crescimento.</p>
          </div>
          <div className="timeline-scroll" ref={timelineRef}>
            <div className="timeline-sticky" aria-live="polite">
              <div className="timeline-year" key={`year-${time}`}>{timeline[time][0]}</div>
              <div className="timeline-copy" key={`copy-${time}`}>
                <span>0{time + 1} / 04</span>
                <p>{timeline[time][1]}</p>
                <div className="timeline-progress" aria-hidden="true">{timeline.map(([year], index) => <i key={year} className={index === time ? "active" : ""} />)}</div>
              </div>
            </div>
            <div className="timeline-steps" aria-hidden="true">{timeline.map(([year]) => <div className="timeline-step" key={year} />)}</div>
          </div>
          <div className="timeline-mobile">
            {timeline.map(([year, description], index) => <article className="observe" key={year}><span>0{index + 1} / 04</span><b>{year}</b><p>{description}</p></article>)}
          </div>
          <div className="documents observe">
            <Placeholder>02A — identidade / logotipo anterior</Placeholder>
            <Placeholder>02B — documento, cardápio ou material histórico</Placeholder>
          </div>
          <div className="strategic-reading observe"><h3>O que entendemos dessa trajetória</h3><div><p>A história afetiva continua importante, mas hoje ela convive com uma empresa mais experiente, um portfólio diversificado e objetivos comerciais mais ambiciosos.</p><p>A identidade atual representa parte dessa história. O redesign precisa conseguir representar também aquilo que veio depois.</p></div></div>
          <div className="chapter-close observe">O desafio não é substituir a história da Josy por uma imagem sofisticada. É criar uma identidade que represente sua trajetória inteira, incluindo o futuro que ela está preparando.</div>
        </section>

        <section className="section today" data-section="2">
          <Eyebrow number="03">A identidade atual</Eyebrow>
          <div className="chapter-heading observe"><h2>O que a marca comunica hoje</h2><h3>Existe reconhecimento. Mas a expressão visual ainda é limitada.</h3></div>
          <div className="today-copy observe">
            <p>A assinatura caligráfica, o rosa/nude claro e o marrom constroem uma imagem feminina, próxima e ligada ao cuidado artesanal.</p>
            <p>Nos materiais comerciais, títulos decorativos, fotografias e elementos gráficos organizam sabores, tamanhos e preços. Essas escolhas acompanharam uma fase importante do negócio.</p>
            <p>Hoje, porém, a confeitaria precisa comunicar mais coisas ao mesmo tempo.</p>
          </div>
          <div className="current-assets observe">
            <div className="asset-logo"><Placeholder>03A — logotipo atual</Placeholder></div>
            <div className="asset-identity"><Placeholder>03B — identidade visual atual</Placeholder></div>
            <div className="asset-cake-menu"><Placeholder>03C — menu de bolos 2026</Placeholder></div>
            <div className="asset-sweets-menu"><Placeholder>03D — menu de doces 2026</Placeholder></div>
            <div className="asset-instagram"><Placeholder>03E — Instagram atual</Placeholder></div>
          </div>
          <div className="audit-groups">
            <article className="audit-group observe">
              <span>01 / ativos</span><h3>O que a identidade atual transmite com facilidade</h3>
              <dl><div><dt>Delicadeza e feminilidade</dt><dd>A escrita fluida e as cores suaves favorecem uma percepção sensível e acolhedora.</dd></div><div><dt>Proximidade e afeto</dt><dd>O nome pessoal e a comunicação sobre carinho, família e celebração aproximam a marca dos clientes.</dd></div><div><dt>Produção artesanal</dt><dd>Os materiais evidenciam a pessoa e o trabalho manual cuidadoso por trás de cada encomenda.</dd></div></dl>
            </article>
            <article className="audit-group observe">
              <span>02 / evolução</span><h3>O que precisa ganhar força</h3>
              <dl><div><dt>Maturidade e presença</dt><dd>A marca deseja uma imagem mais segura e contemporânea, especialmente para eventos.</dd></div><div><dt>Autoria e diferenciação</dt><dd>Hoje, a personalidade depende muito do nome caligráfico e da paleta. A nova identidade precisa criar outros elementos reconhecíveis.</dd></div><div><dt>Consistência</dt><dd>Cardápios, fotografias, redes sociais e embalagens devem compartilhar uma linguagem organizada.</dd></div><div><dt>Versatilidade</dt><dd>O sistema precisa funcionar em bolos, doces finos, presentes, pronta-entrega, eventos e futuros produtos.</dd></div></dl>
            </article>
          </div>
          <div className="current-colors observe">
            <div className="module-heading"><span>cores da identidade atual</span><p>As duas cores ajudam a construir a percepção atual da marca.</p></div>
            <div className="color-bands">
              <button className={`nude-band ${currentColor === 0 ? "active" : ""}`} onClick={() => setCurrentColor(0)}><span>Rosa / nude</span><b>#FDEDEE</b><p>Delicadeza, leveza e proximidade.</p></button>
              <button className={`brown-band ${currentColor === 1 ? "active" : ""}`} onClick={() => setCurrentColor(1)}><span>Marrom</span><b>#945F58</b><p>Estabilidade, acolhimento e contraste.</p></button>
            </div>
          </div>
          <div className="word-evolution observe">
            {[["delicadeza", "delicadeza + presença"], ["carinho", "cuidado + confiança"], ["artesanal", "artesanal + autoral"], ["feminina", "feminina + madura"], ["produto", "produto + experiência"], ["logo", "sistema de identidade"]].map(([from, to]) => (
              <button key={from}><span>{from}</span><i>→</i><strong>{to}</strong></button>
            ))}
          </div>
          <div className="preserve observe"><h3>O que vale preservar?</h3><div><p>Não precisamos manter as mesmas formas gráficas para preservar seu significado.</p><p>O rosa pode amadurecer, a delicadeza ganhar contraste e o cuidado artesanal receber uma apresentação mais profissional.</p></div></div>
          <div className="today-close observe">A identidade atual comunica bem o carinho da confeitaria. A nova precisa comunicar, com a mesma clareza, sua experiência, sua capacidade e o valor do que entrega.</div>
        </section>

        <section className="section recognition" data-section="3">
          <Eyebrow number="04">A percepção de quem compra</Eyebrow>
          <div className="chapter-heading observe"><h2>O que os clientes já reconhecem</h2><h3>Existe algo que não precisamos construir do zero: reputação.</h3></div>
          <div className="section-copy observe"><p>Uma marca pode desejar muitos atributos, mas é importante observar quais aparecem espontaneamente nas palavras dos clientes.</p><p>Nas avaliações do Google, encontramos elogios recorrentes aos produtos e ao atendimento. Três aspectos se destacam.</p></div>
          <div className="reputation-tabs observe" role="tablist" aria-label="aspectos reconhecidos pelos clientes">
            {reputation.map((item, index) => <button key={item[0] as string} role="tab" aria-selected={reputationIndex === index} onClick={() => setReputationIndex(index)} className={reputationIndex === index ? "active" : ""}><span>0{index + 1}</span>{item[0] as string}</button>)}
          </div>
          <div className="reputation-stage observe" key={reputationIndex}>
            <div className="reputation-analysis">
              <span>pilar 0{reputationIndex + 1}</span><h3>{reputation[reputationIndex][1] as string}</h3>
              {(reputation[reputationIndex][2] as string[]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <strong>{reputation[reputationIndex][5] as string}</strong>
              {reputation[reputationIndex][6] && <p>{reputation[reputationIndex][6] as string}</p>}
            </div>
            <blockquote><span>avaliação de cliente</span>“{reputation[reputationIndex][3] as string}”<cite>{reputation[reputationIndex][4] as string}<br />Google</cite></blockquote>
          </div>
          <div className="reputation-meaning observe"><h3>O que isso significa para a nova identidade?</h3><div><p>A Josy deseja ser reconhecida por sofisticação, autoria e uma experiência mais refinada. Os clientes já oferecem uma base concreta: sabor, cuidado e confiança.</p><p>A identidade não deve trocar esses atributos por uma imagem de luxo distante, mas torná-los mais claros antes mesmo da compra.</p></div></div>
          <div className="big-conclusion observe">A marca já conquistou a confiança de clientes através do produto. O redesign pode transformar essa reputação em uma apresentação mais forte, consistente e reconhecível.</div>
          <small className="research-note">Esta leitura considera as avaliações fornecidas e não representa uma pesquisa estatística com todos os clientes.</small>
        </section>

        <section className="section occasions" data-section="4">
          <Eyebrow number="05">Arquitetura da experiência</Eyebrow>
          <div className="chapter-heading observe"><h2>Uma confeitaria, diferentes momentos de consumo</h2><h3>A marca precisa acompanhar tanto o cotidiano quanto as grandes celebrações.</h3></div>
          <div className="section-copy observe"><p>Ao analisar o portfólio, percebemos que a Josy já atende necessidades bastante diferentes.</p><p>O menu de bolos apresenta a linha Pequenos Momentos, voltada a comemorações menores e ao dia a dia, além de opções com diferentes sabores, tamanhos, acabamentos e personalização.</p><p>Nos doces, a oferta vai dos brigadeiros tradicionais aos doces finos e preparações mais elaboradas.</p><p>Essa variedade é uma qualidade comercial, mas também traz um desafio: como apresentar produtos tão diferentes sem perder o reconhecimento da marca?</p></div>
          <div className="occasion-nav" role="tablist">
            {moments.map(([name], index) => <button key={name} role="tab" aria-selected={moment === index} className={moment === index ? "active" : ""} onClick={() => setMoment(index)}><span>0{index + 1}</span>{name}</button>)}
          </div>
          <div className="occasion-stage observe">
            <div className="occasion-copy" key={`copy-${moment}`}><span>momento selecionado</span><h3>{moments[moment][0]}</h3><strong>{moments[moment][1]}</strong><p>{moments[moment][2]}</p></div>
            <div className="occasion-image" key={`image-${moment}`}><Placeholder>{moments[moment][3]}</Placeholder></div>
          </div>
          <div className="occasion-summary observe"><h3>O que essas ocasiões têm em comum?</h3><div><p>Em todas elas, o cliente procura um produto gostoso, bem-feito e preparado com cuidado. O que muda é a importância da ocasião, a expectativa de apresentação e a intensidade da experiência.</p><p>Por isso, nossa recomendação não é criar identidades separadas para cada linha, mas uma identidade principal forte, capaz de se adaptar através da fotografia, das cores, das embalagens e dos materiais.</p></div></div>
          <div className="occasion-close observe">A nova identidade precisa variar de intensidade, não de personalidade.<small>Mais leve na pronta-entrega. Mais especial nos presentes. Mais refinada nos eventos. Sempre reconhecível como Josy Assunção Confeitaria.</small></div>
        </section>

        <section className="section territory" data-section="5">
          <Eyebrow number="06">O que chamou sua atenção</Eyebrow>
          <div className="chapter-heading observe"><h2>As referências revelam uma direção</h2><h3>Mais do que uma estética, existe uma forma de apresentar a confeitaria.</h3></div>
          <div className="section-copy observe"><p>Observamos as marcas mencionadas no briefing, entre elas Perdomo, Fran Abreu, Mariana Junqueira e Márcia Suzuki.</p><p>Elas possuem propostas próprias e não queremos reproduzir suas soluções visuais. Nosso interesse é entender quais características se aproximam do que a Josy deseja construir.</p></div>
          <div className="reference-strip observe">
            {references.map((name, index) => (
              <button key={name} onClick={() => setReference(index)} onMouseEnter={() => setReference(index)} className={reference === index ? "active" : ""}>
                <Placeholder>06{String.fromCharCode(65 + index)} — {name}</Placeholder>
                <span>{name}</span>
              </button>
            ))}
          </div>
          <div className="reference-attributes observe"><span>atributos observados em conjunto</span><p>editorial · autoral · feminina · madura · presenteável · sofisticada · sensorial · consistente</p></div>
          <div className="reference-findings">
            {[["O produto é protagonista", "A fotografia valoriza acabamento, textura, ingredientes e apresentação. O desejo nasce do produto; a identidade complementa e organiza essa percepção."], ["A embalagem participa da experiência", "Em produtos especiais e presenteáveis, a embalagem identifica, organiza, valoriza e transforma a forma como o produto é recebido."], ["Sofisticação não depende de excesso", "Uma apresentação refinada pode surgir da tipografia, do espaço, das cores, dos materiais e da consistência, sem símbolos de luxo ou ornamentos excessivos."], ["A identidade permite criar coleções", "Produtos sazonais, presentes e campanhas podem ter características próprias sem perder a associação com a marca principal."]].map(([title, copy], index) => <article className="observe" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="reference-conclusion observe">Não estamos procurando uma identidade que apenas pareça sofisticada.<br /><b>Estamos procurando uma linguagem capaz de tornar os produtos mais desejáveis, a marca mais reconhecível e sua apresentação mais consistente.</b></div>
          <div className="color-head">
            <div><h3>Um território começa a aparecer</h3><p>O rosa já faz parte da memória visual da Josy. O briefing também demonstra interesse por combinações mais profundas, como vinho, marsala ou cherry, além de possíveis cores complementares e acabamentos especiais.</p><p>Neste momento, entendemos essas preferências como um território de exploração. Ainda não estamos definindo a paleta final.</p></div>
            <small>Exploração conceitual.<br />Estas cores não representam a paleta final.</small>
          </div>
          <div className={`color-territory selected-${color}`}>
            {colors.map(([name, copy, tone], index) => <button key={name} className={`${tone} ${color === index ? "active" : ""}`} onMouseEnter={() => setColor(index)} onClick={() => setColor(index)}><span>{name}</span><p>{copy}</p></button>)}
          </div>
        </section>

        <section className="section competition" data-section="6">
          <Eyebrow number="07">Contexto de mercado</Eyebrow>
          <div className="chapter-heading observe"><h2>O mercado e as escolhas do consumidor</h2><h3>A Josy não concorre apenas com quem vende bolos e doces.</h3></div>
          <div className="section-copy observe"><p>A Josy possui uma relação construída em Paranaíta e deseja fortalecer sua presença em Alta Floresta e em outras cidades da região.</p><p>Essa expansão amplia as possibilidades comerciais, mas também apresenta a marca a pessoas que ainda não conhecem seus produtos ou sua história. Para esses públicos, a apresentação exerce um papel importante na primeira impressão.</p></div>
          <div className="market-fields">
            {marketViews.map((item, index) => <button key={item.label} onClick={() => setMarket(index)} className={market === index ? "active" : ""}><span>0{index + 1}</span><h3>{item.label}</h3></button>)}
          </div>
          <div className="market-analysis observe" key={market}>
            <span>0{market + 1} / análise</span><h3>{marketViews[market].title}</h3>
            {marketViews[market].body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {marketViews[market].examples && <strong>{marketViews[market].examples}</strong>}
            {marketViews[market].note && <small>{marketViews[market].note}</small>}
          </div>
          <div className="market-block observe"><h3>Oportunidade de reconhecimento regional</h3><div><p>Alta Floresta faz parte dos planos de crescimento e possui uma população consideravelmente maior que Paranaíta. Essa diferença contextualiza a expansão, mas não equivale diretamente a demanda por produtos premium.</p><p>A leitura reforça a importância de uma apresentação forte para públicos que ainda não conhecem a marca.</p></div></div>
          <div className="place-numbers observe"><div><b>12.167</b><span>Paranaíta</span></div><div><b>63.017</b><span>Alta Floresta</span></div></div>
          <small className="data-note">Estimativas populacionais de referência. Inserir fonte e ano antes da apresentação final.</small>
          <div className="market-block observe"><h3>A escolha nem sempre começa com o cliente final</h3><div><p>Em casamentos e grandes celebrações, a seleção de fornecedores também pode envolver cerimonialistas, decoradores, assessorias e espaços de eventos.</p><p>Além de despertar desejo, a marca precisa transmitir segurança e ser fácil de apresentar e recomendar. Fotografias consistentes, portfólio organizado e materiais claros contribuem para essa percepção.</p></div></div>
          <div className="digital-presence observe"><div><h3>A reputação precisa estar conectada à identidade</h3><p>As avaliações mostram reconhecimento positivo no Google, mas encontramos uma diferença na apresentação do nome. Isso sugere uma oportunidade de padronização entre Instagram, WhatsApp, Google, cardápios, embalagens e materiais comerciais.</p></div><div className="name-comparison"><span><small>marca que estamos fortalecendo</small>Josy Assunção Confeitaria</span><i>→</i><span><small>apresentação observada no Google</small>Bolos da Josy | Doces, Bolos e Cestas de Café da Manhã</span></div></div>
          <div className="market-conclusion observe">O próximo passo não é apenas tornar a Josy visualmente diferente de outras confeitarias. É construir uma identidade que ajude a marca a ser reconhecida em diferentes ocasiões, canais e mercados.</div>
          <small className="method-note">Análise exploratória baseada no briefing, nos materiais fornecidos e em referências públicas consultadas. Não representa levantamento completo de participação de mercado ou comportamento de todos os consumidores.</small>
        </section>

        <section className="section opportunities" data-section="7">
          <Eyebrow number="08">Da análise à oportunidade</Eyebrow>
          <div className="chapter-heading observe"><h2>Onde vemos oportunidades</h2><h3>O que a identidade visual pode ajudar a transformar?</h3></div>
          <p className="section-copy observe">Depois de reunir o briefing, os materiais existentes, as avaliações e as observações do mercado, identificamos cinco oportunidades que merecem orientar o projeto.</p>
          <div className="opportunity-explorer observe">
            <div className="opportunity-list" role="tablist">
              {opportunities.map((item, index) => <button key={item.title} role="tab" aria-selected={opportunity === index} onClick={() => setOpportunity(index)} className={opportunity === index ? "active" : ""}><span>0{index + 1}</span>{item.title}</button>)}
            </div>
            <div className="opportunity-detail" key={opportunity}>
              <span>o que encontramos</span><p>{opportunities[opportunity].found}</p>
              <span>oportunidade</span><p>{opportunities[opportunity].opportunity}</p>
              <span>papel do design</span><strong>{opportunities[opportunity].role}</strong>
            </div>
          </div>
          <div className="opportunity-mobile observe">
            {opportunities.map((item, index) => <div key={item.title} className={opportunity === index ? "active" : ""}>
              <button aria-expanded={opportunity === index} onClick={() => setOpportunity(index)}><span>0{index + 1}</span>{item.title}<i>+</i></button>
              {opportunity === index && <div className="opportunity-mobile-detail"><span>o que encontramos</span><p>{item.found}</p><span>oportunidade</span><p>{item.opportunity}</p><span>papel do design</span><strong>{item.role}</strong></div>}
            </div>)}
          </div>
          <div className="opportunity-note observe">A identidade visual não resolve sozinha questões de produção, atendimento, precificação ou posicionamento no Google. Mas pode oferecer uma base importante para apresentar essas áreas com mais clareza e profissionalismo.</div>
          <div className="opportunity-close observe">A oportunidade não está em mudar tudo o que a Josy faz.<br /><b>Está em construir uma linguagem capaz de valorizar aquilo que já faz bem e acompanhar o que deseja fazer a seguir.</b></div>
        </section>

        <section className="section resolve" data-section="8">
          <Eyebrow number="09">o que a identidade precisa resolver</Eyebrow>
          <h2 className="observe">não basta parecer sofisticada.</h2>
          <div className="scales observe">
            {[["infantil", "madura", "68%"], ["frágil", "marcante", "57%"], ["distante", "próxima", "34%"], ["rústica", "autoral", "63%"]].map(([from, to, position]) => <div key={from}><span>{from}</span><i><b style={{ left: position }} /></i><strong>{to}</strong></div>)}
          </div>
          <div className="verbal-summary">{["feminina sem ser infantil", "delicada sem ser frágil", "sofisticada sem ser distante", "artesanal sem parecer rústica", "premium sem precisar dizer premium"].map((line) => <span key={line}>{line}</span>)}</div>
          <div className="compass observe"><strong>sofisticação com calor humano.</strong><small>uma bússola para o projeto, não um slogan.</small></div>
        </section>

        <section className="section direction" data-section="9">
          <Eyebrow number="10">nossa hipótese de direção</Eyebrow>
          <h2 className="observe">uma marca-mãe <em>autoral, madura e acolhedora.</em></h2>
          <div className="system-switch" role="tablist">
            <button role="tab" aria-selected={system === "base"} onClick={() => setSystem("base")} className={system === "base" ? "active" : ""}>base</button>
            <button role="tab" aria-selected={system === "expressão"} onClick={() => setSystem("expressão")} className={system === "expressão" ? "active" : ""}>expressão</button>
          </div>
          <div className={`system-stage ${system}`}>
            <div><span>{system}</span><p>{system === "base" ? "nome · logotipo · monograma · tipografia · estrutura · códigos de reconhecimento" : "fotografia · acabamentos · materiais · campanhas · coleções · embalagem"}</p></div>
            <Placeholder>container conceitual 01</Placeholder><Placeholder>container conceitual 02</Placeholder>
          </div>
          <div className="direction-final observe">uma fatia de bolo não precisa se comunicar como um casamento.<br /><b>mas as duas precisam parecer Josy Assunção Confeitaria.</b></div>
        </section>

        <section className="section next" data-section="10">
          <Eyebrow number="11">próximos passos</Eyebrow>
          <div className="validation observe">
            <span>primeiro</span><h2>essa leitura representa a Josy Assunção Confeitaria que você quer construir?</h2>
            {!validated ? <div><button className="primary" onClick={() => setValidated(true)}>sim, podemos seguir <Arrow /></button><a href="https://wa.me/5511986871810" target="_blank" rel="noreferrer">quero conversar sobre um ponto</a></div> : <div className="validated"><b>direcionamento validado ✓</b><i /></div>}
          </div>
          <div className="moodboard-next observe"><span>depois</span><h3>próximo passo: moodboard</h3><p>tipografia · cor · fotografia · composição · materiais · embalagem · atmosfera</p></div>
          <div className="services observe"><span>e por último</span><h3>a identidade é o começo de um sistema maior.</h3>{services.map(([title, copy]) => <details key={title}><summary>{title}<i>+</i></summary><p>{copy}</p></details>)}</div>
          <footer>
            <div><Mark /><p>estratégia · design · packaging · photography · dev</p></div>
            <div className="contacts"><a href="https://instagram.com/illuestudio" target="_blank" rel="noreferrer">@illuestudio ↗</a><a href="https://illuestudio.com.br" target="_blank" rel="noreferrer">illuestudio.com.br ↗</a><a href="mailto:comercial@illuestudio.com.br">comercial@illuestudio.com.br ↗</a></div>
            <small>© 2026 illu estúdio · são paulo, sp</small>
          </footer>
        </section>
      </main>

      <nav className="section-nav" aria-label="navegação entre capítulos">
        <button onClick={() => goTo(Math.max(0, active - 1))} aria-label="capítulo anterior">←</button>
        <button className="current-section" onClick={() => goTo(active)}><b>{String(active + 1).padStart(2, "0")}</b><span>{sections[active]}</span></button>
        <button onClick={() => goTo(Math.min(10, active + 1))} aria-label="próximo capítulo">→</button>
      </nav>
    </div>
  );
}
