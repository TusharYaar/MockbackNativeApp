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
    "rgba(0, 0, 0, 0.87)",
    "#fff"
  ),
  new Theme(
    "Blue Dark Theme",
    "darkBlue",
    "When the sky is falling down",
    true,
    "#15192f",
    "#b33f40",
    "#121212",
    "#1E1E1E",
    "#fff",
    "#fff"
  ),
  new Theme(
    "Avacardo Pure Theme",
    "avacardo",
    "When the sky is falling down",
    false,
    "#b7c88e",
    "#fed67e",
    "#ece5d1",
    "#fdf8e8",
    "rgba(0, 0, 0, 0.87)",
    "rgba(0, 0, 0, 0.87)"
  ),
  new Theme(
    "Pumpkin Rider",
    "pumpkinRider",
    "Pumpkin Rider because skull rider is over rated",
    true,
    "#1F6D80",
    "#FC6E20",
    "#1B1B1B",
    "#323232",
    "#fff",
    "#fff"
  ),
  new Theme(
    "Yellow Overload",
    "yellowOverload",
    "When you cant get enough of yellow color",
    false,
    "#977B60",
    "#E38C4C",
    "#F6C561",
    "#FCF1DA",
    "rgba(0, 0, 0, 0.87)",
    "#fff"
  ),
  new Theme(
    "Gang Violets",
    "gangViolets",
    "When you cant get enough of Violet color",
    true,
    "#F0C38E",
    "#F1AA9B",
    "#312C51",
    "#48426D",
    "#fff",
    "rgba(0, 0, 0, 0.87)"
  ),
  new Theme(
    "Green Core",
    "greenCore",
    "When you cant get enough of Green color",
    true,
    "#FFC64F",
    "#FFFFFF",
    "#090C07",
    "#1F2B1A",
    "#fff",
    "rgba(0, 0, 0, 0.87)"
  ),
  new Theme(
    "Seal Deal",
    "sealDeal",
    "When you cant get enough of Violet color",
    true,
    "#FFBA00",
    "#CA1F3D",
    "#0D0D0D",
    "#100506",
    "#fff",
    "rgba(0, 0, 0, 0.87)"
  ),
  // new Theme(
  //   "Name",
  //   "label",
  //   "description,
  //   isDark,
  //   "primary",
  //   "secondary",
  //   "background",
  //   "paper",
  //   "text",
  //   "headerText",
  // ),
];
