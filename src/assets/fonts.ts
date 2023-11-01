import { Roboto, Poppins, Rubik } from "next/font/google";

const roboto300 = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const roboto400 = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const roboto500 = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const roboto700 = Roboto({
  subsets: ["latin"],
  weight: "700",
});

const poppings300 = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const poppings400 = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const poppings500 = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const poppings700 = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const rubik300 = Rubik({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-rubik-300",
});
const rubik700 = Rubik({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-rubik-700",
});
const rubik500 = Rubik({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-rubik-500",
});

export {
  roboto300,
  roboto400,
  roboto500,
  roboto700,
  poppings300,
  poppings400,
  poppings500,
  poppings700,
  rubik300,
  rubik700,
  rubik500,
};
