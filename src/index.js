import './index.css';

import numeral from 'numeral';

const yohannesValue = numeral(200).format('$0,0.00');
console.log(`I would like to give ${yohannesValue} !`);
