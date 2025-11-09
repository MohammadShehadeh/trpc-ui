import type { ColorSchemeType } from "@src/react-app/components/CollapsableSection";
import { textColor } from "@src/react-app/components/style-utils";
import React from "react";
import { sideNavMap } from "../utils/mappers";

export function ItemTypeIcon({
  colorScheme,
}: {
  colorScheme: ColorSchemeType;
}) {
  return (
    <span className={`mr-1 font-bold ${textColor(colorScheme)}`}>
      {sideNavMap[colorScheme]}
    </span>
  );
}
