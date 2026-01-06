import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },

    plugins: [react({ jsxRuntime: 'classic' })],

    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },

    build: {
        outDir: 'build',
        emptyOutDir: true,
        minify: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'src/index.js'),
                view: path.resolve(__dirname, 'src/view.js'),
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'index.css') return 'style.css';
                    return '[name].[ext]';
                },
                banner: '(function() {',
                footer: '})();',
                // ------------------------------------------

                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    lodash: 'lodash',
                    underscore: '_',
                    jquery: 'jQuery',
                    '@wordpress/blocks': 'wp.blocks',
                    '@wordpress/block-editor': 'wp.blockEditor',
                    '@wordpress/components': 'wp.components',
                    '@wordpress/i18n': 'wp.i18n',
                    '@wordpress/element': 'wp.element',
                    '@wordpress/data': 'wp.data',
                },
            },
            external: [
                'react',
                'react-dom',
                'lodash',
                'underscore',
                'jquery',
                /^@wordpress\/.*$/,
            ],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
});