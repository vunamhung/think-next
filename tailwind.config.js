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
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
      screens: {
        dlg: { max: '1023px' },
        dmd: { max: '767px' },
      },
      flex: {
        2: '2 1 0%',
        3: '3 1 0%',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      backgroundColor: ['odd', 'before', 'after'],
      borderRadius: ['before', 'after'],
      inset: ['before', 'after'],
      position: ['before', 'after'],
      zIndex: ['before', 'after'],
      backgroundOpacity: ['before', 'after'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-pseudo-selectors'),
  ],
};
