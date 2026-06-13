type PaletteColor = {
  name: string;
  token: string;
  hex: string;
};

const palette: PaletteColor[] = [
  { name: "Paper", token: "--paper", hex: "#f8f1e6" },
  { name: "Parchment", token: "--parchment", hex: "#eadcc6" },
  { name: "Sage", token: "--sage", hex: "#52743a" },
  { name: "Leather", token: "--leather", hex: "#694114" },
  { name: "Clay", token: "--clay", hex: "#6a2e17" },
  { name: "Ink", token: "--ink", hex: "#392517" },
];

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16) / 255,
    g: parseInt(value.slice(2, 4), 16) / 255,
    b: parseInt(value.slice(4, 6), 16) / 255,
  };
}

function channel(value: number) {
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(foreground: string, background: string) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

function grade(ratio: number) {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "Large";
  return "Low";
}

export default function PaletteContrast() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="border-t border-line pt-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Palette Check
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-text">
          Manuscrito Tierra
        </h2>
      
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {palette.map((color) => {
          const ratio = contrastRatio("#392517", color.hex);
          const textColor = ratio >= 4.5 ? "#392517" : "#f8f1e6";

          return (
            <article
              className="min-h-40 rounded-lg border border-line p-5"
              key={color.token}
              style={{ backgroundColor: color.hex, color: textColor }}
            >
              <p className="text-lg font-semibold">{color.name}</p>
              <p className="mt-1 font-mono text-sm">{color.hex}</p>
              <p className="mt-8 font-mono text-xs">{color.token}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 overflow-x-auto rounded-lg border border-line bg-surface">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <caption className="px-4 py-3 text-left font-medium text-text">
            Ratio de contraste: texto sobre fondo
          </caption>
          <thead>
            <tr>
              <th className="border-t border-line px-3 py-3 text-left text-muted">
                Texto / Fondo
              </th>
              {palette.map((background) => (
                <th
                  className="border-t border-line px-3 py-3 text-left text-muted"
                  key={background.token}
                >
                  {background.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {palette.map((foreground) => (
              <tr key={foreground.token}>
                <th className="border-t border-line px-3 py-3 text-left font-medium text-text">
                  {foreground.name}
                </th>
                {palette.map((background) => {
                  const ratio = contrastRatio(foreground.hex, background.hex);
                  const rating = grade(ratio);

                  return (
                    <td
                      className="border-t border-line px-3 py-3"
                      key={`${foreground.token}-${background.token}`}
                      style={{
                        backgroundColor: background.hex,
                        color: foreground.hex,
                      }}
                    >
                      <span className="block font-mono">
                        {ratio.toFixed(2)}
                      </span>
                      <span className="text-xs">{rating}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
