import React, {useState} from 'react';
import Logo from './logo';

export default function ClockExample() {
  const [color, setColor] = useState('#fff');
  const [backgroundColor, setBackgroundColor] = useState('#CBF556');

  return (
    <div className="flex-down center">
      <Logo
        height={'150px'}
        width={'150px'}
        foreground={color}
        background={backgroundColor}
      />
      <div className="flex">
        <div className="flex-down">
          <span>background</span>
          <input value={color} onChange={e => setColor(e.target.value)} />
        </div>
        <div className="flex-down">
          <span>foreground</span>
          <input
            value={backgroundColor}
            onChange={e => setBackgroundColor(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            document
              .querySelector('#logo')
              .setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            const svgData = document.querySelector('#logo').outerHTML;
            const preface = '<?xml version="1.0" standalone="no"?>\r\n';
            const svgBlob = new Blob([preface, svgData], {
              type: 'image/svg+xml;charset=utf-8',
            });
            const svgUrl = URL.createObjectURL(svgBlob);
            const downloadLink = document.createElement('a');
            downloadLink.href = svgUrl;
            downloadLink.download = 'uchicago-cs-logo.svg';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }}
        >
          download
        </button>
      </div>
    </div>
  );
}
