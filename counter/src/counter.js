const Counter = () => {
    // State initialization using useState hook
    const [count, setCount] = useState(0);
  
    // Function to increment count
    const increment = () => {
      setCount(count + 1);
    };
  
    // JSX to render
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
  
  export default Counter;
  