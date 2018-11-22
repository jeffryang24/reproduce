import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  DocumentProps
} from "next/document";
import * as router from "next/router";
import { extractCritical } from "emotion-server";

declare module "next/document" {
  interface DocumentProps<Q extends router.DefaultQuery = router.DefaultQuery> {
    ids?: string[];
    css?: string;
  }
}

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }: NextDocumentContext) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props: DocumentProps) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  public render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
