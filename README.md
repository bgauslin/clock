# Clock

[Clock.Gauslin.com](https://clock.gauslin.com)

Based on an award-winning analog clock design that is no longer in production,<sup>*</sup> this project restores that clock digitally.

![Clock at 1:00, 6:00, and 7:00](https://assets.gauslin.com/images/screenshots/3-clocks.png)

As a 3 × 3 grid of clock hands mark the passing of time, they create patterns of angles and lines that provide a different way of seeing time over the course of the day. 

- A `my-clock` custom element is [inserted into the DOM nine times][nine_clocks], and each custom element redraws its hour and minute hands every second via [inline SVG][inline_svg].
- A [theming widget][theming] allows users to switch between [dark and light][themes] modes simply by clicking on the clock face, and this preference is saved via [localStorage][save_theme].
- All HTML uses BEM to keep CSS specificity low, with layout via [grid][grid] and [flexbox][flexbox].

This project works best with patience and intermittent visits throughout the day.

---

<sup>*</sup> I think part of the reason the original didn’t last is because each set of hands was powered by a single AA battery, and the hands would get out of sync over time as the batteries wore out.

[nine_clocks]: https://github.com/bgauslin/clock/blob/f3cad130992503aa9a9f6188d2c39b9e4af27597/source/js/clock.js#L30-L35
[inline_svg]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Clock.js#L60-L78

[theming]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Theme.js#L39-L47
[themes]: https://github.com/bgauslin/clock/blob/704ebd8b51fca9764e06e4e682cf9a35f968471f/source/stylus/clock/_root_vars.styl#L5-L21
[save_theme]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Theme.js#L30-L33

[grid]: https://github.com/bgauslin/clock/blob/704ebd8b51fca9764e06e4e682cf9a35f968471f/source/stylus/clock/html.styl#L13-L17
[flexbox]: https://github.com/bgauslin/clock/blob/704ebd8b51fca9764e06e4e682cf9a35f968471f/source/stylus/clock/clocks.styl#L12-L24
