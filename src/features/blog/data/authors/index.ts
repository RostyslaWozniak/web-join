type Authors = Record<
  string,
  {
    name: string;
    slug: string;
    image: string;
    website: string | null;
  }
>;

export const authors = {
  me: {
    name: "Rostyslav Vozniak",
    slug: "rostyslav-vozniak",
    image:
      "https://njmm8e6312.ufs.sh/f/mgG8Yp1X9p5vVkIqSsplgK4taovOnAI7HMQxDPSs3cbrRye6",
    website: "https://www.rostyslavvozniak.com/",
  },
} as const satisfies Authors;
