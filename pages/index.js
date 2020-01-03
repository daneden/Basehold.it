import Head from 'next/head'
import React from 'react'

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Basehold.it - quick, painless, javascript-free baseline overlays
        </title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,width=device-width"
        />
        <link rel="stylesheet" href="/24" />
        <link rel="stylesheet" href="s.css" />
      </Head>
      <h1>Basehold.it</h1>
      <h2 className="tagline">
        A quick, painless, javascript-free baseline overlay.
      </h2>
      <p>
        Baseline grids are super helpful for web designers, allowing us to
        maintain vertical rhythm on our designs. But short of a few Javascript
        bookmarklets, there isn't really a simple way to get a baseline grid
        overlay on our designs. Enter <strong>Basehold.it</strong>.
      </p>
      <p>
        Using Basehold.it couldn't be easier. Simply add it like any other
        stylesheet:
      </p>
      <p>
        <pre>&lt;link rel="stylesheet" href="//basehold.it/24"></pre>
      </p>
      <p>
        Just like that. Easy, right? That'll get you a 24px baseline grid
        overlay, just like the one you can see on this page. For more
        information, or to look at the code (and maybe even contribute some code
        yourself), check out{' '}
        <a href="https://github.com/daneden/Basehold.it">the repo on Github.</a>
      </p>
      <h2>Additional options</h2>
      <p>
        You can also specify a custom colour using Hex values, RGB values, or
        RGBA values, like so:
      </p>
      <p>
        <pre>&lt;link rel="stylesheet" href="//basehold.it/24/ff0000"&gt;</pre>
      </p>
      <p>
        <pre>&lt;link rel="stylesheet" href="//basehold.it/24/255/0/0"&gt;</pre>
      </p>
      <p>
        <pre>
          &lt;link rel="stylesheet" href="//basehold.it/24/255/42/85/0.5"&gt;
        </pre>
      </p>
      <p>
        Neato! One last thing - if you just want the image, and not the pseudo
        element, so that you can apply it in your own CSS file, that's easy too.
        Simply write your CSS like this:
      </p>
      <p>
        <pre>
          {`html {
    background-image: url(//basehold.it/i/24); /* 24px baseline */
    background-image: url(//basehold.it/i/24/ff0000); /* with Hex colour */
    background-image: url(//basehold.it/i/24/255/0/0); /* with RGB colour */
    background-image: url(//basehold.it/i/24/255/0/0/0.85); /* with RGBA colour */
}`}
        </pre>
      </p>
      <footer role="contentinfo">
        <p>
          Another thing by <a href="//twitter.com/_dte">Dan Eden</a> &amp;{' '}
          <a href="//twitter.com/michaelw90">Michael Wright.</a>
        </p>
      </footer>
    </>
  )
}
