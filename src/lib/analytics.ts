// src/lib/analytics.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

// Função para rastrear eventos do Google Analytics
export const trackGAEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Função para rastrear eventos do Meta Pixel
export const trackMetaEvent = (event: string, data: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }
};

// Eventos específicos da aplicação
export const trackFormStart = () => {
  trackGAEvent('form_start', 'Form', 'Smart Contact Form');
  trackMetaEvent('Lead', { content_name: 'Form Start' });
};

export const trackFormStep = (step: number) => {
  trackGAEvent('form_progress', 'Form', `Step ${step}`);
  trackMetaEvent('Lead', { content_name: `Form Step ${step}` });
};

export const trackFormSubmit = () => {
  trackGAEvent('generate_lead', 'Form', 'Smart Contact Form Submit');
  trackMetaEvent('Lead');
};

export const trackWhatsAppClick = (source: string) => {
  trackGAEvent('click', 'CTA', `WhatsApp - ${source}`);
  trackMetaEvent('Contact', { content_name: `WhatsApp - ${source}` });
};

export const trackPhoneClick = (source: string) => {
  trackGAEvent('click', 'CTA', `Phone - ${source}`);
  trackMetaEvent('Contact', { content_name: `Phone - ${source}` });
};

export const trackBlogPostView = (postTitle: string) => {
  trackGAEvent('page_view', 'Blog', postTitle);
  trackMetaEvent('ViewContent', { content_name: postTitle });
};

export const trackBlogCategoryFilter = (category: string) => {
  trackGAEvent('filter', 'Blog', `Category: ${category}`);
  trackMetaEvent('Search', { search_string: category });
};