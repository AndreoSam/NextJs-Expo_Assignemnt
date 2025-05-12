// pages/index.js
import { Button, Container, Typography } from "@mui/material";
import { signInWithPopup, auth, provider } from "../lib/firebase";

export default function Home() {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      console.error(error);
      alert("Sign-in failed.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "5rem" }}>
      <Typography variant="h4" gutterBottom>
        Google Sign-In
      </Typography>
      <Button variant="contained" onClick={handleSignIn}>
        Sign in with Google
      </Button>
    </Container>
  );
}
