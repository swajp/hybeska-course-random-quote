import { QuoteProps } from "@/data";

export default function Quote({ quote }: { quote: QuoteProps }) {
  return (
    <div>
      <blockquote className="max-w-lg text-xl text-center">
        <span className="font-bold text-2xl">“</span>
        {quote.text}
        <span className="font-bold text-2xl">”</span>
      </blockquote>
      <cite className="flex justify-end mt-2">- {quote.author}</cite>
    </div>
  );
}
