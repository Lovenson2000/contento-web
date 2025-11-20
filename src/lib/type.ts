import type { JSX } from "react";

export type Slide = {
  src: string;
  alt: string;
};

export type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export type Section = {
  icon: JSX.Element;
  title: string;
  content: JSX.Element;
};
