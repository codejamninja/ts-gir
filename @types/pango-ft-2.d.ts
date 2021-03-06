import * as freetype2 from './freetype-2';
import * as Pango from './pango';
export function font_get_coverage(
  font: Pango.Font,
  language: Pango.Language
): Pango.Coverage;
export function font_get_face(font: Pango.Font): freetype2.Face | null;
export function font_get_kerning(
  font: Pango.Font,
  left: Pango.Glyph,
  right: Pango.Glyph
): number;
export function get_context(dpi_x: number, dpi_y: number): Pango.Context;
export function get_unknown_glyph(font: Pango.Font): Pango.Glyph;
export function render(
  bitmap: freetype2.Bitmap,
  font: Pango.Font,
  glyphs: Pango.GlyphString,
  x: number,
  y: number
): void;
export function render_layout(
  bitmap: freetype2.Bitmap,
  layout: Pango.Layout,
  x: number,
  y: number
): void;
export function render_layout_line(
  bitmap: freetype2.Bitmap,
  line: Pango.LayoutLine,
  x: number,
  y: number
): void;
export function render_layout_line_subpixel(
  bitmap: freetype2.Bitmap,
  line: Pango.LayoutLine,
  x: number,
  y: number
): void;
export function render_layout_subpixel(
  bitmap: freetype2.Bitmap,
  layout: Pango.Layout,
  x: number,
  y: number
): void;
export function render_transformed(
  bitmap: freetype2.Bitmap,
  matrix: Pango.Matrix,
  font: Pango.Font,
  glyphs: Pango.GlyphString,
  x: number,
  y: number
): void;
export function shutdown_display(): void;
