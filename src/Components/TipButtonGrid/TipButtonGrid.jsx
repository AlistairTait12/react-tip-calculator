import { useState } from "react";
import './TipButtonGrid.css'

export default function TipButtonGrid({ setterCallback }) {
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  let customTipIsActive = false;

  const handleCustomTipChange = (e) => {
    // TODO: changing the custom input should clear the selection 
    customTipIsActive = true;
    setCustomTip(Number(e.target.value));
    setTip(undefined);
    setterCallback(Number(e.target.value));
  }

  const handleTipChange = (e) => {
    // TODO: selecting a radio should empty the custom input
    setTip(Number(e.target.value));
    setCustomTip(0);
    setterCallback(Number(e.target.value));
    customTipIsActive = false;
  }

  return (
    <>
      <div>
        Select Tip %
      </div>
      <div>
        <label className="TipButtonGrid-button">
          <input hidden name="tip-grid"
            type="radio"
            value={0}
            onChange={handleTipChange}
            checked={tip === 0 && !customTipIsActive} />
          0%
        </label>
        <label className="TipButtonGrid-button">
          <input hidden name="tip-grid" className="TipButtonGrid-button"
            type="radio"
            value={5}
            onChange={handleTipChange}
            checked={tip === 5 && !customTipIsActive} />
          5%
        </label>
        <label className="TipButtonGrid-button">
          <input hidden name="tip-grid" className="TipButtonGrid-button"
            type="radio"
            value={10}
            onChange={handleTipChange}
            checked={tip === 10 && !customTipIsActive} />
          10%
        </label>
        <label className="TipButtonGrid-button">
          <input hidden name="tip-grid" className="TipButtonGrid-button"
            type="radio"
            value={15}
            onChange={handleTipChange}
            checked={tip === 15 && !customTipIsActive} />
          15%
        </label>
        <label className="TipButtonGrid-button">
          <input hidden name="tip-grid" className="TipButtonGrid-button"
            type="radio"
            value={25}
            onChange={handleTipChange}
            checked={tip === 25 && !customTipIsActive} />
          25%
        </label>
        <input type="text"
          placeholder="Custom"
          value={customTip ? customTip : ''}
          onChange={handleCustomTipChange} />
      </div>
    </>
  );
}
