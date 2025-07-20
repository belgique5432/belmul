import { useEffect } from 'react';

const useSEO = ({
  title = "Belmul - Diseño Web | Transformamos ideas en sitios web que venden",
  description = "Diseñamos y desarrollamos landing pages e e-commerce modernos, adaptados 100% a tu marca y objetivos.",
  keywords = "diseño web, desarrollo web, landing pages, e-commerce, tiendanube, buenos aires",
  canonical = "https://www.belmul.com/",
  ogImage = "https://belmul.com/logo.png"
} = {}) => {
  
  useEffect(() => {
    // Actualizar título
    document.title = title;
    
    // Función helper para actualizar meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    // Actualizar canonical
    const updateCanonical = (url) => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', url);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', url);
        document.head.appendChild(canonical);
      }
    };
    
    // Actualizar meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter Card
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:card', 'summary_large_image');
    
    // Canonical URL
    updateCanonical(canonical);
    
  }, [title, description, keywords, canonical, ogImage]);
};

export default useSEO;