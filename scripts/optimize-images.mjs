import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");

const images = [
  {
    name: "hero-restaurant",
    url: "https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    width: 2000,
  },
  {
    name: "dining-room",
    url: "https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
    width: 1600,
  },
  {
    name: "private-dining",
    url: "https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=2000",
    width: 2000,
  },
  {
    name: "gourmet-plating",
    url: "https://images.pexels.com/photos/6111928/pexels-photo-6111928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
  {
    name: "dry-aged-ribeye",
    url: "https://images.pexels.com/photos/8697540/pexels-photo-8697540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
  {
    name: "hand-rolled-pasta",
    url: "https://images.pexels.com/photos/29039073/pexels-photo-29039073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
  {
    name: "chef-antoine",
    url: "https://images.pexels.com/photos/4253130/pexels-photo-4253130.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    width: 1200,
  },
  {
    name: "chocolate-souffle",
    url: "https://images.pexels.com/photos/13878326/pexels-photo-13878326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
  {
    name: "atlantic-salmon",
    url: "https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
  {
    name: "craft-cocktails",
    url: "https://images.pexels.com/photos/31057721/pexels-photo-31057721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
  {
    name: "spring-starters",
    url: "https://images.pexels.com/photos/15801057/pexels-photo-15801057.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    width: 1000,
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const image of images) {
  const outPath = path.join(outDir, `${image.name}.webp`);
  if (fs.existsSync(outPath)) {
    console.log(`skip ${image.name}.webp (exists)`);
    continue;
  }

  console.log(`downloading ${image.name}...`);
  const response = await fetch(image.url);
  if (!response.ok) {
    throw new Error(`Failed to download ${image.name}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer)
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);

  const stats = fs.statSync(outPath);
  console.log(`  -> ${image.name}.webp (${(stats.size / 1024).toFixed(1)} KB)`);
}

console.log("Done! All images optimized to WebP.");
