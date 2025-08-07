
import { BrowserRouter } from "react-router";

import './App.css'
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from 'sonner';
function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  )
}

export default App
