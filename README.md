# Clock

Based on an award-winning analog clock design that is no longer in production*, this project restores that clock digitally.

Unlike most online projects, this project requires patience and repeat visits over the course of the day.

As the 3 by 3 grid of hands mark the passing of time, they create patterns of angles and lines that provide a new way of seeing time throughout the day.

- A [custom element][clock] is inserted into the DOM nine times, and each clock redraws its hour and minute hands every second via inline SVG.
- A [theming widget][theme] allows users to switch between dark and light modes simply by clicking on the clock face, and this preference is saved via localStorage.
- All layout is via CSS [grid and flexbox][css].

[clock]: /source/js/modules/Clock.js
[theme]: /source/js/modules/Theme.js
[css]: /source/stylus/clock/clocks.styl

\* I think part of the reason the original didn't last is because each set of hands was powered by a single AA battery, and the hands would get out of sync over time as the batteries wore out.