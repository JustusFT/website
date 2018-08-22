import Typography from "typography"

const typography = new Typography({
  scaleRatio: 2.5,
  googleFonts: [{
    name: 'Poppins',
    styles: ['700']
  }, {
    name: 'Rubik',
    styles: ['400', '700']
  }],
  headerFontFamily: ['Poppins', 'sans-serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
  includeNormalize: false
})

export default typography
