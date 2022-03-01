import hardWorking from './Duane';
import { useState } from 'react';

const Developer = Duane => {
  const [code, writeCode] = useState('Web Apps');
  const [coffee, makeCoffee] = useState(false);

  const doWriteCode = () => {
    if (coffee) {
      Duane.forEach(app => {
        writeCode((code += app));
      });
    } else {
      makeCoffee(true);
    }
  };
  return (
    <>
      <hardWorking>
        {doWriteCode}
        <ul>
          <li>Walk Dog</li>
          <li>Make Coffee</li>
          <li>Identify Solutions</li>
          <li>Write Code</li>
          {coffee`<li>Test Code, Drink Coffee</li>`}
          {(!coffee)`<li> Make Coffee, Test Code</li>`}
          <li>Push Code</li>
          <li>Enjoy Life</li>
          <li>Thank Team</li>
        </ul>
      </hardWorking>
    </>
  );
};

export default Developer;
