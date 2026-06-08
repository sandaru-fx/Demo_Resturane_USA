export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuSection = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menuData: MenuSection[] = [
  {
    title: "Starters",
    subtitle: "First impressions from the kitchen",
    items: [
      {
        name: "Hamachi Crudo",
        description: "Yellowtail, yuzu kosho, finger lime, shiso oil, crisp rice",
        price: "$24",
        tag: "Signature",
      },
      {
        name: "Burrata & Heirloom",
        description: "Hand-pulled burrata, heirloom tomato, aged balsamic, basil ash",
        price: "$19",
      },
      {
        name: "Foie Gras Torchon",
        description: "Sauternes gelée, brioche toast, fig compote, fleur de sel",
        price: "$28",
      },
      {
        name: "Roasted Beet Tartare",
        description: "Smoked beet, cashew crème, capers, rye crumble",
        price: "$17",
        tag: "Vegan",
      },
    ],
  },
  {
    title: "Mains",
    subtitle: "Centerpieces of the evening",
    items: [
      {
        name: "Dry-Aged Ribeye",
        description: "45-day aged prime beef, bone marrow butter, charred shallot, pomme purée",
        price: "$68",
        tag: "Chef's Choice",
      },
      {
        name: "Miso-Glazed Black Cod",
        description: "White miso, dashi broth, baby bok choy, pickled ginger",
        price: "$46",
      },
      {
        name: "Hand-Rolled Tagliatelle",
        description: "Truffle cream, wild mushroom ragù, 24-month parmigiano",
        price: "$38",
      },
      {
        name: "Roasted Duck Breast",
        description: "Cherry gastrique, turnip confit, foie gras crumble, jus",
        price: "$52",
      },
      {
        name: "Seared Atlantic Scallops",
        description: "Cauliflower three ways, brown butter, caper berries, hazelnut",
        price: "$44",
      },
    ],
  },
  {
    title: "Desserts",
    subtitle: "Sweet finales crafted by our pastry chef",
    items: [
      {
        name: "Valrhona Chocolate Soufflé",
        description: "Single-origin dark chocolate, crème anglaise, gold leaf",
        price: "$18",
        tag: "25 Minutes",
      },
      {
        name: "Citrus Tart",
        description: "Meyer lemon curd, torched meringue, olive oil shortbread",
        price: "$14",
      },
      {
        name: "Fromage Selection",
        description: "Three artisanal cheeses, honeycomb, seasonal preserves, walnut bread",
        price: "$22",
      },
    ],
  },
  {
    title: "Cocktails",
    subtitle: "Hand-crafted by our mixologists",
    items: [
      {
        name: "Noir Old Fashioned",
        description: "Smoked bourbon, demerara, black walnut bitters, charred orange",
        price: "$19",
        tag: "House",
      },
      {
        name: "Garden Spritz",
        description: "Hendrick's gin, elderflower, cucumber, prosecco, thyme",
        price: "$17",
      },
      {
        name: "Midnight in Paris",
        description: "Cognac, crème de violette, champagne, lavender mist",
        price: "$21",
      },
    ],
  },
];
