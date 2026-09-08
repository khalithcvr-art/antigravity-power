import React from 'react';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';

export function ComfortHero({ isArabic }: { isArabic: boolean }) {
  const services = isArabic
    ? ['تأسيس الشركات', 'الإقامة والتأشيرات', 'خدمات المعاملات الحكومية', 'الدعم الضريبي', 'الخدمات الرقمية']
    : ['Company formation', 'Residency visas', 'PRO services', 'Tax support', 'Digital services'];
  return <section className="comfort-hero">
    <div className="comfort-copy">
      <p className="comfort-eyebrow">{isArabic ? 'إكسبيديا للأعمال والخدمات • الإمارات' : 'EXPEDIA BUSINESS & SERVICES • UAE'}</p>
      <h1>{isArabic ? 'خطوتك التالية، بكل وضوح.' : 'Your next step, made clear.'}</h1>
      <p className="comfort-intro">{isArabic ? 'من تأسيس شركتك إلى معاملات الإقامة. أخبرنا بما تحتاجه، وسنساعدك في معرفة الخطوة التالية.' : 'From setting up your business to residency enquiries. Tell us what you need, and we’ll help you understand the next step.'}</p>
      <div className="comfort-actions">
        <a className="comfort-primary" href="#contact">{isArabic ? 'أخبرنا بما تحتاجه' : 'Tell us what you need'}</a>
        <a className="comfort-secondary" href={generateWhatsAppUrl(isArabic ? 'مرحباً ليريا، أحتاج المساعدة في استفسار.' : 'Hello Lyria, I would like help with an enquiry.')} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('whatsapp_click', {source: 'comfort_hero'})}>{isArabic ? 'اسأل ليريا على واتساب' : 'Ask Lyria on WhatsApp'}</a>
      </div>
      <p className="comfort-note">{isArabic ? 'مساعدة بالعربية والإنجليزية • عرض سعر حسب احتياجاتك' : 'English & Arabic support • Quotes tailored to your needs'}</p>
    </div>
    <div className="comfort-photo"><img src="/hero-skyline-1.jpg" alt={isArabic ? 'أفق دبي عند الغروب' : 'Dubai skyline at sunset'} fetchPriority="high" width="720" height="1280" /><div><span>{isArabic ? 'ابدأ باستفسار بسيط' : 'START WITH A SIMPLE QUESTION'}</span><p>{isArabic ? 'أعمالك. طموحك. خطوتك القادمة.' : 'Your business. Your ambition. Your next chapter.'}</p></div></div>
    <nav className="comfort-services" aria-label={isArabic ? 'استفسر عن خدمة' : 'Enquire about a service'}>{services.map((service,i)=><a key={service} href="#contact" onClick={()=>window.dispatchEvent(new CustomEvent('enquiry-service',{detail:i}))}><span>0{i+1}</span>{service}<span aria-hidden="true">↗</span></a>)}</nav>
  </section>;
}
