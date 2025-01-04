import localFont from 'next/font/local'

export const copernicus = localFont({
    src: [
        {
            path: './copernicus-light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-Medium-BF66160450d988d.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-MediumItalic-BF6616045177c71.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: './CopernicusTrial-Semibold-BF66160451692c7.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-SemiboldItalic-BF661604516314e.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: './CopernicusTrial-Heavy-BF6616045153731.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './CopernicusTrial-HeavyItalic-BF66160450d4830.ttf',
            weight: '800',
            style: 'italic',
        },
    ],
    variable: '--font-copernicus',
    display: 'swap',
})

export const serene = localFont({
    src: [
        {
            path: './serene-medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './serene-bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './serene-black.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-serene',
    display: 'swap',
})

export const tyrene = localFont({
    src: './tyrene.woff2',
    variable: '--font-tyrene',
    display: 'swap',
}) 