//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080C0"; colorText="#000000"; colorSele="#FF80C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Lo lograste, no olvides tomar captura de tu pantalla!"; messageTime=""; messageError="¡Revisa tus respuestas!"; messageErrorG="¡Revisa tus respuestas!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsVHV0b3JpYXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["RG9jZW50ZQ", "RXMgcXVpZW4gYWNvbXBh8WEgYWwgZXN0dWRpYW50ZSBlbiBlbCBhdWxhLCBlbmZhdGl6YW5kbyBlbiBsYSBhcHJvcGlhY2nzbiBkZSBjb250ZW5pZG9zIGRlIHN1cyBkaXNjaXBsaW5hcyBlc3BlY+1maWNhcw"],["RG9jZW50ZQ", "RXMgcXVpZW4gYWNvbXBh8WEgYWwgZXN0dWRpYW50ZSBlbiBlbCBhdWxhLCBlbmZhdGl6YW5kbyBlbiBsYSBhcHJvcGlhY2nzbiBkZSBjb250ZW5pZG9zIGRlIHN1cyBkaXNjaXBsaW5hcyBlc3BlY+1maWNhcw"],["Q3VyYSBwZXJzb25hbGlz", "U2UgcmVmaWVyZSBhIGxhIGF0ZW5jafNuIHBhcnRpY3VsYXIgZGUgbGEgcGVyc29uYQ"],["VHV0b3I", "RXMgcXVpZW4gZ2VuZXJhIGVzcGFjaW9zIGRlIGRp4WxvZ28gcGFyYSBsYSBpZGVudGlmaWNhY2nzbiBkZSByaWVzZ29zIHF1ZSBnZW5lcmVuIHVuIGJham8gZGVzZW1wZfFvIGFjYWTpbWljbw"],["Q29vcmRpbmFkb3I", "UGVyc29uYSBmYWN1bHRhZGEgcGFyYSBpbmRpY2FyIHNpIHVuIGVzdHVkaWFudGUgdGllbmUgZGVyZWNobyBhIHByZXNlbnRhciB1biBleGFtZW4"]];
var c=[[7,118],[7,118],[15,49],[5,109],[11,83]];
var con1=["Docente","Cura personalis","Tutor","Coordinador"];
var con2=["Es quien acompaña al estudiante en el aula, enfatizando en la apropiación de contenidos de sus disciplinas específicas","Se refiere a la atención particular de la persona","Es quien genera espacios de diálogo para la identificación de riesgos que generen un bajo desempeño académico","Persona facultada para indicar si un estudiante tiene derecho a presentar un examen"];
var sel1=""; join1=[]; join2=[];
