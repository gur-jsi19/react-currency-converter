import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

export default function App() {
  const [fromAmount, setFromAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");

  const [toAmount, setToAmount] = useState("");
  const [toCurrency, setToCurrency] = useState("INR");

  //Real rates from API, based on the selected "fromCurrency"
  const { rates, loading, error } = useCurrencyInfo(fromCurrency);

  // Currency list for dropdowns:
  const currencyOptions = Object.keys(rates).length
    ? Object.keys(rates)
    : ["USD", "INR", "EUR", "GBP", "CAD", "AUD"];

  function convert(amount, from, to) {
    // If rates aren't ready, no conversion
    if (!rates[from] || !rates[to]) return "";

    
    return amount * rates[to];
  }

  // Auto update "toAmount" when input changes or currencies change or rates load
  useEffect(() => {
    if (fromAmount === "") {
      setToAmount("");
      return;
    }

    if (loading || error) return;

    const amt = Number(fromAmount);
    if (Number.isNaN(amt)) {
      setToAmount("");
      return;
    }

    const result = convert(amt, fromCurrency, toCurrency);
    setToAmount(result === "" ? "" : result.toFixed(2));
  }, [fromAmount, fromCurrency, toCurrency, rates, loading, error]);

  function handleSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    setFromAmount(toAmount);
    setToAmount(fromAmount);
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        <h2 className="text-2xl font-semibold text-center">Currency Converter</h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-sm">
            {error}
          </div>
        )}

        {loading && (
          <div className="bg-white/10 border border-white/10 rounded-lg p-3 text-sm">
            Loading latest rates...
          </div>
        )}

        <InputBox
          label="From"
          amount={fromAmount}
          onAmountChange={setFromAmount}
          currency={fromCurrency}
          onCurrencyChange={setFromCurrency}
          currencyOptions={currencyOptions}
        />

        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition"
          >
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={toAmount}
          onAmountChange={setToAmount}
          currency={toCurrency}
          onCurrencyChange={setToCurrency}
          currencyOptions={currencyOptions}
        />
      </div>
    </div>
  );
}
