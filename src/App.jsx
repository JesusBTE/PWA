// src/App.jsx
import ShareButtons from './components/ShareButtons';
import LoginButton from './components/LoginButton';

function App() {
  const url = 'https://tusitio.com/articulo-genial';
  const text = '¡Mira este artículo increíble! 🚀';

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
      <div className="text-center p-5 rounded">
        <h1 className="mb-4">Mi App React PWA</h1>

        <div className="mb-4">
          <LoginButton />
        </div>

        <p className="mb-3">Contenido para compartir en redes sociales:</p>
        <ShareButtons url={url} text={text} />
      </div>
    </div>
  );
}

export default App;
