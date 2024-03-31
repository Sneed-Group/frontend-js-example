<!DOCTYPE html>
<html>
<head>
<title>FrontendJS Example</title>
</head>
<body>
<script src="http://nodemixaholic.com:3002/nodemixaholic/frontend.js/raw/branch/main/frontend.js"></script>
<script>
clearPage()
let firstH1 = createElement("h1", "h1-1")
writeText("h1-1", "Hello, world")
createParagraph("paragraph1", `This is an example of how to properly use Frontend JS.
Also it's a test if things are working.`)
let dino = createButton("dino", "dino sound")
changeAttributes(dino, {"onclick": "playAudio(`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3`, 0.4)"})
</script>
</body>
</html>