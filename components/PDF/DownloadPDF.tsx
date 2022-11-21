import { PDFDownloadLink } from '@react-pdf/renderer';
import { NoteData } from '../../hooks/useSearchData';
import PDFComponent from './PDFComponent';

export default function DownloadPDF({
  data,
  children
}: {
  children: JSX.Element;
  data: NoteData;
}): JSX.Element {
  return (
    <PDFDownloadLink
      document={<PDFComponent data={data} />}
      fileName={`Nota-${data.id}-${new Date()}.pdf`}
    >
      {children}
    </PDFDownloadLink>
  );
}
