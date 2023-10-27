import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
// pick a theme of your choice
import original from 'react95/dist/themes/original';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('ms_sans_seriff.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <MenuList>
          <MenuListItem>🎤 Sing</MenuListItem>
          <MenuListItem>💃🏻 Dance</MenuListItem>
          <Separator />
          <MenuListItem disabled>😴 Sleep</MenuListItem>
        </MenuList>
      </ThemeProvider>
    </>
  )
}
