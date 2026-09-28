import React from 'react';
import { Building2, IdCard, Landmark, Receipt, Code2, ArrowUpRight } from 'lucide-react';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';

const SERVICE_ICONS = [Building2, IdCard, Landmark, Receipt, Code2];

/**
 * Corporate-mode opening. Readability comes first: large type, a 20px intro, 56px actions.
 * `animateIn` plays one staggered entrance, and only after a mode switch; the prerendered
 * first paint is never animated, so the LCP image and headline never blink.
 */
export function ComfortHero({ isArabic, animateIn = false }: { isArabic: boolean; animateIn?: boolean }) {
  const services = isArabic
    ? ['تأسيس الشركات', 'الإقامة والتأشيرات', 'خدمات المعاملات الحكومية', 'الدعم الضريبي', 'الخدمات الرقمية']
    : ['Company formation', 'Residency visas', 'PRO services', 'Tax support', 'Digital services'];
  const enter = animateIn ? 'hero-in' : '';
  const step = (i: number) => ({ '--i': i } as React.CSSProperties);

  return (
    <section className="relative isolate pb-16 pt-[calc(var(--header-h)+2.5rem)] sm:pb-20 lg:pt-[calc(var(--header-h)+4.5rem)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-8">
        <div className={`max-w-2xl ${enter}`}>
          <p className="eyebrow" style={step(0)}>
            {isArabic ? 'إكسبيديا للأعمال والخدمات • الإمارات' : 'Expedia Business & Services • UAE'}
          </p>
          <h1
            className="mt-6 text-[clamp(2.5rem,4.7vw,3.9rem)] font-bold leading-[1.07] tracking-[-0.025em] text-white"
            style={step(1)}
          >
            {isArabic ? 'خطوتك التالية، بكل وضوح.' : 'Your next step, made clear.'}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9" style={step(2)}>
            {isArabic
              ? 'من تأسيس شركتك إلى معاملات الإقامة. أخبرنا بما تحتاجه، وسنساعدك في معرفة الخطوة التالية.'
              : 'From setting up your business to residency enquiries. Tell us what you need, and we’ll help you understand the next step.'}
          </p>
          <div className="mt-9 flex flex-wrap gap-3" style={step(3)}>
            <a className="btn btn-primary btn-lg" href="#contact">
              {isArabic ? 'أخبرنا بما تحتاجه' : 'Tell us what you need'}
            </a>
            <a
              className="btn btn-secondary btn-lg"
              href={generateWhatsAppUrl(isArabic ? 'مرحباً ليريا، أحتاج المساعدة في استفسار.' : 'Hello Lyria, I would like help with an enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('whatsapp_click', { source: 'comfort_hero' })}
            >
              {isArabic ? 'اسأل ليريا على واتساب' : 'Ask Lyria on WhatsApp'}
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400" style={step(4)}>
            {isArabic ? 'مساعدة بالعربية والإنجليزية • عرض سعر حسب احتياجاتك' : 'English & Arabic support • Quotes tailored to your needs'}
          </p>
        </div>

        <div className={enter}>
          <figure
            className="relative aspect-[16/11] overflow-hidden rounded-[var(--radius-panel)] border border-gold-400/30 bg-obsidian-900 shadow-pop lg:aspect-[5/6]"
            style={step(2)}
          >
            <img
              src="/hero-skyline-1.jpg"
              alt={isArabic ? 'أفق دبي عند الغروب' : 'Dubai skyline at sunset'}
              {...{ fetchpriority: 'high' }}
              width="720"
              height="1280"
              className="h-full w-full object-cover object-[center_65%]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/75 to-transparent px-6 pb-6 pt-28">
              <span className="block text-sm font-semibold text-gold-300">
                {isArabic ? 'ابدأ باستفسار بسيط' : 'Start with a simple question'}
              </span>
              <p className="mt-2 text-xl leading-snug text-white sm:text-2xl">
                {isArabic ? 'أعمالك. طموحك. خطوتك القادمة.' : 'Your business. Your ambition. Your next chapter.'}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      <nav
        aria-label={isArabic ? 'استفسر عن خدمة' : 'Enquire about a service'}
        className={`mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:mt-20 lg:px-8 ${enter}`}
      >
        <ul
          className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5"
          style={step(5)}
        >
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <li key={service} className="bg-obsidian-950 sm:last:col-span-2 lg:last:col-span-1">
                <a
                  href="#contact"
                  onClick={() => window.dispatchEvent(new CustomEvent('enquiry-service', { detail: i }))}
                  className="group flex h-full min-h-[4.5rem] items-center gap-3 px-5 py-5 transition-colors hover:bg-obsidian-900"
                >
                  <Icon className="h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                  <span className="text-base font-semibold text-white">{service}</span>
                  <ArrowUpRight
                    className="ms-auto h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-white rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
