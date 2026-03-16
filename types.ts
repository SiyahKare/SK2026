
export type Language = 'en' | 'tr' | 'ru';

export interface ProductSpec {
  label: Record<Language, string>;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  icon: string;
  slug: string;
  features: Record<Language, string[]>;
  specs: ProductSpec[];
}

export interface NavItem {
  label: Record<Language, string>;
  path: string;
}

export interface Translation {
  heroTitle: Record<Language, string>;
  heroSub: Record<Language, string>;
  aboutTitle: Record<Language, string>;
  daoTitle: Record<Language, string>;
  investorsTitle: Record<Language, string>;
  contactTitle: Record<Language, string>;
  requestDemo: Record<Language, string>;
  learnMore: Record<Language, string>;
}
