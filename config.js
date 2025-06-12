const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "3RYFxK4C#vnVdk3zUVgYJLlB00dBkT_gvNLxr5cl3JJfmtvmDkvM", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 SILVA-MD Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyAEd2KzSV3_JaFiJDIk4q07NmtnlPsG4wA", // Add Gemini API key here
  REMOVE_BG_API_KEY:"rWfDS4MHYjiXU9B4pzLhBs1T", // Add removebg API key here
  WEATHER_API_KEY: "75e136cc5ab34ef1a9a81329251206", // Add your weather API key here
  BOT_OWNER: "94741090523", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94741090523"], // Replace your bot owner number here (same as bot owner number)
  AUTO_READ_STATUS: "true", // Turn on or off auto read status from here
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
