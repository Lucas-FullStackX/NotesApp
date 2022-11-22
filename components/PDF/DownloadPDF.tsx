import { PDFDownloadLink } from '@react-pdf/renderer';
import { NoteDetailType } from '../../hooks/useDetailNote';
import PDFComponent from './PDFComponent';

export default function DownloadPDF({
  data,
  children
}: {
  children: JSX.Element;
  data: NoteDetailType;
}): JSX.Element {
  console.log(data, 'exist');
  return (
    <>
      {(() => data !== undefined)() && data.id ? (
        <PDFDownloadLink
          document={<PDFComponent data={data} />}
          fileName={`Nota-${data.id}-${new Date()}.pdf`}
        >
          {obj => (obj.loading ? <div>Loading</div> : <>{children}</>)}
        </PDFDownloadLink>
      ) : (
        <></>
      )}
    </>
  );
}
