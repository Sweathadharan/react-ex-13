import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider, ThemedComponent } from "./components/ThemedContext";

function App() {
  const [like, setLike] = useState(0);
  const [content, setContent] = useState(false);
  const initialContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (content) {
      alert("content button is clicked");
      setDisplay(initialContent);
    } else {
      setDisplay("");
    }
  }, [content, initialContent]);

  return (
    <ThemeProvider>
      <ThemedComponent>
        <br></br>
        <br></br>
        <button onClick={() => setContent(!content)}>Content</button>
        <p>{display}</p>
        <h3>{like}</h3>
        <button onClick={() => setLike(like + 1)}>Like</button>
      </ThemedComponent>
    </ThemeProvider>
  );
}

export default App;
