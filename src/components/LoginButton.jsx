// src/components/LoginButton.jsx
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Bienvenido, ${user.displayName}`);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <button className="btn btn-success" onClick={handleLogin}>
      Iniciar sesión con Google
    </button>
  );
};

export default LoginButton;
