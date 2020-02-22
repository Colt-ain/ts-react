import React from 'react';

export default function Icon(props: {type: string}) {
	return (
		props.type === 'folder'
			? <img className='icon' src='https://img.techpowerup.org/200220/folder.png' alt=''/>
			: <img className='icon' src='https://img.techpowerup.org/200220/file.png' alt=''/>
	);
} ;
