import './App.css';
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Text from "./components/Text";
import Button from "./components/Button";
import './theme/globals.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text color="spring">Hello World</Text>
      <Button size="md">Hello</Button>
    </ThemeProvider>
  );
}

export default App;
