"use client";

import { useSearchParams } from "next/navigation";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function PdfClient() {
  const searchParams = useSearchParams();
  const fileUrl = searchParams.get("file");

  if (!fileUrl) return null;

 const defaultLayoutPluginInstance = defaultLayoutPlugin({
  renderToolbar: (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          GoToPreviousPage,
          GoToNextPage,
          CurrentPageInput,
          NumberOfPages,
          ZoomOut,
          ZoomIn,
        } = slots;

        return (
          <div className="flex items-center gap-3 px-3">
            {/* Page navigation */}
            <GoToPreviousPage />
            <CurrentPageInput />
            <span className="text-white/70">/</span>
            <NumberOfPages />
            <GoToNextPage />

            {/* Zoom controls */}
            <div className="ml-4 flex items-center gap-2">
              <ZoomOut />
              <ZoomIn />
            </div>

            {/* ❌ Download / Print intentionally omitted */}
          </div>
        );
      }}
    </Toolbar>
  ),
});


  return (
    <div
      className="w-full h-screen bg-black"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="h-full">
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}
