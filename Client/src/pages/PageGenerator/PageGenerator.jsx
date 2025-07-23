import React from 'react'
import { Hero } from '../../sections/HeroSection/Hero';
import { FeaturedCollection } from '../../sections/FeaturedCollection/FeaturedCollection';
import { FeaturedProduct } from '../../sections/FeaturedProduct/FeaturedProduct';
import { Footer } from '../../sections/Footer/Footer';
import { Navbar } from '../../sections/NavbarTemplate/NavbarTemplate';
import { ContactForm } from '../../sections/ContactForm/ContactForm';
import { PreFooterEmailSignup } from '../../sections/PreFooter/PreFooter';
import { ProductHighlight } from '../../sections/ProductHighlight/ProductHighlight';
import { SplitFeatureSection } from '../../sections/SplitFeatureSection/SplitFeatureSection';
import { ImageWithTextSection } from '../../sections/ImageWithText/ImageWithText';
import { MultimediaCollage } from '../../sections/MultimediaCollage/MultimediaCollage';

export default function PageGenerator({ components }) {
    console.log(components, "from pages")
    return (
        <div>
            {components.map((component) => (
                <React.Fragment key={component.id}>
                    {{
                        HeroSection: (
                            <Hero
                                data={component}
                                view={true}
                            />
                        ),
                        FeaturedCollection: (
                            <FeaturedCollection
                                data={component}
                                view={true}
                            />
                        ),
                        FeaturedProduct: (
                            <FeaturedProduct
                                data={component}
                                view={true}
                            />
                        ),
                        Footer: (
                            <>
                                <Footer
                                    data={component}
                                    view={true}
                                />
                            </>
                        ),
                        Navbar: (
                            <>
                                <Navbar
                                    data={component}
                                    view={true}
                                />
                            </>
                        ),
                        ContactForm: (
                            <ContactForm
                                data={component}
                                view={true}
                            />
                        ),
                        PreFooterEmailSignup: (
                            <PreFooterEmailSignup
                                data={component}
                                view={true}
                            />
                        ),
                        ProductHighlight: (
                            <ProductHighlight
                                data={component}
                                view={true}
                            />
                        ),
                        SplitFeatureSection: (
                            <SplitFeatureSection
                                data={component}
                                view={true}
                            />
                        ),
                        ImageWithTextSection: (
                            <ImageWithTextSection
                                data={component}
                                view={true}
                            />
                        ),
                        MultimediaCollage: (
                            <MultimediaCollage
                                data={component}
                                view={true}
                            />
                        ),
                    }[component.component] || null}
                </React.Fragment>
            ))}
        </div>
    )
}
