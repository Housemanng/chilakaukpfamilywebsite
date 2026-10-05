const scenes = [
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    label: "The children",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    label: "The grandchildren",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    label: "The gathering",
  },
  {
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1400&q=80",
    label: "Umunama",
  },
  {
    src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=1000&q=80",
    label: "In celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    label: "The compound",
  },
];

const seats = [
  { title: "The stool", text: "Ntuala Nnamoha 1 of Umunama, traditional ruler of Ezinihitte Mbaise Local Government Area." },
  { title: "The household", text: "A royal home of more than 129 wives, remembered as one compound and one lineage." },
  { title: "The children", text: "More than 300 sons and daughters, and more than 2,000 grandchildren and great-grandchildren." },
];

export default function App() {
  return (
    <div className="uli-field min-h-screen font-body text-uli">
      <header className="sticky top-0 z-20 border-b border-odo/40 bg-nzu/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="font-display text-2xl leading-none">
            Chilaka Ukpo
            <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.22em] text-uhie">Royal family</span>
          </a>
          <nav className="hidden gap-5 text-sm font-medium md:flex">
            <a href="#legacy" className="hover:text-uhie">Legacy</a>
            <a href="#umunama" className="hover:text-uhie">Umunama</a>
            <a href="#stool" className="hover:text-uhie">The stool</a>
            <a href="#household" className="hover:text-uhie">Household</a>
            <a href="#gallery" className="hover:text-uhie">Gallery</a>
          </nav>
          <p className="max-w-[42vw] truncate text-right text-[10px] uppercase tracking-[0.12em] text-palm sm:max-w-none sm:text-xs sm:tracking-[0.16em]">chilakaukporoyalfamily.org</p>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden sm:min-h-[92vh]">
          <img src="/images/eze-record.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-uli via-uli/80 to-uli/45" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-16 sm:pb-40 sm:pt-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-odo sm:text-xs sm:tracking-[0.28em]">Nnoo · Umunama · Ezinihitte Mbaise</p>
            <h1 className="royal-heading mt-4 max-w-5xl font-display text-5xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">
              Eze Anthony Chilaka-Ukpo
            </h1>
            <p className="mt-4 font-display text-2xl italic text-nzu sm:mt-6 sm:text-4xl">Ntuala Nnamoha 1 of Umunama</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-nzu/85 sm:mt-6 sm:text-lg">
              Late traditional ruler of the whole of Ezinihitte Mbaise Local Government Area, Imo State.
              His household is remembered for more than 129 wives, more than 300 children, and more than 2,000 grandchildren and great-grandchildren.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#legacy" className="rounded-[10px] bg-uhie px-5 py-3 text-center text-sm font-semibold text-nzu">Read the legacy</a>
              <a href="#household" className="rounded-[10px] border border-nzu/40 px-5 py-3 text-center text-sm font-semibold text-nzu">The household</a>
            </div>
          </div>
        </section>

        <section className="border-y border-oxblood/20">
          <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["129+", "Wives in the royal household"],
              ["300+", "Children of the Eze"],
              ["2000+", "Grandchildren and great-grandchildren"],
              ["LGA", "Ezinihitte Mbaise, under his stool"],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-oxblood/15 px-5 py-6 first:border-t-0 sm:border-l sm:px-6 sm:py-8 sm:[&:nth-child(odd)]:border-l-0 lg:border-t-0 lg:[&:nth-child(odd)]:border-l lg:first:border-l-0">
                <p className="font-display text-4xl text-oxblood sm:text-5xl">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-uli/75 sm:text-sm sm:tracking-[0.14em]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <figure className="gold-frame min-w-0 bg-uli">
            <img src="/images/eze-record.jpg" alt="TopNews National Records feature on Eze Anthony Chilaka-Ukpo" className="block h-auto w-full" />
          </figure>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-uhie sm:tracking-[0.24em]">Featured in the newspaper</p>
            <p className="mt-4 font-display text-2xl leading-none text-palm sm:text-3xl">TopNews National Records</p>
            <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">The man with the largest recorded number of wives</h2>
            <p className="mt-5 text-base leading-relaxed text-uli/85 sm:text-lg">
              The page names him the traditional ruler who married 127 wives and had 260 children.
              The family keeps this clipping with their own account of the house.
            </p>
          </div>
        </section>

        <section id="legacy" className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:gap-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-uhie sm:tracking-[0.24em]">Legacy</p>
            <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">A house, not a rumour</h2>
          </div>
          <div className="min-w-0 space-y-4 text-base leading-relaxed text-uli/85 sm:space-y-5 sm:text-lg">
            <p>
              The children of this house say it plainly: it is not a myth. Eze Chilaka-Ukpo married,
              kept a vast household, and left a lineage that still names him father.
            </p>
            <p>
              A national record published in his lifetime called him the traditional ruler who married
              127 wives and had 260 children. The family now counts the household as more than 129 wives
              and more than 300 children.
            </p>
            <p>
              He sat as Ntuala Nnamoha 1 of Umunama, and as traditional ruler over Ezinihitte Mbaise
              Local Government Area. The stool, the town, and the wider LGA are the ground of this site.
            </p>
            <p>
              His reign is also what he brought into Umunama. He brought Saint Anthony Catholic Church.
              He brought St. Anthony's Primary School, Umunama, Ezinihitte Mbaise, and the large land on which the community built it, with the school field.
              He donated the largest farmland to the community. He brought the market. Around those, he brought
              many other things the town still uses in Umunama, Ezinihitte Mbaise.
            </p>
          </div>
        </section>

        <section id="umunama" className="border-y border-odo/40 bg-clay/70">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-uhie sm:tracking-[0.24em]">Umunama</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-none sm:text-5xl">His legacy</h2>
            <div className="mt-8 grid items-center gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-10">
              <figure className="gold-frame min-w-0 overflow-hidden bg-uli">
                <img src="/images/st-anthony-primary.jpg" alt="St. Anthony's Primary School, Umunama, Ezinihitte Mbaise" className="block h-auto w-full object-cover" />
              </figure>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-uhie">The school</p>
                <h3 className="mt-3 font-display text-4xl leading-none sm:text-5xl">St. Anthony's Primary School</h3>
                <p className="mt-3 font-display text-xl italic text-palm sm:text-2xl">Umunama, Ezinihitte Mbaise</p>
                <p className="mt-4 text-base leading-relaxed text-uli/80 sm:text-lg">
                  He brought the school, so the children of Umunama had a place to learn. This is St. Anthony's Primary School,
                  Umunama, Ezinihitte Mbaise, on the land he gave the community, with the school field in front of it.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["The church", "Saint Anthony Catholic Church", "He brought the Catholic church to Umunama, Saint Anthony Catholic Church, a house of worship for the town."],
                ["The school land", "Ground the town built on", "He gave a large piece of land, and the community built their school on it."],
                ["The school field", "Open ground for the school", "He gave the school field, the open ground beside the school for the children of Umunama."],
                ["The farmland", "Largest farm given to the town", "He donated the largest farmland to the community, land the people of Umunama could farm."],
                ["The market", "Trade in the town", "He brought the market, a meeting ground for trade in Umunama."],
              ].map(([kicker, title, text]) => (
                <article key={title} className="border border-odo bg-nzu p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-uhie">{kicker}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{title}</h3>
                  <p className="mt-3 leading-relaxed text-uli/80">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-uli/80 sm:mt-8 sm:text-lg">
              Church, school, land, and market were not the end of it. Eze Anthony Chilaka-Ukpo set aside
              the ground for the school, the school field, and the largest farmland, and many other things
              the community still counts as his legacy in Umunama, Ezinihitte Mbaise.
            </p>
          </div>
        </section>

        <section id="stool" className="bg-uli text-nzu">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:gap-6 sm:py-16 md:grid-cols-2 xl:grid-cols-3">
            {seats.map((item) => (
              <article key={item.title} className="border border-odo/40 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-odo sm:tracking-[0.2em]">{item.title}</p>
                <p className="mt-3 font-display text-2xl leading-snug sm:mt-4 sm:text-3xl">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="household" className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-uhie sm:tracking-[0.24em]">Wives and children</p>
            <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">A learned house</h2>
            <p className="mt-4 text-base leading-relaxed text-uli/80 sm:text-lg">
              Eze Anthony Chilaka-Ukpo left more than 300 children, and more than 2,000 grandchildren and great-grandchildren.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="border border-odo bg-nzu p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-uhie">Educational background</p>
              <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">Children and grandchildren</h3>
              <p className="mt-3 leading-relaxed text-uli/80">
                The children and the grandchildren were given an education. It began at St. Anthony's Primary School, Umunama, Ezinihitte Mbaise,
                on the large land the community built that school upon, and it continued in the grandchildren and the great-grandchildren of the house.
              </p>
            </article>
            <article className="border border-odo bg-nzu p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-uhie">The next generations</p>
              <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">More than 2,000</h3>
              <p className="mt-3 leading-relaxed text-uli/80">
                The family counts more than 2,000 grandchildren and great-grandchildren, a house still growing from the children of the Eze.
              </p>
            </article>
          </div>
          <div className="mt-12 max-w-2xl">
            <h2 className="font-display text-4xl leading-none sm:text-5xl">Portraits of the house</h2>
            <p className="mt-4 text-base text-uli/75 sm:text-lg">
              These frames are waiting. Photographs of the wives and of the children will be placed here
              by the family. Below, the children and the grandchildren are remembered in the celebration gallery.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {["Wives", "Wives", "Children", "Children", "Children", "Children", "The compound", "Umunama"].map((label, index) => (
              <div key={`${label}-${index}`} className="flex min-h-40 flex-col justify-end border border-odo bg-clay p-3 sm:min-h-52 sm:p-4">
                <span className="font-display text-3xl text-uhie/30">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-6 font-display text-2xl">{label}</p>
                <p className="text-sm text-uli/60">Family photograph to come</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="border-t border-odo/40 bg-clay/60">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-uhie sm:tracking-[0.24em]">Children and grandchildren</p>
            <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">They celebrated him</h2>
            <p className="mt-4 max-w-2xl text-base text-uli/75 sm:text-lg">
              The children and the grandchildren of Eze Anthony Chilaka-Ukpo gathered to celebrate him.
              These pictures hold the gallery until the family’s own photographs of that celebration are placed here.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
              {scenes.map((scene) => (
                <figure key={scene.label} className="gold-frame min-w-0 overflow-hidden bg-uli">
                  <img src={scene.src} alt={scene.label} className="h-56 w-full object-cover sm:h-72" />
                  <figcaption className="bg-nzu px-3 py-3 text-xs uppercase tracking-[0.16em] text-uhie">{scene.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-uhie text-nzu">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
          <div className="min-w-0">
            <p className="font-display text-2xl sm:text-3xl">Chilaka Ukpo Royal Family</p>
            <p className="mt-2 text-sm text-nzu/80">Umunama · Ezinihitte Mbaise · Imo State</p>
          </div>
          <p className="text-sm tracking-wide">chilakaukporoyalfamily.org</p>
        </div>
      </footer>
    </div>
  );
}
