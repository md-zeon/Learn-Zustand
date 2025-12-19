import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounterStore from "./stores/counterStore";

function App() {
	// BAD APPROACH
	// const { count, increment, decrement, reset, incrementBy } = useCounterStore();
	// This will cause the entire component to re-render whenever any part of the state changes.

	// GOOD APPROACH
	// Select only the state and actions you need to minimize re-renders
	// const count = useCounterStore((state) => state.count);
	// const increment = useCounterStore((state) => state.increment);
	// const decrement = useCounterStore((state) => state.decrement);
	// const reset = useCounterStore((state) => state.reset);
	// const incrementBy = useCounterStore((state) => state.incrementBy);

	// BEST APPROACH
	// Group related state and actions together to further reduce re-renders
	const count = useCounterStore((state) => state.count);
	const { increment, decrement, reset, incrementBy } = useCounterStore(
		(state) => ({
			increment: state.increment,
			decrement: state.decrement,
			reset: state.reset,
			incrementBy: state.incrementBy,
		}),
	);

	return (
		<>
			<div>
				<a
					href='https://vite.dev'
					target='_blank'>
					<img
						src={viteLogo}
						className='logo'
						alt='Vite logo'
					/>
				</a>
				<a
					href='https://react.dev'
					target='_blank'>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Count: {count}</h1>
			<div className='card'>
				<button onClick={() => increment()}>Increment</button>
				<button onClick={() => reset()}>Reset</button>
				<button onClick={() => decrement()}>Decrement</button>
				<button onClick={() => incrementBy(5)}>Increment by 5</button>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
