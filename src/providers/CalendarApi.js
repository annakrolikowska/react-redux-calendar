export default class CalendarApi {

    constructor() { this.apiUrl = 'http://localhost:3005/meetings'}

    loadMeetingsFromApi() {
       return fetch(this.apiUrl)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
                throw new Error('Network error!');
            })
            .catch(err => {
                console.error(err);
            });
    }

    sendMeetingToApi(meetingData) {
 
       return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(meetingData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }    
                throw new Error('Network error!');  
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteMeetingfromApi(meetingID) {
        const options = {
          method: "DELETE",
        };
      
        fetch(`${url}${meetingID}`, options).then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
      
          throw new Error("Network error!");
        });
      }
}
