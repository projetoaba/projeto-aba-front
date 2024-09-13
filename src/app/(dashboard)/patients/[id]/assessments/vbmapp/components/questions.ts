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
  CompromisedTracking = "compromised-tracking",
  ConditionalDiscriminations = "conditional-discriminations",
  FailureGeneralize = "failure-generalize",
  MotivatingOperations = "motivating-operations",
  CostResponse = "cost-response",
  ReinforcementDependent = "reinforcement-dependent",
  SelfStimulation = "self-stimulation",
  JointProblems = "joint-problems",
  ObsessiveCompulsiveBehavior = "obsessive-compulsive-behavior",
  HyperactiveBehavior = "hyperactive-behavior",
  MaintainContact = "maintain-contact",
  SensoryDefense = "sensory-defense",
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

  {
    name: VbmappQuestion.CompromisedTracking,
    category: {
      label:
        "Habilidades de Rastreamento comprometidas",
      id: "13",
    },
    options: [
      "Geralmente rastreia conjuntos se a tarefa exige rastreamento.",
      "Conjuntos numerosos e com estímulos similares causam algum problema de rastreamento mas a criança é bem sucedida depois de 2 tentativas.",
      "Rastreamento é fraco, geralmente o auxílio de dicas é necessário, restrito a conjuntos de 5 ou menos estímulos,  habilidade de rastrear cenas é limitada.",
      "A habilidade de rastrear estímulos é limitada a conjuntos de 2 ou 3 estímulos, respostas de seleção dependem da presença de dicas, as habilidades de emparelhamento com o modelo, discriminação de ouvinte e discriminação de ouvinte por classe, função e característica são fracas.",
      "Não rastreia conjuntos de estímulos, responde antes de rastrear os estímulos, em atividades que exigem rastreamento os estímulos evocam comportamentos negativos.",
    ],
  },

  {
    name: VbmappQuestion.ConditionalDiscriminations,
    category: {
      label:
        "Fracasso em fazer Discriminações Condicionais",
      id: "14",
    },
    options: [
      "Faz discriminações condicionais em um nível que está balanceado com os outros marcos.",
      "Apresenta dificuldades quando a discriminação condicional exige maior esforço ou atenção (e.g.,: conjuntos grandes, cenas, estímulos similares).",
      "Progresso limitado em tarefas que envolvem discriminações condicionais verbais (discriminação auditiva, discriminação por classe, função e característica e intraverbal), mas apresenta bom progresso em outras áreas.",
      "Fracassa na maior parte das tarefas que envolvem discriminações condicionais, exceto MTS, emite comportamento negativo nestas atividades, tem história de tentativas fracassadas.",
      "Não faz discriminações condicionais, mas pode fazer discriminações simples (e.g., mandos, ecóicos, tatos, imitações).",
    ],
  },

  {
    name: VbmappQuestion.FailureGeneralize,
    category: {
      label:
        "Fracasso para generalizar",
      id: "15",
    },
    options: [
      "Demonstra ambas as generalizações, de estímulos e de respostas, em um nível proporcional às outras habilidades.",
      "Demonstra alguma dificuldade com generalização de estímulos ou com a generalização de algumas habilidades.",
      "Precisa de treino formal de generalização na maior parte das habilidades mas eventualmente consegue.",
      "Precisa de treino intensivo de generalização para a maior parte das habilidades, frequentemente “habilidades generalizadas” são perdidas.",
      "Não generaliza, exceto tipos de generalização muito simples, respostas decoradas , progresso lento.",
    ],
  },

  {
    name: VbmappQuestion.MotivatingOperations,
    category: {
      label:
        "Operações Motivadoras fracas ou atípicas",
      id: "16",
    },
    options: [
      "Demonstra uma ampla variedade de OMs condizentes com a idade.",
      "Os adultos notam que os motivadores são levemente diferentes dos motivadores de outras crianças.",
      "OMs para padrões bizarros de comportamento, OMs fracas para reforçadores condizentes com a idade, OM social fraca.",
      "OMs anormais para reforçadores primários, o valor das OMs diminui rapidamente, estereotipias frequentes.",
      "OMs muito limitadas, OMs bizarras e de valor forte, muito poucas OMs apropriadas à idade.",
    ],
  },

  {
    name: VbmappQuestion.CostResponse,
    category: {
      label:
        "Operações Motivadoras fracas ou atípicas",
      id: "17",
    },
    options: [
      "Geralmente não perde o interesse pelos  reforçadores quando as demandas são razoáveis.",
      "Demonstra um pouco de perda de interesse se a demanda fica levemente mais alta.",
      "Tem OMs fortes mas tolera apenas um pequeno grupo de respostas antes de perder o interesse pelo item reforçador.",
      "Rapidamente apresenta perda de interesse após algumas respostas serem solicitadas.",
      "Se afasta de seus reforçadores mais potentes se a demanda mais leve é apresentada.",
    ],
  },

  {
    name: VbmappQuestion.ReinforcementDependent,
    category: {
      label:
        "Dependente de reforçamento",
      id: "18",
    },
    options: [
      "Não apresenta problema quando o reforço é entregue em esquema de reforçamento intermitente ou quando se faz uso de reforçadores sociais/verbais para ensinar.",
      "Demonstra alguma dificuldade com o uso de reforçadores sociais ou intermitentes mas eventualmente  realiza o trabalho solicitado.",
      "Tem OMs fortes mas tolera apenas um pequeno grupo de respostas antes de perder o interesse pelo item reforçadorPrecisa do uso  frequentes de itens reforçadores comestíveis e tangíveis quando em um esquema intermitente.",
      "Difícil trabalhar com a criança sem a presença de itens reforçadores comestíveis e tangíveis, exibe comportamento de fuga e esquiva.",
      "A aprendizagem só ocorre com o uso de reforçadores comestíveis e tangíveis entregues em esquema  CRF.",
    ],
  },

  {
    name: VbmappQuestion.SelfStimulation,
    category: {
      label:
        "Auto-estimulação",
      id: "19",
    },
    options: [
      "Não se engaja em auto-estimulação ou comportamentos repetitivos.",
      "Engaja-se em alguma auto-estimulação mas isso não compete com outras atividades.",
      "Engaja-se em uma taxa relativamente alta de auto-estimulação que frequentemente compete com outras atividades.",
      "Engaja-se em uma taxa alta de auto-estimulação que geralmente compete com atividades acadêmicas e sociais.",
      "Quase constantemente engaja-se  em alta taxa de auto-estimulação, outros reforçadores são fracos.",
    ],
  },

  {
    name: VbmappQuestion.JointProblems,
    category: {
      label:
        "Problemas de Articulação",
      id: "20",
    },
    options: [
      "A maior parte dos adultos pode entender o comportamento verbal existente da criança.",
      "Alguma dificuldade em pronunciar certas palavras mas geralmente a criança pode ser entendida e sua articulação verbal continua melhorando.",
      "Há dificuldade de ser entendida por estranhos apesar de apresentar a maior parte  das habilidades do Nível 2 da Avaliação de Marcos.",
      "Habilidades vocais muito limitadas e demonstra uma ampla variedade de erros de articulação.",
      "Não vocal ou tem uma linguagem completamente ininteligível apesar de pontos altos em outros marcos avaliados.",
    ],
  },

  {
    name: VbmappQuestion.ObsessiveCompulsiveBehavior,
    category: {
      label:
        "Comportamento Obsessivo-Compulsivo",
      id: "21",
    },
    options: [
      "Não demonstra nenhum comportamento obsessivo compulsivo que impeça o aprendizado.",
      "Presença de algumas obsessões menores mas elas são facilmente superadas e não interferem com o aprendizado.",
      "Várias obsessões, emite comportamento negativo moderado mas em geral coopera e participa das tarefas de aprendizado sem maiores comportamentos disruptivos.",
      "Várias obsessões, emite comportamento negativo e em geral não coopera sem completar  o comportamento obsessivo, aprendizado é descontinuado.",
      "Obsessões fortes são o foco maior de cada dia, podem consumir uma quantidade significativa de tempo, comportamentos negativos podem ser severos quando as obsessões são interrompidas, aprendizado regularmente descontinuado.",
    ],
  },

  {
    name: VbmappQuestion.ObsessiveCompulsiveBehavior,
    category: {
      label:
        "Comportamento Hiperativo",
      id: "22",
    },
    options: [
      "Não excessivamente hiper quando comparada aos pares com desenvolvimento típico e atende às tarefas sem dificuldade.",
      "Ocasionalmente emite comportamento hiperativo ou falha em atender uma demanda mas os comportamentos não são disruptivos em atividades diárias ou de aprendizagem.",
      "Movimenta-se frequentemente pelo espaço, criança inquieta, dificuldade de realizar tarefas, aprendizagem  é fragmentada.",
      "Geralmente é difícil controlar o comportamento hiperativo, criança pode não esperar em filas ou sentar-se calmamente ou ainda ficar em tarefas mais do que alguns minutos, necessita de ajuda frequente.",
      "Em constante movimento, inquieta, impulsiva, sobe ou pula nos móveis, pode falar excessivamente, dificuldade de permanecer envolvida em qualquer atividade acadêmica ou social, aprendizagem é seriamente afetada.",
    ],
  },

  {
    name: VbmappQuestion.MaintainContact,
    category: {
      label:
        "Fracasso em manter contato visual ou atender às pessoas",
      id: "23",
    },
    options: [
      "Faz contato visual apropriado com os outros e de forma condizente com a idade, atende aos outros.",
      "Os adultos começam a notar que o contato visual é diferente de outras crianças.",
      "Não estabelece frequentemente contato visual ou atenta aos rostos ou pessoas de modo similar às outras crianças.",
      "Não estabelece contato visual ao emitir mandos, dificuldade de manter qualquer contato visual, normalmente olha para o lado quando conversa com os outros, atenta mais para objetos do que para pessoas.",
      "Quase nunca estabelece contato visual, evita pessoas, mas pode ter habilidades verbais.",
    ],
  },

  {
    name: VbmappQuestion.SensoryDefense,
    category: {
      label:
        "Defesa Sensorial",
      id: "24",
    },
    options: [
      "Nenhum problema relacionado aos estímulos sensoriais.",
      "Os adultos começam a notar que a sensibilidade aos vários estímulos sensoriais é diferente de outras crianças.",
      "Certas estimulações sensoriais podem afetar a criança mas a defensividade é moderada e normalmente não interfere em atividades de aprendizagem.",
      "Frequentemente reage a estímulos sensoriais específicos com comportamentos de esquiva  do tipo mãos no ouvido, fechar os olhos e ficar agitada/inquieta.",
      "Consistentemente reage a estímulos sensoriais específicos com comportamentos negativos como birras e agressões e a presença de certos estímulos sensoriais compete com atividades educacionais.",
    ],
  },

];
