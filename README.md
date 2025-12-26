# React Currency Converter 💱

A modern currency converter built using **React + Vite**, styled with **Tailwind CSS**, and powered by **live exchange rates** from the Frankfurter API.

This project focuses on **clean React architecture**, **custom hooks**, and **real-world state management**.

---

## 🚀 Features

- Convert between multiple currencies in real time
- Swap between “From” and “To” currencies
- Live exchange rates via a public API
- Custom React Hook for fetching data
- Loading and error handling
- Dark mode UI using Tailwind CSS
- Fully controlled inputs

---

## 🧠 Tech Stack

- **React** (Functional Components & Hooks)
- **Vite** (Fast build tool)
- **Tailwind CSS**
- **Frankfurter API** (Exchange rates)

---

## 🔁 How It Works

- Exchange rates are fetched using a **custom hook (`useCurrencyInfo`)**
- Rates are dynamically fetched based on the selected base currency
- Conversion updates automatically when:
  - amount changes
  - currency selection changes
  - new rates are fetched from the API

---

## ⚠️ Disclaimer

Exchange rates are indicative and may differ slightly from other platforms due to:
- different data providers
- update frequency
- rounding strategies

