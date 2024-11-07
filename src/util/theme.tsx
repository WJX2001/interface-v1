import { createTheme, Theme, ThemeOptions } from "@mui/material";

const theme = createTheme()
const {
  typography: { pxToRem },
} = theme;

const FONT = 'Inter, Arial';
declare module '@mui/material/styles/createPalette' {
  interface PaletteColor extends ColorPartial {}

  interface TypeText {
    muted: string;
  }

  interface TypeBackground {
    default: string;
    paper: string;
    surface: string;
    surface2: string;
    header: string;
    disabled: string;
  }

  interface Palette {
    gradients: {
      aaveGradient: string;
      newGradient: string;
    };
    other: {
      standardInputLine: string;
    };
  }

  interface PaletteOptions {
    gradients: {
      aaveGradient: string;
      newGradient: string;
    };
  }
}
export const getDesignTokens = (mode: 'light' | 'dark') => {
  const getColor = (lightColor: string, darkColor: string) =>
    mode === 'dark' ? darkColor : lightColor;

  return {
    breakpoints: {
      keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: { xs: 0, xsm: 640, sm: 760, md: 960, mdlg: 1125, lg: 1280, xl: 1575, xxl: 1800 },
    },
    palette: {
      mode,
      background: {
        default: getColor('#F1F1F3', '#1B2030'),
        header: getColor('#2B2D3C', '#1B2030'),
      },
      gradients: {
        aaveGradient: 'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
        newGradient: 'linear-gradient(79.67deg, #8C3EBC 0%, #007782 95.82%)',
      },
    },
    
  } as ThemeOptions;
};


export function getThemedComponents(theme: Theme) {
  return {
    components: {

    }
  } as ThemeOptions
}