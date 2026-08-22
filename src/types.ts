export type DualEngineMode = 'corporate' | 'digital';

export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  titleAr?: string;
  category: 'formation' | 'pro' | 'compliance' | 'digital' | 'branding';
  anchorId: string;
  shortDesc: string;
  shortDescAr?: string;
  fullDesc: string;
  fullDescAr?: string;
  directAnswerAEO: string;
  directAnswerAEOAr?: string;
  deliverables: string[];
  deliverablesAr?: string[];
  highlightBadge?: string;
  highlightBadgeAr?: string;
  iconName: string;
  metric: string;
  metricAr?: string;
  timeline: string;
  timelineAr?: string;
}

export interface JurisdictionOption {
  id: string;
  name: string;
  nameAr?: string;
  city: 'Abu Dhabi' | 'Dubai' | 'Ajman';
  cityAr?: string;
  type: 'Mainland' | 'Free Zone';
  typeAr?: string;
  tag: string;
  tagAr?: string;
  baseCost: number;
  visaCostPerPerson: number;
  renewalCost: number;
  foreignOwnership: string;
  foreignOwnershipAr?: string;
  processingTime: string;
  processingTimeAr?: string;
  flexiDeskIncluded: boolean;
  corporateTaxStatus: string;
  corporateTaxStatusAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  popularFor: string;
  popularForAr?: string;
  authorities: string[];
  authoritiesAr?: string[];
}

export interface CalculatorState {
  jurisdictionId: string;
  visaCount: number;
  officeType: 'flexi' | 'dedicated' | 'warehouse' | 'none';
  includeVatAndTaxRegistration: boolean;
  includeInvestorGoldenVisa: boolean;
  includeCorporateBankAssistance: boolean;
  includeBespokeDigitalBranding: boolean;
}

export interface CalculatorBreakdown {
  licenseFee: number;
  visaFees: number;
  officeFee: number;
  vatTaxFee: number;
  goldenVisaFee: number;
  bankingFee: number;
  digitalFee: number;
  subtotal: number;
  vatAmount: number;
  totalAED: number;
  totalUSD: number;
  timelineDays: string;
}

export interface TrackingMilestone {
  stepNumber: number;
  title: string;
  authority: string;
  status: 'completed' | 'in_progress' | 'pending';
  timestamp?: string;
  description: string;
  referenceNo?: string;
  documentReady?: boolean;
}

export interface TrackingApplication {
  trackingNumber: string;
  companyName: string;
  jurisdiction: string;
  applicantName: string;
  submissionDate: string;
  estimatedCompletion: string;
  currentProgressPercent: number;
  overallStatus: 'ACTIVE_PROCESSING' | 'READY_FOR_COLLECTION' | 'APPROVAL_GRANTED';
  milestones: TrackingMilestone[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  titleAr?: string;
  client: string;
  clientAr?: string;
  sector: string;
  sectorAr?: string;
  metric: string;
  metricAr?: string;
  deliverables: string[];
  deliverablesAr?: string[];
  technologies: string[];
  summary: string;
  summaryAr?: string;
  colorGlow: string;
  featured: boolean;
}

export interface FaqItem {
  id: string;
  category: 'Mainland' | 'Freezone' | 'PRO' | 'Tax & Golden Visa' | 'Digital & Web';
  categoryAr?: string;
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
  directAnswerAEO: string;
  directAnswerAEOAr?: string;
}

export interface ChannelPartnerItem {
  id: string;
  name: string;
  nameAr?: string;
  city: string;
  cityAr?: string;
  badge: string;
  badgeAr?: string;
  desc: string;
  descAr?: string;
  startingPrice: string;
  startingPriceAr?: string;
  popularFor: string;
  popularForAr?: string;
  color: string;
}

export interface AuthorityItem {
  name: string;
  desc: string;
  descAr?: string;
  badge: string;
  badgeAr?: string;
}

