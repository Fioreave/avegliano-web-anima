
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'ca' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  es: {
    // Navbar
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Educación',
    contact: 'Contacto',
    
    // Hero
    greeting: '¡Hola! Soy',
    role: 'Diseñadora Gráfica & Desarrolladora Web',
    cta: 'Conóceme',
    
    // About
    aboutTitle: 'Sobre Mí',
    aboutDescription: 'Soy una diseñadora gráfica y desarrolladora web apasionada por crear experiencias digitales atractivas y funcionales. Me especializo en diseño de interfaces y desarrollo web utilizando tecnologías modernas.',
    birthDate: 'Fecha de nacimiento:',
    birthDateValue: '23 de Octubre de 2001',
    
    // Education
    educationTitle: 'Educación',
    highSchool: 'Instituto Ceferino Namuncurá',
    highSchoolDegree: 'Bachillerato en Cs. Sociales & Humanidades',
    highSchoolDuration: 'Duración: 2015-2019',
    designInstitute: 'Instituto Tecnológico ORT',
    designDegree: 'Técnico Superior en Diseño Gráfico & Desarrollo de interfaces Gráficas',
    designDuration: 'Duración: 2021 - Junio 2023',
    university: 'Universidad Tecnológica Nacional UTN',
    universityDegree: 'Professional FullStack Developer',
    universityDuration: 'Duración: Agosto 2023 - Enero 2024',
    
    // Experience
    experienceTitle: 'Experiencia Laboral',
    company1: 'Full Sites',
    company1Duration: 'Octubre 2022 - Enero 2024',
    company1Role: 'Desarrollo de páginas web',
    company1Description1: 'Diseño de interfaces web.',
    company1Description2: 'Desarrollo de código.',
    company1Description3: 'Utilización de frameworks.',
    
    company2: 'Diseño & Desarrollo Web Freelance',
    company2Duration: '2022 - Presente',
    company2Role: 'Diseño & Desarrollo de Interfaces',
    company2Description1: 'Desarrollo de código.',
    company2Description2: 'Creación y mejora de interfaces de usuario.',
    company2Description3: 'Implementación de diseños responsivos.',
    
    company3: 'BDR Informática',
    company3Duration: 'Abril 2024 - Presente',
    company3Role: 'Diseño & Desarrollo de Interfaces',
    company3Description1: 'Creación y mantenimiento de páginas web tanto en CMS como con código.',
    company3Description2: 'Creación y mejora de interfaces de usuario.',
    company3Description3: 'Implementación de diseños responsivos.',
    
    // Contact
    contactTitle: 'Contacto',
    contactDescription: 'Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en contactarme.',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    behance: 'Behance',
    sendMessage: 'Enviar mensaje',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'Tu correo electrónico',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Tu mensaje',
    submit: 'Enviar',
    
    // Footer
    footerRights: 'Todos los derechos reservados',
    designedBy: 'Diseñado por Fiorella Avegliano',
  },
  
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
    
    // Hero
    greeting: 'Hello! I am',
    role: 'Graphic Designer & Web Developer',
    cta: 'About me',
    
    // About
    aboutTitle: 'About Me',
    aboutDescription: 'I am a graphic designer and web developer passionate about creating engaging and functional digital experiences. I specialize in interface design and web development using modern technologies.',
    birthDate: 'Birth date:',
    birthDateValue: 'October 23, 2001',
    
    // Education
    educationTitle: 'Education',
    highSchool: 'Ceferino Namuncurá Institute',
    highSchoolDegree: 'Bachelor in Social Sciences & Humanities',
    highSchoolDuration: 'Duration: 2015-2019',
    designInstitute: 'ORT Technology Institute',
    designDegree: 'Advanced Technician in Graphic Design & Graphic Interface Development',
    designDuration: 'Duration: 2021 - June 2023',
    university: 'National Technological University UTN',
    universityDegree: 'Professional FullStack Developer',
    universityDuration: 'Duration: August 2023 - January 2024',
    
    // Experience
    experienceTitle: 'Work Experience',
    company1: 'Full Sites',
    company1Duration: 'October 2022 - January 2024',
    company1Role: 'Web Development',
    company1Description1: 'Web interface design.',
    company1Description2: 'Code development.',
    company1Description3: 'Use of frameworks.',
    
    company2: 'Freelance Web Design & Development',
    company2Duration: '2022 - Present',
    company2Role: 'Interface Design & Development',
    company2Description1: 'Code development.',
    company2Description2: 'Creation and improvement of user interfaces.',
    company2Description3: 'Implementation of responsive designs.',
    
    company3: 'BDR Informatics',
    company3Duration: 'April 2024 - Present',
    company3Role: 'Interface Design & Development',
    company3Description1: 'Creation and maintenance of web pages both in CMS and with code.',
    company3Description2: 'Creation and improvement of user interfaces.',
    company3Description3: 'Implementation of responsive designs.',
    
    // Contact
    contactTitle: 'Contact',
    contactDescription: 'If you are interested in working with me or have any questions, do not hesitate to contact me.',
    phone: 'Phone',
    email: 'Email',
    behance: 'Behance',
    sendMessage: 'Send message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'Your email',
    messageLabel: 'Message',
    messagePlaceholder: 'Your message',
    submit: 'Submit',
    
    // Footer
    footerRights: 'All rights reserved',
    designedBy: 'Designed by Fiorella Avegliano',
  },
  
  ca: {
    // Navbar
    home: 'Inici',
    about: 'Sobre mi',
    experience: 'Experiència',
    education: 'Educació',
    contact: 'Contacte',
    
    // Hero
    greeting: 'Hola! Soc',
    role: 'Dissenyadora Gràfica & Desenvolupadora Web',
    cta: 'Coneix-me',
    
    // About
    aboutTitle: 'Sobre Mi',
    aboutDescription: 'Soc una dissenyadora gràfica i desenvolupadora web apassionada per crear experiències digitals atractives i funcionals. M\'especialitzo en disseny d\'interfícies i desenvolupament web utilitzant tecnologies modernes.',
    birthDate: 'Data de naixement:',
    birthDateValue: '23 d\'Octubre de 2001',
    
    // Education
    educationTitle: 'Educació',
    highSchool: 'Institut Ceferino Namuncurá',
    highSchoolDegree: 'Batxillerat en Cs. Socials & Humanitats',
    highSchoolDuration: 'Duració: 2015-2019',
    designInstitute: 'Institut Tecnològic ORT',
    designDegree: 'Tècnic Superior en Disseny Gràfic & Desenvolupament d\'interfícies Gràfiques',
    designDuration: 'Duració: 2021 - Juny 2023',
    university: 'Universitat Tecnològica Nacional UTN',
    universityDegree: 'Professional FullStack Developer',
    universityDuration: 'Duració: Agost 2023 - Gener 2024',
    
    // Experience
    experienceTitle: 'Experiència Laboral',
    company1: 'Full Sites',
    company1Duration: 'Octubre 2022 - Gener 2024',
    company1Role: 'Desenvolupament de pàgines web',
    company1Description1: 'Disseny d\'interfícies web.',
    company1Description2: 'Desenvolupament de codi.',
    company1Description3: 'Utilització de frameworks.',
    
    company2: 'Disseny & Desenvolupament Web Freelance',
    company2Duration: '2022 - Present',
    company2Role: 'Disseny & Desenvolupament d\'Interfícies',
    company2Description1: 'Desenvolupament de codi.',
    company2Description2: 'Creació i millora d\'interfícies d\'usuari.',
    company2Description3: 'Implementació de dissenys responsivos.',
    
    company3: 'BDR Informàtica',
    company3Duration: 'Abril 2024 - Present',
    company3Role: 'Disseny & Desenvolupament d\'Interfícies',
    company3Description1: 'Creació i manteniment de pàgines web tant en CMS com amb codi.',
    company3Description2: 'Creació i millora d\'interfícies d\'usuari.',
    company3Description3: 'Implementació de dissenys responsivos.',
    
    // Contact
    contactTitle: 'Contacte',
    contactDescription: 'Si estàs interessat en treballar amb mi o tens alguna pregunta, no dubtis en contactar-me.',
    phone: 'Telèfon',
    email: 'Correu electrònic',
    behance: 'Behance',
    sendMessage: 'Enviar missatge',
    nameLabel: 'Nom',
    namePlaceholder: 'El teu nom',
    emailLabel: 'Correu electrònic',
    emailPlaceholder: 'El teu correu electrònic',
    messageLabel: 'Missatge',
    messagePlaceholder: 'El teu missatge',
    submit: 'Enviar',
    
    // Footer
    footerRights: 'Tots els drets reservats',
    designedBy: 'Dissenyat per Fiorella Avegliano',
  },
  
  fr: {
    // Navbar
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    education: 'Éducation',
    contact: 'Contact',
    
    // Hero
    greeting: 'Bonjour! Je suis',
    role: 'Designer Graphique & Développeuse Web',
    cta: 'À propos de moi',
    
    // About
    aboutTitle: 'À propos de moi',
    aboutDescription: 'Je suis une designer graphique et développeuse web passionnée par la création d\'expériences numériques attrayantes et fonctionnelles. Je me spécialise dans la conception d\'interfaces et le développement web utilisant des technologies modernes.',
    birthDate: 'Date de naissance:',
    birthDateValue: '23 Octobre 2001',
    
    // Education
    educationTitle: 'Éducation',
    highSchool: 'Institut Ceferino Namuncurá',
    highSchoolDegree: 'Baccalauréat en Sciences Sociales & Humanités',
    highSchoolDuration: 'Durée: 2015-2019',
    designInstitute: 'Institut Technologique ORT',
    designDegree: 'Technicien Supérieur en Design Graphique & Développement d\'interfaces Graphiques',
    designDuration: 'Durée: 2021 - Juin 2023',
    university: 'Université Technologique Nationale UTN',
    universityDegree: 'Professional FullStack Developer',
    universityDuration: 'Durée: Août 2023 - Janvier 2024',
    
    // Experience
    experienceTitle: 'Expérience Professionnelle',
    company1: 'Full Sites',
    company1Duration: 'Octobre 2022 - Janvier 2024',
    company1Role: 'Développement de sites web',
    company1Description1: 'Conception d\'interfaces web.',
    company1Description2: 'Développement de code.',
    company1Description3: 'Utilisation de frameworks.',
    
    company2: 'Design & Développement Web Freelance',
    company2Duration: '2022 - Présent',
    company2Role: 'Design & Développement d\'Interfaces',
    company2Description1: 'Développement de code.',
    company2Description2: 'Création et amélioration d\'interfaces utilisateur.',
    company2Description3: 'Implémentation de designs responsives.',
    
    company3: 'BDR Informatique',
    company3Duration: 'Avril 2024 - Présent',
    company3Role: 'Design & Développement d\'Interfaces',
    company3Description1: 'Création et maintenance de sites web tant en CMS qu\'avec du code.',
    company3Description2: 'Création et amélioration d\'interfaces utilisateur.',
    company3Description3: 'Implémentation de designs responsives.',
    
    // Contact
    contactTitle: 'Contact',
    contactDescription: 'Si vous êtes intéressé à travailler avec moi ou avez des questions, n\'hésitez pas à me contacter.',
    phone: 'Téléphone',
    email: 'Email',
    behance: 'Behance',
    sendMessage: 'Envoyer un message',
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Email',
    emailPlaceholder: 'Votre email',
    messageLabel: 'Message',
    messagePlaceholder: 'Votre message',
    submit: 'Envoyer',
    
    // Footer
    footerRights: 'Tous droits réservés',
    designedBy: 'Conçu par Fiorella Avegliano',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
