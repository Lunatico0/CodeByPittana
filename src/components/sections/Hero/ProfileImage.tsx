import Image from "next/image"

export const ProfileImage = () => {
  return (
    <div className="relative max-w-64 mx-auto group hover:scale-110 duration-300"
    >
      <div className="aspect-[3/4] grid items-end rounded-b-full overflow-hidden"
      >
        <div className="absolute aspect-square mx-auto object-cover inset-[auto_0_0] rounded-full border-4 border-text bg-gradient-to-br from-primary to-accent"
        />
        <Image
          src="/CVImage(1).png"
          alt="Foto de Patricio Pittana"
          width={320}
          height={320}
          className="relative right-3 top-5 scale-150 group-hover:-translate-y-4 duration-300"
        />
      </div>
    </div>
  )
}
