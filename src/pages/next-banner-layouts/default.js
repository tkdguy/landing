import { ScreenshotCanvas, useBannerData } from 'next-banner';
import Logo from '../../components/icons/logo.svg';

export default function PostLayout() {
    const {
        meta: {
            title = 'BO1, BO2, MW3, WaW redefined.',
            description = 'The Plutonium Project is a CoD mod that aims to improve upon your favorite games.',
        },
    } = useBannerData();

    return (
        <ScreenshotCanvas>
            <div
                className="bg-gray-800 h-full text-black pl-7 pr-7"
                style={{
                    backgroundImage: 'url("/images/og-background.png")',
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Logo className="h-24 w-72 hidden md:inline-block" />

                <div>
                    <h1 className="font-display font-bold text-7xl mt-2 mb-4">
                        {title.replace(' - Plutonium Project', '')}
                    </h1>
                    <h2 className="font-serif pb-2 text-5xl">{description}</h2>
                </div>
            </div>
            <style jsx>{`
                h1 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }

                h2 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    overflow: hidden;
                }
            `}</style>
        </ScreenshotCanvas>
    );
}
