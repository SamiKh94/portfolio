"use client";

import { useState } from "react";

interface Props {
  src: string;
  name: string;
  style?: React.CSSProperties;
  fallbackStyle?: React.CSSProperties;
}

export default function ProfilePhoto({ src, name, style, fallbackStyle }: Props) {
  const [errored, setErrored] = useState(false);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

  if (errored) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "1.4rem",
          letterSpacing: "-0.02em",
          width: "100%",
          height: "100%",
          ...fallbackStyle,
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} profile photo`}
      onError={() => setErrored(true)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        display: "block",
        ...style,
      }}
    />
  );
}
