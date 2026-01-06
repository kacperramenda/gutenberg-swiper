const { useBlockProps, RichText } = wp.blockEditor;

export default function save({attributes}) {
    const {imageUrl, heading, description, ctaText, ctaLink} = attributes;

    const blockProps = useBlockProps.save({
        className: 'swiper-slide'
    })

    return (
        <div {...blockProps}>
            {imageUrl && (
                <div className="slide__bg">
                    <img src={imageUrl} alt={heading || 'Slide image'}/>
                </div>
            )}

            <div className="slide__content">
                <RichText.Content tagName="h3" className="slide__heading" value={heading}/>
                <RichText.Content tagName="p" className="slide__description" value={description}/>

                {ctaText && (
                    <a href={ctaLink ?? ''} className="btn__cta">
                        {ctaText}
                    </a>
                )}
            </div>
        </div>
    )
}