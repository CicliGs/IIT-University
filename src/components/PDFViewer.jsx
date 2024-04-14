import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { LocalizationMap } from "@react-pdf-viewer/core"; //ts localization={ru_RU as unknown as LocalizationMap}
import ru_RU from '@react-pdf-viewer/locales/lib/ru_RU.json';

const PDFViewer = ({ fileUrl }) => {
  const newPlugin = defaultLayoutPlugin();
  return (
    <>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
          width: "70%",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={fileUrl} plugins={[newPlugin]} localization={ru_RU}/>
        </Worker>
      </div>
    </>
  );
};

export default PDFViewer;
