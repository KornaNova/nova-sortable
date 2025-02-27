let mix = require('laravel-mix');
let path = require('path');

mix.extend('nova', new require('./vendor/laravel/nova-devtool'))

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .postCss('resources/css/tool.css', 'css', [require('tailwindcss')])
  .nova('outl1ne/nova-sortable');
