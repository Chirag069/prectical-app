import React from 'react';
import { SvgProps } from 'react-native-svg';

// ─── Existing SVG imports ────────────────────────────────────────────────────
import ArrowRight from './arrow-right.svg';
import HeartOutline from './heart_outline.svg';
import Icon from './icon.svg';
import Search from './search (1).svg';
import User from './user (1).svg';
import Vector from './vector.svg';

// ─── Add new SVG imports here as you drop files into src/assets/svg/ ─────────

interface IconProps extends SvgProps {
  width?: number;
  height?: number;
  fill?: string;
  color?: string;
  stroke?: string;
}

type IconComponent = React.FC<IconProps>;

const wrapIcon = (Component: React.ComponentType<SvgProps>): IconComponent => {
  const Wrapped: IconComponent = ({ color, fill, stroke, style, preserveAspectRatio, ...rest }) => {
    const finalProps: SvgProps = {
      ...rest,
      preserveAspectRatio: preserveAspectRatio ?? 'xMidYMid meet',
      ...(style && { style }),
      ...((color || fill) && { fill: color ?? fill }),
      ...(stroke && { stroke }),
    };
    return React.createElement(Component, finalProps);
  };
  return Wrapped;
};

// ─── Icon map ────────────────────────────────────────────────────────────────
const SVG_ICONS = {
  ArrowRight:   wrapIcon(ArrowRight),
  HeartOutline: wrapIcon(HeartOutline),
  Icon:         wrapIcon(Icon),
  Search:       wrapIcon(Search),
  User:         wrapIcon(User),
  Vector:       wrapIcon(Vector),
  // Add new entries here matching the import name above
} as const;

/** Union of all available SVG icon names — use for autocomplete. */
export type SvgIconName = keyof typeof SVG_ICONS;

export const SVGs: typeof SVG_ICONS = SVG_ICONS;
