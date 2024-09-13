export type VBMappQuestions = {
  name: string;
  category: { label: string; id: string };
  options: Array<string>;
};

export enum VbmappQuestion {
  NegativeBehaviors = "negative-behaviors",
  InstructionalControl = "instructional-control",
  MandRepertoire = "mand-repertoire",
  TactRepertoire = "tact-repertoire",
  TactRepertoire2 = "tact-repertoire-2",
  EchoicRepertoire = "echoic-repertoire",
  VisualPerception = "visual-perception",
  HearingRepertoire = "hearing-repertoire",
  IntraverbaRepertoire = "intraverbal-repertoire",
  SkillSocial = "skill-social",
  TipDependency = "tip-dependency",
  GuessAnswers = "guess-answers",
}

export const vbmappQuestions: Array<VBMappQuestions> = [
  {
    name: VbmappQuestion.NegativeBehaviors,
    category: {
      label: "Comportamentos Negativos:",
      id: "1",
    },
    options: [
      "Não demonstra nenhum comportamento negativo significante.",
      "Engaja-se semanalmente em alguns comportamentos negativos menores, mas a recuperação é rápida.",
      "Emite diariamente uma variedade de comportamentos negativos menores (e.g., choro, recusa verbal, se jogar no chão).",
      "Emite diariamente comportamentos negativos mais severos (e.g., birras, jogar objetos, destruição de propriedade).",
      "Frequentemente a criança emite comportamento negativo severo que é perigoso a si própria ou outras pessoas (e.g., agressões, auto-lesivos).",
    ],
  },
  {
    name: VbmappQuestion.InstructionalControl,
    category: {
      label: "Controle instrucional (fuga/esquiva de demandas instrucionais):",
      id: "2",
    },
    options: [
      "Tipicamente cooperativa com instruções e demandas dos adultos.",
      "Algumas demandas evocam comportamentos de não obediência menores, mas a recuperação é rápida.",
      "Emite comportamento de não obediência algumas vezes ao dia, com presença de birras ou outros comportamentos menores.",
      "Emite comportamento de não obediência várias vezes ao dia, com birras longas e comportamentos mais severos.",
      "Comportamento de não obediência domina o dia da criança, comportamentos negativos podem ser severos e perigosos.",
    ],
  },
  {
    name: VbmappQuestion.MandRepertoire,
    category: {
      label: "Repertório de Mando ausente, fraco ou comprometido:",
      id: "3",
    },
    options: [
      "O repertório de mando está crescendo consistentemente e está proporcional aos outros marcos.",
      "Mandos ocorrem, ecóicos são fortes, mas a pontuação dos marcos para tatos e habilidades de ouvinte são maiores do que as de mando.",
      "Mandos são limitados a um grupo pequeno de reforçadores comestíveis, apesar da presença de habilidades fortes de tatos, ouvinte e ecóicos.",
      "Mandos são muito limitados, necessitam da presença de dicas para ocorrerem, são decorados, as respostas não correspondem às OMs, comportamentos negativos funcionam como mandos, ocorrência de mandos inapropriados.",
      "Nenhum mando eficiente, comportamentos negativos associados, mesmos problemas descritos no item 3 acima podem ocorrer.",
    ],
  },
  {
    name: VbmappQuestion.TactRepertoire,
    category: {
      label: "Repertório de Tato ausente, fraco ou comprometido:",
      id: "4",
    },
    options: [
      "O repertório de tato está crescendo consistentemente e está proporcional aos outros marcos.",
      "Tatos ocorrem, ecóicos são fortes, mas as habilidades de ouvinte notoriamente superam os tatos.",
      "Tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, tatos necessitam da presença de dicas para ocorrerem, são decorados ou a criança tenta adivinhá-los, manutenção necessária.",
      "Muitos tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, “empaca” para aprender nomes e verbos, os tatos são decorados, ocorrem com somente uma palavra a despeito de um repertório de ouvinte de múltiplas palavras, não são espontâneos, generalização falha.",
      "Habilidades de tato mínimas apesar da presença de habilidades de ouvinte e ecóicos fortes, tentativas repetidas de ensinar tatos sem sucesso.",
    ],
  },
  {
    name: VbmappQuestion.TactRepertoire2,
    category: {
      label: "Imitação motora ausente, fraca ou comprometida:",
      id: "5",
    },
    options: [
      "O repertório de imitação motora está crescendo consistentemente e está proporcional aos outros marcos.",
      "Ocorre imitação motora mas a pontuação é menor do que outras habilidades avaliadas.",
      "A imitação não se generaliza facilmente, é inapropriada ou existe uma dependência de dicas de imitação.",
      "A ocorrência da imitação está relacionada a presença de dicas físicas ou verbais, a motivação para imitar é fraca, mas apresenta habilidades em outras áreas.",
      "Não tem nenhuma habilidade de imitação ou se tem elas nunca ocorrem de forma funcional.",
    ],
  },
  {
    name: VbmappQuestion.EchoicRepertoire,
    category: {
      label: "Repertório de ecóico ausente, fraco ou comprometido:",
      id: "6",
    },
    options: [
      "O repertório de ecóico está crescendo consistentemente e está proporcional aos outros marcos.",
      "Ecóicos ocorrem, porém a imitação motora é marcadamente mais forte do que o ecóico.",
      "Dependente de dicas para emissão de ecóico, a transferência de controle do ecóico para novos operantes é difícil, falha em generalizar habilidades ecóicas.",
      "Demonstra ecolalia imediata ou tardia, precisa de treino intensivo para adquirir novos ecóicos.",
      "Não apresenta habilidades ecóicas, mas tem outras habilidades, usa sinais ou PECS, treino de ecóico pode evocar comportamentos negativos.",
    ],
  },
  {
    name: VbmappQuestion.VisualPerception,
    category: {
      label:
        "Habilidades de Percepção Visual e de Emparelhamento com o Modelo ausentes, fracas ou comprometidas:",
      id: "7",
    },
    options: [
      "As habilidades visuais e de emparelhamento estão crescendo consistentemente e estão proporcionais aos outros marcos.",
      "Ocorre emparelhamento mas a pontuação é menor do que em outras habilidades avaliadas, especialmente as que são relacionadas às habilidades de ouvinte.",
      "Ocorrem erros de emparelhamento devido a tendência de responder por posição, ordem, por adivinhação, por dificuldades de rastreamento ou ainda pela seleção do último item reforçado.",
      "Presença de comportamentos inadequados durante atividades de emparelhamento com o modelo, não generaliza, só responde em conjuntos com poucos estímulos, tem dificuldades com estímulossemelhantes.",
      "Não apresenta habilidades de emparelhamento com o modelo mas mostra outras habilidades, as tentativas de ensinar tarefas de MTS falham repetidamente e comportamentos de fuga e esquiva ocorrem nestas tarefas.",
    ],
  },
  {
    name: VbmappQuestion.HearingRepertoire,
    category: {
      label:
        "Repertórios de Ouvinte ausentes, fracos ou comprometidos:",
      id: "8",
    },
    options: [
      "Os repertórios de ouvinte estão crescendo consistentemente e estão proporcionais aos outros marcos.",
      "Ocorrem discriminações de ouvinte, porém a pontuação é menor do que em outras habilidades avaliadas, especialmente as de tato.",
      "Erros de discriminação de ouvinte ocorrem devido a tendência de responder pela posição, ordem, adivinhação da resposta correta, rastreamento pobre ou ainda pela seleção do último item reforçado.",
      "Comportamentos negativos ocorrem durante atividades de discriminação de ouvinte, não generaliza, só responde em conjuntos com poucos estímulos, dificuldade com estímulos verbais complexos.",
      "Não apresenta habilidades de discriminação de ouvinte mas tem outras habilidades, as tentativas de ensinar tarefas de discriminação de ouvinte falham repetidamente e comportamentos de fuga e esquiva ocorrem nestas atividades.",
    ],
  },
  {
    name: VbmappQuestion.IntraverbaRepertoire,
    category: {
    label:
      "Repertório Intraverbal ausente, fraco ou comprometido:",
    id: "9",
  },
  options: [
    "O repertório de intraverbal está crescendo consistentemente e está proporcional aos outros marcos.",
    "Os intraverbais ocorrem, porém, a pontuação é menor do que em outras habilidades avaliadas, especialmente as de tato, discriminação de ouvinte e discriminação de ouvinte por classe, função e característica.",
    "ntraverbais errados ocorrem, adivinhação da resposta, obrigatoriedade de dicas, intraverbais decorados, falta de espontaneidade e ecolalias.",
    "Progresso limitado no treino de intraverbal, erros frequentes, respostas decoradas, intraverbais esquecidos rapidamente, sem generalização, sem comportamento intraverbal com pares, porém, apresenta habilidades de mando, tato e de discriminação de ouvinte.",
    "Não apresenta comportamento intraverbal funcional ou apresenta respostas decoradas apesar de ter mandos, tatos e habilidades de discriminação de ouvinte.",
  ],
},
{
  name: VbmappQuestion.SkillSocial,
  category: {
    label:
      "Habilidades Sociais ausentes, fracas ou comprometidas:",
    id: "10",
  },
  options: [
    "As habilidades sociais são apropriadas à idade, estão crescendo consistentemente e estão proporcionais aos outros marcos.",
    "Os comportamentos sociais ocorrem, porém a pontuação é menor do que em outras habilidades avaliadas.",
    "Engaja-se em brincadeiras paralelas, mas não inicia interação social, raramente imita os pares ou emite mandos dirigidos a eles.",
    "Não troca turnos ou compartilha, não responde aos mandos dos pares ou coopera com eles, não se engaja em brincadeiras sociais ou imaginativas com os pares mas apresenta habilidades de linguagem.",
    "Na maior parte das vezes brinca sozinho, não faz interações verbais ou não verbais com os pares, pode mostrar outras habilidades com pontação elevada.",
  ],
},
{
  name: VbmappQuestion.TipDependency,
  category: {
    label:
      "Depedente de dica:",
    id: "11",
  },
  options: [
    "Aprende consistentemente novas habilidades e não mostra sinais de dependência de dica.",
    "Normalmente são necessárias muitas tentativas para esvanecer as dicas, mas o processo de transferência do controle é bem sucedido.",
    "Algumas habilidades se tornam dependentes da dica, tais como intraverbais, comportamentos sociais ou discriminações de ouvinte.",
    "Em geral é difícil eliminar as dicas, elas são frequentemente sutis e as habilidades verbais são limitadas.",
    " É muito difícil esvanecer as dicas, a maior parte das habilidades depende da presença de dicas ecóicas, imitativas ou verbais.",
  ],
},
{
  name: VbmappQuestion.GuessAnswers,
  category: {
    label:
      "Advinhação de respostas:",
    id: "12",
  },
  options: [
    "Não adivinha (chutar) as respostas em nenhum dos repertório.",
    "Comportamentos de advinhação ocorrem ocasionalmente quando novas palavras são adicionadas mas param após algumas tentativas.",
    "Adivinhações são um problema frequente, são necessárias muitas tentativas para cessar, porém novas palavras são aprendidas.",
    "As adivinhações continuam ressurgindo com palavras já aprendidas e ocorrem com mandos, tatos, discriminações de ouvinte e intraverbais (um ou todos), não ocorrem com ecóicos ou imitação, poucas palavras novas são aprendidas.",
    "Adivinhações ocorrem em quase todas as tentativas e os esforços para encerrá-las podem ter uma longa história de fracasso.",
  ],
},
  
];
