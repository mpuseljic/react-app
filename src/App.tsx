import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisability(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisability(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
