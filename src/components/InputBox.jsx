export default function InputBox({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyOptions = [],
  }) {
    return (
      <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm text-white/70 mb-1">{label}</label>
  
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            placeholder="0"
            className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/30"
          />
        </div>
  
        <div className="w-40">
          <label className="block text-sm text-white/70 mb-1">Currency</label>
  
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            className="w-full rounded-lg bg-black text-white border border-white/20 p-2 outline-none"
          >
            {currencyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  