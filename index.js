name: "license",
message: "What kind of license would you like to have?",
name: "license",
choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
choices: ["MIT", "ISC", "Perl"]
},
{
type: "input",
message: "Including yourself, please list out all contributors",
name: "contributer"
},
{
type: "input",
message: "What command is used to run a test",
name: "tests",
}
]);
}
function WriteToFile(fileName, data) {
fs.writeFile(fileName, data, "utf8", function (err) {
if (err) {
throw err;
}
console.log("You have successfully written your README file");
});
}
async function init() {
try {
const answers = await askQuestions();
generateMarkdown(answers);
WriteToFile("README.md", generateMarkdown(answers));
} catch (err) {
console.log(err);
}
}
init();