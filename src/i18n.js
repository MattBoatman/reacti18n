import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

i18n
.use(Backend)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en_US',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,

    react: {
      wait: true
    }
  });


export default i18n;