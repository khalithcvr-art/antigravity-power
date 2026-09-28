import React from 'react';
import { ScrollReveal } from './motion/MotionPrimitives';

interface SectionHeaderProps {
  /** Small line above the title. Sentence case; the gold rule is drawn by CSS. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Controls placed opposite the title on wide screens (filters, tabs). */
  actions?: React.ReactNode;
  align?: 'start' | 'center';
  className?: string;
}

/**
 * One heading pattern for every section: licence-rule eyebrow, display title, lede.
 * Solid colour only; the previous gradient-highlight second line is gone.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  actions,
  align = 'start',
  className = '',
}) => (
  <ScrollReveal className={className}>
    <div
      className={`flex flex-col gap-6 ${actions ? 'md:flex-row md:items-end md:justify-between' : ''} ${
        align === 'center' ? 'items-center text-center' : ''
      }`}
    >
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className={`lede mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
      </div>
      {actions}
    </div>
  </ScrollReveal>
);
