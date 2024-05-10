
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  return (
    <div className='w-full min-h-screen p-10 bg-zinc-900'>
      <div className='flex flex-col items-center justify-center p-6 mx-auto border border-gray-400 rounded-lg w-fit'>
        <div className=' mb-4 text-3xl font-bold text-white'>
          Todo List
        </div>
        <Form />
        <Todos />
      </div>
    </div>
  );
}

export default App;
