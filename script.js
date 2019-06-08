function main() {
  // probably some event handlers need registering
  // read the table, somehow
  const params = (new URL(document.location)).searchParams;
  switch ([params.get('source'), params.has('cached')]) {
    default:
    case ['betdata', false]:
      if (window.confirm("betdata request succeeded")) {
        console.log("betdata request suceeded");
        // get from betdata
        break;
      } else {
        console.log("betdata request failed");
        // add some kind of message that the request failed
      }
    case ['betdata', true]:
      console.log("betdata cache accessed");
      // read from file
      break;
    case ['predictit', true]:
      console.log("predictit cache failed");
      // show message that we do not cache predictit data
    case ['predictit', false]:
      console.log("predictit request");
      // get from predictit
      break;
  }
  // combine and present all the information
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
