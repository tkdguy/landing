import '../global.css';
import 'tailwindcss/tailwind.css';
import 'prism-theme-one-dark/prism-onedark.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { TitlesProvider } from '../hooks/useTitles';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { DefaultSeo } from 'next-seo';
import NextBannerMeta from '../components/NextBannerMeta';

const MyApp = ({ Component, pageProps }) => {
    const { locale, defaultLocale, pathname } = useRouter();
    return (
        <NextBannerMeta>
            {!pathname.startsWith('/next-banner-layouts') ? (
                <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={pageProps.intlMessages}>
                    <TitlesProvider value={pageProps.titles}>
                        <DefaultSeo
                            titleTemplate="%s - Plutonium Project"
                            openGraph={{
                                type: 'website',
                                locale,
                                url: 'https://plutonium.pw/',
                                site_name: 'Plutonium',
                            }}
                            twitter={{
                                handle: '@PlutoniumMod',
                                site: '@PlutoniumMod',
                                cardType: 'summary_large_image',
                            }}
                        />
                        <div className="text-white bg-gray-900 min-h-screen flex flex-col font-serif">
                            <Nav />
                            <Component {...pageProps} />
                            <div className="flex-grow" />
                            <Footer />
                        </div>
                    </TitlesProvider>
                </IntlProvider>
            ) : (
                <Component {...pageProps} />
            )}
        </NextBannerMeta>
    );
};

export default MyApp;
