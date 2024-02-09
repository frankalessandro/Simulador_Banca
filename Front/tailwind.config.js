const colors = require('tailwindcss/colors');

module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        darkGreen: '#325259',
        green: '#04D9B2',
        neutralGreen: '#038C73',
        lightGreen: '#80F2DD',
        lightGray: '#F2F2F2',
        black: colors.black,
        white: colors.white,
      },
      padding: {
        '16rem': '16rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  purge: {
    content: [
      // Rutas de tus archivos JSX o HTML
      './src/**/*.jsx',
      './public/index.html',
    ],
    options: {
      // Agrega excepciones para propiedades específicas
      safelist: ['class', 'fill-rule', 'clip-rule', 'stroke-linecap', 'stroke-linejoin', 'stroke-width'],
    },
  },
}



module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],

};
