/** @module DollarCircleIllustration */
import React, {FC, memo, useState} from 'react';

type DollarCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** Determines if the illustration should default to the illuminated state. */
  illuminate?: boolean;
  /** Determines if the color variant should be shown or not. */
  color?: boolean;
  /** Determines if the draft variant should be shown or not. */
  draft?: boolean;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders a dollar illustration. */
const DollarCircleIllustration: FC<DollarCircleIllustrationProps> = ({
  illuminate,
  color,
  draft,
  width,
  height,
  className,
  style,
  id,
}) => {
  const [illuminated, setIlluminated] = useState(false);

  const elementProps = {
    className,
    style: {
      /**
       * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
       * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
       * */
      width,
      height,
      ...style,
    },
    onClick: (): void => setIlluminated(!illuminated),
  };

  if (illuminate || illuminated) {
    return (
      <svg
        {...elementProps}
        id={`${id}-illuminated`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="illuminated"
      >
        <title id={`${id}-title`}>Dollar Circle Illustration</title>
        <desc id={`${id}-description`}>
          Reversed Dollar illustration in color
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="matrix(.89124411 .45352391 -.45352391 .89124411 8 21.41)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#f17732" r=".35" />
          <circle cx="1" cy="4" fill="#f17732" r=".35" />
          <circle cx="4" cy="2" fill="#f17732" r=".35" />
          <circle cx="2" cy="2" fill="#f17732" r=".35" />
          <circle cy="2" fill="#f17732" r=".35" />
          <circle cx="3" fill="#f17732" r=".35" />
          <circle cx="1" fill="#f17732" r=".35" />
        </pattern>
        <pattern
          id={`${id}-b`}
          height="4"
          patternTransform="matrix(.89124411 .45352391 -.45352391 .89124411 8 21.41)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#99052e" r=".35" />
          <circle cx="1" cy="4" fill="#99052e" r=".35" />
          <circle cx="4" cy="2" fill="#99052e" r=".35" />
          <circle cx="2" cy="2" fill="#99052e" r=".35" />
          <circle cy="2" fill="#99052e" r=".35" />
          <circle cx="3" fill="#99052e" r=".35" />
          <circle cx="1" fill="#99052e" r=".35" />
        </pattern>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m95.2 82.75c3.42 0 3.37-2.47 3.84-6 1.23-1 2.11-1.89 2.17-3.49 6-6.75 26.21 18.61 27.38 7.83.76-7-6.79-16.83-22.21-17.71-6.51-.38-11.07 8.4-12.38 16.19-.26 1.81-.38 3.16 1.2 3.18z"
          fill="#2870b5"
        />
        <g fill="#5fcbeb">
          <path d="m87.36 83c3.64 1.44 4.64-1.27 5.8-5 1.74-.68 3.1-2.69 3.72-4.5 14.72-9.68 25 25.28 30.09 13.38 3.29-7.68-1.9-21.57-19.18-27.93-7.3-2.74-16.49 11.57-20.65 20.05-.97 1.94-1.54 3.32.22 4z" />
          <path d="m80 76c2.95 2.6 4.82.39 7.17-2.77 1.87 0 3.83-1.47 5-3 9.17-6 9.69 3.2 22.07 7.18 8 2.55 9.26-7.75-4.81-19.64-5.94-5-21.5 7.8-28.3 14.32-1.54 1.56-2.54 2.66-1.13 3.91z" />
          <path d="m87.08 59.25c7.1 9 15.52 1 20.91 2.49 7.4 4.46-5 18.76 17.55 24.33 4.14 1 12.13-7 8-11.87-7.24-8.39-11.13-17.61-20-23.07-4-2.44-29.44 4.35-26.46 8.12z" />
        </g>
        <path
          d="m96.05 64.53c-5.92 5.44 10.06 8.72 16.65 7.14 8.29-2 .9 13.39 12.52 15.43 4.19.74 8.13 4.61 4.86-.83-5.71-9.51-6.73-11.43-14.57-18.33-3.51-3.07-15.11-7.41-19.46-3.41z"
          fill="#2870b5"
        />
        <path
          d="m40.1 41.97h75.35v32.95h-75.35z"
          fill="#f17732"
          transform="matrix(.98893833 .14832724 -.14832724 .98893833 9.53 -10.89)"
        />
        <path
          d="m106 79.34-67.93-10.19 4.93-32.58 2.87.43c9.58 30.14 60.13 42.34 60.13 42.34z"
          fill="#99052e"
        />
        <rect
          fill="#feca1e"
          height="26.39"
          rx="4.7"
          transform="matrix(.98893833 .14832724 -.14832724 .98893833 9.53 -10.89)"
          width="75.35"
          x="40.1"
          y="45.25"
        />
        <path
          d="m112.34 50.29-65.23-9.78a4.7 4.7 0 0 0 -5.34 3.94l-2.52 16.81a4.69 4.69 0 0 0 4 5.34l65.23 9.78a4.7 4.7 0 0 0 5.34-3.94l2.52-16.81a4.69 4.69 0 0 0 -4-5.34z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m47.11 40.51a4.7 4.7 0 0 0 -5.34 3.94l-2.52 16.82a4.69 4.69 0 0 0 4 5.33l45 6.74c-14.53-5.94-33.75-16.53-41-32.82z"
          fill="#f17732"
        />
        <path
          d="m47.11 40.51a4.7 4.7 0 0 0 -5.34 3.94l-2.52 16.82a4.69 4.69 0 0 0 4 5.33l45 6.74c-14.53-5.94-33.75-16.53-41-32.82z"
          fill={`url(#${id}-b`}
        />
        <path
          d="m81.57 56.53h24.18v8.61h-24.18z"
          fill="#f17732"
          transform="matrix(.98893833 .14832724 -.14832724 .98893833 10.06 -13.22)"
        />
        <ellipse
          cx="74.91"
          cy="58.02"
          fill="#99052e"
          rx="15.17"
          ry="13.17"
          transform="matrix(.14832724 -.98893833 .98893833 .14832724 6.43 123.5)"
        />
        <path
          d="m81.81 70.57a99.87 99.87 0 0 1 -20.1-12.2c-.12 7.34 4.44 13.63 10.95 14.63a12.22 12.22 0 0 0 9.15-2.43z"
          fill="#10004c"
        />
        <ellipse
          cx="74.91"
          cy="58.02"
          fill="#feca1e"
          rx="13.48"
          ry="11.71"
          transform="matrix(.15 -.99 .99 .15 6.43 123.5)"
        />
        <path
          d="m80.15 69.78a100.07 100.07 0 0 1 -16.94-10.25c.31 5.1 3.17 9.48 7.36 11.18l4.78.71a11 11 0 0 0 4.8-1.64z"
          fill="#f17732"
        />
        <circle cx="50.91" cy="55.4" fill="#10004c" r="4.36" />
        <path
          d="m100.81 70.32h8.51v3.63h-8.51z"
          fill="#99052e"
          transform="matrix(.98893833 .14832724 -.14832724 .98893833 11.86 -14.78)"
        />
        <path
          d="m74.32 49.32s-5.19 0-6.17 5.13c-.68 3.62-3.62 6.79-4.46 8.14a1 1 0 0 0 -.23.54c0 .79 0 2.67 1.14 3.27a2.89 2.89 0 0 0 .61.2c1.89.42 6.66.48 7.62-.09s1.49-17.19 1.49-17.19z"
          fill="#99052e"
        />
        <path
          d="m63.71 62.55c-.31.07-.68.19-.61.4.41 1.27.27 4.12 2.54 3.73 2.1.35 6.3.36 7.19-.17a.89.89 0 0 0 .25-.47 96.21 96.21 0 0 1 -8.08-5.21c-.57.71-1 1.3-1.29 1.72z"
          fill="#10004c"
        />
        <path
          d="m80.88 53.62s1.45 1.27.83 5.42c-.15 1 1.53 3.25.39 4.73s-1.36 1.29-1.42 1.91a1.6 1.6 0 0 1 -2.53 1.32c-1.17-.63-1.55-2.84-1.55-2.84z"
          fill="#99052e"
        />
        <path
          d="m64.77 65.28c.9-2.16 3.9-2.08 5.61-3.59 1.36-1.19 7.15 3.07 7.15 3.07s.62 3.57 2 5.38c-3.53 2.34-11.76 2.14-14.76-4.86z"
          fill="#f8f7f4"
        />
        <path
          d="m79.54 70.14a6 6 0 0 1 -.59-1 104.78 104.78 0 0 1 -10.95-6.2c-1.36.53-2.71 1-3.26 2.34 3.03 7 11.26 7.2 14.8 4.86z"
          fill="#fde5cb"
        />
        <path
          d="m81.3 56.43c0 4.54-2.62 9.18-6 9.21-2.22 0-4.19-2-5.27-4.68a12.35 12.35 0 0 1 -.88-4.42c-.05-4.54 2.64-7.32 6-7.35s6.11 2.69 6.15 7.24z"
          fill="#f8f7f4"
        />
        <path
          d="m70.45 51.28a23.87 23.87 0 0 1 .66 4.43c-.17.8-1.63 2.72-1.51 5s-1.6-1.62-1.6-1.62 1.63-7.45 2.45-7.81z"
          fill="#99052e"
        />
        <path
          d="m98 70.43c-2.54 2.61 10.5 5.23 12.12 6.93 6.42 6.7 11.2 7.62 16.4 6.59 5.54-1.09 3.86-16.68-13.44-12.94-8.21 1.79-8.9-6.89-15.08-.58z"
          fill="#10004c"
        />
        <path
          d="m127.43 91h-.07c-4.91 1.58-11.93-.81-17.81-10.23-3.55-5.77-19.04-4.9-15.37-12.55 3.75-7.81 12.42 5.27 19.89 3.63 9.38-2.07 14.78 1 17.33 5l2.13-2.69s4.46 5.26 5.93 4.44a70 70 0 0 1 -5.15 19.07c-.75-1.58-2.96-5.6-6.88-6.67z"
          fill="#5fcbeb"
        />
        <path
          d="m127.43 91h-.08c-4.9 1.57-11.92-.82-17.8-10.24-2.93-4.7-13.94-4.93-15.69-9.13-.38-.9 6.34-3 16 7.51 5.09 5.49 15.34 6.78 17.89 6.58 1.88-.15 10.15 0 8.92 5.57-.7 2.2-1.5 4.37-2.41 6.48-.69-1.71-2.96-5.63-6.83-6.77z"
          fill="#2870b5"
        />
      </svg>
    );
  } else if (color) {
    return (
      <svg
        {...elementProps}
        id={`${id}-color`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="color"
      >
        <title id={`${id}-title`}>Dollar Circle Illustration</title>
        <desc id={`${id}-description`}>Dollar illustration in color</desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#f17732" r=".35" />
          <circle cx="1" cy="4" fill="#f17732" r=".35" />
          <circle cx="4" cy="2" fill="#f17732" r=".35" />
          <circle cx="2" cy="2" fill="#f17732" r=".35" />
          <circle cy="2" fill="#f17732" r=".35" />
          <circle cx="3" fill="#f17732" r=".35" />
          <circle cx="1" fill="#f17732" r=".35" />
        </pattern>
        <pattern
          id={`${id}-b`}
          height="4"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#99052e" r=".35" />
          <circle cx="1" cy="4" fill="#99052e" r=".35" />
          <circle cx="4" cy="2" fill="#99052e" r=".35" />
          <circle cx="2" cy="2" fill="#99052e" r=".35" />
          <circle cy="2" fill="#99052e" r=".35" />
          <circle cx="3" fill="#99052e" r=".35" />
          <circle cx="1" fill="#99052e" r=".35" />
        </pattern>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m47 97.6c-3.32.82-3.83-1.64-5.09-4.95-1.43-.65-2.51-1.36-2.91-2.91-7.34-5.22-21.32 24.06-24.9 13.83-2.33-6.57 2.8-17.93 17.61-22.28 6.29-1.84 12.69 5.65 15.69 12.95.7 1.7 1.12 2.98-.4 3.36z"
          fill="#2870b5"
        />
        <g fill="#5fcbeb">
          <path d="m54.67 96.08c-3.24 2.23-4.83-.19-6.79-3.61-1.84-.27-3.62-1.93-4.63-3.55-16.54-6.09-18.64 30.28-26.25 19.85-5-6.77-3.07-21.44 12.32-31.55 6.51-4.22 18.68 7.59 24.68 14.88 1.37 1.7 2.23 2.9.67 3.98z" />
          <path d="m60.26 87.59c-2.29 3.21-4.61 1.47-7.62-1.07-1.83.38-4.06-.57-5.57-1.75-10.28-3.73-8.71 5.32-19.87 12-7.18 4.29-10.77-5.46.24-20.22 4.65-6.24 22.71 2.74 30.8 7.55 1.89 1.11 3.12 1.95 2.02 3.49z" />
          <path d="m50.06 66.79c7 3.9-7.72 10.85-14.49 10.87-8.53 0 4.12 24.54-16.61 32-3.96 1.34-7.47-4.66-5.57-10.66 3.3-10.58 3.21-20.58 9.2-29.14 2.67-3.86 22.3-5.93 27.47-3.07z" />
        </g>
        <path
          d="m52.06 66.79c7 3.9-7.72 10.85-14.49 10.87-8.53 0 2.28 13.22-8.53 18-3.9 1.7-6.81 6.4-4.92.33 3.3-10.63 3.88-12.74 9.88-21.29 2.63-3.81 12.89-10.77 18.06-7.91z"
          fill="#2870b5"
        />
        <path
          d="m26.1 50.97h75.35v32.95h-75.35z"
          fill="#f17732"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.06 23.63)"
        />
        <path
          d="m98.41 73.26-65.17 21.74-10.42-31.27 2.76-.92c22.24 22.51 72.83 10.45 72.83 10.45z"
          fill="#99052e"
        />
        <rect
          fill="#feca1e"
          height="26.39"
          rx="4.7"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.06 23.63)"
          width="75.35"
          x="26.1"
          y="54.25"
        />
        <path
          d="m90.88 44.5-62.57 20.86a4.7 4.7 0 0 0 -3 5.94l5.38 16.12a4.7 4.7 0 0 0 5.94 3l62.6-20.89a4.7 4.7 0 0 0 3-5.94l-5.41-16.12a4.7 4.7 0 0 0 -5.94-2.97z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m28.31 65.36a4.7 4.7 0 0 0 -3 5.94l5.38 16.13a4.7 4.7 0 0 0 5.94 3l43.14-14.43c-15.63 1.29-37.57.57-51.4-10.68z"
          fill="#f17732"
        />
        <path
          d="m28.31 65.36a4.7 4.7 0 0 0 -3 5.94l5.38 16.13a4.7 4.7 0 0 0 5.94 3l43.14-14.43c-15.63 1.29-37.57.57-51.4-10.68z"
          fill={`url(#${id}-b`}
        />
        <path
          d="m66.93 58.06h24.18v8.61h-24.18z"
          fill="#f17732"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -15.67 28.19)"
        />
        <ellipse
          cx="61.03"
          cy="68.36"
          fill="#99052e"
          rx="13.17"
          ry="15.17"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.49 22.81)"
        />
        <path
          d="m72.86 76.42a99.65 99.65 0 0 1 -23.43-1.76c3.22 6.6 10.15 10.17 16.4 8.09a12.15 12.15 0 0 0 7.03-6.33z"
          fill="#10004c"
        />
        <ellipse
          cx="61.03"
          cy="68.36"
          fill="#feca1e"
          rx="11.71"
          ry="13.48"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.49 22.81)"
        />
        <path
          d="m71 76.46a100.47 100.47 0 0 1 -19.72-1.46c2.6 4.4 7.13 7 11.63 6.62l4.58-1.53a10.85 10.85 0 0 0 3.51-3.63z"
          fill="#f17732"
        />
        <circle cx="38.45" cy="76.92" fill="#10004c" r="4.36" />
        <path
          d="m90.05 65.45h8.51v3.63h-8.51z"
          fill="#99052e"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -16.43 33.28)"
        />
        <path
          d="m56.56 60.88s-4.65 2.31-3.17 7.37c1 3.54-.15 7.69-.29 9.28a1.07 1.07 0 0 0 0 .58c.39.68 1.26 2.36 2.5 2.39a2.47 2.47 0 0 0 .63-.09c1.88-.48 6.16-2.6 6.75-3.53s-6.42-16-6.42-16z"
          fill="#99052e"
        />
        <path
          d="m53.1 77.48c-.24.2-.52.48-.37.63 1 1 2.12 3.55 4 2.18 2-.65 5.78-2.54 6.33-3.41a.84.84 0 0 0 0-.54 95.42 95.42 0 0 1 -9.6-1c-.17.92-.31 1.66-.36 2.14z"
          fill="#10004c"
        />
        <path
          d="m64.35 61.74s1.87.47 3.2 4.45c.31.92 2.84 2.2 2.5 4s-.64 1.76-.41 2.35a1.59 1.59 0 0 1 -1.64 2.35c-1.34 0-2.67-1.83-2.67-1.83z"
          fill="#99052e"
        />
        <path
          d="m55.28 79.43c-.17-2.33 2.53-3.62 3.38-5.74.67-1.68 7.76-.51 7.76-.51s2.17 2.91 4.23 3.89c-2.12 3.69-9.51 7.24-15.37 2.36z"
          fill="#f8f7f4"
        />
        <path
          d="m70.65 77.07a7.1 7.1 0 0 1 -1-.59 105.35 105.35 0 0 1 -12.56-.61c-1 1.09-2 2.13-1.85 3.56 5.9 4.88 13.29 1.33 15.41-2.36z"
          fill="#fde5cb"
        />
        <path
          d="m66 64c2.1 4 1.83 9.38-1.14 10.92-2 1-4.64.13-6.82-1.78a12.42 12.42 0 0 1 -2.79-3.53c-2.1-4-1-7.73 2-9.28s6.65-.33 8.75 3.67z"
          fill="#f8f7f4"
        />
        <path
          d="m54 64.38a23 23 0 0 1 2.59 3.62c.21.79-.22 3.16.94 5.18s-2.2-.74-2.2-.74-1.9-7.37-1.33-8.06z"
          fill="#99052e"
        />
        <path
          d="m44.45 81.41c3.37 1.39-7.55 9-8.37 11.17-3.22 8.7-7.25 11.45-12.42 12.58-5.52 1.19-10.17-13.78 7.18-17.22 8.28-1.64 5.46-9.88 13.61-6.53z"
          fill="#10004c"
        />
        <path
          d="m25.64 111.92h.05c5.13-.5 10.62-5.48 12.28-16.47 1-6.65 15.55-12 9.14-17.55s-9.3 9.77-16.81 11.23c-9.43 1.84-13.15 6.81-13.89 11.52l-3-1.62s-2 6.6-3.69 6.43a70.58 70.58 0 0 0 12.28 15.4c.05-1.78.48-6.35 3.64-8.94z"
          fill="#5fcbeb"
        />
        <path
          d="m25.64 111.92h.06c5.13-.51 10.61-5.49 12.27-16.47.82-5.48 10.83-10.06 10.76-14.61 0-1-7-.24-11.74 13.27-2.48 7.06-11.38 12.32-13.8 13.15-1.79.61-9.3 4.06-6 8.66q2.27 2.61 4.79 5c.02-1.87.45-6.48 3.66-9z"
          fill="#2870b5"
        />
      </svg>
    );
  } else if (draft) {
    return (
      <svg
        {...elementProps}
        id={`${id}-draft`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="draft"
      >
        <title id={`${id}-title`}>Dollar Circle Illustration</title>
        <desc id={`${id}-description`}>Grey dollar illustration</desc>
        <circle cx="70.08" cy="70" fill="#5b6279" r="70" />
        <path
          d="m47 97.6c-3.32.82-3.83-1.64-5.09-4.95-1.43-.65-2.51-1.36-2.91-2.91-7.34-5.22-21.32 24.06-24.9 13.83-2.33-6.57 2.8-17.93 17.61-22.28 6.29-1.84 12.69 5.65 15.69 12.95.7 1.7 1.12 2.98-.4 3.36z"
          fill="#bdc0c9"
        />
        <path
          d="m54.67 96.08c-3.24 2.23-4.83-.19-6.79-3.61-1.84-.27-3.62-1.93-4.63-3.55-16.54-6.09-18.64 30.28-26.25 19.85-5-6.77-3.07-21.44 12.32-31.55 6.51-4.22 18.68 7.59 24.68 14.88 1.37 1.7 2.23 2.9.67 3.98z"
          fill="#dee0e4"
        />
        <path
          d="m60.26 87.59c-2.29 3.21-4.61 1.47-7.62-1.07-1.83.38-4.06-.57-5.57-1.75-10.28-3.73-8.71 5.32-19.87 12-7.18 4.29-10.77-5.46.24-20.22 4.65-6.24 22.71 2.74 30.8 7.55 1.89 1.11 3.12 1.95 2.02 3.49z"
          fill="#eeeff1"
        />
        <path
          d="m50.06 66.79c7 3.9-7.72 10.85-14.49 10.87-8.53 0 4.12 24.54-16.61 32-3.96 1.34-7.47-4.66-5.57-10.66 3.3-10.58 3.21-20.58 9.2-29.14 2.67-3.86 22.3-5.93 27.47-3.07z"
          fill="#fff"
        />
        <path
          d="m52.06 66.79c7 3.9-7.72 10.85-14.49 10.87-8.53 0 2.28 13.22-8.53 18-3.9 1.7-6.81 6.4-4.92.33 3.3-10.63 3.88-12.74 9.88-21.29 2.63-3.81 12.89-10.77 18.06-7.91z"
          fill="#eeeff1"
        />
        <path
          d="m26.1 50.97h75.35v32.95h-75.35z"
          fill="#9da1af"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.06 23.63)"
        />
        <path
          d="m98.41 73.26-65.17 21.74-10.42-31.27 2.76-.92c22.24 22.51 72.83 10.45 72.83 10.45z"
          fill="#8c91a1"
        />
        <rect
          fill="#bdc0c9"
          height="26.39"
          rx="4.7"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.06 23.63)"
          width="75.35"
          x="26.1"
          y="54.25"
        />
        <path
          d="m28.31 65.36a4.7 4.7 0 0 0 -3 5.94l5.38 16.13a4.7 4.7 0 0 0 5.94 3l43.14-14.43c-15.63 1.29-37.57.57-51.4-10.68z"
          fill="#adb0bc"
        />
        <path
          d="m66.93 58.06h24.18v8.61h-24.18z"
          fill="#adb0bc"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -15.67 28.19)"
        />
        <ellipse
          cx="61.03"
          cy="68.36"
          fill="#8c91a1"
          rx="13.17"
          ry="15.17"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.49 22.81)"
        />
        <path
          d="m72.86 76.42a99.65 99.65 0 0 1 -23.43-1.76c3.22 6.6 10.15 10.17 16.4 8.09a12.15 12.15 0 0 0 7.03-6.33z"
          fill="#6b7186"
        />
        <ellipse
          cx="61.03"
          cy="68.36"
          fill="#bdc0c9"
          rx="11.71"
          ry="13.48"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.49 22.81)"
        />
        <path
          d="m71 76.46a100.47 100.47 0 0 1 -19.72-1.46c2.6 4.4 7.13 7 11.63 6.62l4.58-1.53a10.85 10.85 0 0 0 3.51-3.63z"
          fill="#adb0bc"
        />
        <circle cx="38.45" cy="76.92" fill="#7c8194" r="4.36" />
        <path
          d="m90.05 65.45h8.51v3.63h-8.51z"
          fill="#8c91a1"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -16.43 33.28)"
        />
        <path
          d="m56.56 60.88s-4.65 2.31-3.17 7.37c1 3.54-.15 7.69-.29 9.28a1.07 1.07 0 0 0 0 .58c.39.68 1.26 2.36 2.5 2.39a2.47 2.47 0 0 0 .63-.09c1.88-.48 6.16-2.6 6.75-3.53s-6.42-16-6.42-16z"
          fill="#7c8194"
        />
        <path
          d="m53.1 77.48c-.24.2-.52.48-.37.63 1 1 2.12 3.55 4 2.18 2-.65 5.78-2.54 6.33-3.41a.84.84 0 0 0 0-.54 95.42 95.42 0 0 1 -9.6-1c-.17.92-.31 1.66-.36 2.14z"
          fill="#6b7186"
        />
        <path
          d="m64.35 61.74s1.87.47 3.2 4.45c.31.92 2.84 2.2 2.5 4s-.64 1.76-.41 2.35a1.59 1.59 0 0 1 -1.64 2.35c-1.34 0-2.67-1.83-2.67-1.83z"
          fill="#7c8194"
        />
        <path
          d="m55.28 79.43c-.17-2.33 2.53-3.62 3.38-5.74.67-1.68 7.76-.51 7.76-.51s2.17 2.91 4.23 3.89c-2.12 3.69-9.51 7.24-15.37 2.36z"
          fill="#cdcfd6"
        />
        <path
          d="m70.65 77.07a7.1 7.1 0 0 1 -1-.59 105.35 105.35 0 0 1 -12.56-.61c-1 1.09-2 2.13-1.85 3.56 5.9 4.88 13.29 1.33 15.41-2.36z"
          fill="#bdc0c9"
        />
        <path
          d="m66 64c2.1 4 1.83 9.38-1.14 10.92-2 1-4.64.13-6.82-1.78a12.42 12.42 0 0 1 -2.79-3.53c-2.1-4-1-7.73 2-9.28s6.65-.33 8.75 3.67z"
          fill="#dee0e4"
        />
        <path
          d="m54 64.38a23 23 0 0 1 2.59 3.62c.21.79-.22 3.16.94 5.18s-2.2-.74-2.2-.74-1.9-7.37-1.33-8.06z"
          fill="#7c8194"
        />
        <path
          d="m44.45 81.41c3.37 1.39-7.55 9-8.37 11.17-3.22 8.7-7.25 11.45-12.42 12.58-5.52 1.19-10.17-13.78 7.18-17.22 8.28-1.64 5.46-9.88 13.61-6.53z"
          fill="#cdcfd6"
        />
        <path
          d="m25.64 111.92h.05c5.13-.5 10.62-5.48 12.28-16.47 1-6.65 15.55-12 9.14-17.55s-9.3 9.77-16.81 11.23c-9.43 1.84-13.15 6.81-13.89 11.52l-3-1.62s-2 6.6-3.69 6.43a70.58 70.58 0 0 0 12.28 15.4c.05-1.78.48-6.35 3.64-8.94z"
          fill="#fff"
        />
        <path
          d="m25.64 111.92h.06c5.13-.51 10.61-5.49 12.27-16.47.82-5.48 10.83-10.06 10.76-14.61 0-1-7-.24-11.74 13.27-2.48 7.06-11.38 12.32-13.8 13.15-1.79.61-9.3 4.06-6 8.66q2.27 2.61 4.79 5c.02-1.87.45-6.48 3.66-9z"
          fill="#eeeff1"
        />
      </svg>
    );
  } else {
    return (
      <svg
        {...elementProps}
        id={`${id}-purple`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="default"
      >
        <title id={`${id}-title`}>Dollar Circle Illustration</title>
        <desc id={`${id}-description`}>Purple dollar illustration</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m47 97.6c-3.32.82-3.83-1.64-5.09-4.95-1.43-.65-2.51-1.36-2.91-2.91-7.34-5.22-21.32 24.06-24.9 13.83-2.33-6.57 2.8-17.93 17.61-22.28 6.29-1.84 12.69 5.65 15.69 12.95.7 1.7 1.12 2.98-.4 3.36z"
          fill="#9f99b7"
        />
        <path
          d="m54.67 96.08c-3.24 2.23-4.83-.19-6.79-3.61-1.84-.27-3.62-1.93-4.63-3.55-16.54-6.09-18.64 30.28-26.25 19.85-5-6.77-3.07-21.44 12.32-31.55 6.51-4.22 18.68 7.59 24.68 14.88 1.37 1.7 2.23 2.9.67 3.98z"
          fill="#cfccdb"
        />
        <path
          d="m60.26 87.59c-2.29 3.21-4.61 1.47-7.62-1.07-1.83.38-4.06-.57-5.57-1.75-10.28-3.73-8.71 5.32-19.87 12-7.18 4.29-10.77-5.46.24-20.22 4.65-6.24 22.71 2.74 30.8 7.55 1.89 1.11 3.12 1.95 2.02 3.49z"
          fill="#e7e6ed"
        />
        <path
          d="m50.06 66.79c7 3.9-7.72 10.85-14.49 10.87-8.53 0 4.12 24.54-16.61 32-3.96 1.34-7.47-4.66-5.57-10.66 3.3-10.58 3.21-20.58 9.2-29.14 2.67-3.86 22.3-5.93 27.47-3.07z"
          fill="#fff"
        />
        <path
          d="m52.06 66.79c7 3.9-7.72 10.85-14.49 10.87-8.53 0 2.28 13.22-8.53 18-3.9 1.7-6.81 6.4-4.92.33 3.3-10.63 3.88-12.74 9.88-21.29 2.63-3.81 12.89-10.77 18.06-7.91z"
          fill="#eeeff1"
        />
        <path
          d="m26.1 50.97h75.35v32.95h-75.35z"
          fill="#6f6693"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.06 23.63)"
        />
        <path
          d="m98.41 73.26-65.17 21.74-10.42-31.27 2.76-.92c22.24 22.51 72.83 10.45 72.83 10.45z"
          fill="#584d82"
        />
        <rect
          fill="#9f99b7"
          height="26.39"
          rx="4.7"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.06 23.63)"
          width="75.35"
          x="26.1"
          y="54.25"
        />
        <path
          d="m28.31 65.36a4.7 4.7 0 0 0 -3 5.94l5.38 16.13a4.7 4.7 0 0 0 5.94 3l43.14-14.43c-15.63 1.29-37.57.57-51.4-10.68z"
          fill="#8780a5"
        />
        <path
          d="m66.93 58.06h24.18v8.61h-24.18z"
          fill="#8780a5"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -15.67 28.19)"
        />
        <ellipse
          cx="61.03"
          cy="68.36"
          fill="#584d82"
          rx="13.17"
          ry="15.17"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.49 22.81)"
        />
        <path
          d="m72.86 76.42a99.65 99.65 0 0 1 -23.43-1.76c3.22 6.6 10.15 10.17 16.4 8.09a12.15 12.15 0 0 0 7.03-6.33z"
          fill="#281a5e"
        />
        <ellipse
          cx="61.03"
          cy="68.36"
          fill="#9f99b7"
          rx="11.71"
          ry="13.48"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -18.49 22.81)"
        />
        <path
          d="m71 76.46a100.47 100.47 0 0 1 -19.72-1.46c2.6 4.4 7.13 7 11.63 6.62l4.58-1.53a10.85 10.85 0 0 0 3.51-3.63z"
          fill="#8780a5"
        />
        <circle cx="38.45" cy="76.92" fill="#3f336f" r="4.36" />
        <path
          d="m90.05 65.45h8.51v3.63h-8.51z"
          fill="#584d82"
          transform="matrix(.94865542 -.3163114 .3163114 .94865542 -16.43 33.28)"
        />
        <path
          d="m56.56 60.88s-4.65 2.31-3.17 7.37c1 3.54-.15 7.69-.29 9.28a1.07 1.07 0 0 0 0 .58c.39.68 1.26 2.36 2.5 2.39a2.47 2.47 0 0 0 .63-.09c1.88-.48 6.16-2.6 6.75-3.53s-6.42-16-6.42-16z"
          fill="#3f336f"
        />
        <path
          d="m53.1 77.48c-.24.2-.52.48-.37.63 1 1 2.12 3.55 4 2.18 2-.65 5.78-2.54 6.33-3.41a.84.84 0 0 0 0-.54 95.42 95.42 0 0 1 -9.6-1c-.17.92-.31 1.66-.36 2.14z"
          fill="#281a5e"
        />
        <path
          d="m64.35 61.74s1.87.47 3.2 4.45c.31.92 2.84 2.2 2.5 4s-.64 1.76-.41 2.35a1.59 1.59 0 0 1 -1.64 2.35c-1.34 0-2.67-1.83-2.67-1.83z"
          fill="#3f336f"
        />
        <path
          d="m55.28 79.43c-.17-2.33 2.53-3.62 3.38-5.74.67-1.68 7.76-.51 7.76-.51s2.17 2.91 4.23 3.89c-2.12 3.69-9.51 7.24-15.37 2.36z"
          fill="#cdcfd6"
        />
        <path
          d="m70.65 77.07a7.1 7.1 0 0 1 -1-.59 105.35 105.35 0 0 1 -12.56-.61c-1 1.09-2 2.13-1.85 3.56 5.9 4.88 13.29 1.33 15.41-2.36z"
          fill="#9f99b7"
        />
        <path
          d="m66 64c2.1 4 1.83 9.38-1.14 10.92-2 1-4.64.13-6.82-1.78a12.42 12.42 0 0 1 -2.79-3.53c-2.1-4-1-7.73 2-9.28s6.65-.33 8.75 3.67z"
          fill="#cfccdb"
        />
        <path
          d="m54 64.38a23 23 0 0 1 2.59 3.62c.21.79-.22 3.16.94 5.18s-2.2-.74-2.2-.74-1.9-7.37-1.33-8.06z"
          fill="#3f336f"
        />
        <path
          d="m44.45 81.41c3.37 1.39-7.55 9-8.37 11.17-3.22 8.7-7.25 11.45-12.42 12.58-5.52 1.19-10.17-13.78 7.18-17.22 8.28-1.64 5.46-9.88 13.61-6.53z"
          fill="#b7b3c9"
        />
        <path
          d="m25.64 111.92h.05c5.13-.5 10.62-5.48 12.28-16.47 1-6.65 15.55-12 9.14-17.55s-9.3 9.77-16.81 11.23c-9.43 1.84-13.15 6.81-13.89 11.52l-3-1.62s-2 6.6-3.69 6.43a70.58 70.58 0 0 0 12.28 15.4c.05-1.78.48-6.35 3.64-8.94z"
          fill="#fff"
        />
        <path
          d="m25.64 111.92h.06c5.13-.51 10.61-5.49 12.27-16.47.82-5.48 10.83-10.06 10.76-14.61 0-1-7-.24-11.74 13.27-2.48 7.06-11.38 12.32-13.8 13.15-1.79.61-9.3 4.06-6 8.66q2.27 2.61 4.79 5c.02-1.87.45-6.48 3.66-9z"
          fill="#e7e6ed"
        />
      </svg>
    );
  }
};

DollarCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'dollar-circle-illustration',
};

export default memo(DollarCircleIllustration);
