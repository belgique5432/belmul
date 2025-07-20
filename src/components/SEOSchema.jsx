import { useEffect } from 'react';

const SEOSchema = () => {
  useEffect(() => {
    // Función para agregar schema al head
    const addSchema = (schemaData, id) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    };

    // Schema de Organización
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://belmul.com/#organization",
      "name": "Belmul",
      "alternateName": "Belmul Diseño Web",
      "description": "Agencia de diseño y desarrollo web especializada en landing pages y e-commerce modernos, adaptados 100% a tu marca y objetivos.",
      "url": "https://belmul.com",
      "logo": "https://belmul.com/logo.png",
      "email": "belmul@gmail.com",
      "telephone": "+54-11-3893-1266",
      "foundingDate": "2024",
      "numberOfEmployees": "2",
      "slogan": "Transformamos ideas en sitios web que venden",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+54-11-3893-1266",
          "contactType": "customer service",
          "availableLanguage": "Spanish",
          "contactOption": "TollFree"
        },
        {
          "@type": "ContactPoint",
          "email": "belmul@gmail.com",
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        }
      ],
      "sameAs": [
        "https://wa.me/1138931266"
      ],
      "serviceType": "Web Design and Development",
      "areaServed": {
        "@type": "Country",
        "name": "Argentina"
      }
    };

    // Schema del Sitio Web
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Belmul - Diseño Web",
      "url": "https://belmul.com",
      "description": "Transformamos ideas en sitios web que venden. Diseño y desarrollo de landing pages y e-commerce modernos.",
      "inLanguage": "es",
      "publisher": {
        "@id": "https://belmul.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://belmul.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Schema de Servicios Profesionales
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Belmul - Servicios de Diseño Web",
      "description": "Servicios profesionales de diseño y desarrollo web, incluyendo landing pages, e-commerce y tiendas en Tiendanube.",
      "url": "https://belmul.com",
      "telephone": "+54-11-3893-1266",
      "email": "belmul@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
      },
      "serviceType": [
        "Web Design",
        "Web Development",
        "E-commerce Development",
        "Landing Page Design",
        "Tiendanube Setup"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Diseño Web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desarrollo de E-commerce en Tiendanube",
              "description": "Ideal para clientes que quieren un e-commerce lo más rápido posible"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño de Landing Pages",
              "description": "Landing pages modernas adaptadas 100% a tu marca y objetivos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desarrollo Web Personalizado",
              "description": "Sitios web completamente personalizados para tu negocio"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Argentina"
      }
    };

    // Schema FAQ
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué servicios ofrece Belmul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos servicios de diseño y desarrollo web, incluyendo landing pages, e-commerce y configuración de tiendas en Tiendanube. Nos especializamos en crear sitios web modernos adaptados 100% a tu marca y objetivos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el proceso de trabajo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestro proceso consta de 4 etapas: Ideamos (conceptualización), Diseñamos (diseño visual y UX), Creamos (desarrollo y programación), y Enseñamos (capacitación para gestionar el sitio)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo puedo contactar con Belmul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puedes contactarnos por WhatsApp al +54-11-3893-1266 o por email a belmul@gmail.com. También puedes usar nuestro formulario de contacto en el sitio web."
          }
        }
      ]
    };

    // Agregar todos los schemas
    addSchema(organizationSchema, 'organization-schema');
    addSchema(websiteSchema, 'website-schema');
    addSchema(professionalServiceSchema, 'service-schema');
    addSchema(faqSchema, 'faq-schema');

    // Cleanup al desmontar el componente
    return () => {
      const schemaIds = ['organization-schema', 'website-schema', 'service-schema', 'faq-schema'];
      schemaIds.forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  // Este componente no renderiza nada visible
  return null;
};

export default SEOSchema;