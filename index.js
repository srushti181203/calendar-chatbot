'use strict';

// Import the Dialogflow module from Google client libraries.
const functions = require('firebase-functions');
const { google } = require('googleapis'); // Correct import for googleapis
const { WebhookClient } = require('dialogflow-fulfillment');

/*const express = require('express')
const bodyparser = require('body-parser')
const app =express()
app.use(bodyparser.json())
const port = process.env.PORT || 3000
app.post('/dialogflow-fulfillment', (request, response)=> {
   dialogflowFulfillment(request,response)
})
app.listen(port, () => {
    console.log(`Lisrening on port ${port}`)
})
const dialogflowFulfillment = (request , response)=> {
    const agent = new WebhookClient({request, response})

  function sayhello(agent){
        agent.add('hi there this response coming from heroku  ')
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent ",sayhello)
    agent.handleRequest(intentMap)
}*/



// Enter your calendar ID below and service account JSON below
// Enter your calendar ID below and service account JSON below
const calendarId = "1e4a300442e6ed0aed97170cb416b5537b1ca0111681f7607dec73e31627ce37@group.calendar.google.com";
const serviceAccount = { 
    "type": "service_account",
    "project_id": "cahtbotyyyy-tjil",
    "private_key_id": "1431918366abd231ceded59ee1f95aede7552539",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCmv7KM0Gu3xq+b\nD1XupZiEeHJpWC5wAIiXeqU85MLYk/DMmPwKU9RLffUKy5PztVRnhRMMoNClH0T3\nwOjl7B679hkp+Lvw0T0YiHdhrk8fRe2bQOCL8RmBk2JpTyciFVZUgCynPyVVuMSs\noukkmPMYAt8FeuPvCsKaDInvVKagxN3rJBSIU3IAaR/YN0YIlxQ+9tYqUU6RNm1p\n3YwApBtCqwUNcTeBVT+H4Za8F4etqZYmTkJPsu0eAhD7qSfUnzvVGgXnykLd8hUa\nc5gUxpC5jpZcwlTrAK8WYrBPfo9LgNokEJB9ZvZNrfRVoc+K8VauiRW1zeQG5QCP\nQF9NX7A/AgMBAAECggEARhXVfJUPaVdTsMcx1ZP5dlhPslJTdlTrFEwCzoTSFoib\n0crNSKPyW2aOC2MEhQ7mcno+xvSCrZxmdwG4ggcL5fGqovb+O1oepUSadM54SAsy\nsqoClx8XmtwxJVUU/CDev7Z9zi/ex9hYpbz1ZCH7LtDqHxoHWo35vBjgEt1QCcr3\nBfxbcvCtPCNOcclIEWZ9pj6OQPUH8ApuOJ9N7CoxjhO/cs7P6Fpj8IyP8z4rNYnq\ngTtGYW6xbpwYnhom1mAlnGWHM7W2sYE25HUPXc5g1XgcW7JGQjHbxS90DcNSMIfj\nnLNwnTSOWelVusSt+tVLG2AbyYhB8tPiE6LAsUtTAQKBgQDbI7I2/EVmK43ZGBBD\nIx2wtuHVkc8Bv4I7s9qRo5QgApxZXxT7ZLl+qPNXwZIeQFzLUjh/9DBInk22wa9j\ni94dTVn6YhELsd8BpegYquDxZgjHeLHDjqLbSkE+JmIagkbgxZj0m/S9GNIsv2C8\nbfyrTQZpKDd0sLAV5w3BTpH/AQKBgQDCzAXmpJM9+ji28FVjZ7+OTb+F/jGJ5sPB\nCvS4lAieaHyeowiSH6BIB6V56p+F4LLoFW0vI3H/sMsryeCEKqb1I+ui4dklHMmG\nyLRfg6SWmwPddLcq15YMy5p9XLYFdUCbxWwpKF6c+r0RNyXXfmqX4sGRVvtkiDHL\nefe9CmDvPwKBgHv6yBsfwsu5HHmUia7SMTwHW+GOqsVcafwJF0GKgIVTtM1DZAWO\nyPuF7pbZpyeCVn2ZuOl7Z83N8j3Rer8hJLsDRkLINMifC4JNMPCzzKwGhDUGbdwr\n2KukaSEWai6BQkRsxsqtaVuKrW4voDU7LNZlr5jS7f0Q8a6SmE+jeioBAoGAVfoz\nCI/PJWXRrnz5UzyxgZ+zTvLY7qLZ99RcGzPLcg9wIZyX5dbrqZ8mXF9ANZjtnh4G\n6O1eHZrssdEStYMV2dEW6feBHi5MjJ79bcLu3EJjPFWNmu04n0EmWPqYpGQSNi63\nBJt61xKcbILIwwpbBdrh0MJxhvfN8p9MxzVTf4UCgYAOfv9g/WUhvTcPWCrAGCWW\n75iFugFXjvrSvDNMkvKi4o+ExAaSmJH7DAsfG/vquNN+A8SM+A2s+lDziGrMAYji\nYeo64fJIiLSTurn0sx40LIgvWizmmI+Qyb5qWC+E4pJA62/KXJnbJNB4xWLq5oV5\nYYOr1UPmnEj7NTBvIhzVZA==\n-----END PRIVATE KEY-----\n",
    "client_email": "appointment-schedular@cahtbotyyyy-tjil.iam.gserviceaccount.com",
    "client_id": "113666810846064592379",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/appointment-schedular%40cahtbotyyyy-tjil.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}; // Starts with {"type": "service_account",...

// Set up Google Calendar Service account credentials
const serviceAccountAuth = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: 'https://www.googleapis.com/auth/calendar'
});

const calendar = google.calendar('v3');
process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements

const timeZone = 'America/Los_Angeles';
const timeZoneOffset = '-07:00';

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log("Parameters", agent.parameters);
    const appointment_type = agent.parameters.AppointmentType;

    function makeAppointment(agent) {
        // Calculate appointment start and end datetimes (end = +1hr from start)
        const dateTimeStart = new Date(new Date(Date.parse(agent.parameters.date.split('T')[0] + 'T' + agent.parameters.time.split('T')[1].split('-')[0])));
        console.log("expected String", agent.parameters.date.split('T')[0] + 'T' + agent.parameters.time.split('T')[1].split('-')[0] + timeZoneOffset);
        const dateTimeEnd = new Date(new Date(dateTimeStart).setHours(dateTimeStart.getHours() + 1));
        const appointmentTimeString = dateTimeStart.toLocaleString(
            'en-US', { month: 'long', day: 'numeric', hour: 'numeric', timeZone: timeZone }
        );
        // Check the availability of the time, and make an appointment if there is time on the calendar
        console.log("dateTimeStart", dateTimeStart);
        console.log("dateTimeEnd", dateTimeEnd);
        console.log("appointmentTimeString", appointmentTimeString);
        return createCalendarEvent(dateTimeStart, dateTimeEnd, appointment_type).then(() => {
            agent.add(`Ok, let me see if we can fit you in. ${appointmentTimeString} is fine!.`);
        }).catch(() => {
            agent.add(`I'm sorry, there are no slots available for ${appointmentTimeString}.`);
        });
    }

    // Handle the Dialogflow intent named 'Schedule Appointment'.
    let intentMap = new Map();
    intentMap.set('schedule appointment', makeAppointment);
    agent.handleRequest(intentMap);
});

//Creates calendar event in Google Calendar
function createCalendarEvent(dateTimeStart, dateTimeEnd, appointment_type) {
    return new Promise((resolve, reject) => {
        calendar.events.list({
            auth: serviceAccountAuth, // List events for time period
            calendarId: calendarId,
            timeMin: dateTimeStart.toISOString(),
            timeMax: dateTimeEnd.toISOString()
        }, (err, calendarResponse) => {
            // Check if there is a event already on the Calendar
            if (err || calendarResponse.data.items.length > 0) {
                reject(err || new Error('Requested time conflicts with another appointment'));
            } else {
                // Create event for the requested time period
                calendar.events.insert({
                    auth: serviceAccountAuth,
                    calendarId: calendarId,
                    resource: {
                        summary: appointment_type + ' Appointment',
                        description: appointment_type,
                        start: { dateTime: dateTimeStart },
                        end: { dateTime: dateTimeEnd }
                    }
                }, (err, event) => {
                    err ? reject(err) : resolve(event);
                });
            }
        });
    });
}
