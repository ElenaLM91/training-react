import './Timer.css';

const [count, setCount] = useState(10);
    useEffect(() => {
        document.title = "CountDown to  Launching!"
      setTimeout(() => {
          setCount(count -1)
      }, 1000);
    });
export default Timer;
