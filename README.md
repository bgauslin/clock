# Clock

Based on an award-winning analog clock design that is no longer in production<sup>*</sup>, this project restores that clock digitally.

<img src="https://assets.gauslin.com/images/screenshots/clock-0100.png" alt="Clock at 1:00" width="200" height="200">
<img src="https://assets.gauslin.com/images/screenshots/clock-0300.png" alt="Clock at 3:00" width="200" height="200">
<img src="https://assets.gauslin.com/images/screenshots/clock-0600.png" alt="Clock at 6:00" width="200" height="200">
<img src="https://assets.gauslin.com/images/screenshots/clock-0700.png" alt="Clock at 7:00" width="200" height="200">

As the 3 × 3 grid of clock hands mark the passing of time, they create patterns of angles and lines that provide a new way of seeing time over the course of the day. 

- An `n-clock` custom element is inserted into the DOM nine times, and each custom element redraws its hour and minute hands every second via [inline SVG][inline_svg].
- A [theming widget][theming] allows users to switch between [dark and light][theme_hash] [modes][theme_loop] simply by clicking on the clock face, and this preference is saved via localStorage.
- All HTML uses BEM to keep CSS specificity low, CSS layout is via grid and flexbox, and all styles are managed via small [Stylus modules][stylus].

Unlike many online projects, this project requires patience and intermittent visits throughout the day.

---

<sup>*</sup> I think part of the reason the original didn't last is because each set of hands was powered by a single AA battery, and the hands would get out of sync over time as the batteries wore out.


[inline_svg]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Clock.js#L59-L79
[theming]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/js/modules/Theme.js#L11-L48
[theme_hash]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/config/constants.styl#L2-L21
[theme_loop]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/clock/theme.styl#L1-L23
[stylus]: https://github.com/bgauslin/clock/blob/289ce0834b04cb46c771238e391576a3ccc4305f/source/stylus/clock.styl#L1-L9
