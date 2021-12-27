import { LIGHT_MODE, DARK_MODE } from '../types'
import reggie from '../../images/stargif.mp4'
import negative from '../../images/stargif_neg.mp4'
import btnSlider from '../../images/btnSlider.png'

const iState = {
  theme: false,
  darkMode: {
    var: {
      // Nav Bar
      '--navBckgrnd': 'linear-gradient(rgb(11, 37, 110), rgb(0, 0, 40))',
      '--navBxShdw': '0 0 5vw 0 rgb(94, 94, 94)',
      // Theme Icon
      '--iconBxShdw': '0 0 5vw 1vw rgb(157,157,157)',
      '--iconMargin': '0 5vh 0 0',
      '--moonOp': '1',
      '--sunOp': '0',
      '--rayH': '3vh',
      // Project Display
      '--h1Color': 'white',
      // Screenshot Container
      '--pieceBxShdw': '0 0 6vw -2.5vw rgb(255, 255, 255)',
      '--pieceBckgrnd':
        'linear-gradient(\
          to top right,\
          rgb(0, 0, 40),\
          rgb(11, 37, 110)\
      )',
      // Animation Container
      '--aniImgBxShdw': '0 0 5vw 1vw rgba(255, 255, 255, 0.5',
      '--aniDivBxShdw': 'none',
      '--aniDivBckgrnd':
        'linear-gradient(\
          to top right,\
          rgb(51, 51, 51),\
          rgb(145, 145, 145)\
        )',
      // Project Link
      '--aHover': 'rgb(11, 37, 110)',
      '--aActive': 'rgb(0, 0, 40)',
      '--aShadow': 'rgb(152, 152, 152)',
      '--aActiveShadow': 'rgb(200, 200, 200)'
    },

    // Theme Icon
    btnSliderSrc: btnSlider,

    // Main Background
    backgroundVid: reggie
  },

  lightMode: {
    var: {
      // Nav Bar
      '--navBckgrnd': 'linear-gradient(rgb(161, 214, 249), rgb(49, 135, 214))',
      '--navBxShdw': '0 0 3.5vw 1.5vw rgb(50, 50, 50)',
      // Theme Icon
      '--IconBxShdw': '0 0 5vw 1.5vw rgb(255, 195, 14)',
      '--IconMargin': '0 0 0 5vh',
      '--moonOp': '0',
      '--sunOp': '1',
      '--rayH': '7.5vh',
      // Project Display
      '--h1Color': 'grey',
      // Screenshot Container
      '--pieceBxShdw': '0 0 6vw -0.5vw rgb(50, 50, 50)',
      '--pieceBckgrnd':
        'linear-gradient(\
          to top right,\
          rgb(49, 135, 214),\
          rgb(161, 214, 249)\
        )',
      // Animation Container
      '--aniImgBxShdw': '0 0 5vw 1vw rgba(0, 0, 0, 0.2)',
      '--aniDivBxShdw': '0 0 6vw -1vw rgb(50, 50, 50)',
      '--aniDivBckgrnd':
        'linear-gradient(\
          to top right,\
          rgb(248, 194, 30),\
          rgb(255, 228, 146)\
        )',
      // App Display
      '--aHover': 'rgb(161, 214, 249)',
      '--aActive': 'rgb(49, 135, 214)',
      '--aShadow': 'rgb(255, 195, 14)',
      '--aActiveShadow': 'rgb(255, 220, 60)'
    },

    // Theme Icon
    btnSliderSrc: btnSlider,

    // Main Background
    backgroundVid: negative
  }
}

export default function themeReducer(state = iState, action) {
  switch (action.type) {
    case LIGHT_MODE:
      return { ...state, theme: action.payload }
    case DARK_MODE:
      return { ...state, theme: action.payload }
    default:
      return { ...state }
  }
}
