import Quote from "@/components/quote";
import { QUOTES } from "@/data";

export default function Home() {
  const quotes = QUOTES;

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl">
        <h1 className="text-center text-2xl font-medium pb-4">Random Quote</h1>
        <Quote quote={randomQuote} />
      </div>
    </div>
  );
}
