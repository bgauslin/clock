# Clock

Based on an award-winning analog clock design that is no longer in production<sup>*</sup>, this project restores that clock digitally.

Unlike most online projects, this project requires patience and repeat visits over the course of the day.

As the 3 by 3 grid of hands mark the passing of time, they create patterns of angles and lines that provide a new way of seeing time throughout the day.

- A custom element is inserted into the DOM nine times, and each clock redraws its hour and minute hands every second via [inline SVG][inline_svg].
- A [theming widget][theming] allows users to switch between [dark and light][theme_hash] [modes][theme_loop] simply by clicking on the clock face, and this preference is saved via localStorage.
- All layout is via CSS grid and flexbox in [Stylus modules][stylus].

[inline_svg]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Clock.js#L48-L81
[theming]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Theme.js#L11-L48
[theme_hash]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/config/constants.styl#L2-L21
[theme_loop]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/clock/theme.styl#L1-L23
[stylus]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/clock.styl#L1-L9

<sup>*</sup> I think part of the reason the original didn't last is because each set of hands was powered by a single AA battery, and the hands would get out of sync over time as the batteries wore out.
