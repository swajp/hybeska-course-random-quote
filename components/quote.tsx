import { QuoteProps } from "@/data";

export default function Quote({ quote }: { quote: QuoteProps }) {
  return (
    <div>
      <blockquote>{quote.text}</blockquote>
      <cite>{quote.author}</cite>
    </div>
  );
}
