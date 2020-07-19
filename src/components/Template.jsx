export default (props) => {
  const { options } = props.htmlWebpackPlugin;
  const { files } = props.htmlWebpackPlugin;
  const { chunks } = props.webpack;
  const polyfillsEntry = files.chunks.polyfills.entry;
  const polyfillsScript = `window.fetch || document.write('<script src="${polyfillsEntry}"><\\/script>')`;

  const handleChunks = () => {
    for (let chunk of chunks) {
      if (chunk.names.length === 1 && chunk.names[0] === 'polyfills') continue;
      for (let file of chunk.files) {
        if (options.preload && file.match(/\.(js|css)$/)) {
          <link rel="preload" href={files.publicPath + file} as={file.match(/\.css$/) ? 'style' : 'script'} />;
        }
        else if (file.match(/manifest\.json$/)) {
          <link rel="manifest" href={files.publicPath + file} />;
        }
      }
    }
  };

  return (
    <html>
      <head>
        <title>Dare IT | Program mentorski dla dziewczyn</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fragment" content="!" />

        <meta name="keywords" content="kobiety w it, dziewczyny w it, programistki, kobiety-programistki, jak zostać programistką, technologie dla dziewczyn" />
        <meta name="description" content="Dare IT to bezpłatny program mentorski dla dziewczyn stworzony w celu ułatwienia im startu w IT. Uczestniczki będą mogły bezpłatnie zgłębiać wiedzę w wybranym przez siebie obszarze: UX, UI, Web Development, Product Management lub Digital Marketing." />

        <meta itemprop="name" content="Dare IT | Program mentorski dla dziewczyn" />
        <meta itemprop="description" content="" />
        <meta itemprop="image" content="https://dareit.org/assets/hero-image.png" />
        <meta itemprop="url" content="dareit.org" />

        <meta name="twitter:card" content="https://dareit.org/assets/hero-image.png" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="Dare IT | Program mentorski dla dziewczyn" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="https://dareit.org/assets/hero-image.png" />
        <meta name="twitter:image:alt" content="Dare IT" />

        <meta property="og:title" content="Dare IT | Program mentorski dla dziewczyn" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="dareit.org" />
        <meta property="og:image" content="https://dareit.org/assets/hero-image.png" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="Dare IT | Program mentorski dla dziewczyn " />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ff227a" />

        <link rel="manifest" href="/manifest.json" />
        { options.manifest.theme_color && <meta name="theme-color" content={options.manifest.theme_color} /> }
        { handleChunks() }
      </head>
      <body>
        { options.ssr({ url: '/' }) }
        <script defer src={files.chunks.bundle.entry} />
        {/* eslint-disable react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: polyfillsScript }} />
        {/* eslint-enable react/no-danger */}
      </body>
    </html>
  );
};
