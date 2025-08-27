import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { Product } from "@/lib/types";

export default async function AdPage({ params }: { params: { uuid: string } }) {
  const dataDirectory = path.join(process.cwd(), "src", "data");
  const filenames = await fs.readdir(dataDirectory);

  const products: Product[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(dataDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      return JSON.parse(fileContents);
    })
  );

  const product = products.find((p) => p.id === params.uuid);

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <Image
        src={product.photoUrl}
        alt={product.title}
        width={600}
        height={400}
      />
      {/* resto do seu componente */}
    </div>
  );
}
