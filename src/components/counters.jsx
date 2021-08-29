import React, { useState } from "react";
import Counter from "./counter";
const Counters = () => {
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
		<div>
			<button onClick={handleReset} className='btn btn-small btn-primary m-2'>
				Reset
			</button>
			{counters.map(counter => (
				<Counter
					key={counter.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...counter}
				/>
			))}
		</div>
	);
};

export default Counters;
