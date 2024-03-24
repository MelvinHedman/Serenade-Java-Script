
const newFileCommand = "pageup";
const newDirectoryCommand = "pagedown"

serenade.global().command("new class <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

serenade.global().command("new abstract class <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await convertClassToAbstract(api, matches)
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

serenade.global().command("tooltip", async (api) => {
  await api.pressKey("", ["alt", "enter"]);
});

async function convertClassToAbstract(api, matches){
  await api.delay(50)
  await api.pressKey("r", ["ctrl", "shift"])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.delay(50)
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.delay(50)
  await api.typeText("class " + classname)
  await api.pressKey("tab", [])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.typeText("abstract class " + classname)
  await api.pressKey("enter", [])
  await api.pressKey("escape", [])
}

serenade.global().command("convert class <%classname%> abstract", async (api, matches) => {
  await convertClassToAbstract(api, matches)
  await api.pressKey("enter", ["control", "right"])
});

serenade.global().command("new package <%packagename%>", async (api, matches) => {
  await api.pressKey(newDirectoryCommand, ["alt", "control"]);
  await api.typeText(matches.packagename)
  await api.pressKey("enter", [])

})

serenade.global().command("file select", async (api, matches) => {
  await api.pressKey("1", ["alt"]);
})


