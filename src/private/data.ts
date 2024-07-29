interface AboutMeContent {
    heading: string;
    paragraphs: string[];
    buttons: {
        contact: string;
        cv: string;
    };
}

interface Data {
    spanish: {
        navbar: string[];
        aboutme: AboutMeContent;
    };
    english: {
        navbar: string[];
        aboutme: AboutMeContent;
    };
}

const data: Data = {
    spanish: {
        navbar: [
            "INICIO",
            "SOBRE MI",
            "PORTFOLIO",
            "SERVICIOS",
            "CONTACTO",
        ],
        aboutme: {
            heading: "SOBRE MI",
            paragraphs: [
                "Soy Juan Alberto Araujo, tengo 39 años, estoy casado y tengo dos hijos.",
                "Soy Licenciado en Óptica Oftálmica graduado en la universidad de Morón, profesión que ejerzo hace 15 años. Tuve la oportunidad de trabajar como mánager en dos empresas distintas; ejerciendo la tarea técnica, pero a su vez liderando grandes equipos de trabajo. Rol que me permitió desarrollar habilidades de gestión y trabajo en equipo. Áreas que naturalmente se me dan bien.",
                "De adolescente tenía fascinación por los video juegos y haber hecho un secundario industrial con orientación en computación, sin saberlo en ese entonces, sentó las bases para lo que actualmente me estoy formando. Allí, tuve mi primer contacto serio con lenguajes como Visual Basic y .Net.",
                "En el 2016 tuve la oportunidad de irme a Europa. Estuve viviendo en Inglaterra mayoritariamente, donde me casé y tuve la oportunidad de trabajar de forma remota en un proyecto web para Sinergy, una empresa argentina de ciberseguridad. Fue un trabajo básico con HTML y CSS que me permitió trabajar por primera vez en programación.",
                "La experiencia de vivir en el exterior fue también central a la hora de tomar la decisión de cambio profesional. Me enriqueció y me hizo estar en continuo crecimiento debido a la incomodidad propia que se siente estar viviendo en otro país, con otro idioma y cultura. Esto fue un aprendizaje diario que también define mis objetivos.",
                "Al volver a Argentina en 2018, me contrataron para montar un negocio de óptica desde cero. Fue un desafío interesante: ya que forme un gran equipo de trabajo, los capacite y a su vez me ocupe de armar toda la estructura del negocio. Esta fue éxito, así que en el corto plazo asumí la apertura de otra nueva sucursal.",
                "Al tiempo llegué a un punto en donde sentía que quería otra cosa, un trabajo más desafiante y que me permita crecer más. Así que asumí el riesgo y dejé mi trabajo para volcarme de lleno al mundo de la tecnología. No fue una decisión fácil, pero soy una persona tenaz, muy segura de sí misma y con confianza. Me gustan los desafíos y me comprometo enérgicamente.",
                "Estoy ansioso por poder seguir capacitándome y crecer dentro de la industria."
            ],
            buttons: {
                contact: "CONTACTO",
                cv: "CV"
            }
        }
    },
    english: {
        navbar: [
            "HOME",
            "ABOUT ME",
            "PORTFOLIO",
            "SERVICES",
            "CONTACT",
        ],
        aboutme: {
            heading: "ABOUT ME",
            paragraphs: [
                "I am Juan Alberto Araujo, I am 39 years old, married and have two children.",
                "I have a degree in Ophthalmic Optics from the University of Morón, a profession I have been practicing for 15 years. I had the opportunity to work as a manager in two different companies; performing the technical task, but also leading large work teams. This role allowed me to develop management and teamwork skills, areas that come naturally to me.",
                "As a teenager, I was fascinated by video games and having attended an industrial high school with a focus on computing, unknowingly at the time, laid the foundation for what I am currently training for. There, I had my first serious contact with languages like Visual Basic and .Net.",
                "In 2016 I had the opportunity to go to Europe. I lived mostly in England, where I got married and had the opportunity to work remotely on a web project for Sinergy, an Argentine cybersecurity company. It was a basic job with HTML and CSS that allowed me to work in programming for the first time.",
                "The experience of living abroad was also central when making the decision to change careers. It enriched me and made me constantly grow due to the inherent discomfort of living in another country, with a different language and culture. This was a daily learning experience that also defines my goals.",
                "When I returned to Argentina in 2018, I was hired to set up an optics business from scratch. It was an interesting challenge: I formed a great work team, trained them and also took care of setting up the entire business structure. This was successful, so in the short term, I assumed the opening of another new branch.",
                "After a while, I reached a point where I felt I wanted something else, a more challenging job that would allow me to grow more. So I took the risk and left my job to fully immerse myself in the world of technology. It was not an easy decision, but I am a tenacious person, very sure of myself and confident. I like challenges and I commit energetically.",
                "I am eager to continue training and grow within the industry."
            ],
            buttons: {
                contact: "CONTACT",
                cv: "RESUME"
            }
        }
    }
};

export default data;
