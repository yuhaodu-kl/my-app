function App() {
  return (
    <div>
      <header className="p-6 bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg">Developer • Designer • Creator</p>
      </header>

      <main className="p-6">
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>Hello! I’m building my personal website with React 🚀</p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Project 1 – description</li>
            <li>Project 2 – description</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: you@example.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
