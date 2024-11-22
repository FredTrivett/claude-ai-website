import localFont from 'next/font/local'

export const copernicus = localFont({
    src: [
        {
            path: './CopernicusNewCondTrial-070-BF6616044f8a3ab.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './CopernicusNewCondTrial-090-BF6616044f92f03.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './CopernicusNewCondTrial-110-BF6616045000e13.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './CopernicusNewCondTrial-130-BF661604501d32e.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-Extrabold-BF661604510c584.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-Heavy-BF6616045153731.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-BoldItalic-BF6616045093ed8.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: './CopernicusTrial-ExtraboldItalic-BF66160450eba9a.ttf',
            weight: '800',
            style: 'italic',
        }
    ],
    variable: '--font-copernicus',
    display: 'swap',
}) 