# svg-text-stroke-animation-reactjs

SVG Text Stroke Animation HTML CSS &amp; Animejs also ReactJS

Create SVG Text to animate using Inkscape Editor

1. Let's use the Roboto font
2. Dowload, unzip and copy the .ttf files into ~/.fonts

```
ls -1 ~/.fonts                                                                                                                                                    master
Roboto-BlackItalic.ttf
Roboto-Black.ttf
Roboto-BoldItalic.ttf
Roboto-Bold.ttf
Roboto-Italic.ttf
Roboto-LightItalic.ttf
Roboto-Light.ttf
Roboto-MediumItalic.ttf
Roboto-Medium.ttf
Roboto-Regular.ttf
Roboto-ThinItalic.ttf
Roboto-Thin.ttf
```

3. Open Inkscape
4. Create some text, eg 'Amazing'
5. Increase the font, select the font, change the color, remove Fill, add Stroke Paint, increase Stroke Style Width
6. Select the Text => Path => Object to Path
7. Save As (Optimized SVG) => 'Remove the XML declaration, Remove metadata, Remove comments, Remove unused IDs'
8. The file is saved as 'amazing.svg' in this repo, add and id="amazing" to the svg element

Create a single page HTML file with animation.

1. See the demo.html file.

Create a ReactJS component

1. npx create-react-app client
2. cd client && npm i -S animejs && npm i -D @types/animejs
3. mkdir components
4. create Amazing.js functional component
5. Copy amazing.svg into the jsx of Amazing.js
6. We need to convert part of the amazing.svg to jsx then copy it into Amazing.js
7. Paste amazing.svg into https://svg2jsx.com/
8. Replace the opening 'g' svg tag with the opening 'g' tag jsx from svg2jsx
9. Update each 'p' style attribute with the 'p' style attribute from the jsx in svg2jsx
10. Add in a React.useEffect to start the animejs animation (note the css selector used in the targets:)

```
  React.useEffect(() => {
    anime({
      targets: "#amazing path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250
      },
      direction: "alternate",
      loop: true, //false,
    })
  }, [])
```

11. Import and use the Amazing component into App.js

## Credit

- [https://www.youtube.com/watch?v=aI9BZI8bf_Y&feature=youtu.be](https://www.youtube.com/watch?v=aI9BZI8bf_Y&feature=youtu.be)
