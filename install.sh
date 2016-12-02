echo Install dependencies
echo GlslEditor
git clone -b gh-pages https://github.com/videodromm/glslEditor src/www/glslEditor
echo Pull changes
cd src/www/glslEditor
git pull
cd ../..
