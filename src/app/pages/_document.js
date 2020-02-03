import Document, { Html, Head, Main, NextScript } from 'next/document'

class HtmmlDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html> 
        <Head>
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com/css?family=Lato&display=swap"
                as="font"
                crossOrigin=""
            />
            <link 
                rel="stylesheet" 
                type="text/css" 
                href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                crossOrigin=""
            />
            <link
                rel="stylesheet"
                href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
      </Html>
    )
  }
}
 
export default HtmmlDocument