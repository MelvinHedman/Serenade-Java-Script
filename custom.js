
const newFileCommand = "pageup";
const newDirectoryCommand = "pagedown"


serenade.app("JetBrains").command("tooltip", async (api) => {
  await api.pressKey("", ["alt", "enter"]);
});

serenade.app("JetBrains").command("new package <%packagename%>", async (api, matches) => {
  await api.pressKey(newDirectoryCommand, ["alt", "control"]);
  await api.typeText(matches.packagename)
  await api.pressKey("enter", [])

})

serenade.app("JetBrains").command("file select", async (api, matches) => {
  await api.pressKey("1", ["alt"]);
})


// Create a class
serenade.app("JetBrains").command("new class <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

// Create an abstract class
serenade.app("JetBrains").command("new abstract class <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await convertClassToAbstract(api, matches)
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

// Create an object

// Define constrtuctor in a class
// _--_ Finns i vanliga serenade en smidig?


// Add private members to a class and public getter and setter methods

// Make a class abstract
async function convertClassToAbstract(api, matches){
  await api.delay(200)
  await api.pressKey("r", ["ctrl", "shift"])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.delay(200)
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.delay(200)
  await api.typeText("class " + classname)
  await api.pressKey("tab", [])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.typeText("abstract class " + classname)
  await api.delay(200)
  await api.pressKey("enter", [])
  await api.delay(200)
  await api.pressKey("escape", [])
}

serenade.app("JetBrains").command("convert class <%classname%> abstract", async (api, matches) => {
  await convertClassToAbstract(api, matches)
  await api.pressKey("enter", ["control", "right"])
});


// Create a class that inherits from superclass

// Define two abstract methods in an abstract class

// Override two methods in a subclass of an abstract class

// Define an interface

// Implement Interface
serenade.app("JetBrains").command("new interface <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("down", [])
  await api.pressKey("enter", [])
  await api.delay(200)
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

// User superclass reference to refer to a subclass object and calling overridden methods

// Add a static method in a class

// Add a static variable in a class

// Use the final keyword to declare a constant value in a class

// Create ENUM 
serenade.app("JetBrains").command("new enum <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.toUpperCase();
  await api.typeText(classname)
  await api.pressKey("down", [])
  await api.pressKey("down", [])
  await api.pressKey("down", [])
  await api.pressKey("enter", [])
  await api.delay(200)
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

// Define an ENUM with 3 constants

// Use a defined ENUM in a class to represent a specific value and switch between them. 

// Exception Handling 

// Use a collection to store, retrieve and manipulate a group of objects. 

