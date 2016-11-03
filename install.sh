echo Install dependencies
echo GlslEditor
git clone -b gh-pages https://github.com/videodromm/glslEditor src/glslEditor
echo Pull changes
cd src/glslEditor
git pull
cd ../..
