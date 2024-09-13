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
}

export const vbmappQuestions: Array<VBMappQuestions> = [
  {
    name: VbmappQuestion.NegativeBehaviors,
    category: { label: "Comportamentos Negativos", id: "1" },
    options: [
      "Não demonstra nenhum comportamento negativo significante",
      "Engaja-se semanalmente em alguns comportamentos negativos menores, mas a recuperação é rápida",
      "Emite diariamente uma variedade de comportamentos negativos menores (e.g., choro, recusa verbal, se jogar no chão)",
      "Emite diariamente comportamentos negativos mais severos (e.g., birras, jogar objetos, destruição de propriedade)",
      "Frequentemente a criança emite comportamento negativo severo que é perigoso a si própria ou outras pessoas (e.g., agressões, auto-lesivos)",
    ],
  },
  {
    name: VbmappQuestion.InstructionalControl,
    category: {
      label: "Controle instrucional (fuga/esquiva de demandas instrucionais)",
      id: "2",
    },
    options: [
      "Tipicamente cooperativa com instruções e demandas dos adultos",
      "Algumas demandas evocam comportamentos de não obediência menores, mas a recuperação é rápida",
      "Emite comportamento de não obediência algumas vezes ao dia, com presença de birras ou outros comportamentos menores",
      "Emite comportamento de não obediência várias vezes ao dia, com birras longas e comportamentos mais severos",
      "Comportamento de não obediência domina o dia da criança, comportamentos negativos podem ser severos e perigosos",
    ],
  },
  {
    name: VbmappQuestion.MandRepertoire,
    category: {
      label: "Repertório de Mando ausente, fraco ou comprometido",
      id: "3",
    },
    options: [
      "O repertório de mando está crescendo consistentemente e está proporcional aos outros marcos",
      "Mandos ocorrem, ecóicos são fortes, mas a pontuação dos marcos para tatos e habilidades de ouvinte são maiores do que as de mando",
      "Mandos são limitados a um grupo pequeno de reforçadores comestíveis, apesar da presença de habilidades fortes de tatos, ouvinte e ecóicos.",
      "Mandos são muito limitados, necessitam da presença de dicas para ocorrerem, são decorados, as respostas não correspondem às OMs, comportamentos negativos funcionam como mandos, ocorrência de mandos inapropriados.",
      "Nenhum mando eficiente, comportamentos negativos associados, mesmos problemas descritos no item 3 acima podem ocorrer.",
    ],
  },
  {
    name: VbmappQuestion.TactRepertoire,
    category: {
      label: "Repertório de Tato ausente, fraco ou comprometido",
      id: "4",
    },
    options: [
      "O repertório de tato está crescendo consistentemente e está proporcional aos outros marcos",
      "Tatos ocorrem, ecóicos são fortes, mas as habilidades de ouvinte notoriamente superam os tatos",
      "Tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, tatos necessitam da presença de dicas para ocorrerem, são decorados ou a criança tenta adivinhá-los, manutenção necessária",
      "Muitos tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, “empaca” para aprender nomes e verbos, os tatos são decorados, ocorrem com somente uma palavra a despeito de um repertório de ouvinte de múltiplas palavras, não são espontâneos, generalização falha",
      "Habilidades de tato mínimas apesar da presença de habilidades de ouvinte e ecóicos fortes, tentativas repetidas de ensinar tatos sem sucesso.",
    ],
  },
  {
    name: VbmappQuestion.TactRepertoire2,
    category: {
      label: "Imitação motora ausente, fraca ou comprometida",
      id: "5",
    },
    options: [
      "O repertório de imitação motora está crescendo consistentemente e está proporcional aos outros marcos",
      "Ocorre imitação motora mas a pontuação é menor do que outras habilidades avaliadas",
      "A imitação não se generaliza facilmente, é inapropriada ou existe uma dependência de dicas de imitação",
      "A ocorrência da imitação está relacionada a presença de dicas físicas ou verbais, a motivação para imitar é fraca, mas apresenta habilidades em outras áreas",
      "Não tem nenhuma habilidade de imitação ou se tem elas nunca ocorrem de forma funcional",
    ],
  },
  {
    name: VbmappQuestion.EchoicRepertoire,
    category: {
      label: "Repertório de ecóico ausente, fraco ou comprometido",
      id: "6",
    },
    options: [
      "O repertório de ecóico está crescendo consistentemente e está proporcional aos outros marcos",
      "Ecóicos ocorrem, porém a imitação motora é marcadamente mais forte do que o ecóico",
      "Dependente de dicas para emissão de ecóico, a transferência de controle do ecóico para novos operantes é difícil, falha em generalizar habilidades ecóicas",
      "Demonstra ecolalia imediata ou tardia, precisa de treino intensivo para adquirir novos ecóicos",
      "Não apresenta habilidades ecóicas, mas tem outras habilidades, usa sinais ou PECS, treino de ecóico pode evocar comportamentos negativos",
    ],
  },
  {
    name: VbmappQuestion.VisualPerception,
    category: {
      label:
        "Habilidades de Percepção Visual e de Emparelhamento com o Modelo ausentes, fracas ou comprometidas",
      id: "7",
    },
    options: [
      "As habilidades visuais e de emparelhamento estão crescendo consistentemente e estão proporcionais aos outros marcos",
      "Ocorre emparelhamento mas a pontuação é menor do que em outras habilidades avaliadas, especialmente as que são relacionadas às habilidades de ouvinte.",
      "Ocorrem erros de emparelhamento devido a tendência de responder por posição, ordem, por adivinhação, por dificuldades de rastreamento ou ainda pela seleção do último item reforçado",
      "Presença de comportamentos inadequados durante atividades de emparelhamento com o modelo, não generaliza, só responde em conjuntos com poucos estímulos, tem dificuldades com estímulossemelhantes",
      "Não apresenta habilidades de emparelhamento com o modelo mas mostra outras habilidades, as tentativas de ensinar tarefas de MTS falham repetidamente e comportamentos de fuga e esquiva ocorrem nestas tarefas.",
    ],
  },
];
