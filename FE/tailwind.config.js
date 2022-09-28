const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'corporate',
    themes: [
      {
        mytheme: {
          primary: '#001744',

          secondary: '#ce1443',

          accent: '#b2355f',

          neutral: '#1F2128',

          'base-100': '#FFFFFF',

          info: '#06b6d4',

          success: '#47D78F',

          warning: '#F4B643',

          error: '#FA1933',
        },
      },
    ],
  },
};
