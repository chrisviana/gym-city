import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AuthProvider } from "./contexts/AuthContext";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
        <Analytics />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
