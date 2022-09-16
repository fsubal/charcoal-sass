import { type Importer } from "sass";
import { type CharcoalAbstractTheme, light, ColorStyleTheme } from '@charcoal-ui/theme'

export const PATHNAME = 'charcoal-ui:foundations'

export function charcoalImporter(theme: CharcoalAbstractTheme = light): Importer {
  return {
    canonicalize(path) {
      if (path !== PATHNAME) {
        return null
      }

      return new URL(path)
    },

    load(canonicalUrl) {
      if (canonicalUrl.toString() !== PATHNAME) {
        return null
      }

      return {
        contents: [
          defineColors(theme.color, theme.effect),
          defineGradient(theme.gradientColor, theme.effect),
          defineBorder(theme.border),
          defineBorderRadius(theme.borderRadius),
          defineSpacing(theme.spacing)
        ].join('\n'),
        syntax: 'scss'
      };
    }
  }
}

function defineColors(color: ColorStyleTheme, effect: { hover?: import("@charcoal-ui/foundation").Effect | undefined; press?: import("@charcoal-ui/foundation").Effect | undefined; disabled?: import("@charcoal-ui/foundation").Effect | undefined; }) {
  throw new Error("Function not implemented.");
}

function defineGradient(gradientColor: { [x: string]: import("@charcoal-ui/foundation").GradientMaterial;[x: number]: import("@charcoal-ui/foundation").GradientMaterial;[x: symbol]: import("@charcoal-ui/foundation").GradientMaterial; }, effect: { hover?: import("@charcoal-ui/foundation").Effect | undefined; press?: import("@charcoal-ui/foundation").Effect | undefined; disabled?: import("@charcoal-ui/foundation").Effect | undefined; }) {
  throw new Error("Function not implemented.");
}

function defineBorder(border: { [x: string]: { color: string; };[x: number]: { color: string; };[x: symbol]: { color: string; }; }) {
  throw new Error("Function not implemented.");
}

function defineBorderRadius(borderRadius: { [x: string]: number;[x: number]: number;[x: symbol]: number; }) {
  throw new Error("Function not implemented.");
}

function defineSpacing(spacing: { [x: string]: number;[x: number]: number;[x: symbol]: number; }) {
  throw new Error("Function not implemented.");
}

