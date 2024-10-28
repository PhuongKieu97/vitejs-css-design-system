import './App.css';
import ThemeToggleButton from './theme-toggle-button';
import { ThemeProvider } from '../context/theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="text-green-500">Hello CodeSandbox</h1>
        <h2 className="text-amber-400 bg-green-500">
          Start editing to see some magic happen!
        </h2>
        <p className="text-[var(--dc-yellow-200)]">Hello word</p>
        <p className="text-phuong-color">Phuong custom color</p>
        <div className="my-8 bg-phuong-color w-full h-[30px]"></div>
        <div className="w-[30px] h-[30px] rounded-sm shadow-message"></div>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
