const { useBlockProps, InnerBlocks } = wp.blockEditor;

export default function save({attributes}) {
    const {autoplay, autoplayDelay, speed, effect, loop} = attributes;

    const swiperConfig = {
        loop,
        speed,
        effect,
        autoplay: autoplay ? {delay: autoplayDelay, disableOnInteraction: false} : false,
    }

    return (
        <div {...useBlockProps.save({className: 'swiper'})} data-swiper-config={JSON.stringify(swiperConfig)}>
            <div className="swiper-wrapper">
                <InnerBlocks.Content/>
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}