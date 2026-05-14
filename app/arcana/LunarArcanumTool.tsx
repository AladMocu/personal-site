"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import NextImage from "next/image";
import { Download, Minus, Plus, RefreshCw, Sparkles } from "lucide-react";

type Arcana = {
  id: string;
  roman: string;
  title: string;
};

type Counts = Record<string, number>;

type PreviewImage = {
  src: string;
  filename: string;
};

const ARCANA: Arcana[] = [
  { id: "magician", roman: "I", title: "The Magician" },
  { id: "high-priestess", roman: "II", title: "The High Priestess" },
  { id: "empress", roman: "III", title: "The Empress" },
  { id: "emperor", roman: "IV", title: "The Emperor" },
  { id: "hierophant", roman: "V", title: "The Hierophant" },
  { id: "lovers", roman: "VI", title: "The Lovers" },
  { id: "chariot", roman: "VII", title: "The Chariot" },
  { id: "strength", roman: "VIII", title: "Strength" },
  { id: "hermit", roman: "IX", title: "The Hermit" },
  { id: "wheel-of-fortune", roman: "X", title: "The Wheel of Fortune" },
  { id: "justice", roman: "XI", title: "Justice" },
  { id: "hanged-man", roman: "XII", title: "The Hanged Man" },
  { id: "death", roman: "XIII", title: "Death" },
  { id: "temperance", roman: "XIV", title: "Temperance" },
  { id: "devil", roman: "XV", title: "The Devil" },
  { id: "tower", roman: "XVI", title: "The Tower" },
  { id: "star", roman: "XVII", title: "The Star" },
  { id: "moon", roman: "XVIII", title: "The Moon" },
  { id: "sun", roman: "XIX", title: "The Sun" },
  { id: "judgment", roman: "XX", title: "Judgment" },
  { id: "world", roman: "XXI", title: "The World" },
  { id: "fool", roman: "XXII", title: "The Fool" },
];

const emptyCounts = (): Counts =>
  ARCANA.reduce<Counts>((acc, arcana) => {
    acc[arcana.id] = 0;
    return acc;
  }, {});

const EXPORT_WIDTH = 1672;
const EXPORT_HEIGHT = 1540;

const clampCount = (value: number) => Math.max(0, Math.min(99, Number.isFinite(value) ? value : 0));

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

const roundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
};

const drawFitText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  weight = 500,
) => {
  let size = fontSize;
  do {
    ctx.font = `${weight} ${size}px HYWenHei, serif`;
    if (ctx.measureText(text).width <= maxWidth || size <= 14) break;
    size -= 1;
  } while (size > 14);
  ctx.fillText(text, x, y);
};

const drawBackgroundCover = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) => {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const scale = Math.max(width / imageWidth, height / imageHeight);
  const scaledWidth = imageWidth * scale;
  const scaledHeight = imageHeight * scale;

  ctx.drawImage(
    image,
    (width - scaledWidth) / 2,
    (height - scaledHeight) / 2,
    scaledWidth,
    scaledHeight,
  );
};

const drawContainedImage = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const scale = Math.min(width / imageWidth, height / imageHeight);
  const scaledWidth = imageWidth * scale;
  const scaledHeight = imageHeight * scale;

  ctx.drawImage(
    image,
    x + (width - scaledWidth) / 2,
    y + (height - scaledHeight) / 2,
    scaledWidth,
    scaledHeight,
  );
};

export default function LunarArcanumTool() {
  const [counts, setCounts] = useState<Counts>(() => emptyCounts());
  const [openToTrade, setOpenToTrade] = useState(true);
  const [traveler, setTraveler] = useState("");
  const [uid, setUid] = useState("");
  const [exporting, setExporting] = useState(false);
  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ownedArcana = useMemo(
    () => ARCANA.filter((arcana) => counts[arcana.id] > 0),
    [counts],
  );
  const totalCopies = useMemo(
    () => ARCANA.reduce((total, arcana) => total + counts[arcana.id], 0),
    [counts],
  );
  const duplicateArcana = useMemo(
    () => ARCANA.filter((arcana) => counts[arcana.id] > 1),
    [counts],
  );
  const totalDuplicateCopies = useMemo(
    () => ARCANA.reduce((total, arcana) => total + Math.max(0, counts[arcana.id] - 1), 0),
    [counts],
  );

  const updateCount = (id: string, next: number) => {
    setCounts((current) => ({ ...current, [id]: clampCount(next) }));
    setPreviewImage(null);
  };

  const handleInput = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    updateCount(id, event.target.valueAsNumber);
  };

  const reset = () => {
    setCounts(emptyCounts());
    setPreviewImage(null);
  };

  const generatePreview = async () => {
    setExporting(true);

    try {
      await document.fonts.load("42px HYWenHei");
      const background = await loadImage("/gi/arcana_background.png");
      const arcanaImages = await Promise.all(
        ARCANA.map(async (arcana) => [arcana.id, await loadImage(`/gi/arcanum/${arcana.id}.webp`)] as const),
      );
      const arcanaImageMap = new Map(arcanaImages);
      const canvas = document.createElement("canvas");
      canvas.width = EXPORT_WIDTH;
      canvas.height = EXPORT_HEIGHT;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      drawBackgroundCover(ctx, background, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(21, 16, 30, 0.34)");
      gradient.addColorStop(0.45, "rgba(27, 20, 37, 0.18)");
      gradient.addColorStop(1, "rgba(7, 6, 12, 0.58)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
      ctx.shadowBlur = 20;
      roundedRect(ctx, 70, 62, 1532, 1396, 28);
      ctx.fillStyle = "rgba(22, 18, 27, 0.54)";
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(238, 214, 150, 0.62)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "#f7ecd0";
      ctx.textBaseline = "alphabetic";
      ctx.font = "500 72px HYWenHei, serif";
      ctx.fillText("Lunar Arcanum", 112, 156);
      ctx.fillStyle = "#d7c197";
      ctx.font = "400 31px HYWenHei, serif";
      ctx.fillText("Trade Inventory", 116, 204);

      const displayName = traveler.trim() || "Traveler";
      const uidText = uid.trim() ? `UID ${uid.trim()}` : "Ready for Co-Op";
      ctx.textAlign = "right";
      ctx.fillStyle = "#f7ecd0";
      drawFitText(ctx, displayName, 1554, 140, 470, 43, 500);
      ctx.fillStyle = "#d7c197";
      ctx.font = "400 27px HYWenHei, serif";
      ctx.fillText(uidText, 1554, 182);
      ctx.textAlign = "left";

      roundedRect(ctx, 116, 231, 1440, 74, 18);
      ctx.fillStyle = openToTrade ? "rgba(71, 102, 79, 0.62)" : "rgba(105, 73, 69, 0.62)";
      ctx.fill();
      ctx.strokeStyle = openToTrade ? "rgba(186, 232, 177, 0.65)" : "rgba(236, 187, 173, 0.65)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#fff7dd";
      ctx.font = "500 34px HYWenHei, serif";
      ctx.fillText(openToTrade ? "Open to trade" : "Collection only", 146, 278);
      ctx.textAlign = "right";
      drawFitText(
        ctx,
        `${ownedArcana.length}/22 Arcana - ${totalCopies} owned - ${totalDuplicateCopies} duplicates`,
        1528,
        278,
        820,
        34,
        500,
      );
      ctx.textAlign = "left";

      const cols = 5;
      const gap = 16;
      const cardW = 272;
      const cardH = 82;
      const startX = 116;

      const drawSection = (
        title: string,
        subtitle: string,
        list: Arcana[],
        y: number,
        getCount: (arcana: Arcana) => number,
        emptyText: string,
      ) => {
        ctx.fillStyle = "#fff3cf";
        ctx.font = "500 35px HYWenHei, serif";
        ctx.fillText(title, startX, y);
        ctx.fillStyle = "#d7c197";
        ctx.font = "400 23px HYWenHei, serif";
        ctx.fillText(subtitle, startX, y + 34);

        if (list.length === 0) {
          roundedRect(ctx, startX, y + 58, 1440, 86, 18);
          ctx.fillStyle = "rgba(21, 18, 23, 0.45)";
          ctx.fill();
          ctx.strokeStyle = "rgba(214, 194, 145, 0.28)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.fillStyle = "rgba(255, 248, 223, 0.68)";
          ctx.font = "400 27px HYWenHei, serif";
          ctx.textAlign = "center";
          ctx.fillText(emptyText, startX + 720, y + 111);
          ctx.textAlign = "left";
          return;
        }

        list.forEach((arcana, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
          const x = startX + col * (cardW + gap);
          const cardY = y + 58 + row * (cardH + 22);
          const count = getCount(arcana);
          const arcanaImage = arcanaImageMap.get(arcana.id);

          roundedRect(ctx, x, cardY, cardW, cardH, 15);
          ctx.fillStyle = "rgba(246, 229, 178, 0.16)";
          ctx.fill();
          ctx.strokeStyle = "rgba(246, 220, 145, 0.62)";
          ctx.lineWidth = 1.8;
          ctx.stroke();



          if (arcanaImage) {
            drawContainedImage(ctx, arcanaImage, x + 12, cardY + 11, 40, 60);
          }

          ctx.fillStyle = "#ffefbd";
          ctx.font = "500 20px HYWenHei, serif";
          ctx.fillText(arcana.roman, x + 66, cardY + 31);
          ctx.fillStyle = "#fff8df";
          drawFitText(ctx, arcana.title, x + 62, cardY + 62, cardW - 104, 19, 500);

          roundedRect(ctx, x + cardW - 40, cardY + 5, 36, 30, 8);
          ctx.fillStyle = "rgba(43, 31, 27, 0.82)";
          ctx.fill();
          ctx.fillStyle = "#fff1be";
          ctx.textAlign = "center";
          ctx.font = "500 18px HYWenHei, serif";
          ctx.fillText(`x${count}`, x + cardW - 22, cardY + 23);
          ctx.textAlign = "left";
        });
      };

      drawSection(
        "Have",
        "All Lunar Arcana in this player's case",
        ownedArcana,
        340,
        (arcana) => counts[arcana.id],
        "No Lunar Arcana selected yet",
      );

      drawSection(
        "Duplicates to trade",
        "Extra copies after keeping one for the collection",
        duplicateArcana,
        900,
        (arcana) => counts[arcana.id] - 1,
        "No duplicate copies marked for trade",
      );

      ctx.fillStyle = "rgba(247, 236, 208, 0.78)";
      ctx.font = "400 22px HYWenHei, serif";
      ctx.fillText("Generated for Lunar Arcanum trading", 116, 1416);
      ctx.textAlign = "right";
      

      const slug = displayName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "traveler";
      setPreviewImage({
        src: canvas.toDataURL("image/png"),
        filename: `lunar-arcanum-${slug}.png`,
      });
    } finally {
      setExporting(false);
    }
  };

  const downloadPreview = () => {
    if (!previewImage) return;

    const link = document.createElement("a");
    link.download = previewImage.filename;
    link.href = previewImage.src;
    link.click();
  };

  return (
    <main className="min-h-screen bg-[#171319] text-[#f8edd2] font-hywei">
      <section
        className="min-h-screen bg-cover bg-center px-4 py-6 sm:px-7 lg:px-10"
        style={{ backgroundImage: "linear-gradient(rgba(18, 13, 21, 0.30), rgba(18, 13, 21, 0.72)), url('/gi/arcana_background.png')" }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
          <header className="rounded-md border border-[#e9d18b]/45 bg-[#1d1720]/70 px-5 py-5 shadow-2xl shadow-black/25 backdrop-blur-md sm:px-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 flex items-center gap-2 text-sm text-[#d9bf84]">
                  <Sparkles size={16} aria-hidden />
                  Imaginarium Theater / Lunar Mode
                </p>
                <h1 className="text-4xl leading-tight text-[#fff3cf] sm:text-5xl">Lunar Arcanum Trade Card</h1>
              </div>

              <div className="grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,160px)] lg:w-[520px]">
                <label className="grid min-w-0 gap-1.5 text-sm text-[#e2c991]">
                  Traveler name
                  <input
                    value={traveler}
                    onChange={(event) => {
                      setTraveler(event.target.value);
                      setPreviewImage(null);
                    }}
                    placeholder="Traveler"
                    maxLength={28}
                    className="h-11 min-w-0 rounded-sm border border-[#d5b66a]/45 bg-[#110e14]/70 px-3 text-base text-[#fff7dd] outline-none transition focus:border-[#ffe6a0]"
                  />
                </label>
                <label className="grid min-w-0 gap-1.5 text-sm text-[#e2c991]">
                  UID
                  <input
                    value={uid}
                    onChange={(event) => {
                      setUid(event.target.value.replace(/[^\d]/g, "").slice(0, 10));
                      setPreviewImage(null);
                    }}
                    placeholder="optional"
                    inputMode="numeric"
                    className="h-11 min-w-0 rounded-sm border border-[#d5b66a]/45 bg-[#110e14]/70 px-3 text-base text-[#fff7dd] outline-none transition focus:border-[#ffe6a0]"
                  />
                </label>
              </div>
            </div>
          </header>

          <div className="grid gap-5 xl:grid-cols-[1fr_310px]">
            <section className="rounded-md border border-[#e9d18b]/35 bg-[#161219]/76 p-4 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-5">
              <div className="mb-4 flex flex-col gap-3 border-b border-[#d5b66a]/25 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl text-[#fff3cf]">Select Arcana</h2>
                  <p className="text-sm text-[#d7c197]">{ownedArcana.length} of 22 selected - {totalCopies} total copies</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex h-10 items-center gap-2 rounded-sm border border-[#d5b66a]/40 bg-[#211923]/80 px-3 text-sm text-[#f6dfaa] transition hover:border-[#ffe6a0]"
                  >
                    <RefreshCw size={15} aria-hidden />
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={generatePreview}
                    disabled={exporting}
                    className="inline-flex h-10 items-center gap-2 rounded-sm bg-[#e6c46f] px-4 text-sm font-semibold text-[#21150f] transition hover:bg-[#f3d98f] disabled:cursor-wait disabled:opacity-70"
                  >
                    <Download size={16} aria-hidden />
                    {exporting ? "Rendering" : "Generate Preview"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ARCANA.map((arcana) => {
                  const count = counts[arcana.id];
                  const selected = count > 0;

                  return (
                    <article
                      key={arcana.id}
                      className={`rounded-md border p-3 transition ${
                        selected
                          ? "border-[#f1d88d]/80 bg-[#f1d88d]/13 shadow-[0_0_24px_rgba(234,197,112,0.13)]"
                          : "border-[#d5b66a]/22 bg-[#110e14]/54 hover:border-[#d5b66a]/48"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => updateCount(arcana.id, selected ? 0 : 1)}
                        className="mb-3 grid min-h-20 w-full grid-cols-[44px_1fr] items-center gap-3 text-left"
                        aria-pressed={selected}
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#d5b66a]/40 bg-[#2a2022]/80 text-[#ffe4a0]">
                          {arcana.roman}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-lg leading-snug text-[#fff3cf]">{arcana.title}</span>
                          <span className="text-xs text-[#c5aa78]">{selected ? "Selected" : "Tap to add"}</span>
                        </span>
                      </button>

                      <div className="grid grid-cols-[40px_1fr_40px] items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateCount(arcana.id, count - 1)}
                          aria-label={`Decrease ${arcana.title}`}
                          className="flex h-10 items-center justify-center rounded-sm border border-[#d5b66a]/32 bg-[#1b151b] text-[#f0d99e] transition hover:border-[#ffe6a0] disabled:opacity-40"
                          disabled={isMounted && count === 0}
                        >
                          <Minus size={16} aria-hidden />
                        </button>
                        <input
                          value={count}
                          onChange={handleInput(arcana.id)}
                          min={0}
                          max={99}
                          type="number"
                          inputMode="numeric"
                          aria-label={`${arcana.title} count`}
                          className="arcana-count-input h-10 min-w-0 rounded-sm border border-[#d5b66a]/32 bg-[#0f0c11]/82 text-center text-lg text-[#fff7dd] outline-none transition focus:border-[#ffe6a0]"
                        />
                        <button
                          type="button"
                          onClick={() => updateCount(arcana.id, count + 1)}
                          aria-label={`Increase ${arcana.title}`}
                          className="flex h-10 items-center justify-center rounded-sm border border-[#d5b66a]/32 bg-[#1b151b] text-[#f0d99e] transition hover:border-[#ffe6a0]"
                        >
                          <Plus size={16} aria-hidden />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <aside className="rounded-md border border-[#e9d18b]/35 bg-[#161219]/76 p-5 shadow-2xl shadow-black/25 backdrop-blur-md xl:sticky xl:top-5 xl:self-start">
              <h2 className="text-2xl text-[#fff3cf]">Trade Status</h2>
              <label className="mt-4 flex cursor-pointer items-center justify-between gap-3 rounded-sm border border-[#d5b66a]/28 bg-[#100d12]/70 p-3">
                <span>
                  <span className="block text-[#fff3cf]">Open to trade</span>
                  <span className="text-sm text-[#c5aa78]">Shown on the exported image</span>
                </span>
                <input
                  checked={openToTrade}
                  onChange={(event) => {
                    setOpenToTrade(event.target.checked);
                    setPreviewImage(null);
                  }}
                  type="checkbox"
                  className="h-5 w-5 accent-[#e6c46f]"
                />
              </label>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-sm border border-[#d5b66a]/25 bg-[#100d12]/65 p-3">
                  <p className="text-3xl text-[#fff3cf]">{ownedArcana.length}</p>
                  <p className="text-sm text-[#c5aa78]">Different Arcana</p>
                </div>
                <div className="rounded-sm border border-[#d5b66a]/25 bg-[#100d12]/65 p-3">
                  <p className="text-3xl text-[#fff3cf]">{totalCopies}</p>
                  <p className="text-sm text-[#c5aa78]">Total copies</p>
                </div>
                <div className="col-span-2 rounded-sm border border-[#d5b66a]/25 bg-[#100d12]/65 p-3">
                  <p className="text-3xl text-[#fff3cf]">{totalDuplicateCopies}</p>
                  <p className="text-sm text-[#c5aa78]">Duplicate copies for trade</p>
                </div>
              </div>

              <div className="mt-5 rounded-sm border border-[#d5b66a]/25 bg-[#100d12]/65 p-3">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm text-[#c5aa78]">Download Preview</p>
                  <button
                    type="button"
                    onClick={downloadPreview}
                    className="inline-flex h-9 items-center gap-2 rounded-sm bg-[#e6c46f] px-3 text-sm font-semibold text-[#21150f] transition hover:bg-[#f3d98f] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    <Download size={15} aria-hidden />
                    Download
                  </button>
                </div>

                {previewImage ? (
                  <NextImage
                    src={previewImage.src}
                    alt="Generated Lunar Arcanum trade image preview"
                    width={1672}
                    height={1540}
                    unoptimized
                    className="aspect-[1672/1540] w-full rounded-sm border border-[#d5b66a]/35 bg-[#08070a] object-cover"
                  />
                ) : (
                  <div className="flex aspect-[1672/1540] w-full items-center justify-center rounded-sm border border-dashed border-[#d5b66a]/35 bg-[#08070a]/60 px-4 text-center text-sm text-[#c5aa78]">
                    Generate a preview to see the exact image before downloading.
                  </div>
                )}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-[#b89e70]">
                Lunar Arcana names are based on the Genshin Impact Wiki Lunar Arcanum list.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
