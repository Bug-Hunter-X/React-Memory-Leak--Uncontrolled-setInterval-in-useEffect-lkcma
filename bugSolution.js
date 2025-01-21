```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id); // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```