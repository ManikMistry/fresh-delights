import React from 'react';
import './About.css'
import img from "../../img/Fast-food-design-Premium-vector-PNG.png"
function About() {
  return (
    <div>
      <div className="">
        <header>
          <h1>About</h1>
        </header>
        <section className="content-section">
          <div className="text-container">
            <div className='img-container'><img src={img} alt="" /></div>
            <div>
            <h2>Welcome to FreshDelights</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta nisi ligula,
              non feugiat risus tempus nec. Aenean faucibus ligula nec consectetur pretium.
              Aliquam et volutpat est. Phasellus tincidunt, lorem non interdum sagittis,
              erat lectus efficitur urna, vel efficitur dolor mauris at metus. Nullam id congue
              est, in sodales nunc. Sed id ligula sed ipsum consectetur dapibus. Sed eget accumsan arcu.
            </p>
            <p>
              Mauris in pulvinar ligula, sed fermentum purus. Morbi tincidunt, sem vel gravida
              dignissim, odio justo laoreet odio, vitae consectetur metus lectus vel erat. Fusce
              vitae bibendum orci, nec tincidunt mi. In ac libero non velit varius suscipit at in
              ligula. Donec vehicula justo quis sapien tincidunt, vel ultrices enim dignissim.
              Nullam vehicula velit at velit tincidunt, vitae pulvinar sapien hendrerit.
            </p>
            <p>
              Vestibulum sed ligula ullamcorper, rhoncus nisi at, ultrices enim. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer sed ligula elit.
              Phasellus ut viverra orci. Morbi porttitor tincidunt ex, sed lacinia velit bibendum eu.
              Phasellus iaculis, ex ut aliquet vehicula, leo ipsum tempus nunc, nec congue nulla augue ut arcu.
            </p>
            </div>
          </div>
        </section>
        <footer>
          <p>&copy; 2024 FreshDelights. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
