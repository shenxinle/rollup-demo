import classnames from 'classnames'
import mod, { add, max } from './mod1'
import { name, version } from '../package.json'

let testData = [5,2,8,4,1,6,9];
let testDataStr = testData.join(',');
console.log(`add ${testDataStr} : `, add(...testData));
console.log(`max ${testDataStr} : `, max(...testData));

console.log(`package.name: ${name}`);
console.log(`package.version: ${version}`);

console.log(classnames('foo', {bar: true, zoo: false}));
