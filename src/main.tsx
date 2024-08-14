import './index.css';
import '@shopify/polaris/build/esm/styles.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import App from './App.tsx';
import { StoreProvider } from './context/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider i18n={enTranslations}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </AppProvider>
  </StrictMode>,
);
