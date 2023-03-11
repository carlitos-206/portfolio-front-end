// This file holds the User collection logic

// UserAgent Package
const parser = require('ua-parser-js');

// This is the function that calls preps the data to be sent to a database
export async function PolicyViolationCollection() {
      // IP Info API
      const ipUrl = `https://ipinfo.io/?token=${process.env.REACT_APP_IP_API_KEY}`;
      const publicResponse = await fetch(ipUrl);
      const publicData = await publicResponse.json();
      // The Cordinates come in a single string therefore we split them into a array to better access them
      const publicDataLocation = publicData.loc;
      const locationArray = publicDataLocation.split(',');

      // TimeZone diff API
      const timeZoneResponse = await fetch(`http://api.timezonedb.com/v2.1/convert-time-zone?key=${process.env.REACT_APP_TIMEZONE_API_KEY}&format=json&from=America/Los_Angeles&to=${publicData.timezone}`);
      const timeZoneData = await timeZoneResponse.json();
      const timeDiffData = (timeZoneData.fromTimestamp - timeZoneData.toTimestamp);
      // This gives the time offset in a more readable manner
      let timeDiffRead = null;
      if (timeDiffData < 0) {
        const timeDiffAbsolute = Math.abs(timeDiffData);
        const timeDiffHours = ((timeDiffAbsolute / 60) / 60);
        timeDiffRead = `Ahead by ${timeDiffHours} hours`;
      }
      if (timeDiffData > 0) {
        const timeDiffHours = ((timeDiffData / 60) / 60);
        timeDiffRead = `Behind by ${timeDiffHours} hours`;
      }
      if (timeDiffData === 0) {
        timeDiffRead = 'No Time Difference';
      }
  
      // Here we parse the user agent, using from the Navigator API
      const ua = parser(navigator.userAgent);
      let deviceType = null;
      let deviceModel = null;
      let deviceVendor = null;
      if (ua.device.model === undefined) {
        if (ua.os.name === 'Windows') {
          deviceType = 'Desktop';
          deviceModel = 'unknown';
          deviceVendor = 'unknown';
        }
        if (ua.os.name === undefined) {
          ua.os.name = 'unknown';
          deviceType = 'unknown';
          deviceModel = 'unknown';
          deviceVendor = 'unknown';
        }
      }
      if (ua.device.model !== undefined) {
        deviceType = ua.device.type;
        deviceModel = ua.device.model;
        deviceVendor = ua.device.vendor;
      }
      if(ua.cpu.architecture === undefined ){
        ua.cpu.architecture = "unknown";
      }
      // Info Tree
      const userInfoTree = {
        location: {
          ip: publicData.ip,
          city: publicData.city,
          state: publicData.region,
          postal: publicData.postal,
          country: publicData.country,
          timeZone: publicData.timezone,
          timeDiff: timeDiffRead,
          exactLocation: {
            lat: locationArray[0],
            lon: locationArray[1],
          },

        },
        device: {
          type: deviceType,
          model: deviceModel,
          vendor: deviceVendor,
          os:{
            name: ua.os.name,
            version: ua.os.version
          },
          cpu_architecture: ua.cpu.architecture,
          screenWidth: `${window.innerWidth}px`,
          screenHeight: `${window.innerHeight}px`,
        },
        browser: {
          name: ua.browser.name,
          version: ua.browser.version,
          engine:{
            name: ua.engine.name,
            version: ua.engine.version
          } 
        },
      };
      // Its kept in the session in order to track devivce movement if the policy is violates, since it will erase on browser closing
      sessionStorage.setItem('data', JSON.stringify(userInfoTree))
      localStorage.setItem('data', JSON.stringify(userInfoTree))
}