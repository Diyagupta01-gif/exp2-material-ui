import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2"
      },
      background: {
        default: darkMode ? "#121212" : "#f4f6f8"
      }
    },
    typography: {
      fontFamily: "Roboto, Arial",
      h6: {
        fontWeight: 600
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            transition: "0.3s",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.15)"
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            textTransform: "none",
            paddingLeft: 16,
            paddingRight: 16
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar
        position="static"
        sx={{
          background: darkMode
            ? "linear-gradient(90deg, #333, #111)"
            : "linear-gradient(90deg, #1976d2, #42a5f5)"
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>

        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Panel {item}
                  </Typography>
                  <Typography color="text.secondary">
                    This panel automatically adjusts layout based on screen size
                    and supports theme switching.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
