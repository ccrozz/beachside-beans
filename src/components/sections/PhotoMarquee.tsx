"use client";

import Image from "next/image";
import { galleryPhotos } from "@/lib/data/galleryPhotos";

const doubled = [...galleryPhotos, ...galleryPhotos];

export function PhotoMarquee() {
  return (
    <div className="relative overflow-hidden bg-roast py-10">
      <div className="marquee-track" aria-hidden>
        {doubled.map((src, i) => (
          // eslint-disable-next-line react/no-array-index-key -- duplicated loop is deterministic
          <figure key={`${src}-${i}`} className="relative h-52 w-52 shrink-0">
            <Image
              src={src}
              alt=""
              fill
              sizes="208px"
              className="object-cover brightness-90"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
