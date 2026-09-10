type EnquiryDraft = Partial<Record<'name' | 'phone' | 'email' | 'service' | 'message' | 'visaType', string>>;

let draft: EnquiryDraft = {};

// Read before createRoot replaces the static page. Keep personal details only
// in memory, for the first form mount; never persist them in browser storage.
export function captureEarlyEnquiry() {
  const fields = {
    name: 'enquiry-name', phone: 'enquiry-phone', email: 'enquiry-email',
    service: 'enquiry-service', message: 'enquiry-message', visaType: 'visa-type'
  } as const;
  draft = {};
  for (const [key, id] of Object.entries(fields)) {
    const field = document.getElementById(id);
    if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
      draft[key as keyof EnquiryDraft] = field.value;
    }
  }
}

export function getEarlyEnquiry() { return draft; }
export function clearEarlyEnquiry() { draft = {}; }
