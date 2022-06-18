// UNHIDES THE DIRECTORIES HIDDEN BY VIRUSES
// CREATED BY M.BURAK KALKAN		
// mburakkalkan@gmail.com
// REGULATED BY ÝSMAÝL TARIM
// ismailtarim7@gmail.com
var ATTR_NOR = 0;
var ATTR_RDO = 1;
var ATTR_HID = 2;
var ATTR_SYS = 4;
var ATTR_VOL = 8;
var ATTR_DIR = 16;
var ATTR_ARC = 32;
var ATTR_ALI = 64;
var ATTR_CMP = 128;

var objFSO = new ActiveXObject("Scripting.FileSystemObject");
var objShell = new ActiveXObject("WScript.Shell");
var objFolder = objFSO.GetFolder(objShell.CurrentDirectory);
var duzeltilenler = new Array();

for(var objEnum = new Enumerator(objFolder.SubFolders); !objEnum.atEnd(); objEnum.moveNext())
{
	var subFolder = objEnum.item();
	
	if (subFolder.Attributes > ATTR_DIR)
	{ 
		if (subFolder.Attributes & ATTR_RDO) { subFolder.Attributes -= ATTR_RDO; }
		if (subFolder.Attributes & ATTR_HID) { subFolder.Attributes -= ATTR_HID; }
		if (subFolder.Attributes & ATTR_SYS) { subFolder.Attributes -= ATTR_SYS; }
		duzeltilenler.push(subFolder);
	}
}


if (duzeltilenler.length > 0)
{
	var duzeltilenlerStr = "";
	for (var i = 0; i < duzeltilenler.length; i++)
	{
		duzeltilenlerStr += "-> " + duzeltilenler[i] + "\n";
	}
	WScript.Echo(duzeltilenler.length + " klasör düzeltildi:" + "\n\n" + duzeltilenlerStr);
}
else
{
	WScript.Echo("Tüm dizinler saðlam. Deðiþiklik yapýlmadý.");
}

objFolder = null
objShell = null
objFSO = null
objEnum = null
duzeltilenler = null
duzeltilenlerStr = null