// Generates electron/tray-icon.png — a 32×32 FRGE-orange rounded diamond on a
// transparent field, used for the system-tray (hidden-icons) presence. Electron's
// Tray needs a raster image (the app's favicon is SVG), so we emit a tiny PNG.
// Run once (or after a brand-colour change):  node helpers/gen-tray-icon.mjs
import fs from "node:fs";
import zlib from "node:zlib";

const N = 32;
const OR = [249, 115, 22];   // #F97316 molten orange
const GOLD = [212, 175, 55]; // #D4AF37 accent edge
const px = Buffer.alloc(N * N * 4); // RGBA

const c = (N - 1) / 2;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    // Manhattan distance from centre → diamond shape.
    const d = Math.abs(x - c) + Math.abs(y - c);
    const i = (y * N + x) * 4;
    if (d <= 12) {            // filled orange body
      px[i] = OR[0]; px[i + 1] = OR[1]; px[i + 2] = OR[2]; px[i + 3] = 255;
    } else if (d <= 14) {     // gold rim
      px[i] = GOLD[0]; px[i + 1] = GOLD[1]; px[i + 2] = GOLD[2]; px[i + 3] = 255;
    } else {                  // transparent
      px[i + 3] = 0;
    }
  }
}

// Prefix each scanline with filter byte 0, then zlib-deflate.
const raw = Buffer.alloc(N * (N * 4 + 1));
for (let y = 0; y < N; y++) {
  raw[y * (N * 4 + 1)] = 0;
  px.copy(raw, y * (N * 4 + 1) + 1, y * N * 4, (y + 1) * N * 4);
}
const idat = zlib.deflateSync(raw);

// CRC-32 (PNG chunk checksum).
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c2 = n;
  for (let k = 0; k < 8; k++) c2 = c2 & 1 ? 0xedb88320 ^ (c2 >>> 1) : c2 >>> 1;
  return c2 >>> 0;
});
const crc32 = (buf) => {
  let c2 = 0xffffffff;
  for (const b of buf) c2 = crcTable[(c2 ^ b) & 0xff] ^ (c2 >>> 8);
  return (c2 ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(N, 0); ihdr.writeUInt32BE(N, 4);
ihdr[8] = 8; ihdr[9] = 6; // 8-bit, RGBA

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", ihdr),
  chunk("IDAT", idat),
  chunk("IEND", Buffer.alloc(0)),
]);

fs.writeFileSync("electron/tray-icon.png", png);
console.log(`Wrote electron/tray-icon.png (${png.length} bytes)`);
