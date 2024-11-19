import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
 
storyblokInit({
  accessToken: "3Wbrdgy3TsaAHOVvzJOHywtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


