import { Metadata } from "next";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigFile from "../../tailwind.config";

export function getDomain() {
  // if (process.env.NODE_ENV === "development") {
  //   return process.env.NEXT_PUBLIC_DEV_API!;
  // }

  return process.env.NEXT_PUBLIC_PROD_API!;
}

export const generateSeoMetadata = (title: string, description: string, path: string): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL!;
  const metadataBase = new URL(baseUrl);
  const url = metadataBase.origin + path;

  return {
    metadataBase,
    openGraph: {
      url,
      title,
      description,
      images: [
        {
          url: "",
          width: 1280,
          height: 1280,
          type: "image/jpeg",
        },
      ],
      siteName: "Burmounte",
    },
    twitter: {},
  };
};

export const tailwindConfig = resolveConfig(tailwindConfigFile) as any;

export const getBreakpointValue = (value: string): number => {
  const screenValue = tailwindConfig.theme.screens[value];
  return +screenValue.slice(0, screenValue.indexOf("px"));
};

export const getBreakpoint = () => {
  let currentBreakpoint;
  let biggestBreakpointValue = 0;
  let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  for (const breakpoint of Object.keys(tailwindConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (breakpointValue > biggestBreakpointValue && windowWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};

export const hexToRGB = (h: string): string => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = parseInt(`0x${h[1]}${h[1]}`);
    g = parseInt(`0x${h[2]}${h[2]}`);
    b = parseInt(`0x${h[3]}${h[3]}`);
  } else if (h.length === 7) {
    r = parseInt(`0x${h[1]}${h[2]}`);
    g = parseInt(`0x${h[3]}${h[4]}`);
    b = parseInt(`0x${h[5]}${h[6]}`);
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value: number): string =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const formatThousands = (value: number): string =>
  Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export function snakeToCamel<T>(obj: any): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamel(item)) as any;
  }

  return Object.keys(obj).reduce((acc: any, key) => {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()) as any;
    const value = obj[key];
    acc[camelKey] = snakeToCamel(value);
    return acc;
  }, {});
}
