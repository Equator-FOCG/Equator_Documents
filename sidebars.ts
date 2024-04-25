import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // But you can create a sidebar manually
  overview: [
    {
      type: "category",
      label: "📌 Get Started",
      collapsed: false,
      items: ["overview/home/introduction", "overview/home/about"],
    },
    {
      type: "category",
      label: "📑 Tutorial",
      collapsed: false,
      items: [
        "overview/tutorial/game",
        "overview/tutorial/autonomous-worlds",
        "overview/tutorial/fully-onchain-game",
        "overview/tutorial/architecture",
        {
          type: "category",
          label: "Cairo",
          items: ["overview/tutorial/Cairo/intro"],
        },
      ],
    },
    {
      type: "category",
      label: "🖥️ Fully On-chain Games",
      items: ["overview/games/dark_forest"],
    },
  ],
  utils: [
    {
      type: "category",
      label: "📌 Get Started",
      collapsed: false,
      items: ["utils/home/introduction"],
    },
    {
      type: "category",
      label: "Mud",
      items: ["utils/Mud/intro"],
    },
    {
      type: "category",
      label: "Dojo",
      items: ["utils/Dojo/intro"],
    },
    {
      type: "category",
      label: "Bolt",
      items: ["utils/Bolt/intro"],
    },
    {
      type: "category",
      label: "World Engine",
      items: ["utils/World Engine/intro"],
    },
    {
      type: "category",
      label: "Keystone",
      items: ["utils/Keystone/intro", "utils/Keystone/keystone-starter-kit"],
    },
  ],
};

export default sidebars;
