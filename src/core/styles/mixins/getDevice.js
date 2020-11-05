const SCREEN_SIZE_BY_MAX_WIDTH = {
  xs: '575px',
  sm: '767px',
  md: '991px',
  lg: '1199px',
}

const SCREEN_SIZE_BY_MIN_WIDTH = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}

const MOBILE_FIRST_DEVICES = {
  mobileL: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.sm})`,
  tablet: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.md})`,
  desktop: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.lg})`,
  desktopL: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.xl})`,
}

const DESKTOP_FIRST_DEVICES = {
  desktop: `@media screen and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.lg})`,
  tablet: `@media screen and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.md})`,
  mobileL: `@media screen and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.sm})`,
  mobile: `@media screen and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.xs})`,
}

export const EXACT_DEVICES = {
  mobile: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.xs}) and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.xs})`,
  mobileL: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.sm}) and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.sm})`,
  tablet: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.md}) and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.md})`,
  desktop: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.lg}) and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.lg})`,
  desktopL: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.xl}) and (max-width: ${SCREEN_SIZE_BY_MAX_WIDTH.xl})`,
  desktopXL: `@media screen and (min-width: ${SCREEN_SIZE_BY_MIN_WIDTH.xxl})`,
}

const getDevice = (styleType = 'mobileFirst') => (deviceType = 'desktop') => {
  if (styleType === 'mobileFirst') {
    return MOBILE_FIRST_DEVICES[deviceType]
  }
  if (styleType === 'exact') {
    return EXACT_DEVICES[deviceType]
  }

  return DESKTOP_FIRST_DEVICES[deviceType]
}

export const getMediaMF = getDevice('mobileFirst')
export const getMediaDF = getDevice('desktopFirst')
export const getMediaExact = getDevice('exact')
