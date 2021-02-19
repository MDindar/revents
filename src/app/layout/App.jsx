import React, { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashbord/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen} />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </Fragment>
  );
}

export default App;
