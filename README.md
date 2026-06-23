# Ann C. Kigal

Web oficial de Ann C. Kigal, desarrollada con Next.js, React y Tailwind CSS. El proyecto esta pensado para crecer por secciones y componentes reutilizables.

## Arranque rapido

Instalar dependencias:

```bash
npm install
```

Levantar el entorno local:

```bash
npm run dev
```

Abrir en el navegador:

```bash
http://localhost:3000
```

Comprobar que el proyecto compila:

```bash
npm run build
```

## Estructura del proyecto

- `app/`: rutas principales de la web. Cada carpeta suele representar una pagina, por ejemplo `app/about/page.tsx`.
- `src/components/`: componentes reutilizables. Las secciones grandes de una pagina deberian vivir aqui.
- `src/components/ui/`: componentes genericos de interfaz, como botones o enlaces.
- `public/images/`: imagenes usadas por la web.
- `public/icons/`: iconos sociales y otros recursos pequenos.
- `docs/`: documentacion interna, como guia de colores o notas de despliegue.

## Como tocar una pagina

1. Busca la ruta en `app/`.
2. Si el cambio es pequeno, ajusta el componente que ya usa esa pagina.
3. Si la seccion empieza a crecer, crea un componente dentro de `src/components/`.
4. Mantén la pagina como composicion de componentes, no como un archivo enorme.

Ejemplo:

```tsx
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCreativeFocus />
      <AboutCallout />
    </>
  );
}
```

## Estilos

Los colores base estan definidos en `app/globals.css` como variables CSS y expuestos a Tailwind. Antes de crear un color nuevo, revisa si ya existe uno parecido.

Los componentes usan clases de Tailwind directamente. Conviene mantener estilos consistentes: mismas separaciones, mismos radios y mismos colores para elementos parecidos.

## Antes de guardar cambios importantes

Ejecuta:

```bash
npm run build
```

Si has tocado textos, enlaces o rutas, revisa la pagina en local y comprueba que los botones navegan a donde deben.
