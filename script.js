"use strict";

/* =====================================================
   HEMIPT ASSISTANT
   Complete bilingual chatbot: English and French
   ===================================================== */


/* =====================================================
   1. SCHOOL INFORMATION AND CHATBOT ANSWERS
   ===================================================== */

const knowledge = {
  en: {
    welcome: `Welcome to HEMIPT Assistant! 🎓

Welcome to HEMS Higher Institute of Professionalism and Technology (HEMIPT).

I can help you discover our departments and programmes, understand registration, check school fees, find campus locations, learn about scholarships and contact the school.

What would you like to know?`,

    fallback: `Thank you for contacting HEMIPT Assistant.

I could not find a specific answer to your question.

You can ask me about:
• Departments and programmes
• HND and degree programmes
• Registration
• School fees and payment at JACCUL
• Campus locations
• Scholarships
• Library and facilities
• School contacts

For information not listed here, please contact the school administration.`,

    welcomeTitle: "Welcome to HEMIPT Assistant",
    welcomeText: "Your guide to programmes, registration, school fees and campus information.",
    eyebrow: "YOUR STUDENT GUIDE",
    chatTitle: "HEMIPT Assistant",
    ready: "Ready to help",
    placeholder: "Type your question...",
    send: "Send ➤",
    tryAsking: "Try asking:",
    notice: "For registration and payment, visit the school office for the necessary instructions.",
    footer: "HEMIPT Student Information Assistant",

    topics: [
      {
        icon: "🎓",
        label: "Departments & Programmes",
        question: "What programmes does HEMIPT offer?"
      },
      {
        icon: "📝",
        label: "Registration",
        question: "How do I register at HEMIPT?"
      },
      {
        icon: "💳",
        label: "School Fees",
        question: "What are the school fees?"
      },
      {
        icon: "📍",
        label: "Campus Locations",
        question: "Where are the HEMIPT campuses?"
      }
    ],

    quick: [
      "What programmes does HEMIPT offer?",
      "How do I register?",
      "What are the school fees?",
      "Where is the school located?",
      "Where do I pay my fees?",
      "What scholarships are available?"
    ],

    about: `ABOUT HEMIPT

Full name:
HEMS Higher Institute of Professionalism and Technology.

The institution is also presented as HEMS University Institute and HEMIPT Polytechnic.

The school advertises its affiliation with the University of Bamenda.

The locations listed in the school information are:
• Bafoussam
• Fundong
• Magba
• Kumbo

The school advertises HND, degree, master's, doctoral and vocational training programmes.

Motto:
INSPIRE • LEARN • ACHIEVE

Another slogan displayed on the school materials is:
EXCELLENCE IS OUR GOAL.`,

    departments: `HEMIPT DEPARTMENTS AND SPECIALITIES

HEMIPT advertises the following five main departments:

1. MEDICAL AND BIOMEDICAL SCIENCES

• Nursing / Nursing Assistance
• Laboratory Technicians Sciences
• Pharmacy Technology
• Midwifery
• Nutrition and Dietetics

2. EDUCATION AND COMMUNICATION

• Didactics, Curriculum Development and Teaching
• Educational Management
• Special Education
• Journalism
• Teacher's Grade 1 Training Programme

3. HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT

• Bakery and Food Processing
• Fashion, Clothing and Textiles
• Tourism and Travel Agency Management
• Hotel Management and Catering
• Communication

4. MANAGEMENT AND BUSINESS STUDIES

• Management Assistant
• Logistics and Transport Management
• Human Resource Management
• Project Management
• Accountancy
• Marketing and Trade / Banking and Finance

5. ENGINEERING AND TECHNOLOGY

• Civil Engineering and Technology
• Electrical and Electronic Engineering and Technology
• Computer Engineering and Technology
• Software Engineering
• Electrical Power System
• Graphic and Web Designing
• Petroleum and Drilling Engineering

ADDITIONAL DEPARTMENT LISTED:

AGRICULTURAL ENGINEERING AND TECHNOLOGY

• Crop Production
• Animal Production
• Agricultural Technology
• Agro-Pastoral Entrepreneurship

Contact the school office to confirm the programme available at your chosen level and campus.`,

    programs: `HEMIPT PROGRAMMES

HEMIPT offers training in several areas, including:

MEDICAL AND BIOMEDICAL SCIENCES
• Nursing / Nursing Assistance
• Laboratory Technicians Sciences
• Pharmacy Technology
• Midwifery
• Nutrition and Dietetics

EDUCATION AND COMMUNICATION
• Didactics, Curriculum Development and Teaching
• Educational Management
• Special Education
• Journalism
• Teacher's Grade 1 Training Programme

HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT
• Bakery and Food Processing
• Fashion, Clothing and Textiles
• Tourism and Travel Agency Management
• Hotel Management and Catering
• Communication

MANAGEMENT AND BUSINESS STUDIES
• Management Assistant
• Logistics and Transport Management
• Human Resource Management
• Project Management
• Accountancy
• Marketing and Trade / Banking and Finance

ENGINEERING AND TECHNOLOGY
• Civil Engineering and Technology
• Electrical and Electronic Engineering and Technology
• Computer Engineering and Technology
• Software Engineering
• Electrical Power System
• Graphic and Web Designing
• Petroleum and Drilling Engineering

AGRICULTURAL ENGINEERING AND TECHNOLOGY
• Crop Production
• Animal Production
• Agricultural Technology
• Agro-Pastoral Entrepreneurship

Ask me about HND programmes, bachelor's degrees, master's programmes or doctoral programmes for more information.`,

    health: `MEDICAL AND BIOMEDICAL SCIENCES

The specialities listed are:

1. Nursing / Nursing Assistance
2. Laboratory Technicians Sciences
3. Pharmacy Technology
4. Midwifery
5. Nutrition and Dietetics

Visit the school office to confirm the entry requirements, programme duration and availability.`,

    education: `EDUCATION AND COMMUNICATION

The specialities listed are:

1. Didactics, Curriculum Development and Teaching
2. Educational Management
3. Special Education
4. Journalism
5. Teacher's Grade 1 Training Programme

Contact the school office for admission requirements and programme availability.`,

    management: `MANAGEMENT AND BUSINESS STUDIES

The specialities listed are:

1. Management Assistant
2. Logistics and Transport Management
3. Human Resource Management
4. Project Management
5. Accountancy
6. Marketing and Trade / Banking and Finance

Ask the school office which programmes are available at HND and degree levels.`,

    engineering: `ENGINEERING AND TECHNOLOGY

The specialities listed are:

1. Civil Engineering and Technology
2. Electrical and Electronic Engineering and Technology
3. Computer Engineering and Technology
4. Software Engineering
5. Electrical Power System
6. Graphic and Web Designing
7. Petroleum and Drilling Engineering

The school information also lists Agricultural Engineering and Technology, covering Crop Production, Animal Production, Agricultural Technology and Agro-Pastoral Entrepreneurship.`,

    homeEconomics: `HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT

The specialities listed are:

1. Bakery and Food Processing
2. Fashion, Clothing and Textiles
3. Tourism and Travel Agency Management
4. Hotel Management and Catering
5. Communication

Contact the school office to confirm the programme and campus where it is available.`,

    agriculture: `AGRICULTURAL ENGINEERING AND TECHNOLOGY

The specialities listed are:

• Crop Production
• Animal Production
• Agricultural Technology
• Agro-Pastoral Entrepreneurship

Visit the school office for information about admission and programme availability.`,

    degrees: `BACHELOR'S DEGREE PROGRAMMES

The school information lists the following bachelor's degree programmes:

MEDICAL AND HEALTH-RELATED PROGRAMMES
• Nursing
• Midwifery
• Medical Laboratory Sciences
• Pharmacy Technology

MANAGEMENT AND BUSINESS
• Accountancy
• Banking and Finance
• Management
• Transport and Logistics
• Marketing

OTHER PROGRAMMES
• Public Law
• Telecommunication
• Software Engineering
• Education
• Customs and Transit
• Civil Engineering
• Tourism and Hotel Management

MASTER'S AND DOCTORAL PROGRAMMES

The school information also lists programmes in areas such as:

• Public Health
• Medical Surgical Nursing
• Pediatric Nursing
• Psychiatric Nursing
• Epidemiology
• Infectious Diseases Control
• Health Education Management
• Community Health
• Clinical Pathology
• Clinical Haematology
• Medical Parasitology
• Midwifery Sciences
• Reproductive Health
• Mother and Child Care
• Business Administration
• Banking and Finance
• Accountancy
• Telecommunication
• Public Law
• Civil Engineering

The availability of a specific programme depends on the level and current school offering. Contact HEMIPT for confirmation.`,

    vocational: `VOCATIONAL TRAINING CENTRE

The school information advertises vocational training in:

• Clothing and Tailoring
• Secretariat Duties
• Computer Maintenance
• Hardware and Software
• Home Economics, including Bakery and Cookery
• Hotel Management
• Computerized Accounting

The vocational training centre is described in the school information as being behind Pharmacie Marché B.

Contact the school to confirm current registration procedures and training duration.`,

    registration: `HOW TO REGISTER AT HEMIPT

Registration is done at the school office.

FOLLOW THESE STEPS:

1. Visit the HEMIPT school office in person.
2. Tell the staff the programme and level you want to study.
3. Ask for the current admission requirements and required documents.
4. Complete the registration procedure with the school staff.
5. Ask the office to confirm the registration fee and any other requirements.
6. Keep the documents and receipts provided to you.

The school information also states that students can register through the school website:
https://hemiptuniversity.com

However, according to the registration procedure you provided, students go to the school office to complete registration.

For assistance, contact the school using the telephone numbers or email addresses provided in this assistant.`,

    registrationFees: `REGISTRATION FEES

The registration fees displayed in the school information are:

• HND programmes: 25,000 FCFA.
• Degree / Master's programmes: 35,000 FCFA.

Visit the school office to confirm your programme's registration fee and the payment instructions before making payment.`,

    fees: `HEMIPT SCHOOL FEES

The annual tuition fees and instalments are listed below.

SCHOOL OF HEALTH
• First instalment: 200,000 FCFA
• Second instalment: 100,000 FCFA
• Total tuition per year: 300,000 FCFA

SCHOOL OF BUSINESS
• First instalment: 170,000 FCFA
• Second instalment: 80,000 FCFA
• Total tuition per year: 250,000 FCFA

EDUCATION AND COMMUNICATION
• First instalment: 170,000 FCFA
• Second instalment: 80,000 FCFA
• Total tuition per year: 250,000 FCFA

ENGINEERING, TECHNOLOGY, LOGISTICS AND TRANSPORT
• First instalment: 200,000 FCFA
• Second instalment: 100,000 FCFA
• Total tuition per year: 300,000 FCFA

HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT
• First instalment: 170,000 FCFA
• Second instalment: 80,000 FCFA
• Total tuition per year: 250,000 FCFA

BACHELOR'S DEGREE PROGRAMMES
• School of Health: 390,000 FCFA
• School of Business: 350,000 FCFA
• Education and Communication: 350,000 FCFA
• Engineering and Technology: 390,000 FCFA
• Home Economics, Tourism and Hotel Management: 350,000 FCFA

REGISTRATION FEES
• HND programmes: 25,000 FCFA
• Degree / Master's programmes: 35,000 FCFA

The school also advertises scholarships and financial assistance.

Visit the school office to confirm the current amount applicable to your programme before paying.`,

    payment: `WHERE TO PAY SCHOOL FEES

School fees are paid at JACCUL, the commercial bank located in the same building as the school.

PAYMENT PROCEDURE:

1. Visit the school office and confirm the amount you must pay.
2. Ask the school staff for the correct payment instructions.
3. Go to JACCUL, the commercial bank in the same building.
4. Make your payment according to the instructions provided.
5. Keep your bank payment receipt.
6. Follow the school's instructions for confirming your payment.

Always confirm the amount and payment details with the school before making a payment.`,

    campuses: `HEMIPT CAMPUS LOCATIONS

The school information lists the following locations:

1. BAFOUSSAM — CAMPUS A

After SPC, at the mixed control point, behind New SIKA ENERGIE petrol station.

2. BAFOUSSAM — CAMPUS B

After Total en Base, opposite the MTN office in Djemoun, near the Yellow Storey.

3. MAGBA

Opposite the Gendarmerie in Magba.

Telephone: +237 680 78 59 56

4. FUNDONG

Chiafunkuin's Foundation, opposite Fundong Credit Union.

Telephone: +237 676 24 48 48

5. KUMBO

Kumbo is listed among the school's locations. Contact the school to confirm the precise address and available programmes there.

Contact the school before travelling if you need directions or confirmation of your programme's campus.`,

    contacts: `HEMIPT GENERAL CONTACTS

TELEPHONE NUMBERS

• +237 675 283 496
• +237 672 317 975
• +237 671 89 12 89
• +237 676 66 09 61
• +237 678 981 122
• +237 675 221 182
• +237 675 104 940
• +237 651 42 72 04
• +237 691 933 667
• +237 651 708 999

CAMPUS CONTACTS

Magba:
+237 680 78 59 56

Fundong:
+237 676 24 48 48

EMAIL ADDRESSES

hemiptpolytechnic@gmail.com

info@hemiptuniversity.com

WEBSITE

https://hemiptuniversity.com

FACEBOOK

HEMIPT University Institute

You can contact the school for registration, fees, admission requirements and programme information.`,

    scholarship: `SCHOLARSHIPS AND FINANCIAL ASSISTANCE

HEMIPT advertises the following scholarship and financial assistance opportunities:

• Scholarships of up to 50%.
• Scholarship assistance advertised up to 250,000 FCFA.
• Other financial assistance offers.

The school also advertises qualified teachers, good workshops and equipment, a biomedical practising centre, practising farms and incubators, a rich library, free Wi-Fi and a friendly learning environment.

Visit the school office to ask about current scholarship conditions, eligibility requirements, available amounts and application procedures.`,

    facilities: `HEMIPT FACILITIES AND ADVANTAGES

The school advertises the following facilities and advantages:

• Free Wi-Fi
• Qualified teachers
• Good workshops and equipment
• Biomedical practising centre
• Practising farms and incubators
• Rich library
• Friendly and collaborative environment
• God-driven institution

The school information also mentions opportunities for internships with partner universities in Canada, the USA, the UK and Australia, as well as NGOs and government organisations.

Ask the school for information about the facilities and opportunities available for your programme and campus.`,

    library: `HEMIPT LIBRARY

The school advertises a rich library as one of its advantages.

For the exact library location, opening hours, access requirements and available resources, ask the administration at your campus.`,

    classes: `NATURE OF CLASSES

The school information lists the following class formats:

• Physical classes
• Online classes
• Sandwich classes
• Programmed classes

Ask the school which format is available for your programme and level.`,

    duration: `TRAINING DURATION

The school information states that training can last:

• 12 months
• 2 years
• 3 years

At the end of training and examinations, the school information mentions certification for VND (Vocational National Diploma), HND (Higher National Diploma), degrees or master's qualifications, depending on the programme.

Ask the school office to confirm the exact duration and qualification for your chosen programme.`,

    contact: `You can contact HEMIPT through these channels:

Telephone:
+237 675 283 496
+237 672 317 975
+237 671 89 12 89
+237 676 66 09 61

Email:
hemiptpolytechnic@gmail.com
info@hemiptuniversity.com

Website:
https://hemiptuniversity.com

You can also visit the school office in person.`,

    website: `HEMIPT WEBSITE

Website:
https://hemiptuniversity.com

The school information states that students can register through the school website.

You can also visit the school office for assistance with registration and admission.`,

    greeting: `Hello and welcome to HEMIPT Assistant! 🎓

I can help you with programmes, registration, school fees, JACCUL payments, campuses, scholarships and school contacts.

What would you like to know?`,

    thanks: `You're welcome! 😊

Thank you for using HEMIPT Assistant.

If you need more information, ask me another question or contact the school office.`
  },


  /* ===================================================
     FRENCH ANSWERS
     =================================================== */

  fr: {
    welcome: `Bienvenue sur l'Assistant HEMIPT ! 🎓

Bienvenue à HEMS Higher Institute of Professionalism and Technology (HEMIPT).

Je peux vous aider à découvrir les départements et les filières, comprendre l'inscription, consulter les frais de scolarité, trouver les campus et obtenir les coordonnées de l'école.

Que souhaitez-vous savoir ?`,

    fallback: `Merci d'avoir contacté l'Assistant HEMIPT.

Je n'ai pas trouvé de réponse précise à votre question.

Vous pouvez poser des questions sur :
• Les départements et les filières
• Les programmes HND et les licences
• L'inscription
• Les frais de scolarité et le paiement à JACCUL
• Les campus
• Les bourses
• La bibliothèque et les installations
• Les contacts de l'école

Pour toute autre information, veuillez contacter l'administration de l'école.`,

    welcomeTitle: "Bienvenue sur l'Assistant HEMIPT",
    welcomeText: "Votre guide pour les filières, l'inscription, les frais de scolarité et les campus.",
    eyebrow: "VOTRE GUIDE ÉTUDIANT",
    chatTitle: "Assistant HEMIPT",
    ready: "Prêt à vous aider",
    placeholder: "Écrivez votre question...",
    send: "Envoyer ➤",
    tryAsking: "Essayez de demander :",
    notice: "Pour l'inscription et le paiement, rendez-vous au bureau de l'école pour obtenir les instructions nécessaires.",
    footer: "Assistant d'information des étudiants HEMIPT",

    topics: [
      {
        icon: "🎓",
        label: "Départements et filières",
        question: "Quelles filières propose HEMIPT ?"
      },
      {
        icon: "📝",
        label: "Inscription",
        question: "Comment faire mon inscription à HEMIPT ?"
      },
      {
        icon: "💳",
        label: "Frais de scolarité",
        question: "Quels sont les frais de scolarité ?"
      },
      {
        icon: "📍",
        label: "Localisation des campus",
        question: "Où se trouvent les campus de HEMIPT ?"
      }
    ],

    quick: [
      "Quelles filières propose HEMIPT ?",
      "Comment faire mon inscription ?",
      "Quels sont les frais de scolarité ?",
      "Où se trouve l'école ?",
      "Où payer les frais de scolarité ?",
      "Quelles bourses sont disponibles ?"
    ],

    about: `À PROPOS DE HEMIPT

Nom complet :
HEMS Higher Institute of Professionalism and Technology.

L'établissement est également présenté sous les noms HEMS University Institute et HEMIPT Polytechnic.

L'école annonce son affiliation à l'Université de Bamenda.

Les localités mentionnées sont :
• Bafoussam
• Fundong
• Magba
• Kumbo

L'école annonce des programmes HND, de licence, de master, de doctorat et de formation professionnelle.

Devise :
INSPIRE • LEARN • ACHIEVE

Un autre slogan affiché est :
EXCELLENCE IS OUR GOAL.`,

    departments: `DÉPARTEMENTS ET SPÉCIALITÉS DE HEMIPT

HEMIPT présente cinq grands départements :

1. SCIENCES MÉDICALES ET BIOMÉDICALES

• Soins infirmiers / Aide-soignant
• Sciences des techniciens de laboratoire
• Technologie pharmaceutique
• Sage-femme / Maïeutique
• Nutrition et diététique

2. ÉDUCATION ET COMMUNICATION

• Didactique, élaboration des programmes et enseignement
• Gestion de l'éducation
• Éducation spécialisée
• Journalisme
• Programme de formation des enseignants de Grade 1

3. ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE

• Boulangerie et transformation alimentaire
• Mode, habillement et textile
• Gestion du tourisme et des agences de voyage
• Gestion hôtelière et restauration
• Communication

4. GESTION ET ÉTUDES COMMERCIALES

• Assistant de gestion
• Logistique et transport
• Gestion des ressources humaines
• Gestion de projet
• Comptabilité
• Marketing et commerce / Banque et finance

5. INGÉNIERIE ET TECHNOLOGIE

• Génie civil et technologie
• Génie électrique et électronique
• Génie informatique
• Génie logiciel
• Systèmes électriques de puissance
• Conception graphique et web
• Pétrole et forage

AUTRE DÉPARTEMENT MENTIONNÉ :

GÉNIE AGRICOLE ET TECHNOLOGIE AGRICOLE

• Production végétale
• Production animale
• Technologie agricole
• Entrepreneuriat agropastoral

Contactez le bureau de l'école pour confirmer les filières disponibles selon le niveau et le campus.`,

    programs: `PROGRAMMES DE HEMIPT

HEMIPT présente plusieurs domaines de formation :

SCIENCES MÉDICALES ET BIOMÉDICALES
• Soins infirmiers / Aide-soignant
• Sciences des techniciens de laboratoire
• Technologie pharmaceutique
• Sage-femme
• Nutrition et diététique

ÉDUCATION ET COMMUNICATION
• Didactique, élaboration des programmes et enseignement
• Gestion de l'éducation
• Éducation spécialisée
• Journalisme
• Formation des enseignants de Grade 1

ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE
• Boulangerie et transformation alimentaire
• Mode, habillement et textile
• Gestion du tourisme et des agences de voyage
• Gestion hôtelière et restauration
• Communication

GESTION ET ÉTUDES COMMERCIALES
• Assistant de gestion
• Logistique et transport
• Gestion des ressources humaines
• Gestion de projet
• Comptabilité
• Marketing et commerce / Banque et finance

INGÉNIERIE ET TECHNOLOGIE
• Génie civil et technologie
• Génie électrique et électronique
• Génie informatique
• Génie logiciel
• Systèmes électriques de puissance
• Conception graphique et web
• Pétrole et forage

GÉNIE AGRICOLE ET TECHNOLOGIE AGRICOLE
• Production végétale
• Production animale
• Technologie agricole
• Entrepreneuriat agropastoral

Vous pouvez également demander des informations sur les programmes HND, les licences, les masters et les doctorats.`,

    health: `SCIENCES MÉDICALES ET BIOMÉDICALES

Les spécialités indiquées sont :

1. Soins infirmiers / Aide-soignant
2. Sciences des techniciens de laboratoire
3. Technologie pharmaceutique
4. Sage-femme / Maïeutique
5. Nutrition et diététique

Rendez-vous au bureau de l'école pour confirmer les conditions d'admission, la durée et la disponibilité des programmes.`,

    education: `ÉDUCATION ET COMMUNICATION

Les spécialités indiquées sont :

1. Didactique, élaboration des programmes et enseignement
2. Gestion de l'éducation
3. Éducation spécialisée
4. Journalisme
5. Programme de formation des enseignants de Grade 1

Contactez le bureau de l'école pour les conditions d'admission et la disponibilité des programmes.`,

    management: `GESTION ET ÉTUDES COMMERCIALES

Les spécialités indiquées sont :

1. Assistant de gestion
2. Logistique et transport
3. Gestion des ressources humaines
4. Gestion de projet
5. Comptabilité
6. Marketing et commerce / Banque et finance

Demandez au bureau de l'école quels programmes sont disponibles aux niveaux HND et licence.`,

    engineering: `INGÉNIERIE ET TECHNOLOGIE

Les spécialités indiquées sont :

1. Génie civil et technologie
2. Génie électrique et électronique
3. Génie informatique
4. Génie logiciel
5. Systèmes électriques de puissance
6. Conception graphique et web
7. Pétrole et forage

Les informations de l'école mentionnent également le génie agricole et la technologie agricole : production végétale, production animale, technologie agricole et entrepreneuriat agropastoral.`,

    homeEconomics: `ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE

Les spécialités indiquées sont :

1. Boulangerie et transformation alimentaire
2. Mode, habillement et textile
3. Gestion du tourisme et des agences de voyage
4. Gestion hôtelière et restauration
5. Communication

Contactez le bureau de l'école pour confirmer le programme et le campus où il est disponible.`,

    agriculture: `GÉNIE AGRICOLE ET TECHNOLOGIE AGRICOLE

Les spécialités indiquées sont :

• Production végétale
• Production animale
• Technologie agricole
• Entrepreneuriat agropastoral

Rendez-vous au bureau de l'école pour obtenir des informations sur l'admission et la disponibilité des programmes.`,

    degrees: `PROGRAMMES DE LICENCE

Les informations de l'école mentionnent les programmes suivants :

SANTÉ ET DOMAINES MÉDICAUX
• Soins infirmiers
• Sage-femme
• Sciences de laboratoire médical
• Technologie pharmaceutique

GESTION ET COMMERCE
• Comptabilité
• Banque et finance
• Management
• Transport et logistique
• Marketing

AUTRES PROGRAMMES
• Droit public
• Télécommunications
• Génie logiciel
• Éducation
• Douanes et transit
• Génie civil
• Tourisme et hôtellerie

PROGRAMMES DE MASTER ET DE DOCTORAT

Les domaines mentionnés comprennent :

• Santé publique
• Soins infirmiers médico-chirurgicaux
• Soins infirmiers pédiatriques
• Soins infirmiers psychiatriques
• Épidémiologie
• Contrôle des maladies infectieuses
• Gestion de l'éducation sanitaire
• Santé communautaire
• Pathologie clinique
• Hématologie clinique
• Parasitologie médicale
• Sciences de la maïeutique
• Santé reproductive
• Santé de la mère et de l'enfant
• Administration des affaires
• Banque et finance
• Comptabilité
• Télécommunications
• Droit public
• Génie civil

La disponibilité dépend du niveau et des programmes actuellement proposés. Contactez HEMIPT pour confirmation.`,

    vocational: `CENTRE DE FORMATION PROFESSIONNELLE

Les formations annoncées comprennent :

• Habillement et couture
• Secrétariat
• Maintenance informatique
• Matériel et logiciels informatiques
• Économie familiale, notamment boulangerie et cuisine
• Gestion hôtelière
• Comptabilité informatisée

Le centre de formation professionnelle est indiqué comme étant derrière la Pharmacie Marché B.

Contactez l'école pour confirmer les inscriptions et la durée des formations.`,

    registration: `COMMENT S'INSCRIRE À HEMIPT

L'inscription se fait au bureau de l'école.

SUIVEZ CES ÉTAPES :

1. Rendez-vous personnellement au bureau de HEMIPT.
2. Indiquez la filière et le niveau que vous souhaitez suivre.
3. Demandez les conditions d'admission et les documents nécessaires.
4. Effectuez les formalités d'inscription avec le personnel de l'école.
5. Faites confirmer les frais d'inscription et les autres exigences.
6. Conservez les documents et les reçus qui vous sont remis.

Les informations de l'école indiquent également que les étudiants peuvent s'inscrire sur le site :
https://hemiptuniversity.com

Cependant, selon la procédure que vous m'avez indiquée, les étudiants se rendent au bureau de l'école pour finaliser leur inscription.

Vous pouvez contacter l'administration par téléphone ou par e-mail pour obtenir de l'aide.`,

    registrationFees: `FRAIS D'INSCRIPTION

Les frais d'inscription indiqués sont :

• Programmes HND : 25 000 FCFA.
• Programmes de licence / master : 35 000 FCFA.

Rendez-vous au bureau de l'école pour confirmer les frais applicables à votre programme et les instructions de paiement avant de payer.`,

    fees: `FRAIS DE SCOLARITÉ DE HEMIPT

Les frais annuels et les tranches sont indiqués ci-dessous.

ÉCOLE DE SANTÉ
• Première tranche : 200 000 FCFA
• Deuxième tranche : 100 000 FCFA
• Total annuel : 300 000 FCFA

ÉCOLE DE COMMERCE
• Première tranche : 170 000 FCFA
• Deuxième tranche : 80 000 FCFA
• Total annuel : 250 000 FCFA

ÉDUCATION ET COMMUNICATION
• Première tranche : 170 000 FCFA
• Deuxième tranche : 80 000 FCFA
• Total annuel : 250 000 FCFA

INGÉNIERIE, TECHNOLOGIE, LOGISTIQUE ET TRANSPORT
• Première tranche : 200 000 FCFA
• Deuxième tranche : 100 000 FCFA
• Total annuel : 300 000 FCFA

ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE
• Première tranche : 170 000 FCFA
• Deuxième tranche : 80 000 FCFA
• Total annuel : 250 000 FCFA

PROGRAMMES DE LICENCE
• École de santé : 390 000 FCFA
• École de commerce : 350 000 FCFA
• Éducation et communication : 350 000 FCFA
• Ingénierie et technologie : 390 000 FCFA
• Économie familiale, tourisme et hôtellerie : 350 000 FCFA

FRAIS D'INSCRIPTION
• Programmes HND : 25 000 FCFA
• Programmes de licence / master : 35 000 FCFA

L'école annonce également des bourses et des aides financières.

Rendez-vous au bureau de l'école pour confirmer le montant applicable à votre programme avant tout paiement.`,

    payment: `OÙ PAYER LES FRAIS DE SCOLARITÉ

Les frais de scolarité sont payés à JACCUL, la banque commerciale située dans le même bâtiment que l'école.

PROCÉDURE DE PAIEMENT :

1. Rendez-vous au bureau de l'école pour confirmer le montant à payer.
2. Demandez les instructions exactes de paiement.
3. Rendez-vous à JACCUL, la banque commerciale située dans le même bâtiment.
4. Effectuez le paiement selon les instructions reçues.
5. Conservez votre reçu bancaire.
6. Suivez les instructions de l'école pour confirmer votre paiement.

Confirmez toujours le montant et les informations de paiement auprès de l'école avant de payer.`,

    campuses: `LOCALISATION DES CAMPUS DE HEMIPT

Les localités indiquées sont :

1. BAFOUSSAM — CAMPUS A

Après SPC, au point de contrôle mixte, derrière la station-service New SIKA ENERGIE.

2. BAFOUSSAM — CAMPUS B

Après Total en Base, en face du bureau MTN à Djemoun, près du Yellow Storey.

3. MAGBA

En face de la gendarmerie de Magba.

Téléphone :
+237 680 78 59 56

4. FUNDONG

Fondation Chiafunkuin, en face de la Fundong Credit Union.

Téléphone :
+237 676 24 48 48

5. KUMBO

Kumbo figure parmi les localités de l'école. Contactez l'administration pour confirmer l'adresse exacte et les programmes disponibles.

Contactez l'école avant de vous déplacer si vous avez besoin d'itinéraires ou de confirmer votre campus.`,

    contacts: `COORDONNÉES GÉNÉRALES DE HEMIPT

NUMÉROS DE TÉLÉPHONE

• +237 675 283 496
• +237 672 317 975
• +237 671 89 12 89
• +237 676 66 09 61
• +237 678 981 122
• +237 675 221 182
• +237 675 104 940
• +237 651 42 72 04
• +237 691 933 667
• +237 651 708 999

CONTACTS DES CAMPUS

Magba :
+237 680 78 59 56

Fundong :
+237 676 24 48 48

ADRESSES E-MAIL

hemiptpolytechnic@gmail.com

info@hemiptuniversity.com

SITE WEB

https://hemiptuniversity.com

FACEBOOK

HEMIPT University Institute

Vous pouvez contacter l'école pour les inscriptions, les frais, les conditions d'admission et les programmes.`,

    scholarship: `BOURSES ET AIDES FINANCIÈRES

HEMIPT annonce les possibilités suivantes :

• Des bourses pouvant atteindre 50 %.
• Des bourses annoncées jusqu'à 250 000 FCFA.
• D'autres offres d'aide financière.

L'école annonce également des enseignants qualifiés, de bons ateliers et équipements, un centre de pratique biomédicale, des fermes pratiques et des incubateurs, une riche bibliothèque, le Wi-Fi gratuit et un environnement d'apprentissage convivial.

Rendez-vous au bureau de l'école pour connaître les conditions actuelles, les critères d'éligibilité, les montants et les procédures de demande.`,

    facilities: `INSTALLATIONS ET AVANTAGES DE HEMIPT

L'école annonce les avantages suivants :

• Wi-Fi gratuit
• Enseignants qualifiés
• Bons ateliers et équipements
• Centre de pratique biomédicale
• Fermes pratiques et incubateurs
• Riche bibliothèque
• Environnement convivial et collaboratif
• Institution guidée par Dieu

Les informations de l'école mentionnent aussi des possibilités de stage avec des universités partenaires au Canada, aux États-Unis, au Royaume-Uni et en Australie, ainsi qu'avec des ONG et des organisations gouvernementales.

Demandez à l'école quelles installations et possibilités sont disponibles pour votre programme et votre campus.`,

    library: `BIBLIOTHÈQUE DE HEMIPT

L'école annonce une riche bibliothèque parmi ses avantages.

Pour connaître l'emplacement exact, les heures d'ouverture, les conditions d'accès et les ressources disponibles, adressez-vous à l'administration de votre campus.`,

    classes: `TYPES DE COURS

Les formats de cours indiqués sont :

• Cours en présentiel
• Cours en ligne
• Formation en sandwich
• Cours programmés

Demandez à l'école quel format est disponible pour votre filière et votre niveau.`,

    duration: `DURÉE DES FORMATIONS

Les informations de l'école indiquent des durées de formation de :

• 12 mois
• 2 ans
• 3 ans

À la fin de la formation et des examens, les qualifications mentionnées comprennent le VND (Vocational National Diploma), le HND (Higher National Diploma), la licence ou le master, selon le programme.

Demandez au bureau de l'école de confirmer la durée et la qualification correspondant à votre programme.`,

    contact: `Vous pouvez contacter HEMIPT par les moyens suivants :

Téléphone :
+237 675 283 496
+237 672 317 975
+237 671 89 12 89
+237 676 66 09 61

E-mail :
hemiptpolytechnic@gmail.com
info@hemiptuniversity.com

Site web :
https://hemiptuniversity.com

Vous pouvez également vous rendre directement au bureau de l'école.`,

    website: `SITE WEB DE HEMIPT

Site web :
https://hemiptuniversity.com

Les informations de l'école indiquent que les étudiants peuvent s'inscrire sur le site web.

Vous pouvez aussi vous rendre au bureau de l'école pour obtenir de l'aide concernant l'inscription et l'admission.`,

    greeting: `Bonjour et bienvenue sur l'Assistant HEMIPT ! 🎓

Je peux vous renseigner sur les filières, l'inscription, les frais de scolarité, les paiements à JACCUL, les campus, les bourses et les contacts.

Que souhaitez-vous savoir ?`,

    thanks: `Je vous en prie ! 😊

Merci d'avoir utilisé l'Assistant HEMIPT.

Si vous avez besoin d'autres informations, posez-moi une autre question ou contactez le bureau de l'école.`
  }
};


/* =====================================================
   2. MATCH QUESTIONS TO THE CORRECT ANSWER
   ===================================================== */

const intents = [
  {
    id: "registrationFees",
    keys: [
      "registration fee", "registration fees", "registration cost",
      "frais inscription", "frais d inscription",
      "frais inscription hnd", "frais d admission"
    ]
  },

  {
    id: "payment",
    keys: [
      "jacc ul", "jaccul", "where do i pay", "where to pay",
      "where can i pay", "where is the bank", "which bank",
      "payment location", "pay my fees", "pay school fees",
      "how to pay", "bank payment", "payment procedure",
      "ou payer", "ou se trouve la banque", "quelle banque",
      "paiement", "payer les frais", "payer la scolarite",
      "comment payer", "banque"
    ]
  },

  {
    id: "registration",
    keys: [
      "how do i register", "how to register", "how can i register",
      "registration", "register", "enrol", "enroll",
      "how to apply", "admission requirements", "required documents",
      "comment m inscrire", "comment faire mon inscription",
      "comment s inscrire", "inscription", "inscrire",
      "documents necessaires", "conditions d admission"
    ]
  },

  {
    id: "fees",
    keys: [
      "school fees", "tuition fees", "tuition",
      "how much are the fees", "how much is school",
      "how much do i pay", "fee structure", "first instalment",
      "second instalment", "total tuition", "degree fees",
      "frais de scolarite", "frais scolaires", "combien coute",
      "combien coutent", "combien dois je payer",
      "barreme", "premiere tranche", "deuxieme tranche",
      "montant de la scolarite", "prix de la formation"
    ]
  },

  {
    id: "degrees",
    keys: [
      "bachelor degree", "bachelor's degree", "bachelors",
      "degree programmes", "degree programs", "master programme",
      "master's degree", "doctoral programme", "doctoral program",
      "phd", "licence", "licence professionnelle", "master",
      "doctorat", "programmes de licence", "programmes de master",
      "programme doctoral", "diplome universitaire"
    ]
  },

  {
    id: "vocational",
    keys: [
      "vocational", "vocational training", "tailoring",
      "secretariat", "computer maintenance", "cookery",
      "computerized accounting", "formation professionnelle",
      "couture", "secretariat", "maintenance informatique",
      "formation en informatique", "comptabilite informatisee"
    ]
  },

  {
    id: "health",
    keys: [
      "medical and biomedical", "nursing", "nursing assistance",
      "laboratory technician", "laboratory sciences",
      "pharmacy technology", "midwifery", "nutrition and dietetics",
      "sciences medicales", "sciences biomedicales",
      "soins infirmiers", "sage femme", "maieutique",
      "nutrition et dietetique", "technologie pharmaceutique",
      "laboratoire medical"
    ]
  },

  {
    id: "education",
    keys: [
      "education and communication", "special education",
      "educational management", "journalism", "didactics",
      "teacher grade 1", "education communication",
      "education et communication", "education specialisee",
      "gestion de l education", "journalisme", "didactique"
    ]
  },

  {
    id: "management",
    keys: [
      "management and business", "management assistant",
      "human resource management", "project management",
      "accountancy", "banking and finance",
      "logistics and transport", "gestion etudes commerciales",
      "assistant de gestion", "ressources humaines",
      "gestion de projet", "comptabilite", "banque et finance",
      "logistique et transport"
    ]
  },

  {
    id: "homeEconomics",
    keys: [
      "home economics", "tourism and hotel management",
      "bakery and food processing", "fashion and textiles",
      "tourism and travel agency", "hotel management",
      "catering", "economie familiale", "tourisme",
      "hotellerie", "boulangerie", "transformation alimentaire",
      "mode et textile", "agence de voyage", "restauration"
    ]
  },

  {
    id: "agriculture",
    keys: [
      "agricultural engineering", "crop production",
      "animal production", "agricultural technology",
      "agro pastoral", "agriculture", "genie agricole",
      "production vegetale", "production animale",
      "technologie agricole", "agropastoral"
    ]
  },

  {
    id: "engineering",
    keys: [
      "engineering and technology", "software engineering",
      "computer engineering", "civil engineering",
      "electrical engineering", "electronic engineering",
      "graphic and web designing", "petroleum and drilling",
      "genie logiciel", "genie informatique", "genie civil",
      "genie electrique", "genie electronique",
      "conception graphique", "developpement web",
      "petrole et forage", "ingenierie et technologie"
    ]
  },

  {
    id: "departments",
    keys: [
      "list all departments", "what are the departments",
      "which departments", "all specialities",
      "all specialties", "departments and specialities",
      "departments and programs", "departments and programmes",
      "what programmes does hemipt offer",
      "what programs does hemipt offer",
      "what courses does hemipt offer", "list of departments",
      "quels sont les departements", "liste des departements",
      "departements et specialites", "toutes les filieres",
      "quelles filieres propose hemipt",
      "quels programmes propose hemipt"
    ]
  },

  {
    id: "programs",
    keys: [
      "programmes", "programs", "available courses",
      "courses offered", "specialities", "specialties",
      "what can i study", "what do you offer",
      "filiere", "filieres", "formations",
      "quelles formations", "offre de formation",
      "que puis je etudier"
    ]
  },

  {
    id: "campuses",
    keys: [
      "campus", "campuses", "school location", "school address",
      "where is the school", "where is hemipt",
      "where are the campuses", "directions to the school",
      "bafoussam", "fundong", "magba", "kumbo", "djemoun",
      "ou se trouve l ecole", "ou se trouve hemipt",
      "localisation", "adresse de l ecole", "campus de"
    ]
  },

  {
    id: "contacts",
    keys: [
      "contact details", "contact information", "phone number",
      "telephone number", "email address", "school email",
      "school telephone", "school phone", "call the school",
      "how can i contact", "contact details hemipt",
      "numero de telephone", "coordonnees", "adresse email",
      "contacter l ecole", "telephone de l ecole"
    ]
  },

  {
    id: "scholarship",
    keys: [
      "scholarship", "scholarships", "financial aid",
      "financial assistance", "scholarship application",
      "how to get a scholarship", "50 percent scholarship",
      "250000 scholarship", "bourse", "bourses",
      "aide financiere", "demande de bourse",
      "comment obtenir une bourse"
    ]
  },

  {
    id: "library",
    keys: [
      "library", "school library", "where is the library",
      "bibliotheque", "ou est la bibliotheque"
    ]
  },

  {
    id: "facilities",
    keys: [
      "facilities", "school facilities", "school advantages",
      "free wifi", "wi fi", "workshops", "equipment",
      "biomedical centre", "practising centre",
      "installations", "avantages", "equipements",
      "wifi gratuit", "centre de pratique biomedicale"
    ]
  },

  {
    id: "classes",
    keys: [
      "online classes", "physical classes", "sandwich classes",
      "class formats", "nature of classes", "mode of study",
      "cours en ligne", "cours en presentiel",
      "types de cours", "format des cours", "formation en sandwich"
    ]
  },

  {
    id: "duration",
    keys: [
      "duration", "how long is the training",
      "how many years", "how long does it take",
      "12 months", "training duration",
      "duree de formation", "combien d annees",
      "duree des etudes", "combien de temps"
    ]
  },

  {
    id: "website",
    keys: [
      "website", "school website", "web address",
      "online registration", "website address",
      "site web", "site internet", "inscription en ligne"
    ]
  },

  {
    id: "about",
    keys: [
      "about hemipt", "what is hemipt", "full name",
      "what does hemipt stand for", "university of bamenda",
      "school motto", "school slogan", "affiliation",
      "a propos de hemipt", "nom complet",
      "que signifie hemipt", "devise de l ecole",
      "universite de bamenda"
    ]
  },

  {
    id: "greeting",
    keys: [
      "hello", "hi", "good morning", "good afternoon",
      "good evening", "hey", "bonjour", "bonsoir",
      "salut", "coucou"
    ]
  },

  {
    id: "thanks",
    keys: [
      "thank you", "thanks", "thank you very much",
      "merci", "merci beaucoup"
    ]
  }
];


/* =====================================================
   3. SELECT HTML ELEMENTS
   ===================================================== */

const languageSelect = document.getElementById("language");
const topicsContainer = document.getElementById("topics");
const messagesContainer = document.getElementById("chat-messages");
const quickQuestionsContainer =
  document.getElementById("quick-questions");

const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-chat");

const welcomeTitle = document.getElementById("welcome-title");
const welcomeText = document.getElementById("welcome-text");
const eyebrow = document.getElementById("eyebrow");
const chatTitle = document.getElementById("chat-title");
const statusText = document.getElementById("status-text");
const suggestionLabel = document.getElementById("suggestion-label");
const infoNote = document.getElementById("info-note");
const chatFooter = document.getElementById("chat-footer");

let currentLanguage = "en";


/* =====================================================
   4. NORMALIZE TEXT
   This handles accents and punctuation.
   ===================================================== */

function normalize(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/* =====================================================
   5. DISPLAY CHAT MESSAGES
   ===================================================== */

function addMessage(text, sender) {
  const wrapper = document.createElement("div");

  wrapper.className = sender === "user"
    ? "message user-message"
    : "message bot-message";

  const paragraph = document.createElement("p");

  // textContent safely displays the answer as plain text.
  paragraph.textContent = text;

  wrapper.appendChild(paragraph);
  messagesContainer.appendChild(wrapper);

 requestAnimationFrame(() => {
    if (sender === "bot") {
        messagesContainer.scrollTop =
            wrapper.offsetTop - messagesContainer.offsetTop;
    } else if (sender === "user") {
        messagesContainer.scrollTop =
            messagesContainer.scrollHeight;
    }
});


}


/* =====================================================
   6. FIND THE MOST RELEVANT ANSWER
   ===================================================== */

function findAnswer(question) {
  const cleanQuestion = normalize(question);

  if (!cleanQuestion) {
    return knowledge[currentLanguage].fallback;
  }

  let bestIntent = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;

    for (const rawKeyword of intent.keys) {
      const keyword = normalize(rawKeyword);

      if (!keyword) continue;

      // Exact matches receive the highest score.
      if (cleanQuestion === keyword) {
        score += 20;
      }

      // Match a keyword or phrase inside the question.
      else if (
        cleanQuestion.includes(" " + keyword + " ") ||
        cleanQuestion.startsWith(keyword + " ") ||
        cleanQuestion.endsWith(" " + keyword)
      ) {
        score += keyword.split(" ").length * 4;
      }

      // Match longer phrases inside a larger question.
      else if (cleanQuestion.includes(keyword)) {
        score += keyword.split(" ").length * 3;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && bestScore > 0) {
    return knowledge[currentLanguage][bestIntent.id];
  }

  return knowledge[currentLanguage].fallback;
}


/* =====================================================
   7. ASK A QUESTION
   ===================================================== */

function askQuestion(question) {
  const text = String(question || "").trim();

  if (!text) return;

  addMessage(text, "user");

  const answer = findAnswer(text);

  addMessage(answer, "bot");

  input.value = "";
  input.focus();
}


/* =====================================================
   8. HANDLE THE CHAT FORM
   ===================================================== */

form.addEventListener("submit", function(event) {
  event.preventDefault();
  askQuestion(input.value);
});


/* =====================================================
   9. DISPLAY DEPARTMENT AND TOPIC BUTTONS
   ===================================================== */

function renderTopics() {
  topicsContainer.replaceChildren();

  knowledge[currentLanguage].topics.forEach(topic => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "topic-button";

    const icon = document.createElement("span");

    icon.className = "topic-icon";
    icon.textContent = topic.icon;
    icon.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");

    label.className = "topic-label";
    label.textContent = topic.label;

    button.appendChild(icon);
    button.appendChild(label);

    button.addEventListener("click", function() {
      askQuestion(topic.question);
    });

    topicsContainer.appendChild(button);
  });
}


/* =====================================================
   10. DISPLAY QUICK QUESTIONS
   ===================================================== */

function renderQuickQuestions() {
  quickQuestionsContainer.replaceChildren();

  knowledge[currentLanguage].quick.forEach(question => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quick-button";
    button.textContent = question;

    button.addEventListener("click", function() {
      askQuestion(question);
    });

    quickQuestionsContainer.appendChild(button);
  });
}


/* =====================================================
   11. CHANGE LANGUAGE
   ===================================================== */

function changeLanguage() {
  currentLanguage = languageSelect.value;

  const data = knowledge[currentLanguage];

  document.documentElement.lang = currentLanguage;

  welcomeTitle.textContent = data.welcomeTitle;
  welcomeText.textContent = data.welcomeText;
  eyebrow.textContent = data.eyebrow;
  chatTitle.textContent = data.chatTitle;
  statusText.textContent = data.ready;
  input.placeholder = data.placeholder;
  sendButton.textContent = data.send;
  suggestionLabel.textContent = data.tryAsking;
  infoNote.textContent = data.notice;
  chatFooter.textContent = data.footer;

  renderTopics();
  renderQuickQuestions();
}

languageSelect.addEventListener("change", changeLanguage);


/* =====================================================
   12. CLEAR THE CONVERSATION
   ===================================================== */

function resetChat() {
  messagesContainer.replaceChildren();

  addMessage(
    knowledge[currentLanguage].welcome,
    "bot"
  );
}

clearButton.addEventListener("click", resetChat);


/* =====================================================
   13. START THE CHATBOT
   ===================================================== */

function startChatbot() {
  changeLanguage();
  resetChat();
}

startChatbot();
