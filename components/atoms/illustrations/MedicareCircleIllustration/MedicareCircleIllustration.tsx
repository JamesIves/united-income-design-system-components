/** @module MedicareCircleIllustration */
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors';

type MedicareCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the illustration. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders a medicare illustration. */
const MedicareCircleIllustration: FC<MedicareCircleIllustrationProps> = ({
  fill,
  width,
  height,
  className,
  style,
  id,
}: MedicareCircleIllustrationProps) => {
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
  };

  return (
    <svg
      {...elementProps}
      viewBox="0 0 232 232"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={`${id}-title ${id}-description`}
      data-testid="default"
    >
      <title id={`${id}-title`}>Medicare Circle Illustration</title>
      <desc id={`${id}-description`}>Medicare logo</desc>
      <defs>
        <path
          d="M100.730764,24.6166645 L99.7493373,52.0419699 C114.08439,51.082373 104.755874,27 121.988494,27 C139.571422,27 152.252591,52.0714286 175.395724,44.3571429 C198.538857,36.6428571 178.956206,52.0714286 169.177074,52.0714286 C170.577879,54 170.577879,63.6428571 154.032832,55.9285714 C157.593314,63.6428571 146.911868,63.6428571 138.956416,59.7857143 C139.790904,65.5714286 131.58337,69.4285714 123.768735,63.6428571 C125.074787,67.5 118.381948,71.3571429 108.613654,65.5714286 C108.613654,69.3465153 105.494622,69.4268258 99.2565576,65.81236 L98.2816851,93.0545046 C98.669696,93.0062804 99.0836191,92.9552046 99.5558937,92.8972082 C99.9138509,92.8532502 100.471766,92.7849376 101.382124,92.6734176 C116.103152,90.8674323 122.211136,89.4219253 122.211136,86.4686591 C122.211136,82.9285714 118.308477,81 112.494044,81.5074407 C110.633179,81.6698433 111.007909,82.279931 108.617755,82.9285714 C107.585065,83.2088232 104.741467,83.2088232 102.871615,81.5074407 C101.001763,79.8060582 105.64692,77.4630461 106.679611,77.1827943 C108.960286,76.5638642 110.754732,77.1827943 112.494044,77.1827943 C124.119878,77.1827943 127.972828,81.5233733 127.972828,87.1027695 C127.972828,92.6734176 122.451886,96.3316222 117.313841,97.7676087 C115.585308,98.250701 113.808423,98.6395795 111.539485,99.0223861 C115.008238,101.285014 116.713404,104.302995 116.276806,108.212975 C115.539615,114.814922 111.440277,118.565699 103.387114,121.401949 C109.33287,123.881337 112.494044,127.104932 112.494044,131.142857 C112.494044,136.406558 107.760476,141.016941 99.438026,145.364614 C104.505598,148.181928 106.597938,150.598329 106.597938,154.285714 C106.597938,160.215141 103.372479,164.088368 96.5645315,168.714351 C96.5908321,168.69648 96.5726143,168.708233 96.5177797,168.744421 C104.193139,173.641268 98.6318565,183.760405 97.7171405,183.214286 C96.8551007,182.699617 101.263362,178.048366 95.4267469,172.833797 L94.9677193,185.66101 C94.9298291,186.669568 94.116895,187.478487 93.1033313,187.51619 C92.0336709,187.55598 91.1341237,186.725387 91.0941364,185.66101 L90.6376575,172.905021 C84.9202178,178.090655 89.284501,182.701961 88.4263879,183.214286 C87.5116719,183.760405 81.9503894,173.641268 89.6257487,168.744421 C89.5709141,168.708233 89.5526963,168.69648 89.5789969,168.714351 C82.7710494,164.088368 79.5455903,160.215141 79.5455903,154.285714 C79.5455903,150.598329 81.6379305,148.181928 86.7055024,145.364614 C78.3830521,141.016941 73.6494845,136.406558 73.6494845,131.142857 C73.6494845,127.104932 76.8106579,123.881337 82.7564146,121.401949 C74.7032519,118.565699 70.6039136,114.814922 69.8667228,108.212975 C69.4301242,104.302995 71.1352904,101.285014 74.6040438,99.0223861 C72.3351049,98.6395795 70.5582205,98.250701 68.8296876,97.7676087 C63.6916428,96.3316222 58.1707004,92.6734176 58.1707004,87.1027695 C58.1707004,81.5233733 62.0236501,77.1827943 73.6494845,77.1827943 C75.3887969,77.1827943 77.1832426,76.5638642 79.4639175,77.1827943 C80.496608,77.4630461 85.1417649,79.8060582 83.2719134,81.5074407 C81.4020619,83.2088232 78.5584637,83.2088232 77.5257732,82.9285714 C75.1356196,82.279931 75.5103498,81.6698433 73.6494845,81.5074407 C67.8350515,81 63.9323923,82.9285714 63.9323923,86.4686591 C63.9323923,89.4219253 70.0403759,90.8674323 84.7614046,92.6734176 C85.6717624,92.7849376 86.2296775,92.8532502 86.5876347,92.8972082 C87.0267846,92.9511368 87.4154812,92.9990815 87.7798059,93.044314 L86.8090969,65.9185169 C80.693811,69.4248759 77.6361681,69.3091798 77.6361681,65.5714286 C67.8678746,71.3571429 61.1750356,67.5 62.4810876,63.6428571 C54.6664528,69.4285714 46.4589186,65.5714286 47.2934066,59.7857143 C39.3379546,63.6428571 28.6565087,63.6428571 32.2169907,55.9285714 C15.6719437,63.6428571 15.6719437,54 17.0727488,52.0714286 C7.29361674,52.0714286 -12.2890342,36.6428571 10.8540987,44.3571429 C33.9972317,52.0714286 46.6784004,27 64.2613286,27 C81.4178737,27 72.2472774,50.8702161 86.3120154,52.0279135 L85.3310914,24.6166645 C81.786579,22.1811658 79.4639175,18.1104865 79.4639175,13.5 C79.4639175,6.04415588 85.5380749,0 93.0309278,0 C100.523781,0 106.597938,6.04415588 106.597938,13.5 C106.597938,18.1104865 104.275277,22.1811658 100.730764,24.6166645 Z M88.9321548,125.245916 C81.9573375,127.084537 79.4639175,128.633474 79.4639175,131.142857 C79.4639175,134.533845 82.2507228,137.002302 89.4793137,140.535896 L88.9321548,125.245916 Z M96.5810896,140.576482 C103.87145,137.021169 106.679611,134.546813 106.679611,131.142857 C106.679611,128.623795 104.166918,127.072602 97.1304627,125.224627 L96.5810896,140.576482 Z M95.7229913,164.55545 C100.306344,161.006251 100.783505,157.983164 100.783505,156.214286 C100.783505,154.202144 100.230218,152.447826 96.241127,150.076504 L95.7229913,164.55545 Z M89.8224367,150.124233 C85.9058985,152.471419 85.3600232,154.215667 85.3600232,156.214286 C85.3600232,157.972297 85.8313396,160.969153 90.3365256,164.490095 L89.8224367,150.124233 Z M97.4151051,117.270491 C106.928474,114.785669 108.547937,113.142948 108.547937,109.715596 C108.547937,106.894959 107.002924,104.458104 97.9453445,102.453312 L97.4151051,117.270491 Z M88.1171549,102.471303 C79.1313807,104.472677 77.5955917,106.903391 77.5955917,109.715596 C77.5955917,113.133023 79.2056887,114.77614 88.6459789,117.248926 L88.1171549,102.471303 Z"
          id="path-1"
        />
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-604.000000, -100.000000)">
          <g transform="translate(604.000000, 100.000000)">
            <circle
              fill={colors.midnight}
              fillRule="nonzero"
              cx="116"
              cy="116"
              r="116"
            />
            <g transform="translate(23.200000, 25.133333)">
              <g>
                <g
                  transform="translate(0.000000, 27.000000)"
                  fill="#584D82"
                  fillRule="nonzero"
                >
                  <path d="M98.8453608,25.0714286 C114.47463,25.0714286 104.405566,1.15991761e-13 121.988494,1.13686838e-13 C139.571422,1.13686838e-13 152.252591,25.0714286 175.395724,17.3571429 C198.538857,9.64285714 178.956206,25.0714286 169.177074,25.0714286 C170.577879,27 170.577879,36.6428571 154.032832,28.9285714 C157.593314,36.6428571 146.911868,36.6428571 138.956416,32.7857143 C139.790904,38.5714286 131.58337,42.4285714 123.768735,36.6428571 C125.074787,40.5 118.381948,44.3571429 108.613654,38.5714286 C108.613654,42.4285714 105.357556,42.4285714 98.8453608,38.5714286 C98.8453608,29.5714286 98.8453608,25.0714286 98.8453608,25.0714286 Z" />
                  <path
                    d="M-2.83521278e-14,25.0714286 C15.6292695,25.0714286 5.56020475,1.15991761e-13 23.1431329,1.13686838e-13 C40.7260611,1.13686838e-13 53.4072298,25.0714286 76.5503628,17.3571429 C99.6934957,9.64285714 80.1108448,25.0714286 70.3317127,25.0714286 C71.7325178,27 71.7325178,36.6428571 55.1874708,28.9285714 C58.7479528,36.6428571 48.0665069,36.6428571 40.1110549,32.7857143 C40.9455429,38.5714286 32.7380087,42.4285714 24.9233739,36.6428571 C26.2294259,40.5 19.5365869,44.3571429 9.76829344,38.5714286 C9.76829344,42.4285714 6.51219562,42.4285714 -2.83521278e-14,38.5714286 C-2.84449033e-14,29.5714286 -2.84449033e-14,25.0714286 -2.83521278e-14,25.0714286 Z"
                    transform="translate(43.702231, 20.760900) scale(-1, 1) translate(-43.702231, -20.760900) "
                  />
                </g>
                <path
                  d="M79.4639175,77.1827943 C80.496608,77.4630461 85.1417649,79.8060582 83.2719134,81.5074407 C81.4020619,83.2088232 78.5584637,83.2088232 77.5257732,82.9285714 C75.1356196,82.279931 75.5103498,81.6698433 73.6494845,81.5074407 C67.8350515,81 63.9323923,82.9285714 63.9323923,86.4686591 C63.9323923,89.4219253 70.0403759,90.8674323 84.7614046,92.6734176 C85.6717624,92.7849376 86.2296775,92.8532502 86.5876347,92.8972082 C87.2951569,92.9840936 87.8717176,93.0554465 88.4263879,93.1249489 C97.6386121,94.279277 102.98037,95.2770478 107.434885,96.9826646 C113.611756,99.3477652 116.860894,102.982142 116.276806,108.212975 C115.351668,116.498087 109.131487,120.292895 96.4468613,123.425015 C95.7521775,123.596548 95.0367085,123.76832 94.1261116,123.983334 C93.8767376,124.042217 92.3069559,124.41119 91.8581292,124.517526 C82.6418404,126.701042 79.4639175,128.309894 79.4639175,131.142857 C79.4639175,134.890426 82.8676327,137.511244 91.908958,141.688268 C92.0712898,141.763264 93.6896878,142.508459 94.163401,142.728153 C103.091545,146.868753 106.597938,149.512261 106.597938,154.285714 C106.597938,160.215141 103.372479,164.088368 96.5645315,168.714351 C96.8188572,168.541537 92.9103668,171.13878 91.9838657,171.814567 C84.2870898,177.428571 89.3442548,182.666286 88.4263879,183.214286 C87.508521,183.762286 81.9120214,173.571429 89.7055364,168.694004 C90.7212196,168.058358 94.6926801,165.315603 94.3785766,165.529035 C100.216299,161.562317 100.783505,158.142857 100.783505,156.214286 C100.783505,153.695222 99.9163197,151.580253 92.5258924,148.152799 C92.0579728,147.935793 90.4432832,147.192305 90.276609,147.115303 C79.750131,142.252149 73.6494845,137.118503 73.6494845,131.142857 C73.6494845,125.530293 79.7568551,121.491014 90.9603012,118.836702 C91.4132309,118.729394 92.9849897,118.359956 93.2311364,118.301835 C94.1299413,118.089606 94.8335138,117.92069 95.5132818,117.75284 C106.717097,114.986365 108.547937,113.359764 108.547937,109.715596 C108.547937,106.071429 105.969038,103.06786 87.9420875,100.809012 C87.3910395,100.739963 86.8174635,100.66898 86.1128562,100.582452 C85.7557482,100.538598 85.1987333,100.470396 84.2870898,100.358718 C76.2456954,99.372195 72.4326538,98.7745697 68.8296876,97.7676087 C63.6916428,96.3316222 58.1707004,92.6734176 58.1707004,87.1027695 C58.1707004,81.5233733 62.0236501,77.1827943 73.6494845,77.1827943 C75.3887969,77.1827943 77.1832426,76.5638642 79.4639175,77.1827943 Z"
                  fill="#CFCCDB"
                  fillRule="nonzero"
                />
                <path
                  d="M106.679611,77.1827943 C108.960286,76.5638642 110.754732,77.1827943 112.494044,77.1827943 C124.119878,77.1827943 127.972828,81.5233733 127.972828,87.1027695 C127.972828,92.6734176 122.451886,96.3316222 117.313841,97.7676087 C113.710875,98.7745697 109.897833,99.372195 101.856439,100.358718 C100.944795,100.470396 100.38778,100.538598 100.030672,100.582452 C99.3260649,100.66898 98.7524889,100.739963 98.201441,100.809012 C80.1744907,103.06786 77.5955917,106.071429 77.5955917,109.715596 C77.5955917,113.359764 79.426431,114.986365 90.6302466,117.75284 C91.3100146,117.92069 92.0135871,118.089606 92.912392,118.301835 C93.1585387,118.359956 94.7302975,118.729394 95.1832272,118.836702 C106.386673,121.491014 112.494044,125.530293 112.494044,131.142857 C112.494044,137.118503 106.393397,142.252149 95.8669194,147.115303 C95.7002452,147.192305 94.0855556,147.935793 93.617636,148.152799 C86.2272087,151.580253 85.3600232,153.695222 85.3600232,156.214286 C85.3600232,158.142857 85.9272291,161.562317 91.7649518,165.529035 C91.4508483,165.315603 95.4223088,168.058358 96.437992,168.694004 C104.231507,173.571429 98.6350074,183.762286 97.7171405,183.214286 C96.7992736,182.666286 101.856439,177.428571 94.1596627,171.814567 C93.2331616,171.13878 89.3246712,168.541537 89.5789969,168.714351 C82.7710494,164.088368 79.5455903,160.215141 79.5455903,154.285714 C79.5455903,149.512261 83.0519836,146.868753 91.9801274,142.728153 C92.4538406,142.508459 94.0722386,141.763264 94.2345704,141.688268 C103.275896,137.511244 106.679611,134.890426 106.679611,131.142857 C106.679611,128.309894 103.501688,126.701042 94.2853992,124.517526 C93.8365725,124.41119 92.2667908,124.042217 92.0174168,123.983334 C91.1068199,123.76832 90.3913509,123.596548 89.6966671,123.425015 C77.0120411,120.292895 70.7918603,116.498087 69.8667228,108.212975 C69.2826342,102.982142 72.531772,99.3477652 78.7086436,96.9826646 C83.1631586,95.2770478 88.5049163,94.279277 97.7171405,93.1249489 C98.2718108,93.0554465 98.8483715,92.9840936 99.5558937,92.8972082 C99.9138509,92.8532502 100.471766,92.7849376 101.382124,92.6734176 C116.103152,90.8674323 122.211136,89.4219253 122.211136,86.4686591 C122.211136,82.9285714 118.308477,81 112.494044,81.5074407 C110.633179,81.6698433 111.007909,82.279931 108.617755,82.9285714 C107.585065,83.2088232 104.741467,83.2088232 102.871615,81.5074407 C101.001763,79.8060582 105.64692,77.4630461 106.679611,77.1827943 Z"
                  fill="#584D82"
                  fillRule="nonzero"
                />
                <g
                  transform="translate(79.463918, 0.000000)"
                  fillRule="nonzero"
                >
                  <path
                    d="M13.6394137,187.51619 C12.5697533,187.55598 11.6702061,186.725387 11.6302188,185.66101 L5.81443299,23.1428571 L21.3195876,23.1428571 L15.5038018,185.66101 C15.4659115,186.669568 14.6529774,187.478487 13.6394137,187.51619 Z"
                    fill="#9F99B7"
                  />
                  <path
                    d="M6.00863521,28.5697052 L5.81443299,23.1428571 L21.3195876,23.1428571 L21.1253854,28.5697052 C18.965406,30.0142464 16.3651313,30.8571429 13.5670103,30.8571429 C10.7688894,30.8571429 8.16861462,30.0142464 6.00863521,28.5697052 L6.00863521,28.5697052 Z"
                    fill="#6F6693"
                  />
                  <ellipse
                    fill="#CFCCDB"
                    cx="13.5670103"
                    cy="13.5"
                    rx="13.5670103"
                    ry="13.5"
                  />
                </g>
                <path
                  d="M95.2561772,177.600251 L90.6830161,174.172536 L90.4590317,167.913445 C92.3073645,168.323804 93.9886767,169.418407 95.5323085,169.883953 L95.2561772,177.600251 Z"
                  fill="#6F6693"
                  fillRule="nonzero"
                />
                <path
                  d="M85.3600232,156.214286 C85.3600232,158.142857 85.9272291,161.562317 91.7649518,165.529035 C91.4508483,165.315603 95.4223088,168.058358 96.437992,168.694004 C104.231507,173.571429 98.6350074,183.762286 97.7171405,183.214286 C96.7992736,182.666286 101.856439,177.428571 94.1596627,171.814567 C93.2331616,171.13878 89.3246712,168.541537 89.5789969,168.714351 C82.7710494,164.088368 79.5455903,160.215141 79.5455903,154.285714 C79.5455903,149.512261 85.3600232,153.695222 85.3600232,156.214286 Z"
                  fill="#584D82"
                  fillRule="nonzero"
                />
                <path
                  d="M96.0709968,154.830677 L89.8522289,150.956757 L89.6804781,146.157298 C91.5243402,146.347369 94.260829,146.533439 96.3611778,146.721767 L96.0709968,154.830677 L96.0709968,154.830677 Z"
                  fill="#9F99B7"
                  fillRule="nonzero"
                />
                <path
                  d="M86.0338846,126.07537 C81.251617,127.58188 79.4639175,129.018065 79.4639175,131.142857 C79.4639175,134.890426 82.8676327,137.511244 91.908958,141.688268 C92.0712898,141.763264 93.6896878,142.508459 94.163401,142.728153 C103.091545,146.868753 106.597938,149.512261 106.597938,154.285714 C106.597938,159.42028 104.179285,163.012977 99.110145,166.887777 C98.3254124,167.487619 96.3900394,164.054691 97.1468961,163.352918 C100.409784,160.327506 100.783505,157.779736 100.783505,156.214286 C100.783505,153.695222 99.9163197,151.580253 92.5258924,148.152799 C92.0579728,147.935793 90.4432832,147.192305 90.276609,147.115303 C79.750131,142.252149 73.6494845,137.118503 73.6494845,131.142857 C73.6494845,127.696389 75.9524124,124.843164 80.3241059,122.539579 C83.0717022,121.091782 87.6277637,125.573266 86.0338846,126.07537 Z"
                  fill="#CFCCDB"
                  fillRule="nonzero"
                />
                <path
                  d="M88.7799985,120.994013 C92.0505937,121.324282 94.8266881,121.639669 97.24685,121.972264 L97.0219979,128.255602 C94.7944794,127.886437 92.1466143,127.536188 89.0022739,127.205346 L88.7799985,120.994013 L88.7799985,120.994013 Z"
                  fill="#6F6693"
                  fillRule="nonzero"
                />
                <path
                  d="M77.5955917,109.715596 C77.5955917,113.359764 79.426431,114.986365 90.6302466,117.75284 C91.3100146,117.92069 92.0135871,118.089606 92.912392,118.301835 C93.1585387,118.359956 94.7302975,118.729394 95.1832272,118.836702 C106.386673,121.491014 112.494044,125.530293 112.494044,131.142857 C112.494044,135.793738 106.679611,134.142427 106.679611,131.142857 C106.679611,128.309894 103.501688,126.701042 94.2853992,124.517526 C93.8365725,124.41119 92.2667908,124.042217 92.0174168,123.983334 C91.1068199,123.76832 90.3913509,123.596548 89.6966671,123.425015 C77.0120411,120.292895 77.5955917,107.221321 77.5955917,109.715596 Z"
                  fill="#584D82"
                  fillRule="nonzero"
                />
                <path
                  d="M88.1275172,104.689442 L87.8491288,96.9100674 C88.0469282,96.934647 88.2379217,96.9584762 88.4263879,96.9820917 C92.2730701,97.4640962 95.4449027,97.9188035 98.1590816,98.4091473 L97.8768707,106.295339 C95.2846033,105.724575 92.0808718,105.188918 88.1275201,104.689485 L88.1275172,104.689442 Z"
                  fill="#6F6693"
                  fillRule="nonzero"
                />
                <path
                  d="M79.4639175,77.1827943 C80.496608,77.4630461 85.1417649,79.8060582 83.2719134,81.5074407 C81.4020619,83.2088232 78.5584637,83.2088232 77.5257732,82.9285714 C75.1356196,82.279931 75.5103498,81.6698433 73.6494845,81.5074407 C67.8350515,81 63.9323923,82.9285714 63.9323923,86.4686591 C63.9323923,89.4219253 70.0403759,90.8674323 84.7614046,92.6734176 C85.6717624,92.7849376 86.2296775,92.8532502 86.5876347,92.8972082 C87.2951569,92.9840936 87.8717176,93.0554465 88.4263879,93.1249489 C97.6386121,94.279277 102.98037,95.2770478 107.434885,96.9826646 C113.611756,99.3477652 116.860894,102.982142 116.276806,108.212975 C115.642392,113.894495 112.517965,117.464432 106.52642,120.157104 C103.780756,121.391038 99.3087077,116.762258 100.101264,116.529285 C107.243796,114.429726 108.547937,112.791236 108.547937,109.715596 C108.547937,106.071429 105.969038,103.06786 87.9420875,100.809012 C87.3910395,100.739963 86.8174635,100.66898 86.1128562,100.582452 C85.7557482,100.538598 85.1987333,100.470396 84.2870898,100.358718 C76.2456954,99.372195 72.4326538,98.7745697 68.8296876,97.7676087 C63.6916428,96.3316222 58.1707004,92.6734176 58.1707004,87.1027695 C58.1707004,81.5233733 62.0236501,77.1827943 73.6494845,77.1827943 C75.3887969,77.1827943 77.1832426,76.5638642 79.4639175,77.1827943 Z"
                  fill="#CFCCDB"
                  fillRule="nonzero"
                />
                <g>
                  <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1" />
                  </mask>
                  <g fillRule="nonzero" />
                  <rect
                    fill={fill}
                    fillRule="nonzero"
                    opacity="0.300000012"
                    mask="url(#mask-2)"
                    x="0"
                    y="-30.8571429"
                    width="93.0309278"
                    height="237.214286"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

MedicareCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  fill: '#ffffff',
  id: 'medicare-circle-illustration',
};

export default memo(MedicareCircleIllustration);
