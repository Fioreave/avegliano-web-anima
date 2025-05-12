import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en" | "ca" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, values?: Record<string, string>) => string;
};

const translations = {
  es: {
    successTitle: "Mensaje enviado",
    successMessage: "Gracias por contactarme. Te responderé pronto.",
    errorTitle: "Error",
    errorMessage: "No se pudo enviar el mensaje. Inténtalo más tarde.",
    // Navbar
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    services: "Servicios",
    contact: "Contacto",

    // Hero
    greeting: "¡Hola! Soy",
    role: "Diseñadora Gráfica & Desarrolladora Web",
    cta: "Conóceme",

    // About
    aboutTitle: "Sobre Mí",
    aboutDescription:
      "Soy una diseñadora gráfica y desarrolladora web apasionada por crear experiencias digitales atractivas y funcionales. Me especializo en diseño de interfaces y desarrollo web utilizando tecnologías modernas.",
    birthDate: "Fecha de nacimiento:",
    birthDateValue: "23 de Octubre de 2001",

    // Portfolio
    portfolioTitle: "Portfolio",
    designerDeveloper: "Diseñadora & Desarrolladora",
    portfolioDescription:
      "Soy una diseñadora y desarrolladora apasionada por crear experiencias digitales únicas y funcionales.",
    viewMore: "Ver más proyectos",
    myProjects: "Mis Trabajos",

    // Services
    servicesDescription:
      "Ofrecemos diferentes soluciones adaptadas a tus necesidades específicas",

    // Landing Page Service
    landingPage: "Landing Page",
    fromPrice: "Desde {price}",
    landingPageDescription:
      "Causa una gran primera impresión con una página moderna, atractiva y perfectamente diseñada para resaltar tu presencia online. Creamos experiencias digitales únicas que capturan la atención y generan un impacto duradero.",
    landingPageFeature1: "1 página",
    landingPageFeature2: "Hasta 4 secciones",
    landingPageFeature3: "100% Responsivo",
    landingPageFeature4: "Diseño personalizado",
    landingPageFeature5: "Optimización SEO",
    landingPageFeature6: "Formulario de contacto integrado",
    landingPageFeature7: "Botón de Whatsapp",
    landingPageFeature8: "Integración con redes sociales",
    landingPageFeature9: "Soporte técnico gratuito por 90 días",

    // Portfolio Service
    portfolio: "Ecommerce",
    portfolioServiceDescription:
      "Muestra tu talento al mundo con un diseño atractivo y profesional. Somos capaces de diseñar una web que hable por ti, resalte tu trabajo y capte la atención de quienes buscan tu creatividad. Crea un espacio único donde cada proyecto cuente su historia y refleje tu estilo, habilidades y pasión por lo que haces.",
    portfolioFeature1: "Hasta 2 páginas",
    portfolioFeature2: "100% Responsivo",
    portfolioFeature3: "Diseño personalizado",
    portfolioFeature4: "Optimización SEO",
    portfolioFeature5: "Formulario de contacto integrado",
    portfolioFeature6: "Botón de Whatsapp",
    portfolioFeature7: "Integración con redes sociales",

    // Corporate Web Service
    corporateWeb: "Web corporativa",
    corporateWebDescription:
      "Haz que tu empresa se destaque de la competencia con una web profesional, impactante y diseñada para atraer confianza. Diseñamos plataformas visualmente atractivas que presentan productos o servicios de manera clara, resaltando lo mejor de tu negocio y destacando tu identidad en el mundo digital.",
    corporateWebFeature1: "Hasta 4 páginas",
    corporateWebFeature2: "100% Responsivo",
    corporateWebFeature3: "Diseño personalizado",
    corporateWebFeature4: "Optimización SEO",
    corporateWebFeature5: "Formulario de contacto integrado",
    corporateWebFeature6: "Botón de Whatsapp",
    corporateWebFeature7: "Integración con redes sociales",

    // Custom Software Service
    customSoftware: "Software a medida",
    consultPrice: "Consultar precio",
    customSoftwareDescription:
      "Soluciones digitales diseñadas exclusivamente para tu negocio. Optimiza procesos, ahorra tiempo y potencia tu crecimiento. Desarrollamos herramientas a la medida de tus necesidades, que se adaptan perfectamente a tus operaciones y mejoran la eficiencia de tu empresa.",
    customSoftwareFeature1: "Análisis detallado de necesidades empresariales",
    customSoftwareFeature2: "Diseño y optimización de bases de datos",
    customSoftwareFeature3:
      "Desarrollo de software con funcionalidades avanzadas",
    customSoftwareFeature4: "Integración con sistemas existentes",
    customSoftwareFeature5: "Consultoría en transformación digital",

    // Work Process
    workProcess: "Forma de trabajo",
    workProcessDescription:
      "Nuestro proceso está diseñado para asegurar resultados excepcionales",

    // Work Process Steps
    workProcessStep1Title: "Concepto y Presupuesto",
    workProcessStep1Description:
      "Discutimos las primeras ideas durante una breve reunión, donde definimos el alcance del proyecto de acuerdo a tus necesidades, preferencias y presupuesto.",
    workProcessStep2Title: "Propuesta de Diseño",
    workProcessStep2Description:
      "Estudiamos tu empresa y luego te presentamos una idea de diseño profesional y apropiada para tu negocio.",
    workProcessStep3Title: "Diseño y desarrollo",
    workProcessStep3Description:
      "Una vez que definimos tu diseño, comenzamos a trabajar en la creación de tu sitio web.",
    workProcessStep4Title: "Revisión y acabado de Diseño",
    workProcessStep4Description:
      "Realizamos los cambios finales y procesamos el contenido definitivo, incluyendo textos y fotos.",
    workProcessStep5Title: "Fin del Proyecto",
    workProcessStep5Description:
      "Lanzamos tu sitio web al mundo digital, garantizando que cada detalle esté perfectamente configurado y optimizado para ofrecer un rendimiento excepcional y una presencia online destacada.",

    // Satisfaction Guarantee
    satisfactionGuarantee: "Garantía de Satisfacción",
    satisfactionGuaranteeDescription:
      "Entendemos que la decisión de invertir en una página web es importante. Es normal sentir cierta inquietud sobre el resultado final. Por eso, te ofrecemos lo siguiente:",
    satisfactionFeature1:
      "Pago del 50% al inicio y el resto cuando la web esté terminada",
    satisfactionFeature2: "Revisión de la web antes de pagar el saldo",
    satisfactionFeature3:
      "90 días de soporte técnico incluido después de la entrega",

    // Common buttons
    requestQuote: "Solicitar cotización",

    // Education
    educationTitle: "Educación",
    highSchool: "Instituto Ceferino Namuncurá",
    highSchoolDegree: "Bachillerato en Cs. Sociales & Humanidades",
    highSchoolDuration: "Duración: 2015-2019",
    designInstitute: "Instituto Tecnológico ORT",
    designDegree:
      "Técnico Superior en Diseño Gráfico & Desarrollo de interfaces Gráficas",
    designDuration: "Duración: 2021 - Junio 2023",
    university: "Universidad Tecnológica Nacional UTN",
    universityDegree: "Professional FullStack Developer",
    universityDuration: "Duración: Agosto 2023 - Enero 2024",

    // Experience
    experienceTitle: "Experiencia Laboral",
    company1: "Full Sites",
    company1Duration: "Octubre 2022 - Enero 2024",
    company1Role: "Desarrollo de páginas web",
    company1Description1: "Diseño de interfaces web.",
    company1Description2: "Desarrollo de código.",
    company1Description3: "Utilización de frameworks.",

    company2: "Diseño & Desarrollo Web Freelance",
    company2Duration: "2022 - Presente",
    company2Role: "Diseño & Desarrollo de Interfaces",
    company2Description1: "Desarrollo de código.",
    company2Description2: "Creación y mejora de interfaces de usuario.",
    company2Description3: "Implementación de diseños responsivos.",

    company3: "BDR Informática",
    company3Duration: "Abril 2024 - Presente",
    company3Role: "Diseño & Desarrollo de Interfaces",
    company3Description1:
      "Creación y mantenimiento de páginas web tanto en CMS como con código.",
    company3Description2: "Creación y mejora de interfaces de usuario.",
    company3Description3: "Implementación de diseños responsivos.",

    // Contact
    contactTitle: "Contacto",
    contactDescription:
      "Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en contactarme.",
    phone: "Teléfono",
    email: "Correo electrónico",
    behance: "Behance",
    sendMessage: "Enviar mensaje",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "Tu correo electrónico",
    messageLabel: "Mensaje",
    messagePlaceholder: "Tu mensaje",
    submit: "Enviar",

    // Footer
    footerRights: "Todos los derechos reservados",
    designedBy: "Diseñado por Fiorella Avegliano",
  },

  en: {
    // Navbar
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    services: "Services",
    contact: "Contact",

    // Hero
    greeting: "Hello! I am",
    role: "Graphic Designer & Web Developer",
    cta: "About me",

    // About
    aboutTitle: "About Me",
    aboutDescription:
      "I am a graphic designer and web developer passionate about creating engaging and functional digital experiences. I specialize in interface design and web development using modern technologies.",
    birthDate: "Birth date:",
    birthDateValue: "October 23, 2001",

    // Portfolio
    portfolioTitle: "Portfolio",
    designerDeveloper: "Designer & Developer",
    portfolioDescription:
      "I am a designer and developer passionate about creating unique and functional digital experiences.",
    viewMore: "View more projects",
    myProjects: "My Projects",

    // Services
    servicesDescription:
      "We offer different solutions tailored to your specific needs",

    // Landing Page Service
    landingPage: "Landing Page",
    fromPrice: "From {price}",
    landingPageDescription:
      "Make a great first impression with a modern, attractive page perfectly designed to highlight your online presence. We create unique digital experiences that capture attention and generate a lasting impact.",
    landingPageFeature1: "1 page",
    landingPageFeature2: "Up to 4 sections",
    landingPageFeature3: "100% Responsive",
    landingPageFeature4: "Custom design",
    landingPageFeature5: "SEO optimization",
    landingPageFeature6: "Integrated contact form",
    landingPageFeature7: "Whatsapp button",
    landingPageFeature8: "Social media integration",
    landingPageFeature9: "Free technical support for 90 days",

    // Portfolio Service
    portfolio: "Portfolio",
    portfolioServiceDescription:
      "Show your talent to the world with an attractive and professional design. We are capable of designing a website that speaks for you, highlights your work and captures the attention of those seeking your creativity. Create a unique space where each project tells its story and reflects your style, skills and passion for what you do.",
    portfolioFeature1: "Up to 2 pages",
    portfolioFeature2: "100% Responsive",
    portfolioFeature3: "Custom design",
    portfolioFeature4: "SEO optimization",
    portfolioFeature5: "Integrated contact form",
    portfolioFeature6: "Whatsapp button",
    portfolioFeature7: "Social media integration",

    // Corporate Web Service
    corporateWeb: "Corporate Website",
    corporateWebDescription:
      "Make your company stand out from the competition with a professional, impactful website designed to attract trust. We design visually attractive platforms that present products or services clearly, highlighting the best of your business and enhancing your identity in the digital world.",
    corporateWebFeature1: "Up to 4 pages",
    corporateWebFeature2: "100% Responsive",
    corporateWebFeature3: "Custom design",
    corporateWebFeature4: "SEO optimization",
    corporateWebFeature5: "Integrated contact form",
    corporateWebFeature6: "Whatsapp button",
    corporateWebFeature7: "Social media integration",

    // Custom Software Service
    customSoftware: "Custom Software",
    consultPrice: "Contact for pricing",
    customSoftwareDescription:
      "Digital solutions designed exclusively for your business. Optimize processes, save time and boost your growth. We develop tools tailored to your needs, which perfectly adapt to your operations and improve the efficiency of your company.",
    customSoftwareFeature1: "Detailed business needs analysis",
    customSoftwareFeature2: "Database design and optimization",
    customSoftwareFeature3: "Software development with advanced features",
    customSoftwareFeature4: "Integration with existing systems",
    customSoftwareFeature5: "Digital transformation consulting",

    // Work Process
    workProcess: "Work Process",
    workProcessDescription:
      "Our process is designed to ensure exceptional results",

    // Work Process Steps
    workProcessStep1Title: "Concept and Budget",
    workProcessStep1Description:
      "We discuss the initial ideas during a brief meeting, where we define the scope of the project according to your needs, preferences and budget.",
    workProcessStep2Title: "Design Proposal",
    workProcessStep2Description:
      "We study your company and then present you with a professional design idea appropriate for your business.",
    workProcessStep3Title: "Design and Development",
    workProcessStep3Description:
      "Once we define your design, we begin working on creating your website.",
    workProcessStep4Title: "Design Review and Finalization",
    workProcessStep4Description:
      "We make the final changes and process the definitive content, including texts and photos.",
    workProcessStep5Title: "Project Completion",
    workProcessStep5Description:
      "We launch your website to the digital world, ensuring that every detail is perfectly configured and optimized to offer exceptional performance and a prominent online presence.",

    // Satisfaction Guarantee
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDescription:
      "We understand that the decision to invest in a website is important. It's normal to feel some concern about the final result. Therefore, we offer you the following:",
    satisfactionFeature1:
      "50% payment at the start and the rest when the website is finished",
    satisfactionFeature2: "Review of the website before paying the balance",
    satisfactionFeature3:
      "90 days of technical support included after delivery",

    // Common buttons
    requestQuote: "Request a quote",

    // Education
    educationTitle: "Education",
    highSchool: "Ceferino Namuncurá Institute",
    highSchoolDegree: "Bachelor in Social Sciences & Humanities",
    highSchoolDuration: "Duration: 2015-2019",
    designInstitute: "ORT Technology Institute",
    designDegree:
      "Advanced Technician in Graphic Design & Graphic Interface Development",
    designDuration: "Duration: 2021 - June 2023",
    university: "National Technological University UTN",
    universityDegree: "Professional FullStack Developer",
    universityDuration: "Duration: August 2023 - January 2024",

    // Experience
    experienceTitle: "Work Experience",
    company1: "Full Sites",
    company1Duration: "October 2022 - January 2024",
    company1Role: "Web Development",
    company1Description1: "Web interface design.",
    company1Description2: "Code development.",
    company1Description3: "Use of frameworks.",

    company2: "Freelance Web Design & Development",
    company2Duration: "2022 - Present",
    company2Role: "Interface Design & Development",
    company2Description1: "Code development.",
    company2Description2: "Creation and improvement of user interfaces.",
    company2Description3: "Implementation of responsive designs.",

    company3: "BDR Informatics",
    company3Duration: "April 2024 - Present",
    company3Role: "Interface Design & Development",
    company3Description1:
      "Creation and maintenance of web pages both in CMS and with code.",
    company3Description2: "Creation and improvement of user interfaces.",
    company3Description3: "Implementation of responsive designs.",

    // Contact
    contactTitle: "Contact",
    contactDescription:
      "If you are interested in working with me or have any questions, do not hesitate to contact me.",
    phone: "Phone",
    email: "Email",
    behance: "Behance",
    sendMessage: "Send message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "Your email",
    messageLabel: "Message",
    messagePlaceholder: "Your message",
    submit: "Submit",

    // Footer
    footerRights: "All rights reserved",
    designedBy: "Designed by Fiorella Avegliano",
  },

  ca: {
    // Navbar
    home: "Inici",
    about: "Sobre mi",
    experience: "Experiència",
    education: "Educació",
    services: "Serveis",
    contact: "Contacte",

    // Hero
    greeting: "Hola! Soc",
    role: "Dissenyadora Gràfica & Desenvolupadora Web",
    cta: "Coneix-me",

    // About
    aboutTitle: "Sobre Mi",
    aboutDescription:
      "Soc una dissenyadora gràfica i desenvolupadora web apassionada per crear experiències digitals atractives i funcionals. M'especialitzo en disseny d'interfícies i desenvolupament web utilitzant tecnologies modernes.",
    birthDate: "Data de naixement:",
    birthDateValue: "23 d'Octubre de 2001",

    // Portfolio
    portfolioTitle: "Portfolio",
    designerDeveloper: "Dissenyadora & Desenvolupadora",
    portfolioDescription:
      "Soc una dissenyadora i desenvolupadora apassionada per crear experiències digitals úniques i funcionals.",
    viewMore: "Veure més projectes",
    myProjects: "Els Meus Treballs",

    // Services
    servicesDescription:
      "Oferim diferents solucions adaptades a les teves necessitats específiques",

    // Landing Page Service
    landingPage: "Landing Page",
    fromPrice: "Des de {price}",
    landingPageDescription:
      "Causa una gran primera impressió amb una pàgina moderna, atractiva i perfectament dissenyada per destacar la teva presència en línia. Creem experiències digitals úniques que capturen l'atenció i generen un impacte durador.",
    landingPageFeature1: "1 pàgina",
    landingPageFeature2: "Fins a 4 seccions",
    landingPageFeature3: "100% Responsiu",
    landingPageFeature4: "Disseny personalitzat",
    landingPageFeature5: "Optimització SEO",
    landingPageFeature6: "Formulari de contacte integrat",
    landingPageFeature7: "Botó de Whatsapp",
    landingPageFeature8: "Integració amb xarxes socials",
    landingPageFeature9: "Suport tècnic gratuït per 90 dies",

    // Portfolio Service
    portfolio: "Portfolio",
    portfolioServiceDescription:
      "Mostra el teu talent al món amb un disseny atractiu i professional. Som capaços de dissenyar una web que parli per tu, destaqui el teu treball i capti l'atenció dels que busquen la teva creativitat. Crea un espai únic on cada projecte expliqui la seva història i reflecteixi el teu estil, habilitats i passió pel que fas.",
    portfolioFeature1: "Fins a 2 pàgines",
    portfolioFeature2: "100% Responsiu",
    portfolioFeature3: "Disseny personalitzat",
    portfolioFeature4: "Optimització SEO",
    portfolioFeature5: "Formulari de contacte integrat",
    portfolioFeature6: "Botó de Whatsapp",
    portfolioFeature7: "Integració amb xarxes socials",

    // Corporate Web Service
    corporateWeb: "Web corporativa",
    corporateWebDescription:
      "Fes que la teva empresa destaqui de la competència amb una web professional, impactant i dissenyada per atraure confiança. Dissenyem plataformes visualment atractives que presenten productes o serveis de manera clara, ressaltant el millor del teu negoci i destacant la teva identitat en el món digital.",
    corporateWebFeature1: "Fins a 4 pàgines",
    corporateWebFeature2: "100% Responsiu",
    corporateWebFeature3: "Disseny personalitzat",
    corporateWebFeature4: "Optimització SEO",
    corporateWebFeature5: "Formulari de contacte integrat",
    corporateWebFeature6: "Botó de Whatsapp",
    corporateWebFeature7: "Integració amb xarxes socials",

    // Custom Software Service
    customSoftware: "Software a mida",
    consultPrice: "Consultar preu",
    customSoftwareDescription:
      "Solucions digitals dissenyades exclusivament per al teu negoci. Optimitza processos, estalvia temps i potencia el teu creixement. Desenvolupem eines a la mida de les teves necessitats, que s'adapten perfectament a les teves operacions i milloren l'eficiència de la teva empresa.",
    customSoftwareFeature1: "Anàlisi detallat de necessitats empresarials",
    customSoftwareFeature2: "Disseny i optimització de bases de dades",
    customSoftwareFeature3:
      "Desenvolupament de software amb funcionalitats avançades",
    customSoftwareFeature4: "Integració amb sistemes existents",
    customSoftwareFeature5: "Consultoria en transformació digital",

    // Work Process
    workProcess: "Forma de treball",
    workProcessDescription:
      "El nostre procés està dissenyat per assegurar resultats excepcionals",

    // Work Process Steps
    workProcessStep1Title: "Concepte i Pressupost",
    workProcessStep1Description:
      "Discutim les primeres idees durant una breu reunió, on definim l'abast del projecte d'acord a les teves necessitats, preferències i pressupost.",
    workProcessStep2Title: "Proposta de Disseny",
    workProcessStep2Description:
      "Estudiem la teva empresa i després et presentem una idea de disseny professional i apropiada per al teu negoci.",
    workProcessStep3Title: "Disseny i desenvolupament",
    workProcessStep3Description:
      "Una vegada que definim el teu disseny, comencem a treballar en la creació del teu lloc web.",
    workProcessStep4Title: "Revisió i acabat de Disseny",
    workProcessStep4Description:
      "Realitzem els canvis finals i processem el contingut definitiu, incloent textos i fotos.",
    workProcessStep5Title: "Fi del Projecte",
    workProcessStep5Description:
      "Llancem el teu lloc web al món digital, garantint que cada detall estigui perfectament configurat i optimitzat per oferir un rendiment excepcional i una presència en línia destacada.",

    // Satisfaction Guarantee
    satisfactionGuarantee: "Garantia de Satisfacció",
    satisfactionGuaranteeDescription:
      "Entenem que la decisió d'invertir en una pàgina web és important. És normal sentir certa inquietud sobre el resultat final. Per això, t'oferim el següent:",
    satisfactionFeature1:
      "Pagament del 50% a l'inici i la resta quan la web estigui acabada",
    satisfactionFeature2: "Revisió de la web abans de pagar el saldo",
    satisfactionFeature3:
      "90 dies de suport tècnic inclòs després del lliurament",

    // Common buttons
    requestQuote: "Sol·licitar pressupost",

    // Education
    educationTitle: "Educació",
    highSchool: "Institut Ceferino Namuncurá",
    highSchoolDegree: "Batxillerat en Cs. Socials & Humanitats",
    highSchoolDuration: "Duració: 2015-2019",
    designInstitute: "Institut Tecnològic ORT",
    designDegree:
      "Tècnic Superior en Disseny Gràfic & Desenvolupament d'interfícies Gràfiques",
    designDuration: "Duració: 2021 - Juny 2023",
    university: "Universitat Tecnològica Nacional UTN",
    universityDegree: "Professional FullStack Developer",
    universityDuration: "Duració: Agost 2023 - Gener 2024",

    // Experience
    experienceTitle: "Experiència Laboral",
    company1: "Full Sites",
    company1Duration: "Octubre 2022 - Gener 2024",
    company1Role: "Desenvolupament de pàgines web",
    company1Description1: "Disseny d'interfícies web.",
    company1Description2: "Desenvolupament de codi.",
    company1Description3: "Utilització de frameworks.",

    company2: "Disseny & Desenvolupament Web Freelance",
    company2Duration: "2022 - Present",
    company2Role: "Disseny & Desenvolupament d'Interfícies",
    company2Description1: "Desenvolupament de codi.",
    company2Description2: "Creació i millora d'interfícies d'usuari.",
    company2Description3: "Implementació de dissenys responsivos.",

    company3: "BDR Informàtica",
    company3Duration: "Abril 2024 - Present",
    company3Role: "Disseny & Desenvolupament d'Interfícies",
    company3Description1:
      "Creació i manteniment de pàgines web tant en CMS com amb codi.",
    company3Description2: "Creació i millora d'interfícies d'usuari.",
    company3Description3: "Implementació de dissenys responsivos.",

    // Contact
    contactTitle: "Contacte",
    contactDescription:
      "Si estàs interessat en treballar amb mi o tens alguna pregunta, no dubtis en contactar-me.",
    phone: "Telèfon",
    email: "Correu electrònic",
    behance: "Behance",
    sendMessage: "Enviar missatge",
    nameLabel: "Nom",
    namePlaceholder: "El teu nom",
    emailLabel: "Correu electrònic",
    emailPlaceholder: "El teu correu electrònic",
    messageLabel: "Missatge",
    messagePlaceholder: "El teu missatge",
    submit: "Enviar",

    // Footer
    footerRights: "Tots els drets reservats",
    designedBy: "Dissenyat per Fiorella Avegliano",
  },

  fr: {
    // Navbar
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    education: "Éducation",
    services: "Services",
    contact: "Contact",

    // Hero
    greeting: "Bonjour! Je suis",
    role: "Designer Graphique & Développeuse Web",
    cta: "À propos de moi",

    // About
    aboutTitle: "À propos de moi",
    aboutDescription:
      "Je suis une designer graphique et développeuse web passionnée par la création d'expériences numériques attrayantes et fonctionnelles. Je me spécialise dans la conception d'interfaces et le développement web utilisant des technologies modernes.",
    birthDate: "Date de naissance:",
    birthDateValue: "23 Octobre 2001",

    // Portfolio
    portfolioTitle: "Portfolio",
    designerDeveloper: "Designer & Développeuse",
    portfolioDescription:
      "Je suis une designer et développeuse passionnée par la création d'expériences numériques uniques et fonctionnelles.",
    viewMore: "Voir plus de projets",
    myProjects: "Mes Travaux",

    // Services
    servicesDescription:
      "Nous proposons différentes solutions adaptées à vos besoins spécifiques",

    // Landing Page Service
    landingPage: "Landing Page",
    fromPrice: "À partir de {price}",
    landingPageDescription:
      "Faites une excellente première impression avec une page moderne, attrayante et parfaitement conçue pour mettre en valeur votre présence en ligne. Nous créons des expériences numériques uniques qui captent l'attention et génèrent un impact durable.",
    landingPageFeature1: "1 page",
    landingPageFeature2: "Jusqu'à 4 sections",
    landingPageFeature3: "100% Responsive",
    landingPageFeature4: "Design personnalisé",
    landingPageFeature5: "Optimisation SEO",
    landingPageFeature6: "Formulaire de contact intégré",
    landingPageFeature7: "Bouton Whatsapp",
    landingPageFeature8: "Intégration aux réseaux sociaux",
    landingPageFeature9: "Support technique gratuit pendant 90 jours",

    // Portfolio Service
    portfolio: "Portfolio",
    portfolioServiceDescription:
      "Montrez votre talent au monde avec un design attrayant et professionnel. Nous sommes capables de concevoir un site web qui parle pour vous, met en valeur votre travail et capte l'attention de ceux qui recherchent votre créativité. Créez un espace unique où chaque projet raconte son histoire et reflète votre style, vos compétences et votre passion pour ce que vous faites.",
    portfolioFeature1: "Jusqu'à 2 pages",
    portfolioFeature2: "100% Responsive",
    portfolioFeature3: "Design personnalisé",
    portfolioFeature4: "Optimisation SEO",
    portfolioFeature5: "Formulaire de contact intégré",
    portfolioFeature6: "Bouton Whatsapp",
    portfolioFeature7: "Intégration aux réseaux sociaux",

    // Corporate Web Service
    corporateWeb: "Site web d'entreprise",
    corporateWebDescription:
      "Faites en sorte que votre entreprise se démarque de la concurrence avec un site web professionnel, percutant et conçu pour attirer la confiance. Nous concevons des plateformes visuellement attrayantes qui présentent clairement les produits ou services, mettant en valeur le meilleur de votre entreprise et soulignant votre identité dans le monde numérique.",
    corporateWebFeature1: "Jusqu'à 4 pages",
    corporateWebFeature2: "100% Responsive",
    corporateWebFeature3: "Design personnalisé",
    corporateWebFeature4: "Optimisation SEO",
    corporateWebFeature5: "Formulaire de contact intégré",
    corporateWebFeature6: "Bouton Whatsapp",
    corporateWebFeature7: "Intégration aux réseaux sociaux",

    // Custom Software Service
    customSoftware: "Logiciel sur mesure",
    consultPrice: "Prix sur demande",
    customSoftwareDescription:
      "Solutions numériques conçues exclusivement pour votre entreprise. Optimisez les processus, économisez du temps et stimulez votre croissance. Nous développons des outils adaptés à vos besoins, qui s'intègrent parfaitement à vos opérations et améliorent l'efficacité de votre entreprise.",
    customSoftwareFeature1: "Analyse détaillée des besoins de l'entreprise",
    customSoftwareFeature2: "Conception et optimisation de bases de données",
    customSoftwareFeature3:
      "Développement de logiciels avec fonctionnalités avancées",
    customSoftwareFeature4: "Intégration avec les systèmes existants",
    customSoftwareFeature5: "Conseil en transformation numérique",

    // Work Process
    workProcess: "Méthode de travail",
    workProcessDescription:
      "Notre processus est conçu pour assurer des résultats exceptionnels",

    // Work Process Steps
    workProcessStep1Title: "Concept et Budget",
    workProcessStep1Description:
      "Nous discutons des premières idées lors d'une brève réunion, où nous définissons la portée du projet en fonction de vos besoins, préférences et budget.",
    workProcessStep2Title: "Proposition de Design",
    workProcessStep2Description:
      "Nous étudions votre entreprise puis vous présentons une idée de design professionnelle et appropriée pour votre entreprise.",
    workProcessStep3Title: "Design et développement",
    workProcessStep3Description:
      "Une fois que nous avons défini votre design, nous commençons à travailler sur la création de votre site web.",
    workProcessStep4Title: "Révision et finalisation du Design",
    workProcessStep4Description:
      "Nous effectuons les changements finaux et traitons le contenu définitif, y compris les textes et les photos.",
    workProcessStep5Title: "Fin du Projet",
    workProcessStep5Description:
      "Nous lançons votre site web dans le monde numérique, en garantissant que chaque détail est parfaitement configuré et optimisé pour offrir des performances exceptionnelles et une présence en ligne remarquable.",

    // Satisfaction Guarantee
    satisfactionGuarantee: "Garantie de Satisfaction",
    satisfactionGuaranteeDescription:
      "Nous comprenons que la décision d'investir dans un site web est importante. Il est normal de ressentir une certaine inquiétude quant au résultat final. C'est pourquoi nous vous proposons ce qui suit:",
    satisfactionFeature1:
      "Paiement de 50% au début et le reste lorsque le site est terminé",
    satisfactionFeature2: "Révision du site avant de payer le solde",
    satisfactionFeature3:
      "90 jours de support technique inclus après la livraison",

    // Common buttons
    requestQuote: "Demander un devis",

    // Education
    educationTitle: "Éducation",
    highSchool: "Institut Ceferino Namuncurá",
    highSchoolDegree: "Baccalauréat en Sciences Sociales & Humanités",
    highSchoolDuration: "Durée: 2015-2019",
    designInstitute: "Institut Technologique ORT",
    designDegree:
      "Technicien Supérieur en Design Graphique & Développement d'interfaces Graphiques",
    designDuration: "Durée: 2021 - Juin 2023",
    university: "Université Technologique Nationale UTN",
    universityDegree: "Professional FullStack Developer",
    universityDuration: "Durée: Août 2023 - Janvier 2024",

    // Experience
    experienceTitle: "Expérience Professionnelle",
    company1: "Full Sites",
    company1Duration: "Octobre 2022 - Janvier 2024",
    company1Role: "Développement de sites web",
    company1Description1: "Conception d'interfaces web.",
    company1Description2: "Développement de code.",
    company1Description3: "Utilisation de frameworks.",

    company2: "Design & Développement Web Freelance",
    company2Duration: "2022 - Présent",
    company2Role: "Design & Développement d'Interfaces",
    company2Description1: "Développement de code.",
    company2Description2: "Création et amélioration d'interfaces utilisateur.",
    company2Description3: "Implémentation de designs responsives.",

    company3: "BDR Informatique",
    company3Duration: "Avril 2024 - Présent",
    company3Role: "Design & Développement d'Interfaces",
    company3Description1:
      "Création et maintenance de sites web tant en CMS qu'avec du code.",
    company3Description2: "Création et amélioration d'interfaces utilisateur.",
    company3Description3: "Implémentation de designs responsives.",

    // Contact
    contactTitle: "Contact",
    contactDescription:
      "Si vous êtes intéressé à travailler avec moi ou avez des questions, n'hésitez pas à me contacter.",
    phone: "Téléphone",
    email: "Email",
    behance: "Behance",
    sendMessage: "Envoyer un message",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "Votre email",
    messageLabel: "Message",
    messagePlaceholder: "Votre message",
    submit: "Envoyer",

    // Footer
    footerRights: "Tous droits réservés",
    designedBy: "Conçu par Fiorella Avegliano",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  t: () => "",
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string, values?: Record<string, string>): string => {
    let text =
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key;

    // Replace placeholders with values if provided
    if (values) {
      Object.keys(values).forEach((key) => {
        text = text.replace(`{${key}}`, values[key]);
      });
    }

    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
