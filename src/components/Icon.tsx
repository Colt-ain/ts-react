import React from 'react';
import folder from '../folder.png';
import item from '../file.png';


export default function Icon(props: {type: string}) {
	return (
		props.type === 'folder'
			? <img className='icon' src={folder} alt=''/>
			: <img className='icon' src={item} alt=''/>
	);
} ;
