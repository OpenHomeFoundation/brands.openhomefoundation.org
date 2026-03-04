interface WebColor {
  HSL: [number, number, number];
  RGB: [number, number, number];
  HEX: string;
}

interface PrintColor {
  pantone: string;
  CMYK: [number, number, number, number];
}

interface ColorEntry {
  name: string;
  web: WebColor;
  print: PrintColor;
}

interface OHFColorPalette {
  ohf_light_blue: ColorEntry;
  ohf_dark_blue: ColorEntry;
  ohf_dark_grey: ColorEntry;
  ohf_light_grey: ColorEntry;
  ohf_grey: ColorEntry;
}

export const OHF_COLORS: OHFColorPalette = {
  ohf_light_blue: {
    name: "OHF Light Blue",
    web: {
      HSL: [195, 89, 52],
      RGB: [24, 188, 242],
      HEX: "#18BCF2",
    },
    print: {
      pantone: "PANTONE 298 C",
      CMYK: [65, 3, 0, 0],
    },
  },
  ohf_dark_blue: {
    name: "OHF Dark Blue",
    web: {
      HSL: [202, 74, 13],
      RGB: [9, 32, 46],
      HEX: "#09293B",
    },
    print: {
      pantone: "PANTONE 5395 C",
      CMYK: [100, 44, 10, 91],
    },
  },
  ohf_dark_grey: {
    name: "OHF Dark Grey",
    web: {
      HSL: [213, 13, 41],
      RGB: [90, 102, 117],
      HEX: "#5A6675",
    },
    print: {
      pantone: "PANTONE 431 C",
      CMYK: [63, 45, 34, 25],
    },
  },
  ohf_light_grey: {
    name: "OHF Light Grey",
    web: {
      HSL: [48, 24, 96],
      RGB: [247, 246, 242],
      HEX: "#F7F6F2",
    },
    print: {
      pantone: "PANTONE Stalactite",
      CMYK: [4, 3, 5, 0],
    },
  },
  ohf_grey: {
    name: "OHF Grey",
    web: {
      HSL: [216, 12, 67],
      RGB: [162, 170, 182],
      HEX: "#A2AAB6",
    },
    print: {
      pantone: "PANTONE 429 C",
      CMYK: [35, 23, 19, 2],
    },
  },
};
