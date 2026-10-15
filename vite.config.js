import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({base:'./',plugins:[VitePWA({registerType:'autoUpdate',includeAssets:['engine/*'],manifest:{name:'Stockfish Chess Studio',short_name:'Chess Studio',description:'Play and analyze chess with Stockfish',theme_color:'#101827',background_color:'#101827',display:'standalone',start_url:'./',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,json,wasm,nnue}'],maximumFileSizeToCacheInBytes:30*1024*1024}})]});
