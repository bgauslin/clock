# Clock

Based on an award-winning analog clock design that is no longer in production<sup>*</sup>, this project restores that clock digitally.

![Clock at 1:00, 6:00, and 7:00](https://assets.gauslin.com/images/screenshots/3-clocks.png)

As a 3 × 3 grid of clock hands mark the passing of time, they create patterns of angles and lines that provide a different way of seeing time over the course of the day. 

- An `n-clock` custom element is [inserted into the DOM nine times][nine_clocks], and each custom element redraws its hour and minute hands every second via [inline SVG][inline_svg].
- A [theming widget][theming] allows users to switch between [dark and light][theme_hash] [modes][theme_loop] simply by clicking on the clock face, and this preference is saved via localStorage.
- All HTML uses BEM to keep CSS specificity low, with layout via [grid][grid] and [flexbox][flexbox].

Unlike many online projects, this project requires patience and intermittent visits throughout the day.

---

<sup>*</sup> I think part of the reason the original didn't last is because each set of hands was powered by a single AA battery, and the hands would get out of sync over time as the batteries wore out.

[flexbox]: https://github.com/bgauslin/clock/blob/f3cad130992503aa9a9f6188d2c39b9e4af27597/source/stylus/clock/clocks.styl#L10-L14
[grid]: https://github.com/bgauslin/clock/blob/f3cad130992503aa9a9f6188d2c39b9e4af27597/source/stylus/clock/html.styl#L12-L16
[inline_svg]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Clock.js#L59-L79
[nine_clocks]: https://github.com/bgauslin/clock/blob/f3cad130992503aa9a9f6188d2c39b9e4af27597/source/js/clock.js#L30-L35
[theming]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Theme.js#L11-L48
[theme_hash]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/config/constants.styl#L2-L21
[theme_loop]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/clock/theme.styl#L1-L23
