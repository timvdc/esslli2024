var evening_lecturers = [
  {
        
      "lecturer": "Sonja Smets (University of Amsterdam)",
        "title": "TBD",
        "group": "Evening",
        "description": "TBD",
        "id": "evening1",
        "date": "2024-07-30",
        "time": "19:00-20:30",
  },{
    
        "lecturer": "Dirk Geeraerts (KU Leuven)",
        "title": "TBD",
        "group": "Evening",
      "description": "TBD",
        "id": "evening2",
        "date": "2024-08-01",
        "time": "19:00-20:30",
  },{
      "lecturer": "David Adger (Queen Mary University, London)",
      "title": "TBD (Dick Oehrle Memorial Lecture)",
      "group": "Evening",
      "description": "TBD",
      "id": "evening3",
      "date": "2024-08-06",
      "time": "19:00-20:30",
  },{
      "lecturer": "Janet Pierrehumbert (Oxford University)",
      "title": "TBD",
      "group": "Evening",
      "description": "TBD",
      "id": "evening4",
      "date": "2024-08-08",
      "time": "19:00-20:30",
	/*
        "lecturer": "Malvina Nissim",
        "title": "Language Technology <preposition> Society",
        "group": "Evening",
        "description": "The recognition of society’s role in language technology has become essential and cannot be overlooked. Still, plenty of research in Natural Language Processing does not explicitly account for such interplay. This evening lecture will zoom in on precisely this aspect. “Precisely” is an ambitious term, since the very definition of the relationship between language technology and society is subject to multiple interpretations, both in the context of scientific research as well as in connection with the general public, who currently is very much exposed to, interested in, and involved with language-based artificial intelligence tools. Through recent work I’ve carried out with my group, and through personal reflections, I will unpack this exciting relationship from different angles.",
        "id": "evening2",
        "date": "2023-08-03",
        "time": "19:00-21:00",
        "room": "PA",
        "moderator": "Valerio Basile",
        "website": "https://malvinanissim.github.io/"
      },{
        "lecturer": "Beniamino Accattoli",
        "title": "The Cost of the lambda Calculus and the Semantics of Sharing",
        "group": "Evening",
        "description": "The lambda calculus is an expressive mathematical formalism that elegantly captures the core of functional programming languages, while providing at the same time compact representations of intuitionistic logic proofs.\nThe first part of the talk shall survey the recent advances in the study of reasonable cost models for the lambda calculus, that is, of time and space cost measures that are equivalent to those of Turing machines. In particular, it shall overview how understanding the role of sharing in the evaluation process is crucial for both time and space, but for opposite reasons.\nThe second part of the talk shall show that extending the lambda calculus with first-class sharing is not a minor extension, as crucial semantic properties and results break, and new tools and richer theories need to be developed.",
        "id": "evening3",
        "date": "2023-08-08",
        "time": "19:00-20:30",
        "room": "PA",
        "moderator": "Valentin Goranko",
        "website": "https://sites.google.com/site/beniaminoaccattoli/"
      },{
        "lecturer": "Darja Fišer",
        "title": "The Good, the Bad and the Ugly of Language Technology Infrastructure",
        "group": "Evening",
        "description": "Advances in digitization and datafication have been transformative for linguistics and other disciplines that work with language materials. This has increased the need for research infrastructures that supports the development, documentation, archiving, dissemination, reuse and citation of language resources and tools which is prerequisite for verifiable, reproducible and ethical research. Still, the potential of research infrastructures in language technology remains undervalued and underutilised in the real world of language-based research and education. Based on the work conducted within my research group as well as through personal observations, I will address the good, the bad and the ugly aspects of adopting the research infrastructure principles that is built around the Open Science and FAIR data paradigm.",
        "id": "evening4",
        "date": "2023-08-10",
        "time": "19:00-21:00",
        "room": "PA",
        "moderator": "John McCrae",
        "website": "https://www.inz.si/en/Scientific-research-department/Darja-Fiser_en/"
    */
      }
];

var week1 = [
  {
    "time": "9.00am - 10.30am",
    "groups": [
      [
        {
          "lecturer": "Howard Gregory",
          "title": "Language and Logics",
          "group": "Foundational",
            "description": "This course introduces the use of formal logic in natural language semantics. It has no prerequisites, but an introductory linguistics course is desirable. The coverage will be limited to classical first order logic (FOL). This is far from the only logic used in linguistics, but it is presupposed by most advanced work. FOL is presented in a way which highlights the assumptions and choices made and the plurality of logics (as promised by the title), providing pointers to further directions of study.",
            "id": "12"
        },
        {
          "lecturer": "Matthew Mandelkern and Melissa Fusco",
          "title": "Conditionals, probability, and decision",
          "group": "Advanced",
          "description": "This advanced course in Language and Logic will explore interactions between the theory of the conditional and the theory of rational decision. Stalnaker (1971) and many following have argued that there is a close connection between conditionals and rational decision: at a first pass, you should do the act that, in expectation, WOULD bring about the best consequences IF you were to do it. This intuitive picture both constrains, and is constrained by, the theory of the conditional (in particular, its logic and semantics, and corresponding probabilities). The course will explore the interacting perspectives of decision theory (Fusco’s specialty) and conditional semantics (Mandelkern’s specialty).",
          "id": "19"
        }
      ],
      [
        {
          "lecturer": "John McCrae",
          "title": "Introduction to Linguistic Data Science ",
          "group": "Foundational",
          "description": "Big data is fundamentally changing the way that linguists can investigate linguistic facts leading to a new research area which combines data science with linguistics. This course provides an introduction to the new area of linguistic data science by means of an introductory course with hands-on data analysis that is focused on key questions in linguistics. This course will first provide a basic introduction to data science and in particular how this can be applied to large corpora using natural language processing techniques. We will then show how this can be used to find answers to problems in syntax, semantics, multilinguality and other areas of linguistics, along with a summary giving perspectives on how these methods can be applied to students’ own research.",
          "id": "4",
        },
        {
          "lecturer": "Damir Cavar and Billy Dickson",
          "title": "Generative AI and Symbolic Knowledge Representations: Large Language Models, Knowledge, and Reasoning",
          "group": "Introductory",
          "description": "This course is intended to be an Introductory Course addressing Large Language Models, or in general Large Models (multi-modal) and Knowledge Representations for reasoning and semantic processing. We discuss: - What are knowledge representations? This is about Ontologies, Knowledge Graphs, and semantic web approaches to handle for example Description Logic representations and reasoning. - What are Large Language Models and, ultimately, Large Models? This is mainly addressing so-called Generative AI, approaches to building and training models, and their application and limits, when the input is unstructured text or visual information only. - How can LMs and computational semantics approaches be combined? This addresses general problems of LMs (e.g., hallucinations), and we discuss how symbolic (and also probabilistic) knowledge representations can be linked to LMs generating more reliable responses, summaries, even pragmatic aspects like implicatures and presuppositions. We also discuss how LMs can be trained on knowledge and semantic representations to improve their reasoning capabilities. This course can be accompanied by extensive material, code, and instructions shared with students and the community, including hands-on access to the respective technologies. Depending on the audience, interest, and goals, we can adjust the level and content and design the course to include a discussion of state-of-the-art approaches to the generation of Ontologies, taxonomies, and Knowledge Graph representations. This course might sound technologically challenging, but we can assure you that it is actually within the scope of advanced undergraduate students, certainly appropriate for interested graduate students coming with basic computation experience, knowledge of statistics, and interest in logic, semantics, and knowledge representations.",
          "id": "25",
        }
      ],
      [
        {
          "lecturer": "Dan Frumin and Jorge A. Pérez",
          "title": "Propositions as Sessions: Logical Foundations of Concurrent Computation",
          "group": "Foundational",
          "description": "The Curry-Howard(-deBruijn) correspondence, also known under the slogan of \“Propositions as Types\”, is arguably the most important bridge between logic and computation. The connection between intuitionistic logic and lambda-calculus is the most familiar instance of this bridge. The correspondence can be seen as a fruitful principle for logically-informed foundations of programming languages. This introductory course will explore recent work on the Curry-Howard correspondence between substructural logics and concurrent processes, dubbed as \“Propositions as Sessions\”. Following a gradual approach, participants will learn how Girard’s linear logic and its extensions serve as a basis for structuring message-passing concurrent programs through the discipline of session types. No specific prerequisites are assumed for this course, except for familiarity with formal logic; participants will get familiar with the selected topics in Substructural Logics, Concurrency Theory, and Programming Languages. The course will close with an overview of prospective research challenges.",
          "id": "50"
        },
        {
          "lecturer": "Balder ten Cate and Frank Wolter",
          "title": "A Modern Introduction to Craig Interpolation",
          "group": "Introductory",
          "description": "Craig interpolants are, intuitively, logical formulas that ``explain'' why an entailment between formulas P and Q holds by reference to the shared vocabulary of P and Q. They nowadays play a fundamental role not only in mathematical and philosophical logic, but also in applied areas ranging from automated deduction to program verification, databases and knowledge representation. They are used, for instance, as explainers of why sets of program states are disjoint and as synthesisers of concepts, programs and queries. The purpose of this course is to introduce the logical foundations and applications of Craig interpolation. We cover formalisms ranging from propositional and first-order logic to description and temporal logic. We illustrate modern applications, focusing on databases and knowledge representation. Finally, we also discuss recent research on what to do if a logic does not enjoy the Craig interpolation property, i.e., when there are entailments without Craig interpolants. We give an an introduction to Craig Interpolation and its modern applications in computer science, including databases, knowledge representation, complexity theory, and program verification.",
          "id": "43"
        }
      ],
      []
    ]
  },
  {
    "time": "10.30am - 11.00am",
    "groups": [],
    "title": "coffee break"
  },
  {
    "time": "11.00am - 12.30pm",
    "groups": [
      [
        {
          "lecturer": "Dan Zeman",
          "title": "	The Semantics and Pragmatics of Slurs",
          "group": "Introductory",
          "description": "Whether we like it or not, “bad words” are ubiquitous in natural language. While using such words has sometimes no significant effects, in many cases their use can produce real harm, by denigrating, silencing, and marginalizing the people they target. Slurs are one such type of “bad words”. Most researchers agree that the main function of slurs is that of derogating or dehumanizing, of signalling that their targets are unworthy of equal standing or full respect as persons. Figuring out how slurs achieve their main function is an important topic in contemporary philosophy of language and linguistics. In this introductory course, my aim is to present the main characteristics of slurs and their uses (not limited to derogation), explore the main views on their semantics and pragmatics, and show how they are connected to larger social phenomena like power structures and communal identities.",
          "id": "62"
        },
        {
          "lecturer": "Cameron Domenico Kirk-Giannini and Henry Schiller",
          "title": "Speech Acts: Dynamic Force and Conversational Update",
          "group": "Introductory",
          "description": "Stalnaker’s theory of the dynamic effect of assertion treats assertoric updates as intersective functions from one context to another. For Stalnaker, this is the characteristic way in which assertion changes the state of a conversation: its dynamic force. This course will introduce students to work in formal pragmatics on the dynamic force of various speech acts. We’ll begin with an introduction to speech act theory and discourse context, and then introduce Stalnaker’s theory of assertion as well as some challenges to that theory. The next part of the course will consider formal theories of directives and questions. In this section, our aim will be to assess whether we can account for the dynamic effects of these speech acts while remaining within the Stalnakerian model — and if not, how else we might account for those effects. Finally, we’ll turn our attention to topics that push the boundaries of traditional theories of formal pragmatics, such as felicitous underspecification and peripheral content.",
          "id": "15"
        }
      ],
      [
        {
          "lecturer": "Mark Steedman",
          "title": "Categorial Foundations of Natural Language Structures",
          "group": "Introductory",
          "description": "The course analyses the problem of natural language structure, as characterized by language diversity, requirements of language acquisition by children, extreme ambiguity, and discontinuity (where elements that seem to belong together semantically are separated in the sentence), in terms of an extension of classical Categorial Grammar. The problem will be analyzed in its own right and from the ground up, without any specifically linguistic theoretical assumptions. However, along the way, links to various existing linguistic and computational theories of language will be established, as needed by the students.",
          "id": "55"
        },
        {
          "lecturer": "Andreas Liesenfeld and Mark Dingemanse",
          "title": "Introduction to Conversational AI",
          "group": "Foundational",
          "description": "Conversations come naturally to us. While we humans learn language through conversation, interactive language use is arguably the holy grail of speech and language processing. With large language modelling (LLM) approaches, progress was made towards building more interactive agents. Yet, modelling human-like conversational AI remains a moonshot. This foundational course delves into why modelling conversational competence is so challenging. It also takes stock of recent engineering breakthroughs in building conversational AI systems using instruction-tuned LLM models such as ChatGPT, Llama or Mistral. Students will learn the basics of interactive language modelling and explore the scientific and theoretical foundations of understanding structure and variation in conversational speech data in hands-on tutorials. We will work through recent empirical and computational work on speech corpora, speech recognition, and technology assessment. Aspects of conversational infrastructure covered include turn-taking, interactive repair, and action ascription. We conclude by touching upon societal and ethical issues that emerge alongside the rise of conversational AI. This course might appeal to anyone interested in recent approaches to conversational AI and understanding why talking machines still struggle to hold up their end of a conversation. Some experience working with Python and Jupyter notebook required.",
          "id": "9",
        }
      ],
      [
        {
          "lecturer": "Mikhail Rybakov and Dmitry Shkatov",
          "title": "Computational aspects of first-order modal logics",
          "group": "Advanced",
          "description": "The course will introduce students to computational aspects of first-order modal logics. The course will contain a brief, self-contained introduction to first-order modal logics and then will cover the most important techniques for proving decidability, undecidability, and lack of recursive enumerability for first-order modal logics and their fragments. The course is intended for a broad audience of graduate students interested in modal reasoning and its computational aspects. This includes students of logic, philosophy, computer science, linguistics, and mathematics. The course will assume a basic familiarity with the classical first-order logic and with Kripke semantics for propositional modal logics.",
          "id": "53",
        },
        {
          "lecturer": "Valentin Goranko",
          "title": "Games Logicians Play",
          "group": "Advanced",
          "description": "This course will introduce, discuss and illustrate with examples the most important games in logic, including: dialogue argumentation games, evaluation games, model building games, and model comparison games. These games can be used for model checking, constructive satisfiability testing, to characterize logical equivalences of models, and to prove non-definability results. Optionally, I will also introduce and discuss game-theoretic semantics with incomplete information for logical languages.",
          "website": "https://www2.philosophy.su.se/goranko/Courses2024/ESSLLI2024_GamesLogiciansPlay.html",
          "id": "20"
        }
      ],
      [
        {
          "lecturer": "Yael Greenberg and Carla Umbach",
          "title": "Incremental constructions within and across languages: Where degrees, eventualities and discourse dynamics interact",
          "group": "Workshop",
          "website": "http://www.carla-umbach.de/ESSLLI2024/",
          "description": "Incrementality ('adding up to a larger whole', König 1991) can be expressed by English 'more' (1), German 'noch/mehr', Hebrew 'od', Mandarin 'hai' etc. (1) Some/3 kids sang at the party. Then some/3 more kids danced. While studies of individual incremental constructions (INCRs) exist, there are still many gaps in their understanding. This workshop aims to fill such gaps (A) by studying how INCRs syntactically and semantically vary, both across and within languages, and (B) by trying to integrate insights from two approaches to incrementality, which thus far have not interacted: Degree-based approaches (e.g. Greenberg 2010, Thomas 2011), taking INCRs to express additive measurements of eventualities, and discourse-based approaches (e.g. Eckardt 2007, Umbach 2012, Grubic 2018) taking INCRs to be focus/QUD-sensitive, managing the growth of information along discourse-salient dimensions (e.g. event/discourse time). The topic of this workshop is closely related to that of the Week 1 course on 'Scalarity and Additivity in Natural Language'. Course participants are welcome.",
          "id": "2",
        }
      ]
    ]
  },
  {
    "time": "12.30pm - 2.00pm",
    "groups": [],
    "title": "lunch"
  },
  {
    "time": "2.00pm - 3.30pm",
    "groups": [
      [
        {
          "lecturer": "Jun Chen and Swantje Toennis",
          "title": "Theoretical and empirical approaches to cleft constructions",
          "group": "Introductory",
          "description": "This course aims to cross-linguistically investigate cleft constructions from theory-driven and empirical perspectives. An English cleft construction is a sentence of the form It is ... who ..., as exemplified in (1). (1) It was Sally who danced. We will first introduce hypotheses for capturing the meanings of clefts, their use conditions and their functions in discourse. In addition, we will discuss formal analyses that attempt to derive the cleft’s exhaustive inference (e.g., nobody other than Sally danced in (1)), and analyses demonstrating interactions between clefts and Questions Under Discussion (Roberts, 2012). Up-to-date psycholinguistic studies and corpus research which cross-linguistically test these theoretical claims (e.g., in Chinese, German, etc.) will also be introduced alongside. We will examine various experimental designs, and investigate empirical results, which seem to clash with theoretical predictions. The goal of this course is not only to convey state-of-the-art knowledge on cleft constructions to the students, but also to inspire and explore new theoretical and empirical ideas together with the students.",
          "id": "22"
        },
        {
          "lecturer": "Nazarre Merchant and Alan Prince",
          "title": "Analyzing OT Typologies: Order, Equivalence and the Mother of all Tableaux",
          "group": "Advanced",
          "description": "An OT (Optimality Theory) typology is comprised of a set of grammars which themselves are sets of total orders. Every typology has an associated geometry which provides an inherent classification of the grammars that constitute it. In this course we will develop these notions, showing how constraints, which at the lowest level are numerical comparisons between linguistic candidates, can be abstractly viewed as providing comparisons between entire grammars. From this perspective, constraints provide both order and equivalence structures on the grammars, an “Equivalence-augmented Partial Order” (EPO), which determine all licit typological classifications of a given theory. The set of all such EPOs for a typology is termed the Mother of all Tableaux (MOAT). We will develop these notions in both the concrete and abstract, using basic syllable theory as an entrée into the abstract categories of OT typologies.",
          "id": "46"
        }
      ],
      [
        {
          "lecturer": "Haim Dubossarsky and Pierluigi Cassotti",
          "title": "Computational Models for Semantic Change and their Applications in Multidisciplinary Research",
          "group": "Introductory",
          "description": "This course introduces students to lexical semantic change research. It will provide an overview of NLP models for word meaning representations from past to state-of-the-art. It will survey existing resources of diachronic data in the form of historical corpora, reliable datasets, and evaluation. It will cover the application of semantic change methods for varied fields like historical linguistics, sociology, or cultural studies. Focusing on tools for detecting and interpreting semantic change, the course emphasizes their relevance to any research disciplines that uses text as its main medium of study. By analyzing diachronic corpora with state-of-the-art methods, students gain insights into societal attitudes towards various topics over time, from technology acceptance to racial bias in legal texts. The course blends theoretical foundations with hands-on practice, enabling participants to navigate computational tools in NLP effectively. Delving into challenges and adjustments for cross-disciplinary deployment, the course train students to select appropriate methods for their research scenarios. Ultimately, participants will emerge with a nuanced understanding of semantic change and the practical skills to apply computational tools judiciously in diverse research contexts.",
          "id": "23",
          //"website": "https://sites.google.com/view/esslli2023course",
          //"course-material": [
          //  {"title": "Course website", "link": "https://sites.google.com/view/esslli2023course"}
          //]
        },
      ],
      [
        {
          "lecturer": "Philippe Balbiani and Cigdem Gencer",
          "title": "Intuitionistic Modal Logic",
          "group": "Foundational",
          "description": "Among those mixing together Boolean concepts and modal concepts, the search for minimality has prompted multifarious debates. Most of these debates have now faded. In fact, they have not survived the end of the syntactic era of modal logic. Before the advent, in the 1960s, of the concept of Kripke frames, it was unclear which modal logic is the most appropriate candidate for the title of ``minimal modal logic''. Today, although the modal logic K does not contain any of the formulas expressing the properties usually associated to the modal concepts of necessity and possibility, everyone accepts the fact that K is the minimal modal logic. Among those combining together intuitionistic concepts and modal concepts, the quest for minimality has caused numerous discussions. Some of these discussions are still alive. Indeed, two approaches are in direct opposition: the intuitionistic approach set out by Fischer Servi (1977, 1978, 1984) giving rise to the intuitionistic modal logic IK and the constructive approach expounded by Wijesekera (1990) giving rise to the intuitionistic modal logics WK and CK. And there is no consensus of what should be the ``minimal intuitionistic modal logic''. The reason for being of the intuitionistic approach set out by Fischer Servi is mainly the fact that a minimal intuitionistic modal logic should contain the formulas whose standard translation in a first-order language are intuitionistically valid. Therefore, the supporters of this approach consider intuitionistic modal logic IK that contains the formulas ◊(pVq)->◊pV◊q and ¬<>false despite their non-constructive character. The justification of the constructive approach expounded by Wijesekera chiefly rests on the fact that the formulas of a minimal intuitionistic modal logic should have a constructive character. As a result, the upholders of this approach consider intuitionistic modal logic WK that does not contain the formula ◊(pVq)->◊pV◊q. The most radical of them also consider intuitionistic modal logic CK that does not contain either the formula ¬<>false. There is no sense in comparing the arguments for and against the intuitionistic approach giving rise to the intuitionistic modal logic IK and the constructive approach giving rise to the intuitionistic modal logics WK and CK. To convince the reader of this opinion, it suffices to mention how these approaches differently define the truth condition of diamond-formulas in their relational semantics, although they consider the same truth condition of box-formulas. This difference in the definition of the truth condition of diamond-formulas shows that the connective ◊ à la Fischer Servi and the connective ◊ à la Wijesekera are as separate as are, for example, the connectives of disjunction and conjunction in any intermediate logic. In this course, we firstly offer a self-contained overview of intermediate logics and modal logics. Secondly, we survey the different intuitionistic and constructive approaches to modal logic that have been proposed in the literature. We thirdly present the most important motivations for the introduction of such approaches: Curry-Howard correspondence between proofs and programs, Brouwer-Heyting-Kolmogorov interpretation of logic, type systems for staged computation, formalization of distributed computation, hardware verification, etc. Fourthly, we develop the proof theory, the relational semantics and the algebraic semantics of the different intuitionistic and constructive approaches to modal logic. We fifthly introduce an appropriate candidate for the title of minimal intuitionistic modal logic, an intuitionistic modal logic strictly contained in IK and comparable neither with WK, nor with CK. For some of its extensions, we study the axiomatization/completeness and the decidability/complexity of the set of their valid formulas. This course will mainly address logical and computational aspects of the combination of intuitionistic concepts and modal concepts.",
          "id": "11",
        },
        {
          "lecturer": "Xinghan Liu and Emiliano Lorini",
          "title": "Logics for Explaining AI Systems",
          "group": "Introductory",
          "description": "The notion of explanation plays a pivotal role in artificial intelligence and machine learning, in which there is an increasing demand of explaining the behavior of systems trained on data, especially deep learning systems. Different notions of of explanation have been proposed and studied in the area of eXplainable AI (XAI), varying according to different dimensions such as global versus local and model-agnostic versus model-specific. In this course we will introduce several modal logics for explaining the behaviors and predictions of AI systems, including classifier systems and causal models, of which artificial neural networks are special instances. These logics support reasoning about different types of explanations including abductive, contrastive, counterfactual and causal explanation. We will discuss the proof-theoretic, decidability and complexity aspects of these logics and illustrate their expressiveness with examples.",
          "id": "39",
        }
      ],
      [
        {
          "lecturer": "Justine Cassell and David Traum",
          "title": "Conversational Grounding in the Age of Large Language Models",
          "group": "Workshop",
          "website": "placeholder",
          "description": "Conversational Grounding is the process whereby participants in a conversation establish new common ground; that is, shared information that can subsequently be referred to. The conversational grounding process includes not just transmission of information via declarative utterances, but also visual, inferential, and interactive feedback processes. While there has been a substantial work on conversational grounding, many open problems remain, particularly when applied to different situations and activities, involving different numbers and types of participants, different perceptual and action affordances, and different goals. Moreover, new resources involving large language models change the nature of grounding processes and create new challenges even when they may improve the ability to solve some issues. The moment is therefore to bring together researchers working on aspects of Conversational Grounding for a workshop to increase common ground on the topic, and disseminate new best practices for computing, modeling and implementing conversational grounding in dialogue systems.",
          "id": "66",
        }
      ]
    ]
  },
  {
    "time": "3.30pm - 3.50pm",
    "groups": [],
    "title": "coffee break"
  },
  {
    "time": "3.50pm - 4.50pm",
    "groups": [],
    "title": "Student Session (StuS)<br/>",
    "link": "courses-workshops-accepted/student-session-call.html"
  },
  {
    "time": "5.00pm - 6.30pm",
    "groups": [
      [
        {
          "lecturer": "Linmin Zhang",
          "title": "Scalarity and additivity in natural language",
          "group": "Advanced",
          "description": "This course addresses the connection between scalarity and additivity in natural language. Scalarity has mainly been investigated within degree semantics, which aims to study how natural language expresses measurement and comparison along an abstract dimension, i.e., a scale composed of a totally ordered set of scalar values (degrees or intervals). Additivity is mainly about expressions that bring an existential presupposition in a domain of entities: e.g., additive particles like \"another\" presuppose the existence of a similar item. Recent research suggests a connection between scalarity and additivity (e.g., Greenberg 2010, Thomas 2010, Zhang and Ling 2021): comparison means additivity along a scale. This course addresses the conceptual, empirical, and technical aspects of this connection across domains. The course will start with an additivity-based perspective on comparatives, introducing the conceptual benefits and technical details of connecting research on scalarity and additivity. Then we will discuss various research questions within this perspective.",
          "id": "17"
        },
      ],
      [
        {
          "lecturer": "Jonathan Rawski and David Chiang",
          "title": "Expressivity of Transformers: Logic, Circuits, and Formal Languages",
          "group": "Introductory",
          "description": "A major advancement in language modeling is the use of the transformer architecture. But, what problems can transformers solve, what problems can they not solve, and how can we prove it? This course examines the expressivity of transformers through the lens of computability and complexity theory. We will situate transformers within the landscape of automata, boolean circuits, and formal logics. We will discuss what is currently known about transformers' capabilities and limitations, address the practical implications of these results for natural language processing, and identify some directions for future work. Participants will gain a comprehensive understanding of transformers' expressive power in terms of the problems they fundamentally can and cannot solve.",
          "id": "37",
        },
      ],
      [
        {
          "lecturer": "Alexandru Baltag and Sonja Smets",
          "title": "Dynamic Logics for Communication and Data Exchange",
          "group": "Foundational",
          "description": "This course is addressed to students interested in the logical analysis of complex multi-agent scenarios involving data-exchange and communication. We look at various forms of information flow that can affect both the individual knowledge and the group knowledge of interacting agents. These scenarios include acts by which individuals or groups can publicly or privately access whole databases and `grab’ (read, copy, transmit or modify) all the information stored in them (including numerical, or other non-propositional, data). We present a family of dynamic logics, based on extensions of Dynamic Epistemic Logic that can handle exchanges in which the relevant data are not necessarily in propositional form. We study the expressive power of data-exchange logics, provide complete axiomatizations, show their decidability, and apply them to a range of examples, including sharing an internet resource, learning another agent’s password, hacking a private database, detecting a cryptographic attack, etc.",
          "id": "61",
        },
        {
          "lecturer": "Yanjing Wang",
          "title": "Introduction to Bundled Modalities",
          "group": "Advanced",
          "description": "Bundled modalities pack a quantifier and a modality together. In this course, I will introduce the idea, techniques, and applications of bundled modalities in epistemic logic, deontic logic, non-classical logic, and decidable fragments of first-order modal logic.",
          "id": "35"
        }
      ],
      [
      ]
    ]
  }
];

var week2 = [
  {
    "time": "9.00am - 10.30am",
    "groups": [
      [
        {
          "lecturer": "Kajsa Djärv and Deniz Özyıldız",
          "title": "Intonation and meaning",
          "group": "Foundational",
            "description": "Natural language syntax and semantics interacts with prosodic structure. The sentence “All politicians aren’t corrupt,” for example, is scopally ambiguous between “all > not” and “not > all” interpretations, which intonation may disambiguate. Acquaintance with such facts is of general interest, presenting an exciting opportunity to raise architectural questions about natural language and to expose course participants to a diverse set of formal methods (e.g., constraint-based grammars, model theoretic semantics). We begin the course with elements of intonational phonology: The realization of suprasegmental features—i.e., pitch, loudness and duration—is structured and governed by abstract mental categories. We then turn to modeling how these prosodic structures interface with syntactic structure, as well as semantic and pragmatic interpretation. The empirical basis for these models involve both classical observations on the role of intonation in regulating discourse coherence, and ongoing debates on the effect of intonation on presupposition triggering and projection.",
          "id": "63",
        },
        {
          "lecturer": "Sonia Ramotowska and Fabian Schlotterbeck",
          "title": "When \"not difficult\" does not mean \"easy\" — what processing models of negation tell us about language comprehension",
          "group": "Advanced",
          "description": "Negation is fundamental to formal languages, ubiquitous in natural languages and central in everyday communication. For millennia, philosophers, logicians, and linguists investigated negation. More recently, the processing of negation became a cornerstone of psycholinguistics and cognitive science. Experiments firmly established that negative sentences are more difficult to process than affirmative ones. However, the source of this difficulty is still debated. Since the 1970s, competing explanations have been proposed and coined into processing models of negation. During this course, we will dissect and compare prominent processing models of negation that explain processing difficulties by implementing answers to fundamental questions about pragmatic language use, amodal representations, cognitive biases, conflict between cognitive representations, as well as the nature of verification and comprehension processes. Example questions we will address include: (1)Are there circumstances that completely alleviate the processing difficulty of negation? (2)Is this processing difficulty language-specific or due to domain-general mechanisms of conflict resolution?",
          "id": "24",
        }
      ],
      [
        {
          "lecturer": "Kengatharaiyer Sarveswaran and Tafseer Ahmed",
          "title": "The Challenges of Processing South Asian Languages",
          "group": "Foundational",
          "description": "This course provides a comprehensive exploration of the intricacies of South Asian languages, with a focus on the Indo-Aryan and Dravidian language families. The course outline is crafted to immerse learners in the distinctive linguistic characteristics of South Asian languages, primarily the languages of Indo-Aryan and Dravidian families, encompassing areas such as script, encoding, transliteration, normalization, rich morphology, and syntax. A significant portion of the course is dedicated to examining how these aspects are applied within the scope of natural language processing (NLP). Designed to equip learners with a thorough understanding, the course aims to highlight both the challenges and the possible solutions pertinent to language processing. Therefore, the course not only offers an introduction to languages in South Asia, home to one-fourth of the global population and with a diaspora of approximately 40 million individuals but also introduces concepts that are generally applicable to multilingual NLP and low-resource languages.",
          "id": "69"
        },
        {
          "lecturer": "Manon Scholivet and Carlos Ramisch",
          "title": "Experimental methodology in computational linguistics",
          "group": "Introductory",
          "description": "Recent years saw experiments and empirical evaluation become a central component of computational linguistics. However, methodological principles and experimental design are often neglected, leading to shaky conclusions, stressful paper writing, and unfavourable reviews. Our course focuses on experimental methodology in NLP: key notions, recommended practices and avoidable traps. As methodology is often considered boring or unimportant, we start from examples, and realistic situations before introducing abstract notions. Practical exercises allow making the subject more fun, grounding abstract notions on concrete examples, and training skills such as structuring research questions, designing experiences, analysing and presenting results. We collaboratively build an ideal of scientific methodology and compare it with current practice, trying to avoid simplistic good/bad judgments. Skills developed should help move our habits towards this ideal. We see this as a privileged moment to study notions frequently used without full understanding, but greatly influencing our research's quality.",
          "id": "31",
        }
      ],
      [
        {
          "lecturer": "Arne Meier and Jonni Virtema",
          "title": "Complexity and expressivity of propositional logics with team semantics",
          "group": "Advanced",
          "description": "During the last decade, there has been a rise of interest in the study of a unified logical theory for the concept of dependence. A multitude of logics has been introduced in the first-order, propositional, and modal contexts. The common dominator for these logics is the adaptation of team semantics as a core notion. These new logics have several applications in many different areas of research such as database theory, linguistics, and philosophy. The main goal of this course is to introduce propositional variants of dependence and inclusion logic and to investigate their expressivity and computational complexity of satisfiability, validity, and model checking. The students will acquire technical key observations and techniques in the context of propositional team semantics which will be useful to improve the overall understanding of expressivity and complexity of logics as well as skills and knowledge regarding reductions and algorithms.",
          "id": "45",
        },
        {
          "lecturer": "Davide Catta and Christian Retoré",
          "title": "Linear Logic",
          "group": "Introductory",
          "description": "Linear logic introduced in 1987 by Girard is a refinement of both classical and intuitionistic logics, with substantial outcomes in computer science: functional and logic programming, denotational semantics, concurrency and sharing, (implicit) complexity theory, computational linguistics. It is by now a standard topic in logic and theoretical computer science. Instead of emphasizing truth values, as in classical logic, or proofs, as in intuitionistic logic, linear logic emphasizes the role of formulas as resources. In this course, our aim is to introduce fundamental concepts and techniques of linear logic through a proof-theoretic approach. We will first present the sequent calculus formalism of linear logic, and present the graph theoretical syntax of linear logic, proof nets. Then, we will delve into its denotational semantics, the semantics of proofs, in terms of coherence spaces. The course will end with a non-commutative extension of linear logic, pomset logic, whose relation to deep inference has been recently clarified.",
          "id": "72"
        }
      ],
    ]
  },
  {
    "time": "10.30am - 11.00am",
    "groups": [],
    "title": "coffee break"
  },
  {
    "time": "11.00am - 12.30pm",
    "groups": [
      [
        {
          "lecturer": "Madeleine Butschety",
          "title": "Inclusory Phenomena in Natural Language",
          "group": "Introductory",
          "description": "This course addresses inclusory constructions from two different perspectives: On the one hand, we will examine which linguistic expressions can be involved in the emergence of inclusory meaning cross-linguistically. On the other hand, we will investigate how inclusory meaning can be captured by means of formal semantics in the first place. Because only a certain 'class' of elements happens to play a key role in this respect, namely additives ('too, also'-type) and comitatives ('with'-type) – i.e. expressions whose meaning usually has a conjunctive flavour. In inclusory constructions, however, they establish a 'part of'-relation instead, which is the hallmark of inclusory meaning, but at the same time forces us to reconsider or modify or formal- logical assumptions about these elements. The aim of this course is to provide an overview of an under-explored empirical phenomenon and to illustrate the formal challenges it presents us with.",
          "id": "40"
        },
        {
          "lecturer": "Bart Geurts",
          "title": "Common ground",
          "group": "Foundational",
          "description": "Common ground has been a central notion in theoretical pragmatics since the 1970s, and a fixture in theories of presupposition, reference, speech acts, implicature, and many other topics. Given that pragmatics is an interdisciplinary concern, it is hardly surprising that common ground has been discussed across a range of disciplines, including philosophy, linguistics, psychology, and computer science. But for all its importance, there has been relatively little discussion of foundational issues. There are radically different views on the nature of common ground, i.e. what common ground \emph{is}, and there have been no attempts to compare and contrast these views at any length, and consider their implications for the analysis of speech acts and fiction, for example. In brief, that is the main objective of the course. We will compare and contrast three main views, two of which have been developed by Stalnaker: the container view and the psychological view. The latter is probably the dominant view on common ground, although there are quite a few researchers who consider it to be incoherent. The third view has its roots in Lewis's work on ``common knowledge''; it treats common ground as a normative concept. Each of these views is associated with a distinctive take on pragmatics, and especially with a distinctive account of what speech acts are and how they interact with the common ground.",
          "id": "6"
        }
      ],
      [
        {
          "lecturer": "Mark Steedman",
          "title": "Combinatory Categorial Grammar and the Minimalist Program",
          "group": "Advanced",
          "description": "This is the title for a one-week advanced course to follow \"Introduction to Combinatory Categorial Grammar\" by the same proposer",
          "id": "56",
        },
        {
          "lecturer": "Gerhard Jäger",
          "title": "Statistical typology",
          "group": "Introductory",
          "description": "In the field of linguistic typology, the variation in grammatical properties across natural languages is not random but is influenced by a mix of linguistic universals, genetic relationships, and language contact. This course, building on the foundational work of Joseph Greenberg and subsequent developments, aims to explore these complex interrelations. Recent years have seen significant advancements due to more sophisticated statistical tools and the expansion of cross-linguistic databases. The course is designed for students of linguistics and neighboring disciplines, focusing on two key areas: phylogenetic methods and spatial statistics. Through these lenses, we will examine how linguistic features are inherited, and how they spread under language contact. The curriculum will include practical applications of these methods, enabling participants to analyze typological databases effectively. By the end of this course, attendees will have a clearer understanding of how universal tendencies, common descent, and language contact shape the grammar of natural languages. They will also gain hands-on experience with modern statistical tools and techniques essential for linguistic research.",
          "id": "14",
        }
      ],
      [
        {
          "lecturer": "Eric Pacuit",
          "title": "Social Choice and Machine Learning",
          "group": "Introductory",
          "description": "This course will introduce students to an exciting new area of research at the intersection of social choice theory and machine learning. The course will begin with an introduction to social choice theory, with an focus on the mathematical analysis of voting methods, probabilistic voting, strategic voting, and new group decision making paradigms, such as liquid democracy. The main objective of the course is to explain how machine learning tools and ideas have been used to complement existing social-choice theoretic results. The course will also discuss recent work using large-language models to enhance group decision-making processes.",
          "website": "https://pacuit.org/esslli2024/social-choice-machine-learning/",
          "id": "30",
        },
        {
          "lecturer": "Tiziano Dalmonte and Marianna Girlando",
          "title": "Proof theory of modal logic",
          "group": "Advanced",
          "description": "In this course we explore the proof theory of modal logic. It is well-known that Gentzen-style sequent calculi fail to meet basic requirements in the case of modal logic: for instance, no cut-free sequent calculus is known for the modal logic S5. In order to overcome these difficulties, several extensions of Gentzen's formalism have been studied in the literature. These can be approximately grouped into two categories: labelled calculi, which extend the language of the calculus with explicit semantic information, and structured calculi, such as nested or hypersequent calculi, which instead include additional structural connectives into the structure of the sequents. We will discuss the main properties of these proof systems, including cut-freeness and modularity. Moreover, we will showcase how labelled and structured calculi are suitable to obtain decision procedures for the logics, focusing specifically on countermodel extraction from failed derivations. To conclude, we will compare the various proof systems (Gentzen-style, labelled, structured) by defining formal translations that allow one to convert derivations of one kind into equivalent derivations of the other kind.",
          "id": "51",
          }
      ],
      [
      ]
    ]
  },
  {
    "time": "12.30pm - 2.00pm",
    "groups": [],
    "title": "lunch"
  },
  {
    "time": "2.00pm - 3.30pm",
    "groups": [
      [
        {
          "lecturer": "Arash Eshghi and Julian Hough",
          "title": "Real-time Language Processing in Conversational AI",
          "group": "Advanced",
          "description": "This practical Advanced Course aims to introduce students with computational linguistics backgrounds to incremental language processing for Spoken Dialogue Systems (SDS). Students will be shown the benefits of incrementality for improving speed, naturalness and fluidity of conversing with machines. Concretely, we will be looking at SDSs where processing information from user speech on a word-by-word basis is crucial. The course will cover how to deal with various natural, incremental phenomena in dialogue - such as spoken disfluencies, utterance continuations and interruptions - which standard dialogue systems cannot deal with, using incremental, semantically-driven natural language understanding and generation models. Each session is divided into a lecture, and a practical. During the practicals students work gradually towards building their own fully incremental SDS in a small domain, using the technical tools and API that we will provide. Our aim is that by the end of the course, students will appreciate the multi-faceted complexity of real-time language processing in dialogue.",
          "id": "70"
        },
        {
          "lecturer": "Friederike Moltmann",
          "title": "Revisiting Event Semantics",
          "group": "Advanced",
          "description": "The semantics of events has become a central topic in contemporary semantics as well as syntax ever since the seminal 1967 paper of Donald Davidson caught the interest of linguists. This course will give an overview of the latest developments of Davidsonian and Neo-Davidsonian event semantics and its syntactic representation and address severel important challenges to it that have received little attention. These include the notion of an abstract (or 'Kimean') state, the distinction between events and acts, the apparent categorization of verbs as event predicates as mass rather than dividing into mass and count, cartographic theory of adverbial modification and their linguistic motivations, and implications of theories of syntactic decomposition of verbs into light verb-noun complexes for event semantics. New theoretical proposal will be presented to address those challenges.",
          "id": "18"
        }
      ],
      [
        {
          "lecturer": "Agnieszka Faleńska and Filip Miletić",
          "title": "Language in Social Context: Bridging NLP and Sociolinguistics",
          "group": "Introductory",
          "description": "This course explores the relationship between language and society by drawing on complementary perspectives from sociolinguistics and natural language processing. It discusses variation in language use in connection with (i) speakers’ sociodemographic properties such as age, gender, and socioeconomic status; (ii) speakers’ patterns of interaction; and (iii) the social meaning conveyed through the use of different linguistic variants. In bringing together NLP and sociolinguistics, we aim to establish a comparable level of depth across the disciplines. For students already acquainted with fundamental computational linguistics, the course will provide insights into the richness of language when viewed within a broader social context. For students with a background in sociolinguistics, we will present examples of various computational techniques that can be used to analyze linguistic variation. Students with previous experience in programming will be able to run the practical exercises independently and engage with different types of attested linguistic data.",
          "id": "10"
        }
      ],
      [
        {
          "lecturer": "Eric Pacuit",
          "title": "Neighborhood Semantics for Modal Logic",
          "group": "Advanced",
          "description": "Neighborhood models are generalizations of the standard relational models for modal logic invented independently by Dana Scott and Richard Montague in 1970. These models provide a simple semantics for many interesting non-normal modal logics, such as Coalitional Logic, Game Logic, and weak logics of beliefs. This course will introduce the basic techniques and results of neighborhood semantics for modal logic and explain the exact relationship between the standard relational semantics and neighborhood semantics for modal logics. The main objective is to demonstrate precisely where neighborhood models fit within the large family of semantic frameworks for modal logic and discuss both the pitfalls and potential uses of neighborhood models.",
          "id": "33",
          "website": "https://pacuit.org/esslli2024/neighborhood-semantics/"
        },
      ],
      [
        {
          "lecturer": "Louis Rouillé",
          "title": "Semantic foundations for narratology",
          "group": "Workshop",
          "description": "Many of us think that Kendall Walton’s general theory of make-believe is the best available framework for theorising about fictional discourse. In this framework, modeling truth, reference and speech-acts in fiction starts from this idea that fictional texts are best construed as props in a game of make-believe. within this “functionalist” framework, an adequate semantic analysis of fictional discourse typically requires deploying a narrative element: on top of the representation of a storyworld, one needs a specific narrator-narrative-narratee structure. The semantics of fiction thus leads to narratology. We will look at how semantics and narratology do and should interact when it comes to modeling fictional discourse: first, investigating recent, controversial notions from the semantics of fiction which have a narratological flavour (esp. the fictional periphery, narrator-less fictions, the real-world vs. in-universe perspectives); second, looking at some recent advances in narratology explicitly raising foundational issues (esp. models for second-person narratives, metanarrative fictions).",
          "id": "7"
        }
      ]
    ]
  },
  {
    "time": "3.30pm - 3.50pm",
    "groups": [],
    "title": "coffee break"
  },
  {
    "time": "3.50pm - 4.50pm",
    "groups": [],
    "title": "Student Session (StuS)<br/>",
    "link": "courses-workshops-accepted/student-session-call.html"
  },
  {
    "time": "5.00pm - 6.30pm",
    "groups": [
      [
        {
          "lecturer": "Edoardo Rivello",
          "title": "Semantic theories of truth",
          "group": "Introductory",
          "description": "This course is an introduction to semantic theories of truth, a composite and currently active area within the more general field of research on truth and semantic paradoxes. Semantic theories of truth address by mathematical means several problems raised in logic and philosophy of language by the semantic paradoxes by focusing on the semantic aspect of the issue, namely, on the goal of finding the correct interpretation to be given to the predicate ‘true’ both in natural and in formalised languages. Each lecture will focus on a “truth-theoretic puzzle”, namely, on an example of use of the word ‘true’ raising some problem for a semantic theory. Each puzzle will be examined both in natural language and in its mathematical version, giving the opportunity of introducing one of the contemporary formal approaches to truth as a way of answering the challenge issued by the puzzle.",
          "id": "48",
        },
      ],
      [
        {
          "lecturer": "Kyle Richardson and Gijs Wijnholds",
          "title": "Language model programming: paradigms, techniques and applications",
          "group": "Advanced",
          "description": "Language model programming is the attempt to relate large language model (LLM) development to conventional programming. Making a direct connection between programming and LLM development allows one to bring more rigor to current techniques in NLP (e.g., by exploiting known concepts from programming language theory), and can even motivate the development of new programming languages that make LLM development easier, safer and more efficient. This course reviews the literature on language model programming, starting from advanced prompting techniques in NLP to recent attempts in the programming language literature to build novel programming frameworks for LLMs. We then discuss and motivate alternative paradigms such as declarative model programming and probabilistic programming (based instead on tools such as logic and probabilistic inference). The course gives participants an understanding of the relevant literature, focusing especially on applications such as constrained decoding, interfacing LLMs with tools and model alignment.",
          "id": "47",
        },
        {
          "lecturer": "Luis Estrada-González",
          "title": "Recent work on paraconsistent logic",
          "group": "Introductory",
          "description": "Paraconsistent logic is a family of theories on what can be logically concluded from contradictions, different from the family of theories according to which contradictions entail everything. By touching on core areas of theoretical inquiry, such as truth, falsity, logicality, negation, or rationality, paraconsistent logic has opened new research directions in philosophy, science, and technology. This is an introductory course to some of the most important work on paraconsistent logic from the last decade. I start by exploring two proposals for refining the notion of paraconsistent logic, because the mere failure of Ex Contradictione Quodlibet (ECQ) –that everything follows from a contradiction– might not be sufficient to characterize a paraconsistent logic. The first proposal consists of demanding a pronouncement about the law of non-contradiction (LNC) as well, as apparently there is some tension in rejecting ECQ but accepting LNC. The second proposal asks for considering the appropriate versions of ECQ when meta-arguments –i.e. arguments between arguments– are involved. No matter how paraconsistent logics are presented or defined, they typically lack validities that seem at least useful, if not necessary, for reasoning in general. Thus, some techniques to recover the validities lost in a paraconsistent logic are presented, paying special attention to using unary recover operators to express within the language that a proposition is consistent or inconsistent. Finally, less shy paraconsistent attitudes are presented, namely those leading to logics validating contradictions (and perhaps other classically false or contingent schemas) and the program of doing inconsistent mathematics without any intention of recovering classically valid results if they happen to fail. Suitable motivations and examples of these two latter approaches will be presented.",
          "id": "32"
        }
      ],
      [
        {
          "lecturer": "Lorenz Demey and Hans Smessaert",
          "title": "Introduction to Logical Geometry",
          "group": "Introductory",
          "description": "Aristotelian diagrams, such as the square of opposition, have a rich history in philosophical logic, and today they are also widely used in other disciplines, such as linguistics and computer science. In recent years, these diagrams have also begun to be studied as objects of independent logical and diagrammatic interest, giving rise to the burgeoning field of logical geometry. This course will (i) give students a sense of the wide and interdisciplinary range of (sometimes unexpected) applications of Aristotelian diagrams, (ii) discuss some of the fundamental logical and diagrammatic issues related to these diagrams, and (iii) introduce the methods and tools developed in logical geometry for studying these topics. In particular, we will deal with applications such as Russell's theory of definite descriptions and the Region Connection Calculus, logical and diagrammatic issues such as logic-sensitivity and informational optimality of Aristotelian diagrams, and methods such as bitstring semantics.",
          "id": "3"
        },
        {
          "lecturer": "Valentin Goranko",
          "title": "Logics for strategic reasoning about rational agents in social context",
          "group": "Advanced",
          "description": "This course is intended for a broad audience with basic knowledge of modal and temporal logics. It will first introduce and discuss some important and popular logics for unconditional strategic reasoning in multi-agent systems. Then it will focus on some recently developed refined and richer systems of such logics, where the agents’ strategic abilities are considered in the ‘social context’ of all agents, with their objectives, abilities to act, and ‘social attitudes’ (incl. inclination to cooperate or not with the others), as well as on their knowledge or beliefs about that social context. These will be considered under various assumptions: with complete, incomplete, or imperfect information; with no memory, bounded or unbounded memory of the agents; with dynamically changing social contexts, etc. Formal logical systems and some technical results about them will be outlined in the course and several unexplored directions for further research and open problems will be mentioned. ",
          "id": "21",
          "website": "https://www2.philosophy.su.se/goranko/Courses2024/ESSLLI2024_LogicsForStrategicReasoning.html"
        }
      ],
      [
        {
          "lecturer": "Alexander Gheorghiu and Tao Gu",
          "title": "Symposium on Proof-theoretic Semantics",
          "group": "Workshop",
          "description": "Proof-theoretic Semantics (P-tS) is a rapidly developing, novel approach to meaning in logic. It is based on the principle that the meaning of expressions in our language, in particular to logical constants, is that of 'proof' (rather than 'truth'). The Symposium on Proof-theoretic Semantics aims to expose the field to a wider community of researchers. It provides novel perspectives on the relationship between proof theory and semantics in logic. In particular, this workshop is suitable for researchers interested in proof systems for logics, systems and tools for evaluation, and the use of logic for reasoning --- both formally in systems verification and modelling, symbolic artificial intelligence, etc., and informally in conceptional frameworks supporting the deployment of logic in mathematics, informatics, and philosophy.",
          "id": "41"
        }
      ]
    ]
  }
];
