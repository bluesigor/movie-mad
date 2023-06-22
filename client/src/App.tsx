import { Box, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Recommend from "./pages/Recommend";
import Settings from "./pages/Settings/Settings";
import { CLIENT_BASE_URL } from "./core/config";

function App() {
  const client = new ApolloClient({
    uri: CLIENT_BASE_URL,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[200],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recommend" element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
