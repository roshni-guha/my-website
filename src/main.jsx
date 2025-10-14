// After
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <h1>Hello React!</h1>
);

class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");