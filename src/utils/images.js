// Images
/* eslint-disable import/prefer-default-export */

import first from "@/public/assets/images/technology/Graphene Si PC.jpg";
import PCSEL2024 from "@/public/assets/images/technology/PCSEL2024.png";
import second from "@/public/assets/images/technology/MR-VCSEL-ZM.jpg";
import PC_SLM from "@/public/assets/images/technology/PC SLM Graphic1.png";
import fourth from "@/public/assets/images/technology/PCSEL.jpg";
import fifth from "@/public/assets/images/technology/Zhoubook cover.jpg";

export const images = [
  {
    src: PCSEL2024,
    alt: "PCSEL",
    title:
      "High-Power/High-Speed Photonic Crystal Surface-Emitting Lasers (PCSELs)",
    citations: [
      'Kalapala, Akhil, Kevin Reilly, Thomas Rotter, Chhabindra Gautam, Mingsen Pan, Zhonghe Liu, Yudong Chen et al. "Impact of Cavity Resonance Detuning on Watt-Level PCSELs." In 2022 IEEE Photonics Conference (IPC), pp. 1-2. IEEE, 2022.',
      'Zhou, Weidong, and Mingsen Pan. "The future of photonic crystal surface-emitting lasers." Applied Physics Letters 123.14 (2023).',
      'Pan, Mingsen, Chhabindra Gautam, Akhil Kalapala, Yudong Chen, Thomas Rotter, Ming Zhou, Ricky Gibson et al. "Frequency Response Characteristics of High-Power Photonic Crystal Surface-Emitting Lasers." In 2023 IEEE Photonics Conference (IPC), pp. 1-2. IEEE, 2023.',
      'Pan, Mingsen, Chhbindra Gautam, Yudong Chen, Thomas Rotter, Ganesh Balakrishnan, and Weidong Zhou. "Recent Advances in Photonic Crystal Surface Emitting Lasers." IEEE Journal of Selected Topics in Quantum Electronics (2024).',
    ],
  },

  {
    src: PC_SLM,
    alt: "PC SLM Graphic",
    title: "High Speed Photonic Crystal Slab Spatial Light Modulators (PC-SLM)",
    citations: [
      'Zhou, Weidong, and Mingsen Pan. "High speed spatial light modulator." U.S. Patent Application 17/815,339, filed February 23, 2023.;',
      'Pan, Mingsen, Zhonghe Liu, Akhil Raj Kumar Kalapala, Yudong Chen, Yuze Sun, and Weidong Zhou. "Complete 2π Phase Control by Photonic Crystal Slabs." Optics Express 29, no. 25 (2021): 40795-40803.',
      "Y. Shuai, D. Zhao, C. Stambaugh, N. Zimmerman, J. Lawall, and W. Zhou, “Coupled Bi-layer Photonic Crystal Slab Electro-optic Spatial Light Modulators”,  IEEE Photon. J. 9, 7101411 (2017).",
    ],
  },

  {
    src: second,
    alt: "MR-VCSEL-ZM",
    title: "DBR-free Photonic Crystal Membrane Reflector VCSELs",
    citations:
      "H. Yang, D. Zhao, S. Chuwongin, J.-H. Seo, W. Yang, Y. Shuai, J. Berggren, M. Hammar, Z. Ma and W. Zhou, “Transfer printing stacked nanomembrane lasers on silicon”, Nature Photonics 6, 615-620 (2012).",
  },

  {
    src: fourth,
    alt: "PCSEL",
    title: "Hybrid Photonic Crystal Surface Emitting Lasers (hPCSEL)",
    citations: [
      "D. Zhao, S. Liu, H. Yang, Z. Ma, C. Reuterskiöld-Hedlund, M. Hammar, and W. Zhou, “Printed Large-Area Single-Mode Photonic Crystal Bandedge Surface-Emitting Lasers on Silicon, Scientific Reports 6, 18860 (2016).",
      'Zhou, Weidong, Shih-Chia Liu, Xiaochen Ge, Deyin Zhao, Hongjun Yang, Carl Reuterskiöld-Hedlund, and Mattias Hammar. "On-chip photonic crystal surface-emitting membrane lasers." IEEE Journal of Selected Topics in Quantum Electronics 25, no. 3 (2019): 1-11.',
    ],
  },

  {
    src: first,
    alt: "Graphene Si PC",
    title: "Material Absorption Control with Photonic Crystal Cavities",
    citations: [
      "Y. Liu, A. Chadha, D. Zhao, J. R.Piper, Y. Jia, Y. Shuai, L. Menon, H. Yang, Z. Ma, S. Fan, F. Xia, and W. Zhou, “Approaching total absorption at near infrared in a large area monolayer graphene by critical coupling”, Appl. Phys. Lett. 105, 181105 (2014).",
      'Pan, Mingsen, Aaron Liu, Zhonghe Liu, and Weidong Zhou. "High-speed tunable optical absorber based on a coupled photonic crystal slab and monolayer graphene structure." Optics Express 30, no. 26 (2022): 47612-47624.',
    ],
  },

  {
    src: fifth,
    alt: "Zhoubook cover",
    title: "Photonic Crystal Metasurface Optoelectronics",
    citations: "",
  },
];
