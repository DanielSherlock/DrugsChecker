---

title: Tory Drugs Contest

---

_"Which drugs will the UK's next prime minister have taken?"_ --- unless you count wheat, it's not something the UK had to think about last time round, in the contest Theresa May eventually ended up not losing ("winning" might be too string a word). But today there out-and-out abundance of choice should Conservative MPs and members be looking for candidates who have confirmed taking/smoking/sneezing/drinking illegal --- in the UK (maybe... I'll check?) --- drugs. As far as the author is aware, no bookies are offering odds on which drugs exactly will win the Tory leadership contest, but with an API or two and a bit of javascript that really ought not be a problem any longer.

_Sorry, I can't be bothered not to build this in production... so there's nothing here yet._

<script>
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
</script>
