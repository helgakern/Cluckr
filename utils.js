// Methods

const utils = {
  trends(clucks) {
      let trends = {};
      // Looping through each cluck entry
      for (let i = 0; i < clucks.length; i++) {
          console.log(clucks[i])
      const cluck = clucks[i].content.split(' ').join(',').split('\r\n').join(',').split('.').join(',').split('!').join(',').split('?').join(',').split(',');
      
          //Looping through each word in cluck content 
          for (let word of cluck) {
              // Finding hashtags
              if (word.includes('#')) {
                  // If word isn't in trends object yet
                  if (trends[word]) {
                  trends[word] += 1
                  } else {
                  trends[word] = 1
                  }
              }
          }
      }
          
      // Print object contents in trends
      const trendArr = Object.entries(trends);
      trendArr.sort((a, b) => b[1]-a[1]);
      let result = '';
      for (let j = 0; j < trendArr.length; j++) {
          if (j !== trendArr.length - 1) {
              result += `${trendArr[j][0]} • ${trendArr[j][1]}\n`;
          } else {
              result += `${trendArr[j][0]} • ${trendArr[j][1]}`;
          }
      };
      return result;
  },

  // Relative time
  timeSince(timeStamp) {
      const now = new Date();
      secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
      if(secondsPast < 60){
          return 'Just now';
      }
      if(secondsPast < 3600){
          return parseInt(secondsPast/60) + 'm ago';
      }
      if(secondsPast <= 86400){
          return parseInt(secondsPast/3600) + 'h ago';
      }
      if(secondsPast > 86400){
          day = timeStamp.getDate();
          month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
          year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
          return day + " " + month + year;
      }
  }


}

module.exports = utils;