module.exports = {
  darkMode: false,
  purge: {
    mode: 'layers',
    layers: ['utilities'],
    content: ['src/components/**', 'src/pages/**'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
    },
  },
};
