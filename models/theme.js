export default class theme {
  constructor(name, label, isDark) {
    this.name = name;
    this.label = label;
    this.dark = isDark;
    this.colors = {
      accent: "#03dac6",
      backdrop: "rgba(0, 0, 0, 0.5)",
      background: "rgb(1, 1, 1)",
      border: "rgb(39, 39, 41)",
      card: "rgb(18, 18, 18)",
      disabled: "rgba(255, 255, 255, 0.38)",
      error: "#CF6679",
      notification: "rgb(255, 69, 58)",
      onSurface: "#FFFFFF",
      placeholder: "rgba(255, 255, 255, 0.54)",
      primary: "rgb(10, 132, 255)",
      surface: "#121212",
      text: "rgb(229, 229, 231)",
    };
    (this.mode = "adaptive"),
      (this.roundness = 4),
      (this.animation = {
        scale: 1,
      });
    this.fonts = {
      light: {
        fontFamily: "sans-serif-light",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: "normal",
      },
      regular: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
      },
      thin: {
        fontFamily: "sans-serif-thin",
        fontWeight: "normal",
      },
    };
  }
}

// THEMES.darkTheme = {
//     animation: {
//       scale: 1,
//     },
//     dark: true,
//     value: "darkTheme",
//     label: "Dark Theme",
//     colors: {
//       accent: "#03dac6",
//       backdrop: "rgba(0, 0, 0, 0.5)",
//       background: "rgb(1, 1, 1)",
//       border: "rgb(39, 39, 41)",
//       card: "rgb(18, 18, 18)",
//       disabled: "rgba(255, 255, 255, 0.38)",
//       error: "#CF6679",
//       notification: "rgb(255, 69, 58)",
//       onSurface: "#FFFFFF",
//       placeholder: "rgba(255, 255, 255, 0.54)",
//       primary: "rgb(10, 132, 255)",
//       surface: "#121212",
//       text: "rgb(229, 229, 231)",
//     },
//     fonts:fonts,
//     mode: "adaptive",
//     roundness: 4,
//   };
