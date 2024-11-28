
export function CellButton({ currentSymbol, getCellColor}) {

  return (
    <>
      <button className={getCellColor(currentSymbol)}>
        {currentSymbol}
      </button>
    </>
  );
}
CellButton;
