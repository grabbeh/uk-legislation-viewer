const Heading = {
  fontWeight: 'bold',
  my: 0
}

export default {
  breakpoints: ['40em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1024
  },
  colors: {
    text: 'black',
    background: 'white',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#f0e',
        gray: '#222',
        lightgray: '#111',
        highlight: '#001119'
      },
      cyan: {
        text: '#023',
        background: '#0ff',
        primary: '#03c',
        secondary: '#01a',
        gray: '#0cc',
        lightgray: '#0ee',
        highlight: '#0de'
      },
      gray: {
        text: '#eef',
        background: '#333336',
        primary: '#09f',
        secondary: '#0bf',
        gray: '#55555a',
        lightgray: '#444448',
        highlight: '#33444c'
      },
      book: {
        text: '#322',
        background: '#fff9f9',
        primary: '#c30',
        secondary: '#400',
        gray: '#e9e6e6',
        lightgray: '#f9f6f6'
      },
      magenta: {
        text: '#203',
        background: '#f3f',
        primary: '#208',
        secondary: '#106',
        gray: '#c0c',
        lightgray: '#e0e'
      }
    },

    katie: 'papayawhip',
    black: '#000',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: ' #777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    transparent: 'transparent',
    'black-90': 'rgba(0,0,0,.9)',
    'black-80': 'rgba(0,0,0,.8)',
    'black-70': 'rgba(0,0,0,.7)',
    'black-60': 'rgba(0,0,0,.6)',
    'black-50': 'rgba(0,0,0,.5)',
    'black-40': 'rgba(0,0,0,.4)',
    'black-30': 'rgba(0,0,0,.3)',
    'black-20': 'rgba(0,0,0,.2)',
    'black-10': 'rgba(0,0,0,.1)',
    'black-05': 'rgba(0,0,0,.05)',
    'black-025': 'rgba(0,0,0,.025)',
    'black-0125': 'rgba(0,0,0,.0125)',
    'white-90': 'rgba(255,255,255,.9)',
    'white-80': 'rgba(255,255,255,.8)',
    'white-70': 'rgba(255,255,255,.7)',
    'white-60': 'rgba(255,255,255,.6)',
    'white-50': 'rgba(255,255,255,.5)',
    'white-40': 'rgba(255,255,255,.4)',
    'white-30': 'rgba(255,255,255,.3)',
    'white-20': 'rgba(255,255,255,.2)',
    'white-10': 'rgba(255,255,255,.1)',
    'white-05': 'rgba(255,255,255,.05)',
    'white-025': 'rgba(255,255,255,.025)',
    'white-0125': 'rgba(255,255,255,.0125)',
    'dark-red': '#e7040f',
    red: '#ff4136',
    'light-red': '#ff725c',
    orange: '#ff6300',
    gold: '#ffb700',
    yellow: '#ffd700',
    'light-yellow': '#fbf1a9',
    purple: '#946dff',
    'light-purple': '#a463f2',
    'dark-pink': '#d5008f',
    'hot-pink': ' #ff41b4',
    pink: '#ff80cc',
    'light-pink': '#ffa3d7',
    'dark-green': '#137752',
    green: '#19a974',
    'light-green': '#6dffa8',
    navy: '#001b44',
    'dark-blue': '#00449e',
    blue: '#357edd',
    'light-blue': '#96ccff',
    'lightest-blue': '#cdecff',
    turquoise: '#6de2ff',
    'washed-blue': '#f6fffe',
    'washed-green': '#e8fdf5',
    'washed-yellow': '#fffceb',
    'washed-red': '#ffdfdf'
  },
  radii: [0, 2, 4, 16, 9999, '100%'],
  fonts: {
    sansSerif:
      'Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    serif: 'Domine, Times New Roman, Georgia'
  },
  fontSizes: [12, 14, 16, 18, 22, 26, 36, 48, 60, 72, 100],
  fontWeights: {
    light: 250,
    body: 300,
    subtitle: 600,
    bold: 700,
    heavy: 900
  },
  lineHeights: {
    text: '24px',
    subtitle: '30px',
    medium: '36px',
    tagline: '46px',
    heading: '68px',
    heavy: '90px'
  },
  styles: {
    div: {},
    p: {
      fontFamily: 'sansSerif',
      fontSize: 5
    },
    h1: {
      ...Heading
    },
    h2: {
      ...Heading
    },
    h3: {
      ...Heading
    },
    code: {
      p: 3,
      mt: 3,
      overflowX: 'auto',
      fontSize: 3
    }
  },
  cards: {
    primary: {}
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: 4
    }
  }
}
