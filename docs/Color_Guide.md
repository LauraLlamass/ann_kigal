# Guia de color

Se usan solo los colores definidos en `app/globals.css`. No clases como
`text-neutral-*`, `bg-white`, `border-gray-*` ni hex directos en componentes.

## Reglas principales

`parchment`

Estados interactivos suaves: hover, transiciones o feedback visual. Tambien se
permite como estado activo de botones solo en el navbar. No  como fondo
global, fondo fijo de cards, secciones internas ni elementos destacados.

```tsx
<a className="hover:bg-parchment" />
<Link className="bg-parchment">Navbar activo</Link>
```

`paper`

Fondo global de la web, zonas de descanso, tarjetas claras y superficies
internas.

```tsx
<section className="bg-paper text-ink" />
<article className="border border-line bg-paper" />
```

`clay`

Secciones importantes: bloques de impacto, llamadas editoriales, tarjetas
destacadas y areas que necesiten peso visual. Si el fondo es `clay`, el texto
principal debe ser `paper`.

```tsx
<section className="bg-clay text-paper" />
<h2 className="text-paper" />
<p className="text-paper" />
```

`ink`

Footer y detalles muy oscuros. Reservado para cierres, texto principal sobre
fondos claros y elementos que tengan que sentirse mas solidos.

```tsx
<footer className="bg-ink text-paper" />
<h1 className="text-ink" />
```

`copper`

Botones, llamadas a la accion y enlaces importantes. Es el color que indica
accion.

Si un elemento usa `bg-copper`, su texto debe ser `paper`. Esta regla tambien
esta reforzada en `app/globals.css` para que cualquier `bg-copper` herede texto
claro por defecto.

```tsx
<a className="bg-copper text-paper hover:bg-clay" />
<a className="text-copper hover:text-clay" />
```

## Hover de botones

Cuando un boton tenga fondo `paper`, `sage` o `clay`, su hover de fondo debe ser
siempre `parchment`. Asi todos los botones claros, verdes o arcilla reaccionan
igual y la interfaz se siente consistente.

```tsx
<a className="bg-paper text-clay hover:bg-parchment" />
<a className="bg-sage text-paper hover:bg-parchment hover:text-ink" />
<a className="bg-clay text-paper hover:bg-parchment hover:text-ink" />
```

## Contraste de botones

Un boton nunca debe tener el mismo color de fondo que la seccion, card o bloque
donde vive. El boton tiene que separarse claramente del fondo.

```txt
Sobre bg-paper  -> usa bg-sage, bg-copper o bg-clay
Sobre bg-clay   -> usa bg-paper o bg-sage
Sobre bg-ink    -> usa bg-paper o bg-sage
Sobre bg-sage   -> usa bg-paper, bg-copper o bg-clay
```

Ejemplo: si una seccion usa `bg-paper`, evita un boton `bg-paper` dentro de esa
seccion.

`sage`

Lineas, separadores y acentos suaves. Usalo para bordes, divisores y estados
secundarios discretos.

Si un elemento usa `bg-sage`, su texto debe ser `paper`. Esta regla tambien
esta reforzada en `app/globals.css` para que cualquier `bg-sage` herede texto
claro por defecto.

```tsx
<div className="border border-line" />
<a className="text-paper hover:text-sage" />
<a className="bg-sage text-paper hover:bg-parchment hover:text-ink" />
```

## Alias utiles

Estos alias ya apuntan a la regla visual:

```txt
background     -> paper
surface        -> paper
surface-strong -> clay
line           -> sage
text           -> ink
muted          -> leather
accent         -> copper
accent-strong  -> clay
```

## Checklist antes de cerrar una pantalla

- El fondo global de la web usa `paper` via `--background`.
- `parchment` se reserva para hover, transiciones, feedback interactivo o activo del navbar.
- Las secciones importantes usan `bg-clay text-paper`.
- El footer usa `bg-ink text-paper`.
- Los botones principales usan `bg-copper text-paper`.
- Ningun boton repite el color de fondo de su seccion o card.
- Los bordes usan `border-line`.
- No hay `neutral`, `gray`, `white`, `black` ni hex directos en JSX.
