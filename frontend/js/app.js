import './../sass/app.scss';

const arr = [1, 2, 3];
const testEs6 = () => console.log(...arr);
window.testEs6 = testEs6;
console.log('it works');
