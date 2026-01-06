const {useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls} = wp.blockEditor;
const {Button, TextControl, PanelBody} = wp.components;
const { useState } = wp.element;

export default function Edit({attributes, setAttributes}) {
    const {imageUrl, imageId, heading, description, ctaText, ctaLink} = attributes;

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
        })
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={'Ustawienia przycisku CTA'}>
                    <TextControl label={'Link odnośnika'}
                                 value={ctaLink}
                                 onChange={(val) => setAttributes({ctaLink: val})}
                                 help={'Wklej adres na który ma odsyłać przycisk'}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps({className: 'swiper__slide-edit'})}>
                <div className="slide__image-wrapper">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({open}) => (
                                <>
                                    {imageUrl ? (
                                        <div className={'image__preview'}>
                                            <img src={imageUrl} alt="Tło slajdu"/>
                                            <div className="btn btn__add-image" onClick={open}>Zmień zdjęcie</div>
                                        </div>
                                    ) : (
                                        <Button onClick={open} className="btn btn__add-image">
                                            Dodaj zdjęcie
                                        </Button>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                </div>

                <div className="slide__content-column">
                    <span className="slide__edit-label">Tekst nagłówka</span>
                    <RichText
                        tagName="h3"
                        className="slide__heading slide__edit-input"
                        value={heading}
                        onChange={(val) => setAttributes({heading: val})}
                        placeholder="Wpisz tekst nagłówka"
                    />
                </div>

                <div className="slide__edit-column">
                    <span className="slide__edit-label">Opis</span>
                    <RichText
                        tagName="p"
                        className="slide__description slide__edit-input"
                        value={description}
                        onChange={(val) => setAttributes({description: val})}
                        placeholder="Wpisz krótki opis"
                    />
                </div>

                <div className="slide__edit-column">
                    <span className="slide__edit-label">Tekst przycisku CTA</span>
                    <RichText
                        tagName="span"
                        className="btn__cta-mock slide__edit-input"
                        value={ctaText}
                        onChange={(val) => setAttributes({ctaText: val})}
                        placeholder="Tekst przycisku"
                    />
                </div>
            </div>
        </>
    )
}