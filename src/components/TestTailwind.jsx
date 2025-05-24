const TestTailwind = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-4">Tailwind CSS Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Card 1</h2>
          <p className="text-gray-600 mt-2">Tailwind CSS is working if this card has styling!</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Button
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Card 2</h2>
          <p className="text-gray-600 mt-2">Testing Tailwind's responsive design functionality.</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Button
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Card 3</h2>
          <p className="text-gray-600 mt-2">Tailwind makes styling so much faster!</p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestTailwind;
