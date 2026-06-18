import BookCharacters from "@/components/books/BookCharacters";
import BookDetails from "@/components/books/BookDetails";
import BookHero from "@/components/books/BookHero";
import BookSynopsis from "@/components/books/BookSynopsis";

export default function DosLegadosDeFuriaPage() {
  return (
    <div className="bg-paper text-ink">
      <BookHero />
      <BookCharacters />
      <BookSynopsis />
      <BookDetails />
    </div>
  );
}
