// Centralized Cloudflare R2 web-bg image asset registry
export const R2_BASE = process.env.NEXT_PUBLIC_R2_URL || '/api/r2';

export function getR2WebBgUrl(filename: string): string {
  return `${R2_BASE}/portfolio/web-bg/${encodeURIComponent(filename)}`;
}

export const webBgAssets = {
  // Futuristic AI & 3D Art
  futuristicRobot: getR2WebBgUrl('Futuristic Humanoid Robot.png'),
  futuristicPortrait: getR2WebBgUrl('Futuristic Portrait.png'),
  futuristicPrism: getR2WebBgUrl('Futuristic Prism Art.png'),
  futuristicPrismAlt: getR2WebBgUrl('Futuristic Prism Art (1).png'),
  file9a18: getR2WebBgUrl('file_000000009a1882118e2c24ee70d92682.png'),
  fileC6f0: getR2WebBgUrl('file_00000000c6f082118953de0089ea83ba.png'),

  // Atmospheric Gradients & Meshes
  ditherGradient: getR2WebBgUrl('Dither Gradient - 07.png'),
  godrays: getR2WebBgUrl('Godrays - 01.jpg'),
  heroGradient: getR2WebBgUrl('Hero Gradient V3 - 37 (2).png'),
  blackWhiteMesh: getR2WebBgUrl('44-white-and-black-mesh.jpg'),
  starryNight: getR2WebBgUrl('46-starry-night-soft-gradient.jpg'),
  fractalStripes: getR2WebBgUrl('47-fractal-phantom-gradient-stripes.jpg'),

  // Modern Photography & Digital Concept Visuals
  cottonbro: getR2WebBgUrl('pexels-cottonbro-6153354.jpg'),
  dynamicwang: getR2WebBgUrl('pexels-dynamicwang-7582107.jpg'),
  freestockpro: getR2WebBgUrl('pexels-freestockpro-12969104.jpg'),
  taraWinstead: getR2WebBgUrl('pexels-tara-winstead-8386437.jpg'),
  clKbR: getR2WebBgUrl('ClKbRDm3ujAvpZPtQWXZCRq9VA8.jpg'),
  qmPy: getR2WebBgUrl('QmPyQ3Z5kk4E7SmevHDizsDnmD7mGru8CKziqxx4zX5tDT.jpeg'),
  roy4: getR2WebBgUrl('ROY4McUzYVb8w2yc2jmXTdpsk.jpg'),
  uunn: getR2WebBgUrl('UUNN0jFl7HUAwPbyAe9N95YSNw.jpg'),
  mcab: getR2WebBgUrl('mCABrawGi4dlnQ2dMY36DkOc5Y.jpg'),
  uiw0: getR2WebBgUrl('uIw0MkHLNr2bqX6RYgV4a8Af9XI.jpg'),
  w0jz: getR2WebBgUrl('w0JZvRn32BEeLRO2ojBKAkLI.png'),
  lifestyle1: getR2WebBgUrl('609552652_17989190147916784_7348923964946019199_n.jpg'),
  lifestyle2: getR2WebBgUrl('610735727_17989190111916784_629438965937342843_n.jpg'),
  lifestyle3: getR2WebBgUrl('610839926_17989190120916784_3109229899096387059_n.jpg'),
};

// Curated rotation list for assigning to case studies and cards
export const webBgCardImages = [
  webBgAssets.futuristicRobot,
  webBgAssets.futuristicPortrait,
  webBgAssets.futuristicPrism,
  webBgAssets.ditherGradient,
  webBgAssets.godrays,
  webBgAssets.heroGradient,
  webBgAssets.file9a18,
  webBgAssets.fileC6f0,
  webBgAssets.starryNight,
  webBgAssets.fractalStripes,
  webBgAssets.cottonbro,
  webBgAssets.dynamicwang,
  webBgAssets.freestockpro,
  webBgAssets.taraWinstead,
  webBgAssets.clKbR,
  webBgAssets.roy4,
  webBgAssets.uunn,
  webBgAssets.w0jz,
  webBgAssets.blackWhiteMesh,
];
