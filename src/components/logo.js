import React from 'react';
/* eslint-disable max-len */
export default class Logo extends React.Component {
  render() {
    const {
      background = '#8B0021',
      foreground = '#FFFFFF',
      height = '200px',
      width = '200px'
    } = this.props;
    return (
      <svg width={width} height={height} viewBox="0 0 500 410">
        <g id="maroon-logo">
          <rect fill={foreground} x="0" y="0" width="500" height="410"/>
          <g id="Group" transform="translate(3.000000, 12.000000)">
            <polygon fill={background} points="266.5 6.5 266.5 370.5 215.816791 395.090567 194.795524 386.890277 208.541296 386.890277 228.812194 372.732023 182.368382 370.5 150.421806 351.671263 178.445407 361.695913 223.874467 354.81096 255.265947 360.089863 231.614006 337.016055 189.549533 344.246572 152.647677 332.419505 132.506228 296.978891 158.76471 309.044014 204.392333 299.32763 140.008808 285.964722 96.9405533 240.01567 112.863927 341.751929 66.3619719 283.971421 57.6976382 195.307357 31.7002492 274.092676 21.3815961 228.522099 48.666897 161.291784 0.748677957 200.795284 11.7178692 147.532849 76.7760665 86.5347551 52.6096186 99.1121906 6.10217862 105.151334 52.6096186 55.0642892 138.094493 11.5210212 163.537882 47.63521 147.444469 105.151334 221.656275 103.469589 234.954459 71.1379556 217.928571 64.9913031 240.90584 49.6416758 210.881258 62.1894914 182.368382 45.6781106 208.541296 51.1193736 231.614006 47.63521 210.881258 33.9662309 194.795524 45.6781106 206.075175 15.1401193 247.858809 0.841445576"/>
            <circle fill={foreground} cx="64.5" cy="60.5" r="3.5"/>
            <circle fill={foreground} cx="131.5" cy="34.5" r="3.5"/>
            <path d="M129.5,67 C127.014719,67 125,64.9852814 125,62.5 C125,60.0147186 127.014719,58 129.5,58 C131.985281,58 134,60.0147186 134,62.5 C134,64.9852814 131.985281,67 129.5,67 Z M129.5,65.25 C131.018783,65.25 132.25,64.0187831 132.25,62.5 C132.25,60.9812169 131.018783,59.75 129.5,59.75 C127.981217,59.75 126.75,60.9812169 126.75,62.5 C126.75,64.0187831 127.981217,65.25 129.5,65.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M102.5,81 C100.014719,81 98,78.9852814 98,76.5 C98,74.0147186 100.014719,72 102.5,72 C104.985281,72 107,74.0147186 107,76.5 C107,78.9852814 104.985281,81 102.5,81 Z M102.5,79.25 C104.018783,79.25 105.25,78.0187831 105.25,76.5 C105.25,74.9812169 104.018783,73.75 102.5,73.75 C100.981217,73.75 99.75,74.9812169 99.75,76.5 C99.75,78.0187831 100.981217,79.25 102.5,79.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M125.5,95 C123.014719,95 121,92.9852814 121,90.5 C121,88.0147186 123.014719,86 125.5,86 C127.985281,86 130,88.0147186 130,90.5 C130,92.9852814 127.985281,95 125.5,95 Z M125.5,93.25 C127.018783,93.25 128.25,92.0187831 128.25,90.5 C128.25,88.9812169 127.018783,87.75 125.5,87.75 C123.981217,87.75 122.75,88.9812169 122.75,90.5 C122.75,92.0187831 123.981217,93.25 125.5,93.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M227.5,134 C225.014719,134 223,131.985281 223,129.5 C223,127.014719 225.014719,125 227.5,125 C229.985281,125 232,127.014719 232,129.5 C232,131.985281 229.985281,134 227.5,134 Z M227.5,132.25 C229.018783,132.25 230.25,131.018783 230.25,129.5 C230.25,127.981217 229.018783,126.75 227.5,126.75 C225.981217,126.75 224.75,127.981217 224.75,129.5 C224.75,131.018783 225.981217,132.25 227.5,132.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M227.5,147 C225.014719,147 223,144.985281 223,142.5 C223,140.014719 225.014719,138 227.5,138 C229.985281,138 232,140.014719 232,142.5 C232,144.985281 229.985281,147 227.5,147 Z M227.5,145.25 C229.018783,145.25 230.25,144.018783 230.25,142.5 C230.25,140.981217 229.018783,139.75 227.5,139.75 C225.981217,139.75 224.75,140.981217 224.75,142.5 C224.75,144.018783 225.981217,145.25 227.5,145.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M227.5,158 C225.014719,158 223,155.985281 223,153.5 C223,151.014719 225.014719,149 227.5,149 C229.985281,149 232,151.014719 232,153.5 C232,155.985281 229.985281,158 227.5,158 Z M227.5,156.25 C229.018783,156.25 230.25,155.018783 230.25,153.5 C230.25,151.981217 229.018783,150.75 227.5,150.75 C225.981217,150.75 224.75,151.981217 224.75,153.5 C224.75,155.018783 225.981217,156.25 227.5,156.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M228.5,386 C226.014719,386 224,383.985281 224,381.5 C224,379.014719 226.014719,377 228.5,377 C230.985281,377 233,379.014719 233,381.5 C233,383.985281 230.985281,386 228.5,386 Z M228.5,384.25 C230.018783,384.25 231.25,383.018783 231.25,381.5 C231.25,379.981217 230.018783,378.75 228.5,378.75 C226.981217,378.75 225.75,379.981217 225.75,381.5 C225.75,383.018783 226.981217,384.25 228.5,384.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M79.5,290 C77.0147186,290 75,287.985281 75,285.5 C75,283.014719 77.0147186,281 79.5,281 C81.9852814,281 84,283.014719 84,285.5 C84,287.985281 81.9852814,290 79.5,290 Z M79.5,288.25 C81.0187831,288.25 82.25,287.018783 82.25,285.5 C82.25,283.981217 81.0187831,282.75 79.5,282.75 C77.9812169,282.75 76.75,283.981217 76.75,285.5 C76.75,287.018783 77.9812169,288.25 79.5,288.25 Z" id="Combined-Shape" fill={foreground}/>
            <path d="M147.5,56 C145.014719,56 143,53.9852814 143,51.5 C143,49.0147186 145.014719,47 147.5,47 C149.985281,47 152,49.0147186 152,51.5 C152,53.9852814 149.985281,56 147.5,56 Z M147.5,54.25 C149.018783,54.25 150.25,53.0187831 150.25,51.5 C150.25,49.9812169 149.018783,48.75 147.5,48.75 C145.981217,48.75 144.75,49.9812169 144.75,51.5 C144.75,53.0187831 145.981217,54.25 147.5,54.25 Z" id="Combined-Shape" fill={foreground}/>
            <circle fill={foreground} cx="47.5" cy="78.5" r="3.5"/>
            <circle fill={foreground} cx="31.5" cy="152.5" r="3.5"/>
            <circle fill={foreground} cx="74.5" cy="119.5" r="3.5"/>
            <circle fill={foreground} cx="102.5" cy="152.5" r="3.5"/>
            <circle fill={foreground} cx="37.5" cy="206.5" r="3.5"/>
            <circle fill={foreground} cx="79.5" cy="166.5" r="3.5"/>
            <circle fill={foreground} cx="88.5" cy="170.5" r="3.5"/>
            <circle fill={foreground} cx="95.5" cy="175.5" r="3.5"/>
            <circle fill={foreground} cx="103.5" cy="180.5" r="3.5"/>
            <circle fill={foreground} cx="94.5" cy="197.5" r="3.5"/>
            <circle fill={foreground} cx="94.5" cy="214.5" r="3.5"/>
            <circle fill={foreground} cx="107.5" cy="221.5" r="3.5"/>
            <circle fill={foreground} cx="123.5" cy="214.5" r="3.5"/>
            <circle fill={foreground} cx="133.5" cy="269.5" r="3.5"/>
            <circle fill={foreground} cx="171.5" cy="282.5" r="3.5"/>
            <circle fill={foreground} cx="164.5" cy="315.5" r="3.5"/>
            <circle fill={foreground} cx="158.5" cy="323.5" r="3.5"/>
            <circle fill={foreground} cx="192.5" cy="323.5" r="3.5"/>
            <circle fill={foreground} cx="240.5" cy="313.5" r="3.5"/>
            <circle fill={foreground} cx="244.5" cy="364.5" r="3.5"/>
            <circle fill={foreground} cx="235.25" cy="364.5" r="3.5"/>
            <circle fill={foreground} cx="226" cy="364.5" r="3.5"/>
            <circle fill={foreground} cx="216.75" cy="364.5" r="3.5"/>
            <circle fill={foreground} cx="207.5" cy="364.5" r="3.5"/>
            <circle fill={foreground} cx="248.5" cy="301.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="262.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="241.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="235.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="229.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="223.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="217.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="192.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="180.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="164.5" r="3.5"/>
            <circle fill={foreground} cx="257.5" cy="143.5" r="3.5"/>
            <circle fill={foreground} cx="247.5" cy="109.5" r="3.5"/>
            <circle fill={foreground} cx="248.5" cy="97.5" r="3.5"/>
            <circle fill={foreground} cx="248.5" cy="85.5" r="3.5"/>
            <circle fill={foreground} cx="248.5" cy="71.5" r="3.5"/>
            <circle fill={foreground} cx="256.5" cy="48.5" r="3.5"/>
            <circle fill={foreground} cx="245.5" cy="13.5" r="3.5"/>
            <circle fill={foreground} cx="230.5" cy="13.5" r="3.5"/>
            <circle fill={foreground} cx="200.5" cy="273.5" r="3.5"/>
            <circle fill={foreground} cx="206.5" cy="278.5" r="3.5"/>
            <circle fill={foreground} cx="212.5" cy="283.5" r="3.5"/>
            <circle fill={foreground} cx="139.5" cy="214.5" r="3.5"/>
            <circle fill={foreground} cx="144.5" cy="189.5" r="3.5"/>
            <circle fill={foreground} cx="180.5" cy="184.5" r="3.5"/>
            <circle fill={foreground} cx="188.5" cy="184.5" r="3.5"/>
            <circle fill={foreground} cx="105.5" cy="197.5" r="3.5"/>
            <circle fill={foreground} cx="115.5" cy="197.5" r="3.5"/>
            <circle fill={foreground} cx="126.5" cy="197.5" r="3.5"/>
            <circle fill={foreground} cx="123.5" cy="147.5" r="3.5"/>
            <rect fill={foreground} stroke={foreground} strokeWidth="3" x="137.5" y="126.5" width="42" height="14" rx="2" />
            <rect fill={foreground} x="176" y="129" width="5" height="9" rx="2.5" />
            <path d="M124.5,214.5 L139.5,214.5" stroke={foreground} strokeWidth="2" fill={foreground} strokeLinecap="square"/>
            <path d="M64.5,60.5 L133.5,24.5" id="Line" stroke={foreground} strokeWidth="2" fill={foreground} strokeLinecap="square"/>
            <path d="M133.5,24.5 L145.5,47.5" stroke={foreground} strokeWidth="2" fill={foreground} strokeLinecap="square"/>
            <path d="M140.5,38.5 L121.5,48.5" stroke={foreground} strokeWidth="2" fill={foreground} strokeLinecap="square"/>
            <path d="M121.5,48.5 L127.5,58.5" stroke={foreground} strokeWidth="2" fill={foreground} strokeLinecap="square"/>
            <path d="M48.5,78.5 L131.5,33.5" stroke={foreground} strokeWidth="2" fill={foreground} strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="103.5 80.5 131.5 148.5 183.668786 148.5 194.313672 129.885696 223.45225 129.885696" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="222.5 142.5 201.5 142.5 194.660521 153.984312 118.337598 153.984312 100.638681 110.972804 74.519612 110.972804 32.5561018 151.956411" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="124.5 147.5 103.5 102.5 74.9430667 102.5 23.9933795 151.959602 23.9933795 168.615842 74.9430667 120.182412" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="36.5 207.5 55.5 186.5 55.5 154.690779 76.7400893 132.406209 91.7695395 132.406209 101.724981 151.77341" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="126.5 94.5 135.5 117.5 227.792128 117.5 248.625462 71.1638061" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="230.5 14.5 250.5 24.5 265.339512 24.5" />
            <path d="M246.5,13.5 L265.5,13.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M256.5,48.5 L256.5,144.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="247.5 86.5 237.5 108.5 237.5 166.352807 219.743297 166.352807 219.743297 195.192174 213.536175 195.192174 213.536175 166.352807 78.8116127 166.352807" />
            <path d="M180.5,186.5 L180.5,197.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M88.5,170.5 L207.5,170.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="207.5 170.5 207.5 196.5 201.614541 196.5 201.614541 175.23046 96.4286052 175.23046" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="104.5 179.5 194.5 179.5 194.5 194.195247 188.532864 194.195247 188.532864 185.909905" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="247.5 98.5 242.5 108.5 242.5 156.555895 257.042422 181.309908" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="257.5 165.5 247.5 148.5 247.5 109.525823" />
            <path d="M236.5,212.5 L256.5,212.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M256.5,212.5 L256.5,193.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M236.5,218.5 L257.5,218.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M236.5,223.5 L257.5,223.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M236.5,229.5 L257.5,229.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M236.5,235.5 L257.5,235.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <path d="M236.5,240.5 L257.5,240.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="93.5 197.5 142.5 197.5 150.975803 208.234608 172.938744 208.234608 172.938744 200.963241 153.234309 200.963241 144.583254 190.043647" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="94.5 215.5 115.5 215.5 120.059949 208.692831 142.139955 208.692831 148.486514 215.5 172.008919 215.5 172.008919 221.252162 107.818365 221.252162" />
            <path d="M79.5,280.5 L79.5,238.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="79.5 203.5 79.5 158.5 207.304586 158.5 211.264143 152.663061 222.985495 152.663061" />
            <path d="M133.5,269.5 L133.5,263.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="133.5 244.5 133.5 227.5 172.17753 227.5 172.17753 233.134351 146.388397 233.134351 146.388397 244.408813" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="146.5 263.5 146.5 275.5 188.754844 275.5 188.754844 245.594757 181.558443 245.594757 181.558443 269.553561 160.19013 269.553561 160.19013 263.5" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="158.5 244.5 158.5 239.5 172.422792 239.5" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="171.5 281.5 194.5 281.5 194.5 246.192248 201.022056 246.192248 201.022056 273.586226" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="207.5 278.5 207.5 246.5 212.711897 246.5 212.711897 281.622907" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="218.5 246.5 218.5 287.5 231.162305 298.770926 231.162305 328.186203 258.1244 354.715066 258.1244 280.527364 231.162305 260.253071 231.162305 246.5 224.799933 246.5 224.799933 272.419937 240.051974 285.647986 240.051974 313.364025" />
            <path d="M248.5,299.5 L248.5,273.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="224.5 293.5 224.5 322.5 202.483455 322.5 194.977028 314.937268 165.148732 314.937268" />
            <path d="M158.5,323.5 L193.5,323.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="248.5 240.5 248.5 254.5 258.156741 262.526357" />
            <path d="M207.5,364.5 L258.5,364.5" stroke={foreground} strokeWidth="2" strokeLinecap="square"/>
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="258.5 353.5 258.5 368.5 232.67968 380.792976" />
            <polyline fill="none" stroke={foreground} strokeWidth="2" strokeLinecap="square" points="258.5 353.5 258.5 368.5 232.67968 380.792976" />
            <rect fill={foreground} stroke={foreground} strokeWidth="2" x="74" y="204" width="12" height="34" />
            <rect fill={foreground} stroke={foreground} strokeWidth="2" x="130" y="245" width="7" height="18" />
            <rect fill={foreground} stroke={foreground} strokeWidth="2" x="143" y="245" width="7" height="18" />
            <rect fill={foreground} stroke={foreground} strokeWidth="2" x="155" y="245" width="7" height="18" />
            <polygon fill={foreground} transform="translate(143.828427, 126.000000) rotate(45.000000) translate(-143.828427, -126.000000) " points="141.828427 124 145.828427 124 141.828427 128"/>
            <polygon fill={foreground} transform="translate(150.578427, 125.828427) rotate(45.000000) translate(-150.578427, -125.828427) " points="148.578427 123.828427 152.578427 123.828427 148.578427 127.828427"/>
            <polygon fill={foreground} transform="translate(157.328427, 125.828427) rotate(45.000000) translate(-157.328427, -125.828427) " points="155.328427 123.828427 159.328427 123.828427 155.328427 127.828427"/>
            <polygon fill={foreground} transform="translate(164.078427, 125.828427) rotate(45.000000) translate(-164.078427, -125.828427) " points="162.078427 123.828427 166.078427 123.828427 162.078427 127.828427"/>
            <polygon fill={foreground} transform="translate(170.828427, 125.828427) rotate(45.000000) translate(-170.828427, -125.828427) " points="168.828427 123.828427 172.828427 123.828427 168.828427 127.828427"/>
            <polygon fill={foreground} transform="translate(170.828427, 141.828427) scale(1, -1) rotate(45.000000) translate(-170.828427, -141.828427) " points="168.828427 139.828427 172.828427 139.828427 168.828427 143.828427"/>
            <polygon fill={foreground} transform="translate(164.078427, 141.828427) scale(1, -1) rotate(45.000000) translate(-164.078427, -141.828427) " points="162.078427 139.828427 166.078427 139.828427 162.078427 143.828427"/>
            <polygon fill={foreground} transform="translate(157.328427, 141.828427) scale(1, -1) rotate(45.000000) translate(-157.328427, -141.828427) " points="155.328427 139.828427 159.328427 139.828427 155.328427 143.828427"/>
            <polygon fill={foreground} transform="translate(150.578427, 141.828427) scale(1, -1) rotate(45.000000) translate(-150.578427, -141.828427) " points="148.578427 139.828427 152.578427 139.828427 148.578427 143.828427"/>
            <polygon fill={foreground} transform="translate(143.828427, 141.828427) scale(1, -1) rotate(45.000000) translate(-143.828427, -141.828427) " points="141.828427 139.828427 145.828427 139.828427 141.828427 143.828427"/>
            <polygon fill={foreground} points="171.5 190.5 171.5 247.779823 238.796595 247.779823 238.796595 208.549866 222.939731 190.5"/>
          </g>
          <path d="M471,243 C459.40202,243 450,233.59798 450,222 C450,210.40202 459.40202,201 471,201 C482.59798,201 492,210.40202 492,222 C492,233.59798 482.59798,243 471,243 Z M471,240 C480.941125,240 489,231.941125 489,222 C489,212.058875 480.941125,204 471,204 C461.058875,204 453,212.058875 453,222 C453,231.941125 461.058875,240 471,240 Z" id="Combined-Shape" fill={background}/>
          <path d="M449,117 C441.268014,117 435,110.731986 435,103 C435,95.2680135 441.268014,89 449,89 C456.731986,89 463,95.2680135 463,103 C463,110.731986 456.731986,117 449,117 Z M449,114 C455.075132,114 460,109.075132 460,103 C460,96.9248678 455.075132,92 449,92 C442.924868,92 438,96.9248678 438,103 C438,109.075132 442.924868,114 449,114 Z" id="Combined-Shape" fill={background}/>
          <path d="M376.5,66 C366.282732,66 358,57.7172679 358,47.5 C358,37.2827321 366.282732,29 376.5,29 C386.717268,29 395,37.2827321 395,47.5 C395,57.7172679 386.717268,66 376.5,66 Z M376.5,63 C385.060414,63 392,56.0604136 392,47.5 C392,38.9395864 385.060414,32 376.5,32 C367.939586,32 361,38.9395864 361,47.5 C361,56.0604136 367.939586,63 376.5,63 Z" id="Combined-Shape" fill={background}/>
          <path d="M292.5,33 C288.357864,33 285,29.6421356 285,25.5 C285,21.3578644 288.357864,18 292.5,18 C296.642136,18 300,21.3578644 300,25.5 C300,29.6421356 296.642136,33 292.5,33 Z M292.5,31 C295.537566,31 298,28.5375661 298,25.5 C298,22.4624339 295.537566,20 292.5,20 C289.462434,20 287,22.4624339 287,25.5 C287,28.5375661 289.462434,31 292.5,31 Z" id="Combined-Shape" fill={background}/>
          <path d="M293.5,266 C281.073593,266 271,255.926407 271,243.5 C271,231.073593 281.073593,221 293.5,221 C305.926407,221 316,231.073593 316,243.5 C316,255.926407 305.926407,266 293.5,266 Z M293.5,263 C304.269553,263 313,254.269553 313,243.5 C313,232.730447 304.269553,224 293.5,224 C282.730447,224 274,232.730447 274,243.5 C274,254.269553 282.730447,263 293.5,263 Z" id="Combined-Shape" fill={background}/>
          <path d="M413,348 C406.924868,348 402,343.075132 402,337 C402,330.924868 406.924868,326 413,326 C419.075132,326 424,330.924868 424,337 C424,343.075132 419.075132,348 413,348 Z M413,346 C417.970563,346 422,341.970563 422,337 C422,332.029437 417.970563,328 413,328 C408.029437,328 404,332.029437 404,337 C404,341.970563 408.029437,346 413,346 Z" id="Combined-Shape" fill={background}/>
          <circle id="Oval-2" fill={background} cx="274" cy="69" r="13"/>
          <circle id="Oval-2" fill={background} cx="337.5" cy="56.5" r="7.5"/>
          <circle id="Oval-2" fill={background} cx="391" cy="23" r="8"/>
          <circle id="Oval-2" fill={background} cx="431" cy="49" r="10"/>
          <circle id="Oval-2" fill={background} cx="484.5" cy="118.5" r="7.5"/>
          <circle id="Oval-2" fill={background} cx="360" cy="188" r="16"/>
          <circle id="Oval-2" fill={background} cx="413.5" cy="164.5" r="19.5"/>
          <circle id="Oval-2" fill={background} cx="288" cy="156" r="10"/>
          <circle id="Oval-2" fill={background} cx="329.5" cy="128.5" r="31.5"/>
          <circle id="Oval-2" fill={background} cx="337" cy="235" r="9"/>
          <circle id="Oval-2" fill={background} cx="424" cy="247" r="15"/>
          <circle id="Oval-2" fill={background} cx="450" cy="294" r="8"/>
          <circle id="Oval-2" fill={background} cx="372" cy="321" r="7"/>
          <circle id="Oval-2" fill={background} cx="350.5" cy="290.5" r="5.5"/>
          <circle id="Oval-2" fill={background} cx="317.5" cy="304.5" r="10.5"/>
          <g id="Group-2" transform="translate(269.000000, 313.000000)">
            <g id="Oval-2">
              <circle fill={background} mask="url(#mask-2)" cx="4" cy="17" r="13"/>
            </g>
          </g>
          <circle id="Oval-2" fill={background} cx="359.5" cy="357.5" r="10.5"/>
          <circle id="Oval-2" fill={background} cx="339.5" cy="400.5" r="6.5"/>
          <path d="M379.5,288 C373.148725,288 368,282.851275 368,276.5 C368,270.148725 373.148725,265 379.5,265 C385.851275,265 391,270.148725 391,276.5 C391,282.851275 385.851275,288 379.5,288 Z M379.5,286 C384.746705,286 389,281.746705 389,276.5 C389,271.253295 384.746705,267 379.5,267 C374.253295,267 370,271.253295 370,276.5 C370,281.746705 374.253295,286 379.5,286 Z" id="Combined-Shape" fill={background}/>
          <path d="M294.5,382 C285.387302,382 278,374.612698 278,365.5 C278,356.387302 285.387302,349 294.5,349 C303.612698,349 311,356.387302 311,365.5 C311,374.612698 303.612698,382 294.5,382 Z M294.5,380 C302.508129,380 309,373.508129 309,365.5 C309,357.491871 302.508129,351 294.5,351 C286.491871,351 280,357.491871 280,365.5 C280,373.508129 286.491871,380 294.5,380 Z" id="Combined-Shape" fill={background}/>
          <path d="M386.407981,31.6744223 L391.5,23.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M391.5,23.5 L430.5,49.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M436.5,53.5 L482.5,114.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M349.5,113.5 L429.5,51.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M341.5,106.5 L367.828977,63.6834638" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M359.5,51.5 L338.5,56.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M333.5,103.5 L336.5,61.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M284.5,24.5 L260.686851,18.1673177" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M289.198791,33.2584694 L275.5,68.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M295.824751,33.7497938 L322.5,109.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M279.5,77.5 L314.5,112.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M286.5,149.5 L275.5,77.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M283.5,154.5 L266.5,152.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M290.5,151.5 L313.5,140.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M355.5,177.5 L342.5,151.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M321.5,152.5 L301.5,221.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M291.5,220.5 L288.5,162.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M311.5,230.5 L363.5,187.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M367.5,185.5 L409.5,166.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M402.5,159.5 L353.5,138.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M270.5,243.5 L266.5,243.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M274.5,320.5 L287.5,264.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M282.5,326.5 L317.5,305.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M318.5,300.5 L335.5,240.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M323.5,303.5 L349.5,291.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M281.5,332.5 L354.5,355.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M361.5,350.5 L372.5,323.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M284.295776,351.363101 L277.5,340.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M311.759341,365.041261 L355.5,358.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M308.016965,376.284796 L338.5,399.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M414.41753,326.204839 L423.5,258.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M421.5,234.5 L415.5,179.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M414.5,239.5 L370.5,198.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M376.181838,264.428761 L362.5,201.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M450.5,287.5 L465.06925,241.723714" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M473.5,201.5 L484.5,124.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M466.8373,201.235257 L451.885395,117.285271" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M436.5,106.5 L354.5,124.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M420.5,151.5 L442.5,114.5" stroke={background} strokeWidth="4" strokeLinecap="square"/>
          <path d="M194.12336,246.067652 C190.797097,246.067652 188.278333,245.199944 186.566995,243.464502 C184.855656,241.729061 184,239.174143 184,235.799673 L184,221.626969 C184,221.169005 184.132566,220.801434 184.397703,220.524245 C184.66284,220.247057 185.024385,220.108465 185.482349,220.108465 C185.91621,220.108465 186.265703,220.247057 186.53084,220.524245 C186.795977,220.801434 186.928543,221.169005 186.928543,221.626969 L186.928543,236.052757 C186.928543,238.535403 187.537144,240.403385 188.754364,241.65676 C189.971583,242.910134 191.761231,243.536812 194.12336,243.536812 C196.485489,243.536812 198.269111,242.910134 199.474279,241.65676 C200.679447,240.403385 201.282022,238.535403 201.282022,236.052757 L201.282022,221.626969 C201.282022,221.169005 201.420614,220.801434 201.697803,220.524245 C201.974991,220.247057 202.330511,220.108465 202.764371,220.108465 C203.222335,220.108465 203.58388,220.247057 203.849017,220.524245 C204.114154,220.801434 204.24672,221.169005 204.24672,221.626969 L204.24672,235.799673 C204.24672,239.15004 203.385038,241.698932 201.661648,243.446425 C199.938258,245.193919 197.42552,246.067652 194.12336,246.067652 Z M221.169905,246.067652 C218.759569,246.067652 216.67466,245.543412 214.915115,244.494916 C213.15557,243.44642 211.799776,241.939982 210.847693,239.975559 C209.895611,238.011135 209.419576,235.691222 209.419576,233.015749 C209.419576,230.364379 209.895611,228.056517 210.847693,226.092093 C211.799776,224.12767 213.15557,222.621232 214.915115,221.572736 C216.67466,220.52424 218.759569,220 221.169905,220 C222.78483,220 224.309345,220.259107 225.743495,220.777329 C227.177644,221.295552 228.424974,222.036719 229.485522,223.000853 C229.871176,223.362404 230.064,223.784206 230.064,224.266273 C230.064,224.60372 229.967588,224.898982 229.774761,225.152067 C229.581934,225.405152 229.352956,225.531693 229.087819,225.531693 C228.798579,225.531693 228.449085,225.399127 228.039328,225.13399 C226.810057,224.169855 225.695293,223.494971 224.695004,223.109318 C223.694714,222.723664 222.543796,222.53084 221.242215,222.53084 C218.446225,222.53084 216.295033,223.440728 214.788573,225.260532 C213.282113,227.080335 212.528894,229.665382 212.528894,233.015749 C212.528894,236.390219 213.282113,238.987317 214.788573,240.80712 C216.295033,242.626924 218.446225,243.536812 221.242215,243.536812 C222.519693,243.536812 223.664585,243.343988 224.676926,242.958334 C225.689267,242.572681 226.810057,241.897797 228.039328,240.933662 C228.449085,240.668526 228.798579,240.535959 229.087819,240.535959 C229.352956,240.535959 229.581934,240.656474 229.774761,240.897508 C229.967588,241.138541 230.064,241.439829 230.064,241.801379 C230.064,242.283446 229.871176,242.705249 229.485522,243.066799 C228.424974,244.030933 227.177644,244.772101 225.743495,245.290323 C224.309345,245.808545 222.78483,246.067652 221.169905,246.067652 Z" id="UC" fill={background}/>
        </g>
      </svg>
    );

  }
}
/* eslint-enable max-len */
