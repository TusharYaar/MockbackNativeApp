import Theme from "../models/theme";
// constructor(name, label,description, isDark, primary, secondary, background, paper,text) 

export default themes = [
  new Theme(
    "Blue Light Theme",
    "lightBlue",
    "When the sky is falling down",
    false,
    "#3f51b5",
    "#1b5e20",
    "#fafafa",
    "#fff",
    "rgba(0, 0, 0, 0.87)"
  ),
  new Theme(
    "Blue Dark Theme",
    "darkBlue",
    "When the sky is falling down",
    true,
    "#15192F",
    "#096344",
    "#121212",
    "#1D1D1D",
    "rgb(229, 229, 231)"
  ),
];
