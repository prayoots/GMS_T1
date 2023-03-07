function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  
}

function save(user){
  var ss = SpreadsheetApp.openById('1TZyDuw1PJiNsL_YDRPnMnpSDVzfoe4GUaT7ZilIC-9c')
  var sheet = ss.getSheetByName('Sheet1')
  sheet.appendRow([new Date(), user.data1,user.data2])

}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()

}

function myFunction(){
  let a = 'hello PS Test written new line from VS Code'
}

function myFunction3(){
  let a = 'hello PS Test written from cloud 3rd and 4th'
}


