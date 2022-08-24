// TODO: write your code here

import extractedProps from './basic';
import obj from './characters';

// select property id
const findId = 9;
const idProps = obj.special.find((item) => item.id === findId);
extractedProps(idProps);
// console.log(extractedProps(idProps));
