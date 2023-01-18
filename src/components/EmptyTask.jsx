import React from 'react';

const EmptyTask = () => {
	return (
		<div>
			<h1 className='empty-title'>
				<span>⚠️</span> <br />
				You don't type anything in todo!
			</h1>
		</div>
	);
};

export default EmptyTask;
