// vite.config.ts
import { defineConfig } from "file:///F:/2%E3%80%81RustProgramming/sendmsg/vue/app/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/2%E3%80%81RustProgramming/sendmsg/vue/app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "F:\\2\u3001RustProgramming\\sendmsg\\vue\\app";
var vite_config_default = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 80,
    host: "192.168.0.31",
    proxy: {
      // '/api':{
      //   target:'http://192.168.0.25:8080',
      //   changeOrigin:true,
      //   rewrite:path => path.replace(/^\/api/,''),
      //}
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFwyXHUzMDAxUnVzdFByb2dyYW1taW5nXFxcXHNlbmRtc2dcXFxcdnVlXFxcXGFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcMlx1MzAwMVJ1c3RQcm9ncmFtbWluZ1xcXFxzZW5kbXNnXFxcXHZ1ZVxcXFxhcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LzIlRTMlODAlODFSdXN0UHJvZ3JhbW1pbmcvc2VuZG1zZy92dWUvYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKV0sXHJcbiAgcmVzb2x2ZTp7XHJcbiAgICBhbGlhczp7XHJcbiAgICAgICdAJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCcuL3NyYycpIFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOntcclxuICAgIHBvcnQ6ODAsXHJcbiAgICBob3N0OicxOTIuMTY4LjAuMzEnLFxyXG4gICAgcHJveHk6e1xyXG4gICAgICAvLyAnL2FwaSc6e1xyXG4gICAgICAvLyAgIHRhcmdldDonaHR0cDovLzE5Mi4xNjguMC4yNTo4MDgwJyxcclxuICAgICAgLy8gICBjaGFuZ2VPcmlnaW46dHJ1ZSxcclxuICAgICAgLy8gICByZXdyaXRlOnBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywnJyksXHJcbiAgICAgIC8vfVxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxvQkFBb0I7QUFDN1UsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixTQUFRO0FBQUEsSUFDTixPQUFNO0FBQUEsTUFDSixLQUFJLEtBQUssUUFBUSxrQ0FBVSxPQUFPO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFPO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTU47QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
