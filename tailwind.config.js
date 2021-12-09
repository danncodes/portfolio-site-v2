module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor: {
          theme: {
            primary: '#0a192c'
          }
        },
        fontFamily: {
          inter: "'Inter', sans-serif;",
          fira: "'Fira Code', monospace;",
        },
        textColor: {
          primary: {
            100: "#8892b0",
            200: "#a8b2d1",
            300: "#ccd6f6"
          },
          secondary: '#64ffda',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  