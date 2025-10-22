import TechPill from "@ui/TechPill"
import { Marquee } from "@/src/components/ui/marquee"

const techs = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "TailwindCSS",
  "Astro",
]

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-6xl">
      <h3 className="text-center pb-4 font-semibold py-2 text-base md:text-2xl text-balance">Principales tecnologias con las que trabajo</h3>
      <Marquee speed="fast" pauseOnHover={true}>
        {techs.map((tech, index) => (
          <TechPill key={index} name={tech} />
        ))}
      </Marquee>
    </div>
  )
}
