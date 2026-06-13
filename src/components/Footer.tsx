export default function Footer() {
  return (
    <footer className="border-t border-line bg-parchment">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm text-muted sm:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-2">
          <p className="font-semibold text-text">Ann C. Kigal</p>
          <p>&copy; 2026</p>
        </div>

        <p className="self-center text-center text-xl font-semibold tracking-wide text-text">
          ACK
        </p>

        <div className="space-y-2 sm:text-right">
          <p>annckigal@gmail.com</p>
          <p>Newsletter pendiente</p>
        </div>
      </div>
    </footer>
  );
}
