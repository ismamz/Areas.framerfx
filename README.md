### Create complex grid layouts with [template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).

This package use [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to build a grid layout in Framer X without writing code.

> A grid area is one or more grid cells that make up a rectangular area on the grid. Grid areas are created when you place an item using line-based placement or when defining areas using named grid areas.

## Usage

1. Drop the `Areas` component to your canvas
2. Connect to multiple frames
3. Define areas for each row like CSS
4. Adjust gaps and border radius

By default each connected frame will take a letter name (a, b, c, ...). Each string input in the Rows controls should be defined using that letters or if you choose "Names" instead of "Letters" you will need to use the frame names as you see it in the layers panel.

If a frame name is repeated you will sea a warning message in console.

![Screenshot 1](https://isma.uy/assets/screenshot-1.png)

Each cell will cover the total space of an area and the content will be adjusted to the new dimensions. Images, Frames or whatever component you connect.

## Changelog

#### v1.0.0

- Initial release

---

## See also

- [Duotone](https://store.framer.com/package/ismael/duotone): apply duotone effect to an image
- [Sticky](https://store.framer.com/package/ismael/sticky): set multiple sticky header frames in a scrollable area
- [Google Maps](https://store.framer.com/package/ismael/google-maps): add a Google Map to your design
- [Photo Filters](https://store.framer.com/package/ismael/photo-filters): add filters and effects to images like Instagram
- [Get colors from images](https://store.framer.com/package/ismael/get-colors-from-images): extract colors from a selected image to form a color profile

---

Bugs & help: [@ismamz](https://twitter.com/ismamz) and [Areas.framerfx repo on GitHub](https://github.com/ismamz/Areas.framerfx)
