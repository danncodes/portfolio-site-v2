module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor: {
          theme: {
            primary: '#26252a',
            secondary: "#303030"
          }
        },
        fontFamily: {
          inter: "'Inter', sans-serif;",
          fira: "'Fira Code', monospace;",
        },
        textColor: {
          primary: {
            100: "#fdfdfd",
            200: "#b0b1bc",
          },
          secondary: '#59e4a0',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  