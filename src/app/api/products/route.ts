import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Product } from "@/lib/types";

export async function GET() {
  const dataDirectory = path.join(process.cwd(), "src", "data");
  const filenames = fs.readdirSync(dataDirectory);
  const products: Product[] = filenames.map((filename) => {
    const filePath = path.join(dataDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  });

  return NextResponse.json(products);
}
