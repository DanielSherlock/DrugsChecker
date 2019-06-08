function registration() {
  var request_response = {"data":{"borisjohnson":["Boris Johnson",1.56],
                                  "jeremyhunt":["Jeremy Hunt",9.9],
                                  "sajidjavid":["Sajid Javid",77.5],
                                  "andrealeadsom":["Andrea Leadsom",10.25],
                                  "esthermcvey":["Esther McVey",600],
                                  "rorystewart":["Rory Stewart",40],
                                  "dominicraab":["Dominic Raab",49.5],
                                  "matthewhancock":["Matthew Hancock",305],
                                  "michaelgove":["Michael Gove",14.75],
                                  "samgyimah":["Sam Gyimah",805],
                                  "markharper":["Mark Harper",780]},"requests":1,"request-limit":20}
  console.log(request_response);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', registration);
} else {
  registration();
}
