import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://jcapul.github.io/Ultim8",
	plugins: [preact()],
});
