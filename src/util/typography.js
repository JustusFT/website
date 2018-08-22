import Typography from "typography"

const typography = new Typography({
  scaleRatio: 3,
  googleFonts: [{
    name: 'Poppins',
    styles: ['700']
  }, {
    name: 'Rubik',
    styles: ['400', '700']
  }],
  headerFontFamily: ['Poppins', 'sans-serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
})

export default typography
