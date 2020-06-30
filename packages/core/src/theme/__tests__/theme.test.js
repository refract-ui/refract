import genTheme from '..';

describe('theme', () => {
  test('default theme', () => {
    const theme = genTheme();

    // console.log('@-->theme', theme);

    expect(theme).toEqual({
      // basic colors
      white: '#ffffff',
      gray: '#adb5bd',
      black: '#000000',
      blue: '#0d6efd',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#d63384',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#28a745',
      teal: '#20c997',
      cyan: '#17a2b8',
      gray100: 'rgb(255, 255, 255)',
      gray200: 'rgb(255, 255, 255)',
      gray300: 'rgb(241, 242, 244)',
      gray400: 'rgb(218, 222, 225)',
      gray500: 'rgb(173, 181, 189)',
      gray600: 'rgb(150, 161, 171)',
      gray700: 'rgb(128, 140, 153)',
      gray800: 'rgb(107, 120, 133)',
      gray900: 'rgb(89, 99, 110)',

      // theme colors
      primary: '#0d6efd',
      secondary: 'rgb(150, 161, 171)',
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(107, 120, 133)',

      // color shades
      blue100: 'rgb(215, 231, 255)',
      blue200: 'rgb(175, 207, 254)',
      blue300: 'rgb(134, 183, 254)',
      blue400: 'rgb(94, 158, 254)',
      blue500: 'rgb(13, 110, 253)',
      blue600: 'rgb(2, 91, 223)',
      blue700: 'rgb(2, 75, 183)',
      blue800: 'rgb(1, 58, 142)',
      blue900: 'rgb(1, 42, 102)',
      indigo100: 'rgb(226, 209, 253)',
      indigo200: 'rgb(201, 171, 250)',
      indigo300: 'rgb(176, 132, 248)',
      indigo400: 'rgb(152, 93, 246)',
      indigo500: 'rgb(102, 16, 242)',
      indigo600: 'rgb(85, 11, 206)',
      indigo700: 'rgb(69, 9, 167)',
      indigo800: 'rgb(53, 7, 129)',
      indigo900: 'rgb(37, 5, 90)',
      purple100: 'rgb(228, 220, 243)',
      purple200: 'rgb(205, 189, 233)',
      purple300: 'rgb(181, 158, 223)',
      purple400: 'rgb(158, 127, 213)',
      purple500: 'rgb(111, 66, 193)',
      purple600: 'rgb(93, 54, 164)',
      purple700: 'rgb(76, 44, 134)',
      purple800: 'rgb(58, 34, 103)',
      purple900: 'rgb(41, 24, 72)',
      pink100: 'rgb(248, 221, 234)',
      pink200: 'rgb(241, 187, 214)',
      pink300: 'rgb(234, 153, 193)',
      pink400: 'rgb(228, 119, 173)',
      pink500: 'rgb(214, 51, 132)',
      pink600: 'rgb(187, 38, 112)',
      pink700: 'rgb(153, 31, 91)',
      pink800: 'rgb(119, 24, 71)',
      pink900: 'rgb(85, 17, 51)',
      red100: 'rgb(250, 227, 229)',
      red200: 'rgb(244, 192, 197)',
      red300: 'rgb(238, 157, 165)',
      red400: 'rgb(232, 123, 133)',
      red500: 'rgb(220, 53, 69)',
      red600: 'rgb(198, 34, 50)',
      red700: 'rgb(163, 28, 41)',
      red800: 'rgb(128, 22, 32)',
      red900: 'rgb(94, 16, 24)',
      orange100: 'rgb(255, 237, 222)',
      orange200: 'rgb(254, 215, 182)',
      orange300: 'rgb(254, 193, 141)',
      orange400: 'rgb(254, 170, 101)',
      orange500: 'rgb(253, 126, 20)',
      orange600: 'rgb(230, 106, 2)',
      orange700: 'rgb(190, 87, 2)',
      orange800: 'rgb(149, 69, 1)',
      orange900: 'rgb(109, 50, 1)',
      yellow100: 'rgb(255, 244, 211)',
      yellow200: 'rgb(255, 234, 170)',
      yellow300: 'rgb(255, 224, 129)',
      yellow400: 'rgb(255, 213, 89)',
      yellow500: 'rgb(255, 193, 7)',
      yellow600: 'rgb(221, 166, 0)',
      yellow700: 'rgb(180, 135, 0)',
      yellow800: 'rgb(140, 105, 0)',
      yellow900: 'rgb(99, 74, 0)',
      green100: 'rgb(175, 236, 189)',
      green200: 'rgb(142, 228, 162)',
      green300: 'rgb(109, 220, 135)',
      green400: 'rgb(76, 212, 107)',
      green500: 'rgb(40, 167, 69)',
      green600: 'rgb(32, 134, 55)',
      green700: 'rgb(24, 101, 42)',
      green800: 'rgb(16, 68, 28)',
      green900: 'rgb(8, 35, 15)',
      teal100: 'rgb(192, 245, 229)',
      teal200: 'rgb(157, 239, 215)',
      teal300: 'rgb(122, 234, 201)',
      teal400: 'rgb(86, 228, 186)',
      teal500: 'rgb(32, 201, 151)',
      teal600: 'rgb(26, 166, 125)',
      teal700: 'rgb(21, 131, 98)',
      teal800: 'rgb(15, 95, 72)',
      teal900: 'rgb(10, 60, 45)',
      cyan100: 'rgb(167, 233, 244)',
      cyan200: 'rgb(131, 225, 239)',
      cyan300: 'rgb(94, 216, 235)',
      cyan400: 'rgb(58, 207, 230)',
      cyan500: 'rgb(23, 162, 184)',
      cyan600: 'rgb(18, 130, 148)',
      cyan700: 'rgb(14, 98, 111)',
      cyan800: 'rgb(9, 66, 75)',
      cyan900: 'rgb(5, 34, 39)',

      // spacing
      spacing: {
        basis: 1,
        '0': '0rem',
        '0.25': '1rem',
        '0.5': '2rem',
        '1': '3rem',
        '1.5': '4rem',
        '3': '5rem'
      },

      // breakpoints
      breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400
      },

      // borders
      borders: {
        xs: {
          borderWidth: '1px',
          borderColor: 'rgb(241, 242, 244)',
          borderRadius: '0.2rem'
        },
        md: {
          borderRadius: '0.25rem'
        },
        lg: {
          borderRadius: '0.3rem'
        }
      }
    });
  });
});
