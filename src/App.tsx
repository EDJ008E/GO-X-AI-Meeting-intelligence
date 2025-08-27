import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import FileSystem from "./pages/FileSystem";
import InPersonSystem from "./pages/InPersonSystem";
import Extension from "./pages/Extension";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file-system" element={<FileSystem />} />
          <Route path="/in-person-system" element={<InPersonSystem />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
