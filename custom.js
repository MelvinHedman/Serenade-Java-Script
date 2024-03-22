/* Serenade Custom Commands

In this file, you can define your own custom commands with the Serenade API.

For instance, here's a custom automation that opens your terminal and runs a command:

serenade.global().command("make", api => {
  api.focusApplication("terminal");
  api.typeText("make clean && make");
  api.pressKey("return");
});

And, here's a Python snippet for creating a test method:

serenade.language("python").snippet(
  "test method <%identifier%>",
  "def test_<%identifier%>(self):<%newline%><%indent%>pass",
  { "identifier": ["underscores"] }
  "method"
);

For more information, check out the Serenade API documentation: https://serenade.ai/docs/api

*/


// serenade.global().command("new file <%filename%>", api => {
//   api.typeText("AFIFNAIFNAI")
// });

serenade.global().command("new class <%classname%>", async (api, matches) => {
  await api.pressKey("pageup", ["alt", "control"]);
  await api.typeText(matches.classname)
  await api.pressKey("enter", [])
});

serenade.global().command("new package <%packagename%>", async (api, matches) => {
  await api.pressKey("pagedown", ["alt", "control"]);
  await api.typeText(matches.packagename)
  await api.pressKey("enter", [])
})


