// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="bg-gray-100 p-0 m-0 box-border text-gray-800 font-yekan">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
