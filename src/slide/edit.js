const { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, Button, TextControl, BaseControl, TextareaControl } = wp.components;
import '../style.scss'
export default function Edit({ attributes, setAttributes }) {
    const { heading, description, ctaText, ctaLink, imageUrl, imageId } = attributes;

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
        });
    };
    const onRemoveImage = () => {
        setAttributes({
            imageUrl: '',
            imageId: 0,
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Treść i Obraz" initialOpen={true}>

                    <BaseControl label="Zdjęcie w tle">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                value={imageId}
                                render={({ open }) => (
                                    <>
                                        {imageUrl ? (
                                            <>
                                                <img
                                                    src={imageUrl}
                                                    alt="Tło"
                                                    style={{ width: '100%', marginBottom: '10px', borderRadius: '4px', height: '150px', objectFit: 'cover' }}
                                                />
                                                <div style={{ display: 'flex', gap: '5px' }}>
                                                    <Button variant="secondary" onClick={open} style={{ flex: 1 }}>
                                                        Zmień
                                                    </Button>
                                                    <Button variant="secondary" isDestructive onClick={onRemoveImage} style={{ flex: 1 }}>
                                                        Usuń
                                                    </Button>
                                                </div>
                                            </>
                                        ) : (
                                            <Button variant="primary" onClick={open} style={{ width: '100%' }}>
                                                Wybierz zdjęcie
                                            </Button>
                                        )}
                                    </>
                                )}
                            />
                        </MediaUploadCheck>
                    </BaseControl>

                    <hr />

                    <TextControl
                        label="Nagłówek"
                        value={heading}
                        onChange={(val) => setAttributes({ heading: val })}
                        help="Główny tytuł slajdu."
                    />

                    <TextareaControl
                        label="Opis"
                        value={description}
                        onChange={(val) => setAttributes({ description: val })}
                        rows={4}
                        help="Krótki tekst pod nagłówkiem."
                    />

                    <hr />

                    <TextControl
                        label="Tekst przycisku"
                        value={ctaText}
                        onChange={(val) => setAttributes({ ctaText: val })}
                    />

                    <TextControl
                        label="Link przycisku (URL)"
                        value={ctaLink}
                        onChange={(val) => setAttributes({ ctaLink: val })}
                        help="Np. https://google.com lub /kontakt"
                    />

                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps({ className: 'swiper-slide' })}>

                <div className="slide__bg">
                    {imageUrl ? (
                        <img src={imageUrl} alt="Background" />
                    ) : (
                        <div style={{
                            background: '#f0f0f0', width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#ccc', fontSize: '3rem', fontWeight: 'bold'
                        }}>
                            IMG
                        </div>
                    )}
                </div>

                <div className="slide__content">
                    {heading ? (
                        <h3 className="slide__heading">{heading}</h3>
                    ) : (
                        <h3 className="slide__heading" style={{ opacity: 0.3 }}>(Brak nagłówka)</h3>
                    )}

                    {description ? (
                        <p className="slide__description">{description}</p>
                    ) : (
                        <p className="slide__description" style={{ opacity: 0.3 }}>(Brak opisu)</p>
                    )}

                    {(ctaText || ctaLink) && (
                        <div className="btn btn__cta">
                            {ctaText || '(Przycisk)'}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}