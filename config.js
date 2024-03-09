const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kingsmartcyber@gmail.com"
global.location="Eldoret,kenya."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/kingsmartCyber/Kingsmart-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaOe5HuKLaHjVPDUqQ18";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaOe5HuKLaHjVPDUqQ18" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "IMG/20240305_200425.png" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254790741059";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "paused" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254790741059,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254790741059,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_59_03_08_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid01tSzlSMUc3WVVFdGU1VW56U0RucjhzUnpoL2hXVkpxam1YMm1CWTRYQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk91QWxjcjJ3dTVZdHduT05oekVSQ2xHU25QZjZ5UjZBRitaV1dPb2E4Qlk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUxCdVVuRmtYZkRtL3RZOWdWSmJvUGNWS3ZEcTFTcE14NW54ZUg5Y2hHOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkV5TUV3dVdweTlsQmZoS21TNll3ZitrNisxZ1Y2bk9rV3RGb2M4cXBNSFU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0hKR2xkYmR5TjRqVU9Xa2IxUGN1OGsyakorWTgyNzRFd3RUNXNvNXZGUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImxRd0xlWVJxWERsNzlhQmZ1eXNlNUIzR0NpeW0wWms0QjlmUysyRm9id289XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJTS01kc3VsYkY2LzRsT0hIc3ZyQnFCSlUyazFyU0lFL2F3TWdJcTRoVDI0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiM0RCRjJmTjFjdi9acExRenV6MGowamZReDc4Um5lTWwxWXprb24rdEt6OD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4TEtUZGNwOS83SzF1eWxnOXl5cGFVVTNTbHBDWVFVd0tTZ2piYVU1emFmZjVWUER1dWs0SSttazFGYmNpNlBEOVRHLzYyUzZQNjZrVU5acHlESldDUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjAsXCJhZHZTZWNyZXRLZXlcIjpcIllSazdkOUVmdzlKbS92dWVidC9kWDdoYitQdUcwYTlJWHRHQitzdmpESVE9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3OTEyNzU2NTJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQkY4QjMwQTNFQjY3QzBBMEI1MzhGODI0NzNDNjgwMDZcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwOTkyNzk2NX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInFNekNxUktaVElDTXdvVU5kX0M2Y2dcIixcInBob25lSWRcIjpcIjQ1ZmRhYzBhLWZhNzktNDQ2NC1hMWZhLWI2OTkwYmZjYmRmNFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZlg1VEVSNld1ckdkV3IzUDVsYzlpVlkrWGZzPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRvYXgyMGU2ZUNBejhSVDFHVFV1Z2ZkL0VRUT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCI3UFdUOVM4UFwiLFwibWVcIjp7XCJpZFwiOlwiMjU0NzkxMjc1NjUyOjNAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcImdlbml1c2tpbmdkb205OVwiLFwibGlkXCI6XCIyODAyNjQyMTU0MDA0OTE6M0BsaWRcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BlYS80a0hFSlBjcmE4R0dBTWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ1RENHY0F6ZjBjNU1MeWFlMjRqOHZ6eEJEUGZlc3RsWDhmd1FldS92emhVPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiNTRUWmR5MEgxSitYNmwvU3lzK0ZMYSsxd1BQM0N2eXpZTFdiNTVZYTBDZkEvd1psd3MzUGZ0YTF3NzBhVEdsRVV0K2FBR1J6eDhHaDlXSVhtSmUwQnc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJCUHhqeVc5Slg2QzZQbERvK2tlZkh1N3NPWjZKVndXYlZPSE10SG1Zd1FLbXZqMVczbEpRTWZJZXVnM3B3cnRvWkMyc2d2ZnZnbU5ySlJyTmNIejdCUT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0NzkxMjc1NjUyOjNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYmd3aG5BTTM5SE9UQzhtbnR1SS9MODhRUXozM3JMWlYvSDhFSHJ2Nzg0VlwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDk5Mjc5NjEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTTBCXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTBCLmpzb24iOiAie1wia2V5RGF0YVwiOlwicCtBc0RmYTFsVkYvNWQvNWdtekY3ZC96RE9QMklzSmxhMWsvQXpYNS9JMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTAwMDA2Nzc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDk1NzE4MDI3NzBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Kingsmart-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "© Kingsmart-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Kingsmart-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Kingsmart Cyber",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Kingsmart-MD",
  ownername:process.env.OWNER_NAME|| "It's Kingsmart Cyber",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "e0558a47-d1b1-4ddc-8e51-96ba410d8ff4",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "monalisa",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "NARUTO",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
