import TipButton from "../TipButton/TipButton";
import Input from "../Input/Input";

export default function TipButtonGrid({ setterCallback }) {
  return (
    <>
      <div>
        Select Tip %
      </div>
      <div>
        <TipButton setterCallback={setterCallback} tipAmount={0} />
        <TipButton setterCallback={setterCallback} tipAmount={5} />
        <TipButton setterCallback={setterCallback} tipAmount={10} />
        <TipButton setterCallback={setterCallback} tipAmount={15} />
        <TipButton setterCallback={setterCallback} tipAmount={25} />
        <Input placeholder="Custom"
          onChange={e => setterCallback(Number(e.target.value))} />
      </div>
    </>
  );
}
