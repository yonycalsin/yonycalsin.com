import ReactPDF from '@react-pdf/renderer'

export async function getStaticProps() {
  return { props: { isDark: true } }
}

export default function Resume() {
  return (
    <ReactPDF.PDFViewer className="absolute top-0 left-0 w-full h-full">
      <ReactPDF.Document title="Hello World" author="Yony Calsin">
        <ReactPDF.Page size="A4">
          <ReactPDF.View>
            <ReactPDF.Text>Yony Calsin Resume</ReactPDF.Text>
          </ReactPDF.View>
        </ReactPDF.Page>
      </ReactPDF.Document>
    </ReactPDF.PDFViewer>
  )
}

