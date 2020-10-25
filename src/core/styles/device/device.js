import { screenSizeMin, screenSizeMax } from '../screen-size/screen-size'

const device = {
  mobile: `screen and (max-width: ${screenSizeMax.xs})`,
  mobileL: `screen and (max-width: ${screenSizeMax.sm})`,
  tablet: `screen and (max-width: ${screenSizeMax.md})`,
  desktop: `screen and (max-width: ${screenSizeMax.lg})`,
  desktopL: `screen and (max-width: ${screenSizeMax.xl})`,
}

export const deviceExact = {
  mobile: `screen and (min-width: ${screenSizeMin.xs}) and (max-width: ${screenSizeMax.xs})`,
  mobileL: `screen and (min-width: ${screenSizeMin.sm}) and (max-width: ${screenSizeMax.sm})`,
  tablet: `screen and (min-width: ${screenSizeMin.md}) and (max-width: ${screenSizeMax.md})`,
  desktop: `screen and (min-width: ${screenSizeMin.lg}) and (max-width: ${screenSizeMax.lg})`,
  desktopL: `screen and (min-width: ${screenSizeMin.xl}) and (max-width: ${screenSizeMax.xl})`,
  desktopXL: `screen and (min-width: ${screenSizeMin.xxl})`,
}

export default device
