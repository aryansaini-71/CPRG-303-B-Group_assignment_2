export interface Theme {
  bg: string;
  headerBg: string;
  text: string;
  subtext: string;
  border: string;
  inputBg: string;
  actionIcon: string;
  accent: string;
  cardHover: string;
}

const dark: Theme = {
  bg: '#000000',
  headerBg: 'rgba(0,0,0,0.85)',
  text: '#e7e9ea',
  subtext: '#71767b',
  border: '#2f3336',
  inputBg: '#202327',
  actionIcon: '#71767b',
  accent: '#1d9bf0',
  cardHover: '#080808',
};

const light: Theme = {
  bg: '#ffffff',
  headerBg: 'rgba(255,255,255,0.9)',
  text: '#0f1419',
  subtext: '#536471',
  border: '#eff3f4',
  inputBg: '#eff3f4',
  actionIcon: '#536471',
  accent: '#1d9bf0',
  cardHover: '#f7f9f9',
};

export function getTheme(isDark: boolean): Theme {
  return isDark ? dark : light;
}