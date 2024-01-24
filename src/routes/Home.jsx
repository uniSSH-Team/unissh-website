export default function Home() {
  return (
    <>
      <div className='hero min-h-96 bordered-b'>
        <div className='hero-content text-center'>
          <svg
            className='-z-10 fixed fade-in opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            width='1000'
            height='1000'
            viewBox='0 0 3837 3740'
            fill='none'
          >
            <g filter='url(#filter0_f_1_3)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1564.7 1111.57C1292.13 1238.91 1103.23 1515.86 1103.23 1837C1338.46 1787.78 1509.5 1712.05 1632.05 1624.96C1544.74 1427.53 1539.04 1236.87 1564.7 1111.57Z'
                fill='#77CF85'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1802.02 1887.95C1705.62 2155.04 1712.95 2441.08 1749.18 2622.4C1381.15 2551.03 1103.23 2226.53 1103.23 1837C1338.46 1787.78 1509.5 1712.05 1632.05 1624.96C1670.99 1713.01 1726.16 1802.41 1802.02 1887.95Z'
                fill='#5F85CE'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2543.03 2314C2397.47 2510.02 2164.46 2637 1901.84 2637C1849.63 2637 1798.59 2631.98 1749.18 2622.4C1712.95 2441.08 1705.62 2155.04 1802.02 1887.95C1954.01 2059.36 2189.06 2215.31 2543.03 2314Z'
                fill='#A45FCE'
              />
              <path
                d='M2700.45 1837C2700.45 1615.68 2610.73 1415.35 2465.74 1270.51C2094.49 1377.77 1897.44 1623.57 1802.02 1887.95C1954.01 2059.36 2189.06 2215.31 2543.03 2314C2641.93 2180.81 2700.45 2015.75 2700.45 1837Z'
                fill='#CE9B5F'
              />
              <path
                d='M2465.74 1270.51C2321.28 1126.21 2121.96 1037 1901.84 1037C1938.11 1175.47 1907.85 1428.98 1632.05 1624.96C1670.99 1713.01 1726.16 1802.41 1802.02 1887.95C1897.44 1623.57 2094.49 1377.77 2465.74 1270.51Z'
                fill='#B1CE5F'
              />
              <path
                d='M1901.84 1037C1781.37 1037 1667.12 1063.72 1564.7 1111.57C1539.04 1236.87 1544.74 1427.53 1632.05 1624.96C1907.85 1428.98 1938.11 1175.47 1901.84 1037Z'
                fill='#5F85CE'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_1_3'
                x='0'
                y='0.5'
                width='3837'
                height='3739.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='300'
                  result='effect1_foregroundBlur_1_3'
                />
              </filter>
            </defs>
          </svg>
          <div className='max-w-md flex flex-col items-center'>
            <div className='flex flex-row justify-center items-center gap-5'>
              <h1 className='text-5xl font-semibold text-shadow-white'>
                uniSSH
              </h1>
              <img
                className='h-16 bordered-all rounded-full shadow-xl shadow-white/5'
                src='/icon.png'
                alt='icon'
              />
            </div>

            <div className='divider mb-0'></div>

            <p className='py-6'>
              uniSSH is a modern SSH Client and terminal built for the modern
              age.
            </p>
            <div className='join'>
              <button className='btn btn-primary join-item bordered-all hover:bordered-all'>
                Download
              </button>
              <button className='btn btn-primary join-item bordered-all hover:bordered-all'>
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
