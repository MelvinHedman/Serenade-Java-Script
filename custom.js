
const newFileCommand = "pageup";
const newDirectoryCommand = "pagedown"


serenade.app("JetBrains").command("tooltip", async (api) => {
  await api.pressKey("", ["alt", "enter"]);
});

serenade.app("JetBrains").command("create package <%packagename%>", async (api, matches) => {
  await api.pressKey(newDirectoryCommand, ["alt", "control"]);
  await api.typeText(matches.packagename)
  await api.pressKey("enter", [])

})

serenade.app("JetBrains").command("file select", async (api, matches) => {
  await api.pressKey("1", ["alt"]);
})


// Create a class
serenade.app("JetBrains").command("create class <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

// Create an abstract class
serenade.app("JetBrains").command("create abstract class <%classname%>", async (api, matches) => {
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
// Tooltip?

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
async function extendClass(api, matches) {
  await api.delay(200)
  await api.pressKey("r", ["ctrl", "shift"])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.delay(200)
  superclassname = matches.superclass.charAt(0).toUpperCase() + matches.superclass.slice(1);
  await api.delay(200)
  await api.typeText("class " + classname)
  await api.pressKey("tab", [])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.typeText("class " + classname + " extends " + superclassname)
  await api.delay(200)
  await api.pressKey("enter", [])
  await api.delay(200)
  
}

async function implementClass(api, matches) {
  await api.delay(200)
  await api.pressKey("r", ["ctrl", "shift"])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.delay(200)
  interfacename = matches.interfacename.charAt(0).toUpperCase() + matches.interfacename.slice(1);
  await api.delay(200)
  await api.typeText("class " + classname)
  await api.pressKey("tab", [])
  await api.pressKey("a", ["ctrl"])
  await api.pressKey("delete", [])
  await api.typeText("class " + classname + " implements " + interfacename)
  await api.delay(200)
  await api.pressKey("enter", [])
  await api.delay(200)
}

serenade.app("JetBrains").command("create class <%classname%> extends <%superclass%>" , async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await extendClass(api, matches)
  await api.pressKey("escape", [])
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

serenade.app("JetBrains").command("extend class <%classname%> with <%superclass%>", async (api, matches) => {
  await extendClass(api, matches)
  await api.pressKey("enter", ["control", "right"])
});

// Define two abstract methods in an abstract class
// Finns väldigt bra "create function public abstract voice makeSound tex."

// Override two methods in a subclass of an abstract class
// Använda tooltip? 


// Define an interface
// Implement Interface
serenade.app("JetBrains").command("create interface <%classname%>", async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("down", [])
  await api.pressKey("enter", [])
  await api.delay(200)
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

serenade.app("JetBrains").command("create class <%classname%> implements <%interfacename%>" , async (api, matches) => {
  await api.pressKey(newFileCommand, ["alt", "control"]);
  classname = matches.classname.charAt(0).toUpperCase() + matches.classname.slice(1);
  await api.typeText(classname)
  await api.pressKey("enter", [])
  await implementClass(api, matches)
  await api.pressKey("escape", [])
  await api.pressKey("", ["control", "right"])
  await api.pressKey("enter", [])
});

// Use superclass reference to refer to a subclass object and calling overridden methods
// Använda tooltip?

// Add a static method in a class

// Add a static variable in a class

// Use the final keyword to declare a constant value in a class

// Create ENUM 
serenade.app("JetBrains").command("create enum <%classname%>", async (api, matches) => {
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

serenade.app("JetBrains").command("set value of <%type%> <%variable%> to <%value%>", async (api, matches) => {
  await api.pressKey("f", ["ctrl"])
  await api.delay(100);
  await api.typeText(matches.type + " " + matches.variable);
  await api.delay(100);
  await api.pressKey("enter", [])
  await api.delay(100);
  await api.pressKey("escape", [])
  await api.delay(100);
  await api.pressKey("right", ["ctrl"])
  await api.delay(100);
  await api.pressKey("right", ["ctrl"])
  await api.delay(100);
  await api.pressKey("right", ["ctrl", "shift"])
  await api.delay(100);
  await api.pressKey("delete", [])
  await api.delay(100);
  await api.typeText(matches.value);
});


// Create constructor

serenade.language("java").snippet(
  "override function <%public%> <%variable%> <%name%>",
  "@Override<%newline%><%public%> <%variable%> <%name%> () {<%newline%><%cursor%><%newline%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);

serenade.language("java").snippet(
  "loop <%name%> <%start%> equal to <%range%>",
  "for(int <%name%> = <%start%>; <%name%> == <%range%>; <%name%>++) {<%cursor%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);

serenade.language("java").snippet(
  "loop <%name%> <%start%> less or equal to <%range%>",
  "for(int <%name%> = <%start%>; <%name%> <= <%range%>; <%name%>++) {<%cursor%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);

serenade.language("java").snippet(
  "loop <%name%> <%start%> less or equal to <%range%>",
  "for(int <%name%> = <%start%>; <%name%> >= <%range%>; <%name%>++) {<%cursor%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);


serenade.language("java").snippet(
  "loop negative <%name%> <%start%> equal to <%range%>",
  "for(int <%name%> = <%start%>; <%name%> == <%range%>; <%name%>--) {<%cursor%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);

serenade.language("java").snippet(
  "loop negative <%name%> <%start%> less or equal to <%range%>",
  "for(int <%name%> = <%start%>; <%name%> <= <%range%>; <%name%>--) {<%cursor%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);

serenade.language("java").snippet(
  "loop negative <%name%> <%start%> less or equal to <%range%>",
  "for(int <%name%> = <%start%>; <%name%> >= <%range%>; <%name%>--) {<%cursor%>}",
  {
    "name": ["pascal", "identifier"],
    "public": ["pascal", "identifier"],
    "variable": ["pascal", "identifier"]
  },
  "class"
);

