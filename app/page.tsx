export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Cómo usar la Inteligencia Artificial</h1>
      <p className="text-lg mb-6">
        La IA nos ayuda a automatizar tareas, analizar datos y mejorar la toma de decisiones. 
        Explora sus beneficios y aprende a implementarla en tu día a día.
      </p>
      <a
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        href="https://openai.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aprende más
      </a>
    </div>
  );
}
