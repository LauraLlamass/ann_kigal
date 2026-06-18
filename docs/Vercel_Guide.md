# Guia rapida: unir este proyecto con Vercel

Proyecto: `ann_kigal`

Repositorio GitHub: `https://github.com/LauraLlamass/ann_kigal`

Rama de produccion recomendada: `main`

Framework: Next.js

## La idea clave

Vercel se conecta al repositorio de GitHub. Cada vez que haces `git push`,
Vercel crea un despliegue.

- Push a `main`: despliegue de produccion.
- Push a otra rama: despliegue preview para revisar antes de mezclar.

## Primera vez: conectarlo desde Vercel

1. Entra en https://vercel.com.
2. Inicia sesion con GitHub.
3. Pulsa `Add New...` y luego `Project`.
4. Busca el repositorio `ann_kigal`.
5. Si no aparece, pulsa para configurar/autorizar GitHub y permite acceso a
   `LauraLlamass/ann_kigal`.
6. Importa el proyecto.
7. Revisa la configuracion:
   - Framework Preset: `Next.js`
   - Root Directory: dejar vacio o `./`
   - Build Command: `npm run build`
   - Output Directory: dejar el valor automatico de Next.js
   - Install Command: normalmente `npm install`
8. Pulsa `Deploy`.

Cuando termine, Vercel dara una URL tipo:

```txt
https://ann-kigal.vercel.app
```

## Despues de conectarlo: publicar cambios

Antes de subir:

```bash
npm run build
git status
git add .
git commit -m "feat: describe el cambio"
git push origin main
```

Vercel detectara el push y desplegara automaticamente.

## Si quieres probar con una rama preview

```bash
git switch -c nombre-del-cambio
git add .
git commit -m "feat: describe el cambio"
git push origin nombre-del-cambio
```

Vercel creara una URL preview. Si todo esta bien, abre una Pull Request en
GitHub y fusiona a `main`. Al fusionar, Vercel actualiza produccion.

## Conectar el proyecto local con Vercel CLI

Esto no es obligatorio si ya lo conectaste desde la web, pero ayuda para
consultar despliegues o variables desde terminal.

Instalar/login:

```bash
npm i -g vercel
vercel login
```

Vincular esta carpeta al proyecto de Vercel:

```bash
vercel link
```

Responder:

- Set up and deploy?: `Y`
- Which scope?: tu usuario/equipo correcto
- Link to existing project?: `Y` si ya lo creaste en Vercel
- Project name?: el proyecto de Ann Kigal

Desplegar manualmente:

```bash
vercel
```

Desplegar manualmente a produccion:

```bash
vercel --prod
```

## Variables de entorno

Si algun dia el proyecto usa claves, no se suben a GitHub.

En Vercel:

1. Project
2. Settings
3. Environment Variables
4. Crear la variable
5. Elegir entornos: Production, Preview y/o Development

Si usas CLI:

```bash
vercel env add NOMBRE_DE_LA_VARIABLE
```

## Checklist mental para no olvidarlo

1. Hago cambios.
2. Compruebo que compila: `npm run build`.
3. Miro el estado: `git status`.
4. Guardo en Git: `git add .` y `git commit -m "..."`
5. Subo a GitHub: `git push origin main`.
6. Vercel publica solo.
7. Si falla, miro los logs en Vercel.

## Donde mirar si algo falla

- Error local: ejecuta `npm run build` y lee el primer error real.
- Error en Vercel: Project > Deployments > despliegue fallido > Logs.
- Repo no aparece: revisar permisos de GitHub dentro de Vercel.
- No se actualiza produccion: revisar que estas empujando a `main`.

## Fuentes utiles

- Vercel Git deployments: https://vercel.com/docs/git
- Vercel CLI project linking: https://vercel.com/docs/cli/link
- Next.js on Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
