import { COMPANY_INFO } from '../data/siteData';

export type TrackingEvent =
  | 'generate_lead'
  | 'calculator_lead'
  | 'whatsapp_click'
  | 'call_click'
  | 'dual_engine_switch'
  | 'status_tracker_search'
  | 'jurisdiction_select'
  | 'page_view_dedicated'
  | 'dedicated_page_whatsapp'
  | 'quotation_print';

export function trackConversion(event: TrackingEvent, params?: Record<string, any>) {
  // These events must never carry enquiry details or application references,
  // even if a future caller accidentally supplies them.
  const safeParams = event === 'generate_lead'
    ? { source: 'contact_form' }
    : event === 'status_tracker_search'
      ? { source: 'status_tracker' }
      : params;
  try {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', event, safeParams);
    }
  } catch {
    // Analytics failure must not prevent a saved enquiry showing success.
  }
}

export function generateWhatsAppUrl(customMessage?: string): string {
  const defaultText = `Hello Expedia Business Services, I would like to enquire about UAE company formation and PRO services.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
}

export function generateCalculatorQuoteWhatsAppUrl(
  jurisdictionName: string,
  totalAED: number,
  visas: number,
  office: string
): string {
  const text = `Hello Expedia Business Services! 🇦🇪\n\nI just calculated an estimate on your website for *${jurisdictionName}*:\n\n• Visas: ${visas}\n• Office Space: ${office}\n• Estimated Total: AED ${totalAED.toLocaleString()} (~$${Math.round(totalAED/3.6725).toLocaleString()} USD)\n\nPlease send me the full itemized government fee breakdown and available discounts.`;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function generateCallUrl(): string {
  return `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`;
}
