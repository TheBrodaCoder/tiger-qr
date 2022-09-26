import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Tiger Web" />
        <meta
          name="description"
          content="The personal website of Ruben Tigre, an 'always in good mood' Frontend developer"
        />
        <meta property="og:title" content="Ruben Tigre | Frontend developer" />
        <meta
          property="og:description"
          content="The personal website of Ruben Tigre, an 'always in good mood' Frontend developer"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="/mediumTigerIcon.png"
        />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rubentigre.dev" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
