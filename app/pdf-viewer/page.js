"use client"
import dynamic from "next/dynamic";

const PdfClient = dynamic(() => import("./pdfClient"), { ssr: false });

export default function PdfViewerPage() {
  return <PdfClient />;
}
