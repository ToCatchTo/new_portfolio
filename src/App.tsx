import NavBar from './components/navBar';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Footer from './components/footer';
import Contact from './components/contact';
import Projects from './components/projects';
import { Analytics } from "@vercel/analytics/react";

const theme = createTheme({
  typography: {
    fontFamily: "Space Grotesk",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #0A0A0A !important;
          background-image: radial-gradient(circle, #1f1f1f 1px, transparent 1px) !important;
          background-size: 40px 40px !important;
          min-height: 100vh;
        }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1500,
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ padding: { sm: '30px', xs: '10px' } }}>
          <NavBar />
          <Header />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <Analytics />
        </Box>
      </ThemeProvider>
    </>
  );
}