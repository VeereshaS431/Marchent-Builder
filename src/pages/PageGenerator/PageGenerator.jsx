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
            {components?.map((component) => {
                switch (component?.component) {
                    case "HeroSection":
                        return (
                            <div className="mb-4">
                                <Hero
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                />
                            </div>
                        );
                    case "FeaturedCollection":
                        return (
                            <div className="mb-4">
                                <FeaturedCollection
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                />
                            </div>
                        );
                    case "FeaturedProduct":
                        return (
                            <div className="mb-4">
                                <FeaturedProduct
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "Footer":
                        return (
                            <div className="mb-4">
                                <Footer
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );

                    case "Navbar":
                        return (
                            <div className="mb-4">
                                <Navbar
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "ContactForm":
                        return (
                            <div className="mb-4">
                                <ContactForm
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "PreFooterEmailSignup":
                        return (
                            <div className="mb-4">
                                <PreFooterEmailSignup
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "ProductHighlight":
                        return (
                            <div className="mb-4">
                                <ProductHighlight
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "SplitFeatureSection":
                        return (
                            <div className="mb-4">
                                <SplitFeatureSection
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "ImageWithTextSection":
                        return (
                            <div className="mb-4">
                                <ImageWithTextSection
                                    key={component.id}
                                    data={component}
                                    view={true}
                                //     isSelected={selectedComponent === component.id}
                                //     handleComponentSelect={handleComponentSelect}
                                // // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    case "MultimediaCollage":
                        return (
                            <div className="mb-4">
                                <MultimediaCollage
                                    key={component.id}
                                    data={component}
                                    view={true}
                                // isSelected={selectedComponent === component.id}
                                // handleComponentSelect={handleComponentSelect}
                                // updateComponentContent={updateComponentContent}
                                />
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    )
}
