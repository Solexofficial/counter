import React from "react";
import Counter from "./counter";
const Counters = ({ onReset, counters, ...rest }) => {
	return (
		<div>
			<button onClick={onReset} className='btn btn-small btn-primary m-2'>
				Reset
			</button>
			{counters.map(counter => (
				<Counter key={counter.id} {...counter} {...rest} />
			))}
		</div>
	);
};

export default Counters;
