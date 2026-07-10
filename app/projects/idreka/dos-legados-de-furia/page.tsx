import type { Metadata } from "next";
import BookDetails from "@/components/books/BookDetails";
import BookHero from "@/components/books/BookHero";
import BookSynopsis from "@/components/books/BookSynopsis";

export const metadata: Metadata = {
  title: "Dos legados de furia",
  description:
    "Conoce Dos legados de furia, el primer libro de la saga de fantasía Los segundos marcados, escrita por Ann C. Kigal.",
};

export default function DosLegadosDeFuriaPage() {
  return (
    <div className="bg-paper text-ink">
      <BookHero />
      <BookSynopsis />
      <BookDetails />
    </div>
  );
}
