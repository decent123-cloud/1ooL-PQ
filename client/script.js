// ============================================================
// COMPLETE COURSE DATA WITH ORIGINAL QUESTIONS
// ============================================================
const courses = {
  // 100L
  phy102: [
    {
      number: 1,
      question: "Who demonstrated that thunderclouds are charged with electricity?",
      options: ["Isaac Newton", "Michael Faraday", "Benjamin Franklin", "James Clerk Maxwell"],
      answer: "Benjamin Franklin"
    },
    {
      number: 2,
      question: "What is the amount of electric current during the discharge that causes lightning?",
      options: ["2KA", "20KA", "200KA", "2000KA"],
      answer: "20KA"
    },
    {
      number: 3,
      question: "What is the temperature rise in a fraction of a second during a lightning discharge?",
      options: ["1500°C", "15000°C", "150000°C", "1500000°C"],
      answer: "150000°C"
    },
    {
      number: 4,
      question: "What is the width of the area where lightning develops?",
      options: ["2 cm", "20 cm", "200 cm", "2 m"],
      answer: "20 cm"
    },
    {
      number: 5,
      question: "What causes the sound that we hear as thunder?",
      options: ["The movement of air molecules due to heat", "The friction between clouds", "The splitting of clouds", "The falling of raindrops"],
      answer: "The movement of air molecules due to heat"
    },
    {
      number: 6,
      question: "What is the study of static electric charges called?",
      options: ["Electrodynamics", "Magnetostatics", "Electrostatics", "Thermodynamics"],
      answer: "Electrostatics"
    },
    {
      number: 7,
      question: "Which of the following is NOT a practical application of electrostatics?",
      options: ["Electrical prospecting for minerals", "Design of cathode ray tubes for television", "Electrostatic loudspeakers and microphones", "Design of internal combustion engines"],
      answer: "Design of internal combustion engines"
    },
    {
      number: 8,
      question: "What is the force that holds electrons to nuclei to form atoms?",
      options: ["Gravitational force", "Magnetic force", "Electrostatic force", "Nuclear force"],
      answer: "Nuclear force"
    },
    {
      number: 9,
      question: "What phenomenon causes the roaring sound of clouds?",
      options: ["The splitting of clouds", "The reflection of thunder by clouds, hills, or obstacles", "The collision of air molecules", "The cooling of the atmosphere"],
      answer: "The reflection of thunder by clouds, hills, or obstacles"
    },
    {
      number: 10,

      question: "Which of the following devices utilizes electrostatics in its operation?",
      options: ["Internal combustion engine", "Cathode ray tube", "Hydraulic pump", "Steam engine"],
      answer: "Cathode ray tube"
    },
    {
      number: 11,
      question: "Which part of the atom is positively charged?",
      options: ["Electron", "Neutron", "Proton", "Nucleus"],
      answer: "Proton"
    },

    {
      number: 12,
      question: "Who discovered that some substances exhibit electrical charge when rubbed?",
      options: ["Isaac Newton", "William Gilbert", "Charles Du Fay", "Michael Faraday"],
      answer: "William Gilbert"
    },
    {
      number: 13,
      question: "What type of charge does a glass rod acquire when rubbed with silk?",
      options: ["Positive", "Negative", "Neutral", "None of the above"],
      answer: "Positive"
    },
    {
      number: 14,
      question: "What happens when two ebonite rods rubbed with fur are brought close to each other?",
      options: ["They attract each other", "They repel each other", "They become neutral", "They have no effect on each other"],
      answer: "They repel each other"
    },
    {
      number: 15,
      question: "Which type of charge is associated with the electron?",
      options: ["Positive", "Negative", "Neutral", "None of the above"],
      answer: "Negative"
    },
    {
      number: 16,
      question: "What force holds the protons and neutrons together in the nucleus?",
      options: ["Gravitational force", "Magnetic force", "Nuclear force", "Electrical force"],
      answer: "Nuclear force"
    },
    {
      number: 17,
      question: "What are free electrons?",
      options: ["Electrons that are tightly bound to the nucleus", "Electrons that can move away from the atom", "Electrons that carry positive charge", "Electrons that are neutral"],
      answer: "Electrons that can move away from the atom"
    },
    {
      number: 18,
      question: "What happens to the wool when it is rubbed with a plastic ruler?",
      options: ["It gains electrons and becomes negatively charged", "It loses electrons and becomes positively charged", "It remains electrically neutral", "It repels the plastic ruler"],
      answer: "It loses electrons and becomes positively charged"
    },
    {
      number: 19,
      question: "What happens when two materials are rubbed together?",
      options: ["Electrons get transferred from one material to the other", "Protons get transferred from one material to the other", "Neutrons get transferred from one material to the other", "No charge transfer occurs"],
      answer: "Electrons get transferred from one material to the other"
    },
    {
      number: 20,
      question: "What type of charge does an object have when it has an equal amount of both types of charge?",
      options: ["Positive", "Negative", "Neutral", "Charged"],
      answer: "Neutral"
    },
    {
      number: 21,
      question: "What does the principle of superposition of forces state?",
      options: ["The force between two charges depends on their masses.", "The total force on a charge is the vector sum of individual forces exerted by other charges.", "The total force on a charge is the scalar sum of individual forces exerted by other charges.", "The force between two charges is independent of their distance."],
      answer: "The total force on a charge is the vector sum of individual forces exerted by other charges."
    },
    {
      number: 22,
      question: "The force on a charge due to multiple other charges is calculated by:",
      options: ["Adding the forces algebraically.", "Finding the scalar sum of all forces.", "Applying Coulomb’s law to each pair and summing the vectors.", "None of the above."],
      answer: "Applying Coulomb’s law to each pair and summing the vectors."
    },
    {
      number: 23,
      question: "What does an electric field represent?",
      options: ["The region of space where a magnetic force can be felt.", "The region of space where a charged particle experiences a force.", "The direction of motion of a charged particle.", "The energy possessed by a charged particle."],
      answer: "The region of space where a charged particle experiences a force."
    },
    {
      number: 24,
      question: "When another charged object enters an electric field, what happens?",
      options: ["It gains energy.", "It experiences an electric force.", "It loses charge.", "It remains unaffected."],
      answer: "It experiences an electric force."
    },
    {
      number: 25,
      question: "The direction of the electric field € at a point is:",
      options: ["Opposite to the direction of the electric force.", "Perpendicular to the direction of the electric force.",
        "Along the direction of the electric force.", "Independent of the direction of the electric force."],
      answer: "Along the direction of the electric force."
    },
    {
      number: 26,
      question: "In SI units, the electric field intensity is measured in:",
      options: ["Coulombs per newton (C/N).", "Newton per coulomb (N/C).", "Meter per Volt (M/V).", "Joules per coulomb (J/C)."],
      answer: "Newton per coulomb (N/C)."
    },
    {
      number: 27,
      question: "According to the text, the force between two charges ( q1 ) and ( q2 ) separated by distance ( r ) is given by:",
      options: ["F = (1 / 4πepsilon) * {|q1q2|}/{r^2}", "F = ( 1/ {4πepsilon} * {q1 + q2}{r}", "F = ( 1 / {4πepsilon} * {q1 – q2}/{r^2}", "F = k{q1 q2} + {r^2}"],
      answer: "F = (1 / 4πepsilon) * {|q1q2|}/{r^2}"
    },
    {
      number: 28,
      question: "What is the SI unit of electric field intensity?",
      options: ["Volt per meter (V/m)", "Newton per coulomb (N/C)", "Coulomb per meter (C/m)", "Joule per coulomb (J/C)"],
      answer: "Newton per coulomb (N/C)"
    },
    {
      number: 29,
      question: "Electric field intensity € is defined as:",
      options: ["The electric force experienced by a charge.", "The electric force per unit charge.", "The potential energy per unit charge.", "The electric potential difference."],
      answer: "The electric force per unit charge."
    },
    {
      number: 30,
      question: "If a charge (q2) is placed near another charge ( q1), the charges:",
      options: ["Always attract each other.", "Always repel each other.", "Interact through their electric fields.", "Do not interact."],
      answer: "Interact through their electric fields."
    },
    {
      number: 31,
      question: "What is electric flux a measure of?",
      options: ["The amount of charge in a region", "The strength of a magnetic field", "The number of electric field lines passing through a point or area", "The distance between electric field lines"],
      answer: "The number of electric field lines passing through a point or area"
    },
    {
      number: 32,
      question: "What happens to the electric flux through the surface of a box if a positive charge is placed inside it?",
      options: ["There is an inward flux of electric field.", "There is an outward flux of electric field.", "There is no electric flux.", "The flux becomes zero."],
      answer: "There is an outward flux of electric field."
    },
    {
      number: 33,
      question: "If a box contains both a positive and a negative charge, what is the net electric flux through the surface of the box?",
      options: ["Outward flux", "Inward flux", "No net flux", "The flux is infinite"],
      answer: "No net flux"
    },
    {
      number: 34,
      question: "If there is no charge inside an imaginary box, what is true about the electric flux through the box?",
      options: ["There is an inward flux.", "There is an outward flux.", "There is no electric flux.", "The flux is constant."],
      answer: "There is no electric flux."
    },
    {
      number: 35,
      question: "The electric flux, ΦE, is defined as the product of which two quantities?",
      options: ["Electric field, €, and the charge, (Q)", "Electric field, €, and the surface area, (A), perpendicular to the field", "Surface area, (A), and the distance between charges", "Electric potential, (V), and the surface area, (A)"],
      answer: "Electric field, €, and the surface area, (A), perpendicular to the field"
    },
    {
      number: 36,
      question: "Which of the following describes the electric flux through a surface when a negative charge is inside an imaginary box?",
      options: ["Outward flux", "Inward flux", "No flux", "Perpendicular flux"],
      answer: "Inward flux"
    },
    {
      number: 37,
      question: "When the plane surface is tilted with respect to the electric field, what is used to calculate the electric flux?",
      options: ["The area parallel to the electric field", "The area perpendicular to the electric field", "The total surface area of the box", "The distance from the charge to the surface"],
      answer: "The area perpendicular to the electric field"
    },
    {
      number: 38,
      question: "The term “flux” in the context of electric fields originally comes from a Latin word meaning what?",
      options: ["Flow", "Charge", "Field", "Area"],
      answer: "Flow"
    },
    {
      number: 39,
      question: "What can be said about the number of electric field lines per unit area?",
      options: ["It is inversely proportional to the electric field strength.", "It is directly proportional to the electric field strength.", "It remains constant regardless of the electric field strength.", "It is proportional to the distance from the charge."],
      answer: "It is directly proportional to the electric field strength."
    },
    {
      number: 40,
      question: "If the electric flux through a surface is zero, what can we infer about the charges inside the surface?",
      options: ["Only positive charges are present.", "Only negative charges are present.", "No charges are present, or the  net charge is zero.", "There are equal numbers of positive and negative charges."],
      answer: "No charges are present, or the net charge is zero."
    },
    {
      number: 41,
      question: "If the number of point charge is increases, the magnitude of the flux will also",
      options: ["Increases", "Decreases", "Remain the same", "Increases then decreases"],
      answer: "Increases"
    },
    {
      number: 42,
      question: "When electric field lines are parallel and equally spaced, the field is _____",
      options: ["Strong", "weak", "Uniform", "Attract"],
      answer: "Uniform"
    },
    {
      number: 43,
      question: "What is the nature of electric field lines around a negative charge?",
      options: ["They start from the charge.", "They terminate on the charge.", "They are circular.", "They are parallel to the charge."],
      answer: "They terminate on the charge."
    },
    {
      number: 44,
      question: "The flux is depending on the number of _____",
      options: ["Enclosed charge", "Enclosed surface", "Electron transferred", "Electric charge"],
      answer: "Enclosed charge"
    },
    {
      number: 45,
      question: "What is electric flux a measure of?",
      options: ["The amount of charge in a region", "The strength of a magnetic field", "The number of electric field lines passing through a point or area", "The distance between electric field lines"],
      answer: "The number of electric field lines passing through a point or area"
    },
    {
      number: 46,
      question: "What happens to the electric flux through the surface of a box if a positive charge is placed inside it?",
      options: ["There is an inward flux of electric field.", "There is an outward flux of electric field.", "There is no electric flux.", "The flux becomes zero."],
      answer: "There is an outward flux of electric field."
    },
    {
      number: 47,
      question: "If a box contains both a positive and a negative charge, what is the net electric flux through the surface of the box?", options: ["Outward flux", "Inward flux", "No net flux", "The flux is infinite"],
      answer: "No net flux"
    },
    {
      number: 48,
      question: "If there is no charge inside an imaginary box, what is true about the electric flux through the box?",
      options: ["There is an inward flux.", "There is an outward flux.", "There is no electric flux.", "The flux is constant."],
      answer: "There is no electric flux."
    },
    {
      number: 49,
      question: "The electric flux, ΦE, is defined as the product of which two quantities?",
      options: ["Electric field, €, and the charge, (Q)", "Electric field, €, and the surface area, (A), perpendicular to the field", "Surface area, (A), and the distance between charges", "Electric potential, (V), and the surface area, (A)"],
      answer: "Electric field, €, and the surface area, (A), perpendicular to the field"
    },
    {
      number: 50,
      question: "Which of the following describes the electric flux through a surface when a negative charge is inside an imaginary box?",
      options: ["Outward flux", "Inward flux", "No flux", "Perpendicular flux"],
      answer: "Inward flux"
    },
    {
      number: 51,
      question: "Gauss’s law states that the total electric flux through any closed surface is proportional to:",
      options: ["The surface area of the closed surface", "The total (net) electric charge inside the surface", "The distance from the charge to the surface", "The magnitude of the electric field outside the surface"],
      answer: "The total (net) electric charge inside the surface"
    },
    {
      number: 52,
      question: "Which of the following can Gauss’s law help us understand?",
      options: ["The behavior of magnetic fields in a vacuum", "How electric charge distributes itself over conducting bodies", "The flow of current through a resistor", "The propagation of light waves through a medium"],
      answer: "How electric charge distributes itself over conducting bodies"
    },
    {
      number: 53,
      question: "The magnitude of the electric field E at every point on the surface of a sphere with a positive point charge at the center is determined using:",
      options: ["Coulomb’s law", "Faraday’s law", "Gauss’s law", "Ampère’s law"],
      answer: "Gauss’s law"
    },
    {
      number: 54,
      question: "A Gaussian surface is:",
      options: ["An open surface used to measure magnetic flux", "A closed surface used to calculate electric flux", "A flat surface used in optics", "A curved surface in wave theory"],
      answer: "A closed surface used to calculate electric flux"
    },
    {
      number: 55,
      question: "When a charged body in an electric field moves to the position where its potential energy is smaller, this is analogous to:",
      options: ["A body moving upwards in a gravitational field", "A body moving to the position where its gravitational potential energy is maximum", "A body moving to the position where its gravitational potential energy is zero", "A body rotating in a circular"],
      answer: "A body moving to the position where its gravitational potential energy is maximum"
    },
    {
      number: 56,
      question: "Gauss’s law simplifies problems that have:",
      options: ["No symmetry", "Low degree of symmetry", "A high degree of symmetry", "No relation to symmetry"],
      answer: "A high degree of symmetry"
    },
    {
      number: 57,
      question: "The electric flux through a closed surface depends on:",
      options: ["The net electric charge inside the surface", "The shape of the surface", "The temperature of the surface",
        "The material of the surface"],
      answer: "The net electric charge inside the surface"
    },
    {
      number: 58,
      question: "The electric field inside a conductor in electrostatic equilibrium is:",
      options: ["Zero", "Uniform", "Maximum", "Constant and non-zero"],
      answer: "Zero"
    },
    {
      number: 59,
      question: "If the radius of a spherical Gaussian surface is increased, the electric flux through the surface due to a point charge at the center:",
      options: ["Increases", "Decreases", "Remains the same", "Depends on the material of the sphere"],
      answer: "Remains the same"
    },
    {
      number: 60,
      question: "The potential energy of a charged body in an electric field will tend to:",
      options: ["Increase as the body moves to a position of lower potential", "Decrease as the body moves to a position of lower potential", "Remain constant as the body moves within the field", "Be independent of the body’s position in the field"],
      answer: "Decrease as the body moves to a position of lower potential"
    },
    {
      number: 61,
      question: "Which law is logically equivalent to Gauss’s law but is generally used for calculating the electric field due to point charges?",
      options: ["Coulomb’s law", "Ampère’s law", "Faraday’s law", "Ohm’s law"],
      answer: "Coulomb’s law"
    },
    {
      number: 62,
      question: "In an electric field, the potential energy of a charged particle is most closely related to:",
      options: ["The mass of the particle", "The charge of the particle", "The velocity of the particle", "The acceleration of the particle"],
      answer: "The charge of the particle"
    },
    {
      number: 63,
      question: "When a body is raised above the Earth’s surface, it acquires potential energy. Similarly, a charged body in an electric field acquires:",
      options: ["Kinetic energy", "Electric potential energy", "Magnetic potential energy", "Thermal energy"],
      answer: "Electric potential energy"
    },
    {
      number: 64,
      question: "In the analogy between gravitational potential energy and electric potential energy, the position of the charged particle in the electric field is comparable to:",
      options: ["The mass of the object", "The speed of the object", "The height of the object above the Earth’s surface",
        "The temperature of the object"],
      answer: "The height of the object above the Earth’s surface"
    },
    {
      number: 65,
      question: "In which direction does a positive charge move in an electric field?",
      options: ["Against the direction of the electric field", "In the direction of the electric field", "Perpendicular to the electric field", "Randomly"],
      answer: "In the direction of the electric field"
    },
    {
      number: 66,
      question: "What happens to the potential energy of a positive charge as it moves away from a positively charged plate?",
      options: ["It increases", "It decrease", "It remains the same", "It becomes zero"],
      answer: "It increases"
    },
    {
      number: 67,
      question: "How is the electric potential at a point in a field defined?",
      options: ["Force per unit charge at that point", "Work done per unit charge moving from infinity to that point", "Energy per unit charge at that point", "Distance per unit charge from the sources"],
      answer: "Work done per unit charge moving from infinity to that point"
    },
    {
      number: 68,
      question: "What is the significance of the choice of the zero of potential?",
      options: ["It must always be at infinity", "It is purely arbitrary", "It must always be at the origin of the field", "It is fixed for all electric fields"],
      answer: "It is purely arbitrary"
    },
    {
      number: 69,
      question: "In atomic physics, where distances of 10^{-10} m are involved, how far might “infinity” be considered?",
      options: ["A few centimeters away", "A few kilometers away", "Only a small distance away from the charge responsible for the field", "A few meters away"],
      answer: "Only a small distance away from the charge responsible for the field"
    },
    {
      number: 70,
      question: "The potential energy (U) associated with a test charge (Q) in an electric field can be described on what basis?",
      options: ["Per unit volume", "Per unit charge", "Per unit force", "Per unit distance"],
      answer: "Per unit charge"
    },
    {
      number: 71,
      question: "What is the electric potential (V) at a point in an electric field defined as?",
      options: ["Force per unit charge at that point", "Work done per unit charge moving from infinity to that point",
        "Potential energy per unit charge associated with a test charge at that point", "Distance per unit charge from the source"],
      answer: "Potential energy per unit charge associated with a test charge at that point"
    },
    {
      number: 72,
      question: "The SI unit of electric potential is the volt (V). One volt is equivalent to:",
      options: ["1 joule per coulomb (1 J/C)", "1 newton per coulomb (1 N/C)", "1 coulomb per joule (1 C/J)", "1 watt per coulomb (1 W/C)"],
      answer: "1 joule per coulomb (1 J/C)"
    },
    {
      number: 73,
      question: "What is the advantage of calculating the electric potential before determining the electric field?",
      options: ["It makes field calculations unnecessary", "It simplifies the calculation of electric fields", "It is a more accurate method", "It is a required step in all electric field calculations"],
      answer: "It simplifies the calculation of electric fields"
    },
    {
      number: 74,
      question: "If the electrostatic force between two equally charged bodies separated by a distance of 0.5 m is 36 x 10 N, what is the charge on each body?",
      options: ["2 C", "1 C", "3 C", "4 C"],
      answer: "1 C"
    },
    {
      number: 75,
      question: "The region where a charged body experiences an electric force is called ________",
      options: ["Force field", "Magnetic field", "Gravitational field", "Electric field"],
      answer: "Electric field"
    },
    {
      number: 76,
      question: "Electric field is a _____________",
      options: ["Vector field", "Scalar field", "None of the above", "All of the above"],
      answer: "Vector field"
    },
    {
      number: 77,
      question: "Which of the following statements is correct?",
      options: ["The field about an isolated positive charge is radially inward while the field about a negative charge is radially outward", "The field about an isolated positive charge and isolated negative charge is both radially inward",
        "The field about an isolated positive charge and isolated negative charge is both radially outward", "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"],
      answer: "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"
    },
    {
      number: 78,
      question: "What is the magnitude of the electric field at a field point 2.0 m from a point charge q = 4.0 nC?",
      options: ["18.0 N/C", "9.0 N/C", "36.0 N/C", "6.0 N/C"],
      answer: "9.0 N/C"
    },
    {
      number: 79,
      question: "The total electric field at a point P is the vector sum of the fields at P due to each point charge in the charge distribution. This is the principle of:",
      options: ["Superposition of electric field", "Norton’s theory", "Coulomb’s rule", "Linear charge density"],
      answer: "Superposition of electric field"
    },
    {
      number: 80,
      question: "The imaginary line or curve drawn through a region of space so that its tangent at any point is in the direction of the electric field vector at the point, is called __________",
      options: ["Vector line", "Electrostatic line", "Electric field line", "Latitude"],
      answer: "Electric field line"
    },
    {
      number: 81,
      question: "Calculate the electric field intensity at a point 15 cm from a charge of 10 μC",
      options: ["4 x 10^6 N/C", "4 x 10^-6 N/C", "6 x 10^-6 N/C", "6 x 10^6 N/C"],
      answer: "4 x 10^6 N/C"
    },
    {
      number: 82,
      question: "Electrostatic forces are governed by a simple relationship known as",
      options: ["Ohm’s law", "Newton’s law", "Coulomb’s law", "Faraday’s law"],
      answer: "Coulomb’s law"
    },
    {
      number: 83,
      question: "Electric charges at rest is referred to as",
      options: ["electric current", "electrostatic", "electric field", "Rest charge"],
      answer: "electrostatic"
    },
    {
      number: 84,
      question: "Which of the following statements is correct?",
      options: ["Two negative charges or two positive charges repel each other", "Two negative charges or two positive charges attract each other", "A positive charge and a negative charge repel each other", "A positive charge attracts another positive charge but repel a negative charge"],
      answer: "Two negative charges or two positive charges attract each other"
    },
    {
      number: 85,
      question: "Which of the following cannot be found in the nucleus of an atom?",
      options: ["Proton", "electron", "neutron", "none of the above"],
      answer: "electron"
    },
    {
      number: 86,
      question: "A neutral atom has as many electrons as it does protons",
      options: ["True", "False", "Can’t say"],
      answer: "True"
    },
    {
      number: 87,
      question: "When an atom loses an electron, it becomes _______________",
      options: ["Positively charged", "Negatively charged", "Neutral atom", "An electron"],
      answer: "Positively charged"
    },
    {
      number: 88,
      question: "The principle of conservation of charges state that",
      options: ["The force of attraction between two charges is directly proportional to the square of their distance apart", "The force of repulsion between two charges is inversely proportional to the square of their distance apart", "The magnitude of charge of the electron is a natural unit of electric field intensity", "The algebraic sum of all the electric charges in any closed system is constant"],
      answer: "The algebraic sum of all the electric charges in any closed system is constant"
    },
    {
      number: 89,
      question: "When the distance r between two charged bodies doubles, the force",
      options: ["Increases to one-quarter of its initial value", "Decreases to one-quarter of its initial value", "Increases to one-half of its initial value", "Decreases to one-half of its initial value"],
      answer: "Decreases to one-quarter of its initial value"
    },
    {
      number: 90,
      question: "Coulomb’s law state that",
      options: ["The magnitude of the electric force between two point charges is directly proportional to the sum of the charges and inversely proportional to the square of the distance between them", "The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them", "The magnitude of the electric force between two point charges is directly proportional to the sum of the charges and inversely proportional to the distance between them", "The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them"],
      answer: "The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them"
    },
    {
      number: 91,
      question: "The electrostatic force between two charges is 120 N. if the distance between the charges is doubled, what will be the value of the force?",
      options: ["10 N", "25 N", "40 N", "30 N"],
      answer: "30 N"
    },
    {
      number: 92,
      question: "How many electrons must be placed on each of two small spheres placed 3 cm apart if the force of repulsion between them is to be 10^-19 N?",
      options: ["526", "625", "225", "525"],
      answer: "625"
    },
    {
      number: 93,
      question: "The magnitude of the torque depends on the angle Փ between the electric dipole moment and",
      options: ["Electric field", "Nuclear field", "Magnetic field", "Electric current"],
      answer: "Electric field"
    },
    {
      number: 94,
      question: "The potential energy U for a dipole in an electric field is given by",
      options: ["U = - P ᵒ E", "U = - P ᵒ q", "U = - P ᵒ Փ", "U = - qE"],
      answer: "U = - P ᵒ E"
    },
    {
      number: 95,
      question: "A charge of 1.0 x 10^-5 C experiences a force of 4 N at a certain point in space. What is the electric field intensity?",
      options: ["4.0 x 10^5 N/C", "4.0 x 10^-5 N/C", "6.0 x 10^5 N/C", "6.0 x 10^-5 N/C"],
      answer: "4.0 x 10^5 N/C"
    },
    {
      number: 96,
      question: "The gain or loss of electrons in an atom is called",
      options: ["Reduction", "Electronegativity", "Protonation", "Ionization"],

      answer: "Ionization"
    },
    {
      number: 97,
      question: "Calculate the electric field intensity in vacuum at a distance of 10 cm from a charge of 5 x 10^-4 C",
      options: ["4.5 x 10^8 N/C", "4.5 x 10^7 N/C", "4.5 x 10^6 N/C", "4.5 x 10^5 N/C"],
      answer: "4.5 x 10^8 N/C"
    },
    {
      number: 98,
      question: "Rubber band and nylon are examples of",
      options: ["Insulators", "Conductors", "Semiconductors", "Metals"],
      answer: "Insulators"
    },
    {
      number: 99,
      question: "The act of charging a metal ball using a copper wire and an electrically charged plastic rod in which the plastic rod can give the other body a Charge of opposite sign without losing any of its own charge is known as charging by",
      options: ["Conduction", "Friction", "Induction", "Distortion"],
      answer: "Induction"
    },
    {
      number: 100,
      question: "The deficiency or excessiveness of an electron in an atom is known as",
      options: ["Coulomb", "Current", "Electrostatic", "Electric charge"],
      answer: "Electric charge"
    },
    {
      number: 101,
      question: "If 10 electrons are placed on an uncharged metallic sphere, how much electric charge is on the sphere?",
      options: ["1.6 C", "1.5 C", "1.7 C", "6.0 C"],
      answer: "1.6 C"
    },
    {
      number: 102,
      question: "Two-point charges q1 = +25 nC and q2 = -75 nC are separated by a distance r = 3.0 cm. find the magnitude of the force that q1 exert on q2.",
      options: ["0.0019 N", "0.19 N", "0.0019 N", "0.019 N"],
      answer: "0.019 N"
    },
    {
      number: 103,
      question: "The simplest atom is the hydrogen atom and it contains",
      options: ["1 proton in its nucleus balanced by 2 electrons orbiting the nucleus", "1 proton in it’s nucleus balanced by 1 electron", "2 proton in it’s nucleus balanced by 1 electron", "2 proton in it’s nucleus balanced by 2 electron"],
      answer: "1 proton in it’s nucleus balanced by 1 electron"
    } // ... all your 103 questions and answers here
  ],
  mat101: [
    {
      number: 1,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑝2−9.",
      options: ["6", "5", "−6", "5"],
      answer: "5"
    },
    {
      number: 2,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝛽2+5𝛽+4.",
      options: ["2", "5", "−3", "5"],
      answer: "5"
    },
    {
      number: 3,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 lim.",
      options: ["1", "−1"],
      answer: "1"
    },
    {
      number: 4,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["−1", "2", "5", "2"],
      answer: "2"
    },
    {
      number: 5,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 2𝑦2+1.",
      options: ["−4", "3", "3"],
      answer: "3"
    },
    {
      number: 6,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓(3+𝑘)−1−3−1",
      options: ["−1", "3", "1", "3"],
      answer: "1"
    },
    {
      number: 7,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑦2−3𝑦−4.",
      options: ["−5", "3", "4"],
      answer: "4"
    },
    {
      number: 8,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓(3+𝑘)−1−3−1",
      options: ["−1", "3", "1", "3"],
      answer: "1"
    },
    {
      number: 9,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑦2−3𝑦−4𝑦−4",
      options: ["−5", "3", "4"],
      answer: "4"
    },
    {
      number: 10,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝜆4−16𝜆−2",
      options: ["−5", "3", "4"],
      answer: "4"
    },
    {
      number: 11,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑥2−3𝑥−4",
      options: ["5", "−5", "−1"],
      answer: "−5"
    },
    {
      number: 12,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑏2−7𝑏+12𝑏−4",
      options: ["−1", "1", "4"],
      answer: "1"
    },
    {
      number: 13,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["6", "−6", "1", "−1"],
      answer: "6"
    },
    {
      number: 14,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑔(𝑡) = 𝑡2−4𝑡−2",
      options: ["−2", "−1", "1", "2"],
      answer: "−2"
    },
    {
      number: 15,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["5", "−3", "−1", "4"],
      answer: "−1"
    },
    {
      number: 16,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["1", "4", "−1", "−4"],
      answer: "−4"
    },
    {
      number: 17,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→2 𝑥2−𝑥−2 𝑥−2",
      options: ["1", "4", "−1", "−4"],
      answer: "−4"
    },
    {
      number: 18,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→2 𝑥2+𝑥−6 𝑥−2",
      options: ["1", "5", "−5", "−1"],
      answer: "5"
    },
    {
      number: 19,
      question: "𝐶𝑜𝑚𝑝𝑢𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 (3+𝑥)2−9 𝑥 as 𝑥→0",
      options: ["−6", "6", "5", "−5"],
      answer: "6"
    },
    {
      number: 20,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 ℎ(𝑥)=𝑥2−1 𝑥−1 𝑎𝑠 𝑥→1",
      options: ["2", "−2", "1", "−1"],
      answer: "2"
    },
    {
      number: 21,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑎𝑠 𝑠𝑖𝑛5𝜃 𝑠𝑖𝑛7𝜃 as 𝜃 𝑡𝑒𝑛𝑑𝑠 𝑡𝑜 0",
      options: ["0", "−5/7", "∞", "5/7"],
      answer: "−5/7"
    },
    {
      number: 22,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑛→−4 (1 4+1 𝑥 𝑥+4 )",
      options: ["−1/16", "−1/8", "−1/4", "−1/2"],
      answer: "−1/4"
    },
    {
      number: 23,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→0 (1 𝑡 − 1 𝑡2+𝑡 )",
      options: ["2", "−2", "1", "−1"],
      answer: "−1"
    },
    {
      number: 24,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→1 ( 𝑙𝑛𝑥 𝑥2+𝑥−2 )",
      options: ["−1/3", "1/3", "−1/9", "1/9"],
      answer: "−1/3"
    },
    {
      number: 25,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑦→2 (𝑦2−𝑦−2 𝑦−2 )",
      options: ["0", "2", "3", "6"],
      answer: "0"
    },
    {
      number: 26,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (𝑥3 𝑥−𝑠𝑖𝑛𝑥 )",
      options: ["0", "undefined", "3", "6"],
      answer: "0"
    },
    {
      number: 27,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→4 (𝑥2−𝑥−12 𝑥−4 )",
      options: ["0", "1", "−7", "7"],
      answer: "1"
    },
    {
      number: 28,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑝→3 (𝑝2−9 𝑝−3 )",
      options: ["−3", "6", "3", "−6"],
      answer: "6"
    },
    {
      number: 29,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑎→4 (𝑎2−7𝑎+12 𝑎−4 )",
      options: ["2", "4", "1", "−1"],
      answer: "1"
    },
    {
      number: 30,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (𝑥4−81 𝑥2−9 )",
      options: ["3", "9", "18", "81"],
      answer: "18"
    },
    {
      number: 31,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→∞ ( 𝑡3+5𝑡 2𝑡3−𝑡2+4 )",
      options: ["1", "16", "8", "4"],
      answer: "1"
    },
    {
      number: 32,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑦→−2 (√𝑦4+3𝑦+6)",
      options: ["2", "4", "−4", "−2"],
      answer: "2"
    },
    {
      number: 33,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓𝑝2+5𝑝+4 𝑎𝑠 𝑝 →−5",
      options: ["3", "5", "2", "3"],
      answer: "−3"
    },
    {
      number: 34,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓𝑥2−3𝑥+52𝑥2+𝑥−1.",
      options: ["1", "16", "4", "8"],
      answer: "4"
    },
    {
      number: 35,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→−4 (𝑡2−16𝑡+4)",
      options: ["−4", "4", "5", "−5"],
      answer: "−4"
    },
    {
      number: 36,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→0 (1/𝑡 − 1/(𝑡2+𝑡))",
      options: ["2", "−2", "1", "−1"],
      answer: "−1"
    },
    {
      number: 37,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (√𝑥−1)/(𝑥−3)",
      options: ["1", "√3", "−1", "−√3"],
      answer: "−√3"
    },
    {
      number: 38,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→2 (2𝑡2+1)/(𝑡−2)",
      options: ["4", "3", "−3", "2"],
      answer: "4"
    },
    {
      number: 39,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→2 (𝑡2−4)/(𝑡−2)",
      options: ["−2", "2", "4", "8"],
      answer: "4"
    },
    {
      number: 40,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑦→0 ((3+𝑦)2−9)/𝑦",
      options: ["0", "6", "1", "−1"],
      answer: "6"
    },
    {
      number: 41,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (𝑥4−81)/(𝑥−3)",
      options: ["9", "18", "81", "108"],
      answer: "18"
    },
    {
      number: 42,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝛼→2 (𝛼4−16)",
      options: ["8", "16", "32", "64"],
      answer: "32"
    },
    {
      number: 43,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→∞ (𝑒3𝑥 − 𝑒−5𝑥)/(3𝑥2−𝑥−2)",
      options: ["0", "6", "1", "−1"],
      answer: "0"
    },
    {
      number: 44,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 ((𝑥+ℎ)2 − 𝑥2)/ℎ",
      options: ["0", "2", "1", "−1"],
      answer: "2"
    },
    {
      number: 45,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (1−𝑐𝑜𝑠𝑥)/(2𝑥𝑠𝑖𝑛𝑥)",
      options: ["0", "2", "1", "−1"],
      answer: "1"
    },
    {
      number: 46,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→2 (𝑡2−4)/(𝑡−2)",
      options: ["−2", "2", "4", "8"],
      answer: "4"
    },
    {
      number: 47,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (𝑥4−81)/(𝑥−3)",
      options: ["9", "18", "81", "108"],
      answer: "18"
    },
    {
      number: 48,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→∞ (5𝑥2+4𝑥+1)/(𝑒3𝑥 − 𝑒−5𝑥)",
      options: ["0", "6", "1", "−1"],
      answer: "0"
    },
    {
      number: 49,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (𝑥3−𝑥)/(𝑥2−1)",
      options: ["0", "2", "1", "−1"],
      answer: "0"
    },
    {
      number: 50,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (𝑥2−4)/(𝑥−2)",
      options: ["−2", "2", "4", "8"],
      answer: "4"
    },
    {
      number: 51,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑦 = 𝑚(𝑥)𝑛(𝑥)𝑛𝑑𝑚+𝑚𝑑𝑛.",
      options: ["𝑛𝑚𝑛−1", "𝑚𝑛𝑚−1", "𝑚𝑛", "𝑛𝑚"],
      answer: "𝑛𝑚𝑛−1"
    },
    {
      number: 52,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑦 = 5𝑥3 + 3𝑥2 − 2𝑥 + 7",
      options: ["15𝑥2 + 6𝑥 − 2", "15𝑥2 + 6𝑥 + 2", "15𝑥2 − 6𝑥 − 2", "15𝑥2 − 6𝑥 + 2"],
      answer: "15𝑥2 + 6𝑥 − 2"
    },
    {
      number: 53,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑓𝑖𝑟𝑠𝑡 𝑑𝑒𝑟𝑖𝑣𝑎𝑡𝑖𝑣𝑒 𝑜𝑓(4𝑥 −3)5",
      options: ["5(4𝑥 −3)4", "10(4𝑥 − 3)4", "20(4𝑥 − 3)4", "−10(4𝑥 − 3)4"],
      answer: "20(4𝑥 − 3)4"
    },
    {
      number: 54,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑦 = 7𝑥4 − 3𝑥3 + 2𝑥2 − 5",
      options: ["28𝑥3 − 9𝑥2 + 4𝑥", "28𝑥3 − 9𝑥2 − 4𝑥", "28𝑥3 + 9𝑥2 + 4𝑥", "28𝑥3 + 9𝑥2 − 4𝑥"],
      answer: "28𝑥3 − 9𝑥2 + 4𝑥"
    },
    {
      number: 55,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑦 = 4𝑥3 + 2𝑥2 − 6𝑥 + 9",
      options: ["12𝑥2 + 4𝑥 − 6", "12𝑥2 + 4𝑥 + 6", "12𝑥2 − 4𝑥 − 6", "12𝑥2 − 4𝑥 + 6"],
      answer: "12𝑥2 + 4𝑥 − 6"
    },
    {
      number: 56,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑦 = 𝑎𝑥𝑛,𝑦′ =",
      options: ["𝑎𝑛𝑥𝑛−1", "𝑎𝑛𝑥𝑛", "𝑎𝑛𝑥𝑛+1", "𝑛𝑎𝑥𝑛−1"],
      answer: "𝑛𝑎𝑥𝑛−1"
    },
    {
      number: 57,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑥, 𝑒𝑠𝑖𝑛2𝑥",
      options: ["2𝑐𝑜𝑠2𝑥𝑒𝑐𝑜𝑠2𝑥", "2𝑐𝑜𝑠2𝑥𝑒𝑠𝑖𝑛2𝑥", "2𝑠𝑖𝑛2𝑥𝑒𝑐𝑜𝑠2𝑥", "2𝑐𝑜𝑠2𝑥𝑒𝑠𝑖𝑛2𝑥"],
      answer: "2𝑐𝑜𝑠2𝑥𝑒𝑠𝑖𝑛2𝑥"
    },
    {
      number: 58,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑥, 5𝑥3 + 3𝑥2 − 2",
      options: ["15𝑥2 + 6𝑥", "15𝑥2 + 6", "15𝑥2 − 6", "15𝑥2 − 6𝑥"],
      answer: "15𝑥2 + 6𝑥"
    },
    {
      number: 59,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑥, 𝑙𝑛𝑐𝑜𝑠3𝑥",
      options: ["−𝑡𝑎𝑛3𝑥", "−3𝑡𝑎𝑛3𝑥", "−𝑐𝑜𝑡3𝑥", "−3𝑐𝑜𝑡3𝑥"],
      answer: "−𝑡𝑎𝑛3𝑥"
    },
    {
      number: 60,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡 𝑡𝑜 𝑥, 3𝑥4 − 5𝑥3 + 2",
      options: ["12𝑥3 − 15𝑥2", "12𝑥3 − 15𝑥", "12𝑥3 + 15𝑥2", "12𝑥3 + 15𝑥"],
      answer: "12𝑥3 − 15𝑥2"
    },
    {
      number: 61,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡 𝑡𝑜 𝑥, 7𝑥5 + 4𝑥3 − 2",
      options: ["35𝑥4 + 12𝑥2", "35𝑥4 + 12𝑥", "35𝑥4 − 12𝑥2", "35𝑥4 − 12𝑥"],
      answer: "35𝑥4 + 12𝑥2"
    },
    {
      number: 62,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑝𝑥𝑚,𝑓𝑖𝑛𝑑 𝑦𝑖𝑣 𝑤ℎ𝑒𝑛 𝑚 = 5. ",
      options: ["60𝑝𝑥", "60𝑝𝑥2", "120𝑝𝑥", "120𝑝𝑥2"],
      answer: "120𝑝𝑥"
    },
    {
      number: 63,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑢 = 𝑣𝑢, 𝑓𝑖𝑛𝑑 𝑦′",
      options: ["𝑣𝑑𝑢", "𝑢𝑑𝑣", "𝑑𝑢𝑣", "𝑑𝑣𝑢"],
      answer: "udv"
    },
    {
      number: 64,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑦 = 𝑥2 +𝑦2,𝑓𝑖𝑛𝑑 𝑦′ 𝑎𝑡 𝑥 = 3,𝑦 = 2",
      options: ["−3", "−2", "2", "3"],
      answer: "−2"
    },
    {
      number: 65,
      question: "find the third derivative of y = bxm",
      options: ["bm(m−1)(m−2)x m−2", "b(m−1)xb−2", "bm(m −1)(m −2)x m−3", "bm(m −1)(m−2)x (m−1 )(m−2)"],
      answer: "bm(m −1)(m −2)x m−3"
    },
    {
      number: 66,
      question: "The trigonometric function secx is defined by",
      options: ["1/sinx", "1/cosx", "1/tanx", "1/cotx"],
      answer: "1/cosx"
    },
    {
      number: 67,
      question: "x3 + y3 + 4xy2 = 7",
      options: ["−(4x2 + 3y2)", "1", "secx", "tanx"],
      answer: "−(4x2 + 3y2)"
    },
    {
      number: 68,
      question: "Find dy/dx if y=ln(3−4cosx)",
      options: ["4sinx/(3−4cosx)", "−sinx/(3−4cosx)", "1/(3−4cosx)", "4logxsinx"],
      answer: "4sinx/(3−4cosx)"
    },
    {
      number: 69,
      question: "Find y′ if y=sin(x+2)",
      options: ["5cos(5x+2)", "−5cos(5x+2)", "5sin(5x+2)", "−5sin(5x+2)"],
      answer: "5cos(5x+2)"
    },
    {
      number: 70,
      question: "Find y′ if y=cos(7x+2)",
      options: ["−7sin(7x+2)", "−7sin(7x−2)", "28sin(7x+2)", "28sin(7x−2)"],
      answer: "−7sin(7x+2)"
    },
    {
      number: 71,
      question: "Differentiate cos(2x+5)",
      options: ["−2sin(2x+5)", "−2sin(2x−5)", "−10sin(2x+5)", "−sin(2x+5)"],
      answer: "−2sin(2x+5)"
    },
    {
      number: 72,
      question: "Find the first derivative of ln(x2)",
      options: ["2/x3", "2/x2", "2/x", "−2/x2"],
      answer: "2/x"
    },
    {
      number: 73,
      question: "Find y′ if y=sin2(5x)",
      options: ["10sin(5x)cos(5x)", "10sin(5x)sin(5x)", "5sin(5x)cos(5x)", "5sin(5x)sin(5x)"],
      answer: "10sin(5x)cos(5x)"
    },
    {
      number: 74,
      question: "If y=x3, find dy/dx",
      options: ["3x2", "3x3", "1/3x2", "1/3x1"],
      answer: "3x2"
    },
    {
      number: 75,
      question: "Given x2+2y2=10, find dy/dx",
      options: ["−x/y", "x/y", "−y/x", "y/x"],
      answer: "−x/y"
    },
    {
      number: 76,
      question: "Given x2+2xy+3y2=9, find dy/dx",
      options: ["(2x−y)/(3x−y)", "(x+3y)/(x+y)", "−(x+y)/(x+3y)", "−(x+3y)/(x+y)"],
      answer: "(2x−y)/(3x−y)"
    },
    {
      number: 77,
      question: "Differentiate x2 x-2 with respect to x",
      options: ["x(x−4)/(x−2)2", "x(4−x)/(x−2)2", "−x(x+4)/(x−2)2", "x(x+4)/(x−2)2"],
      answer: "x(x−4)/(x−2)2"
    },
    {
      number: 78,
      question: "Find the third derivative of lnx",
      options: ["2/x3", "2/x2", "2/x", "1/x2"],
      answer: "2/x3"
    },
    {
      number: 79,
      question: "Find the second derivative of y=x4",
      options: ["12x2", "12x3", "6x", "6x2"],
      answer: "12x2"
    },
    {
      number: 80,
      question: "Find dy/dx if y= x2tanx",
      options: ["x2(sec2x + 2tanx)", "x2(sec2x + 2x)", "2x(sec2x + 2tanx)", "2x(sec2x + 2x)"],
      answer: "x2(sec2x + 2tanx)"
    },
    {
      number: 81,
      question: "Differentiate with respect to x, x1/4",
      options: ["1/4x1/2", "1/4x−3/4", "1/4x−1/4", "1/2x−1/4"],
      answer: "1/4x−3/4"
    },
  ],
  phy123: [
    {
      number: 1,
      question: "The magnitude of the torque depends on the angle  Φ between the electric dipole moment and ------------",
      options: ["Electric field", "Magnetic field", "Nuclear field", "Electric current"],
      answer: "Electric field"
    },
    {
      number: 2,
      question: "The potential energy U for a dipole in an electric field is given by",
      options: ["U=-P o   E", "U = -P o q", "U = -qE", "U = -P o Φ"],
      answer: "U = -P o E"
    },
    {
      number: 3,
      question: "A charge of 1.0 x 105 C experiences a force of a 4N at a certain point in space. What is the electric field intensity?",
      options: ["4.0 x 105 N/C", "4.0 x 10-5 N/C", "6.0 x 10-2 N/C", "6.0 x 102 N/C"],
      answer: "4.0 x 10-5 N/C"
    },
    {
      number: 4,
      question: "The gain or loss of electrons in an atom is called",
      options: ["reduction", "electronegativity", "protonation", "induction"],
      answer: "induction"
    },
    {
      number: 5,
      question: "Calculate the electric field intensity in vacuum at a distance of 10cm from a charge of 5 x 10-4C",
      options: ["4.5 x 108 N/C", "4.5 x 107 N/C", "4.5 x 105 N/C", "4.5 x 10-8 N/C"],
      answer: "4.5 x 108 N/C"
    },
    {
      number: 6, question: "Rubber band and nylon are examples of",
      options: ["Insulator", "conductors",
        "semiconductors", "metals"],
      answer: "Insulator"
    },
    {
      number: 7,
      question: "The act of charging a metal ball using a copper wire and an electrically charged plastic rod in which the plastic rod can give the other body a charge of opposite sign without losing any of its own charge is known as charging by",
      options: ["conduction", "friction", "induction", "distortion"],
      answer: "induction"
    },
    {
      number: 8,
      question: "The deficiency or excessiveness of an electron in an atom is known as",
      options: ["coulomb", "current", "electrostatic", "electric charge"],
      answer: "electric charge"
    },
    {
      number: 9,
      question: "If 1019 electrons are placed on an uncharged metallic sphere, how much electric charge is on the sphere?",
      options: ["1.6C", "1.5C", "1.7C", "6.0C"],
      answer: "1.6C"
    },
    {
      number: 10,
      question: "Two-point charges q1 = +25 nC and q2 = -75 nC are separated by a distance r = 3.0cm. find the magnitude of the force that q1 exerts on q2",
      options: ["0.0019N", "0.19N", "0.0019N", "0.019N"],
      answer: "0.019N"
    },
    {
      number: 11,
      question: "The simplest atom is the hydrogen atom and it contains",
      options: ["1 proton in its nucleus balanced by 2 electrons orbiting the nucleus", "1 proton in its nucleus balanced by 1 electron orbiting its nucleus", "1 proton in its nucleus balanced by 3 electrons orbiting its nucleus", "1 proton in its nucleus balanced by 4 electrons orbiting the nucleus"],
      answer: "1 proton in its nucleus balanced by 1 electron orbiting its nucleus"
    },
    {
      number: 12,
      question: "If an atom loses one or more electrons in its outer shells, the protons outnumber the electrons so that the atom carries a net positive electric charge. In this condition, the atom is called a positive ion. If an atom gains electron, its net electric charge becomes negative. The atom then is called a negative ion. The process by which atoms gain or lose electrons is called",
      options: ["Ionization", "protonation", "reduction", "addition"],
      answer: "Ionization"
    },
    {
      number: 13,
      question: "A dielectric material has a negative charge of 12.5 x 1018 electrons (1 C = 6.25 x 1018 electrons). What is its charge in coulombs?",
      options: ["-Q=2 C", "-Q = 1 C", "-Q = 1.5 C", "-Q = 2.5 C"],
      answer: "-Q = 2 C"
    },
    {
      number: 14,
      question: "If a current of 2 A flows through a meter for 1 minute, how many coulombs pass through the meter? [Hint: 1 A is 1 C per second (C/s)]"
      ,
      options: ["120 C", "100 C", "60 C", "180 C"],
      answer: "120 C"
    },
    {
      number: 15,
      question: "The ability of a charge to do work is called its",
      options: ["energy", "force", "potential"
        , "electric field"],
      answer: "potential"
    },
    {
      number: 16,
      question: "Two charges are located on the x – axis with q1 = 2.3 x 10-8 C at the origin and with q2 = -5.6 x 10-8 C at x = 1.30m. find the force exerted by these two charges on a third charge of q = 3.3 x 10-8 C which is located at x = 0.24m on the x axis",
      options: ["1.34 x 10-4 N", "1.24 x 10-4 N", "1.44 x 10-4 N", "1.54 x 10-4 N"],
      answer: "1.24 x 10-4 N"
    },
    {
      number: 17,
      question: "A particle of charge Q = 4.1 x 10-6 C is placed at the origin. If one wants to exert a force of 6.3 x 10-6 N on the particle in the +x direction with a positive charge of 1.6 x 107 C, where must the charge be placed?", options: ["x=-20.4m", "x = -30.6m", "x = 30.6m", "x = -20.6m"],
      answer: "x = -30.6m"
    },
    {
      number: 18,
      question: "A charge of 2.3 x 10-4 C is in an electric field and feels a force of 0.34 N in the -x direction. What is the electric field at that point?",
      options: ["|E|=1.48 x 103 N/C", "|E| = 1.48 x 102 N/C", "|E| = 1.48 x 104 N/C", "|E| = 1.28 x 103 N/C"],
      answer: "|E| = 1.48 x 103 N/C"
    },
    {
      number: 19,
      question: "Two charges, Q1 and Q2 are located at the origin and at x = 0.36cm, Q1=3.3 x 10-6 C and Q2=-5.1 x 10-6 C at x = 0.36cm respectively. A third charge, Q = -9.3 x 10-7 C is moved far away (r = ∞) to a point in the y axis, y = 0.48cm, what is the potential energy between q and at this point?",
      options: ["Up=575 J", "Up = 57.5 J", "Up = 5.75 J", "Up = 0.575 J"],
      answer: "Up = 0.575 J"
    },
    {
      number: 20,
      question: "Electrostatic forces are governed by a simple relationship known as",
      options: ["ohm’s   law", "newton’s law", "coulomb’s law", "faraday’s law"],
      answer: "coulomb’s law"
    },
    {
      number: 21,
      question: "Electric charges at rest is referred to as",
      options: ["electric current", "electrostatic"
        , "electric field", "rest charge"],
      answer: "electrostatic"
    },
    {
      number: 22,
      question: "Which of the following statement is correct?",
      options: ["two negative charges or two positive charges repel each othe", "two positive charges attracts and two negative charges repel each other", "a positive charge and a negative charge repel each other", "a positive charge attracts another positive charge but repels a negative charge"],
      answer: "two negative charges or two positive charges repel each other"
    },
    {
      number: 23,
      question: "Which of the following cannot be found in the nucleus of an atom?",
      options: ["proton", "electron"
        , "neutron", "none of the above"],
      answer: "electron"
    },
    {
      number: 24,
      question: "A neutral atom has as many electrons as it does protons",
      options: ["true", "false", "can’t say"],
      answer: "true"
    },
    {
      number: 25,
      question: "When an atom loses an electron, it becomes",
      options: ["positively charge", "negatively charged", "neutral atom", "an electron"],
      answer: "positively charge"
    },
    {
      number: 26,
      question: "The principle of conservation of charge states that",
      options: ["the force of attraction between two charges is directly proportional to the square of their distance apart", "the force of repulsion between two charges is inversely proportional to the square of their distances apart", "the magnitude of charge of the electron is a natural unit of electric field intensity", "the algebraic sum of all the electric charges in a closed system is constant"],
      answer: "the algebraic sum of all the electric charges in a closed system is constant"
    },
    {
      number: 27,
      question: "When the distance r between two charged bodies doubles, the force",
      options: ["increases to one-quarter of its initial value", "decreases to one-quarter of its initial value", "decreases to one-half of its initial value", "increases to one-half of its initial value"],
      answer: "decreases to one-quarter of its initial value"
    },
    {
      number: 28,
      question: "Coulomb’s law states that",
      options: ["the magnitude of the electric force between two point charges is directly to the sum of the charges and inversely proportional to the square of the distance between them"
        , "the magnitude of the electric force between two point charges is directly to the product of the charges and inversely proportional to the distance between them"
        , "the magnitude of the electric force between two point charges is directly to the  product of the charges and inversely proportional to the distance between them"
        , "the magnitude of the electric force between two point charges is directly to the product of the charges and inversely proportional to the square of the distance between them"
      ],
      answer: "the magnitude of the electric force between two point charges is directly to the product of the charges and inversely proportional to the square of the distance between them"

    },
    {
      number: 29,
      question: "The electrostatic force between two charges is 120N, if the distance between the charges is doubled, what will be the value of the new force?",
      options: ["10N", "25N", "40N", "30N"],
      answer: "30N"
    },
    {
      number: 30,
      question: "How many electrons must be placed on each of two small spheres placed 3cm apart if the force of repulsion between them is to be 1019 N?",
      options: ["526", "625", "225", "525"],
      answer: "625"
    },
    {
      number: 31,
      question: "If 106 electrons are placed on an uncharged body, what is the total charge on the body? (1e = 1.6 x 10 19 C)",
      options: ["1.6 x 10-13C", "1.6 x 10-19C", "1.6 x 10-25C", "1.6 x 10-15C"],
      answer: "1.6 x 10-13C"
    },
    {
      number:
        32,
      question: "If the electrostatic force between two equally charged bodies separated by a distance of 0.5m is 36 x 109 N, what is the charge on each body?",
      options: ["2C", "1C", "3C", "4C"],
      answer: "1C"
    },
    {
      number: 33,
      question: "The region where a charged body experiences an electric force is called ______",
      options: ["Force field", "Magnetic field", "Gravitational field", "Electric field"],
      answer: "Electric field"

    },
    {
      number: 34,
      question: "Electric field is a _____",
      options: ["vector field", "scalar field", "none of the above"
        , "all of the above"],
      answer: "vector field"
    },
    {
      number: 35,
      question: "Which of the following statements is correct?",
      options: ["The field about an isolated positive charge is radially inward while the field about a negative charge is radially outward", "The field about an isolated positive charge and isolated negative charge is both radially inward", "The field about an isolated positive charge and isolated negative charge is both radially outward", "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"],
      answer: "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"
    },
    {
      number: 36,
      question: "What is the magnitude of the electric field at a field point 2.0 m from a point charge q = 4.0 nC?",
      options: ["18.0 N/C", "9.0 N/C", "36.0 N/C", "6.0 N/C"],
      answer: "9.0 N/C"
    },
    {
      number: 37,
      question: "The total electric field at a point P is the vector sum of the fields at P due to each point charge in the charge distribution. This is the principle of", options: ["Superposition of electric field", "Norton’s theory", "Coulomb’s rule", "Linear charge density"],
      answer: "Superposition of electric field"
    },
    {
      number: 38,
      question: "The imaginary line or curve drawn through a region of space so that its tangent at any point is in the direction of the electric field vector at the point, is called __________",
      options: ["Vector line", "Electrostatic line", "Electric field line", "Latitude"],
      answer: "Electric field line"
    },
    {
      number: 39,
      question: "Calculate the electric field intensity at a point 15 cm from a charge of 10 μC",
      options: ["4 x 10-6  N/C", "4 x 106 N/C", "6 x 10-3 N/C", "6 x 103 N/C"],
      answer: "4 x 106 N/C"
    },
    {
      number: 40,
      question: "What is the unit of electric field?",
      options: ["Volt", "Coulomb", "Newton", "Newton/Coulomb"],
      answer: "Newton/Coulomb"
    },
  ],
  cos101: [
    {
      number: 1,
      question: "In problem solving, an algorithm is used to:",
      options: ["A computer program", "A systematic set of instructions for solving a problem", "Random ways of finding answers", "A hardware component"],
      answer: "A systematic set of instructions for solving a problem"
    },
    {
      number: 2,
      question: "A method that is not systematically effective is one that:",
      options: ["Produces consistent results", "Cannot be relied on for every instance", "Is always correct"],
      answer: ". Cannot be relied on for every instance"
    },
    {
      number: 3,
      question: "Problem solving in computer science focuses mainly on:",
      options: ["Playing games", "Solving problems with computers", "Building hardware", "Drawing flowcharts"],
      answer: "Solving problems with computers"
    },
    {
      number: 4,
      question: "The main components of a computer system include:",
      options: [" Input Unit", "Output Unit", "Logic Model", "Storage Process"],
      answer: "Input Unit"
    },
    {
      number: 5,
      question: "Which of the following devices is an input device?",
      options: [" Monitor", " Printer", " Keyboard", " Speaker"],
      answer: "Keyboard"
    },
    {
      number: 6,
      question: "In the example of calculating average grades, which of the following is the input?",
      options: [" The display of the average", " The grades entered", " The printer output"],
      answer: " The grades entered"
    },
    {
      number: 7,
      question: "The process in problem solving where the CPU computes the result is known as:",
      options: ["Input", "Process", "Output", "Evaluation"],
      answer: "Process"
    },
    {
      number: 8,
      question: "The step where we determine what data is given and what is required is:",
      options: ["Testing", "Understanding the problem", "Developing an algorithm", "Writing the program"],
      answer: "Understanding the problem"
    },
    {
      number: 9,
      question: "What should be considered in understanding the problem?",
      options: ["Input format", "Missing data", "Required output", "All of the above"],
      answer: "All of the above"
    },
    {
      number: 10,
      question: "If a student’s grades are represented by letters, we may need to:",
      options: [" Input format", " Missing data", " Required output", "All of the above"],
      answer: " Assign numeric values to each letter"
    },
    {
      number: 11,
      question: "If a student’s grades are represented by letters, we may need to:",
      options: ["Ignore them", "Assign numeric values to each letter", "Delete the data", "Only use A and F"],
      answer: "Assign numeric values to each letter"
    },
    {
      number: 12,
      question: "Formulating a model means:",
      options: ["Drawing flowcharts", "Creating or identifying formulas", "Printing the output", "Saving the file"],
      answer: "Creating or identifying formulas"
    },
    {
      number: 13,
      question: "A computational model for average grades can be represented as:",
      options: ["(x₁ + x₂ + ... + xₙ) / n", "(x₁ × x₂) / n", "(x₁ – x₂) + n", "(x₁ + n) / x₂"],
      answer: "(x₁ + x₂ + ... + xₙ) / n"
    },
    {
      number: 14,
      question: "Assigning numbers to letter grades is an example of:",
      options: ["Input conversion", "Model formulation", "Output formatting", "Error handling"],
      answer: " Input conversion"
    },
    {
      number: 15,
      question: "What representation method uses human-readable steps to describe an algorithm?", options: ["Binary code", "Flowchart", "Pseudo-code", "Program"],
      answer: "Pseudo-code"
    },
    {
      number: 16,
      question: "Assigning numbers to letter grades is an example of:",
      options: ["Input conversion", "Model formulation", "Output formatting", "Error handling"],
      answer: " Input conversion"
    },
    {
      number: 17,
      question: "What representation method uses human-readable steps to describe an algorithm?", options: ["Binary code", "Flowchart", "Pseudo-code", "Program"],
      answer: "Pseudo-code"
    },
    {
      number: 18,
      question: "What representation method uses human-readable steps to describe an algorithm?", options: ["Binary code", "Flowchart", "Pseudo-code", "Program"],
      answer: " Pseudo-code"
    },
    {
      number: 18,
      question: "What representation method uses human-readable steps to describe an algorithm?", options:
        ["Binary code", "Flowchart", "Pseudo-code", "Program"],
      answer: "Pseudo-code"
    },
    {
      number: 19,
      question: "Which of the following is NOT a representation of an algorithm?",
      options: ["Flowchart", "Pseudo-code", "Source code", "Photograph"],
      answer: "Photograph"
    },
    {
      number: 20,
      question: "The first step in the “Broken Lamp” problem is to:",
      options: ["Replace the bulb", "Plug in the lamp", "Check if the lamp works", "Buy a new lamp"],
      answer: "Check if the lamp works"
    },
    {
      number: 21,
      question: "In the average grade algorithm, the variable used to accumulate values is:",
      options: ["total", "sum", "average", "count"],
      answer: "sum"
    },
    {
      number: 22,
      question: "In pseudo-code, the average is computed as:",
      options: ["sum × n", "sum / n", "n / sum", "sum – n"],
      answer: "sum / n"
    },
    {
      number: 23,
      question: "In the average grade algorithm, the variable used to accumulate values is:",
      options: ["total", "sum", "average", "count"],
      answer: "sum"
    },
    {
      number: 24,
      question: "In pseudo-code, the average is computed as:",
      options: ["sum × n", "sum / n", "n / sum", "sum – n"],
      answer: "sum / n"
    },
    {
      number: 25,
      question: "In pseudo-code, the average is computed as:",
      options: ["sum × n", "sum / n", "n / sum", "sum – n"],
      answer: "sum / n"
    },
    {
      number: 25,
      question: "In pseudo-code, the average is computed as:",
      options: ["sum × n", "sum / n", "n / sum", "sum – n"],
      answer: "sum / n"
    },
    {
      number: 26,
      question: "The step that translates an algorithm into a programming language is:",
      options: ["Testing", "Writing the program", "Evaluating the solution", "Formulating a model"],
      answer: "Writing the program"
    }, {
      number: 27,
      question: "When a program gives wrong results, the problem is called a:",
      options: ["Syntax", "Bug"
        , "Error Code", "Debug"],
      answer: "Bug"
    },
    {
      number: 28,
      question: "Testing ensures that the program:",
      options:
        ["Is written in C++", "Produces the correct output", "Has a flowchart", "Can be compiled"],
      answer: "Produces the correct output"
    },
    {
      number: 29,
      question: "Bugs in a program are usually fixed through:",
      options: ["Debugging", "Formatting", "Evaluation", "Modeling"],
      answer: "Debugging"
    },
    {
      number: 30,
      question: "Evaluating a solution means:",
      options: ["Checking if the result truly solves the original problem", "Adding new features", "Restarting the process", "Removing input data"],
    },
  ],
  cee101: [
    {
      number: 1,
      question: "What are the three main career paths in civil engineering?",
      options: ["Government, Industry, Academia", "Government, Industry, Education", "Government, Industry, Research", "Government, Academia, Consultancy"],
      answer: "Government, Industry, Academia"
    }
  ],
  phy124: [
    {
      number: 1,
      question: "A girl stands 34m away from a reflecting wall. She makes sound and hears an echo after 0.2 seconds. Find the velocity of sound.",
      options: ["435m/s", "340m/s", "289m/s"],
      answer: "340m/s"
    },
    {
      number: 2,
      question: "A radio station broadcasts on frequency of 300 kHz and the wavelength of its signal is 1000m. Calculate the speed of the radio wave in ms-1.",
      options: ["3 × 10^8m/s", "6 × 10^-14m/s", "4 × 10^4"],
      answer: "3 × 10^8m/s"
    },
    {
      number: 3,
      question: "If the vibration of particle of the medium are right angles to direction of propagation of wave, then such wave is called",
      options: ["mechanical wave", "transverse wave", "longitudinal wave"],
      answer: "transverse wave"
    },
    {
      number: 4,
      question: "Calculate the frequency of the wave if its speed is 30cms−1 and the wave length is 6cm.",
      options: ["5Hz", "6Hz", "4Hz"],
      answer: "5Hz"
    },
    {
      number: 5,
      question: "A source of frequency 256Hz is set into vibration. Calculate the wave length of the waves produced, the speed of sound in air is 332ms−1 in air.",
      options: ["1.50m", "1m", "1.30m"],
      answer: "1.30m"
    },
    {
      number: 6,
      question: "The speed of a certain wave in air is 3 × 10^8ms−1. The wave length of the wave is 5 × 10^−7m. Calculate the frequency of the wave.",
      options: ["6 × 10^14Hz", "3 × 10^20Hz", "6 × 10^-14Hz"],
      answer: "6 × 10^14Hz"
    },
    {
      number: 7,
      question: "A radio station produces waves of wave length 10m. If the wave speed is 3 × 10^8ms−1 calculate i. Frequency of radio wave. ii. Period, T iii. Number of cycles completed in 10^8",
      options: ["F= 3*10^7Hz, T=3.33*10^-8S, N=3*10^15"],
      answer: "F= 3*10^7Hz, T=3.33*10^-8S, N=3*10^15"
    },
    {
      number: 8,
      question: "A gun was fired and an echo from a cliff was heard 8 seconds later. If the velocity of sound is 340ms−1, how far was the gun from the cliff?",
      options: ["1300m", "1330m", "1360m"],
      answer: "1360m"
    },
    {
      number: 9,
      question: "Which of these phenomena obeys the Huygens’ principle",
      options: ["Conduction", "Reflection", "Radiation"],
      answer: "Reflection"
    },
    {
      number: 10,
      question: "Huygens' Principle provides a powerful method for predicting the behavior of wave-fronts by treating each point on a wave-front as",
      options: ["Wavelets", "Source of secondary wavelets", "source of primary wavelets"],
      answer: "Source of secondary wavelets"
    },
    {
      number: 11,
      question: "Which of these can be classified as an electromagnetic wave",
      options: ["Seismic wave", "Microwave", "strings"],
      answer: "Microwave"
    },
    {
      number: 12,
      question: "The rate at which the wave propagates through a medium can be given as",
      options: ["ω = 2πf", "k=2π/λ", "v = fλ"],
      answer: "v = fλ"
    },
    {
      number: 13,
      question: "The change in direction of a wave as it passes from one medium to another is known as",
      options: ["Reflection", "Refraction", "Polarization"],
      answer: "Refraction"
    },
    {
      number: 14,
      question: "For a one-dimensional wave traveling along the x-axis, curvature of the wave is given as",
      options: ["(𝜕 ^2 u)/ 𝜕x^2", "(𝜕 ^2 u)/ 𝜕t^2", "u(x, t) = f (x − vt) + g(x + vt)"],
      answer: "(𝜕 ^2 u)/ 𝜕x^2"
    },
    {
      number: 15,
      question: "Determine the total energy emitted and used by a seismic wave of weight 10N and speed of 5m/s",
      options: ["34j", "12.75j", "15j"],
      answer: "15j"
    },
    {
      number: 16,
      question: "How much power is used to cause a guitar string of weight 50N to emit waves in 8 seconds",
      options: ["6.25W", "3.32J", "6.25J", "3.32W"],
      answer: "6.25W"
    },
    {
      number: 17,
      question: "A repeated reflection of a wave that arrives back at the source after a delay is called",
      options: ["Echo", "beat", "wavelet"],
      answer: "Echo"
    },
    {
      number: 18,
      question: "A periodic variation in amplitude caused by the overlap of two waves with slightly different frequencies is called",
      options: ["wavelet", "Echo", "Beat"],
      answer: "Beat"
    },
    {
      number: 19,
      question: "The Doppler effect is true for",
      options: ["sound waves", "Ripples", "strings"],
      answer: "sound waves"
    },
    {
      number: 20,
      question: "The speed of sound in air at room temperature (20°C) is approximately ___ meters per second (m/s)",
      options: ["300", "343", "243", "200"],
      answer: "343"
    },
    {
      number: 21,
      question: "The speed of sound in water at room temperature is approximately____meters per second (m/s)",
      options: ["1480", "1840", "1400", "1800"],
      answer: "1480"
    },
    {
      number: 22,
      question: "The speed of sound in gases is independent on the",
      options: ["temperature", "pressure", "Molecular composition of the gas", "none of the above"],
      answer: "none of the above"
    },
    {
      number: 23,
      question: "𝑣 = square root (y.R.T/M) denotes",
      options: ["the speed of sound in air", "the speed of sound in gases", "all of the above"],
      answer: "all of the above"
    },
    {
      number: 24,
      question: "____ is the most efficient medium for sound propagation",
      options: ["liquid", "solid", "gas"],
      answer: "solid"
    },
    {
      number: 25,
      question: "____ is the least efficient medium for sound propagation",
      options: ["liquid", "solid", "gas"],
      answer: "gas"
    },
    {
      number: 26,
      question: "Huygens' Principle explains how waves bend around obstacles and spread out after passing through small openings. This phenomenon is known as",
      options: ["Diffraction", "polarization", "Refraction"],
      answer: "Diffraction"
    },
    {
      number: 27,
      question: "Where P, E, A and f denotes power, energy, amplitude and frequency. Which of the following expressions is not true",
      options: ["(𝐸 ∝ 𝐴^2)", "(𝑃 ∝ 𝐴^2 𝑋 𝑓)", "(𝐸 ∝ 𝐴^2/f)"],
      answer: "(𝐸 ∝ 𝐴^2/f)"
    },
    {
      number: 28,
      question: "One of these is not a wave classification according to particle motion",
      options: ["transverse", "electromagnetic", "longitudinal"],
      answer: "electromagnetic"
    },
    {
      number: 29,
      question: "The wave equation that describes the propagation of waves in all directions in space is known as",
      options: ["Two-Dimensional Wave Equation", "One-Dimensional Wave Equation", "Three-Dimensional Wave Equation"],
      answer: "Three-Dimensional Wave Equation"
    },
    {
      number: 30,
      question: "The wave equation that describes the propagation of waves on surfaces, such as water waves in a pond or vibrations on a drum membrane is known as",
      options: ["Two-Dimensional Wave Equation", "One Dimensional Wave Equation", "Three-Dimensional Wave Equation"],
      answer: "Two-Dimensional Wave Equation"
    },
    {
      number: 31,
      question: "The wave equation that describes the propagation of waves along a single spatial coordinate, x is known as",
      options: ["Two-Dimensional Wave Equation", "One-Dimensional Wave Equation", "Three Dimensional Wave Equation"],
      answer: "One-Dimensional Wave Equation"
    },
    {
      number: 32,
      question: "Spreading of waves due to differences in phase velocity is known as",
      options: ["polarization", "dispersion", "refraction"],
      answer: "dispersion"
    },
    {
      number: 33,
      question: "Echo are induced by interference between two waves with close but different frequencies.",
      options: ["true", "false"],
      answer: "true"
    },
    {
      number: 34,
      question: "The rate at which the wave propagates through a medium refers to the",
      options: ["speed of the wave in the medium", "frequency of the wave in the medium", "angular velocity of the wave in the medium."],
      answer: "speed of the wave in the medium"
    },
    {
      number: 35,
      question: "The position of a point in time on a waveform cycle is known as",
      options: ["wavefront", "coordinate", "phase"],
      answer: "phase"
    },
    {
      number: 36,
      question: "Calculate the frequency of the wave if its speed is 80cms−1 and the wave length is 0.52m.",
      options: ["13Hz", "1.54Hz", "3.2Hz"],
      answer: "3.2Hz"
    },
    {
      number: 37,
      question: "A radio station broadcasts on frequency of 300 MHz and the wavelength of its signal is 100m. Calculate the speed of the radio wave in ms-1",
      options: ["3 × 10^8m/s", "4 × 10^3m/s", "53m/s"],
      answer: "3 × 10^8m/s"
    },
    {
      number: 38,
      question: "A source of frequency 250Hz is set into vibration. Calculate the wave length of the waves produced, the speed of sound in air is 80ms−1 in air.",
      options: ["32m", "0.15m", "0.32m"],
      answer: "0.32m"
    },
    {
      number: 39,
      question: "A ball is placed 16m away from a reflecting wall. It bounces and makes sound, an echo is heard after 0.1 seconds. Find the velocity of sound.",
      options: ["320m/s", "123m/s", "424m/s"],
      answer: "320m/s"
    },
    {
      number: 40,
      question: "A gun was fired and an echo from a cliff was heard 6 seconds later. If the velocity of sound is 340ms−1, how far was the gun from the cliff?",
      options: ["1020m", "1200m", "2040m"],
      answer: "2040m"
    },
    {
      number: 41,
      question: "A wave travels a distance of 6000cm in 20 seconds. If the distance travelled is equivalent to the distance between 15 consecutive crests, calculate the wave length of the wave.",
      options: ["8m", "2m", "4m"],
      answer: "4m"
    },
    {
      number: 42,
      question: "The equation above represents a",
      options: ["Three-Dimensional Wave Equation", "Two-Dimensional Wave Equation", "One-Dimensional Wave Equation"],
      answer: "One-Dimensional Wave Equation"
    },
    {
      number: 43,
      question: "Two-Dimensional Wave Equation: Describes wave propagation",
      options: ["In spaces", "on surfaces", "in vacuum"],
      answer: "on surfaces"
    },
    {
      number: 44,
      question: "One of these is not a wave classification according to medium",
      options: ["mechanical", "electromagnetic", "longitudinal"],
      answer: "electromagnetic"
    },
    {
      number: 45,
      question: "How much power is used to cause a guitar string of weight 60N to emit waves in 5seconds",
      options: ["12W", "12J", "5W", "5J"],
      answer: "12W"
    },
    {
      number: 46,
      question: "Beats are induced by interference between two waves with close but different frequencies.",
      options: ["true", "false"],
      answer: "true"
    },
    {
      number: 47,
      question: "The Doppler effect is true for",
      options: ["Ripples", "light waves", "strings"],
      answer: "light waves"
    },
    {
      number: 48,
      question: "A progressive wave travels a distance of 31.5m in 20 seconds. If the distance travelled is equivalent to the distance between 10 consecutive crests, calculate; i. The wave length of the wave. ii. The period of the wave.",
      options: ["Wave length = 3.15m, Period = 0.2s"],
      answer: "Wave length = 3.15m, Period = 0.2s"
    },
    {
      number: 49,
      question: "Calculate the wavelength of a radio wave of frequency 2.5 × 105 Hz, given that the velocity of electromagnetic waves in free space is 2.5 × 105Hz, given that the velocity of electromagnetic waves in free space is 3.0 × 108ms-1.",
      options: ["2400m", "1200m", "1020m"],
      answer: "1200m"
    },
    {
      number: 50,
      question: "A slinky spring is made to vibrate in a transverse mode with a frequency of 4Hz. If the distance between two successive crests of the wave train is 0.7m, calculate the speed of the waves along the slinky spring.",
      options: ["2m/s", "3.2m/s", "2.8m/s"],
      answer: "2.8m/s"
    }
  ],
  phy101: [
    {
      number: 1,
      question: "Large transformers, when used for some time, become very hot and are cooled by circulating oil. The heating of the transformer is due to:",
      options: ["The heating effect of current alone", "Hysteresis loss alone", "Both the heating effect of current and hysteresis loss", "Intense sunlight at noon"],
      answer: "Both the heating effect of current and hysteresis loss"
    },
    {
      number: 2,
      question: "Nuclear sizes are expressed in a unit named:",
      options: ["Fermi", "Angstrom", "Newton", "Tesla"],
      answer: "Fermi"
    },
    {
      number: 3,
      question: "Light year is a unit of:",
      options: ["Time", "Distance", "Light", "Intensity of light"],
      answer: "Distance"
    },
    {
      number: 4,
      question: "Mirage is due to:",
      options: ["Unequal heating of different parts of the atmosphere", "Magnetic disturbances in the atmosphere", "Depletion of ozone layer in the atmosphere", "Equal heating of different parts of the atmosphere"],
      answer: "Unequal heating of different parts of the atmosphere"
    },
    {
      number: 5,
      question: "Light from the Sun reaches us in nearly:",
      options: ["2 minutes", "4 minutes", "8 minutes", "16 minutes"],
      answer: "8 minutes"
    },
    {
      number: 6,
      question: "The unit of force is a:",
      options: ["Derived Unit", "Basic Unit", "Fundamental Unit", "None of the above"],
      answer: "Derived Unit"
    },
    {
      number: 7,
      question: "Atmospheric pressure exerted on earth is due to:",
      options: ["Gravitational pull", "Rotation of earth", "Revolution of earth", "Uneven heating of earth"],
      answer: "Gravitational pull"
    },
    {
      number: 8,
      question: "What is the SI unit of Force?",
      options: ["Pascal", "Boyle", "Newton", "Watt"],
      answer: "Newton"
    },
    {
      number: 9,
      question: "What measures Air pressure?",
      options: ["Barkometer", "Bolometer", "Spectrometer", "Barometer"],
      answer: "Barometer"
    },
    {
      number: 10,
      question: "The rice is cooked more quickly in a pressure cooker because:",
      options: ["It is covered.", "Less quantity of water is used.", "None of these", "Water boils at a higher temperature under pressure."],
      answer: "Water boils at a higher temperature under pressure."
    },
    {
      number: 11,
      question: "The number of waves per second in a sound is called ________ of that sound.",
      options: ["Velocity", "Frequency", "Displacement", "Acceleration"],
      answer: "Frequency"
    },
    {
      number: 12,
      question: "Sound waves do not show the phenomenon of",
      options: ["Refraction", "Interference", "Diffraction", "Polarisation"],
      answer: "Polarisation"
    },
    {
      number: 13,
      question: "Speed of sound is maximum in which among the following?",
      options: ["Gases", "Vaccum", "Liquids", "Solids"],
      answer: "Solids"
    },
    {
      number: 14,
      question: "The ringing of an electric bell in an enclosed evacuated glass bell jar is not heard outside because",
      options: ["The ringing is not loud enough", "The glass of the bell jar absorbs the sound waves", "The bell jar is too small", "There is no air or any other gas in the bell jar"],
      answer: "There is no air or any other gas in the bell jar"
    },
    {
      number: 15,
      question: "What is the full form of 'RADAR' ?",
      options: ["Radio Detecting and Ranging", "Region Device and Ranging", "Radio Detect and Rangs", "Radio Device and Ranging"],
      answer: "Radio Detecting and Ranging"
    },
    {
      number: 16,
      question: "Thermocouple consists of",
      options: ["Two dissimilar metals", "Two similar metals", "Metal and a semiconductor", "Metal and an insulator"],
      answer: "Two dissimilar metals"
    },
    {
      number: 17,
      question: "Water has maximum density at",
      options: ["100°C", "0°C", "4°C", "273°C"],
      answer: "4°C"
    },
    {
      number: 18,
      question: "When water freezes its density",
      options: ["Decreases", "Becomes Zero", "Remains constant", "Increases"],
      answer: "Decreases"
    },
    {
      number: 19,
      question: "Which of the following are methods of heat transfer?",
      options: ["Convection", "Evaporation", "Revolution", "Thermal Expansion"],
      answer: "Convection"
    },
    {
      number: 20,
      question: "Heat energy is transferred by conduction whenever molecules",
      options: ["Collide each other", "Means of photons", "Particles replaces there places", "All of the above"],
      answer: "All of the above"
    },
    {
      number: 21,
      question: "Gravitational force is maximum at which place",
      options: ["Poles", "Tropic of cancer", "Tropic of capricorn", "Equator"],
      answer: "Poles"
    },
    {
      number: 22,
      question: "A metal ball and a rubber ball, both having the same mass, strike a wall normally with the same velocity. The rubber ball rebounds and the metal ball does not rebound. It can be concluded that",
      options: ["The rubber ball suffers greater change in momentum", "The metal ball suffers greater change in momentum", "Both suffer the same change in momentum", "The initial momentum of the rubber ball is greater than that of the metal ball"],
      answer: "The rubber ball suffers greater change in momentum"
    },
    {
      number: 23,
      question: "A boy sitting in an open car moving with the constant speed throws a ball straight up into the air. The ball falls",
      options: ["Behind him", "In front of him", "Into his hand", "By his side"],
      answer: "Into his hand"
    },
    {
      number: 24,
      question: "Rate of change of momentum is",
      options: ["Area", "Pressure", "Force", "Velocity"],
      answer: "Force"
    },
    {
      number: 25,
      question: "Which law is also called law of inertia ?",
      options: ["Newton first law", "Newton second law", "Newton third law", "All of above"],
      answer: "Newton first law"
    },
    {
      number: 26,
      question: "Anemometer is an instrument meant for measuring",
      options: ["Velocity", "Air masses", "Wind speed", "Temperature"],
      answer: "Wind speed"
    },
    {
      number: 27,
      question: "A fountain pen works on the principle of",
      options: ["Flow of liquids from higher to lower potential", "Capillary action", "Bernoulli's principle", "Viscosity of liquids"],
      answer: "Capillary action"
    },
    {
      number: 28,
      question: "A barometer is kept inside a bell jar. Air is slowly pumped out of the jar.",
      options: ["The mercury level starts rising", "The mercury level starts falling", "The mercury level does not change", "The bell jar breaks up"],
      answer: "The mercury level starts falling"
    },
    {
      number: 29,
      question: "The temperature at which water boils depends mainly on",
      options: ["Air Pressure", "Specific heat", "Density", "Relative humidity"],
      answer: "Air Pressure"
    },
    {
      number: 30,
      question: "Air pressure is measured in which of the following units?",
      options: ["Steridian", "Kg/mts", "Newton", "Pascal"],
      answer: "Pascal"
    },
    {
      number: 31,
      question: "The snow on the mountains does not melt all at once when it is heated by the sun because:",
      options: ["It becomes very hard", "It reflects most of the heat from the sun", "It has a low specific heat capacity", "It has a high latent heat of fusion"],
      answer: "It has a high latent heat of fusion"
    },
    {
      number: 32,
      question: "Cloudy nights are warmer compared to clear cloudless nights, because clouds mainly",
      options: ["Absorb heat from the atmosphere send it towards earth", "Prevent cold waves from the sky descending on earth", "Reflect back the heat given by earth", "Produce heat and radiate it toward earth"],
      answer: "Absorb heat from the atmosphere send it towards earth"
    },
    {
      number: 33,
      question: "In which one of the following the phenomenon of total internal reflection of light is used ?",
      options: ["Formation of mirage", "Working of binoculars", "Formation of rainbow", "Twinkling of stars"],
      answer: "Working of binoculars"
    },
    {
      number: 34,
      question: "Which type of mirror is used in the head lights of vehicles ?",
      options: ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"],
      answer: "Parabolic mirror"
    },
    {
      number: 35,
      question: "If objects appear enlarged and inverted in a rear view mirror, then which type of mirror is used?",
      options: ["Concave", "Convex", "Cylindrical", "Plane"],
      answer: "Convex"
    },
    {
      number: 36,
      question: "Which one of the following has the highest value of specific heat?",
      options: ["Glass", "Copper", "Lead", "Water"],
      answer: "Water"
    },
    {
      number: 37,
      question: "Water is not suitable as a calorimetric substance because it……. :",
      options: ["Has high specific heat", "Is a good conductor", "Has high boiling point", "Low latent heat of vapourization"],
      answer: "Is a good conductor"
    },
    {
      number: 38,
      question: "Water is used in car radiator because of its",
      options: ["Low density", "Easy availability", "High specific heat capacity", "Low boiling point"],
      answer: "High specific heat capacity"
    },
    {
      number: 39,
      question: "How much mechanical work must be done to completely melt 1 gram of ice at 0°C ?",
      options: ["4.2 J", "80 J", "336 J", "2268 J"],
      answer: "336 J"
    },
    {
      number: 40,
      question: "Water pipes in hilly areas often burst on a cold frosty night, because",
      options: ["The material of which pipes are made contracts due to cold and so breaks", "Water in the pipes freezes and on freezing water expands, so pipes break", "Frost makes the pipes rusty, so they break", "None of these"],
      answer: "Water in the pipes freezes and on freezing water expands, so pipes break"
    },
    {
      number: 41,
      question: "Optical fibre works on which of the following principle of light?",
      options: ["Reflection", "Refraction", "Diffraction", "Total internal reflection"],
      answer: "Total internal reflection"
    },
    {
      number: 42,
      question: "Which colour of light shows maximum deviation when passed through a prism ?",
      options: ["White", "Red", "Violet", "Green"],
      answer: "Violet"
    },
    {
      number: 43,
      question: "The sparkling of a diamond is due to",
      options: ["Total internal reflection of light", "Interference of light", "Polarisation of light", "Refraction of light"],
      answer: "Total internal reflection of light"
    },
    {
      number: 44,
      question: "Stars appear twinkling because of ......... of light.",
      options: ["Reflection", "Scattering", "Emission", "Absorption"],
      answer: "Scattering"
    },
    {
      number: 45,
      question: "Stars in the sky appear to twinkle due to",
      options: ["A series of refractions", "A series of reflections", "A surface tension phenomenon", "Multiple diminishing brightness"],
      answer: "A series of refractions"
    },
    {
      number: 46,
      question: "A thin oil film on a water surface appears coloured because of",
      options: ["Reflection", "Interference", "Diffraction", "Polarization"],
      answer: "Interference"
    },
    {
      number: 47,
      question: "The blue colour of sky is due to",
      options: ["Reflection of sunlight", "Refraction of sunlight", "Scattering of shorter wavelengths of sunlight in the atmosphere", "Scattering of longer wavelengths of sunlight in the atmosphere"],
      answer: "Scattering of shorter wavelengths of sunlight in the atmosphere"
    },
    {
      number: 48,
      question: "The phenomenon of light associated with the appearance of blue colour of the sky is",
      options: ["Interference", "Reflection", "Refraction", "Scattering"],
      answer: "Scattering"
    },
    {
      number: 49,
      question: "The sky appears blue because of",
      options: ["Atmospheric water vapour", "Scattering of light", "Reflection on sea water", "Emision of blue wavelength by the sun"],
      answer: "Scattering of light"
    },
    {
      number: 50,
      question: "Light scattering takes place in",
      options: ["Colloidal solutions", "Acidic solutions", "Electrolyte solutions", "Basic solutions"],
      answer: "Colloidal solutions"
    },
    {
      number: 51,
      question: "What is the SI unit of Power?",
      options: ["Boyle", "Watt", "Newton", "Pascal"],
      answer: "Watt"
    },
    {
      number: 52,
      question: "For which one of the following does the centre of mass lie outside the body?",
      options: ["A fountain pen", "A cricket ball", "A ring", "A book"],
      answer: "A ring"
    },
    {
      number: 53,
      question: "When a pail of water is swung in a vertical circle, the water does not fall out at the top of the loop when the speed is",
      options: ["Below a certain minimum value irrespective of amount of water in the pail", "Above a certain minimum value irrespective of amount of water in the pail", "Above a certain minimum value depending on amount of water in the pail", "Below a certain minimum value depending on amount of water in the pail"],
      answer: "Above a certain minimum value irrespective of amount of water in the pail"
    },
    {
      number: 54,
      question: "Fat can be separated from milk in a cream separator because of :",
      options: ["Cohesive Force", "Gravitational Force", "Centripetal Force", "Centrifugal Force"],
      answer: "Centrifugal Force"
    },
    {
      number: 55,
      question: "In case of uniform circular motion, the acceleration is",
      options: ["Variable in magnitude but constant in direction", "Constant in magnitude and directed radially inwards", "Variable in magnitude but tangential to the circle", "Zero"],
      answer: "Constant in magnitude and directed radially inwards"
    },
    {
      number: 56,
      question: "The odometer guage indicates",
      options: ["The distance travelled by a vehicle", "The depth of the ocean", "Pitch length", "Frequency of the wave"],
      answer: "The distance travelled by a vehicle"
    },
    {
      number: 57,
      question: "If a force acts upon two objects at rest, and having different masses for the same amount of time, then which one of the following will be the same for both the objects?",
      options: ["Acceleration", "Kinetic Energy", "Velocity", "Momentum"],
      answer: "Momentum"
    },
    {
      number: 58,
      question: "Consider the following statements : 1. There is no net moment on a body which is in equilibrium. 2. The momentum of a body is always conserved. 3. The kinetic energy of an object is always conserved. Which of the statements given above is/are correct?",
      options: ["1, 2 and 3", "2 and 3 only", "1 and 2 only", "1 only"],
      answer: "1, 2 and 3"
    },
    {
      number: 59,
      question: "The rate of change of linear momentum of a body falling freely under gravity is equal to it's ________ ?",
      options: ["Kinetic Energy", "Weight", "Potential Energy", "Impulse"],
      answer: "Weight"
    },
    {
      number: 60,
      question: "According to the theory of relativity, which of the following always remains constant ?",
      options: ["Length of an object", "Time", "Space", "Velocity of light"],
      answer: "Velocity of light"
    },
    {
      number: 61,
      question: "The mass of a star is two times the mass of the Sun. How it will come to an end ?",
      options: ["Neutron Star", "Black hole", "White Dwarf", "Red Giant"],
      answer: "Neutron Star"
    },
    {
      number: 62,
      question: "Which of the following celestial bodies contains abundant quantities of helium-3, a potential source of energy ?",
      options: ["Earth", "Moon", "Venus", "Saturn"],
      answer: "Moon"
    },
    {
      number: 63,
      question: "The period of revolution of a certain planet in an orbit of radius R is T. Its period of revolution in an orbit of radius 4R will be:",
      options: ["8 T", "4 T", "1 T", "2 T"],
      answer: "4 T"
    },
    {
      number: 64,
      question: "Which is evidence that supports the dynamo theory?",
      options: ["Earth's outer core contains liquid that conducts electricity", "Earth's core contains a large amount of iron", "Granite and basalt conduct electricity", "Convection occurs in Earth's inner core"],
      answer: "Earth's outer core contains liquid that conducts electricity"
    },
    {
      number: 65,
      question: "Which of the following is indicated by the colour of a star ?",
      options: ["Weight", "Distance", "Temperature", "Size"],
      answer: "Temperature"
    },
    {
      number: 66,
      question: "A cycle tyre bursts suddenly. This represents an :",
      options: ["Isothermal process", "Adiabatic process", "Isochoric process", "Isoboric process"],
      answer: "Adiabatic process"
    },
    {
      number: 67,
      question: "Which has the lowest albedo?",
      options: ["Dark surfaces", "Light surfaces", "Both A & B", "None of the above"],
      answer: "Dark surfaces"
    },
    {
      number: 68,
      question: "Which one of the following is a non-dimensional quantity?",
      options: ["Gas constant", "Strain", "Co-efficient of viscocity", "Plank's constant"],
      answer: "Strain"
    },
    {
      number: 69,
      question: "The dimension of Planck constant equals to that of",
      options: ["Energy", "Momentum", "Angular momentum", "Power"],
      answer: "Angular momentum"
    },
    {
      number: 70,
      question: "The recoiling of gun is an example of which of the following?",
      options: ["Law of Conservation of Angular Momentum", "Law of Conservation of Linear Momentum", "Conversion of Kinetic Energy to Potential Energy", "Law of Conservation of Energy"],
      answer: "Law of Conservation of Linear Momentum"
    },
    {
      number: 71,
      question: "The modulus of rigidity is the ratio of",
      options: ["Longitudinal stress to longitudinal strain", "Volume stress to volume strain", "Shearing stress to shearing strain", "Tensile stress to tensile strain"],
      answer: "Shearing stress to shearing strain"
    },
    {
      number: 72,
      question: "The flux commonly used in brazing is",
      options: ["Ammonium chloride", "Borax", "Zinc chloride", "Resin plus alcohol"],
      answer: "Borax"
    },
    {
      number: 73,
      question: "How many laws of physics are there?",
      options: ["5", "4", "3", "2"],
      answer: "4"
    },
    {
      number: 74,
      question: "Which physicists is the writer of the book 'A Brief History of Time'?",
      options: ["Isaac Newton", "Hans Bethe", "Albert Einstein", "Stephen Hawking"],
      answer: "Stephen Hawking"
    },
    {
      number: 75,
      question: "On which day 'National Science Day' is celebrated in India ?",
      options: ["February 23", "February 25", "February 26", "February 28"],
      answer: "February 28"
    },
    {
      number: 76,
      question: "Matter waves are",
      options: ["De Broglie waves", "Electromagnetic waves", "Transverse waves", "Longitudinal waves"],
      answer: "De Broglie waves"
    },
    {
      number: 77,
      question: "Two waves, each of amplitude 1.5 mm and frequency 10 Hz, are travelling in opposite direction with a speed of 20 mm/s. The distance in mm between adjacent nodes is :",
      options: ["1.0", "1.2", "1.5", "2.0"],
      answer: "2.0"
    },
    {
      number: 78,
      question: "Intensity of any wave is proportional to which of the following?",
      options: ["Amplitude", "Square of amplitude", "Square root of amplitude", "Cube of amplitude"],
      answer: "Square of amplitude"
    },
    {
      number: 79,
      question: "If density of oxygen is 16 times that of hydrogen, what will be their corresponding ratio of velocity of sound?",
      options: ["4 : 1", "2 : 1", "1 : 16", "1 : 4"],
      answer: "1 : 4"
    },
    {
      number: 80,
      question: "Which one of the following statements with regard to Jet stream, an upper level tropospheric wave, is not correct?",
      options: ["It is narrow band of high-velocity wind.", "It follows the wave path near the tropopause at elevations of 8 km to 15 km.", "Jet streams are typically continuous over long distances.", "In summer, the polar front jet achieves its maximum force."],
      answer: "In summer, the polar front jet achieves its maximum force."
    },
    {
      number: 81,
      question: "Which of the following was the first theory of superconductivity?",
      options: ["Ginzburg Landau theory", "London theory", "Resonating valence bond theory", "Quantum field theory"],
      answer: "London theory"
    },
    {
      number: 82,
      question: "A wire of copper having length I and area of cross-section A is taken and a current i is flown through it. The power dissipated in the wire is P. If we take an aluminium wire having same dimensions and pass the same current through it, the power dissipated will be",
      options: ["P", "< P", "> P", "2P"],
      answer: "< P"
    },
    {
      number: 83,
      question: "A wire carrying current is",
      options: ["Positively charged", "Negatively charged", "Neutral", "Charged with a type depending upon current strength"],
      answer: "Charged with a type depending upon current strength"
    },
    {
      number: 84,
      question: "Carbon Arc lamps are commonly used in",
      options: ["Cinema projectors", "Photography", "Vehicles", "Domestic lighting"],
      answer: "Photography"
    },
    {
      number: 85,
      question: "Low voltage cables are meant for use up to",
      options: ["3.3 kV", "1.1 kV", "11 kV", "0.5 kV"],
      answer: "1.1 kV"
    },
    {
      number: 86,
      question: "A car parked in the sun with its windows closed gets terribly hot inside. This is due to",
      options: ["The heat emitted by the engine", "The greenhouse effect", "The good conducting power of the metal body", "The double layered wind shield"],
      answer: "The greenhouse effect"
    },
    {
      number: 87,
      question: "To measure the speed of an approaching car a police officer shines",
      options: ["Light waves on it", "Microwaves on it", "Radio waves on it", "Ultra high frequency waves on it"],
      answer: "Radio waves on it"
    },
    {
      number: 88,
      question: "The device used for measuring the wavelength of X-rays is",
      options: ["G.M. Counter", "Cyclotron", "Bragg Spectrometer", "Mass Spectrometer"],
      answer: "Bragg Spectrometer"
    },
    {
      number: 89,
      question: "If the wavelengths corresponding to ultraviolet, visible and infrared radiations are given as lUV, lVIS and lIR respectively, then which of the following gives the correct relationship among these wavelengths?",
      options: ["LUV < lIR < lVIS", "LUV > lVIS > lIR", "LUV > lIR > lVIS", "LUV < lVIS < lIR"],
      answer: "LUV < lVIS < lIR"
    },
    {
      number: 90,
      question: "Transition ions absorb light in :",
      options: ["Infrared region", "Ultraviolet region", "Microwave region", "Visible region"],
      answer: "Visible region"
    },
    {
      number: 91,
      question: "The least penetrating power ray is",
      options: ["Gamma rays", "Beta rays", "Alpha rays", "None of the above"],
      answer: "Alpha rays"
    },
    {
      number: 92,
      question: "Gamma rays are emissions that have",
      options: ["Charge but no mass", "Neither mass nor charge", "Both mass and charge", "Mass but no charge"],
      answer: "Neither mass nor charge"
    },
    {
      number: 93,
      question: "In the gamma decay of a nucleus",
      options: ["The mass number of the nucleus changes whereas its atomic number does not change", "The mass number of the nucleus does not change whereas its atomic number changes", "Both the mass number and the atomic number of the nucleus change", "Neither the mass number nor the atomic number of the nucleus changes"],
      answer: "Neither the mass number nor the atomic number of the nucleus changes"
    },
    {
      number: 94,
      question: "Who among the following developed the technology of underground nuclear explosion ?",
      options: ["Dr. Homi J. Bhabha", "Dr. Vikram Sarabhai", "Dr. Raja Ramanna", "Dr. P. K. Iyengar"],
      answer: "Dr. Raja Ramanna"
    },
    {
      number: 95,
      question: "A radioactive substance does not undergo any change (in mass or charge) during",
      options: ["Gamma-emission", "Oxidation", "Alpha-emission", "Beta-emission"],
      answer: "Gamma-emission"
    },
    {
      number: 96,
      question: "The distance between node and adjacent antinode is 30 cm. The wavelength is",
      options: ["30 cm.", "90 cm.", "120 cm.", "60 cm."],
      answer: "60 cm."
    },
    {
      number: 97,
      question: "The material used in the fabrication of a transistor is",
      options: ["Aluminium", "Copper", "Silicon", "Silver"],
      answer: "Silicon"
    },
    {
      number: 98,
      question: "For which Diode is used ?",
      options: ["Modulation", "Oscillation", "Amplification", "Purification"],
      answer: "Amplification"
    },
    {
      number: 99,
      question: "The complete form of 'IC' in electronics is",
      options: ["Internal circuit", "Independent circuit", "Integrated circuit", "Inbuilt circuit"],
      answer: "Integrated circuit"
    },
    {
      number: 100,
      question: "In electronics what comes under tank circuit ?",
      options: ["Resistance and capacity", "Resistance and inductance", "Capacity and inductance", "Resistance, capacity and inductance"],
      answer: "Resistance, capacity and inductance"
    }
  ],
  sta122: [
    {
      number: 1,
      question: "Which probability concept is typically based on past data and observed frequencies?",
      options: ["Classical", "Axiomatic", "Relative Frequency", "Theoretical"],
      answer: "Relative Frequency"
    },
    {
      number: 2,
      question: "What does the Axiomatic concept of probability rely on?",
      options: ["Basic assumptions and rules that are universally accepted", "Counting all possible outcomes", "Prior observations and experiments", "Personal judgment"],
      answer: "Basic assumptions and rules that are universally accepted"
    },
    {
      number: 3,
      question: "Which field is probability NOT commonly applied in?",
      options: ["Finance", "Medicine", "Astrology", "Engineering"],
      answer: "Astrology"
    },
    {
      number: 4,
      question: "In decision-making processes, what is one of the main roles of probability?",
      options: ["Estimating the certainty of an event", "Establishing absolute truths", "Eliminating all risks", "Confirming personal beliefs"],
      answer: "Estimating the certainty of an event"
    },
    {
      number: 5,
      question: "Which of the following is a practical application of probability?",
      options: ["Assessing the effectiveness of a new drug", "Predicting daily weather with perfect accuracy", "Determining the outcome of a coin toss with no uncertainty", "Providing a definitive answer to a philosophical question"],
      answer: "Assessing the effectiveness of a new drug"
    },
    {
      number: 6,
      question: "How does probability assist in risk management in insurance?",
      options: ["By determining a fair price for policies based on risk", "By removing all risks from a policy", "By guaranteeing profits regardless of circumstances", "By eliminating the need for data analysis"],
      answer: "By determining a fair price for policies based on risk"
    },
    {
      number: 7,
      question: "In which of the following cases would probability be least useful?",
      options: ["Predicting election outcomes", "Assessing survey opinions", "Forecasting the stock market trends", "Finding the exact number of stars in the galaxy"],
      answer: "Finding the exact number of stars in the galaxy"
    },
    {
      number: 8,
      question: "A probability function is given by p(0) = 0.3164, p(1) = 0.4219, p(2) = 0.2109, p(3) = 0.0469 and p(4) = 0.0039. Find its mean and variance.",
      options: ["1.00 and 0.34", "1.00 and 0.70", "1.00 and 0.85", "1.00 and 0.75", "1.00 and 0.89"],
      answer: "1.00 and 0.34"
    },
    {
      number: 9,
      question: "There are two kinds of random variables",
      options: ["discrete and digital random variables", "discrete and continuous random variables", "normal and lognormal random variables"
        , "discrete and Poisson random variables", "discrete and Binomial random variables"],
      answer: "discrete and continuous random variables"
    },
    {
      number: 10,
      question: "A random variable that can only take on specific or integer value in its domain is called",
      options:
        ["parato random variable", "Exponential random variable", "normal random variable", "Continuous random variable", "discrete random variable"],
      answer: "discrete random variable"
    },
    {
      number: 11,
      question: "A random variable that can take any value in its domain is called",
      options: ["binomial distribution", "Bernoulli distribution", "continuous random variable", "poison", "geometric"],
      answer: "continuous random variable"
    },
    {
      number: 12,
      question: "The parameters of binomial distribution are",
      options: ["n and p", "n, c, and p", "a, b , c and p", "p and q", "all of the above"],
      answer: "n and p"
    },
    {
      number: 13,
      question: "The variance of Bernoulli distribution is",
      options: ["npq", "pq", "p/q", "np/q", "np/pq"
      ], answer: "pq"
    },
    {
      number: 14,
      question: "For a binomial distribution with parameter n=5 and p= 0.3, find the probability of exactly 3 successes",
      options: ["0.005", "0.0032", "0.13423", "0.323", "0.542"],
      answer: "0.13423"
    },
    {
      number: 15,
      question: "Ten percent of the tools produced in a certain manufacturing process turns out to be defective. Find the probability that in a sample of 100 tools chosen at random, exactly two will be defective.",
      options: ["0.0023", "0.23", "0.023", "23", "0.00023"],
      answer: "0.0023"
    },
    {
      number: 16,
      question: "A probability function is given by p(0) = 0.3164, p(1) = 0.4219, p(2) = 0.2109, p(3) = 0.0469 and p(4) = 0.0039. Find its mean and variance."
      , options: ["1.00 and 0.34", "1.00 and 0.70", "1.00 and 0.85", "1.00 and 0.75", "1.00 and 0.89"],
      answer: "1.00 and 0.34"
    },
    {
      number: 17,
      question: "There are two kinds of random variables",
      options: ["discrete and digital random variables", "discrete and continuous random variables", "normal and lognormal random variables", "discrete and Poisson random variables", "discrete and Binomial random variables"],
      answer: "discrete and continuous random variables"
    },
    {
      number: 18,
      question: "For a binomial distribution with parameter n=5 and p= 0.3, find the probability of exactly 3 successes",
      options: ["0.005", "0.3087", "0.13423", "0.1323", "0.542"],
      answer: "0.3087"
    },
    {
      number: 19,
      question: "Ten percent of the tools produced in a certain manufacturing process turns out to be defective. Find the probability that in a sample of 100 tools chosen at random, exactly two will be defective."
      , options: ["0.0023", "0.23", "0.023", "23", "0.00023"],
      answer: "0.0023"
    },
    {
      number: 20,
      question: "Suppose that 4% of the items manufactured by a certain factory are defective. Find the probability that in a sample of 100 items selected at random, there would be at least two defectives."
      , options: ["0.9082", "0.9084", "0.9261", "0.8761", "0.3451"],
      answer: "0.9082"
    },
    {
      number: 21,
      question: "If a worn machine tools produces 1% defective parts and the parts produced are independent, find the mean number of defective parts out of 25.",
      options: ["0.01", "0.252", "0.05", "0.50", "0.25"],
      answer: "0.25"
    },
    {
      number: 22,
      question: "260 bolts are examined as they are produced and 5 of them are found to be defective. Find the probability a bolt selected is not defective.",
      options: ["1", "0.921", "0.234", "0.12", "0.981"],
      answer: "0.981"
    },
    {
      number: 23,
      question: "On the basis of past experience, the probability that a certain electrical component will be satisfactory is 0.98. The components are sampled item by item from continuous production. In a sample of five components, what is the probability of finding exactly two defectives?",
      options: ["0.0038", "0.00038", "0.32", "0.032", "0.3222"],
      answer: "0.0038"
    },
    {
      number: 24,
      question: "A probability function is given by p(0) = 0.3164, p(1) = 0.4219, p(2) = 0.2109, p(3) = 0.0469 and p(4) = 0.0039. Find its mean and variance.",
      options: ["1.00 and 0.34", "1.00 and 0.70", "1.00 and 0.85", "1.00 and 0.75", "1.00 and 0.89"],
      answer: "1.00 and 0.34"
    },
    {
      number: 25,
      question: "A probability function is given by p(0) = 0.3164, p(1) = 0.4219, p(2) = 0.2109, p(3) = 0.0469 and p(4) = 0.0039. Find its mean and variance."
      , options: ["1.00 and 0.34", "1.00 and 0.70", "1.00 and 0.85", "1.00 and 0.75", "1.00 and 0.89"],
      answer: "1.00 and 0.34"
    }
  ],
  gst101: [
    {
      number: 1,
      question: "The true origin of the Yoruba people is regarded as:",
      options: ["Clearly known", "Ancient legend", "Controversial", "A recent discovery"],
      answer: "Controversial"
    },

    {
      number: 2,
      question: "Who wrote History of the Yoruba?",
      options: ["Herbert Macaulay", "Rev. Samuel Johnson", "Chief Obafemi Awolowo"],
      answer: "Rev. Samuel Johnson"
    },
    {
      number: 3,
      question: "According to Rev. Johnson, the Yoruba came from the:",
      options: ["South-West", "East ", "West", "South"],
      answer: "East"
    },
    {
      number: 4,
      question: "The East mentioned by Johnson refers to:",
      options: ["Mecca", "Jerusalem", "Sudan", "Kenya"],
      answer: "Mecca"
    },
    {
      number: 5,
      question: "Johnson traced the Yoruba’s origin to which African region?",
      options: ["North-Eastern Africa", "Southern Africa", "Central Africa", "North-West Africa"],
      answer: "North-Eastern Africa"
    },
    {
      number: 6,
      question: "According to Johnson, where did the Yoruba finally settle?",
      options: ["Ibadan", "Benin", "Ile-Ife", "Oyo"],
      answer: "Ile-Ife"
    },
    {
      number: 7,
      question: "Who led the Yoruba to Ile-Ife?",
      options: ["Obatala", "Oduduwa", "Oranmiyan"],
      answer: "Oduduwa"
    },
    {
      number: 8,
      question: "Oduduwa is believed to have sent his sons and grandsons to:",
      options: ["Conquer Benin", "Found other Yoruba kingdoms", "Fight against Dahomey", "Spread Islam"],
      answer: "Found other Yoruba kingdoms"
    },
    {
      number: 9,
      question: "Johnson associated Yoruba culture with which ancient civilization?",
      options: ["Nubian", "Egyptian", "Ethiopian", "Ghanaian"],
      answer: "Egyptian"
    },
    {
      number: 10,
      question: "According to Johnson, “the East is Mecca” means that:",
      options: ["Yoruba people love the sun", "Yoruba see the East as holy", "Yoruba dislike Egypt", "Yoruba worship rivers"],
      answer: "Yoruba see the East as holy"
    },
    {
      number: 11,
      question: "Oke Oramfe is located in:",
      options: ["Ibadan", "Ile-Ife", "Oyo", "Abeokuta"],
      answer: "Ile-Ife"
    },
    {
      number: 12,
      question: "Oke Oramfe is believed to be:",
      options: ["The origin of Oyo Empire", "The burial place of Oduduwa", "The centre from which the world was created", "The capital of Egypt"],
      answer: "The centre from which the world was created"
    },
    {
      number: 13,
      question: "Who wrote Yorubaland up to 1800?",
      options: ["Samuel Johnson", "Akinjogbin & Ayandele", "Herbert Macaulay", "Wole Soyinka"],
      answer: "Akinjogbin & Ayandele"
    },
    {
      number: 14,
      question: "Before creation, the world was covered by:",
      options: ["Fire", "Wind", "Water", "Sand"],
      answer: "Water"
    },
    {
      number: 15,
      question: "The leader of God’s messengers in the Oke Oramfe version was:",
      options: ["Oduduwa", "Obatala", "Oranmiyan", "Bashorun"],
      answer: "Obatala"
    },
    {
      number: 16,
      question: "How many immortals followed Obatala?",
      options: ["Twelve", "Sixteen", "Seven", "Ten"],
      answer: "Sixteen"
    },
    {
      number: 17,
      question: "What items were given to Obatala and the immortals?",
      options: ["A drum and sword", "Five pieces of iron, lump of earth, and a cockerel", "A staff and bell", "Palm wine and beads"],
      answer: "Five pieces of iron, lump of earth, and a cockerel"
    },
    {
      number: 18,
      question: "What caused Obatala to lose leadership?",
      options: ["Illness", "Laziness", "Drunkenness", "Betrayal"],
      answer: "Drunkenness"
    },
    {
      number: 19,
      question: "Who took over leadership from Obatala?",
      options: ["Oranmiyan", "Oduduwa", "Bashorun", "Ogun"],
      answer: "Oduduwa"
    },
    {
      number: 20,
      question: "What happened when the cockerel spread its toes?",
      options: ["The world was formed", "The sky darkened", "Oduduwa became angry", "Obatala was punished"],
      answer: "The world was formed"
    },
    {
      number: 21,
      question: "What became Oduduwa’s role after forming the earth?",
      options: ["King of Oyo", "Ruler of the world", "Chief priest", "Warrior"],
      answer: "Ruler of the world"
    },
    {
      number: 22,
      question: "What did Oduduwa do from his base in Ife?",
      options: ["Sent people to Egypt", "Extended his authority to other Yoruba towns", "Invaded Dahomey", "Founded the Benin Empire"],
      answer: "Extended his authority to other Yoruba towns"
    },
    {
      number: 23,
      question: "According to Yoruba belief, Oduduwa is the:",
      options: ["Father of Obatala", "Ancestral father of the Yoruba", "First Alaafin", "God of thunder"],
      answer: "Ancestral father of the Yoruba"
    },
    {
      number: 24,
      question: "The main difference between Johnson’s and Oke Oramfe’s versions is that:",
      options: ["Johnson supports creation, Oke Oramfe migration", "Johnson supports migration, Oke Oramfe creation", "Both are from Egypt", "Both are from Benin"],
      answer: "Johnson supports migration, Oke Oramfe creation"
    },
    {
      number: 25,
      question: "The cockerel in the Oke Oramfe story symbolizes:",
      options: ["War", "Fertility", "The spreading of land", "Wealth"],
      answer: "The spreading of land"
    },
    {
      number: 26,
      question: "Which Yoruba kingdom developed into an empire?",
      options: ["Ife", "Oyo", "Ijebu", "Egba"],
      answer: "Oyo"
    },

    {
      number: 27,
      question: "Who founded Oyo Empire?",
      options: ["Bashorun", "Oranmiyan", "Obatala", "Ilari"],
      answer: "Oranmiyan"
    },

    {
      number: 28,
      question: "Oranmiyan also founded the:",
      options: ["Benin monarchy", "Dahomey Empire", "Ife kingdom", "Nupe state"],
      answer: "Benin monarchy"
    },

    {
      number: 29,
      question: "When was the Oyo Empire founded?",
      options: ["14th century", "15th century", "16th century", "13th century"],
      answer: "15th century"
    },

    {
      number: 30,
      question: "When did Oyo become powerful and prosperous?",
      options: ["Immediately after founding", "A century later", "Two centuries later", "During colonial rule"],
      answer: "A century later"
    },
    {
      number: 31,
      question: "Oyo Empire’s authority extended as far as:",
      options: ["Benin", "Ghana", "Dahomey", "Sokoto"],
      answer: "Dahomey"
    },

    {
      number: 32,
      question: "Who was the head of the Oyo Empire?",
      options: ["Bashorun", "Alaafin", "Are-Ona-Kakanfo"],
      answer: "Alaafin"
    },
    {
      number: 33,
      question: "The Alaafin was regarded as:",
      options: ["Companion of the gods", "Slave of the gods", "Father of all priests", "The Bashorun’s assistant"],
      answer: "Companion of the gods"
    },

    {
      number: 34,
      question: "The Alaafin was assisted by:",
      options: ["Only the Oyomesi", "Priests, officials, and eunuchs", "Ogboni cult only", "Foreigners"],
      answer: "Priests, officials, and eunuchs"
    },

    {
      number: 35,
      question: "Who checked the powers of the Alaafin?",
      options: ["The Ogboni", "The Ilari", "The Oyomesi", "The Are-Ona-Kakanfo"],
      answer: "The Oyomesi"
    },

    {
      number: 36,
      question: "How many members made up the Oyomesi?",
      options: ["Five", "Seven", "Ten", "Twelve"],
      answer: "Seven"
    },
    {
      number: 37,
      question: "Who was the head of the Oyomesi?",
      options: ["Bashorun", "Are-Ona-Kakanfo", "Alaafin", "Ilari"],
      answer: "Bashorun"
    },

    {
      number: 38,
      question: "What power did the Oyomesi hold over the Alaafin?",
      options: ["Tax collection", "Removal of the Alaafin", "Controlling the army", "Trade supervision"],
      answer: "Removal of the Alaafin"
    },

    {
      number: 39,
      question: "What was the punishment for a deposed Alaafin?",
      options: ["Exile", "Imprisonment", "Tax collection", "Removal of the Alaafin", "Controlling the army", "Trade supervision"],
      answer: "Removal of the Alaafin"
    },

    {
      number: 40,
      question: "Who selected the next Alaafin?",
      options: ["Ogboni cult", "Oyomesi", "Ilari"],
      answer: "Oyomesi"
    },
    {
      number: 41,
      question: "The Ogboni cult’s major role was to:",
      options: ["Train soldiers", "Mediators between the Alaafin and Oyomesi", "Elect new kings"],
      answer: "Mediators between the Alaafin and Oyomesi"
    },

    {
      number: 42,
      question: "Members of the Ogboni cult included:",
      options: ["Slaves", "Women only", "Prominent and free citizens", "Foreigners"],
      answer: "Prominent and free citizens"
    },

    {
      number: 43,
      question: "The Ogboni cult served as:",
      options: ["Religious organization", "Counterbalance to Oyomesi’s power", "Army training group", "Alaafin’s guards"],
      answer: "Counterbalance to Oyomesi’s power"
    },

    {
      number: 44,
      question: "Who headed the Oyo army?",
      options: ["Bashorun", "Are-Ona-Kakanfo", "Alaafin", "Ilari"],
      answer: "Are-Ona-Kakanfo"
    },

    {
      number: 45,
      question: "The Are-Ona-Kakanfo was expected to live:",
      options: ["In the palace", "Outside the capital", "Inside the shrine", "At Oke Oramfe"],
      answer: "Outside the capital"
    },

    {
      number: 46,
      question: "The Oyo army consisted of:",
      options: ["Hunters only", "Infantry and cavalry", "Priests and slaves", "Farmers"],
      answer: "Infantry and cavalry"
    },

    {
      number: 47,
      question: "Which of the following was NOT a function of the Oyo army?",
      options: ["Expansion of the empire", "Stability of the empire", "Suppressing rebellions", "Tax collection"],
      answer: "Tax collection"
    },

    {
      number: 48,
      question: "Provincial governments in Oyo were headed by:",
      options: ["Bashorun", "Princes, minor kings, and Baales", "Ogboni priests", "Merchants"],
      answer: "Princes, minor kings, and Baales"
    },

    {
      number: 49,
      question: "Who acted as the Alaafin’s personal agents in the provinces?",
      options: ["Ilari", "Oyomesi", "Baale", "Are-Ona-Kakanfo"],
      answer: "Ilari"
    },

    {
      number: 50,
      question: "During which festival did provincial governors renew allegiance to the Alaafin?",
      options: ["Odun Egungun", "Bere Festival", "Olojo Festival", "Oro Festival"],
      answer: "Bere Festival"
    },
    {
      number: 51,
      question: "The Bini Kingdom was the first in West Africa to exchange ambassadors with a European power between:",
      options: ["1450–1470", "1481–1504 ✅", "1600–1650", "1550–1580"],
      answer: "1481–1504"
    },

    {
      number: 52,
      question: "The Bini Kingdom exchanged ambassadors with which region?",
      options: ["The East African coast", "The Middle East", "A major European power", "The North African states"]
    },
    {
      number: 53,
      question: "According to Hodgkin (1975), when did he visit Benin?",
      options: ["1481", "1604", "1750", "1500"]
    },
    {
      number: 54,
      question: "Hodgkin described Benin as:",
      options: ["A small town", "A disorganized community", "A great and broad city", "A poor village"]
    },
    {
      number: 55,
      question: "Who was the head of the Bini Kingdom?",
      options: ["The Oni", "The Alaafin", "The Oba", "The Bashorun"]
    },
    {
      number: 56,
      question: "In Bini tradition, succession to the throne was by:",
      options: ["Election", "Primogeniture", "Selection by priests"]
    },
    {
      number: 57,
      question: "Primogeniture means:",
      options: ["The first son inherits the throne", "The most educated becomes king"]
    },
    {
      number: 58,
      question: "The Oba of Benin was both:",
      options: ["Civil and religious head", "Military and trade head", "Religious and judicial head", "Spiritual and foreign head"]
    },

    {
      number: 59,
      question: "Hodgkin described the Oba as:",
      options: ["A mortal ruler", "A warrior chief", "A divine person", "A colonial administrator"]
    },
    {
      number: 60,
      question: "The Bini society was divided into:",
      options: ["Three classes", "Two distinct classes", "Four castes", "Many ethnic groups"]
    },

    {
      number: 61,
      question: "The two classes in Bini society were:",
      options: ["Slaves and nobles", "Commoners and elders", "Nobility (Adesotu) and commoners (Ighiotu)"]
    },
    {
      number: 62,
      question: "The nobility of Bini society consisted of how many title groups?",
      options: ["Two", "Three", "Four", "Five"]
    },

    {
      number: 63,
      question: "Which of the following was NOT a group among the Bini nobility?",
      options: ["The Uzama", "The Eghaevbo n’ Ogbe", "The Eghaevbo n’ Ore", "The Ogboni"]
    },

    {
      number: 64,
      question: "The Uzama were part of:",
      options: ["The guilds", "The nobility", "The military"]
    },
    {
      number: 65,
      question: "The Eghaevbo n’ Ogbe were known as:",
      options: ["Palace chiefs", "Priests", "soldiers", "Town chiefs"]
    },
    {
      number: 66,
      question: "The Eghaevbo n’ Ore were known as:",
      options: ["Palace chiefs", "Traders", "Town chiefs", "Farmers"]
    },
    {
      number: 67,
      question: "The ordinary people in Bini society were mainly organized into:",
      options: ["Clans", "Guilds", "Age grades", "Religious groups"]
    },
    {
      number: 68,
      question: "The Bini guilds were groups of:",
      options: ["Warriors", "Farmers", "Skilled professionals", "Traders"]
    },

    {
      number: 69,
      question: "Examples of guild members included:",
      options: ["Drummers and dancers", "Carvers, brass-workers, blacksmiths", "Warriors and tax collectors", "Messengers and scribes"]
    },

    {
      number: 70,
      question: "The Bini guilds were important because:",
      options: ["They organized festivals", "They acted as local administrators", "They trained soldiers", "They collected taxes"]
    },
    {
      number: 71,
      question: "The Igbo people are best known for having what type of society?",
      options: ["Centralized", "Monarchical", "Acephalous", "Aristocratic"]
    },
    {
      number: 72,
      question: "The term acephalous means:",
      options: ["Government without kings", "Government by priests", "Rule by merchants", "Rule by elders only"]
    },
    {
      number: 73,
      question: "The Igbo system of government is also called:",
      options: ["Monarchy", "Segmented government", "Democratic system", "Feudal system"]
    },
    {
      number: 74,
      question: "The Igbo system of government is also called:",
      options: ["Monarchy", "Segmented government", "Democratic system", "Feudal system"]
    },
    {
      number: 75,
      question: "How many sub-cultures exist in Igbo society?",
      options: ["Three", "Four", "Five", "Six"]
    },
    {
      number: 76,
      question: "The Igbo sub-cultures include all except:",
      options: ["Eastern Igbo", "South-Eastern Igbo", "Northern Igbo", "South-Western Igbo  "]
    },
    {
      number: 77,
      question: "The Igbo are predominantly:",
      options: ["Soldiers and priests", "Farmers and traders", "Hunters and fishermen", "Craftsmen and sailors"]
    },
    {
      number: 78,
      question: "Igbo language is characterized by:",
      options: ["Mutual intelligibility of dialects", "Completely different languages", "Latin alphabets", "Arabic origin"]
    },
    {
      number: 79,
      question: "The political system of the Igbo is based on:",
      options: ["Centralized authority", "Decentralization of power", "Divine kingship", "Military leadership"]
    },
    {
      number: 80,
      question: "The symbol of authority among the Igbo is:",
      options: ["Staff of office", "Sword of Ogun", "The Ofo", "The royal crown"]
    },
    {
      number: 81,
      question: "According to Professor Onwuejeogwu, who was the ancestor of the Igbo?",
      options: ["Oduduwa", "Obatala", "Eri", "Oranmiyan"]
    },
    {
      number: 82,
      question: "The king is chosen by the gods",
      options: ["True", "False"]
    },

    {
      number: 83,
      question: "Igbo language is characterized by:",
      options: ["Mutual intelligibility of dialects", "Completely different languages", "Latin alphabets", "Arabic origin"]
    },
    {
      number: 84,
      question: "The political system of the Igbo is based on:",
      options: ["Centralized authority", "Decentralization of power", "Divine kingship", "Military leadership"]
    },
    {
      number: 85,
      question: "The symbol of authority among the Igbo is:",
      options: ["Staff of office", "Sword of Ogun", "The Ofo", "The royal crown"]
    },
    {
      number: 86,
      question: "The political system of the Igbo is based on:",
      options: ["Centralized authority", "Decentralization of power", "Divine kingship", "Military leadership"]
    },
    {
      number: 87,
      question: "The symbol of authority among the Igbo is:",
      options: ["Staff of office", "Sword of Ogun", "The Ofo", "The royal crown"]
    }
  ],
  get103: [
    {
      number: 1,
      question: "The following are in the group of.. Hoes, cutlasses, handicrafts, motor vehicle",
      options: ["Culture", "Artifacts", "Materials", "Values", "Customs"],
      answer: "Artifacts"
    },
    {
      number: 2,
      question: "The study of human culture is called",
      options: ["Sociology", "Psychology", "Anthropology", "History", "Archaeology"],
      answer: "Anthropology"
    },
    {
      number: 3,
      question: "The common characteristic of Nok terracotta is..",
      options: [
        "Treatment of the teeth",
        "Treatment of the mouth",
        "The treatment of the eye"
      ],
      answer: "The treatment of the eye"
    },
    {

      number: 4,
      question: "----------------------is the exchange of cultural features or trait",
      options: [
        "Culturation", "value", "Acculturation", "Norms"
      ],
      answer: "Acculturation"
    },
    {
      number: 5,
      question: "The method which the Nok sculpture was produced is",
      options: ["Surmising", "Casting", "Modeling", "Carving", "Sculpting"],
      answer: "Modeling"
    },
    {
      number: 6,
      question: "The Nok culture is found in what part of Nigeria",
      options: ["North", "South", "East", "West"],
      answer: "North"
    },
    {
      number: 7,
      question: "The concepts of culture are grouped into",
      options: ["One", "Two", "Three", "Four", "Five"],
      answer: "Two",
    },
    {
      number: 8,
      question: "When culture is said to be found everywhere implies that culture is",
      answer: "Universal",
      options: ["Universal", "Learned", "Dynamic", "Stable"],
      answer: "Universal"
    },
    {
      number: 9,
      question: "Igbo Ukwu arts was found in the.",
      options: ["8TH century", "9TH century", "10TH century", "4TH century"],
      answer: "9TH century",
    },
    {
      number: 10,
      question: "Rock painting can be found in part of Nigeria",
      options: ["Northern", "Southern", "Eastern", "Western", "None of the above"],
      answer: "Northern"
    },
    {
      number: 11,
      question: "Culture facilitates the gratification of basic human needs such as.",
      options: ["Food, Shelter, Water, Procreation", "Customs", "Values", "Norms"],
      answer: "Food, shelter, water and procreation"
    },
    {
      number: 12,
      question: "Igbo-Ukwu is in what state in Nigeria",
      options: ["Enugu", "Anambra", "Ebonyi", "Edo", "Divers"],
      answer: "Anambra"
    },
    {
      number: 13,
      question: "Were can we find portraits in bronze as well as terracotta",
      answer: "Ife",
      options: ["Edo", "Brass", "Ife", "Benin", "Kano", "Nok"]
    },
    {
      number: 14,
      question: "Culture in anthropological parlance refers to traditional modes of..",
      options: ["Behavior", "Culturazation", "Customs", "Values", "Norms"],
      answer: "Behavior",
    },
    {
      number: 15,
      question: "Culture is--------------through the process of socialization or enculturation.",
      options: ["Learned", "Universal", "Dynamic", "Stable", "Static"],
      answer: "Learned",
    },
    {
      number: 16,
      question: "----------------is a process whereby a Child learn of its first culture",
      options: ["Acculturation", "Culture", "Culturation", "Enculture"],
      answer: "Enculturation",
    },
    {
      number: 17,
      question: "Mining in the Nok community was first found in..",
      options: ["1904", "1840", "1804", "1850", "1860"],
      answer: "1904",
    },
    {
      number: 18,
      question: "Nigerian arts is usually categorized into.",
      options: ["Four", "Three", "Five", "Six"],
      answer: "Three",
    },
    {
      number: 19,
      question: "Culture is said to be when the culture of a people is modified through time",
      options: ["Static", "Learned", "Dynamic", "Stable", "Universal"],
      answer: "Dynamic",
    },
    {
      number: 20,
      question: "Another notable feature of the Nok people is.",
      options: ["Human head", "Teeth", "Eye", "Eyebrow", "Head", "Iron working"],
      answer: "Iron working"
    },
    {
      number: 21,
      question: "Culture is an instrument of.",
      options: ["Adaptation", "Adaptment", "Adopt", "Adapt"],
      answer: "Adaptation",
    },
    {
      number: 22,
      question: "Ile-Ife is located in what part of Nigeria",
      option: ["Ogun", "Ondo", "Osun", "Ekiti", "Kwara", "Oyo", "Lagos"],
      answer: "Osun"
    },
    {
      number: 23,
      question: "The Nok culture is dated to be about",
      options: ["1500 BC", "500 BC", "1000 BC", "2000 BC"],
      answer: "500 BC",
    },
    {
      number: 24,
      question: "------------------Is a process by which new traits are added",
      options: ["Culturation", "Acculturation", "Enculturation", "Culture"],
      answer: "Culturation"
    },
    {
      number: 25,
      question: "-------------------saw human development in terms of great technological revolutions which shape destiny of man",
      options: ["Cultural accumulation", "Cultural evolution", "Enculture", "Value"],
      answer: "Cultural evolution"
    },
    {
      number: 26,
      question: "The following are the views of-----------------that culture is a complex whole which includes knowledge, belief, art, morals, law, custom and any other capabilities and habits acquired",
      options: ["Edward B. Tylor", "White Taylor", "Spencer Taylor", "Moore Greece", "Gordon childe", "Gordon Hilda Taba"],
      answer: "Edward B. Tylor"
    },
    {
      number: 27,
      question: "When did the Ife art come to limelight?",
      options: ["1901", "1910", "1810", "1801"],
      answer: "1910"
    },
    {
      number: 28,
      question: "Nok culture can be found in what part of Nigeria",
      options: ["Jos Plateau", "Kano", "Kaduna", "Bauchi", "Zaria", "Katsina", "Sokoto", "Borno", "Yobe", "Gombe", "Nassarawa", "Taraba"],
      answer: "Jos Plateau"
    },
    {
      number: 29,
      question: "----------------and----------------------were of the views that culture holds the key to the way in which man and society develop.",
      options: ["Hilda and Taba", "Spencer and Taylor", "Moore Greece", "White and Taylor"],
      answer: "Spencer and Taylor"
    },
    {
      number: 30,
      question: "------------------is the oldest iron working civilization in West Africa",
      options: ["Yoruba", "Hausa", "Nok", "Igbo"],
      answer: "Nok"
    },
  ],
  sta122: [
    {
      number: 1,
      question: "The cumulative function of a random discrete variable V is often written as",
      options: ["F(x)", "f(x)", "F`(x)", "f`(X)", "d(x)"],
      answer: "F(x)"
    },
    {
      number: 2,
      question: "Ten percent of the tools produced in a certain manufacturing process turns out to be defective. Find the probability that in a sample of 100 tools at random, exactly two will be defective",
      options: ["0.0023", "0.23", "0.023", "23", "0.00023"],
      answer: "0.0023"
    },
    {
      number: 3,
      question: "Which of the following distributions has the variance of the number of occurrences equal to the mean number of occurrences?",
      options: ["Bernoulli Distribution", "Normal Distribution", "Poisson Distribution", "Geometric Distribution"],
      answer: "Poisson Distribution"
    },
    {
      number: 4,
      question: "The probability density function of a random discrete variable X is often written as",
      options: ["F(x)", "f(x)", "F`(x)", "f`(x)", "d(x)"],
      answer: "f(x)"
    },
    {
      number: 5,
      question: "Suppose that 4% of items manufactured by a certain factory are defective. Find the probability that in a sample of 100 items selected random, there would be two defectives.",
      options: ["0.9082", "0.9084", "0.9261", "0.8761", "0.3451"],
      answer: "0.9082"
    },
    {
      number: 6,
      question: "If a worn machine tools produce 1% defective parts and the parts produced are independent. Find the mean number of the defective parts out of 25",
      options: ["0.01", "0.252", "0.05", "0.50", "0.25"],
      answer: "0.25"
    },
    {
      number: 7,
      question: "Supposed that 4% of the items manufactured by certain factory are defective. Determine the probability that in a sample of 100 items at random. There would be at least 4 defectives",
      options: ["0.1934", "0.1944", "0.1945", "0.1945", "0.5705"],
      answer: "0.1945"
    },
    {
      number: 8,
      question: "260 bolts are examined as they are produced and 5 of them are found to be defective. Find the probability of a bolt selected is not defective",
      options: ["1", "0.921", "0.234", "0.12", "0.981"],
      answer: "0.981"
    },
    {
      number: 9,
      question: "On the basis of pass experience, the probability that a certain electrical component will be satisfactory is 0.98. The components are sampled item by item from continuous production. In a sample of five components. What is the probability of finding exactly two defective?",
      options: ["0.0038", "0.00038", "0.32", "0.032", "0.3222"],
      answer: "0.0038"
    },
    {
      number: 10,
      question: "The probability that a thirty – year –old man will survive a fixed length of time is 0.995. An insurance company sells him a N20,000.00 life insurance policy for this length of time for a premium of N200.00. What is the expected gain for the insurance company?",
      options: ["N700.00", "N300.00", "N500.00", "N100.00", "50.00"],
      answer: "N100.00"
    },
    {
      number: 11,
      question: "Find the value of z such that P(Z>z)=0.05",
      options: ["1.65", "1.96", "2.65", "2.453", "0"],
      answer: "1.65"
    },
    {
      number: 12,
      question: "A machine produces 22 items during a shift. Three of the 22 items are defective and the rest are non-defective. In how many different order can the 22 items be arranged if all the defective items are considered identical and all the non-defective items are identical of a different class?",
      options: ["1530", "2171", "1540", "1276", "2109"],
      answer: "1540"
    },
    {
      number: 13,
      question: "What does a probability of 0 indicate?",
      options: ["The event will occur with certainty", "The event will not occur", "The event may or may not occur", "The event has an equal chance of occurring or not occurring"],
      answer: "The event will not occur"
    },
    {
      number: 14,
      question: "What does a probability of 1 indicate?",
      options: ["The event will not occur", "The event will occur with certainty", "The event may or may not occur", "The event has a 50% chance of occurring"],
      answer: "The event will occur with certainty"
    },
    {
      number: 15,
      question: "In mathematical terms, probability is defined as:",
      options: ["The ratio of the number of favorable outcomes to the total number of possible outcomes", "The ratio of the number of unfavorable outcomes to the total number of possible outcomes", "The total number of possible outcomes divided by the number of favorable outcomes", "The sum of all possible outcomes"],
      answer: "The ratio of the number of favorable outcomes to the total number of possible outcomes"
    },
    {
      number: 16,
      question: "Why is probability essential in statistics?",
      options: ["It measures the exact outcome of random events", "It provides a framework for making predictions and informed decisions", "It eliminates all uncertainty in statistical analysis", "It guarantees the accuracy of statistical data"],
      answer: "It provides a framework for making predictions and informed decisions"
    },
    {
      number: 17,
      question: "The probability of an event occurring is expressed as a number between:",
      options: ["-1 and 1", "0 and 100", "0 and 1", "0 and infinity"],
      answer: "0 and 1"
    },
    {
      number: 18,
      question: "What are the three main concepts of probability?",
      options: ["Subjective, Empirical, Theoretical", "Classical, Relative Frequency, Axiomatic", "Bayesian, Frequentist, Axiomatic", "Empirical, Subjective, Theoretical"],
      answer: "Classical, Relative Frequency, Axiomatic"
    },
    {
      number: 19,
      question: "Which probability concept is based on equally likely outcomes?",
      options: ["Axiomatic", "Relative Frequency", "Classical or Equally Likelihood", "Subjective"],
      answer: "Classical or Equally Likelihood"
    },
    {
      number: 20,
      question: "In the Classical concept of probability, how is the probability of an event calculated?",
      options: ["By counting the number of favorable outcomes only", "By dividing the number of favorable outcomes by the total number of possible outcomes", "By averaging past occurrences", "By subjective judgment"],
      answer: "By dividing the number of favorable outcomes by the total number of possible outcomes"
    },
  ],
  // 200L
  gst201: [
    {
      number: 1,
      question: "One hallmark of successful entrepreneurs is the ability to fail ________",
      options: ["Wisely", "Easily", "Intelligently", "Successfully"],
      answer: "Intelligently"
    },
    {
      number: 2,
      question: "Entrepreneurs who work together as co-owners of their business are referred to as ____",
      options: ["Partners", "Copreneurs", "Colleagues", "Joint Owners"],
      answer: "Copreneurs"
    },
    {
      number: 3,
      question: "Ability to think and develop new ideas and discover new ways of looking at problems and opportunities is called ____",
      options: ["Innovation", "Creativity", "Analysis", "Productivity"],
      answer: "Creativity"
    },
    {
      number: 4,
      question: "A description of the future direction of a business is known as ____",
      options:
        ["Mission", "Business plan", "Goal", "Strategy"],
      answer: "Business plan"
    },
    {
      number: 5,
      question: "Any distinctive words, symbols or trade dress that a company uses to identify its products is called ____"
      , options: ["Brand", "Copyright", "Trademark", "Patent"],
      answer: "Trademark"
    },
    {
      number: 6,
      question: "To avoid pitfalls you as an entrepreneur should do all the following EXCEPT ____",
      options:
        ["Planning", "Creativity and innovation", "Market research", "Record keeping"],
      answer: "Creativity and innovation"
    },
    {
      number: 7,
      question: "Creative process involves ____ steps",
      options:
        ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      number: 8,
      question: "Investigation as a step in the creative process requires individuals to ____",
      options:
        ["Develop a solid understanding about the problem", "Skip analysis", "Avoid brainstorming"
          , "Seek investors first"],
      answer: "Develop a solid understanding about the problem"
    },
    {
      number: 9,
      question: "People who resigned from their company jobs and start their own businesses are referred to as ____",
      options: ["Corporate dropout", "Entrepreneurs", "Freelancers", "Consultants"],
      answer: "Corporate dropout"
    },
    {
      number: 10,
      question: "Wedded couples who decide to work together as co-owners of a business can be described as ____",
      options: ["Co-founders", "Copreneurs", "Partners", "Marriedpreneurs"],
      answer: "Copreneurs"
    },
    {
      number: 11,
      question: "Which of these has the same meaning as corporate entrepreneurship?",
      options: ["Intrapreneurship", "Small business", "Social entrepreneurship", "Joint venture"],
      answer: "Intrapreneurship"
    },
    {
      number: 12,
      question: "A person who creates his own business because he could not find a job anywhere is referred to as ____",
      options: ["Innovative entrepreneur", "Nascent entrepreneur", "Opportunistic entrepreneur", "Manager"],
      answer: "Nascent entrepreneur"
    },
    {
      number: 13,
      question: "A corporation is a separate legal entity apart from its owners that receives the right to exist from the state in which it is incorporated.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      number: 14,
      question: "A domestic corporation is one doing business in the state in which it is incorporated.",
      options:
        ["True", "False"],
      answer: "True"
    },
    {
      number: 15,
      question: "A foreign corporation does business in a state other than the one in which it is incorporated.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      number: 16,
      question: "An alien corporation is one formed in one country and doing business in another.",
      options:
        ["True", "False"],
      answer: "True"
    },
    {
      number: 17,
      question: "A provision requiring shareholders who want to sell their stock in a corporation to offer it first to the corporation is termed ____",
      options: ["Preemptive right", "Right to first refusal", "Shareholding right", "Stockholder’s agreement"],
      answer: "Right to first refusal"
    },
    {
      number: 18,
      question: "A rule under which a corporation will operate is called ____",
      options: ["Bylaw", "Policy", "Regulation", "Code"],
      answer: "Bylaw"
    },
    {
      number: 19,
      question: "A franchiser’s sale of a complete business format and system to a franchisee is referred to as ____",
      options: ["Pure franchising", "Trade franchising", "Business leasing", "Product franchising"],
      answer: "Pure franchising"
    },
    {
      number: 20,
      question: "A low-cost marketing strategy designed to give small companies an edge over their larger, richer rivals is referred to as ____",
      options: ["Digital marketing", "Guerrilla marketing strategy", "Content marketing", "Influencer marketing"],
      answer: "Guerrilla marketing strategy"
    },
    {
      number: 21,
      question: "To be customer-driven, an effective marketing program must be based on ____",
      options: ["Clear and concise definition of a company's target customers", "Low prices", "High production"
        , "Celebrity endorsements"],
      answer: "Clear and concise definition of a company's target customers"
    },
    {
      number: 22,
      question: "A partnership in which all partners must be professionals is called ____",
      options: ["Limited partnership", "Limited Liability Partnership", "Joint venture", "General partnership"],
      answer: "Limited Liability Partnership"
    },
    {
      number: 23,
      question: "The followings are forms of partnership EXCEPT ____",
      options: ["General partnership", "Limited partnership", "Limited Liability Partnership", "Unlimited partnership"],
      answer: "Unlimited partnership"
    },
    {
      number: 24,
      question: "A partnership whose shares are exchanged just like a corporation is called ____",
      options: ["Joint stock partnership", "Master Limited Partnership", "Open partnership", "Equity partnership"],
      answer: "Master Limited Partnership"
    },
    {
      number: 25,
      question: "The most complex/difficult of the three major forms of business ownership is ____",
      options: ["Sole proprietorship", "Partnership", "Corporation", "Joint venture"],
      answer: "Corporation"
    },
    {
      number: 26,
      question: "The following are all disadvantages of sole proprietorship business EXCEPT ____",
      options: ["Unlimited liability", "Lack of continuity", "Profit incentives", "Limited capital"],
      answer: "Profit incentives"
    },
    {
      number: 27,
      question: "The sole proprietorship is the most legally restricted form of business.",
      options:
        ["True", "False"],
      answer: "False"
    },
    {
      number: 28,
      question: "Partners who share in owning, operating, and managing a business are called ____",
      options: ["General partners", "Limited partners", "Sleeping partners", "Silent partners"],
      answer: "General partners"
    },
    {
      number: 29,
      question: "Partners who do not take an active role in managing a business and whose liability is limited to their investment are called ____",
      options: ["Silent partners", "Limited partners", "General partners", "Co-partners"],
      answer: "Limited partners"
    },
    {
      number: 30,
      question: "The steps in conducting market research include all the following EXCEPT ____",
      options: ["Prototyping", "Data collection", "Problem definition", "Analysis"],
      answer: "Prototyping"
    },
    {
      number: 31, question: "Willingness of an entrepreneur to take risk can also be described as ____",
      options: ["Courage", "Tolerance for ambiguity", "Decision-making", "Flexibility"],
      answer: "Tolerance for ambiguity"
    },
    {
      number: 32,
      question: "Successful small businesses that are growing at 20% or more per year are described as ____",
      options: ["Unicorns", "Gazelles", "Startups", "Innovators"],
      answer: "Gazelles"
    },
    {
      number: 33,
      question: "'Try, Try and Try Again' is a description of which characteristic of an entrepreneur?",
      options:
        ["Persistence", "Tenacity", "Creativity", "Confidence"],
      answer: "Tenacity"
    },
    {
      number: 34,
      question: "The ability of entrepreneurs to adapt their businesses to meet changing tastes and trends is referred to as ____"
      , options: ["Creativity", "Flexibility", "Resilience", "Adaptability"],
      answer: "Flexibility"
    },
    {
      number: 35,
      question: "Entrepreneurs perform a vital function by looking at old ways of doing things and asking, 'Is there a better way?' By destroying the old, they create the new. This process is also referred to as ____",
      options: ["Creative destruction", "Innovation", "Business renewal", "Transformation"],
      answer: "Creative Destruction"
    },
    {
      number: 36,
      question: "A preconceived idea of what the world is, what it should be like and how it should work is termed ____",
      options: ["Mindset", "Belief", "Paradigm", "Perception"],
      answer: "Paradigm"
    },
    {
      number: 37,
      question: "Successful entrepreneurs often go beyond conventional wisdom as they ask ____",
      options: ["Why not?", "How come?", "What if?", "When?"],
      answer: "Why not?"
    },
    {
      number: 38,
      question: "Creating and delivering desired goods to customers is termed ____ production",
      options: ["Mass", "Batch", "Marketing", "Continuous"],
      answer: "Marketing"
    },
    {
      number: 39,
      question: "Small group of people interacting with very little structure with the goal of producing a large quantity of novel and imaginative ideas are said to be ____",
      options: ["Innovating", "Brainstorming", "Planning", "Strategizing"],
      answer: "Brainstorming"
    },
    {
      number: 40,
      question: "As a business increases in size and complexity, problems increase in magnitude. This among the deadly entrepreneurial mistakes is referred to as ____",
      options: ["Uncontrolled growth", "Poor planning", "Low sales", "Overproduction"],
      answer: "Uncontrolled growth"
    }
  ],
  get202: [
    {
      number: 1,
      question: "What does PCB stand for?",
      options: ["Printed Control Board", "Printed Circuit Board", "Power Circuit Base", "Primary Connection Board"],
      answer: "Printed Circuit Board"
    }
  ],
  get208: [
    {
      number: 1,
      question: "What is component assembly?",
      options: ["Assembling of components into a functional end product", "Breaking down products into smaller parts", "Packaging finished goods for shipping", "Designing parts before manufacturing"],
      answer: "Assembling of components into a functional end product"
    }
  ],
  eet219: [
    {
      number: 1,
      question: "What is the main charge carrier in conductors?",
      options: ["Protons", "Neutrons", "Electrons", "Ions"],
      answer: "Electrons"
    }
  ],
  get217: [
    {
      number: 1,
      question: "What produces a magnetic field?",
      options: ["Stationary electric charge", "Electric current", "Permanent magnet only", "Electrostatic field"],
      answer: "Electric current"
    }
  ],
  get201: [
    {
      number: 1,
      question: "What does PCB stand for?",
      options: ["Printed Control Board", "Printed Circuit Board", "Power Circuit Base", "Primary Connection Board"],
      answer: "Printed Circuit Board"
    },
    {
      number: 2,
      question: "What are PCBs used for?",
      options:
        ["Decoration", "Electronic foundations", "Mechanical welding", "Data transfer only"],
      answer: "Electronic foundations"
    },
    {
      number: 3,
      question: "What are the three main types of PCBs?",
      options: ["Rigid, Flexible, Metal-core", "Solid, Liquid, Gas", "Plastic, Metal, Rubber", "Core, Fiber, Glass"],
      answer: "Rigid, Flexible, Metal-core"
    },
    {
      number: 4,
      question: "Which PCB type is made from strong materials and is most common?",
      options: ["Metal-core", "Rigid", "Flexible", "Hybrid"],
      answer: "Rigid"
    },
    {
      number: 5,
      question: "Which type of PCB is made from flexible material?", options: ["Rigid", "Flexible", "Metal-core", "Soft-rigid"],
      answer: "Flexible"
    },
    {
      number: 6,
      question: "Which PCB type helps diffuse heat across the surface?",
      options: ["Flexible", "Rigid", "Metal-core", "Plastic"],
      answer: "Metal-core"
    },
    {
      number: 7,
      question: "What is the main advantage of flexible PCBs?",
      options: ["They are cheaper", "They can bend and fit compact designs", "They are waterproof", "They are thicker"],
      answer: "They can bend and fit compact designs"
    },
    {
      number: 8,
      question: "What is the purpose of a metal-core PCB?",
      options: ["Reduce power", "Prevent overheating", "Increase voltage", "Store data"],
      answer: "Prevent overheating"
    },
    {
      number: 9,
      question: "What are the three classes of PCBs?",
      options: ["Low, Medium, High", "Class 1, Class 2, Class 3"
        , "Basic, Intermediate, Expert", "Simple, Complex, Advanced"],
      answer: "Class 1, Class 2, Class 3"
    },
    {
      number: 10,
      question: "What does Class 1 PCB represent?",
      options: ["Military use", "Consumer electronics", "Aerospace boards", "Medical equipment"],
      answer: "Consumer electronics"
    },
    {
      number: 11,
      question: "What does Class 2 PCB represent?",
      options: ["Consumer electronics", "High reliability devices", "Aircraft systems", "Toys"],
      answer: "High reliability devices"
    },
    {
      number: 12,
      question: "What does Class 3 PCB represent?",
      options: ["Low reliability devices", "Simple devices", "High reliability and safety-critical systems", "Disposable gadgets"],
      answer: "High reliability and safety-critical systems"
    },
    {
      number: 13,
      question: "Give an example of a Class 3 PCB application.",
      options: ["Smartphones", "Airplanes", "Radios", "TV remotes"],
      answer: "Airplanes"
    },
    {
      number: 14,
      question: "What software tools are used to design PCBs?",
      options: ["Microsoft Word", "CAD tools", "Excel", "Photoshop"],
      answer: "CAD tools"
    },
    {
      number: 15,
      question: "What are the two main categories in PCB design?",
      options: ["Layout and Assembly", "Schematic capture and PCB layout", "Testing and Shipping", "Simulation and Printing"],
      answer: "Schematic capture and PCB layout"
    },
    {
      number: 16,
      question: "What does schematic capture involve?",
      options: ["Building hardware", "Creating the circuit diagram", "Etching the board", "Soldering components"],
      answer: "Creating the circuit diagram"
    },
    {
      number: 17,
      question: "What does PCB layout involve?",
      options: ["Designing the physical circuit board", "Testing connections", "Printing blueprints", "Simulation only"],
      answer: "Designing the physical circuit board"
    },
    {
      number: 18,
      question: "What is the first step in PCB design?",
      options: ["Routing", "Simulation", "Developing library CAD parts", "Soldering"],
      answer: "Developing library CAD parts"
    },
    {
      number: 19,
      question: "What are CAD libraries made of?",
      options: ["Components and cases", "Symbols, models, footprints", "Traces only", "Schematic pages only"],
      answer: "Symbols, models, footprints"
    },
    {
      number: 20,
      question: "What is circuit simulation used for?",
      options: ["Check colors", "Verify circuit operation", "Place components", "Export drawings"],
      answer: "Verify circuit operation"
    },
    {
      number: 21,
      question: "What are nets in a schematic?",
      options: ["Cables", "Lines representing electrical connections", "Data signals", "Ground loops"],
      answer: "Lines representing electrical connections"
    },
    {
      number: 22,
      question: "What are footprints in PCB design?", options: ["3D models", "Pad patterns for soldering", "Wires", "Color marks"],
      answer: "Pad patterns for soldering"
    },
    {
      number: 23,
      question: "What ensures traces do not touch each other?",
      options: ["Design rules", "Simulation", "Power planes", "User testing"],
      answer: "Design rules"
    },
    {
      number: 24,
      question: "What does DRC stand for?", options: ["Design Rule Check", "Direct Routing Code", "Data Routing Connection", "Dynamic Rule Chart"],
      answer: "Design Rule Check"
    },
    {
      number: 25,
      question: "What is the purpose of power and ground planes?",
      options: ["Hold components", "Provide current paths", "Add color", "Attach cables"],
      answer: "Provide current paths"
    },
    {
      number: 26,
      question: "What happens if ground planes have many holes?", options: ["Noise increases", "Cooling improves", "Power doubles", "Voltage drops"],
      answer: "Noise increases"
    },
    {
      number: 27,
      question: "What is the purpose of a final rule check?",
      options: ["Add more parts", "Ensure design compliance", "Test current", "Export images"],
      answer: "Ensure design compliance"
    },
    {
      number: 28,
      question: "What information is added during silkscreening?",
      options: ["Logos and labels", "Traces", "Holes", "Power circuits"],
      answer: "Logos and labels"
    },
    {
      number: 29,
      question: "What is a BOM in PCB design?",
      options: ["Board Output Method", "Bill of Materials", "Base of Modules", "Board Object Map"],
      answer: "Bill of Materials"
    },
    {
      number: 30,
      question: "What is PCB routing?",
      options: ["Connecting nets with races", "Cutting the board", "Labeling parts", "Assembling screws"], answer: "Connecting nets with traces"
    },
    {
      number: 31,
      question: "What can happen with poor routing?",
      options: ["Better performance", "Cross-talk or signal issues", "Faster signals", "Higher durability"],
      answer: "Cross-talk or signal issues"
    },
    {
      number: 32, question: "What comes after PCB routing?",
      options: ["Testing", "Final rule check", "Soldering", "Simulation"],
      answer: "Final rule check"
    },
    {
      number: 33,
      question: "What is the first step in PCB manufacturing?",
      options: ["Etching", "Sending files for fabrication"
        , "Assembling", "Soldering"],
      answer: "Sending files for fabrication"
    },
    {
      number: 34,
      question: "What happens during fabrication?",
      options: ["Etching traces", "Adding glue", "Heating components", "Cutting wires"],
      answer: "Etching traces"
    },
    {
      number: 35, question: "What happens during assembly?",
      options: ["Painting", "Mounting and soldering components", "Cooling", "Testing power"],
      answer: "Mounting and soldering components"
    }, {
      number: 36,
      question: "What comes after soldering components?",
      options: ["Inspection and testing", "Repainting", "Rewiring", "Packaging"],
      answer: "Inspection and testing"
    }, {
      number: 37,
      uestion: "Why is quality control important in PCB manufacturing?",
      options: ["For decoration", "To ensure reliability and performance", "To add labels", "To reduce color"],
      answer: "To ensure reliability and performance"
    },
    {
      number: 38,
      question: "Why are simulations important?",
      options: ["Save time and money", "Make designs slower", "Add more layers", "Reduce design rules"],
      answer: "Save time and money"
    },
    {
      number: 39, question: "What is SPICE used for?",
      options:
        ["Cooking", "Circuit simulation", "Data encryption", "Wiring tests"],
      answer: "Circuit simulation"
    },
    {
      number:
        40, question: "Why is component placement important?",
      options: ["Affects performance and assembly", "Adds weight"
        , "Improves color", "Reduces cost only"],
      answer: "Affects performance and assembly"
    },
    {
      number: 41,
      question: "What should be considered when placing components?",
      options: ["Cooling, connections, noise", "Aesthetics", "Price", "Color"],
      answer: "Cooling, connections, noise"
    },
    {
      number: 42,
      question: "What carries signals and return current?",
      options: ["Power and ground planes", "Traces", "Wires only"
        , "Metal frame"], answer: "Power and ground planes"
    },
    {
      number: 43,
      question: "What can CAD tools automatically check?",
      options: ["Trace errors and spacing", "Temperature", "Color"
        , "Voltage only"], answer: "Trace errors and spacing"
    },
    {
      number: 44,
      question: "What files are used for PCB manufacturing?",
      options: ["PDF", "Gerber files", "DOCX", "TXT"],
      answer: "Gerber files"
    },
    {
      number: 45,
      question: "What is the benefit of using CAD tools?",
      options: ["Accuracy and speed", "Manual errors", "Higher cost", "Visual effects"],
      answer: "Accuracy and speed"
    },
    {
      number: 46,
      question: "What company provides PCB design tools mentioned in the article?",
      options: ["Cadence", "Adobe"
        , "Siemens", "Google"],
      answer: "Cadence"
    }, {
      number: 47,
      question: "What happens if design data is inaccurate?"
      , options: ["Manufacturing errors", "Better quality", "More speed", "Larger boards"],
      answer: "Manufacturing errors"
    },
    {
      number: 48, question: "Why is understanding PCB manufacturing important?",
      options: ["Better design decisions", "Color choice", "Larger boards", "Faster printing"],
      answer: "Better design decisions"
    }, {
      number: 49, question: "What is the role of simulation tools in PCB design?",
      options: ["Test circuits before hardware build", "Paint the board", "Cut traces", "Solder components"],
      answer: "Test circuits before hardware build"
    },
    {
      number: 50,
      question: "What is the final outcome of PCB assembly?",
      options: ["A working electronic board", "Loose components"
        , "Incomplete parts", "Plastic case"],
      answer: "A working electronic board"
    }
  ],


  // 300L
  get301: [
    {
      number: 1,
      question: "Sample question for GET 301",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A"
    }
  ],
  get208: [
    {
      number: 1,
      question: "What is component assembly?",
      options: [
        "Assembling of components or subassemblies into a functional end product",
        "Breaking down products into smaller parts",
        "Packaging finished goods for shipping",
        "Designing parts before manufacturing"
      ],
      answer: "Assembling of components or subassemblies into a functional end product"
    },
    {
      number: 2,
      question: "Component assembly is a broad term used in which industry?",
      options: ["Agriculture", "Manufacturing", "Banking", "Tourism"],
      answer: "Manufacturing"
    },
    {
      number: 3,
      question: "Component assembly can be defined as the _____ of a product.",
      options: ["value chain", "design stage", "packaging process", "sales chain"],
      answer: "value chain"
    },
    {
      number: 4,
      question: "What is required to achieve precision and quality in component assembly?",
      options: ["Luck", "Technical know-how and experience", "Guesswork", "Automation only"],
      answer: "Technical know-how and experience"
    },
    {
      number: 5,
      question: "What is a sub-assembly?",
      options: [
        "A smaller assembly made of related parts before the final assembly",
        "A testing process after assembly",
        "A marketing technique",
        "A software simulation"
      ],
      answer: "A smaller assembly made of related parts before the final assembly"
    },
    {
      number: 6,
      question: "Why do companies have different approaches to component assembly?",
      options: [
        "Because components vary from company to company",
        "Because machines are identical everywhere",
        "Because government mandates it",
        "Because all products are the same"
      ],
      answer: "Because components vary from company to company"
    },
    {
      number: 7,
      question: "What is the main goal of component assembly services?",
      options: [
        "To combine individual components into cohesive units efficiently",
        "To increase packaging costs",
        "To create prototypes only",
        "To slow down production"
      ],
      answer: "To combine individual components into cohesive units efficiently"
    },
    {
      number: 8,
      question: "Which industries heavily rely on component assembly?",
      options: ["Automotive, electronics, and aerospace", "Agriculture, mining, and textile", "Education, finance, and media", "None of the above"],
      answer: "Automotive, electronics, and aerospace"
    },
    {
      number: 9,
      question: "What is one major advantage of outsourcing component assembly?",
      options: [
        "Focus on core competencies",
        "Loss of product quality",
        "Increased production errors",
        "Reduced scalability"
      ],
      answer: "Focus on core competencies"
    },
    {
      number: 10,
      question: "What does sub-assembly manufacturing involve?",
      options: [
        "Creating intermediate assemblies of related parts",
        "Disassembling final products",
        "Labeling products for sale",
        "Testing only finished goods"
      ],
      answer: "Creating intermediate assemblies of related parts"
    },
    {
      number: 11,
      question: "What is an example of sub-assembly in the automotive industry?",
      options: [
        "Engines pre-assembled before installation",
        "Packaging spare tires",
        "Polishing vehicle paint",
        "Installing software updates"
      ],
      answer: "Engines pre-assembled before installation"
    },
    {
      number: 12,
      question: "What is kitting in component assembly?",
      options: [
        "Grouping related parts and materials needed for assembly",
        "Testing parts for quality control",
        "Disposing of waste parts",
        "Shipping products overseas"
      ],
      answer: "Grouping related parts and materials needed for assembly"
    },
    {
      number: 13,
      question: "Why is kitting important?",
      options: [
        "It reduces assembly time and errors",
        "It increases production cost",
        "It delays production",
        "It complicates storage"
      ],
      answer: "It reduces assembly time and errors"
    },
    {
      number: 14,
      question: "What is the role of packaging in component assembly?",
      options: [
        "Protecting components from damage and contamination",
        "Increasing product weight",
        "Replacing defective parts",
        "Reducing shelf life"
      ],
      answer: "Protecting components from damage and contamination"
    },
    {
      number: 15,
      question: "How does component assembly support the supply chain?",
      options: [
        "It streamlines production and improves efficiency",
        "It delays order fulfillment",
        "It increases warehousing cost",
        "It limits production flexibility"
      ],
      answer: "It streamlines production and improves efficiency"
    },
    {
      number: 16,
      question: "What is the purpose of warehousing in component assembly services?",
      options: [
        "Efficient storage and distribution of components and assemblies",
        "Marketing the final products",
        "Employee training only",
        "Financial auditing"
      ],
      answer: "Efficient storage and distribution of components and assemblies"
    },
    {
      number: 17,
      question: "What technology aids modern warehouse management?",
      options: [
        "Barcode systems and warehouse management software",
        "Manual record-keeping",
        "Paper filing",
        "Typewriters"
      ],
      answer: "Barcode systems and warehouse management software"
    },
    {
      number: 18,
      question: "What does quality assurance in component assembly ensure?",
      options: [
        "Components are clean and defect-free",
        "Faster product marketing",
        "Reduced staff involvement",
        "Less assembly precision"
      ],
      answer: "Components are clean and defect-free"
    },
    {
      number: 19,
      question: "What is Millipore testing used for?",
      options: [
        "Measuring cleanliness of components",
        "Measuring color of materials",
        "Testing product speed",
        "Determining electrical voltage"
      ],
      answer: "Measuring cleanliness of components"
    },
    {
      number: 20,
      question: "What is the outcome of effective parts cleaning and Millipore testing?",
      options: [
        "Fewer defects and improved product quality",
        "More waste and slower production",
        "Lower customer satisfaction",
        "Increased contamination"
      ],
      answer: "Fewer defects and improved product quality"
    },
    {
      number: 21,
      question: "What does sorting and inspection ensure?",
      options: [
        "Integrity and reliability of assembled components",
        "Faster shipment only",
        "Reduced testing costs",
        "Elimination of final checks"
      ],
      answer: "Integrity and reliability of assembled components"
    },
    {
      number: 22,
      question: "What is component fulfillment?",
      options: [
        "Final step where products are packaged, labeled, and shipped",
        "Initial design stage",
        "Quality control process",
        "Recycling phase"
      ],
      answer: "Final step where products are packaged, labeled, and shipped"
    },
    {
      number: 23,
      question: "What does fulfillment ensure?",
      options: [
        "Products reach customers in perfect condition",
        "Products remain unfinished",
        "Customers assemble products themselves",
        "Products are untested"
      ],
      answer: "Products reach customers in perfect condition"
    },
    {
      number: 24,
      question: "What is motion constraint in assembly?",
      options: [
        "A rule defining how components move relative to each other",
        "A way to decorate a model",
        "A measurement tool",
        "A packaging technique"
      ],
      answer: "A rule defining how components move relative to each other"
    },
    {
      number: 25,
      question: "What does a motion constraint maintain?",
      options: [
        "Rotational or rotational-translational movement between components",
        "Only color balance",
        "Electrical flow",
        "Thermal stability"
      ],
      answer: "Rotational or rotational-translational movement between components"
    },
    {
      number: 26,
      question: "Which software can create motion constraints?",
      options: ["AutoDesk Inventor", "CorelDraw", "MS Excel", "Photoshop"],
      answer: "AutoDesk Inventor"
    },
    {
      number: 27,
      question: "How do you begin placing motion constraints in Inventor?",
      options: [
        "Use the Constrain command in the Assemble tab",
        "Open a drawing file",
        "Run a simulation",
        "Open a text editor"
      ],
      answer: "Use the Constrain command in the Assemble tab"
    },
    {
      number: 28,
      question: "Which motion types can be applied in Inventor constraints?",
      options: ["Rotation and Rotation-Translation", "Translation only", "Vibration only", "Scaling"],
      answer: "Rotation and Rotation-Translation"
    },
    {
      number: 29,
      question: "What does selecting 'Forward' or 'Reverse' in motion constraint do?",
      options: [
        "Changes rotation direction",
        "Deletes components",
        "Repaints parts",
        "Hides visibility"
      ],
      answer: "Changes rotation direction"
    },
    {
      number: 30,
      question: "How is a ratio specified in rotational motion constraint?",
      options: [
        "By selecting circular faces or edges on components",
        "By drawing lines manually",
        "By entering text notes",
        "By rotating model randomly"
      ],
      answer: "By selecting circular faces or edges on components"
    },
    {
      number: 31,
      question: "What can you do if other components obscure selection in Inventor?",
      options: [
        "Turn off visibility temporarily",
        "Restart Inventor",
        "Delete all components",
        "Resize the model"
      ],
      answer: "Turn off visibility temporarily"
    },
    {
      number: 32,
      question: "Assembly constraints are used to establish what?",
      options: [
        "Orientation and mechanical relationships between components",
        "Electrical conductivity",
        "Color balance",
        "Product pricing"
      ],
      answer: "Orientation and mechanical relationships between components"
    },
    {
      number: 33,
      question: "Which constraint keeps two cylindrical features aligned?",
      options: ["Concentric constraint", "Mate constraint", "Tangent constraint", "Flush constraint"],
      answer: "Concentric constraint"
    },
    {
      number: 34,
      question: "What happens each time you update the assembly?",
      options: [
        "Assembly constraints are enforced",
        "All constraints are deleted",
        "Assembly resets",
        "Components disappear"
      ],
      answer: "Assembly constraints are enforced"
    },
    {
      number: 35,
      question: "Which constraint keeps a spherical face tangent to a planar face?",
      options: ["Tangent constraint", "Mate constraint", "Flush constraint", "Symmetry constraint"],
      answer: "Tangent constraint"
    },
    {
      number: 36,
      question: "What is the benefit of using motion constraints?",
      options: [
        "Simulate mechanical movement accurately",
        "Increase system lag",
        "Add visual effects only",
        "Reduce mechanical precision"
      ],
      answer: "Simulate mechanical movement accurately"
    },
    {
      number: 37,
      question: "What kind of movement does a rotational-translational constraint maintain?",
      options: [
        "Rotational and linear motion combined",
        "Vibration",
        "Scaling motion",
        "Thermal expansion"
      ],
      answer: "Rotational and linear motion combined"
    },
    {
      number: 38,
      question: "What should be done before applying a motion constraint?",
      options: [
        "Place all components in the assembly file",
        "Delete all sketches",
        "Open a drawing file",
        "Save as image"
      ],
      answer: "Place all components in the assembly file"
    },
    {
      number: 39,
      question: "What do assembly constraints simulate?",
      options: [
        "Mechanical relationships between parts",
        "Temperature variation",
        "Lighting conditions",
        "Color palettes"
      ],
      answer: "Mechanical relationships between parts"
    },
    {
      number: 40,
      question: "What is the ultimate goal of component assembly and motion constraints?",
      options: [
        "To ensure efficient, precise, and functional product manufacturing",
        "To slow down design workflow",
        "To increase project cost",
        "To reduce assembly accuracy"
      ],
      answer: "To ensure efficient, precise, and functional product manufacturing"
    },
    {
      number: 41,
      question: "What is component-based design?",
      options: [
        "An approach that combines all system parts into one large structure",
        "An approach that breaks down systems into reusable, self-contained units called components",
        "A method of random software generation",
        "A process of designing only mechanical systems"
      ],
      answer: "An approach that breaks down systems into reusable, self-contained units called components"
    },
    {
      number: 42,
      question: "Which of the following is NOT an element of design?",
      options: ["Shape", "Color", "Balance", "Resistance"],
      answer: "Resistance"
    },
    {
      number: 43,
      question: "What is the main advantage of component-based design?",
      options: [
        "It increases system complexity",
        "It enhances maintainability, code reuse, and development speed",
        "It eliminates the need for design components",
        "It discourages modularity"
      ],
      answer: "It enhances maintainability, code reuse, and development speed"
    },
    {
      number: 44,
      question: "What does 'Alignment' provide in design?",
      options: [
        "Randomness and creativity",
        "A sense of order and unity through invisible grid systems",
        "Color variety and brightness",
        "Unbalanced visual effects"
      ],
      answer: "A sense of order and unity through invisible grid systems"
    },
    {
      number: 45,
      question: "Which of these design components adds power and emphasis by showing clear differences between elements?",
      options: ["Balance", "Contrast", "Unity", "Proximity"],
      answer: "Contrast"
    },
    {
      number: 46,
      question: "What is the function of a component engineer?",
      options: [
        "To manufacture machinery parts only",
        "To design artwork for systems",
        "To select, evaluate, and test components used in product design and manufacturing",
        "To install components after production"
      ],
      answer: "To select, evaluate, and test components used in product design and manufacturing"
    },
    {
      number: 47,
      question: "Which design component refers to grouping elements close enough to form an association?",
      options: ["Unity", "Motion", "Proximity", "Balance"],
      answer: "Proximity"
    },
    {
      number: 48,
      question: "Which of the following is an advantage of component-based design?",
      options: [
        "Difficult system maintenance",
        "Reduced system reliability",
        "Ease of deployment and modification",
        "Increased technical complexity"
      ],
      answer: "Ease of deployment and modification"
    },
    {
      number: 49,
      question: "What does 'Unity' in design represent?",
      options: [
        "Opposition between parts",
        "Random arrangement of shapes",
        "Harmony and order among design elements",
        "Variety without balance"
      ],
      answer: "Harmony and order among design elements"
    },
    {
      number: 50,
      question: "Which advantage of component-based design allows systems to evolve easily without affecting the rest of the system?",
      options: [
        "Ease of deployment",
        "System maintenance and evolution",
        "Reduced cost",
        "Independent development"
      ],
      answer: "System maintenance and evolution"
    }
  ],
  get305: [
    {
      number: 1,
      question: "Which term describes AI systems designed to enhance rather than replace human intelligence?",
      options: ["Automation", "Intelligence Augmentation", "Machine Learning", "Robotics"],
      answer: "Intelligence Augmentation"
    },
    {
      number: 2,
      question: "What is the primary limitation of experimental data in engineering research?",
      options: ["Low accuracy", "High cost and time", "Real-world noise", "Lack of control"],
      answer: "High cost and time"
    },
    {
      number: 3,
      question: "Which data type is harvested directly from real-world traffic flow or weather records?",
      options: ["Experimental", "Industrial Process", "Observational", "Qualitative"],
      answer: "Observational"
    },
    {
      number: 4,
      question: "To be 'AI-ready,' which skill must an engineer prioritize regarding data?",
      options: ["Marketing strategy", "Data cleaning and preprocessing", "Hardware assembly", "Graphic design"],
      answer: "Data cleaning and preprocessing"
    },
    {
      number: 5,
      question: "Which statistical software is best suited for general data analytics and industry-scale AI?",
      options: ["R", "Python", "MATLAB", "Excel"],
      answer: "Python"
    },
    {
      number: 6,
      question: "Which ethical concern involves another researcher repeating an analysis to obtain the same results?",
      options: ["Scalability", "Reproducibility", "Profitability", "Automation"],
      answer: "Reproducibility"
    },
    {
      number: 7,
      question: "In the AI era, engineering decisions are shifting from intuition-based to:",
      options: ["Assumption-based", "Data-driven", "Manual-only", "Cost-centered"],
      answer: "Data-driven"
    },
    {
      number: 8,
      question: "Industrial process data is primarily used for which application?",
      options: ["Lab theory testing", "Predictive maintenance", "Customer surveys", "Academic publishing"],
      answer: "Predictive maintenance"
    },
    {
      number: 9,
      question: "Which software is a paid tool commonly used for engineering simulation and signal processing?",
      options: ["R", "Python", "MATLAB", "SQL"],
      answer: "MATLAB"
    },
    {
      number: 10,
      question: "Intelligence Augmentation (IA) is also known as:",
      options: ["Robotic AI", "Assistive Intelligence", "Full Automation", "Neural Net"],
      answer: "Assistive Intelligence"
    },
    {
      number: 11,
      question: "Which is an example of an ethical issue in engineering data use?",
      options: ["Large datasets", "Falsifying test results", "Using Python", "High accuracy"],
      answer: "Falsifying test results"
    },
    {
      number: 12,
      question: "Which library is a core component of the Python data analytics ecosystem for numerical arrays?",
      options: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      answer: "NumPy"
    },
    {
      number: 13,
      question: "What distinguishes IA from AI in the decision-making process?",
      options: ["Speed", "Human-centric support", "Cost", "Coding language"],
      answer: "Human-centric support"
    },
    {
      number: 14,
      question: "Which data type is characterized by a high level of control in a lab environment?",
      options: ["Observational", "Industrial", "Experimental", "Categorical"],
      answer: "Experimental"
    },
    {
      number: 15,
      question: "What is the first step in a data-driven engineering process?",
      options: ["Preprocessing", "Problem Definition", "Modeling", "Deployment"],
      answer: "Problem Definition"
    },
    {
      number: 16,
      question: "Why is reproducibility critical in engineering research?",
      options: ["To increase cost", "To build trust and credibility", "To hide errors", "To speed up AI"],
      answer: "To build trust and credibility"
    },
    {
      number: 17,
      question: "Which software tool is preferred for statistical analysis in academic research?",
      options: ["Python", "R", "MATLAB", "Excel"],
      answer: "R"
    },
    {
      number: 18,
      question: "Smart manufacturing is most dependent on which type of data?",
      options: ["Experimental", "Industrial Process", "Customer feedback", "Theoretical"],
      answer: "Industrial Process"
    },
    {
      number: 19,
      question: "What is a common source of uncertainty in engineering data?",
      options: ["Measurement errors", "High budget", "Software updates", "New machines"],
      answer: "Measurement errors"
    },
    {
      number: 20,
      question: "Which field uses statistics for signal noise analysis?",
      options: ["Civil Engineering", "Electrical Engineering", "Chemical Engineering", "HR"],
      answer: "Electrical Engineering"
    },
    {
      number: 21,
      question: "IA systems can transcend restrictions of traditional AI by:",
      options: ["Ignoring data", "Including human consciousness", "Lowering speed", "Using less code"],
      answer: "Including human consciousness"
    },
    {
      number: 22,
      question: "Which is NOT a core activity AI is designed for?",
      options: ["Learning", "Reasoning", "Emotional empathy", "Planning"],
      answer: "Emotional empathy"
    },
    {
      number: 23,
      question: "Data literacy involves the ability to:",
      options: ["Fix sensors", "Interpret analytics results", "Build factories", "Sell products"],
      answer: "Interpret analytics results"
    },
    {
      number: 24,
      question: "Which practice prevents fraud in engineering reports?",
      options: ["Version control", "Ignoring bias", "Manual entry", "Hiding code"],
      answer: "Version control"
    },
    {
      number: 25,
      question: "Digital Transformation in organizations often begins with:",
      options: ["Hiding data", "Strategic data acquisition", "Manual labor", "Deleting logs"],
      answer: "Strategic data acquisition"
    },
    {
      number: 26,
      question: "Which Python library is specialized for data manipulation?",
      options: ["NumPy", "Pandas", "Seaborn", "Matplotlib"],
      answer: "Pandas"
    },
    {
      number: 27,
      question: "What is the primary focus of generative AI?",
      options: ["Classification", "Creating new content", "Data storage", "Hardware design"],
      answer: "Creating new content"
    },
    {
      number: 28,
      question: "Which algorithm is best for binary classification in AI readiness?",
      options: ["Linear Regression", "Logistic Regression", "K-Means", "Apriori"],
      answer: "Logistic Regression"
    },
    {
      number: 29,
      question: "Feature engineering is the process of:",
      options: ["Building motors", "Selecting and transforming data", "Hiring engineers", "Selling AI"],
      answer: "Selecting and transforming data"
    },
    {
      number: 30,
      question: "What is the primary goal of AI in specific applications like spam filters?",
      options: ["AGI", "Artificial Narrow Intelligence", "Human logic", "Manual routing"],
      answer: "Artificial Narrow Intelligence"
    },
    {
      number: 31,
      question: "Which of the following is an example of unstructured data?",
      options: ["Max speed", "Audio files", "Sales count", "Part number"],
      answer: "Audio files"
    },
    {
      number: 32,
      question: "A foundation model in AI is designed to be:",
      options: ["Deleted", "Adapted or Fine-tuned", "Only for images", "Manual"],
      answer: "Adapted or Fine-tuned"
    },
    {
      number: 33,
      question: "In AI ethics, Fairness ensures that:",
      options: ["Models are small", "Systems treat all users fairly", "Systems are expensive", "Code is hidden"],
      answer: "Systems treat all users fairly"
    },
    {
      number: 34,
      question: "Which tool is used for version control in data projects?",
      options: ["Jupyter", "Git", "SQL", "Tableau"],
      answer: "Git"
    },
    {
      number: 35,
      question: "What does IA stand for in the context of data engineering?",
      options: ["Internal Analysis", "Intelligence Augmentation", "Intranet Access", "Image Analysis"],
      answer: "Intelligence Augmentation"
    },
    {
      number: 36,
      question: "Which data analysis identifies steps to take in the future?",
      options: ["Descriptive", "Prescriptive", "Diagnostic", "Historical"],
      answer: "Prescriptive"
    },
    {
      number: 37,
      question: "The AI Transformation Playbook suggests starting with:",
      options: ["A strategy", "Pilot projects", "Hiring a CEO", "Deleting data"],
      answer: "Pilot projects"
    },
    {
      number: 38,
      question: "What is Data Munging?",
      options: ["Deleting data", "Preparing data for analysis", "Data entry", "Sales"],
      answer: "Preparing data for analysis"
    },
    {
      number: 39,
      question: "Which of the following is a type of supervised learning?",
      options: ["K-Means", "Decision Tree", "Clustering", "PCA"],
      answer: "Decision Tree"
    },
    {
      number: 40,
      question: "Robust scaling is used to:",
      options: ["Increase noise", "Reduce outlier impact", "Delete data", "Speed up CPU"],
      answer: "Reduce outlier impact"
    },
    {
      number: 41,
      question: "Which software is best for engineering computation and simulation?",
      options: ["R", "Python", "MATLAB", "Excel"],
      answer: "MATLAB"
    },
    {
      number: 42,
      question: "Experimental data allows for variables to be:",
      options: ["Ignored", "Manipulated", "Hidden", "Guessed"],
      answer: "Manipulated"
    },
    {
      number: 43,
      question: "A key principle of ethical data use is:",
      options: ["Accuracy", "Manipulation", "Secrecy", "Profit"],
      answer: "Accuracy"
    },
    {
      number: 44,
      question: "Predictive analytics helps engineers to:",
      options: ["Guess history", "Forecast outcomes", "Stop testing", "Delete code"],
      answer: "Forecast outcomes"
    },
    {
      number: 45,
      question: "Which is a characteristic of observational data?",
      options: ["Low bias", "Reflects real-life conditions", "Lab-based", "High control"],
      answer: "Reflects real-life conditions"
    },
    {
      number: 46,
      question: "The science of collecting and interpreting data is:",
      options: ["Physics", "Statistics", "Chemistry", "Biology"],
      answer: "Statistics"
    },
    {
      number: 47,
      question: "Reproducibility builds __________ in research.",
      options: ["Confusion", "Trust", "Cost", "Walls"],
      answer: "Trust"
    },
    {
      number: 48,
      question: "Which library is used for AI and ML in Python?",
      options: ["NumPy", "Scikit-learn", "Matplotlib", "Pandas"],
      answer: "Scikit-learn"
    },
    {
      number: 49,
      question: "AI replaces decisions, while IA __________ them.",
      options: ["Rejects", "Supports", "Deletes", "Ignores"],
      answer: "Supports"
    },
    {
      number: 50,
      question: "Modern engineering increasingly depends on:",
      options: ["Intuition", "Large volumes of data", "Assumptions", "Manual logs"],
      answer: "Large volumes of data"
    },
    {
      number: 51,
      question: "A population refers to:",
      options: ["A subset of data", "The entire set of interest", "A random group", "A biased group"],
      answer: "The entire set of interest"
    },
    {
      number: 52,
      question: "Which sampling method selects every nᵗʰ item?",
      options: ["Random", "Stratified", "Systematic", "Convenience"],
      answer: "Systematic"
    },
    {
      number: 53,
      question: "Which data type is discrete?",
      options: ["Temperature", "Number of defective parts", "Weight", "Voltage"],
      answer: "Number of defective parts"
    },
    {
      number: 54,
      question: "A measurement scale with a true zero is:",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: "Ratio"
    },
    {
      number: 55,
      question: "What does the Mean represent?",
      options: ["Middle value", "Average value", "Most frequent value", "Data spread"],
      answer: "Average value"
    },
    {
      number: 56,
      question: "Which scale is used for Product brand?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: "Nominal"
    },
    {
      number: 57,
      question: "Standard deviation is the square root of:",
      options: ["Mean", "Range", "Variance", "Median"],
      answer: "Variance"
    },
    {
      number: 58,
      question: "Which sampling method has the highest risk of bias?",
      options: ["Random", "Stratified", "Convenience", "Systematic"],
      answer: "Convenience"
    },
    {
      number: 59,
      question: "Central Tendency describes the:",
      options: ["Spread of data", "Center of the data", "Errors in data", "Outliers"],
      answer: "Center of the data"
    },
    {
      number: 60,
      question: "Continuous data is typically obtained through:",
      options: ["Counting", "Measuring", "Ranking", "Naming"],
      answer: "Measuring"
    },
    {
      number: 61,
      question: "Which measure is the middle value in sorted data?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: "Median"
    },
    {
      number: 62,
      question: "A stratified sample is useful when the population is:",
      options: ["Homogeneous", "Heterogeneous", "Very small", "Non-existent"],
      answer: "Heterogeneous"
    },
    {
      number: 63,
      question: "Performance rating (1–5 stars) is which scale?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: "Ordinal"
    },
    {
      number: 64,
      question: "Range is calculated as:",
      options: ["Mean − Median", "Max − Min", "Σx / n", "√variance"],
      answer: "Max − Min"
    },
    {
      number: 65,
      question: "Qualitative data is also known as:",
      options: ["Numerical", "Categorical", "Discrete", "Continuous"],
      answer: "Categorical"
    },
    {
      number: 66,
      question: "What refers to a summary measure of a sample?",
      options: ["Parameter", "Statistic", "Unit", "Universe"],
      answer: "Statistic"
    },
    {
      number: 67,
      question: "Which of the following is a measure of dispersion?",
      options: ["Mean", "Standard Deviation", "Median", "Mode"],
      answer: "Standard Deviation"
    },
    {
      number: 68,
      question: "Why is sampling used instead of population testing?",
      options: ["More accurate", "Faster and cheaper", "Harder to analyze", "More bias"],
      answer: "Faster and cheaper"
    },
    {
      number: 69,
      question: "Temperature in Celsius (°C) is which scale?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: "Interval"
    },
    {
      number: 70,
      question: "Number of machines is which data type?",
      options: ["Continuous", "Discrete", "Qualitative", "Nominal"],
      answer: "Discrete"
    },
    {
      number: 71,
      question: "The difference between a parameter and a statistic is:",
      options: ["Error", "Sampling error", "Bias", "Accuracy"],
      answer: "Sampling error"
    },
    {
      number: 72,
      question: "Which scale is the most basic level of measurement?",
      options: ["Ratio", "Interval", "Ordinal", "Nominal"],
      answer: "Nominal"
    },
    {
      number: 73,
      question: "Interquartile Range (IQR) covers the middle:",
      options: ["25%", "50%", "75%", "100%"],
      answer: "50%"
    },
    {
      number: 74,
      question: "A frequency distribution table shows:",
      options: ["Data means", "How often values occur", "Outliers only", "Predictions"],
      answer: "How often values occur"
    },
    {
      number: 75,
      question: "Which sampling requires dividing the population into groups?",
      options: ["Simple Random", "Stratified", "Convenience", "Systematic"],
      answer: "Stratified"
    },
    {
      number: 76,
      question: "In a dataset {10, 12, 12, 14}, the mode is:",
      options: ["10", "12", "13", "14"],
      answer: "12"
    },
    {
      number: 77,
      question: "Central reliability in engineering is often shown by:",
      options: ["Mean", "Median", "Range", "Variance"],
      answer: "Median"
    },
    {
      number: 78,
      question: "Ratio scale data has the properties of:",
      options: ["Nominal only", "Interval and order", "Absolute zero only", "All other scales"],
      answer: "All other scales"
    },
    {
      number: 79,
      question: "Sampling quality directly affects:",
      options: ["Result accuracy", "Machine speed", "Software cost", "Factory size"],
      answer: "Result accuracy"
    },
    {
      number: 80,
      question: "Machine type is categorical data. True or False?",
      options: ["True", "False"],
      answer: "True"
    },
    {
      number: 81,
      question: "Standard deviation measures process __________.",
      options: ["Speed", "Stability", "Cost", "Length"],
      answer: "Stability"
    },
    {
      number: 82,
      question: "Which sampling method is simplest but risks pattern bias?",
      options: ["Random", "Stratified", "Systematic", "Convenience"],
      answer: "Systematic"
    },
    {
      number: 83,
      question: "Weight and Voltage are examples of which scale?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: "Ratio"
    },
    {
      number: 84,
      question: "Low dispersion in a system indicates it is:",
      options: ["Stable", "Inconsistent", "Faster", "Newer"],
      answer: "Stable"
    },
    {
      number: 85,
      question: "What indicates the center of a sorted array?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: "Median"
    },
    {
      number: 86,
      question: "Population values are called:",
      options: ["Statistics", "Parameters", "Elements", "Samples"],
      answer: "Parameters"
    },
    {
      number: 87,
      question: "Which measure is sum of values divided by n?",
      options: ["Median", "Mode", "Mean", "Range"],
      answer: "Mean"
    },
    {
      number: 88,
      question: "Nominal scale data can be analyzed using:",
      options: ["Mean", "Percentages or Mode", "Standard Deviation", "Variance"],
      answer: "Percentages or Mode"
    },
    {
      number: 89,
      question: "True zero means the absence of the characteristic.",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: "Ratio"
    },
    {
      number: 90,
      question: "Which chart is NOT used for graphical summarization?",
      options: ["Histogram", "Pie chart", "Scatter plot", "Line graph"],
      answer: "Scatter plot"
    },
    {
      number: 91,
      question: "A statistic is regarded as a subset of:",
      options: ["Data", "Population", "Set", "Distribution"],
      answer: "Population"
    },
    {
      number: 92,
      question: "Which sampling method uses easily available data?",
      options: ["Random", "Stratified", "Convenience", "Systematic"],
      answer: "Convenience"
    },
    {
      number: 93,
      question: "Variance is the average __________ difference from the mean.",
      options: ["Absolute", "Root", "Squared", "Linear"],
      answer: "Squared"
    },
    {
      number: 94,
      question: "Discrete data arises from __________.",
      options: ["Measuring", "Counting", "Estimating", "Naming"],
      answer: "Counting"
    },
    {
      number: 95,
      question: "Interval scales have __________ intervals between values.",
      options: ["Unequal", "Equal", "Random", "No"],
      answer: "Equal"
    },
    {
      number: 96,
      question: "Which is a qualitative category?",
      options: ["10 kg", "Machine brand", "220 Volts", "50 units"],
      answer: "Machine brand"
    },
    {
      number: 97,
      question: "Central reliability is measured by:",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: "Median"
    },
    {
      number: 98,
      question: "Sampling error __________ as sample size increases.",
      options: ["Increases", "Decreases", "Remains same", "Is constant"],
      answer: "Decreases"
    },
    {
      number: 99,
      question: "Machine failure times in hours is:",
      options: ["Discrete", "Continuous", "Qualitative", "Nominal"],
      answer: "Continuous"
    },
    {
      number: 100,
      question: "Ordinal data includes a natural __________.",
      options: ["Zero", "Order/Rank", "Mean", "Distance"],
      answer: "Order/Rank"
    },


    // ===== MODULE 3: PROBABILITY & DISTRIBUTIONS (Q101-150) =====
    {
      number: 101,
      question: "A histogram is mainly used for:",
      options: ["Categorical data", "Continuous data", "Rankings", "Names"],
      answer: "Continuous data"
    },
    {
      number: 102,
      question: "Which measure is most affected by extreme values?",
      options: ["Median", "Mode", "Mean", "IQR"],
      answer: "Mean"
    },
    {
      number: 103,
      question: "A boxplot displays:",
      options: ["Mean only", "Median and quartiles", "Mode only", "Frequency only"],
      answer: "Median and quartiles"
    },
    {
      number: 104,
      question: "The total of all probabilities in a distribution equals:",
      options: ["0", "10", "100", "1"],
      answer: "1"
    },
    {
      number: 105,
      question: "Probability ranges between:",
      options: ["-1 and 1", "0 and 1", "0 and 100", "-100 and 100"],
      answer: "0 and 1"
    },
    {
      number: 106,
      question: "The complement of an event A is:",
      options: ["A²", "1 − A", "A − 1", "A/2"],
      answer: "1 − A"
    },
    {
      number: 107,
      question: "If events are independent, then:",
      options: ["P(A|B)=P(A)", "P(A|B)=0", "P(A|B)=1", "P(A)=0"],
      answer: "P(A|B)=P(A)"
    },
    {
      number: 108,
      question: "The expected value is the:",
      options: ["Middle value", "Weighted average", "Mode", "Median"],
      answer: "Weighted average"
    },
    {
      number: 109,
      question: "Which distribution is discrete?",
      options: ["Normal", "Binomial", "Uniform", "Exponential"],
      answer: "Binomial"
    },
    {
      number: 110,
      question: "The Normal distribution is:",
      options: ["Skewed", "Symmetric", "Discrete", "Categorical"],
      answer: "Symmetric"
    },
    {
      number: 111,
      question: "Mean of standard normal distribution is:",
      options: ["1", "0", "-1", "100"],
      answer: "0"
    },
    {
      number: 112,
      question: "Standard deviation of standard normal distribution is:",
      options: ["0", "1", "2", "10"],
      answer: "1"
    },
    {
      number: 113,
      question: "Z-score measures:",
      options: ["Rank", "Distance from mean in SD units", "Probability", "Frequency"],
      answer: "Distance from mean in SD units"
    },
    {
      number: 114,
      question: "Binomial distribution requires:",
      options: ["Infinite trials", "Two outcomes per trial", "Continuous data", "Skewness"],
      answer: "Two outcomes per trial"
    },
    {
      number: 115,
      question: "In Binomial distribution, n represents:",
      options: ["Mean", "Sample", "Number of trials", "Variance"],
      answer: "Number of trials"
    },
    {
      number: 116,
      question: "Poisson distribution models:",
      options: ["Continuous data", "Rare events", "Rankings", "Categories"],
      answer: "Rare events"
    },
    {
      number: 117,
      question: "Variance of Binomial distribution is:",
      options: ["np", "np(1−p)", "n²", "p²"],
      answer: "np(1−p)"
    },
    {
      number: 118,
      question: "Law of Large Numbers states that sample mean approaches:",
      options: ["0", "Population mean", "Variance", "Median"],
      answer: "Population mean"
    },
    {
      number: 119,
      question: "Central Limit Theorem applies to:",
      options: ["Small samples only", "Sample means", "Medians", "Modes"],
      answer: "Sample means"
    },
    {
      number: 120,
      question: "Confidence interval estimates:",
      options: ["Sample size", "Population parameter", "Variance only", "Error"],
      answer: "Population parameter"
    },
    {
      number: 121,
      question: "A 95% confidence level means:",
      options: ["95% data correct", "95% intervals contain parameter", "95% probability parameter changes", "95% error"],
      answer: "95% intervals contain parameter"
    },
    {
      number: 122,
      question: "Margin of error decreases when:",
      options: ["Sample size increases", "Sample size decreases", "Variance increases", "Confidence increases"],
      answer: "Sample size increases"
    },
    {
      number: 123,
      question: "Hypothesis testing begins with:",
      options: ["Conclusion", "Alternative hypothesis", "Null hypothesis", "Data rejection"],
      answer: "Null hypothesis"
    },
    {
      number: 124,
      question: "Type I error is:",
      options: ["Accepting false null", "Rejecting true null", "Large variance", "Sampling bias"],
      answer: "Rejecting true null"
    },
    {
      number: 125,
      question: "Type II error is:",
      options: ["Rejecting true null", "Accepting false null", "Mean error", "Zero variance"],
      answer: "Accepting false null"
    },
    {
      number: 126,
      question: "Significance level is denoted by:",
      options: ["β", "μ", "α", "σ"],
      answer: "α"
    },
    {
      number: 127,
      question: "If p-value < α, we:",
      options: ["Accept null", "Reject null", "Increase α", "Stop testing"],
      answer: "Reject null"
    },
    {
      number: 128,
      question: "T-test is used when:",
      options: ["σ known", "σ unknown & small sample", "Large population only", "Data categorical"],
      answer: "σ unknown & small sample"
    },
    {
      number: 129,
      question: "Chi-square test is used for:",
      options: ["Means", "Variances", "Categorical data", "Medians"],
      answer: "Categorical data"
    },
    {
      number: 130,
      question: "ANOVA compares:",
      options: ["Two variances", "Multiple means", "Medians", "Modes"],
      answer: "Multiple means"
    },
    {
      number: 131,
      question: "Correlation coefficient ranges between:",
      options: ["0 and 1", "-1 and 1", "0 and 100", "-100 and 100"],
      answer: "-1 and 1"
    },
    {
      number: 132,
      question: "Perfect positive correlation equals:",
      options: ["-1", "0", "1", "2"],
      answer: "1"
    },
    {
      number: 133,
      question: "Regression analysis predicts:",
      options: ["Category", "Dependent variable", "Median", "Mode"],
      answer: "Dependent variable"
    },
    {
      number: 134,
      question: "Coefficient of determination is:",
      options: ["r", "r²", "μ", "σ"],
      answer: "r²"
    },
    {
      number: 135,
      question: "If r=0, relationship is:",
      options: ["Perfect", "Strong", "Linear none", "Negative"],
      answer: "Linear none"
    },
    {
      number: 136,
      question: "Skewness measures:",
      options: ["Spread", "Asymmetry", "Center", "Height"],
      answer: "Asymmetry"
    },
    {
      number: 137,
      question: "Positive skew means tail on:",
      options: ["Left", "Right", "Center", "Both"],
      answer: "Right"
    },
    {
      number: 138,
      question: "Kurtosis measures:",
      options: ["Flatness/peakedness", "Mean", "Spread", "Correlation"],
      answer: "Flatness/peakedness"
    },
    {
      number: 139,
      question: "Outliers affect:",
      options: ["Median less", "Mean less", "Mode more", "Nothing"],
      answer: "Median less"
    },
    {
      number: 140,
      question: "Sampling distribution refers to distribution of:",
      options: ["Population", "Sample statistic", "Raw data", "Error"],
      answer: "Sample statistic"
    },
    {
      number: 141,
      question: "Standard error decreases when:",
      options: ["n increases", "n decreases", "Variance increases", "Mean increases"],
      answer: "n increases"
    },
    {
      number: 142,
      question: "Z-test is used when:",
      options: ["Large sample & σ known", "Small sample", "Data categorical", "n=1"],
      answer: "Large sample & σ known"
    },
    {
      number: 143,
      question: "Two-tailed test checks for:",
      options: ["One direction", "Both directions", "Zero", "Mean only"],
      answer: "Both directions"
    },
    {
      number: 144,
      question: "Power of test equals:",
      options: ["α", "1−β", "μ", "σ"],
      answer: "1−β"
    },
    {
      number: 145,
      question: "If confidence level increases, margin of error:",
      options: ["Decreases", "Increases", "Zero", "Constant"],
      answer: "Increases"
    },
    {
      number: 146,
      question: "Independent variables are also called:",
      options: ["Predictors", "Responses", "Errors", "Outcomes"],
      answer: "Predictors"
    },
    {
      number: 147,
      question: "Dependent variable is also called:",
      options: ["Predictor", "Response", "Cause", "Input"],
      answer: "Response"
    },
    {
      number: 148,
      question: "Residual in regression is:",
      options: ["Actual − Predicted", "Predicted − Mean", "Mean − Actual", "None"],
      answer: "Actual − Predicted"
    },
    {
      number: 149,
      question: "If r is negative, slope is:",
      options: ["Positive", "Negative", "Zero", "Infinite"],
      answer: "Negative"
    },
    {
      number: 150,
      question: "Statistical inference draws conclusions about:",
      options: ["Sample only", "Population", "Mode", "Graph"],
      answer: "Population"
    },


    // ===== MODULE 4: ADVANCED STATISTICS & ML (Q151-200) =====
    {
      number: 151,
      question: "Multicollinearity occurs when:",
      options: ["Variables are independent", "Predictor variables are highly correlated", "Data is missing", "Sample is small"],
      answer: "Predictor variables are highly correlated"
    },
    {
      number: 152,
      question: "R² measures:",
      options: ["Error rate", "Correlation strength", "Goodness of fit", "Prediction accuracy"],
      answer: "Goodness of fit"
    },
    {
      number: 153,
      question: "Cross-validation helps to:",
      options: ["Increase bias", "Prevent overfitting", "Reduce features", "Speed up training"],
      answer: "Prevent overfitting"
    },
    {
      number: 154,
      question: "Logistic regression is used for:",
      options: ["Continuous prediction", "Classification", "Time series", "Clustering"],
      answer: "Classification"
    },
    {
      number: 155,
      question: "K-means clustering requires specifying:",
      options: ["Labels", "Number of clusters (k)", "Threshold", "Variance"],
      answer: "Number of clusters (k)"
    },
    {
      number: 156,
      question: "Overfitting occurs when:",
      options: ["Model is too simple", "Model memorizes training data", "Features are few", "Variance is low"],
      answer: "Model memorizes training data"
    },
    {
      number: 157,
      question: "Underfitting occurs when:",
      options: ["Model is too complex", "Model is too simple", "Data is too much", "Error is negative"],
      answer: "Model is too simple"
    },
    {
      number: 158,
      question: "Precision in ML measures:",
      options: ["All correct predictions", "True positives among predicted positives", "Recall rate", "Accuracy"],
      answer: "True positives among predicted positives"
    },
    {
      number: 159,
      question: "Recall in ML measures:",
      options: ["False positives", "True positives among actual positives", "Precision", "Error"],
      answer: "True positives among actual positives"
    },
    {
      number: 160,
      question: "F1-score is the:",
      options: ["Mean of precision and recall", "Harmonic mean of precision and recall", "Accuracy", "Error"],
      answer: "Harmonic mean of precision and recall"
    },
    {
      number: 161,
      question: "Confusion matrix shows:",
      options: ["Model accuracy only", "TP, FP, TN, FN", "Predictions only", "Errors only"],
      answer: "TP, FP, TN, FN"
    },
    {
      number: 162,
      question: "ROC curve plots:",
      options: ["Accuracy vs Error", "TPR vs FPR", "Precision vs Recall", "Features vs Output"],
      answer: "TPR vs FPR"
    },
    {
      number: 163,
      question: "AUC represents:",
      options: ["Area Under Curve", "Area of model", "Accuracy unit", "Average unit"],
      answer: "Area Under Curve"
    },
    {
      number: 164,
      question: "Decision trees work by:",
      options: ["Averaging values", "Splitting features recursively", "Weighting errors", "Random selection"],
      answer: "Splitting features recursively"
    },
    {
      number: 165,
      question: "Random Forest combines:",
      options: ["Linear models", "Multiple decision trees", "Clustering", "Regression"],
      answer: "Multiple decision trees"
    },
    {
      number: 166,
      question: "Gradient Boosting improves by:",
      options: ["Adding random forests", "Sequential error correction", "Increasing features", "Reducing data"],
      answer: "Sequential error correction"
    },
    {
      number: 167,
      question: "SVM finds:",
      options: ["Closest points", "Optimal hyperplane", "Mean values", "Medians"],
      answer: "Optimal hyperplane"
    },
    {
      number: 168,
      question: "Kernel in SVM helps with:",
      options: ["Linear data", "Non-linear separability", "Speed", "Accuracy only"],
      answer: "Non-linear separability"
    },
    {
      number: 169,
      question: "PCA reduces dimensionality by:",
      options: ["Removing features", "Finding principal components", "Averaging", "Sampling"],
      answer: "Finding principal components"
    },
    {
      number: 170,
      question: "Feature scaling is important for:",
      options: ["Visualization", "Distance-based algorithms", "Interpretability", "Speed"],
      answer: "Distance-based algorithms"
    },
    {
      number: 171,
      question: "Normalization scales to:",
      options: ["0 to 100", "0 to 1", "-1 to 1", "Mean and SD"],
      answer: "0 to 1"
    },
    {
      number: 172,
      question: "Standardization uses:",
      options: ["Min-Max", "Mean and Standard Deviation", "Log", "Percentiles"],
      answer: "Mean and Standard Deviation"
    },
    {
      number: 173,
      question: "Imbalanced data causes:",
      options: ["High accuracy", "Model bias toward majority", "Better predictions", "No issues"],
      answer: "Model bias toward majority"
    },
    {
      number: 174,
      question: "SMOTE technique addresses:",
      options: ["Imbalance", "Overfitting", "Underfitting", "Outliers"],
      answer: "Imbalance"
    },
    {
      number: 175,
      question: "GridSearchCV is used for:",
      options: ["Data cleaning", "Hyperparameter tuning", "Feature selection", "Model testing"],
      answer: "Hyperparameter tuning"
    },
    {
      number: 176,
      question: "Ensemble methods combine:",
      options: ["One model", "Multiple models", "Features only", "Labels"],
      answer: "Multiple models"
    },
    {
      number: 177,
      question: "Bagging reduces:",
      options: ["Bias", "Variance", "Error", "Features"],
      answer: "Variance"
    },
    {
      number: 178,
      question: "Boosting reduces primarily:",
      options: ["Variance", "Bias", "Noise", "Dimensionality"],
      answer: "Bias"
    },
    {
      number: 179,
      question: "Stacking combines predictions using:",
      options: ["Average", "Meta-learner", "Weights", "Voting"],
      answer: "Meta-learner"
    },
    {
      number: 180,
      question: "Time series forecasting uses:",
      options: ["Linear models", "ARIMA or LSTM", "Decision trees", "SVM"],
      answer: "ARIMA or LSTM"
    },
    {
      number: 181,
      question: "LSTM networks handle:",
      options: ["Static data", "Sequential data with long-term dependencies", "Images", "Categories"],
      answer: "Sequential data with long-term dependencies"
    },
    {
      number: 182,
      question: "Clustering is an example of:",
      options: ["Supervised learning", "Unsupervised learning", "Semi-supervised", "Reinforcement"],
      answer: "Unsupervised learning"
    },
    {
      number: 183,
      question: "Hierarchical clustering produces:",
      options: ["Flat clusters", "Dendrogram", "Labels", "Centroids"],
      answer: "Dendrogram"
    },
    {
      number: 184,
      question: "DBSCAN finds clusters based on:",
      options: ["Centroids", "Density", "Distance only", "Features"],
      answer: "Density"
    },
    {
      number: 185,
      question: "Silhouette score measures:",
      options: ["Cluster size", "Quality of clustering", "Model accuracy", "Variance"],
      answer: "Quality of clustering"
    },
    {
      number: 186,
      question: "One-hot encoding converts:",
      options: ["Numbers to text", "Categorical to binary vectors", "Text to numbers", "Continuous to discrete"],
      answer: "Categorical to binary vectors"
    },
    {
      number: 187,
      question: "Label encoding is suitable for:",
      options: ["All data", "Ordinal data", "Images", "Time series"],
      answer: "Ordinal data"
    },
    {
      number: 188,
      question: "Missing data imputation options include:",
      options: ["Ignore", "Mean, median, forward-fill, model-based", "Delete all", "Random"],
      answer: "Mean, median, forward-fill, model-based"
    },
    {
      number: 189,
      question: "Outlier detection uses:",
      options: ["Mean", "Z-score, IQR, Isolation Forest", "Median", "Mode"],
      answer: "Z-score, IQR, Isolation Forest"
    },
    {
      number: 190,
      question: "Feature importance measures:",
      options: ["Data size", "Contribution to predictions", "Correlation", "Variance"],
      answer: "Contribution to predictions"
    },
    {
      number: 191,
      question: "Permutation importance assesses:",
      options: ["Feature correlation", "Impact on performance when shuffled", "Feature distribution", "Outliers"],
      answer: "Impact on performance when shuffled"
    },
    {
      number: 192,
      question: "Explainability in AI ensures:",
      options: ["Fast predictions", "Interpretability of model decisions", "Low error", "High accuracy"],
      answer: "Interpretability of model decisions"
    },
    {
      number: 193,
      question: "SHAP values explain:",
      options: ["Predictions for individual samples", "Model accuracy", "Feature correlation", "Clustering"],
      answer: "Predictions for individual samples"
    },
    {
      number: 194,
      question: "Bias in ML refers to:",
      options: ["Accuracy", "Systematic error", "Variance", "Noise"],
      answer: "Systematic error"
    },
    {
      number: 195,
      question: "Variance in ML refers to:",
      options: ["Mean", "Model sensitivity to training data changes", "Error", "Accuracy"],
      answer: "Model sensitivity to training data changes"
    },
    {
      number: 196,
      question: "Bias-Variance tradeoff involves:",
      options: ["Choosing between bias and variance", "Maximizing accuracy", "Minimizing error", "Feature selection"],
      answer: "Choosing between bias and variance"
    },
    {
      number: 197,
      question: "Regularization prevents:",
      options: ["Underfitting", "Overfitting", "Data loss", "Feature scaling"],
      answer: "Overfitting"
    },
    {
      number: 198,
      question: "L1 regularization (Lasso) promotes:",
      options: ["Large weights", "Sparse solutions", "High bias", "Low variance"],
      answer: "Sparse solutions"
    },
    {
      number: 199,
      question: "L2 regularization (Ridge) promotes:",
      options: ["Sparsity", "Smaller weights generally", "High bias", "Feature selection"],
      answer: "Smaller weights generally"
    },
    {
      number: 200,
      question: "Dropout in neural networks:",
      options: ["Removes features", "Randomly disables neurons during training", "Deletes data", "Normalizes input"],
      answer: "Randomly disables neurons during training"
    },

    // ===== MODULE 5: DEEP LEARNING & ADVANCED TOPICS (Q201-250) =====
    {
      number: 201,
      question: "Neural networks consist of:",
      options: ["One layer", "Interconnected neurons/layers", "Decision trees", "Linear equations"],
      answer: "Interconnected neurons/layers"
    },
    {
      number: 202,
      question: "Activation functions in neural networks are used for:",
      options: ["Normalization", "Introducing non-linearity", "Feature scaling", "Label encoding"],
      answer: "Introducing non-linearity"
    },
    {
      number: 203,
      question: "ReLU activation function outputs:",
      options: ["Between -1 and 1", "Between 0 and 1", "max(0, x)", "x³"],
      answer: "max(0, x)"
    },
    {
      number: 204,
      question: "Sigmoid function is used primarily for:",
      options: ["Regression", "Binary classification", "Multi-class", "Clustering"],
      answer: "Binary classification"
    },
    {
      number: 205,
      question: "Softmax function is used for:",
      options: ["Binary classification", "Multi-class classification", "Regression", "Dimensionality reduction"],
      answer: "Multi-class classification"
    },
    {
      number: 206,
      question: "Backpropagation calculates:",
      options: ["Forward pass", "Gradients for weight updates", "Predictions", "Loss only"],
      answer: "Gradients for weight updates"
    },
    {
      number: 207,
      question: "Gradient descent aims to:",
      options: ["Maximize loss", "Minimize loss", "Increase weights", "Reduce features"],
      answer: "Minimize loss"
    },
    {
      number: 208,
      question: "Stochastic Gradient Descent updates weights using:",
      options: ["Entire dataset", "Single sample", "Batch", "Random samples"],
      answer: "Single sample"
    },
    {
      number: 209,
      question: "Adam optimizer combines:",
      options: ["SGD only", "Momentum and adaptive learning rates", "Gradient descent only", "No algorithms"],
      answer: "Momentum and adaptive learning rates"
    },
    {
      number: 210,
      question: "Learning rate controls:",
      options: ["Model complexity", "Step size of updates", "Number of layers", "Batch size"],
      answer: "Step size of updates"
    },
    {
      number: 211,
      question: "CNN (Convolutional Neural Network) is used for:",
      options: ["Tabular data", "Image processing", "Time series", "Categorical data"],
      answer: "Image processing"
    },
    {
      number: 212,
      question: "Convolution operation detects:",
      options: ["Random patterns", "Local features/patterns", "Global trends", "Outliers"],
      answer: "Local features/patterns"
    },
    {
      number: 213,
      question: "Pooling in CNNs reduces:",
      options: ["Accuracy", "Spatial dimensions and computation", "Features", "Layers"],
      answer: "Spatial dimensions and computation"
    },
    {
      number: 214,
      question: "RNN (Recurrent Neural Network) excels at:",
      options: ["Images", "Tabular data", "Sequence data", "Clustering"],
      answer: "Sequence data"
    },
    {
      number: 215,
      question: "LSTM (Long Short-Term Memory) addresses:",
      options: ["High accuracy", "Vanishing gradient problem", "Overfitting", "Underfitting"],
      answer: "Vanishing gradient problem"
    },
    {
      number: 216,
      question: "GRU (Gated Recurrent Unit) is a variant of:",
      options: ["CNN", "LSTM", "Autoencoder", "Transformer"],
      answer: "LSTM"
    },
    {
      number: 217,
      question: "Autoencoders are used for:",
      options: ["Supervised learning", "Unsupervised learning & dimensionality reduction", "Classification", "Clustering"],
      answer: "Unsupervised learning & dimensionality reduction"
    },
    {
      number: 218,
      question: "Variational Autoencoder (VAE) generates:",
      options: ["Exact replicas", "New samples from learned distribution", "Clusters", "Labels"],
      answer: "New samples from learned distribution"
    },
    {
      number: 219,
      question: "Generative Adversarial Networks (GANs) have:",
      options: ["One network", "Generator and Discriminator", "Multiple layers", "No training"],
      answer: "Generator and Discriminator"
    },
    {
      number: 220,
      question: "Transformer architecture uses:",
      options: ["Convolution", "Attention mechanism", "Pooling", "Only RNNs"],
      answer: "Attention mechanism"
    },
    {
      number: 221,
      question: "Attention mechanism helps by:",
      options: ["Focusing on all data equally", "Focusing on relevant parts of input", "Reducing data", "Increasing layers"],
      answer: "Focusing on relevant parts of input"
    },
    {
      number: 222,
      question: "BERT is a:",
      options: ["CNN", "RNN", "Pre-trained transformer model", "Decision tree"],
      answer: "Pre-trained transformer model"
    },
    {
      number: 223,
      question: "Transfer learning reuses:",
      options: ["Entire dataset", "Pre-trained model weights", "Raw data", "Features only"],
      answer: "Pre-trained model weights"
    },
    {
      number: 224,
      question: "Fine-tuning adapts:",
      options: ["Architecture", "Pre-trained model for new task", "Training data", "Hyperparameters only"],
      answer: "Pre-trained model for new task"
    },
    {
      number: 225,
      question: "Data augmentation increases:",
      options: ["Model complexity", "Training data variation", "Features", "Accuracy only"],
      answer: "Training data variation"
    },
    {
      number: 226,
      question: "Batch normalization normalizes:",
      options: ["Final output", "Inputs to each layer", "Features", "Labels"],
      answer: "Inputs to each layer"
    },
    {
      number: 227,
      question: "Layer normalization normalizes across:",
      options: ["Batches", "Features within sample", "All data", "Time"],
      answer: "Features within sample"
    },
    {
      number: 228,
      question: "Weight initialization affects:",
      options: ["Nothing", "Training convergence", "Accuracy only", "Data"],
      answer: "Training convergence"
    },
    {
      number: 229,
      question: "Xavier initialization helps by:",
      options: ["Reducing noise", "Maintaining variance across layers", "Increasing speed", "Random init"],
      answer: "Maintaining variance across layers"
    },
    {
      number: 230,
      question: "Vanishing gradient occurs when:",
      options: ["Gradient becomes very large", "Gradient becomes extremely small", "Loss increases", "Accuracy decreases"],
      answer: "Gradient becomes extremely small"
    },
    {
      number: 231,
      question: "Exploding gradient causes:",
      options: ["Slow training", "Unstable training with large updates", "No updates", "Low accuracy"],
      answer: "Unstable training with large updates"
    },
    {
      number: 232,
      question: "Gradient clipping prevents:",
      options: ["Convergence", "Exploding gradients", "Underfitting", "Overfitting"],
      answer: "Exploding gradients"
    },
    {
      number: 233,
      question: "Early stopping monitors:",
      options: ["Training loss", "Validation loss for overfitting prevention", "Test loss", "Accuracy"],
      answer: "Validation loss for overfitting prevention"
    },
    {
      number: 234,
      question: "Model checkpointing saves:",
      options: ["All epochs", "Best model state", "Final model only", "Random states"],
      answer: "Best model state"
    },
    {
      number: 235,
      question: "Learning rate scheduling:",
      options: ["Keeps rate constant", "Adjusts rate during training", "Increases rate", "Random adjustment"],
      answer: "Adjusts rate during training"
    },
    {
      number: 236,
      question: "Weight decay adds:",
      options: ["Noise", "Penalty for large weights", "Bias", "Layers"],
      answer: "Penalty for large weights"
    },
    {
      number: 237,
      question: "Batch size affects:",
      options: ["Model accuracy only", "Training speed and memory", "Features", "Architecture"],
      answer: "Training speed and memory"
    },
    {
      number: 238,
      question: "Epoch is defined as:",
      options: ["One sample", "One forward pass", "Complete pass through entire dataset", "One layer"],
      answer: "Complete pass through entire dataset"
    },
    {
      number: 239,
      question: "Iteration is:",
      options: ["Complete dataset pass", "One batch forward-backward pass", "One sample", "Training phase"],
      answer: "One batch forward-backward pass"
    },
    {
      number: 240,
      question: "Model complexity increases with:",
      options: ["Fewer parameters", "More layers and neurons", "Simpler data", "Less features"],
      answer: "More layers and neurons"
    },
    {
      number: 241,
      question: "Regularization parameter (lambda) controls:",
      options: ["Learning rate", "Penalty strength", "Batch size", "Epochs"],
      answer: "Penalty strength"
    },
    {
      number: 242,
      question: "Hyperparameter tuning optimizes:",
      options: ["Model weights", "Model hyperparameters", "Data", "Features"],
      answer: "Model hyperparameters"
    },
    {
      number: 243,
      question: "Random search is used for:",
      options: ["Grid search only", "Exploring hyperparameter space randomly", "Sequential search", "No search"],
      answer: "Exploring hyperparameter space randomly"
    },
    {
      number: 244,
      question: "Bayesian optimization uses:",
      options: ["Random sampling", "Probabilistic model to guide search", "Grid", "No model"],
      answer: "Probabilistic model to guide search"
    },
    {
      number: 245,
      question: "Model interpretability is important for:",
      options: ["Speed only", "Understanding model decisions", "Accuracy", "Memory"],
      answer: "Understanding model decisions"
    },
    {
      number: 246,
      question: "Black-box models are:",
      options: ["Fast", "Interpretable", "Hard to interpret internally", "Simple"],
      answer: "Hard to interpret internally"
    },
    {
      number: 247,
      question: "White-box models are:",
      options: ["Slow", "Interpretable and transparent", "Complex", "Neural networks"],
      answer: "Interpretable and transparent"
    },
    {
      number: 248,
      question: "Model validation prevents:",
      options: ["Overfitting detection issues", "Proper performance assessment", "Training", "Testing"],
      answer: "Proper performance assessment"
    },
    {
      number: 249,
      question: "Test set is used for:",
      options: ["Training", "Hyperparameter tuning", "Final model evaluation", "Feature selection"],
      answer: "Final model evaluation"
    },
    {
      number: 250,
      question: "Production deployment requires:",
      options: ["No monitoring", "Continuous monitoring and updates", "Single test", "No testing"],
      answer: "Continuous monitoring and updates"
    }
  ],


  // 400L
  get401: [
    {
      number: 1,
      question: "Sample question for GET 401",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option C"
    }
  ],


  // 500L
  get501: [
    {
      number: 1,
      question: "Sample question for GET 501",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option D"
    }
  ]
};

// ============================================================
// COURSES ORGANIZED BY LEVEL AND DEPARTMENT
// ============================================================
const coursesByDepartment = {
  "100": {
    "SIPET": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "mth102", name: "MTH 102" },
      { code: "get101", name: "GET 101" },
      { code: "gst102", name: "GST 102" },
      { code: "cos101", name: "COS 101" },
      { code: "cos102", name: "COS 102" }
    ],
    "SEET": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SICT": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SAAT": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SET": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SLS": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SPS": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SSTE": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ],
    "SIT": [
      { code: "phy101", name: "PHY 101" },
      { code: "phy102", name: "PHY 102" },
      { code: "phy123", name: "PHY 123" },
      { code: "phy124", name: "PHY 124" },
      { code: "mth101", name: "MTH 101" },
      { code: "cos101", name: "COS 101" }
    ]

  },
  "200": {
    "SIPET": [
      { code: "gst201", name: "GST 201" },
      { code: "get201", name: "GET 201" },
      { code: "get202", name: "GET 202" },
      { code: "get208", name: "GET 208" },
      { code: "futm-get217", name: "FUTM-GET 217" },
      { code: "eet219", name: "EET 219" },
      { code: "saat201", name: "SAAT 201" },
      // SECOND SEMESTER COURSES FOR SIPET IN 200L
      { code: "get210", name: "GET 210" },
      { code: "get226", name: "GET 226" },
      { code: "get228", name: "GET 228" },
      { code: "get204", name: "GET 204" },
      { code: "get212-A", name: "GET 212-A" },
      { code: "get212-B", name: "GET 212-B" }
    ],
    "SEET": [
      { code: "get202", name: "GET 202" },
      { code: "get208", name: "GET 208" },
      { code: "get217", name: "GET 217" }
    ],
    "SICT": [
      { code: "eet219", name: "EET 219" }
    ],
    "SAAT": [
      { code: "saat201", name: "SAAT 201" }
    ],
    "SET": [
      // No courses listed for SET in 200L
    ],
    "SLS": [
      // No courses listed for SLS in 200L
    ],
    "SPS": [
      // No courses listed for SPS in 200L
    ],
    "SSTE": [
      // No courses listed for SSTE in 200L
    ],
    "SIT": [
      // No courses listed for SIT in 200L
    ]

  },
  "300": {
    "SIPET": [
      { code: "get301", name: "GET 301" },
      { code: "get302", name: "GET 302" },
      { code: "get303", name: "GET 303" },
      { code: "get305", name: "GET 305" },
      { code: "get307", name: "GET 307" },
      { code: "futm-get311", name: "FUTM-GET 311" },
      { code: "cee301", name: "CEE 301" },
      { code: "gst308", name: "GST 308" }
      // SECOND SEMESTER COURSES FOR SIPET IN 300L
    ],
    "SEET": [
      // No courses listed for SEET in 300L
      { code: "get302", name: "GET 302" },
      { code: "get303", name: "GET 303" },
      { code: "get305", name: "GET 305" },
      { code: "get307", name: "GET 307" },
      { code: "get311", name: "GET 311" },
      { code: "cee301", name: "CEE 301" }
    ],
    "SICT": [
      // No courses listed for SICT in 300L
    ],
    "SAAT": [
      // No courses listed for SAAT in 300L
    ],
    "SET": [
      // No courses listed for SET in 300L
    ],
    "SLS": [
      // No courses listed for SLS in 300L
    ],
    "SPS": [
      // No courses listed for SPS in 300L
    ],
    "SSTE": [
      // No courses listed for SSTE in 300L
    ],
    "SIT": [
      // No courses listed for SIT in 300L
    ]

  },
  "400": {
    "SIPET": [
      { code: "get401", name: "GET 401" }
    ],
    "SEET": [
      // No courses listed for SEET in 400L
    ],
    "SICT": [
      // No courses listed for SICT in 400L
    ],
    "SAAT": [
      // No courses listed for SAAT in 400L
    ],
    "SET": [
      // No courses listed for SET in 400L
    ],
    "SLS": [
      // No courses listed for SLS in 400L
    ],
    "SPS": [
      // No courses listed for SPS in 400L
    ],
    "SSTE": [
      // No courses listed for SSTE in 400L
    ],
    "SIT": [
      // No courses listed for SIT in 400L
    ],
  },
  "500": {
    "SIPET": [
      { code: "get501", name: "GET 501" }
    ],
    "SEET": [
      // No courses listed for SEET in 500L
    ],
    "SICT": [
      // No courses listed for SICT in 500L
    ],
    "SAAT": [
      // No courses listed for SAAT in 500L
    ],
    "SET": [
      // No courses listed for SET in 500L
    ],
    "SLS": [
      // No courses listed for SLS in 500L
    ],
    "SPS": [
      // No courses listed for SPS in 500L
    ],
    "SSTE": [
      // No courses listed for SSTE in 500L
    ],
    "SIT": [
      // No courses listed for SIT in 500L
    ]

  }
};

// ============================================================
// STATE MANAGEMENT
// ============================================================
let currentScore = 0;
let totalQuestions = 0;
let answeredCorrect = {};
let currentCourse = null;

// ============================================================
// INITIALIZE APP
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, rendering levels...");
  renderAllLevels();
  setupDarkMode();
});

// ============================================================
// RENDER ALL LEVELS WITH DEPARTMENTS
// ============================================================
function renderAllLevels() {
  const levels = ["100", "200", "300", "400", "500"];

  levels.forEach(level => {
    const gridId = `grid-${level}`;
    const grid = document.getElementById(gridId);

    console.log(`Rendering level ${level}, grid:`, grid);

    if (grid && coursesByDepartment[level]) {
      grid.innerHTML = ''; // Clear existing content

      Object.entries(coursesByDepartment[level]).forEach(([deptName, courses]) => {
        const card = createDepartmentCard(deptName, courses);
        grid.appendChild(card);
      });
    }
  });
}

// ============================================================
// CREATE DEPARTMENT CARD
// ============================================================
function createDepartmentCard(deptName, courses) {
  const card = document.createElement('div');
  card.className = 'department-card';
  const lastCourse = localStorage.getItem("lastCourse");

  if (lastCourse) {
    selectCourse(lastCourse);
  }

  const header = document.createElement('div');
  header.className = 'department-header';
  header.innerHTML = `
    <span class="dept-name">${deptName}</span>
    <span class="dept-toggle-icon">▼</span>
  `;

  const content = document.createElement('div');
  content.className = 'department-content';

  const courseList = document.createElement('ul');
  courseList.className = 'course-list';

  courses.forEach(course => {
    const item = document.createElement('li');
    item.className = 'course-item';

    const btn = document.createElement('button');
    btn.className = 'course-btn';
    btn.dataset.course = course.code;
    btn.textContent = course.name;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectCourse(course.code);
    });

    item.appendChild(btn);
    courseList.appendChild(item);
  });

  content.appendChild(courseList);

  // Toggle department expand/collapse
  header.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });

  card.appendChild(header);
  card.appendChild(content);

  return card;
}
// select course and show questions

function selectCourse(courseCode) {
  const levels = document.getElementById('levels-container');
  const questions = document.getElementById('questions');

  currentCourse = courseCode;

  function selectCourse(courseCode) {
    currentCourse = courseCode;

    localStorage.setItem("lastCourse", courseCode);
    // ✅ SAVE LAST SELECTED COURSE TO LOCAL STORAGE
  }
  // Fade out courses
  levels.classList.remove('show');
  levels.classList.add('fade');

  setTimeout(() => {
    levels.style.display = 'none';

    // Show questions
    questions.style.display = 'block';
    questions.classList.add('fade');

    setTimeout(() => {
      questions.classList.add('show');
    }, 50);

    renderQuestions(courseCode);
  }, 300);
}

// ============================================================
// RENDER QUESTIONS - PROFESSIONAL LAYOUT
// ============================================================
function renderQuestions(courseKey, searchTerm = "") {
  const questionsSection = document.getElementById('questions');
  const questionData = courses[courseKey] || [];

  const filtered = questionData.filter(q => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return q.question.toLowerCase().includes(term) ||
      (q.options || []).some(opt => opt.toLowerCase().includes(term));
  });

  questionsSection.innerHTML = '';
  questionsSection.classList.remove('hidden');

  // Back to courses button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-to-courses';
  backBtn.innerHTML = '← Back to Courses';
  backBtn.addEventListener('click', () => {
    questionsSection.classList.add('hidden');
    document.querySelector('.levels-container').scrollIntoView({ behavior: 'smooth' });
  });
  questionsSection.appendChild(backBtn);

  // Score bar with controls
  const scoreBar = document.createElement('div');
  scoreBar.id = 'score-bar';
  scoreBar.innerHTML = `
    <span>Course: <strong>${courseKey.toUpperCase()}</strong> | Score: <strong id="score-display">0 / ${questionData.length}</strong></span>
  `;
  questionsSection.appendChild(scoreBar);

  // Search box
  const searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = '🔍 Search questions...';
  searchBox.addEventListener('input', (e) => renderQuestions(courseKey, e.target.value));
  questionsSection.appendChild(searchBox);

  // Initialize scoring
  totalQuestions = questionData.length;
  currentScore = 0;
  answeredCorrect[courseKey] = answeredCorrect[courseKey] || Array(totalQuestions).fill(false);

  // Render questions
  if (filtered.length === 0) {
    const noQ = document.createElement('div');
    noQ.className = 'question';
    noQ.textContent = 'No questions found.';
    questionsSection.appendChild(noQ);
    return;
  }

  filtered.forEach((q) => {
    const questionCard = document.createElement('div');
    questionCard.className = 'question';

    // Question text
    const questionText = document.createElement('strong');
    questionText.innerHTML = `Q${q.number}: ${q.question}`;
    questionCard.appendChild(questionText);

    // Options list
    const ul = document.createElement('ul');
    ul.className = 'options';

    (q.options || []).forEach((option, idx) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.type = 'button';

      btn.addEventListener('click', () => {
        ul.querySelectorAll('.option-btn').forEach(b =>
          b.classList.remove('correct', 'incorrect', 'selected')
        );
        btn.classList.add('selected');

        if (option.trim() === (q.answer || '').trim()) {
          btn.classList.add('correct');
          const qIdx = q.number - 1;
          if (!answeredCorrect[courseKey][qIdx]) {
            answeredCorrect[courseKey][qIdx] = true;
            currentScore++;
            document.getElementById('score-display').textContent = `${currentScore} / ${totalQuestions}`;
          }
        } else {
          btn.classList.add('incorrect');
        }
      });

      li.appendChild(btn);
      ul.appendChild(li);
    });

    questionCard.appendChild(ul);

    // Button controls container
    const controls = document.createElement('div');
    controls.className = 'question-controls';

    // Show Answer button
    const showBtn = document.createElement('button');
    showBtn.className = 'show-answer';
    showBtn.textContent = 'Show Correct Answer';
    showBtn.type = 'button';

    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    answerDiv.innerHTML = `<strong>✓ Correct Answer:</strong> <span style="margin-left: 0.5rem; display: inline;">${q.answer || 'N/A'}</span>`;

    showBtn.addEventListener('click', () => {
      const isVisible = answerDiv.classList.contains('visible');
      if (isVisible) {
        answerDiv.classList.remove('visible');
        showBtn.textContent = 'Show Correct Answer';
      } else {
        answerDiv.classList.add('visible');
        showBtn.textContent = 'Hide Answer';
      }
    });

    controls.appendChild(showBtn);
    questionCard.appendChild(controls);
    questionCard.appendChild(answerDiv);  // Answer goes AFTER controls, inside the question card

    questionsSection.appendChild(questionCard);
  });
}

// ============================================================
// DARK MODE SETUP
// ============================================================
function setupDarkMode() {
  const toggle = document.getElementById('darkmode-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('darkMode');

  function setDarkMode(enabled) {
    if (enabled) {
      document.body.classList.add('dark-mode');
      toggle.textContent = '☀️ Light Mode';
      localStorage.setItem('darkMode', 'on');
    } else {
      document.body.classList.remove('dark-mode');
      toggle.textContent = '🌙 Dark Mode';
      localStorage.setItem('darkMode', 'off');
    }
  }

  // Apply saved preference or system default
  if (saved === 'on' || (saved === null && prefersDark)) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }

  toggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
  });
}