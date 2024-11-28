import classes from "../styles/CellsList.module.scss";
import { CellButton } from "./CellButton";
import { useState } from "react";

export function CellsList() {
  const SYMBOLS = {
    SYMBOL_X: "x",
    SYMBOL_O: "o",
  };

  const [currentSymbol, setCurrentSymbol] = useState(SYMBOLS.SYMBOL_X);

  const [symbolsArray, setSymbolsArray] = useState([
    SYMBOLS.SYMBOL_X,
    SYMBOLS.SYMBOL_O,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const getCellColor = (currentSymbol) => {
    const cellColorStyle = [classes.cellsList__button];

    switch (currentSymbol) {

      case currentSymbol === SYMBOLS.SYMBOL_X:
        cellColorStyle.push([classes["cellsList__button--x"]]);
        break;

      case currentSymbol === SYMBOLS.SYMBOL_O:
        cellColorStyle.push([classes["cellsList__button--o"]]);
        break;

      default:
        return
        break;
    }

    return cellColorStyle.join(" ");
  };

  return (
    <>
      <h2 className={classes.stepTitle}>Ходит: {currentSymbol} </h2>

      <div className={classes.cellsList}>
        {symbolsArray.map((cell) => (
          <CellButton
            currentSymbol={cell}
            symbols={SYMBOLS}
            getCellColor={getCellColor}
          ></CellButton>
        ))}
      </div>
    </>
  );
}
