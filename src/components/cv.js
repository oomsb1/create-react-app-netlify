import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const CV = () => {
  return (
    <div>
      <br />
      <Document file="/downloads/CVBramOoms.pdf" style={{}}>
        <Page pageNumber={1} />
      </Document>
      <a className="btn btn-primary" href="/downloads/CVBramOoms.pdf"  role="button" style={{ margin: 5 }}>
        Open CV
      </a>
      <a className="btn btn-primary" href="/downloads/CVBramOoms.pdf" role="button" download>
        Download CV
      </a>
    </div>
  );
};

export default CV;
