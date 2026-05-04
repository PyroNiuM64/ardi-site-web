import fs from "fs"
import path from "path"
import GalerieClient from "./GalerieClient"

export default function GaleriePage() {
  const galerieDir = path.join(process.cwd(), "public", "galerie")

  let dynamicImages: string[] = []
  try {
    if (fs.existsSync(galerieDir)) {
      dynamicImages = fs.readdirSync(galerieDir).filter((f) =>
        /\.(png|jpg|jpeg|gif|webp)$/i.test(f)
      )
    }
  } catch {
    dynamicImages = []
  }

  return <GalerieClient dynamicImages={dynamicImages} />
}
