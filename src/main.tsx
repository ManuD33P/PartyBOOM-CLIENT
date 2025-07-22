import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SocketProvider } from "./context/SocketContext.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";
import { StrictMode, type ReactNode } from "react";
import { ModalProvider } from "./components/Modal/context/ModalContext.tsx";
import { SettingProvider } from "./context/SettingContext.tsx";
import { LoadingProvider } from "./context/LoadingContext.tsx";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary>
      <SettingProvider>
        <SocketProvider>
          <ModalProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </ModalProvider>
        </SocketProvider>
      </SettingProvider>
    </ErrorBoundary>
  );
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
