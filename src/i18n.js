import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    swenMessage: 'Profit goes to SWEN. By leaving a tip, you take care of nature.',
    language: 'Language',
    tipYourServer: 'Tip your server',
    selectLanguage: 'Select language',
  },
  de: {
    swenMessage: 'Der Gewinn geht an SWEN. Durch das Hinterlassen eines Trinkgelds kümmern Sie sich um die Natur.',
    language: 'Sprache',
    tipYourServer: 'Trinkgeld geben',
    selectLanguage: 'Sprache auswählen',
  },
  fr: {
    swenMessage: 'Le bénéfice va à SWEN. En laissant un pourboire, vous prenez soin de la nature.',
    language: 'Langue',
    tipYourServer: 'Laissez un pourboire',
    selectLanguage: 'Choisir la langue',
  },
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
