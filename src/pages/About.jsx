import React from "react";
import one from "../assets/one.jpg"

const About = () => {
  const team = [
    {
      name: "Nolan Hudson",
      role: "CEO & Founder",
      experience: "25+ years",
      image:one,
      description:
        "Licensed contractor with extensive experience in residential and commercial construction.",
    },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We never compromise on quality and use only the finest materials and craftsmanship.",
      icon: "⭐",
    },
    {
      title: "Integrity",
      description:
        "Honest communication, transparent pricing, and ethical business practices in everything we do.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description:
        "Embracing new technologies and methods to deliver better results for our clients.",
      icon: "💡",
    },
    {
      title: "Safety",
      description:
        "Maintaining the highest safety standards to protect our workers and your property.",
      icon: "🛡️",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to right, #1E40AF, #3B82F6)",
          color: "white",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            About NH Constructions
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "42rem", margin: "0 auto" }}>
            Building communities and creating lasting relationships through exceptional
            construction services since 2003
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ padding: "4rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#111827" }}>
                Our Story
              </h2>
              <div style={{ color: "#4B5563", lineHeight: "1.75" }}>
                <p style={{ marginBottom: "1rem" }}>
                  Founded in 2003 by Nolan Hudson, NH Constructions started as a small family business
                  with a simple mission: to provide honest, quality construction services to our
                  local community. What began as a two-person operation has grown into a team of
                  over 50 skilled professionals.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Over the past two decades, we've completed more than 500 projects ranging from
                  custom homes to large commercial developments. Our commitment to excellence has
                  earned us numerous awards and, more importantly, the trust of our clients and
                  community.
                </p>
                <p>
                  Today, NH Constructions continues to uphold the values that made us who we are: quality
                  craftsmanship, honest communication, and unwavering dedication to client
                  satisfaction.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                style={{
                  width: "100%",
                  height: "16rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div
                  style={{
                    backgroundColor: "#F97316",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>500+</div>
                  <div style={{ fontSize: "0.875rem" }}>Projects Completed</div>
                </div>
                <div
                  style={{
                    backgroundColor: "#1E40AF",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>20+</div>
                  <div style={{ fontSize: "0.875rem" }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "#F9FAFB" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#111827" }}>
              Our Core Values
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#4B5563", maxWidth: "42rem", margin: "0 auto" }}>
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{value.icon}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "0.75rem" }}>
                  {value.title}
                </h3>
                <p style={{ color: "#4B5563" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "4rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#111827" }}>
              Meet Our Leadership Team
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#4B5563", maxWidth: "42rem", margin: "0 auto" }}>
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
            {team.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "16rem",
                    objectFit: "contain",
                  }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
                    {member.name}
                  </h3>
                  <p style={{ color: "#F97316", fontWeight: "500", marginBottom: "0.5rem" }}>{member.role}</p>
                  <p style={{ fontSize: "0.875rem", color: "#4B5563", marginBottom: "0.75rem" }}>
                    {member.experience} experience
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "#1E40AF", color: "white" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Our Mission</h2>
              <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
                To be the leading construction company in our region by consistently delivering
                exceptional quality, innovative solutions, and unmatched customer service while
                building lasting relationships with our clients and community.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: "#F97316" }}>✔</span>
                  <span>Commitment to Excellence</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: "#F97316" }}>✔</span>
                  <span>Customer-Focused Approach</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: "#F97316" }}>✔</span>
                  <span>Community Partnership</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "0.5rem",
                  padding: "2rem",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                  Awards & Recognition
                </h3>
                <div style={{ lineHeight: "1.75" }}>
                  <p>🏆 Builder of the Year Finalist 2016</p>
                  <p>🏆 Excellence in Construction Award</p>
                  <p>🏆 Community Builder Award</p>
                  <p>🏆 Safety Excellence Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "#F97316", color: "white" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Ready to Work With Us?
          </h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Join the hundreds of satisfied clients who have trusted NH Constructions with their
            construction projects
          </p>
          <a
            href="/contact"
            style={{
              backgroundColor: "white",
              color: "#F97316",
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Start Your Project Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
