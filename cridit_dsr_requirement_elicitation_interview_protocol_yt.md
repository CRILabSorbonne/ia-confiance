# Guide d'entretien

semi-structuré -> 45 minutes -> utilisateurs d'IA dans leur travail

## Définitions
* Système d'IA: Un système IA est un système qui possède des fonctionnalités exploitant des capacités d'intelligence artificielle directement accessibles à l'utilisateur final. (Amershi et al. 2019). Par exemple, un assistant conversationnel (Claude, ChatGPT, Copilot…) utilisé pour rédiger ou résumer un document ou un assistant de code intégré à l'environnement de développement. Mais un filtre anti-spam qui n'a pas d'interaction avec les autres modules dans le système, ni avec les utilisateurs, n'est pas un système d'IA.
* Confiance: La volonté de l'utilisateur de se rendre dépendant de celle-ci, sur la base de croyances selon lesquelles le système IA possède les caractéristiques nécessaires pour produire les résultats attendus. (basant sur la définition de McKnight sur la confiance envers un technology). Par exemple, vous laissez l'outil à faire certaine tâches et à n'en relire que certains passages, parce que vous pensez qu'il est performant pour réaliser les tâches distribuées.
* Crédibilité: Les qualités ou propriétés d'un système IA qui justifient la confiance que l'utilisateur peut lui accorder. (basant sur Lee et See sur la crédibilité d'un système automatisé). Ce sont donc surtout les propriétés d'un système d'IA, qu'un utilisateur les perçoive ou non. Par exemple, le système fait rarement des erreurs sur un type de tâche donné ; ses résultats restent stables quand on reformule la même demande.
* Calibration de la confiance: Alignement entre la confiance de l'utilisateur et la crédibilité du système (Lee et See, 2004). 

## Context
* Q1.1 Pourriez-vous décrire votre travail, depuis combien de temps vous l'exercez, et comment vous situez votre niveau d'expertise dans votre domaine (débutant, confirmé, expert) ? Et du côté de l'IA : quels outils utilisez-vous, pour quelles tâches et pour quelles raisons, depuis quand et à quelle fréquence ?
- Relances: avez-vous le choix de ces outils, ou sont-ils imposés par l'organisation ? sur les tâches que vous confiez à l'IA, seriez-vous capable de faire le travail vous-même ?

* Q1.2 Est-ce qu'ils a des tâches que vous évitez d'utilisez le système IA si vous avez le choix ? Pourquoi ?
- Relance: pour des raison de sécurité? pour des raison des impacts cognitifs? pour des raisons de responsabilités?

* Q1.3 Comment vous évaluez qu'un système IA est crédible, pas assez crédible (vérifications sont obligatoires), pas du tout crédible? La première fois que vous utiliser un système? et après une période d'utilisation?
- Relance: qu'est-ce que vous observez? sur quoi s'appuie votre jugement? quelles sont les sorties du système IA qui vous inspire le plus confiance  ou au contraire faire moins confiance, voir avoir plus du tout de la confiance?

* Q1.4 Au bout de combien d'interraction réussie  pensez vous  faire le plus confiance sur le système ou combien de défaillances vous font faire moins confiance, voire, perdre totalement confiance en le système?
- Relance: juste une erreur critique que vous avez vue? après 10, 20, 50 très bon résultat? jusqu'à une mauvaise expérience de vos collègues? combien de temps peut dure une satisfaction ou une perte de confiance?

* Q1.5 Pensez-vous savoir différentier le moment où "je fais confiance à l'outil" et "l'outil est crédible"?


## As-Is

* Q2.1 Avez-vous déjà eu l'expérience avec le système que vous utilisez où vous vous rendez compte que le résultat est mauvais?
- Relances: quelles sont les conséquences? qui prends les responsabilités? quelle est votre réaction? 

* Q2.2 Est-ce que ça vous arrive d'accepter le résultat de la tâche sans vérification, et que plus tard l'examinateur/votre collègue vous dit que le résultat est mauvais?
- Relance: pourquoi vous décider de ne pas faire la vérification? comment l'examinateur/votre collègue distribue la responsabilité (en cas de délégation et en cas de collaboration?)

* Q2.3 Est-ce que ça vous arrive de douter du résultat de la tâche et de vérifier, voire refaire la tâche et vous vous rendez compte que le système avait raison?
- Relances: pourquoi avez-vous douté? est-ce que le temps qu'il vous a coûté vous semble être du gaspillage? que ferez vous pour la prochaine intéraction pour une même tâche? (en cas de délégation et en cas de collaboration?)

* Q2.4 Comment  vérifiez vous un résultat du système? Qu'est-ce que vous regardez, et qu'est-ce que vous ne vérifiez jamais?
- Relance: l'outil vous communique-t-il sa propre (degrès de certitude?) sur le résultat/ses limites/ses incertitudes? Vous faites confiance sur ces informations communiquées? Pourquoi, ou pourquoi pas?

* Q2.5 Quand une erreur arrive, sauriez-vous d'où elle vient? 
- Relance: quand pensez vous que l'erreur vienne du système et ne peut pas être corrigée/améliorée en raison d'une limitation du système/modèle? des données fournies ou de votre instruction, donc il suffit de corriger les données/reformuler l'instruction? Qu'est-ce qui va vous aider à savoir ce qui doit alors être corriger?

## Gap

* Q3.1 Dans le cas où vous n'avez pas vérifié et que le résultat est mauvais, quel alerte pourrait  attirer votre attention et déclancher une vérification? 
- Relances: qu'est-ce qui vous a manqué pour voir l'erreur à temps? quand souhaitez vous que le système vous alerte? avant le résultat, après le résultat? sous quelle forme? 

* Q3.2 Pour le cas que vous avez passé beaucoup de temps pour vérifier/refaire la tâche et que le système le fait bien, quels informations pourraient vous  servir pour réduire le temps de vérification, voir, faire 100% confiance sans procéder à une vérification? 
- Relances: sous quelle forme? Toujours, ou seulement quand vous le demandez pour une tâche critique?

* Q3.3 Pour identifier la source d'erreur, qu'est-ce qui vous a manqué?
- Relances: sous quelle forme? 

## To-Be

* Q4.1 En cas d'erreur, est-ce que vous préférez que le système se corrige tout seul (refaire, changer de l'outil, vous passer le main), ou qu'il vous prévienne et vous laisse décider ? pourquoi ?
- Relance: pour les tâches critiques? 

* Q4.2 Si le système maintenant vous communique sa crédibilité, vous préférez qu'il est sous quelle forme, avec quelle fréquence/conditions? 
- Relance: quels informations pensez-vous efficace pour communiquer la crédibilité? ferez-vous confiance sur ces informations? dans quelles cas oui et dans quelles cas non?

* Q4.3 Dans quelle cas vous pensez que c'est necessaire de passer du temps, des étapes de vérification en plus, d'interrompre la tâche et recommencer, de choisir l'outil que vous préférez pour les tâches? À partir de quand ces efforts deviennent une "perte de temps/sources (CPU)" pour vous?

* Q4.4 Qui devrait décider à partir de quand faire la vérification, quand intervenir pour que le système change de comportements? qui prends la responsabilité pour la décision? vous, votre équipe, votre responsable, un expert, un tiers fiable?

* !!Q4.5 Si le système collecte les données sur les interactions (les prompts, adoption, rejet ou correction (overwrite)) pour ajuster ses comportements, qu'en penseriez-vous? 
- Relance: Feriez-vous plus de confiance? moins de confiance? pourquoi? 

* Q4.6 Si le système fait appel à des outils externes (navigation web, calcul, outil divers), comment évaluez-vous la crédibilité de ces outils? Est-ce que vous faites confiance dans le système pour choisir les outils les plus adaptés?
- Relance: Préférez vous choisir vous même les outils?

## Deployment 

* Q5.1 Si un tel système qui vous communique la crédibilité et ajuster ses comportements, est-ce vous allez l'utiliser pour votre travail?
- Relances: coût, utilité, sécurité des données, responsabilités, validation par qui?

* Q5.2 Quelle preuve vous voulez que ce système montre pour lui faire confiance? (do we trust trust)

## Open Question
* Q6 Est-ce qu'il y a des choses importants que nous n'avons pas considéré?
