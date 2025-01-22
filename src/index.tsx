import Analytics from "analytics";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnalyticsProvider } from "use-analytics";
import analyticsConfig from "~/analyticsConfig";
import App from "~/components/App";
import "./index.css";

const analytics = Analytics(analyticsConfig);

const root = createRoot(document.querySelector("#root")!);

root.render(
  <StrictMode>
    <AnalyticsProvider instance={analytics}>
      <App />
    </AnalyticsProvider>
  </StrictMode>,
);
