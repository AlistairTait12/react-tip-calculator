import { useState } from "react";
import Input from "../Input/Input";
import TipButtonGrid from "../TipButtonGrid/TipButtonGrid";

export default function TipCalculator() {
  const [billTotal, setBillTotal] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [guests, setGuests] = useState(0);

  function getTotalTip() {
    const onePercent = billTotal / 100;
    const tipTotal = onePercent * tipPercent;

    return tipTotal;
  }

  function getTotalShare() {
    const absoluteTotal = billTotal + getTotalTip(); 
    console.log(absoluteTotal);

    return absoluteTotal / guests;
  }

  function getTipShare() {
    return getTotalTip() / guests;
  }

  function handleResetClick() {
    setBillTotal(0);
    setGuests(0);
    setTipPercent(0);
  }

  const tipPerPerson = getTipShare();
  const totalPerPerson = getTotalShare();

  return (
    <div>
      {/* input area */}
      <div>
        <div>
          Bill
          <Input placeholder="0"
            onChange={e => setBillTotal(Number(e.target.value))}
            value={billTotal}/>
        </div>
        <div>
          {/* tips grid to go here */}
          <TipButtonGrid setterCallback={setTipPercent} />
        </div>
        <div>
          Number of People
          <Input placeholder="0"
            onChange={e => setGuests(Number(e.target.value))}
            value={guests}/>
        </div>
      </div>
      {/* output area */}
      <div>
        <h1>Tip Amount / person ${tipPerPerson}</h1>
        <h1>Total / person ${totalPerPerson}</h1>
      </div>
      <button onClick={handleResetClick}>RESET</button>
    </div>
  );
}
