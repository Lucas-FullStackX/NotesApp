import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from '@react-pdf/renderer';
import { NoteData } from '../../hooks/useSearchData';
import { humanizeDate } from '../../src/utils';

// Create styles
const styles = StyleSheet.create({
  Row: {
    display: 'flex',
    flexDirection: 'row'
  },
  RowReverse: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },

  Wrap: {
    flexWrap: 'wrap'
  },

  Column: {
    display: 'flex',
    flexDirection: 'column'
  },
  ColumnReverse: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },

  PerfectCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  VerticalCenter: {
    display: 'flex',

    alignItems: 'center'
  },
  HorizontalCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  spaceAround: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 15
  },
  subTitle: {
    fontSize: 12,
    color: 'white'
  },
  content: {
    fontSize: 10,
    marginTop: 5
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

interface PdfComponentProps {
  data: NoteData;
}

/**
 * @param {PdfComponentProps} props - Props.
 * @returns PDF Component.
 */
export default function PDFComponent({ data }: PdfComponentProps): JSX.Element {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={[
            { backgroundColor: '#009688', width: '100%', height: 150 },
            styles.PerfectCenter,
            styles.Column
          ]}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>NOTAS ENFERMERIA</Text>
          <Text style={{ fontSize: 20, color: 'white' }}>
            FECHA:{humanizeDate(data.created_at)}
          </Text>
        </View>
        <View style={[{ padding: 5 }, styles.Row, styles.Wrap]}>
          <View style={[{ width: '50%', padding: 10 }]}>
            <Text style={styles.title}>Informacion</Text>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginBottom: 2,
                marginRight: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Paciente</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Edad</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Estado General</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Estado Animico</Text>
            </View>
          </View>
          <View style={[styles.Row, { width: '100%', padding: 10 }]}>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>
                {Array.isArray(data?.patient)
                  ? data?.patient[0].name
                  : data?.patient?.name}
              </Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>
                {Array.isArray(data?.patient)
                  ? data?.patient[0].date_of_birth
                  : data?.patient?.date_of_birth}
              </Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data.general_state}</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data.anemic_state}</Text>
            </View>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginBottom: 2,
                marginRight: 10,
                marginTop: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Piel</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Deambulacion</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Caidas</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Deposicion</Text>
            </View>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              { width: '100%', padding: 10 }
            ]}
          >
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data?.skin}</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data?.wandering}</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data?.falls ? 'SI' : 'NO'}</Text>
              {data?.falls && data?.falls.length > 0 && (
                <Text style={styles.content}>{data?.falls}</Text>
              )}
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>
                {data?.deposition ? 'SI' : 'NO'}
              </Text>
              {data?.deposition && data?.deposition.length > 0 && (
                <Text style={styles.content}>{data?.deposition}</Text>
              )}
            </View>
          </View>

          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Diuresis</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Emesis</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Alimentacion</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Protesis</Text>
            </View>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              { width: '100%', padding: 10 }
            ]}
          >
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data.dieresis ? 'SI' : 'NO'}</Text>
              {data.dieresis && data.dieresis.length > 0 && (
                <Text style={styles.content}>{data.dieresis}</Text>
              )}
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data?.emesis}</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}> {data.food ? 'SI' : 'NO'}</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>
                {data.prosthesis ? 'SI' : 'NO'}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 2,
                marginTop: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '100%' }]}>
              <Text style={styles.subTitle}>Novedades</Text>
            </View>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              styles.Wrap,
              { width: '100%', padding: 10 }
            ]}
          >
            <View style={[styles.Column, { width: '100%' }]}>
              <Text style={[styles.content, { textAlign: 'justify' }]}>
                {data?.news}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '50%' }]}>
              <Text style={styles.subTitle}>Medicamentos</Text>
            </View>
            <View style={[styles.Column, { width: '50%' }]}>
              <Text style={styles.subTitle}>Patron de Sueño</Text>
            </View>
          </View>
          <View style={[styles.Row, { width: '100%', padding: 10 }]}>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data?.medicines}</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.content}>{data.sleep}</Text>
            </View>
          </View>
        </View>
        <View style={[{ padding: 5 }, styles.Row, styles.Wrap]}>
          <View style={{ width: '100%', padding: 10 }}>
            <Text style={styles.title}>Signos Vitales</Text>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Tension Arterial</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Frecuencia Cardiaca</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Saturacion</Text>
            </View>
            <View style={[styles.Column, { width: '25%' }]}>
              <Text style={styles.subTitle}>Temperatura</Text>
            </View>
            {/* <View
              style={[
                styles.Row,
                styles.VerticalCenter,
                { width: '100%', padding: 10 }
              ]}
            >
              <View style={[styles.Column, { width: '25%' }]}>
                <Text style={styles.content}>
                  {data.signs.sanguine_pressure}
                </Text>
              </View>
              <View style={[styles.Column, { width: '25%' }]}>
                <Text style={styles.content}>
                  {data?.signs.cardiac_frequency}
                </Text>
              </View>
              <View style={[styles.Column, { width: '25%' }]}>
                <Text style={styles.content}> {data.signs.saturation}</Text>
              </View>
              <View style={[styles.Column, { width: '25%' }]}>
                <Text style={styles.content}>{data.signs.temperature}ºC</Text>
              </View>
            </View> */}
            {/* <View
              style={[
                styles.Row,
                styles.VerticalCenter,
                {
                  backgroundColor: '#009688',
                  width: '100%',
                  height: 20,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 2,
                  marginTop: 10,
                  padding: 2
                }
              ]}
            >
              <View style={[styles.Column, { width: '100%' }]}>
                <Text style={styles.subTitle}>Novedades</Text>
              </View>
            </View>
            <View
              style={[
                styles.Row,
                styles.VerticalCenter,
                styles.Wrap,
                { width: '100%', padding: 10 }
              ]}
            >
              <View style={[styles.Column, { width: '100%' }]}>
                <Text style={[styles.content, { textAlign: 'justify' }]}>
                  {data?.signs.news}
                  </Text>
                  </View>
                </View> */}
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              {
                backgroundColor: '#009688',
                width: '100%',
                height: 20,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 2,
                marginTop: 10,
                padding: 2
              }
            ]}
          >
            <View style={[styles.Column, { width: '100%' }]}>
              <Text style={styles.subTitle}>Novedades</Text>
            </View>
          </View>
          <View
            style={[
              styles.Row,
              styles.VerticalCenter,
              styles.Wrap,
              { width: '100%', padding: 10 }
            ]}
          ></View>
          <View style={[{ padding: 5 }, styles.Row, styles.Wrap]}>
            <View style={{ width: '100%', padding: 10 }}>
              <Text style={styles.title}>Asistente</Text>
            </View>
            <View style={[styles.Column, { width: '100%', padding: 2 }]}>
              <Image
                style={{ width: 60, height: 60 }}
                source={data?.assistant ?? data?.assistant ?? ' '}
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
