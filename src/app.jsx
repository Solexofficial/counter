import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
	const initialState = [
		{ value: 0, id: 1, name: "Ложка" },
		{ value: 4, id: 2, name: "Вилка" },
		{ value: 0, id: 3, name: "Тарелка" },
		{ value: 0, id: 4, name: "Набор минималиста" },
		{ value: 0, id: 5, name: "Ненужные вещи" },
	];
	const [counters, setCounters] = useState(initialState);

	const handleDelete = counterId => {
		const newCounters = counters.filter(c => c.id !== counterId);
		setCounters(newCounters);
	};

	const handleReset = () => {
		setCounters(initialState);
	};

	const handleIncrement = counterId => {
		const newCounters = [...counters];
		const counterIdx = newCounters.findIndex(item => item.id === counterId);
		newCounters[counterIdx].value++;
		setCounters(newCounters);
	};

	const handleDecrement = counterId => {
		const newCounters = [...counters];
		const counterIdx = newCounters.findIndex(item => item.id === counterId);
		if (newCounters[counterIdx].value > 0) {
			newCounters[counterIdx].value--;
		}
		setCounters(newCounters);
	};

	return (
		<div className='col-lg-8 mx-auto p-3 py-md-5'>
			<main>
				<NavBar totalItems={counters.reduce((acc, cur) => acc + cur.value, 0)} />
				<Counters
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					onReset={handleReset}
					onDelete={handleDelete}
					counters={counters}
				/>
			</main>
		</div>
	);
}

export default App;
