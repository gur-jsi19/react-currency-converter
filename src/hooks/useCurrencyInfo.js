import { useEffect, useState } from "react";

export default function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseCurrency) return;

    let isMounted = true; 
    setLoading(true);
    setError(null);

    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch exchange rates");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;

       
        setRates({ [baseCurrency]: 1, ...data.rates });
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message || "Something went wrong");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [baseCurrency]);

  return { rates, loading, error };
}
