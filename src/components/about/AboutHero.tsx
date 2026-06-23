import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.72fr] md:items-center lg:py-20">
        <div>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
            Ann C. Kigal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam ultrices tellus ut auctor venenatis. Vivamus eget nisi lacus.
            Proin eget viverra risus. Nam in pretium ex. Morbi faucibus arcu sem,
            nec tempor dui maximus eget. Nullam varius in dolor nec finibus.
            Integer leo diam, vulputate ac tempor et, dignissim porta arcu.
            Nullam quis tempor urna. Sed auctor ut neque sit amet imperdiet.
            Quisque nec iaculis velit, id lobortis nulla.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Duis sagittis, urna vitae venenatis facilisis, risus risus rhoncus nisl, 
            at cursus metus nisl et lorem. Nulla sed lectus tempor, varius urna quis, 
            laoreet risus. Cras erat diam, elementum sed nisl vitae, molestie rutrum diam. 
            Curabitur risus ligula, molestie sit amet turpis sed, elementum molestie tellus. 
            Phasellus urna justo, commodo dignissim urna eget, dictum luctus velit. 
            Cras ac magna eleifend sem malesuada tincidunt. Etiam gravida mi id lacus vulputate ornare. 
            Pellentesque ut venenatis nisi. Donec volutpat vehicula metus, commodo eleifend libero hendrerit at. 
            Proin quis velit id eros tincidunt tempor. Praesent lobortis augue vehicula nibh laoreet, 
            et vestibulum libero ullamcorper. Duis et neque turpis. Morbi gravida eu velit in placerat. 
            Aliquam erat volutpat. Nam sed eleifend dolor, a semper lectus. Suspendisse vestibulum augue non erat pellentesque, 
            sit amet sodales quam suscipit.
          </p>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-xl border border-line bg-clay md:min-h-[28rem]">
          <Image
            src="/images/fotobase.png"
            alt="Retrato editorial provisional de Ann C. Kigal"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 420px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
