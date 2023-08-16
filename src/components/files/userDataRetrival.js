import { UseStateNode } from '../global_functions/useState';

// This file holds the User collection logic

// UserAgent Package
const parser = require('ua-parser-js');

// This is the function retrives the user data and places is local storage
export async function UserDataRetrival() {
      // IP Info API
      const ipUrl = `https://ipinfo.io/?token=${process.env.REACT_APP_IP_API_KEY}`;
      
      // Custom UseState Hook
      const [state, setState] = UseStateNode(null);

      const service_2_b = async (ip) => {
        // let cordinates = null;
        function showPosition(position) {
          return {'lat':position.coords.latitude ,'long':position.coords.longitude};
        }
        let location = navigator.geolocation.getCurrentPosition(position => {
          setState({latitude:position.coords.latitude, longitude:position.coords.longitude, accuracy:position.coords.accuracy})
          return {'lat':position.coords.latitude.toString(), 'lon':position.coords.longitude.toString()};
        });;
        let res = await fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ip}`)
        .then(response => response.json())
        .then(data => {
          return data;
        }).catch(error => {
          return alert('IPAPI.co is currently down, please try again later...')
        })
        

        let locationInfo = state();
        const complete = {
          'ip': res.ip,
          'country_code2': res.country_code2,
          'country_name': res.country_name,
          'ip_number': res.ip_number,
          'isp': res.isp,
          'lattidue': (locationInfo.latitude !== null) ? locationInfo.latitude : 'unknown',
          'longitude': (locationInfo.longitude !== null) ? locationInfo.longitude : 'unknown',
          'accuracy': (locationInfo.accuracy !== null) ? locationInfo.accuracy : 'unknown',
        }

        

        return {'res': complete , 'service': 2, 'ip': ip };
      }

      const service_2_a = async () => {
        let res = await fetch('https://api.ipify.org/?format=json')
          .then(response =>response.json())
          .catch(error => {
            return alert('IPAPI.co is currently down, please try again later...')
          })
        return service_2_b(res.ip)
      }
      
      const publicResponse = await fetch(ipUrl).then(response => response.json()).catch(error => {
        // alert('Service 1 is currently down, back up service is being used...')  
        return service_2_a()
      });
      const publicData = await publicResponse;
      let locationArray = null;
      if(publicData.service === 2){
        locationArray = ['unknown', 'unknown'];
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
        location: {
          ip: publicData.ip,
          country_code: publicData.res.country_code2,
          country_name: publicData.res.country_name,
          ip_number: publicData.res.ip_number,
          isp: publicData.res.isp,
          latitude: publicData.res.lattidue,
          longitude: publicData.res.longitude,
          accuracy: publicData.res.accuracy,
        }
      };
      // This is where we place the data into local storage
      localStorage.setItem('data', JSON.stringify(userInfoTree))
      }
      if(publicData.service === 1){
      console.log(publicData);
      // The Cordinates come in a single string therefore we split them into a array to better access them
      const publicDataLocation = publicData.loc;
      locationArray = publicDataLocation.split(',');
       // TimeZone diff API
       const timeZoneResponse = await fetch(`https://api.timezonedb.com/v2.1/convert-time-zone?key=${process.env.REACT_APP_TIMEZONE_API_KEY}&format=json&from=America/Los_Angeles&to=${publicData.timezone}`);
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
    
       // ****************************************
  
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
      // This is where we place the data into local storage
      localStorage.setItem('data', JSON.stringify(userInfoTree))
    }
}