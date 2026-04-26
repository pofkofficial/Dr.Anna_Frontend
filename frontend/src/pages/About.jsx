import Journey from '../components/About/Journey';
import Approach from '../components/About/Approach';
import Credentials from '../components/About/Credentials';
// Note: As we build the following sections, we will create 
// separate files for them. For now, I am focusing on the Hero and Navbar.

function About() {
  return (
    <>
      {/* 1. Navigation - Always visible */}
      <Journey />
      <Approach />
      <Credentials />
    </>
  );
}

export default About;