const { useBlockProps, InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl, RangeControl, SelectControl } = wp.components;
const { useState } = wp.element;
export default function edit({attributes, setAttributes}) {
    const {autoplay, autoplayDelay, speed, effect, loop} = attributes;

    const ALLOWED_BLOCKS = ['gutenberg-swiper/slide'];
    const TEMPLATE = [['gutenberg-swiper/slide', {}]];

    return (
        <>
            <InspectorControls>
                <PanelBody title="Ustawienia Slidera" initialOpen={true}>
                    <ToggleControl
                        label="Automatyczne odtwarzanie"
                        checked={autoplay}
                        onChange={(val) => setAttributes({autoplay: val})}
                    />

                    {autoplay && (
                        <RangeControl
                            label="Czas wyświetlania slajdu (ms)"
                            value={autoplayDelay}
                            onChange={(val) => setAttributes({autoplayDelay: val})}
                            min={1000}
                            max={10000}
                            step={500}
                            help={"1000 ms to 1s."}
                        />
                    )}

                    <RangeControl
                        label="Szybkość animacji (ms)"
                        value={speed}
                        onChange={(val) => setAttributes({speed: val})}
                        min={100}
                        max={2000}
                        step={100}
                        help={"1000 ms to 1s."}
                    />

                    <ToggleControl
                        label="Zapętlanie slidera"
                        checked={loop}
                        onChange={(val) => setAttributes({loop: val})}
                    />

                    <SelectControl
                        label="Efekt przejścia"
                        value={effect}
                        options={[
                            {label: 'Przesuwanie (slide)', value: 'slide'},
                            {label: 'Zanikanie (fade)', value: 'fade'},
                        ]}
                        onChange={(val) => setAttributes({effect: val})}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps({ className: 'swiper__editor' })}>
                <div className="swiper__title">
                   Swiper Slider
                </div>

                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    orientation="horizontal"
                />
            </div>
        </>
    )
}