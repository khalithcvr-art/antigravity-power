export const WEBSITE_SOURCE = 'expediaservices.ae';
const clean = (v, max) => typeof v === 'string' ? v.trim().slice(0, max) : '';
export function prepareEnquiry(body, now = new Date()) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return {error:'invalid_body'};
  if (clean(body.company_website, 200)) return {ignored:true};
  const fields = {name:clean(body.name,200), phone:clean(body.phone,60), email:clean(body.email,200), service:clean(body.service,300), message:clean(body.message,4000), source:WEBSITE_SOURCE};
  if (!fields.name || !fields.phone || !fields.email) return {error:'name, phone and email are required'};
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) return {error:'invalid_email'};
  const id = body.request_id;
  if (id !== undefined && (typeof id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id))) return {error:'invalid_request_id'};
  // Include content so another submission cannot suppress a different enquiry
  // by reusing its public request ID. Older clients keep a minute-based fallback.
  const identity = id ? ['request-v2',id,fields] : ['legacy-v2',now.toISOString().slice(0,16),fields];
  return {fields,identity:JSON.stringify(identity)};
}

