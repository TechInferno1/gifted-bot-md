const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-bot-md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254728782591" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "admin";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254798801683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"),
 
  author : process.env.PACK_AUTHER|| "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  ownername:process.env.OWNER_NAME|| "It's GiftedTech",

  sessionName:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdUU2lXQ2lJZG9tNnFjUGpqcTBFVVZpSFVpUE42QmJkaXZuWm9zZUEzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURyRTVDTkMwTTZGTkxFQzYza1lEa1VXdy84N0JFVHJYaHlLdis4Y0VnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTjJ0b3FjN1RFOEw5aVVkVGdRSG9ISlFlc3NhbE0yOW5qblBWNXlRT0hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmSXB1ajhtM1BSbHNYdWpDWDY5b21DeStBYlVkK042REFBSjY4WFJreDJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCcVFObkI5WngyZUlPdHdDakhLTG1MTTlXaGgyYzBEcEFDSzZWVWsyMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik04aXl0bzFMQ2wyOG14djUyN0d0cnpvblc1QjFic0ptNTNjcnBoQWxzME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUM1M2c4M1NXcnppRktNMTFCOTZyd0JuQ080QnlzVGduYjIrbXNDWHFtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Jadk9lRmJmNUVFTW51SENLcCtTL1BJMXNMQ05lVUI2VE1BdEFhVDRVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsxVlVTeEVZdU1EZlRvV29NekhoTFdZN1RrMFBkczJPL0taM1BxNmFYcnNwckRwT3RKNU52WFErT3UvM2k0N1I5MDNYbE1aRlZCQzBURkU3U2RNM2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiI2NlQxVjRVS09hY2UxVFE4MVZ6LzM5RVBnTU01Nkx1aUkzNkFIRXFkY25BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkVVZtQUFGMVIxT1FnRHdIbTFSd21RIiwicGhvbmVJZCI6ImQ5ZWRkN2Q2LTZhM2MtNDVlMi1iNTE5LTEwY2NkOTdhMDU4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKYmpKMXZ1NHkzc1U0OFZGbkVqdmNQMzBjQWM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind1QjlSTnYxSnZFQjlDL0F3dFNTSmt3cXNCND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEdnF0NERFUFdMN0s0R0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZVdHlNMXEwb1d1bkFBK001cXg3eGpkdDAvRFhEQWFuRzRBSkJXK0p1R289IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlXWENBNjIyRmwzYTVRbjVPbyt1MDBlS0hzU2xRV3o2TklLRXpyM2JBbjdaQk10RjlCUXoxSUM2N09wOFoxcWxGVHBwNFVlazRoeUtnN0JvVEJwM0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMblk1RzFKN3FOWXBrTnRwMjcxQ1BIQzBkdUh6em5ZdUd3YlA1N0VsK3JYS0ZKU2loK2IvNThrYXVvc2k1SGxZaHBLWlpMLzRTb3haMWxzcFErMTVqZz09In0sIm1lIjp7ImlkIjoiMjU0Nzk4ODAxNjgzOjQ3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5ODgwMTY4Mzo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVkxjak5hdEtGcnB3QVBqT2FzZThZM2JkUHcxd3dHcHh1QUNRVnZpYmhxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA4ODUyNzI4fQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
