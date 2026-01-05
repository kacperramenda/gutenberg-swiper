import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'src/index.js'),
                view: path.resolve(__dirname, 'src/view.js'),
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]',

                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
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
                /^@wordpress\/.*$/,
            ],
        },
        minify: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
});