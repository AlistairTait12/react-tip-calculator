export default function TipButton({ setterCallback, tipAmount }) {
  return (
    <button onClick={() => setterCallback(tipAmount)}>
      {tipAmount}%
    </button>
  );
}
