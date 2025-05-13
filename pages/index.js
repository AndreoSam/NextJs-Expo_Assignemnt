import { useEffect, useState } from "react";
import { Container, Typography, Button, Avatar } from "@mui/material";
import { auth, provider, signInWithPopup } from "../lib/firebase";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      alert("Sign-Up Successful!");
    } catch (error) {
      console.error(error);
      alert("Sign-Up Failed");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem", textAlign: "center" }}>
      {user ? (
        <>
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            sx={{ width: 64, height: 64, margin: "auto" }}
          />
          <Typography variant="h5">Welcome, {user.displayName}</Typography>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Sign-Up with Google
          </Typography>
          <Button variant="contained" onClick={handleGoogleSignup}>
            Sign Up with Google
          </Button>
        </>
      )}
    </Container>
  );
}
