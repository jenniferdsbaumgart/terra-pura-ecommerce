import React from 'react';

const About: React.FC = () => (
    <main style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
        <h1>About Terra Pura</h1>
        <p>
            Terra Pura is dedicated to providing sustainable solutions for a healthier planet. 
            Our mission is to empower communities and individuals to make environmentally conscious choices 
            through innovative products and educational resources.
        </p>
        <section>
            <h2>Our Vision</h2>
            <p>
                We envision a world where people and nature thrive together. By promoting eco-friendly practices 
                and supporting green initiatives, we aim to create a positive impact on the environment.
            </p>
        </section>
        <section>
            <h2>What We Do</h2>
            <ul>
                <li>Develop sustainable products</li>
                <li>Host educational workshops and events</li>
                <li>Partner with local communities and organizations</li>
                <li>Advocate for environmental awareness</li>
            </ul>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                Want to learn more or get involved? Reach out at <a href="mailto:info@terrapura.com">info@terrapura.com</a>.
            </p>
        </section>
    </main>
);

export default About;