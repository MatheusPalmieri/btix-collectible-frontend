import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

export const IconDiamond = ({ width = 18, height = 16, ...props }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.836 0a.163.163 0 00-.073.017.15.15 0 00-.056.046.137.137 0 00-.014.136l.088.194 1.566 3.39c.01.024.027.044.049.059a.16.16 0 00.153.017.153.153 0 00.062-.046L8.501.229a.134.134 0 00.015-.15.147.147 0 00-.058-.058A.163.163 0 008.377 0h-4.54zm11.468.931l-1.587 3.444a.134.134 0 00.013.135.15.15 0 00.055.047.163.163 0 00.073.017h3.884a.163.163 0 00.078-.02.148.148 0 00.057-.054.136.136 0 00-.004-.145L15.576.912a.151.151 0 00-.06-.052.164.164 0 00-.16.011.146.146 0 00-.052.06zM2.424.914L.128 4.355a.136.136 0 00-.004.145c.013.023.033.041.056.054.024.013.051.02.078.02h3.885c.025 0 .05-.006.072-.017a.15.15 0 00.056-.048.137.137 0 00.013-.135L2.694.933A.146.146 0 002.64.874a.161.161 0 00-.217.04zM14.279 0H9.455a.079.079 0 00-.04.01.072.072 0 00-.028.028.065.065 0 00.008.073l3.073 3.804c.008.01.018.018.03.022a.08.08 0 00.075-.008.07.07 0 00.024-.028L14.215.393l.13-.298a.065.065 0 00-.005-.063.072.072 0 00-.026-.023A.078.078 0 0014.28 0h-.001zM8.346 14.864L4.907 5.807a.137.137 0 00-.053-.065.153.153 0 00-.084-.025H.143a.151.151 0 00-.075.02.137.137 0 00-.053.054.125.125 0 00.015.14l8.307 9.999a.197.197 0 00.113.066.208.208 0 00.132-.017.184.184 0 00.09-.093.167.167 0 00.002-.125l-.328-.896zm9.51-9.147H13.23a.152.152 0 00-.083.025.135.135 0 00-.053.065l-3.776 9.939a.174.174 0 00.002.129c.017.041.049.075.09.097.043.02.091.027.138.018a.203.203 0 00.117-.068l8.305-9.99a.125.125 0 00.015-.14.137.137 0 00-.053-.055.151.151 0 00-.075-.02zm-8.733-4.04l2.154 2.668a.135.135 0 01.015.15.148.148 0 01-.058.057.163.163 0 01-.08.022H6.846a.163.163 0 01-.08-.022.147.147 0 01-.057-.057.134.134 0 01.014-.15l2.154-2.668a.152.152 0 01.054-.042.163.163 0 01.192.042zm-.27 11.088L6.25 5.908a.133.133 0 01.02-.13.151.151 0 01.055-.045.163.163 0 01.07-.016h5.21c.024 0 .048.006.07.016.022.01.041.026.055.045a.137.137 0 01.02.13l-2.605 6.857a.145.145 0 01-.056.069.162.162 0 01-.178 0 .145.145 0 01-.056-.07h-.001z'
        fill='#fff'
      />
    </svg>
  );
};
