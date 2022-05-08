import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  
  return (
  <div>
    <Container>
      <Typography color="textPrimary" gutterBottom variant="h2" align="center">
      Is there anybody out there? Don't feed the algorithms
      </Typography>
    </Container>
  </div>
  );
}

export default App;