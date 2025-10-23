
// === SAMPLE COURSES OBJECT ===
// Add your full questions here!
 const courses = { 
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
      answer: "Nuclear force"},
    {
      number: 9,
      question: "What phenomenon causes the roaring sound of clouds?",
      options: ["The splitting of clouds", "The reflection of thunder by clouds, hills, or obstacles", "The collision of air molecules", "The cooling of the atmosphere"],
      answer: "The reflection of thunder by clouds, hills, or obstacles"},
    {
      number: 10,
      question: "Which of the following devices utilizes electrostatics in its operation?",
      options: ["Internal combustion engine", "Cathode ray tube", "Hydraulic pump", "Steam engine"],
      answer: "Cathode ray tube"},
  {
    number: 11,
     question: "Which part of the atom is positively charged?", 
    options: ["Electron", "Neutron", "Proton", "Nucleus"],
     answer: "Proton"},

  {number: 12,
     question: "Who discovered that some substances exhibit electrical charge when rubbed?", 
     options: ["Isaac Newton", "William Gilbert", "Charles Du Fay", "Michael Faraday"], 
     answer: "William Gilbert"},
  {number: 13,
     question: "What type of charge does a glass rod acquire when rubbed with silk?",
     options: ["Positive", "Negative", "Neutral", "None of the above"], 
     answer: "Positive"},
  {number: 14,
     question: "What happens when two ebonite rods rubbed with fur are brought close to each other?",
     options: ["They attract each other", "They repel each other", "They become neutral", "They have no effect on each other"],
     answer: "They repel each other"},
  {number: 15,
     question: "Which type of charge is associated with the electron?",
     options: ["Positive", "Negative", "Neutral", "None of the above"],
     answer: "Negative"},
  {number: 16,
     question: "What force holds the protons and neutrons together in the nucleus?",
     options: ["Gravitational force", "Magnetic force", "Nuclear force", "Electrical force"],
     answer: "Nuclear force"},
  {number: 17,
     question: "What are free electrons?",
     options: ["Electrons that are tightly bound to the nucleus", "Electrons that can move away from the atom", "Electrons that carry positive charge", "Electrons that are neutral"],
     answer: "Electrons that can move away from the atom"},
  {number: 18,
     question: "What happens to the wool when it is rubbed with a plastic ruler?",
     options: ["It gains electrons and becomes negatively charged", "It loses electrons and becomes positively charged", "It remains electrically neutral", "It repels the plastic ruler"],
     answer: "It loses electrons and becomes positively charged"},
  {number: 19,
     question: "What happens when two materials are rubbed together?",
     options: ["Electrons get transferred from one material to the other", "Protons get transferred from one material to the other", "Neutrons get transferred from one material to the other", "No charge transfer occurs"],
     answer: "Electrons get transferred from one material to the other"},
  {number: 20,
     question: "What type of charge does an object have when it has an equal amount of both types of charge?",
     options: ["Positive", "Negative", "Neutral", "Charged"],
     answer: "Neutral"},
  {number: 21,
     question: "What does the principle of superposition of forces state?",
     options: ["The force between two charges depends on their masses.", "The total force on a charge is the vector sum of individual forces exerted by other charges.", "The total force on a charge is the scalar sum of individual forces exerted by other charges.", "The force between two charges is independent of their distance."],
     answer: "The total force on a charge is the vector sum of individual forces exerted by other charges."},
  {number: 22, 
    question: "The force on a charge due to multiple other charges is calculated by:", 
    options: ["Adding the forces algebraically.", "Finding the scalar sum of all forces.", "Applying Coulomb’s law to each pair and summing the vectors.", "None of the above."],
     answer: "Applying Coulomb’s law to each pair and summing the vectors."},
  {number: 23,
     question: "What does an electric field represent?",
     options: ["The region of space where a magnetic force can be felt.", "The region of space where a charged particle experiences a force.", "The direction of motion of a charged particle.", "The energy possessed by a charged particle."], 
     answer: "The region of space where a charged particle experiences a force."},
  {number: 24,
    question: "When another charged object enters an electric field, what happens?",
    options: ["It gains energy.", "It experiences an electric force.", "It loses charge.", "It remains unaffected."],
    answer: "It experiences an electric force."},
  {number: 25,
    question: "The direction of the electric field € at a point is:",
    options: ["Opposite to the direction of the electric force.", "Perpendicular to the direction of the electric force.", "Along the direction of the electric force.", "Independent of the direction of the electric force."],
    answer: "Along the direction of the electric force."},
  {number: 26,
    question: "In SI units, the electric field intensity is measured in:",
    options: ["Coulombs per newton (C/N).", "Newton per coulomb (N/C).", "Meter per Volt (M/V).", "Joules per coulomb (J/C)."],
    answer: "Newton per coulomb (N/C)."},
  {number: 27,
    question: "According to the text, the force between two charges ( q1 ) and ( q2 ) separated by distance ( r ) is given by:",
    options: ["F = (1 / 4πepsilon) * {|q1q2|}/{r^2}", "F = ( 1/ {4πepsilon} * {q1 + q2}{r}", "F = ( 1 / {4πepsilon} * {q1 – q2}/{r^2}", "F = k{q1 q2} + {r^2}"],
    answer: "F = (1 / 4πepsilon) * {|q1q2|}/{r^2}"},
  {number: 28,
    question: "What is the SI unit of electric field intensity?",
    options: ["Volt per meter (V/m)", "Newton per coulomb (N/C)", "Coulomb per meter (C/m)", "Joule per coulomb (J/C)"],
    answer: "Newton per coulomb (N/C)"},
  {number: 29,
    question: "Electric field intensity € is defined as:",
    options: ["The electric force experienced by a charge.", "The electric force per unit charge.", "The potential energy per unit charge.", "The electric potential difference."],
    answer: "The electric force per unit charge."},
  {number: 30,
    question: "If a charge (q2) is placed near another charge ( q1), the charges:",
    options: ["Always attract each other.", "Always repel each other.", "Interact through their electric fields.", "Do not interact."],
    answer: "Interact through their electric fields."},
  {number: 31,
    question: "What is electric flux a measure of?",
    options: ["The amount of charge in a region", "The strength of a magnetic field", "The number of electric field lines passing through a point or area", "The distance between electric field lines"],
    answer: "The number of electric field lines passing through a point or area"},
  {number: 32,
    question: "What happens to the electric flux through the surface of a box if a positive charge is placed inside it?",
    options: ["There is an inward flux of electric field.", "There is an outward flux of electric field.", "There is no electric flux.", "The flux becomes zero."],
    answer: "There is an outward flux of electric field."},
  {number: 33,
    question: "If a box contains both a positive and a negative charge, what is the net electric flux through the surface of the box?",
    options: ["Outward flux", "Inward flux", "No net flux", "The flux is infinite"],
    answer: "No net flux"},
  {number: 34,
    question: "If there is no charge inside an imaginary box, what is true about the electric flux through the box?",
    options: ["There is an inward flux.", "There is an outward flux.", "There is no electric flux.", "The flux is constant."],
    answer: "There is no electric flux."},
  {number: 35,
    question: "The electric flux, ΦE, is defined as the product of which two quantities?",
    options: ["Electric field, €, and the charge, (Q)", "Electric field, €, and the surface area, (A), perpendicular to the field", "Surface area, (A), and the distance between charges", "Electric potential, (V), and the surface area, (A)"],
    answer: "Electric field, €, and the surface area, (A), perpendicular to the field"},
  {number: 36,
    question: "Which of the following describes the electric flux through a surface when a negative charge is inside an imaginary box?",
    options: ["Outward flux", "Inward flux", "No flux", "Perpendicular flux"],
    answer: "Inward flux"},
  {number: 37,
    question: "When the plane surface is tilted with respect to the electric field, what is used to calculate the electric flux?",
    options: ["The area parallel to the electric field", "The area perpendicular to the electric field", "The total surface area of the box", "The distance from the charge to the surface"],
    answer: "The area perpendicular to the electric field"},
  {number: 38,
    question: "The term “flux” in the context of electric fields originally comes from a Latin word meaning what?",
    options: ["Flow", "Charge", "Field", "Area"],
    answer: "Flow"},
  {number: 39,
    question: "What can be said about the number of electric field lines per unit area?",
    options: ["It is inversely proportional to the electric field strength.", "It is directly proportional to the electric field strength.", "It remains constant regardless of the electric field strength.", "It is proportional to the distance from the charge."],
    answer: "It is directly proportional to the electric field strength."},
  {number: 40,
    question: "If the electric flux through a surface is zero, what can we infer about the charges inside the surface?",
    options: ["Only positive charges are present.", "Only negative charges are present.", "No charges are present, or the net charge is zero.", "There are equal numbers of positive and negative charges."],
    answer: "No charges are present, or the net charge is zero."},
  {number: 41,
    question: "If the number of point charge is increases, the magnitude of the flux will also;",
    options: ["Increases", "Decreases", "Remain the same", "Increases then decreases"],
    answer: "Increases"},
  {number: 42,
    question: "When electric field lines are parallel and equally spaced, the field is _____",
    options: ["Strong", "weak", "Uniform", "Attract"],
    answer: "Uniform"},
  {number: 43,
    question: "What is the nature of electric field lines around a negative charge?",
    options: ["They start from the charge.", "They terminate on the charge.", "They are circular.", "They are parallel to the charge."],
    answer: "They terminate on the charge."},
  {number: 44,
    question: "The flux is depending on the number of _____",
    options: ["Enclosed charge", "Enclosed surface", "Electron transferred", "Electric charge"],
    answer: "Enclosed charge"},
  {number: 45,
    question: "What is electric flux a measure of?",
    options: ["The amount of charge in a region", "The strength of a magnetic field", "The number of electric field lines passing through a point or area", "The distance between electric field lines"],
    answer: "The number of electric field lines passing through a point or area"},
  {number: 46,
    question: "What happens to the electric flux through the surface of a box if a positive charge is placed inside it?",
    options: ["There is an inward flux of electric field.", "There is an outward flux of electric field.", "There is no electric flux.", "The flux becomes zero."],
    answer: "There is an outward flux of electric field."},
  {number: 47,
    question: "If a box contains both a positive and a negative charge, what is the net electric flux through the surface of the box?",
    options: ["Outward flux", "Inward flux", "No net flux", "The flux is infinite"],
    answer: "No net flux"},
  {number: 48,
    question: "If there is no charge inside an imaginary box, what is true about the electric flux through the box?",
    options: ["There is an inward flux.", "There is an outward flux.", "There is no electric flux.", "The flux is constant."],
    answer: "There is no electric flux."},
  {number: 49,
    question: "The electric flux, ΦE, is defined as the product of which two quantities?",
    options: ["Electric field, €, and the charge, (Q)", "Electric field, €, and the surface area, (A), perpendicular to the field", "Surface area, (A), and the distance between charges", "Electric potential, (V), and the surface area, (A)"],
    answer: "Electric field, €, and the surface area, (A), perpendicular to the field"},
  {number: 50,
    question: "Which of the following describes the electric flux through a surface when a negative charge is inside an imaginary box?",
    options: ["Outward flux", "Inward flux", "No flux", "Perpendicular flux"],
    answer: "Inward flux"},
  {number: 51,
    question: "Gauss’s law states that the total electric flux through any closed surface is proportional to:",
    options: ["The surface area of the closed surface", "The total (net) electric charge inside the surface", "The distance from the charge to the surface", "The magnitude of the electric field outside the surface"],
    answer: "The total (net) electric charge inside the surface"},
  {number: 52,
    question: "Which of the following can Gauss’s law help us understand?",
    options: ["The behavior of magnetic fields in a vacuum", "How electric charge distributes itself over conducting bodies", "The flow of current through a resistor", "The propagation of light waves through a medium"],
    answer: "How electric charge distributes itself over conducting bodies"},
  {number: 53,
    question: "The magnitude of the electric field E at every point on the surface of a sphere with a positive point charge at the center is determined using:",
    options: ["Coulomb’s law", "Faraday’s law", "Gauss’s law", "Ampère’s law"],
    answer: "Gauss’s law"},
  {number: 54,
    question: "A Gaussian surface is:",
    options: ["An open surface used to measure magnetic flux", "A closed surface used to calculate electric flux", "A flat surface used in optics", "A curved surface in wave theory"],
    answer: "A closed surface used to calculate electric flux"},
  {number: 55,
    question: "When a charged body in an electric field moves to the position where its potential energy is smaller, this is analogous to:",
    options: ["A body moving upwards in a gravitational field", "A body moving to the position where its gravitational potential energy is maximum", "A body moving to the position where its gravitational potential energy is zero", "A body rotating in a circular"],
    answer: "A body moving to the position where its gravitational potential energy is maximum"},
  {number: 56,
    question: "Gauss’s law simplifies problems that have:",
    options: ["No symmetry", "Low degree of symmetry", "A high degree of symmetry", "No relation to symmetry"],
    answer: "A high degree of symmetry"},
  {number: 57,
    question: "The electric flux through a closed surface depends on:",
    options: ["The net electric charge inside the surface", "The shape of the surface", "The temperature of the surface", "The material of the surface"],
    answer: "The net electric charge inside the surface"},
  {number: 58,
    question: "The electric field inside a conductor in electrostatic equilibrium is:",
    options: ["Zero", "Uniform", "Maximum", "Constant and non-zero"],
    answer: "Zero"},
  {number: 59,
    question: "If the radius of a spherical Gaussian surface is increased, the electric flux through the surface due to a point charge at the center:",
    options: ["Increases", "Decreases", "Remains the same", "Depends on the material of the sphere"],
    answer: "Remains the same"},
  {number: 60,
    question: "The potential energy of a charged body in an electric field will tend to:",
    options: ["Increase as the body moves to a position of lower potential", "Decrease as the body moves to a position of lower potential", "Remain constant as the body moves within the field", "Be independent of the body’s position in the field"],
    answer: "Decrease as the body moves to a position of lower potential"},
  {number: 61,
    question: "Which law is logically equivalent to Gauss’s law but is generally used for calculating the electric field due to point charges?",
    options: ["Coulomb’s law", "Ampère’s law", "Faraday’s law", "Ohm’s law"],
    answer: "Coulomb’s law"},
  {number: 62,
    question: "In an electric field, the potential energy of a charged particle is most closely related to:",
    options: ["The mass of the particle", "The charge of the particle", "The velocity of the particle", "The acceleration of the particle"],
    answer: "The charge of the particle"},
  {number: 63,
    question: "When a body is raised above the Earth’s surface, it acquires potential energy. Similarly, a charged body in an electric field acquires:",
    options: ["Kinetic energy", "Electric potential energy", "Magnetic potential energy", "Thermal energy"],
    answer: "Electric potential energy"},
  {number: 64,
    question: "In the analogy between gravitational potential energy and electric potential energy, the position of the charged particle in the electric field is comparable to:",
    options: ["The mass of the object", "The speed of the object", "The height of the object above the Earth’s surface", "The temperature of the object"],
    answer: "The height of the object above the Earth’s surface"},
  {number: 65,
    question: "In which direction does a positive charge move in an electric field?",
    options: ["Against the direction of the electric field", "In the direction of the electric field", "Perpendicular to the electric field", "Randomly"],
    answer: "In the direction of the electric field"},
  {number: 66,
    question: "What happens to the potential energy of a positive charge as it moves away from a positively charged plate?",
    options: ["It increases", "It decrease", "It remains the same", "It becomes zero"],
    answer: "It increases"},
  {number: 67,
    question: "How is the electric potential at a point in a field defined?",
    options: ["Force per unit charge at that point", "Work done per unit charge moving from infinity to that point", "Energy per unit charge at that point", "Distance per unit charge from the sources"],
    answer: "Work done per unit charge moving from infinity to that point"},
  {number: 68,
    question: "What is the significance of the choice of the zero of potential?",
    options: ["It must always be at infinity", "It is purely arbitrary", "It must always be at the origin of the field", "It is fixed for all electric fields"],
    answer: "It is purely arbitrary"},
  {number: 69,
    question: "In atomic physics, where distances of 10^{-10} m are involved, how far might “infinity” be considered?",
    options: ["A few centimeters away", "A few kilometers away", "Only a small distance away from the charge responsible for the field", "A few meters away"],
    answer: "Only a small distance away from the charge responsible for the field"},
  {number: 70,
    question: "The potential energy (U) associated with a test charge (Q) in an electric field can be described on what basis?",
    options: ["Per unit volume", "Per unit charge", "Per unit force", "Per unit distance"],
    answer: "Per unit charge"},
  {number: 71,
    question: "What is the electric potential (V) at a point in an electric field defined as?",
    options: ["Force per unit charge at that point", "Work done per unit charge moving from infinity to that point", "Potential energy per unit charge associated with a test charge at that point", "Distance per unit charge from the source"],
    answer: "Potential energy per unit charge associated with a test charge at that point"},
  {number: 72,
    question: "The SI unit of electric potential is the volt (V). One volt is equivalent to:",
    options: ["1 joule per coulomb (1 J/C)", "1 newton per coulomb (1 N/C)", "1 coulomb per joule (1 C/J)", "1 watt per coulomb (1 W/C)"],
    answer: "1 joule per coulomb (1 J/C)"},
  {number: 73,
    question: "What is the advantage of calculating the electric potential before determining the electric field?",
    options: ["It makes field calculations unnecessary", "It simplifies the calculation of electric fields", "It is a more accurate method", "It is a required step in all electric field calculations"],
    answer: "It simplifies the calculation of electric fields"},
  {number: 74,
    question: "If the electrostatic force between two equally charged bodies separated by a distance of 0.5 m is 36 x 10 N, what is the charge on each body?",
    options: ["2 C", "1 C", "3 C", "4 C"],
    answer: "1 C"},
  {number: 75,
    question: "The region where a charged body experiences an electric force is called ________",
    options: ["Force field", "Magnetic field", "Gravitational field", "Electric field"],
    answer: "Electric field"},
  {number: 76,
    question: "Electric field is a _____________",
    options: ["Vector field", "Scalar field", "None of the above", "All of the above"],
    answer: "Vector field"},
  {number: 77,
    question: "Which of the following statements is correct?",
    options: ["The field about an isolated positive charge is radially inward while the field about a negative charge is radially outward", "The field about an isolated positive charge and isolated negative charge is both radially inward", "The field about an isolated positive charge and isolated negative charge is both radially outward", "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"],
    answer: "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"},
  {number: 78,
    question: "What is the magnitude of the electric field at a field point 2.0 m from a point charge q = 4.0 nC?",
    options: ["18.0 N/C", "9.0 N/C", "36.0 N/C", "6.0 N/C"],
    answer: "9.0 N/C"},
  {number: 79,
    question: "The total electric field at a point P is the vector sum of the fields at P due to each point charge in the charge distribution. This is the principle of:",
    options: ["Superposition of electric field", "Norton’s theory", "Coulomb’s rule", "Linear charge density"],
    answer: "Superposition of electric field"},
  {number: 80,
    question: "The imaginary line or curve drawn through a region of space so that its tangent at any point is in the direction of the electric field vector at the point, is called __________",
    options: ["Vector line", "Electrostatic line", "Electric field line", "Latitude"],
    answer: "Electric field line"},
  {number: 81,
    question: "Calculate the electric field intensity at a point 15 cm from a charge of 10 μC",
    options: ["4 x 10^6 N/C", "4 x 10^-6 N/C", "6 x 10^-6 N/C", "6 x 10^6 N/C"],
    answer: "4 x 10^6 N/C"},
  {number: 82,
    question: "Electrostatic forces are governed by a simple relationship known as",
    options: ["Ohm’s law", "Newton’s law", "Coulomb’s law", "Faraday’s law"],
    answer: "Coulomb’s law"},
  {number: 83,
    question: "Electric charges at rest is referred to as",
    options: ["electric current", "electrostatic", "electric field", "Rest charge"],
    answer: "electrostatic"},
  {number: 84,
    question: "Which of the following statements is correct?",
    options: ["Two negative charges or two positive charges repel each other", "Two negative charges or two positive charges attract each other", "A positive charge and a negative charge repel each other", "A positive charge attracts another positive charge but repel a negative charge"],
    answer: "Two negative charges or two positive charges attract each other"},
  {number: 85,
    question: "Which of the following cannot be found in the nucleus of an atom?",
    options: ["Proton", "electron", "neutron", "none of the above"],
    answer: "electron"},
  {number: 86,
    question: "A neutral atom has as many electrons as it does protons",
    options: ["True", "False", "Can’t say"],
    answer: "True"},
  {number: 87,
    question: "When an atom loses an electron, it becomes _______________",
    options: ["Positively charged", "Negatively charged", "Neutral atom", "An electron"],
    answer: "Positively charged"},
  {number: 88,
    question: "The principle of conservation of charges state that",
    options: ["The force of attraction between two charges is directly proportional to the square of their distance apart", "The force of repulsion between two charges is inversely proportional to the square of their distance apart", "The magnitude of charge of the electron is a natural unit of electric field intensity", "The algebraic sum of all the electric charges in any closed system is constant"],
    answer: "The algebraic sum of all the electric charges in any closed system is constant"},
  {number: 89,
    question: "When the distance r between two charged bodies doubles, the force",
    options: ["Increases to one-quarter of its initial value", "Decreases to one-quarter of its initial value", "Increases to one-half of its initial value", "Decreases to one-half of its initial value"],
    answer: "Decreases to one-quarter of its initial value"},
  {number: 90, 
    question: "Coulomb’s law state that", 
    options: ["The magnitude of the electric force between two point charges is directly proportional to the sum of the charges and inversely proportional to the square of the distance between them", "The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the distance between them", "The magnitude of the electric force between two point charges is directly proportional to the sum of the charges and inversely proportional to the distance between them", "The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them"],
     answer: "The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them"},
  {number: 91, 
    question: "The electrostatic force between two charges is 120 N. if the distance between the charges is doubled, what will be the value of the force?", 
    options: ["10 N", "25 N", "40 N", "30 N"], 
    answer: "30 N"},
  {number: 92, 
    question: "How many electrons must be placed on each of two small spheres placed 3 cm apart if the force of repulsion between them is to be 10^-19 N?", 
    options: ["526", "625", "225", "525"], 
    answer: "625"},
  {number: 93,
    question: "The magnitude of the torque depends on the angle Փ between the electric dipole moment and", 
    options: ["Electric field", "Nuclear field", "Magnetic field", "Electric current"], 
    answer: "Electric field"},
  {number: 94,
     question: "The potential energy U for a dipole in an electric field is given by",
      options: ["U = - P ᵒ E", "U = - P ᵒ q", "U = - P ᵒ Փ", "U = - qE"], 
     answer: "U = - P ᵒ E"},
  {number: 95,
     question: "A charge of 1.0 x 10^-5 C experiences a force of 4 N at a certain point in space. What is the electric field intensity?", 
     options: ["4.0 x 10^5 N/C", "4.0 x 10^-5 N/C", "6.0 x 10^5 N/C", "6.0 x 10^-5 N/C"], 
     answer: "4.0 x 10^5 N/C"},
  {number: 96,
     question: "The gain or loss of electrons in an atom is called",
     options: ["Reduction", "Electronegativity", "Protonation", "Ionization"],
     
     answer: "Ionization"},
  {number: 97,
     question: "Calculate the electric field intensity in vacuum at a distance of 10 cm from a charge of 5 x 10^-4 C",
     options: ["4.5 x 10^8 N/C", "4.5 x 10^7 N/C", "4.5 x 10^6 N/C", "4.5 x 10^5 N/C"],
     answer: "4.5 x 10^8 N/C"},
  {number: 98,
     question: "Rubber band and nylon are examples of",
     options: ["Insulators", "Conductors", "Semiconductors", "Metals"],
     answer: "Insulators"},
  {number: 99,
     question: "The act of charging a metal ball using a copper wire and an electrically charged plastic rod in which the plastic rod can give the other body a Charge of opposite sign without losing any of its own charge is known as charging by",
     options: ["Conduction", "Friction", "Induction", "Distortion"],
     answer: "Induction"},
  {number: 100,
     question: "The deficiency or excessiveness of an electron in an atom is known as",
     options: ["Coulomb", "Current", "Electrostatic", "Electric charge"],
     answer: "Electric charge"},
  {number: 101,
     question: "If 10 electrons are placed on an uncharged metallic sphere, how much electric charge is on the sphere?",
     options: ["1.6 C", "1.5 C", "1.7 C", "6.0 C"],
     answer: "1.6 C"},
  {number: 102,
     question: "Two-point charges q1 = +25 nC and q2 = -75 nC are separated by a distance r = 3.0 cm. find the magnitude of the force that q1 exert on q2.",
     options: ["0.0019 N", "0.19 N", "0.0019 N", "0.019 N"],
     answer: "0.019 N"},
  {number: 103,
     question: "The simplest atom is the hydrogen atom and it contains",
     options: ["1 proton in its nucleus balanced by 2 electrons orbiting the nucleus", "1 proton in it’s nucleus balanced by 1 electron", "2 proton in it’s nucleus balanced by 1 electron", "2 proton in it’s nucleus balanced by 2 electron"],
     answer: "1 proton in it’s nucleus balanced by 1 electron"} // ... all your 103 questions and answers here
    // ... add ALL PHY 102 questions here
  ],
  mat101: [   
    {number: 1, 
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑝2−9.",
      options: ["6", "5", "−6", "5"], 
      answer: "5"
    }, 
  {number: 2,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝛽2+5𝛽+4.",
      options: ["2", "5", "−3", "5"],
      answer: "5"
    },
  {number: 3,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 lim.",
      options: ["1", "−1"],
      answer: "1"
    },
  {number: 4,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["−1", "2", "5", "2"],
      answer: "2"
    },
  {number: 5,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 2𝑦2+1.",
      options: ["−4", "3", "3"],
      answer: "3"
    },
  {number: 6,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓(3+𝑘)−1−3−1",
      options: ["−1", "3", "1", "3"],
      answer: "1"
    },
  {number: 7,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑦2−3𝑦−4.",
      options: ["−5", "3", "4"],
      answer: "4"
    },
  {number: 8,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓(3+𝑘)−1−3−1",
      options: ["−1", "3", "1", "3"],
      answer: "1"
    },
  {number: 9,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑦2−3𝑦−4𝑦−4",
      options: ["−5", "3", "4"],
      answer: "4"
    },
  {number: 10,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝜆4−16𝜆−2",
      options: ["−5", "3", "4"],
      answer: "4"
    },
  {number: 11,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑥2−3𝑥−4",
      options: ["5", "−5", "−1"],
      answer: "−5"
    },
  {number: 12,
      question: "𝐷𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑏2−7𝑏+12𝑏−4",
      options: ["−1", "1", "4"],
      answer: "1"
    },
  {number: 13,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["6", "−6", "1", "−1"],
      answer: "6"
    },
  {number: 14,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑔(𝑡) = 𝑡2−4𝑡−2",
      options: ["−2", "−1", "1", "2"],
      answer: "−2"
    },
  {number: 15,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["5", "−3", "−1", "4"],
      answer: "−1"
    },
  {number: 16,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim",
      options: ["1", "4", "−1", "−4"],
      answer: "−4"
    },
  {number: 17,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→2 𝑥2−𝑥−2 𝑥−2",
      options: ["1", "4", "−1", "−4"],
      answer: "−4"
    },
  {number: 18,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→2 𝑥2+𝑥−6 𝑥−2",
      options: ["1", "5", "−5", "−1"],
      answer: "5"
    },
  {number: 19,
      question: "𝐶𝑜𝑚𝑝𝑢𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 (3+𝑥)2−9 𝑥 as 𝑥→0",
      options: ["−6", "6", "5", "−5"],
      answer: "6"
    },
   {number: 20,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 ℎ(𝑥)=𝑥2−1 𝑥−1 𝑎𝑠 𝑥→1",
      options: ["2", "−2", "1", "−1"],
      answer: "2"
    },
  {number: 21,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓 𝑎𝑠 𝑠𝑖𝑛5𝜃 𝑠𝑖𝑛7𝜃 as 𝜃 𝑡𝑒𝑛𝑑𝑠 𝑡𝑜 0",
      options: ["0", "−5/7", "∞", "5/7"],
      answer: "−5/7"
    },
   {number: 22,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑛→−4 (1 4+1 𝑥 𝑥+4 )",
      options: ["−1/16", "−1/8", "−1/4", "−1/2"],
      answer: "−1/4"
    },
   {number: 23,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→0 (1 𝑡 − 1 𝑡2+𝑡 )",
      options: ["2", "−2", "1", "−1"],
      answer: "−1"
    },
  {number: 24,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→1 ( 𝑙𝑛𝑥 𝑥2+𝑥−2 )",
      options: ["−1/3", "1/3", "−1/9", "1/9"],
      answer: "−1/3"
    },
   {number: 25,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑦→2 (𝑦2−𝑦−2 𝑦−2 )",
      options: ["0", "2", "3", "6"],
      answer: "0"
    },
   {number: 26,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (𝑥3 𝑥−𝑠𝑖𝑛𝑥 )",
      options: ["0", "undefined", "3", "6"],
      answer: "0"
    },
   {number: 27,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→4 (𝑥2−𝑥−12 𝑥−4 )",
      options: ["0", "1", "−7", "7"],
      answer: "1"
    },
   {number: 28,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑝→3 (𝑝2−9 𝑝−3 )",
      options: ["−3", "6", "3", "−6"],
      answer: "6"
    },
   {number: 29,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑎→4 (𝑎2−7𝑎+12 𝑎−4 )",
      options: ["2", "4", "1", "−1"],
      answer: "1"
    },
   {number: 30,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (𝑥4−81 𝑥2−9 )",
      options: ["3", "9", "18", "81"],
      answer: "18"
    }, 
   {number: 31,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→∞ ( 𝑡3+5𝑡 2𝑡3−𝑡2+4 )",
      options: ["1", "16", "8", "4"],
      answer: "1"
    },
   {number: 32,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑦→−2 (√𝑦4+3𝑦+6)",
      options: ["2", "4", "−4", "−2"],
      answer: "2"
    },
    {number: 33,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓𝑝2+5𝑝+4 𝑎𝑠 𝑝 →−5",
      options: ["3", "5", "2", "3"],
      answer: "−3"
    },
   {number: 34,
      question: "𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑒 𝑡ℎ𝑒 𝑙𝑖𝑚𝑖𝑡 𝑜𝑓𝑥2−3𝑥+52𝑥2+𝑥−1.",
      options: ["1", "16", "4", "8"],
      answer: "4"
    },
   {number: 35,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→−4 (𝑡2−16𝑡+4)",
      options: ["−4", "4", "5", "−5"],
      answer: "−4"
    },
   {number: 36,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→0 (1/𝑡 − 1/(𝑡2+𝑡))",
      options: ["2", "−2", "1", "−1"],
      answer: "−1"
    },
   {number: 37,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (√𝑥−1)/(𝑥−3)",
      options: ["1", "√3", "−1", "−√3"],
      answer: "−√3"
    },
   {number: 38,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→2 (2𝑡2+1)/(𝑡−2)",
      options: ["4", "3", "−3", "2"],
      answer: "4"
    },
    {number: 39,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→2 (𝑡2−4)/(𝑡−2)",
      options: ["−2", "2", "4", "8"],
      answer: "4"
    },
    {number: 40,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑦→0 ((3+𝑦)2−9)/𝑦",
      options: ["0", "6", "1", "−1"],
      answer: "6"
    },
   {number: 41,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (𝑥4−81)/(𝑥−3)",
      options: ["9", "18", "81", "108"],
      answer: "18"
    },
   {number: 42,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝛼→2 (𝛼4−16)",
      options: ["8", "16", "32", "64"],
      answer: "32"
    },
   {number: 43,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→∞ (𝑒3𝑥 − 𝑒−5𝑥)/(3𝑥2−𝑥−2)",
      options: ["0", "6", "1", "−1"],
      answer: "0"
    },
    {number: 44,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 ((𝑥+ℎ)2 − 𝑥2)/ℎ",
      options: ["0", "2", "1", "−1"],
      answer: "2"
    },
   {number: 45,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (1−𝑐𝑜𝑠𝑥)/(2𝑥𝑠𝑖𝑛𝑥)",
      options: ["0", "2", "1", "−1"],
      answer: "1"
    },
   {number: 46,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑡→2 (𝑡2−4)/(𝑡−2)",
      options: ["−2", "2", "4", "8"],
      answer: "4"
    },
   {number: 47,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→3 (𝑥4−81)/(𝑥−3)",
      options: ["9", "18", "81", "108"],
      answer: "18"
    },
   {number: 48,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→∞ (5𝑥2+4𝑥+1)/(𝑒3𝑥 − 𝑒−5𝑥)",
      options: ["0", "6", "1", "−1"],
      answer: "0"
    },
   {number: 49,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (𝑥3−𝑥)/(𝑥2−1)",
      options: ["0", "2", "1", "−1"],
      answer: "0"
    },
   {number: 50,
      question: "𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑒 lim𝑥→0 (𝑥2−4)/(𝑥−2)",
      options: ["−2", "2", "4", "8"],
      answer: "4"
    },
  {number: 51,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑦 = 𝑚(𝑥)𝑛(𝑥)𝑛𝑑𝑚+𝑚𝑑𝑛.",
      options: ["𝑛𝑚𝑛−1", "𝑚𝑛𝑚−1", "𝑚𝑛", "𝑛𝑚"],
      answer: "𝑛𝑚𝑛−1"
    },
  {number: 52,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑦 = 5𝑥3 + 3𝑥2 − 2𝑥 + 7",
      options: ["15𝑥2 + 6𝑥 − 2", "15𝑥2 + 6𝑥 + 2", "15𝑥2 − 6𝑥 − 2", "15𝑥2 − 6𝑥 + 2"],
      answer: "15𝑥2 + 6𝑥 − 2"
    },
   {number: 53,
      question: "𝐹𝑖𝑛𝑑 𝑡ℎ𝑒 𝑓𝑖𝑟𝑠𝑡 𝑑𝑒𝑟𝑖𝑣𝑎𝑡𝑖𝑣𝑒 𝑜𝑓(4𝑥 −3)5",
      options: ["5(4𝑥 −3)4", "10(4𝑥 − 3)4", "20(4𝑥 − 3)4", "−10(4𝑥 − 3)4"],
      answer: "20(4𝑥 − 3)4"
    },
  {number: 54,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑦 = 7𝑥4 − 3𝑥3 + 2𝑥2 − 5",
      options: ["28𝑥3 − 9𝑥2 + 4𝑥", "28𝑥3 − 9𝑥2 − 4𝑥", "28𝑥3 + 9𝑥2 + 4𝑥", "28𝑥3 + 9𝑥2 − 4𝑥"],
      answer: "28𝑥3 − 9𝑥2 + 4𝑥"
    },
  {number: 55,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑦 = 4𝑥3 + 2𝑥2 − 6𝑥 + 9",
      options: ["12𝑥2 + 4𝑥 − 6", "12𝑥2 + 4𝑥 + 6", "12𝑥2 − 4𝑥 − 6", "12𝑥2 − 4𝑥 + 6"],
      answer: "12𝑥2 + 4𝑥 − 6"
    },
  {number: 56,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑦 = 𝑎𝑥𝑛,𝑦′ =",
      options: ["𝑎𝑛𝑥𝑛−1", "𝑎𝑛𝑥𝑛", "𝑎𝑛𝑥𝑛+1", "𝑛𝑎𝑥𝑛−1"],
      answer: "𝑛𝑎𝑥𝑛−1"
    },
  {number: 57,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑥, 𝑒𝑠𝑖𝑛2𝑥",
      options: ["2𝑐𝑜𝑠2𝑥𝑒𝑐𝑜𝑠2𝑥", "2𝑐𝑜𝑠2𝑥𝑒𝑠𝑖𝑛2𝑥", "2𝑠𝑖𝑛2𝑥𝑒𝑐𝑜𝑠2𝑥", "2𝑐𝑜𝑠2𝑥𝑒𝑠𝑖𝑛2𝑥"],
      answer: "2𝑐𝑜𝑠2𝑥𝑒𝑠𝑖𝑛2𝑥"
    },
  {number: 58,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑥, 5𝑥3 + 3𝑥2 − 2",
      options: ["15𝑥2 + 6𝑥", "15𝑥2 + 6", "15𝑥2 − 6", "15𝑥2 − 6𝑥"],
      answer: "15𝑥2 + 6𝑥"
  },
  {number: 59,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑥, 𝑙𝑛𝑐𝑜𝑠3𝑥",
      options: ["−𝑡𝑎𝑛3𝑥", "−3𝑡𝑎𝑛3𝑥", "−𝑐𝑜𝑡3𝑥", "−3𝑐𝑜𝑡3𝑥"],
      answer: "−𝑡𝑎𝑛3𝑥"
    },
  {number: 60,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡 𝑡𝑜 𝑥, 3𝑥4 − 5𝑥3 + 2",
      options: ["12𝑥3 − 15𝑥2", "12𝑥3 − 15𝑥", "12𝑥3 + 15𝑥2", "12𝑥3 + 15𝑥"],
      answer: "12𝑥3 − 15𝑥2"
    },
  {number: 61,
      question: "𝐷𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑖𝑎𝑡𝑒 𝑤𝑖𝑡ℎ 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡 𝑡𝑜 𝑥, 7𝑥5 + 4𝑥3 − 2",
      options: ["35𝑥4 + 12𝑥2", "35𝑥4 + 12𝑥", "35𝑥4 − 12𝑥2", "35𝑥4 − 12𝑥"],
      answer: "35𝑥4 + 12𝑥2"
    },
  {number: 62,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑝𝑥𝑚,𝑓𝑖𝑛𝑑 𝑦𝑖𝑣 𝑤ℎ𝑒𝑛 𝑚 = 5.  ",
      options: ["60𝑝𝑥", "60𝑝𝑥2", "120𝑝𝑥", "120𝑝𝑥2"],
      answer: "120𝑝𝑥"
    },
  {number: 63,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑢 = 𝑣𝑢, 𝑓𝑖𝑛𝑑 𝑦′",
      options: ["𝑣𝑑𝑢", "𝑢𝑑𝑣", "𝑑𝑢𝑣", "𝑑𝑣𝑢"],
      answer: "udv"
    },
  {number: 64,
      question: "𝐺𝑖𝑣𝑒𝑛 𝑦 = 𝑥2 +𝑦2,𝑓𝑖𝑛𝑑 𝑦′ 𝑎𝑡 𝑥 = 3,𝑦 = 2",
      options: ["−3", "−2", "2", "3"],
      answer: "−2"
    },
  {number: 65,
     question: "find the third derivative of y = bxm",
      options: ["bm(m−1)(m−2)x m−2", "b(m−1)xb−2", "bm(m −1)(m −2)x m−3", "bm(m −1)(m−2)x (m−1 )(m−2)"],
      answer: "bm(m −1)(m −2)x m−3"
    },
  {number: 66,
      question: "The trigonometric function secx is defined by",
      options: ["1/sinx", "1/cosx", "1/tanx", "1/cotx"],
      answer: "1/cosx"
    },
  {number: 67,
      question: "x3 + y3 + 4xy2 = 7",
      options: ["−(4x2 + 3y2)", "1", "secx", "tanx"],
      answer: "−(4x2 + 3y2)"
    },
    {number: 68,
      question: "Find dy/dx if y=ln(3−4cosx)",
      options: ["4sinx/(3−4cosx)", "−sinx/(3−4cosx)", "1/(3−4cosx)", "4logxsinx"],
      answer: "4sinx/(3−4cosx)"
    },
  {number: 69,
      question: "Find y′ if y=sin(x+2)",
      options: ["5cos(5x+2)", "−5cos(5x+2)", "5sin(5x+2)", "−5sin(5x+2)"],
      answer: "5cos(5x+2)"
    },
  {number: 70,
      question: "Find y′ if y=cos(7x+2)",
      options: ["−7sin(7x+2)", "−7sin(7x−2)", "28sin(7x+2)", "28sin(7x−2)"],
      answer: "−7sin(7x+2)"
    },
  {number: 71,
      question: "Differentiate cos(2x+5)",
      options: ["−2sin(2x+5)", "−2sin(2x−5)", "−10sin(2x+5)", "−sin(2x+5)"],
      answer: "−2sin(2x+5)"
    },
  {number: 72,
      question: "Find the first derivative of ln(x2)",
      options: ["2/x3", "2/x2", "2/x", "−2/x2"],
      answer: "2/x"
    },
  {number: 73,
      question: "Find y′ if y=sin2(5x)",
      options: ["10sin(5x)cos(5x)", "10sin(5x)sin(5x)", "5sin(5x)cos(5x)", "5sin(5x)sin(5x)"],
      answer: "10sin(5x)cos(5x)"
    },
  {number: 74,
      question: "If y=x3, find dy/dx",
      options: ["3x2", "3x3", "1/3x2", "1/3x1"],
      answer: "3x2"
    },
  {number: 75,
      question: "Given x2+2y2=10, find dy/dx",
      options: ["−x/y", "x/y", "−y/x", "y/x"],
      answer: "−x/y"
    },
  {number: 76,
      question: "Given x2+2xy+3y2=9, find dy/dx",
      options: ["(2x−y)/(3x−y)", "(x+3y)/(x+y)", "−(x+y)/(x+3y)", "−(x+3y)/(x+y)"],
      answer: "(2x−y)/(3x−y)"
    },
  {number: 77,
      question: "Differentiate x2 x-2 with respect to x",
      options: ["x(x−4)/(x−2)2", "x(4−x)/(x−2)2", "−x(x+4)/(x−2)2", "x(x+4)/(x−2)2"],
      answer: "x(x−4)/(x−2)2" 
    },
  {number: 78,
      question: "Find the third derivative of lnx",
      options: ["2/x3", "2/x2", "2/x", "1/x2"],
      answer: "2/x3"
    },
  {number: 79,
      question: "Find the second derivative of y=x4",
      options: ["12x2", "12x3", "6x", "6x2"],
      answer: "12x2"
    },
  {number: 80,
      question: "Find dy/dx if y= x2tanx",
      options: ["x2(sec2x + 2tanx)", "x2(sec2x + 2x)", "2x(sec2x + 2tanx)", "2x(sec2x + 2x)"],
      answer: "x2(sec2x + 2tanx)"
    },
    {number: 81,
      question: "Differentiate with respect to x, x1/4",
      options: ["1/4x1/2", "1/4x−3/4", "1/4x−1/4", "1/2x−1/4"],
      answer: "1/4x−3/4"
    },
   {number: 82,
      question: "Which of the following conditions is true about maximum points?",
      options: ["d2y/dx2 <0", "d2y/dx2 =0", "d2y/dx2 >0", "dy/dx <0"],
      answer: "d2y/dx2 <0"
    },
   {number: 83,
      question: "Find the derivative of xy=1",
      options: ["−x2", "−1/x2", "−1/x", "1/x2"],
      answer: "−1/x2"
    },
    {number: 84,
      question: "Find the differential coefficient of cos(sinx)",
      options: ["−cos2xsinx", "−sinx(sinx)cosx", "−sin2xcosx"],
      answer: "−sin2xcosx"
    },
    {number: 85,
      question: "Find dy/dx if y=x5ex",
      options: ["x5ex(x+5)", "x4ex(x+5)", "5x4ex", "5x4ex + xex"],
      answer: "x5ex(x+5)"
    },
    {number: 86,
      question: "If y=2x5+4x4−x3+3x2−5x+7. Find dy/dx at x=2",
      options: ["283", "129", "307", "382"],
      answer: "283"
    },
    {number: 87,
      question: "Find the derivative of (3 x2−2)3",
      options: ["10x(3x2−2)2", "9x(3x2−2)2", "15x(3x2−2)2", "18x(3x2−2)2"],
      answer: "18x(3x2−2)2"
    },
    {number: 88,
      question: "The motion of a particle along a straight line is governed by the equation x=3t4−2t3. Find the velocity after 2 seconds",
      options: ["36𝑚𝑠−1", "72𝑚𝑠−1", "54𝑚𝑠−1", "96𝑚𝑠−1"],
      answer: "72𝑚𝑠−1"
    },
    {number: 89,
      question: "Find the derivative of y= √x+ 1",
      options: ["−1/2√x", "1/2√x3", "2/√x", "−2/√x3"],
      answer: "1/2√x"
    },
    {number: 90,
      question: "Find the derivative of y=cos2x",
      options: ["2cosxsinx", "−2cosxsinx", "−2sin2x", "2sinx"],
      answer: "−2cosxsinx"
    },
    {number: 91,
      question: "Find the derivative of etanx",
      options: ["etanxsec2x", "etanxcotx", "etanxcosx", "etanxsin2x"],
      answer: "etanxsec2x"
    },
    {number: 92,
      question: "Given that y=x4−3x3−4x2+5x2, find dy/dx",
      options: ["4x3−9x2−8x+5", "4x3−9x2+8x+5", "4x3+9x2−8x+5", "4x3+9x2+8x+5"],
      answer: "4x3−9x2−8x+5"
    },
    {number: 93,
      question: "Find the derivative of 3x3−2x4+x5−1",
      options: ["15x4−8x3+6x2", "15x4−8x3+2x", "12x3−8x2+6x", "12x3−8x2+2x"],
      answer: "15x4−8x3+6x2"
    },

   {number: 94,
      question: "Find the third derivative of 3x5−2x4+x2−1",
      options: ["15x4−8x2+2x", "180x2−48x", "160x−48", "60x3−24x+2"],
      answer: "180x2−48x"
    },

    {number: 95,
      question: "Find the equation of the tangent to the curve y=x3+2x2−3x+1 at the point x=−1",
      options: ["y+1−2x=0", "y+4x−1=0", "y=−2x+1", "y+1+2x=0", "y=−4x+2"],
      answer: "y+1+2x=0"
    },
  ],
  cos102: [
    {
      number: 1,
      question: "In problem solving, an algorithm is used to:",
      options: ["A computer program","A systematic set of instructions for solving a problem","Random ways of finding answers","A hardware component"],
      answer: "A systematic set of instructions for solving a problem"
    },

    {
      number: 2,
      question: "A method that is not systematically effective is one that:",
      options: ["Produces consistent results","Cannot be relied on for every instance","Is always correct"],
      answer: ". Cannot be relied on for every instance"
    },

    {
      number: 3,
      question: "Problem solving in computer science focuses mainly on:",
      options: [
        "Playing games",
        "Solving problems with computers",
        "Building hardware",
        "Drawing flowcharts"
      ],
      answer: "Solving problems with computers"
    },
    {
      number: 4,
      question: "The main components of a computer system include:",  
      options: [" Input Unit",
        "Output Unit",
        "Logic Model",
        "Storage Process"
      ],
      answer: "Input Unit"
    },

    {
      number: 5,
      question: "Which of the following devices is an input device?",
      options: [
        " Monitor",
        " Printer",
        " Keyboard",
        " Speaker"
      ],
      answer: "Keyboard"
    },

    {
      number: 6,
      question: "In the example of calculating average grades, which of the following is the input?",
      options: [
        " The display of the average",
        " The grades entered",
        " The printer output"
      ],
      answer: " The grades entered"
    },

    {
      number: 7,
      question: "The process in problem solving where the CPU computes the result is known as:",
      options: [
        "Input",
        "Process",
        "Output",
        "Evaluation"
      ],
      answer: "Process"
    },

    {
      number: 8,
      question: "The step where we determine what data is given and what is required is:",
      options: [
        "Testing",
        "Understanding the problem",
        "Developing an algorithm",
        "Writing the program"
      ],
      answer: "Understanding the problem"
    },
    {
      number: 9,
      question: "What should be considered in understanding the problem?",
      options: [
        "Input format",
        "Missing data",
        "Required output",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      number: 10,
      question: "If a student’s grades are represented by letters, we may need to:",
      options: [
        " Input format",
        " Missing data",
        " Required output",
        "All of the above"
      ],
      answer: " Assign numeric values to each letter"
    },  

    {
      number: 11,
      question: "If a student’s grades are represented by letters, we may need to:",
      options: [
        "Ignore them",
        "Assign numeric values to each letter",
        "Delete the data",
        "Only use A and F"
      ],
      answer: "Assign numeric values to each letter"
    },

    {
      number: 12,
      question: "Formulating a model means:",
      options: [
        "Drawing flowcharts",
        "Creating or identifying formulas",
        "Printing the output",
        "Saving the file"
      ],
      answer: "Creating or identifying formulas"
    },

    {
      number: 13,
      question: "A computational model for average grades can be represented as:",
      options: [
        "(x₁ + x₂ + ... + xₙ) / n",
        "(x₁ × x₂) / n",
        "(x₁ – x₂) + n",
        "(x₁ + n) / x₂"
      ],
      answer: "(x₁ + x₂ + ... + xₙ) / n"
    },

    {
      number: 14,
      question: "Assigning numbers to letter grades is an example of:",
      options: [
        "Input conversion",
        "Model formulation",
        "Output formatting",
        "Error handling"
      ],
      answer: " Input conversion"
    },

    {
      number: 15,
      question: "What representation method uses human-readable steps to describe an algorithm?",
      options: [
        "Binary code",
        "Flowchart",
        "Pseudo-code",
        "Program"
      ],
      answer: "Pseudo-code"
    },

    {
      number: 16,
      question: "Assigning numbers to letter grades is an example of:",
      options: [
        "Input conversion",
        "Model formulation",
        "Output formatting",
        "Error handling"
      ],
      answer: " Input conversion"
    },

    {
      number: 17,
      question: "What representation method uses human-readable steps to describe an algorithm?",
      options: [
        "Binary code",
        "Flowchart",
        "Pseudo-code",
        "Program"
      ],
      answer: "Pseudo-code"
    },

    { 
      number: 18,
      question: "What representation method uses human-readable steps to describe an algorithm?",
      options: [
        "Binary code",
        "Flowchart",
        "Pseudo-code",
        "Program"
      ],
      answer: " Pseudo-code"
    },

    {
      number: 18,
      question: "What representation method uses human-readable steps to describe an algorithm?",
      options: [
        "Binary code",
        "Flowchart",
        "Pseudo-code",
        "Program"
      ],
      answer: "Pseudo-code"
    },

    {
      number: 19,
      question: "Which of the following is NOT a representation of an algorithm?",
      options: [
          "Flowchart",
          "Pseudo-code",
          "Source code",
          "Photograph"
        ],
        answer: "Photograph"
      },

      {
        number: 20,
        question: "The first step in the “Broken Lamp” problem is to:",
        options: [
          "Replace the bulb",  
          "Plug in the lamp",
          "Check if the lamp works",
          "Buy a new lamp"
        ],
        answer: "Check if the lamp works"
      },

      {
        number: 21,
        question: "In the average grade algorithm, the variable used to accumulate values is:",
        options: [
          "total",
          "sum",
          "average",
          "count"
        ],
        answer: "sum"
      },

      {
        number: 22,
        question: "In pseudo-code, the average is computed as:",
        options: [
          "sum × n",
          "sum / n",
          "n / sum",
          "sum – n"
        ],
        answer: "sum / n"
      },

      {
        number: 23,
        question: "In the average grade algorithm, the variable used to accumulate values is:",
        options: [
          "total",
          "sum",
          "average",
          "count"
        ],
        answer: "sum"
      },

      {
        number: 24,
        question: "In pseudo-code, the average is computed as:",
        options: [
          "sum × n",
          "sum / n",
          "n / sum",
          "sum – n"
        ],
        answer: "sum / n"
      },

      {
        number: 25,
        question: "In pseudo-code, the average is computed as:",
        options: [
          "sum × n",
          "sum / n",
          "n / sum",
          "sum – n"
        ],
        answer: "sum / n"
      },

      {
        number: 25,
        question: "In pseudo-code, the average is computed as:",
        options: [
          "sum × n",
          "sum / n",
          "n / sum",
          "sum – n"
        ],
        answer: "sum / n"
      },

      { number: 26,
        question: "The step that translates an algorithm into a programming language is:",
        options: [  
          "Testing",
          "Writing the program",
          "Evaluating the solution",
          "Formulating a model"
        ],
        answer: "Writing the program"
      },

      {
        number: 27,
        question: "When a program gives wrong results, the problem is called a:",
        options: [
          "Syntax",
          "Bug",
          "Error Code",
          "Debug"
        ],
        answer: "Bug"
      },

      {
        number: 28,
        question: "Testing ensures that the program:",
        options: [
          "Is written in C++",
          "Produces the correct output",
          "Has a flowchart",
          "Can be compiled"
        ],
        answer: "Produces the correct output"
      },

      {
        number: 29,
        question: "Bugs in a program are usually fixed through:",
        options: [
          "Debugging",
          "Formatting",
          "Evaluation",
          "Modeling"
        ],
        answer: "Debugging"
      },
      {
        number: 30,
        question: "Evaluating a solution means:",
        options: [
          "Checking if the result truly solves the original problem",
          "Adding new features",
          "Restarting the process",
          "Removing input data"
        ],
        answer: "Checking if the result truly solves the original problem"
      },
  ],
  phy123: [
    {
      number: 1,
      question: "The magnitude of the torque depends on the angle Φ between the electric dipole moment and ------------",
      options: ["Electric field", "Magnetic field", "Nuclear field", "Electric current"],
      answer: "Electric field"
    },
    {
      number: 2,
      question: "The potential energy U for a dipole in an electric field is given by",
      options: ["U = -P o E", "U = -P o q", "U = -qE", "U = -P o Φ"],
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
    number: 6,
    question: "Rubber band and nylon are examples of",
    options: ["Insulator", "conductors", "semiconductors", "metals"],
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
    options: [
      "1 proton in its nucleus balanced by 2 electrons orbiting the nucleus",
      "1 proton in its nucleus balanced by 1 electron orbiting its nucleus",
      "1 proton in its nucleus balanced by 3 electrons orbiting its nucleus",
      "1 proton in its nucleus balanced by 4 electrons orbiting the nucleus"
    ],
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
    options: ["-Q = 2 C", "-Q = 1 C", "-Q = 1.5 C", "-Q = 2.5 C"],
    answer: "-Q = 2 C"
  },
  {
    number: 14,
    question: "If a current of 2 A flows through a meter for 1 minute, how many coulombs pass through the meter? [Hint: 1 A is 1 C per second (C/s)]",
    options: ["120 C", "100 C", "60 C", "180 C"],
    answer: "120 C"
  },
  {
    number: 15,
    question: "The ability of a charge to do work is called its",
    options: ["energy", "force", "potential", "electric field"],
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
    question: "A particle of charge Q = 4.1 x 10-6 C is placed at the origin. If one wants to exert a force of 6.3 x 10-6 N on the particle in the +x direction with a positive charge of 1.6 x 107 C, where must the charge be placed?",
    options: ["x = -20.4m", "x = -30.6m", "x = 30.6m", "x = -20.6m"],
    answer: "x = -30.6m"
  },
  {
    number: 18,
    question: "A charge of 2.3 x 10-4 C is in an electric field and feels a force of 0.34 N in the -x direction. What is the electric field at that point?",
    options: ["|E| = 1.48 x 103 N/C", "|E| = 1.48 x 102 N/C", "|E| = 1.48 x 104 N/C", "|E| = 1.28 x 103 N/C"],
    answer: "|E| = 1.48 x 103 N/C"
  },
  {
    number: 19,
    question: "Two charges, Q1 and Q2 are located at the origin and at x = 0.36cm, Q1=3.3 x 10-6 C and Q2=-5.1 x 10-6 C at x = 0.36cm respectively. A third charge, Q = -9.3 x 10-7 C is moved far away (r = ∞) to a point in the y axis, y = 0.48cm, what is the potential energy between q and at this point?",
    options: ["Up = 575 J", "Up = 57.5 J", "Up = 5.75 J", "Up = 0.575 J"],
    answer: "Up = 0.575 J"
  },
  {
    number: 20,
    question: "Electrostatic forces are governed by a simple relationship known as",
    options: ["ohm’s law", "newton’s law", "coulomb’s law", "faraday’s law"],
    answer: "coulomb’s law"
  },
  {
    number: 21,
    question: "Electric charges at rest is referred to as",
    options: ["electric current", "electrostatic", "electric field", "rest charge"],
    answer: "electrostatic"
  },
  {
    number: 22,
    question: "Which of the following statement is correct?",
    options: [
      "two negative charges or two positive charges repel each other",
      "two positive charges attracts and two negative charges repel each other",
      "a positive charge and a negative charge repel each other",
      "a positive charge attracts another positive charge but repels a negative charge"
    ],
    answer: "two negative charges or two positive charges repel each other"
  },
  {
    number: 23,
    question: "Which of the following cannot be found in the nucleus of an atom?",
    options: ["proton", "electron", "neutron", "none of the above"],
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
    options: [
      "the force of attraction between two charges is directly proportional to the square of their distance apart",
      "the force of repulsion between two charges is inversely proportional to the square of their distances apart",
      "the magnitude of charge of the electron is a natural unit of electric field intensity",
      "the algebraic sum of all the electric charges in a closed system is constant"
    ],
    answer: "the algebraic sum of all the electric charges in a closed system is constant"
  },
  {
    number: 27,
    question: "When the distance r between two charged bodies doubles, the force",
    options: [
      "increases to one-quarter of its initial value",
      "decreases to one-quarter of its initial value",
      "decreases to one-half of its initial value",
      "increases to one-half of its initial value"
    ],
    answer: "decreases to one-quarter of its initial value"
  },
  {
    number: 28,
    question: "Coulomb’s law states that",
    options: [
      "the magnitude of the electric force between two point charges is directly to the sum of the charges and inversely proportional to the square of the distance between them",
      "the magnitude of the electric force between two point charges is directly to the product of the charges and inversely proportional to the distance between them",
      "the magnitude of the electric force between two point charges is directly to the  product of the charges and inversely proportional to the distance between them",
      "the magnitude of the electric force between two point charges is directly to the product of the charges and inversely proportional to the square of the distance between them"
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
    number: 32,
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
    options: ["vector field", "scalar field", "none of the above", "all of the above"],
    answer: "vector field"
  },
  {
    number: 35,
    question: "Which of the following statements is correct?",
    options: [
      "The field about an isolated positive charge is radially inward while the field about a negative charge is radially outward",
      "The field about an isolated positive charge and isolated negative charge is both radially inward",
      "The field about an isolated positive charge and isolated negative charge is both radially outward",
      "The field about an isolated positive charge is radially outward while the field about a negative charge is radially inward"
    ],
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
    question: "The total electric field at a point P is the vector sum of the fields at P due to each point charge in the charge distribution. This is the principle of",
    options: ["Superposition of electric field", "Norton’s theory", "Coulomb’s rule", "Linear charge density"],
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
    options: ["4 x 10-6 N/C", "4 x 106 N/C", "6 x 10-3 N/C", "6 x 103 N/C"],
    answer: "4 x 106 N/C"
  },
  {
    number: 40,
    question: "What is the unit of electric field?",
    options: ["Volt", "Coulomb", "Newton", "Newton/Coulomb"],
    answer: "Newton/Coulomb"
  },
  // ... add ALL PHY 123 questions here
  ],
  cee101: [
  {
    number: 1,
    question: "What are the three main career paths in civil engineering?",
    options: [
      "Government, Industry, Academia",
      "Government, Industry, Education",
      "Government, Industry, Research",
      "Government, Academia, Consultancy"
    ],
    answer: "Government, Industry, Academia"
  },
  {
    number: 2,
    question: "In government, civil engineers are primarily involved in which of the following?",
    options: [
      "Private infrastructure projects",
      "Zoning laws and land use planning",
      "Designing household appliances",
      "Manufacturing processes"
    ],
    answer: "Zoning laws and land use planning"
  },
  {
    number: 3,
    question: "Which of the following is a key focus for civil engineers working in academia?",
    options: [
      "Overseeing construction projects",
      "Managing natural resources",
      "Enforcing building codes",
      "Conducting research and development"
    ],
    answer: "Conducting research and development"
  },
  {
    number: 4,
    question: "What aspect of civil engineering is highlighted in the industry sector?",
    options: [
      "Regulatory compliance",
      "Public infrastructure projects",
      "Profitdriven and innovative solutions",
      "Urban planning"
    ],
    answer: "Profitdriven and innovative solutions"
  },
  {
    number: 5,
    question: "In the context of environmental protection, what do civil engineers manage?",
    options: [
      "Budgets and timelines",
      "Zoning laws",
      "Natural resources and sustainability practices",
      "Commercial developments"
    ],
    answer: "Natural resources and sustainability practices"
  },
  {
    number: 6,
    question: "What is one challenge mentioned for civil engineers in the industry sector?",
    options: [
      "Teaching and mentoring students",
      "Budget constraints and material selection",
      "Implementing zoning laws",
      "Conducting inspections"
    ],
    answer: "Budget constraints and material selection"
  },
  {
    number: 7,
    question: "Which sector focuses on knowledge creation and dissemination?",
    options: [
      "Government",
      "Industry",
      "Academia",
      "Consulting"
    ],
    answer: "Academia"
  },
  {
    number: 8,
    question: "What type of compliance is a focus for civil engineers in the government?",
    options: [
      "Financial",
      "Regulatory and safety",
      "Environmental",
      "Technological"
    ],
    answer: "Regulatory and safety"
  },
  {
    number: 9,
    question: "Which of the following best describes the role of civil engineers in project management?",
    options: [
      "Supervising student research",
      "Implementing environmental policies",
      "Conducting public surveys",
      "Managing budgets, timelines, and resources"
    ],
    answer: "Managing budgets, timelines, and resources"
  },
  {
    number: 10,
    question: "What type of infrastructure projects do civil engineers focus on in the government sector?",
    options: [
      "Public buildings, roads, and bridges",
      "Private homes",
      "Highrise buildings",
      "Industrial facilities"
    ],
    answer: "Public buildings, roads, and bridges"
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
    options: ["Palace chiefs", "Priests","soldiers", "Town chiefs"]
  },
  {
    number: 66,
    question: "The Eghaevbo n’ Ore were known as:",
    options: ["Palace chiefs","Traders", "Town chiefs", "Farmers"]
  },
  {
    number: 67,
    question: "The ordinary people in Bini society were mainly organized into:",
    options: ["Clans", "Guilds","Age grades", "Religious groups"]
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
{  number: 84,
  question: "The political system of the Igbo is based on:",
  options: ["Centralized authority", "Decentralization of power", "Divine kingship", "Military leadership"]
},
{  number: 85,
  question: "The symbol of authority among the Igbo is:",
  options: ["Staff of office", "Sword of Ogun", "The Ofo", "The royal crown"]
},
{  number: 86,
  question: "The political system of the Igbo is based on:",
  options: ["Centralized authority", "Decentralization of power", "Divine kingship", "Military leadership"]
},
{  number: 87,
  question: "The symbol of authority among the Igbo is:",
  options: ["Staff of office", "Sword of Ogun", "The Ofo", "The royal crown"]
}
  ],
  gst103: [
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
         "Culturation",  "value",  "Acculturation","Norms"
      ],
      answer: "Acculturation"
    },
    {
      number: 5,
      question: "The method which the Nok sculpture was produced is",
      options: [ "Surmising", "Casting", "Modeling", "Carving", "Sculpting"],
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
      options: [ "One", "Two", "Three", "Four", "Five"],
      answer: "Two",
    },
    {
      number: 8,
      question: "When culture is said to be found everywhere implies that culture is",
      answer: "Universal",
      options: ["Universal","Learned","Dynamic","Stable"],
      answer: "Universal"
    },
    {
        number: 9,
      question: "Igbo Ukwu arts was found in the.",
      options: [ "8TH century", "9TH century", "10TH century", "4TH century"],
      answer: "9TH century",
    },
    {
      number: 10,
      question: "Rock painting can be found in part of Nigeria",
      options: [ "Northern", "Southern", "Eastern", "Western", "None of the above"],
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
      question: "------------------is the oldest iron working civilization in West Africa", 
      options: ["Yoruba", "Hausa","Nok", "Igbo"],
      answer: "Nok"
    },
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
    options: ["discrete and digital random variables", "discrete and continuous random variables", "normal and lognormal random variables", "discrete and Poisson random variables", "discrete and Binomial random variables"],
    answer: "discrete and continuous random variables"
  },
  {
    number: 10,
    question: "A random variable that can only take on specific or integer value in its domain is called",
    options: ["parato random variable", "Exponential random variable", "normal random variable", "Continuous random variable", "discrete random variable"],
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
    options: ["npq", "pq", "p/q", "np/q", "np/pq"],
    answer: "pq"
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
    question: "A probability function is given by p(0) = 0.3164, p(1) = 0.4219, p(2) = 0.2109, p(3) = 0.0469 and p(4) = 0.0039. Find its mean and variance.",
    options: ["1.00 and 0.34", "1.00 and 0.70", "1.00 and 0.85", "1.00 and 0.75", "1.00 and 0.89"],
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
    question: "Ten percent of the tools produced in a certain manufacturing process turns out to be defective. Find the probability that in a sample of 100 tools chosen at random, exactly two will be defective.",
    options: ["0.0023", "0.23", "0.023", "23", "0.00023"],
    answer: "0.0023"
  },
  {
    number: 20,
    question: "Suppose that 4% of the items manufactured by a certain factory are defective. Find the probability that in a sample of 100 items selected at random, there would be at least two defectives.",
    options: ["0.9082", "0.9084", "0.9261", "0.8761", "0.3451"],
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
    question: "A probability function is given by p(0) = 0.3164, p(1) = 0.4219, p(2) = 0.2109, p(3) = 0.0469 and p(4) = 0.0039. Find its mean and variance.",
    options: ["1.00 and 0.34", "1.00 and 0.70", "1.00 and 0.85", "1.00 and 0.75", "1.00 and 0.89"],
    answer: "1.00 and 0.34"
  }
  ],
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
    options: ["Mission", "Business plan", "Goal", "Strategy"],
    answer: "Business plan"
  },
  {
    number: 5,
    question: "Any distinctive words, symbols or trade dress that a company uses to identify its products is called ____",
    options: ["Brand", "Copyright", "Trademark", "Patent"],
    answer: "Trademark"
  },
  {
    number: 6,
    question: "To avoid pitfalls you as an entrepreneur should do all the following EXCEPT ____",
    options: ["Planning", "Creativity and innovation", "Market research", "Record keeping"],
    answer: "Creativity and innovation"
  },
  {
    number: 7,
    question: "Creative process involves ____ steps",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    number: 8,
    question: "Investigation as a step in the creative process requires individuals to ____",
    options: [
      "Develop a solid understanding about the problem",
      "Skip analysis",
      "Avoid brainstorming",
      "Seek investors first"
    ],
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
    options: ["True", "False"],
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
    options: ["True", "False"],
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
    options: [
      "Clear and concise definition of a company's target customers",
      "Low prices",
      "High production",
      "Celebrity endorsements"
    ],
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
    options: ["True", "False"],
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
    number: 31,
    question: "Willingness of an entrepreneur to take risk can also be described as ____",
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
    options: ["Persistence", "Tenacity", "Creativity", "Confidence"],
    answer: "Tenacity"
  },
  {
    number: 34,
    question: "The ability of entrepreneurs to adapt their businesses to meet changing tastes and trends is referred to as ____",
    options: ["Creativity", "Flexibility", "Resilience", "Adaptability"],
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
  },
  {
    number: 2,
    question: "What are PCBs used for?",
    options: ["Decoration", "Electronic foundations", "Mechanical welding", "Data transfer only"],
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
    question: "Which type of PCB is made from flexible material?",
    options: ["Rigid", "Flexible", "Metal-core", "Soft-rigid"],
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
    options: ["Low, Medium, High", "Class 1, Class 2, Class 3", "Basic, Intermediate, Expert", "Simple, Complex, Advanced"],
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
    question: "What are footprints in PCB design?",
    options: ["3D models", "Pad patterns for soldering", "Wires", "Color marks"],
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
    question: "What does DRC stand for?",
    options: ["Design Rule Check", "Direct Routing Code", "Data Routing Connection", "Dynamic Rule Chart"],
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
    question: "What happens if ground planes have many holes?",
    options: ["Noise increases", "Cooling improves", "Power doubles", "Voltage drops"],
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
    options: ["Connecting nets with traces", "Cutting the board", "Labeling parts", "Assembling screws"],
    answer: "Connecting nets with traces"
  },
  {
    number: 31,
    question: "What can happen with poor routing?",
    options: ["Better performance", "Cross-talk or signal issues", "Faster signals", "Higher durability"],
    answer: "Cross-talk or signal issues"
  },
  {
    number: 32,
    question: "What comes after PCB routing?",
    options: ["Testing", "Final rule check", "Soldering", "Simulation"],
    answer: "Final rule check"
  },
  {
    number: 33,
    question: "What is the first step in PCB manufacturing?",
    options: ["Etching", "Sending files for fabrication", "Assembling", "Soldering"],
    answer: "Sending files for fabrication"
  },
  {
    number: 34,
    question: "What happens during fabrication?",
    options: ["Etching traces", "Adding glue", "Heating components", "Cutting wires"],
    answer: "Etching traces"
  },
  {
    number: 35,
    question: "What happens during assembly?",
    options: ["Painting", "Mounting and soldering components", "Cooling", "Testing power"],
    answer: "Mounting and soldering components"
  },
  {
    number: 36,
    question: "What comes after soldering components?",
    options: ["Inspection and testing", "Repainting", "Rewiring", "Packaging"],
    answer: "Inspection and testing"
  },
  {
    number: 37,
    question: "Why is quality control important in PCB manufacturing?",
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
    number: 39,
    question: "What is SPICE used for?",
    options: ["Cooking", "Circuit simulation", "Data encryption", "Wiring tests"],
    answer: "Circuit simulation"
  },
  {
    number: 40,
    question: "Why is component placement important?",
    options: ["Affects performance and assembly", "Adds weight", "Improves color", "Reduces cost only"],
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
    options: ["Power and ground planes", "Traces", "Wires only", "Metal frame"],
    answer: "Power and ground planes"
  },
  {
    number: 43,
    question: "What can CAD tools automatically check?",
    options: ["Trace errors and spacing", "Temperature", "Color", "Voltage only"],
    answer: "Trace errors and spacing"
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
    options: ["Cadence", "Adobe", "Siemens", "Google"],
    answer: "Cadence"
  },
  {
    number: 47,
    question: "What happens if design data is inaccurate?",
    options: ["Manufacturing errors", "Better quality", "More speed", "Larger boards"],
    answer: "Manufacturing errors"
  },
  {
    number: 48,
    question: "Why is understanding PCB manufacturing important?",
    options: ["Better design decisions", "Color choice", "Larger boards", "Faster printing"],
    answer: "Better design decisions"
  },
  {
    number: 49,
    question: "What is the role of simulation tools in PCB design?",
    options: ["Test circuits before hardware build", "Paint the board", "Cut traces", "Solder components"],
    answer: "Test circuits before hardware build"
  },
  {
    number: 50,
    question: "What is the final outcome of PCB assembly?",
    options: ["A working electronic board", "Loose components", "Incomplete parts", "Plastic case"],
    answer: "A working electronic board"
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
  eet219: [
    {
      number: 1,
      question: "What is the main charge carrier in conductors?",
      options: ["Protons", "Neutrons", "Electrons", "Ions"],
    answer: "Electrons"
  },
  {
    number: 2,
    question: "Which of the following materials is an insulator?",
    options: ["Copper", "Glass", "Aluminum", "Iron"],
    answer: "Glass"
  },
  {
    number: 3,
    question: "What type of material has conductivity between conductors and insulators?",
    options: ["Resistor", "Conductor", "Semiconductor", "Insulator"],
    answer: "Semiconductor"
  },
  {
    number: 4,
    question: "The unit of electric current is?",
    options: ["Coulomb", "Ampere", "Volt", "Ohm"],
    answer: "Ampere"
  },
  {
    number: 5,
    question: "Which quantity represents the energy supplied per unit charge?",
    options: ["Power", "Current", "Potential difference", "Resistance"],
    answer: "Potential difference"
  },
  {
    number: 6,
    question: "What is the relationship between voltage, current, and resistance in a circuit?",
    options: ["P = IV", "V = IR", "R = IV", "I = VR"],
    answer: "V = IR"
  },
  {
    number: 7,
    question: "In a series circuit, the total resistance is the ______ of individual resistances.",
    options: ["Product", "Sum", "Difference", "Average"],
    answer: "Sum"
  },
  {
    number: 8,
    question: "In a parallel circuit, the voltage across each component is ______.",
    options: ["Different", "Same", "Zero", "Half"],
    answer: "Same"
  },
  {
    number: 9,
    question: "What law states that the sum of currents entering a node equals the sum leaving the node?",
    options: ["Ohm’s Law", "Faraday’s Law", "Kirchhoff’s Current Law", "Kirchhoff’s Voltage Law"],
    answer: "Kirchhoff’s Current Law"
  },
  {
    number: 10,
    question: "Kirchhoff’s Voltage Law is based on which principle?",
    options: ["Energy conservation", "Mass conservation", "Charge conservation", "Momentum conservation"],
    answer: "Energy conservation"
  },
  {
    number: 11,
    question: "What is the SI unit of resistance?",
    options: ["Watt", "Volt", "Ohm", "Ampere"],
    answer: "Ohm"
  },
  {
    number: 12,
    question: "Which theorem allows a network with multiple sources to be analyzed one source at a time?",
    options: ["Thevenin’s theorem", "Superposition theorem", "Norton’s theorem", "Maximum power transfer theorem"],
    answer: "Superposition theorem"
  },
  {
    number: 13,
    question: "In Thevenin’s theorem, the equivalent circuit consists of ______.",
    options: ["A current source and series resistor", "A voltage source and series resistor", "A voltage divider", "A capacitor and inductor"],
    answer: "A voltage source and series resistor"
  },
  {
    number: 14,
    question: "Norton’s theorem replaces a network by ______.",
    options: ["A voltage source in parallel with a resistor", "A current source in parallel with a resistor", "A single resistor", "A single capacitor"],
    answer: "A current source in parallel with a resistor"
  },
  {
    number: 15,
    question: "Which theorem helps determine the load resistance for maximum power transfer?",
    options: ["Norton’s theorem", "Superposition theorem", "Maximum power transfer theorem", "Thevenin’s theorem"],
    answer: "Maximum power transfer theorem"
  },
  {
    number: 16,
    question: "What is the total current in a parallel circuit equal to?",
    options: ["Sum of branch currents", "Average of branch currents", "Difference of branch currents", "Zero"],
    answer: "Sum of branch currents"
  },
  {
    number: 17,
    question: "Mesh current analysis is also called ______.",
    options: ["Loop current method", "Branch current method", "Nodal analysis", "Delta method"],
    answer: "Loop current method"
  },
  {
    number: 18,
    question: "Which law is used in mesh analysis?",
    options: ["Kirchhoff’s Voltage Law", "Kirchhoff’s Current Law", "Coulomb’s Law", "Ohm’s Law"],
    answer: "Kirchhoff’s Voltage Law"
  },
  {
    number: 19,
    question: "What is a loop that contains no other loop within it called?",
    options: ["Path", "Branch", "Mesh", "Node"],
    answer: "Mesh"
  },
  {
    number: 20,
    question: "Nodal analysis is based on which of Kirchhoff’s laws?",
    options: ["Voltage Law", "Current Law", "Ohm’s Law", "Faraday’s Law"],
    answer: "Current Law"
  },
  {
    number: 21,
    question: "What is the first step in mesh current analysis?",
    options: ["Apply KCL", "Assign mesh currents to loops", "Find Thevenin equivalent", "Replace voltage sources"],
    answer: "Assign mesh currents to loops"
  },
  {
    number: 22,
    question: "When two mesh currents flow through a common resistor in the same direction, the voltage drop is proportional to ______.",
    options: ["I1 - I2", "I1 + I2", "I1 × I2", "I1 ÷ I2"],
    answer: "I1 + I2"
  },
  {
    number: 23,
    question: "If a mesh current solution is negative, what does it indicate?",
    options: ["The circuit is faulty", "The current flows opposite to assumed direction", "Ohm’s Law failed", "Voltage is negative"],
    answer: "The current flows opposite to assumed direction"
  },
  {
    number: 24,
    question: "In nodal analysis, what is the reference point called?",
    options: ["Ground node", "Mesh node", "Loop node", "Power node"],
    answer: "Ground node"
  },
  {
    number: 25,
    question: "What quantity is solved for in nodal analysis?",
    options: ["Current", "Resistance", "Voltage", "Inductance"],
    answer: "Voltage"
  },
  {
    number: 26,
    question: "Which step comes first in nodal analysis?",
    options: ["Choose a reference node", "Assign mesh currents", "Apply Ohm’s Law", "Replace voltage sources"],
    answer: "Choose a reference node"
  },
  {
    number: 27,
    question: "In nodal analysis, resistances are often converted into ______.",
    options: ["Impedances", "Conductances", "Capacitances", "Reactances"],
    answer: "Conductances"
  },
  {
    number: 28,
    question: "What does KCL stand for?",
    options: ["Kirchhoff’s Current Law", "Kelvin’s Circuit Law", "Kinetic Current Law", "Kirchhoff’s Capacitor Law"],
    answer: "Kirchhoff’s Current Law"
  },
  {
    number: 29,
    question: "What does KVL stand for?",
    options: ["Kirchhoff’s Voltage Law", "Kinetic Voltage Law", "Kelvin Voltage Law", "Kirchhoff’s Vector Law"],
    answer: "Kirchhoff’s Voltage Law"
  },
  {
    number: 30,
    question: "In a DC circuit, electrical power is given by ______.",
    options: ["P = IV", "P = I/V", "P = V/I", "P = IR"],
    answer: "P = IV"
  },
  {
    number: 31,
    question: "What is the name of the law that relates voltage, current, and resistance?",
    options: ["Ohm’s Law", "Kirchhoff’s Law", "Coulomb’s Law", "Ampere’s Law"],
    answer: "Ohm’s Law"
  },
  {
    number: 32,
    question: "What happens to total resistance when more resistors are added in parallel?",
    options: ["It increases", "It decreases", "It remains constant", "It doubles"],
    answer: "It decreases"
  },
  {
    number: 33,
    question: "A circuit with only one closed loop is known as a ______ circuit.",
    options: ["Parallel", "Series", "Short", "Mixed"],
    answer: "Series"
  },
  {
    number: 34,
    question: "In Thevenin’s theorem, the Thevenin resistance is found by ______.",
    options: ["Open-circuiting the load", "Short-circuiting voltage sources and open-circuiting current sources", "Multiplying voltages", "Reversing polarity"],
    answer: "Short-circuiting voltage sources and open-circuiting current sources"
  },
  {
    number: 35,
    question: "Which theorem provides an equivalent current source representation of a circuit?",
    options: ["Superposition", "Norton’s", "Thevenin’s", "Reciprocity"],
    answer: "Norton’s"
  },
  {
    number: 36,
    question: "What is the relation between Thevenin and Norton equivalents?",
    options: ["They are unrelated", "They are duals of each other", "Thevenin voltage equals Norton current", "They have the same circuit form"],
    answer: "They are duals of each other"
  },
  {
    number: 37,
    question: "Which analysis technique uses KCL to form node equations?",
    options: ["Mesh analysis", "Nodal analysis", "Superposition", "Loop analysis"],
    answer: "Nodal analysis"
  },
  {
    number: 38,
    question: "Which circuit theorem can be used to simplify a network with several sources to a single source and resistance?",
    options: ["Superposition", "Thevenin’s", "Norton’s", "Reciprocity"],
    answer: "Thevenin’s"
  },
  {
    number: 39,
    question: "What is the main advantage of mesh analysis?",
    options: ["Reduces voltage sources", "Simplifies current equations for planar circuits", "Eliminates all resistors", "Requires no Ohm’s Law"],
    answer: "Simplifies current equations for planar circuits"
  },
  {
    number: 40,
    question: "In nodal analysis, what type of equations are typically solved?",
    options: ["Linear simultaneous equations", "Quadratic equations", "Exponential equations", "Differential equations"],
    answer: "Linear simultaneous equations"
  },
  {
    number: 41,
    question: "In a circuit, if total voltage is 12V and total resistance is 6Ω, what is the current?",
    options: ["6A", "2A", "3A", "12A"],
    answer: "2A"
  },
  {
    number: 42,
    question: "The point in a circuit where two or more elements meet is called a ______.",
    options: ["Loop", "Branch", "Node", "Junction box"],
    answer: "Node"
  },
  {
    number: 43,
    question: "What is the main purpose of network theorems?",
    options: ["To complicate circuit analysis", "To simplify circuit analysis", "To replace KVL", "To avoid using Ohm’s Law"],
    answer: "To simplify circuit analysis"
  },
  {
    number: 44,
    question: "When a voltage source is replaced in Superposition theorem, it is substituted with ______.",
    options: ["An open circuit", "A short circuit", "A resistor", "A capacitor"],
    answer: "A short circuit"
  },
  {
    number: 45,
    question: "When a current source is replaced in Superposition theorem, it is substituted with ______.",
    options: ["A short circuit", "An open circuit", "A resistor", "A wire"],
    answer: "An open circuit"
  },
  {
    number: 46,
    question: "What does the term 'branch' mean in circuit analysis?",
    options: ["A closed path", "A single circuit element", "A voltage drop", "A mesh"],
    answer: "A single circuit element"
  },
  {
    number: 47,
    question: "Which of the following techniques is most suitable for circuits with multiple nodes?",
    options: ["Mesh analysis", "Nodal analysis", "Superposition", "Ohm’s Law"],
    answer: "Nodal analysis"
  },
  {
    number: 48,
    question: "In DC circuits, electrical energy is measured in ______.",
    options: ["Joules", "Watts", "Coulombs", "Ohms"],
    answer: "Joules"
  },
  {
    number: 49,
    question: "A loop in which no element is encountered more than once is called a ______.",
    options: ["Branch", "Mesh", "Node", "Circuit"],
    answer: "Loop"
  },
  {
    number: 50,
    question: "What is the main reason for using Thevenin’s and Norton’s theorems?",
    options: ["To reduce complex networks to simple equivalents", "To increase power dissipation", "To change circuit polarity", "To avoid Ohm’s Law"],
    answer: "To reduce complex networks to simple equivalents"
  },
  {
    number: 51,
    question: "What does Thevenin’s theorem allow us to do?",
    options: [
      "Replace a complex circuit with a simple equivalent circuit",
      "Increase power dissipation in a circuit",
      "Convert AC to DC",
      "Reduce voltage in a network"
    ],
    answer: "Replace a complex circuit with a simple equivalent circuit"
  },
  {
    number: 52,
    question: "Thevenin’s equivalent circuit consists of which components?",
    options: [
      "A voltage source and a series resistance",
      "A current source and a parallel resistance",
      "A resistor and capacitor",
      "An inductor and resistor"
    ],
    answer: "A voltage source and a series resistance"
  },
  {
    number: 53,
    question: "In Thevenin’s theorem, what does the Thevenin resistance represent?",
    options: [
      "The internal resistance of the entire network",
      "The load resistance only",
      "The source voltage drop",
      "The mesh current resistance"
    ],
    answer: "The internal resistance of the entire network"
  },
  {
    number: 54,
    question: "Thevenin’s theorem applies only to which type of circuits?",
    options: ["Linear circuits", "Non-linear circuits", "Magnetic circuits", "Digital circuits"],
    answer: "Linear circuits"
  },
  {
    number: 55,
    question: "Which step is done first when applying Thevenin’s theorem?",
    options: [
      "Remove the load resistor and find open-circuit voltage",
      "Short the voltage source",
      "Add the load resistor",
      "Calculate short-circuit current"
    ],
    answer: "Remove the load resistor and find open-circuit voltage"
  },
  {
    number: 56,
    question: "When finding Thevenin resistance, voltage sources are ______.",
    options: ["Opened", "Shorted", "Removed completely", "Left as is"],
    answer: "Shorted"
  },
  {
    number: 57,
    question: "When finding Thevenin resistance, current sources are ______.",
    options: ["Opened", "Shorted", "Reversed", "Connected in series"],
    answer: "Opened"
  },
  {
    number: 58,
    question: "The Thevenin equivalent circuit has the same ______ as the original circuit.",
    options: ["Load current and voltage", "Resistance only", "Capacitance", "Frequency"],
    answer: "Load current and voltage"
  },
  {
    number: 59,
    question: "Thevenin’s theorem simplifies circuit analysis by reducing a network to a ______.",
    options: [
      "Single voltage source and resistance",
      "Multiple branch network",
      "Parallel circuit",
      "Delta network"
    ],
    answer: "Single voltage source and resistance"
  },
  {
    number: 60,
    question: "Which theorem is considered the dual of Thevenin’s theorem?",
    options: ["Norton’s theorem", "Superposition theorem", "Reciprocity theorem", "Maximum power theorem"],
    answer: "Norton’s theorem"
  },
  {
    number: 61,
    question: "Norton’s theorem simplifies a linear circuit to ______.",
    options: [
      "A current source in parallel with a resistance",
      "A voltage source in series with a resistance",
      "Two voltage sources in series",
      "A capacitor and inductor in parallel"
    ],
    answer: "A current source in parallel with a resistance"
  },
  {
    number: 62,
    question: "What is the first step in Norton’s theorem?",
    options: [
      "Remove the load resistor and short the open terminals",
      "Calculate open-circuit voltage",
      "Find the equivalent inductance",
      "Replace current source with a voltage source"
    ],
    answer: "Remove the load resistor and short the open terminals"
  },
  {
    number: 63,
    question: "How is the Norton current found?",
    options: [
      "By short-circuiting the load terminals and finding the current through the short",
      "By measuring the open-circuit voltage",
      "By dividing voltage by resistance",
      "By multiplying resistance and current"
    ],
    answer: "By short-circuiting the load terminals and finding the current through the short"
  },
  {
    number: 64,
    question: "How is Norton resistance determined?",
    options: [
      "By removing all sources and calculating total resistance across terminals",
      "By doubling the load resistance",
      "By short-circuiting the entire circuit",
      "By using Ohm’s Law directly"
    ],
    answer: "By removing all sources and calculating total resistance across terminals"
  },
  {
    number: 65,
    question: "What is the relation between Thevenin and Norton equivalents?",
    options: [
      "They are mathematically related by Ohm’s law",
      "They are opposite theorems",
      "They are unrelated",
      "They only apply to AC circuits"
    ],
    answer: "They are mathematically related by Ohm’s law"
  },
  {
    number: 66,
    question: "In Norton’s equivalent circuit, the load is connected ______.",
    options: ["In parallel with the resistance and current source", "In series with the resistance", "Across the voltage source", "Across the resistor only"],
    answer: "In parallel with the resistance and current source"
  },
  {
    number: 67,
    question: "What does the Maximum Power Transfer theorem state?",
    options: [
      "Maximum power is transferred when load resistance equals source resistance",
      "Maximum current flows when resistance is zero",
      "Power is maximum when voltage is maximum",
      "Load resistance should be infinite"
    ],
    answer: "Maximum power is transferred when load resistance equals source resistance"
  },
  {
    number: 68,
    question: "The Maximum Power Transfer theorem applies mainly to ______.",
    options: ["DC and AC linear circuits", "Magnetic circuits", "Transformers only", "Digital systems"],
    answer: "DC and AC linear circuits"
  },
  {
    number: 69,
    question: "When the load resistance equals the Thevenin resistance, the circuit delivers ______.",
    options: ["Maximum power", "Minimum current", "Zero power", "Half voltage"],
    answer: "Maximum power"
  },
  {
    number: 70,
    question: "If load resistance increases beyond Thevenin resistance, power delivered will ______.",
    options: ["Decrease", "Increase", "Remain constant", "Double"],
    answer: "Decrease"
  },
  {
    number: 71,
    question: "What is mesh analysis mainly used to calculate?",
    options: ["Currents in loops", "Voltages at nodes", "Capacitive reactance", "Magnetic flux"],
    answer: "Currents in loops"
  },
  {
    number: 72,
    question: "Mesh analysis is based on which law?",
    options: ["Kirchhoff’s Voltage Law", "Kirchhoff’s Current Law", "Ohm’s Law", "Coulomb’s Law"],
    answer: "Kirchhoff’s Voltage Law"
  },
  {
    number: 73,
    question: "In mesh analysis, how many equations are needed?",
    options: [
      "Equal to the number of independent meshes",
      "Equal to the number of resistors",
      "One less than total branches",
      "Double the number of nodes"
    ],
    answer: "Equal to the number of independent meshes"
  },
  {
    number: 74,
    question: "What quantity is found in nodal analysis?",
    options: ["Node voltages", "Branch currents", "Resistance", "Power factor"],
    answer: "Node voltages"
  },
  {
    number: 75,
    question: "Nodal analysis is based on which law?",
    options: ["Kirchhoff’s Current Law", "Kirchhoff’s Voltage Law", "Ohm’s Law", "Lenz’s Law"],
    answer: "Kirchhoff’s Current Law"
  },
  {
    number: 76,
    question: "What is a reference node also called?",
    options: ["Ground", "Neutral", "Base", "Common point"],
    answer: "Ground"
  },
  {
    number: 77,
    question: "Which theorem can solve a network with multiple sources one at a time?",
    options: ["Superposition theorem", "Thevenin’s theorem", "Norton’s theorem", "Reciprocity theorem"],
    answer: "Superposition theorem"
  },
  {
    number: 78,
    question: "In Superposition theorem, voltage sources are replaced with ______ when deactivated.",
    options: ["Short circuits", "Open circuits", "Resistors", "Capacitors"],
    answer: "Short circuits"
  },
  {
    number: 79,
    question: "In Superposition theorem, current sources are replaced with ______ when deactivated.",
    options: ["Open circuits", "Short circuits", "Inductors", "Voltage sources"],
    answer: "Open circuits"
  },
  {
    number: 80,
    question: "Which theorem states that the load resistance should equal the source resistance for maximum power?",
    options: ["Maximum Power Transfer theorem", "Norton’s theorem", "Reciprocity theorem", "Ohm’s law"],
    answer: "Maximum Power Transfer theorem"
  },
  {
    number: 81,
    question: "What is the key condition for Thevenin and Norton theorems to hold?",
    options: ["Circuit must be linear and bilateral", "Circuit must have dependent sources only", "Circuit must be open", "Circuit must be nonlinear"],
    answer: "Circuit must be linear and bilateral"
  },
  {
    number: 82,
    question: "Which law forms the basis of both mesh and nodal analysis?",
    options: ["Kirchhoff’s laws", "Faraday’s laws", "Coulomb’s law", "Gauss’s law"],
    answer: "Kirchhoff’s laws"
  },
  {
    number: 83,
    question: "In Thevenin equivalent, Vth represents ______.",
    options: ["Open-circuit voltage", "Short-circuit current", "Maximum voltage", "Internal resistance"],
    answer: "Open-circuit voltage"
  },
  {
    number: 84,
    question: "In Norton equivalent, In represents ______.",
    options: ["Short-circuit current", "Open-circuit voltage", "Total current", "Branch current"],
    answer: "Short-circuit current"
  },
  {
    number: 85,
    question: "The resistance seen by the load in Thevenin and Norton equivalent is ______.",
    options: ["Equal in both", "Different", "Twice in Thevenin", "Half in Norton"],
    answer: "Equal in both"
  },
  {
    number: 86,
    question: "Which theorem is used to determine the current through one branch in a complex network?",
    options: ["Superposition theorem", "Ohm’s law", "Thevenin’s theorem", "Nodal theorem"],
    answer: "Superposition theorem"
  },
  {
    number: 87,
    question: "In a Thevenin circuit, if the load resistance is removed, the terminal voltage equals ______.",
    options: ["Thevenin voltage", "Zero", "Internal resistance drop", "Short-circuit current"],
    answer: "Thevenin voltage"
  },
  {
    number: 88,
    question: "The Maximum Power Transfer theorem is often used in ______.",
    options: ["Communication systems", "Mechanical systems", "Chemical reactions", "Thermal systems"],
    answer: "Communication systems"
  },
  {
    number: 89,
    question: "Mesh analysis cannot be applied to ______.",
    options: ["Non-planar circuits", "Planar circuits", "Single loop circuits", "Simple resistive circuits"],
    answer: "Non-planar circuits"
  },
  {
    number: 90,
    question: "Nodal analysis is more efficient when ______.",
    options: ["There are fewer nodes than meshes", "There are more meshes", "The circuit is purely inductive", "The sources are reactive"],
    answer: "There are fewer nodes than meshes"
  },
  {
    number: 91,
    question: "Superposition theorem is applicable only to ______ systems.",
    options: ["Linear", "Nonlinear", "Magnetic", "Unilateral"],
    answer: "Linear"
  },
  {
    number: 92,
    question: "The unit of power in electrical circuits is ______.",
    options: ["Watt", "Joule", "Ampere", "Ohm"],
    answer: "Watt"
  },
  {
    number: 93,
    question: "What does KCL state?",
    options: ["Sum of currents entering a node equals sum leaving", "Voltage around a loop equals current times resistance", "Sum of voltages equals zero", "Sum of resistances equals current"],
    answer: "Sum of currents entering a node equals sum leaving"
  },
  {
    number: 94,
    question: "What does KVL state?",
    options: ["Sum of voltages in a closed loop is zero", "Sum of currents equals zero", "Voltage equals resistance times current", "Total power is constant"],
    answer: "Sum of voltages in a closed loop is zero"
  },
  {
    number: 95,
    question: "A branch in circuit theory is ______.",
    options: ["A single circuit element", "A closed loop", "A node connection", "A parallel path"],
    answer: "A single circuit element"
  },
  {
    number: 96,
    question: "A node in a circuit is a point where ______.",
    options: ["Two or more components meet", "Only one element exists", "Voltage is zero", "Current is maximum"],
    answer: "Two or more components meet"
  },
  {
    number: 97,
    question: "What is the purpose of network theorems in circuit analysis?",
    options: ["To simplify complex circuits", "To complicate circuit design", "To change current direction", "To increase resistance"],
    answer: "To simplify complex circuits"
  },
  {
    number: 98,
    question: "The relationship between Thevenin voltage (Vth) and Norton current (In) is ______.",
    options: ["Vth = In × Rth", "Vth = In / Rth", "Vth = Rth / In", "Vth = In² × Rth"],
    answer: "Vth = In × Rth"
  },
  {
    number: 99,
    question: "For maximum power transfer, the efficiency is ______.",
    options: ["50%", "100%", "75%", "25%"],
    answer: "50%"
  },
  {
    number: 100,
    question: "Which analysis method is best for circuits with many voltage sources?",
    options: ["Mesh analysis", "Nodal analysis", "Superposition theorem", "Thevenin’s theorem"],
    answer: "Mesh analysis"
  },
  {
    number: 101,
    question: "Magnetic fields are produced by what?",
    options: ["Static charges", "Electric currents", "Permanent insulators", "Light waves"],
    answer: "Electric currents"
  },
  {
    number: 102,
    question: "The magnetic field around a solenoid is similar to that of a:",
    options: ["Battery", "Magnet", "Capacitor", "Conductor"],
    answer: "Magnet"
  },
  {
    number:103,
    question: "The screw rule states that if a normal right-hand thread screw is screwed along the conductor in the direction of current, the rotation of the screw gives the direction of the:",
    options: ["Electric field", "Magnetic field", "Voltage", "Force"],
    answer: "Magnetic field"
  },
  {
    number: 104,
    question: "The grip rule states that if the coil is gripped with the right hand and fingers point in the direction of current, the thumb shows the direction of:",
    options: ["Current", "Voltage", "Magnetic field inside the solenoid", "Flux linkage"],
    answer: "Magnetic field inside the solenoid"
  },
  {
    number: 105,
    question: "A conductor carrying current in a magnetic field experiences:",
    options: ["Resistance", "Force", "Capacitance", "Inductance"],
    answer: "Force"
  },
  {
    number: 106,
    question: "The direction of force on a current-carrying conductor in a magnetic field is given by:",
    options: ["Fleming’s right-hand rule", "Fleming’s left-hand rule", "Grip rule", "Screw rule"],
    answer: "Fleming’s left-hand rule"
  },
  {
    number: 107,
    question: "In Fleming’s left-hand rule, the thumb represents:",
    options: ["Magnetic field", "Current", "Motion of conductor", "Induced emf"],
    answer: "Motion of conductor"
  },
  {
    number: 108,
    question: "When a conductor cuts magnetic flux lines, an emf is induced due to:",
    options: ["Electrostatics", "Electromagnetic induction", "Capacitive effect", "Resistive effect"],
    answer: "Electromagnetic induction"
  },
  {
    number: 109,
    question: "Faraday’s first law of electromagnetic induction states that:",
    options: [
      "An emf is induced whenever the magnetic flux linking a circuit changes",
      "Current is always constant in a magnetic field",
      "The magnetic field remains unchanged",
      "Resistance changes with flux"
    ],
    answer: "An emf is induced whenever the magnetic flux linking a circuit changes"
  },
  {
    number: 110,
    question: "According to Faraday’s second law, the magnitude of induced emf is proportional to:",
    options: ["Flux itself", "Rate of change of magnetic flux", "Voltage", "Resistance"],
    answer: "Rate of change of magnetic flux"
  },
  {
    number: 111,
    question: "Lenz’s law gives the direction of:",
    options: ["Electric current", "Induced emf", "Magnetic field", "Resistance"],
    answer: "Induced emf"
  },
  {
    number: 112,
    question: "According to Lenz’s law, the induced emf opposes:",
    options: ["The cause producing it", "The current", "The voltage", "The capacitance"],
    answer: "The cause producing it"
  },
  {
    number: 113,
    question: "The induced emf in a straight conductor moving in a magnetic field is given by:",
    options: ["E = BIL", "E = BILsinθ", "E = IR", "E = VQ"],
    answer: "E = BILsinθ"
  },
  {
    number: 114,
    question: "In the expression E = B l v sinθ, ‘v’ represents:",
    options: ["Voltage", "Velocity of conductor", "Volume", "Vector of field"],
    answer: "Velocity of conductor"
  },
  {
    number: 115,
    question: "The unit of magnetic flux density (B) is:",
    options: ["Weber", "Tesla", "Henry", "Coulomb"],
    answer: "Tesla"
  },
  {
    number: 116,
    question: "Inductance is the property of a circuit that opposes:",
    options: ["Voltage", "Current change", "Magnetic flux", "Resistance"],
    answer: "Current change"
  },
  {
    number: 117,
    question: "When an emf is induced in the same circuit that causes the current change, it is called:",
    options: ["Mutual inductance", "Self inductance", "Induced flux", "Coupled induction"],
    answer: "Self inductance"
  },
  {
    number: 118,
    question: "When emf is induced in one coil due to current change in another, it is called:",
    options: ["Self induction", "Mutual induction", "Electrostatic coupling", "Faraday effect"],
    answer: "Mutual induction"
  },
  {
    number: 119,
    question: "The unit of inductance is:",
    options: ["Weber", "Tesla", "Henry", "Ampere"],
    answer: "Henry"
  },
  {
    number: 120,
    question: "Which factor increases the inductance of a coil?",
    options: ["Less number of turns", "Smaller area", "Iron core presence", "Thin wire spacing"],
    answer: "Iron core presence"
  },
  {
    number: 121,
    question: "Inductance of a coil increases when:",
    options: [
      "The number of turns decreases",
      "Cross-sectional area increases",
      "Core is removed",
      "Turns are widely spaced"
    ],
    answer: "Cross-sectional area increases"
  },
  {
    number: 122,
    question: "The energy stored in an inductor is given by:",
    options: ["½LI²", "L²I", "½CV²", "IV"],
    answer: "½LI²"
  },
  {
    number: 123,
    question: "The inductance of a coil depends on:",
    options: ["Number of turns", "Area of coil", "Core material", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 124,
    question: "If current through an inductor changes at 200 A/s and induces 1.5 V in another coil, the mutual inductance is:",
    options: ["0.0075 H", "0.75 H", "7.5 H", "75 H"],
    answer: "0.0075 H"
  },
  {
    number: 125,
    question: "A magnetic field can be produced by:",
    options: ["A stationary charge", "A moving charge", "A dielectric", "A resistor only"],
    answer: "A moving charge"
  },
  {
    number: 126,
    question: "Electromagnetic induction occurs due to:",
    options: ["Steady current", "Changing magnetic flux", "Constant voltage", "Static charge"],
    answer: "Changing magnetic flux"
  },
  {
    number: 127,
    question: "The symbol for inductance in circuit diagrams is represented by:",
    options: ["Z", "L", "M", "N"],
    answer: "L"
  },
  {
    number: 128,
    question: "The SI unit of magnetic flux is:",
    options: ["Weber", "Tesla", "Henry", "Joule"],
    answer: "Weber"
  },
  {
    number: 129,
    question: "Which law explains the polarity of induced emf?",
    options: ["Faraday’s law", "Coulomb’s law", "Lenz’s law", "Ohm’s law"],
    answer: "Lenz’s law"
  },
  {
    number: 130,
    question: "The direction of induced current opposes the change producing it because of:",
    options: ["Ohm’s law", "Lenz’s law", "Kirchhoff’s law", "Faraday’s law"],
    answer: "Lenz’s law"
  },
  {
    number: 131,
    question: "A magnetic field lines run from:",
    options: ["South to North inside magnet", "North to South outside magnet", "Randomly", "Both A and B"],
    answer: "Both A and B"
  },
  {
    number: 132,
    question: "The greater the number of turns in a coil, the:",
    options: ["Lower the inductance", "Higher the inductance", "Same inductance", "Constant flux"],
    answer: "Higher the inductance"
  },
  {
    number: 33,
    question: "An emf is not induced if the conductor:",
    options: ["Cuts magnetic lines", "Moves parallel to magnetic field", "Moves at 90°", "Changes direction"],
    answer: "Moves parallel to magnetic field"
  },
  {
    number: 134,
    question: "Mutual inductance is denoted by the symbol:",
    options: ["L", "M", "N", "μ"],
    answer: "M"
  },
  {
    number: 135,
    question: "The induced emf depends on:",
    options: ["Speed of motion", "Flux density", "Length of conductor", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 136,
    question: "Self-induction is the property of:",
    options: ["Resistor", "Capacitor", "Coil", "Battery"],
    answer: "Coil"
  },
  {
    number: 137,
    question: "The induced emf is directly proportional to:",
    options: ["Rate of change of current", "Resistance", "Voltage drop", "Capacitance"],
    answer: "Rate of change of current"
  },
  {
    number: 138,
    question: "Energy stored in the magnetic field of an inductor is measured in:",
    options: ["Joules", "Watts", "Henry", "Coulombs"],
    answer: "Joules"
  },
  {
    number: 139,
    question: "Fleming’s left-hand rule is used for:",
    options: ["Motors", "Generators", "Transformers", "Resistors"],
    answer: "Motors"
  },
  {
    number: 140,
    question: "Fleming’s right-hand rule is used for:",
    options: ["Motors", "Generators", "Transformers", "Relays"],
    answer: "Generators"
  },
  {
    number: 141,
    question: "If a conductor moves perpendicular to magnetic field, the induced emf is:",
    options: ["Zero", "Maximum", "Minimum", "Constant"],
    answer: "Maximum"
  },
  {
    number: 142,
    question: "When flux linking a coil changes uniformly, the induced emf is:",
    options: ["Zero", "Constant", "Alternating", "Random"],
    answer: "Constant"
  },
  {
    number: 143,
    question: "The symbol ‘B’ in magnetic equations stands for:",
    options: ["Flux", "Flux density", "Field strength", "Force"],
    answer: "Flux density"
  },
  {
    number: 144,
    question: "The induced emf in a closed loop depends on:",
    options: ["Number of turns", "Rate of change of flux", "Cross-section", "Both A and B"],
    answer: "Both A and B"
  },
  {
    number: 145,
    question: "The property of a circuit that resists change in current is:",
    options: ["Capacitance", "Inductance", "Resistance", "Conductance"],
    answer: "Inductance"
  },
  {
    number: 146,
    question: "When two coils are magnetically coupled, the effect is known as:",
    options: ["Mutual inductance", "Self inductance", "Capacitance", "Impedance"],
    answer: "Mutual inductance"
  },
  {
    number: 147,
    question: "Magnetic flux linkage is the product of:",
    options: ["Flux and current", "Flux and turns", "Flux and resistance", "Flux and voltage"],
    answer: "Flux and turns"
  },
  {
    number: 148,
    question: "The greater the permeability of a core material, the:",
    options: ["Smaller the inductance", "Greater the inductance", "Constant inductance", "No effect"],
    answer: "Greater the inductance"
  },
  {
    number: 149,
    question: "When current increases in an inductor, the magnetic field:",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    answer: "Increases"
  },
  {
    number: 150,
    question: "The opposition to current change in an inductor is called:",
    options: ["Back emf", "Forward emf", "Mutual flux", "Electrostatic field"],
    answer: "Back emf"
  },
  {
    number: 151,
    question: "What does a battery consist of?",
    options: [
      "One or more voltaic cells connected in series",
      "Only a single voltaic cell",
      "A set of resistors and capacitors",
      "Only chemical electrolytes"
    ],
    answer: "One or more voltaic cells connected in series"
  },
  {
    number: 152,
    question: "What type of energy conversion occurs in a voltaic cell?",
    options: [
      "Mechanical energy to electrical energy",
      "Chemical energy to electrical energy",
      "Thermal energy to mechanical energy",
      "Electrical energy to chemical energy"
    ],
    answer: "Chemical energy to electrical energy"
  },
  {
    number: 153,
    question: "What determines a battery’s voltage output and current rating?",
    options: [
      "The elements used, electrode size, and type of electrolyte",
      "The wire thickness only",
      "The type of load connected",
      "The color of electrodes"
    ],
    answer: "The elements used, electrode size, and type of electrolyte"
  },
  {
    number: 154,
    question: "Which of the following cannot be recharged?",
    options: [
      "Primary cell",
      "Secondary cell",
      "Storage cell",
      "Lead-acid cell"
    ],
    answer: "Primary cell"
  },
  {
    number: 155,
    question: "A reversible chemical reaction inside a cell indicates it is a:",
    options: ["Primary cell", "Secondary cell", "Dry cell", "Lithium cell"],
    answer: "Secondary cell"
  },
  {
    number: 156,
    question: "Which cell type contains a moist electrolyte that cannot be spilled?",
    options: ["Wet cell", "Dry cell", "Lead-acid cell", "Fuel cell"],
    answer: "Dry cell"
  },
  {
    number: 157,
    question: "Which of the following is NOT a type of primary cell?",
    options: ["Carbon-zinc", "Alkaline", "Lead-acid", "Mercury"],
    answer: "Lead-acid"
  },
  {
    number: 158,
    question: "What is the output voltage of a single carbon-zinc dry cell?",
    options: ["3.0 V", "2.1 V", "1.5 V", "0.5 V"],
    answer: "1.5 V"
  },
  {
    number: 159,
    question: "Which statement about alkaline cells is TRUE?",
    options: [
      "They have higher internal resistance than carbon-zinc cells",
      "They have the same voltage but longer life than carbon-zinc cells",
      "They cannot be used continuously",
      "They are rechargeable"
    ],
    answer: "They have the same voltage but longer life than carbon-zinc cells"
  },
  {
    number: 160,
    question: "The electrolyte used in an alkaline cell is:",
    options: ["Sulfuric acid", "Potassium hydroxide", "Ammonium chloride", "Water"],
    answer: "Potassium hydroxide"
  },
  {
    number: 161,
    question: "Zinc chloride cells are also known as:",
    options: ["Heavy-duty cells", "Rechargeable cells", "Dry cells", "Lithium cells"],
    answer: "Heavy-duty cells"
  },
  {
    number: 162,
    question: "Mercury cells are becoming obsolete because:",
    options: [
      "They produce low voltage",
      "They are too expensive",
      "They pose environmental hazards",
      "They cannot be recharged"
    ],
    answer: "They pose environmental hazards"
  },
  {
    number: 163,
    question: "Silver oxide cells are commonly used in:",
    options: ["Cars", "Hearing aids and watches", "Solar panels", "UPS systems"],
    answer: "Hearing aids and watches"
  },
  {
    number: 164,
    question: "What is the output voltage of a lithium cell commonly used?",
    options: ["1.5 V", "2.1 V", "3.0 V", "6.0 V"],
    answer: "3.0 V"
  },
  {
    number: 165,
    question: "Which statement about lithium cells is TRUE?",
    options: [
      "They are rechargeable and heavy",
      "They have low voltage and short shelf life",
      "They are lightweight and have long shelf life",
      "They contain only water as electrolyte"
    ],
    answer: "They are lightweight and have long shelf life"
  },
  {
    number: 166,
    question: "The positive electrode of a lead-acid cell is made of:",
    options: ["Spongy lead", "Lead peroxide", "Carbon", "Zinc"],
    answer: "Lead peroxide"
  },
  {
    number: 167,
    question: "The electrolyte of a lead-acid battery is:",
    options: ["Potassium hydroxide", "Sulfuric acid", "Sodium hydroxide", "Ammonium chloride"],
    answer: "Sulfuric acid"
  },
  {
    number: 168,
    question: "The output voltage of a single lead-acid cell is approximately:",
    options: ["1.5 V", "2.1 V", "3.0 V", "6.0 V"],
    answer: "2.1 V"
  },
  {
    number: 169,
    question: "A 12-V lead-acid battery typically contains how many cells in series?",
    options: ["3", "4", "6", "8"],
    answer: "6"
  },
  {
    number: 170,
    question: "The ampere-hour (A·h) rating of a battery indicates:",
    options: [
      "Its voltage",
      "How long it can supply current",
      "Its internal resistance",
      "Its temperature rating"
    ],
    answer: "How long it can supply current"
  },
  {
    number: 171,
    question: "If a 200 A·h battery supplies 20 A, how long will it last ideally?",
    options: ["1 hour", "5 hours", "10 hours", "20 hours"],
    answer: "10 hours"
  },
  {
    number: 172,
    question: "What is used to measure the state of charge in a lead-acid battery?",
    options: ["Voltmeter", "Hydrometer", "Ammeter", "Ohmmeter"],
    answer: "Hydrometer"
  },
  {
    number: 173,
    question: "What does specific gravity compare?",
    options: [
      "Weight of acid to weight of metal",
      "Weight of a substance to weight of water",
      "Current to voltage",
      "Resistance to current"
    ],
    answer: "Weight of a substance to weight of water"
  },
  {
    number: 174,
    question: "As a lead-acid battery discharges, the specific gravity of the electrolyte:",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    answer: "Decreases"
  },
  {
    number: 175,
    question: "When charging a lead-acid battery, how should terminals be connected?",
    options: [
      "Positive to negative",
      "Negative to positive",
      "Positive to positive and negative to negative",
      "Cross connection"
    ],
    answer: "Positive to positive and negative to negative"
  },
  {
    number: 176,
    question: "Nickel-Cadmium (NiCd) batteries use which electrolyte?",
    options: ["Sulfuric acid", "Potassium hydroxide", "Sodium chloride", "Water"],
    answer: "Potassium hydroxide"
  },
  {
    number: 177,
    question: "NiCd batteries are known for:",
    options: [
      "Being single-use only",
      "Having short life",
      "High current delivery and rechargeability",
      "Environmental safety only"
    ],
    answer: "High current delivery and rechargeability"
  },
  {
    number: 178,
    question: "Nickel-Metal-Hydride (NiMH) batteries provide about how much more capacity than NiCd?",
    options: ["10%", "20%", "40%", "60%"],
    answer: "40%"
  },
  {
    number: 179,
    question: "Which of the following is almost obsolete?",
    options: ["Nickel-Iron cell", "NiMH cell", "Lithium cell", "Fuel cell"],
    answer: "Nickel-Iron cell"
  },
  {
    number: 180,
    question: "Fuel cells convert which form of energy directly into electrical energy?",
    options: ["Mechanical", "Chemical", "Thermal", "Nuclear"],
    answer: "Chemical"
  },
  {
    number: 181,
    question: "Fuel cells used in the space program combine which gases?",
    options: ["Nitrogen and oxygen", "Hydrogen and oxygen", "Helium and argon", "Carbon dioxide and oxygen"],
    answer: "Hydrogen and oxygen"
  },
  {
    number: 182,
    question: "Solar cells convert what energy into electrical energy?",
    options: ["Heat energy", "Light energy", "Chemical energy", "Mechanical energy"],
    answer: "Light energy"
  },
  {
    number: 183,
    question: "Cells connected in series provide:",
    options: [
      "Higher current capacity",
      "Higher voltage output",
      "Lower resistance",
      "Equal voltage as one cell"
    ],
    answer: "Higher voltage output"
  },
  {
    number: 184,
    question: "Cells connected in parallel provide:",
    options: [
      "Higher voltage",
      "Same voltage but higher current capacity",
      "Lower current",
      "Lower voltage"
    ],
    answer: "Same voltage but higher current capacity"
  },
  {
    number: 185,
    question: "The combination of cells is called a:",
    options: ["Circuit", "Battery", "Conductor", "Resistor"],
    answer: "Battery"
  },
  {
    number: 186,
    question: "In a series connection, the current through all cells is:",
    options: ["Different", "Zero", "The same", "Half of the first cell"],
    answer: "The same"
  },
  {
    number: 187,
    question: "The current from a battery depends on:",
    options: ["Its color", "The load resistance", "Its height", "Temperature only"],
    answer: "The load resistance"
  },
  {
    number: 188,
    question: "According to Ohm’s law, current I = ?",
    options: ["V × R", "R / V", "V / R", "V + R"],
    answer: "V / R"
  },
  {
    number: 189,
    question: "A generator’s internal resistance causes:",
    options: [
      "Voltage increase with load",
      "Voltage drop as current increases",
      "Constant voltage output",
      "Open circuit"
    ],
    answer: "Voltage drop as current increases"
  },
  {
    number: 190,
    question: "What happens when load resistance equals internal resistance of the generator?",
    options: [
      "Maximum voltage transfer",
      "Maximum power transfer",
      "Zero efficiency",
      "Infinite current"
    ],
    answer: "Maximum power transfer"
  },
  {
    number: 191,
    question: "When RL increases in a circuit:",
    options: [
      "Load voltage decreases",
      "Load current increases",
      "Load voltage increases and current decreases",
      "Both voltage and current increase"
    ],
    answer: "Load voltage increases and current decreases"
  },
  {
    number: 192,
    question: "When RL = ri, the efficiency of the system is:",
    options: ["100%", "75%", "50%", "25%"],
    answer: "50%"
  },
  {
    number: 193,
    question: "For maximum voltage output, RL should be:",
    options: ["Equal to ri", "Less than ri", "As high as possible", "Zero"],
    answer: "As high as possible"
  },
  {
    number: 194,
    question: "What unit measures battery capacity?",
    options: ["Volt", "Ampere", "Ampere-hour", "Coulomb"],
    answer: "Ampere-hour"
  },
  {
    number: 195,
    question: "Which cell type has constant electrolyte specific gravity during charge?",
    options: ["Lead-acid cell", "NiCd cell", "NiMH cell", "Lithium cell"],
    answer: "NiCd cell"
  },
  {
    number: 196,
    question: "Nickel-Metal-Hydride cells are mostly used in:",
    options: [
      "Industrial trucks",
      "High-end portable devices",
      "Lead-acid systems",
      "Street lights"
    ],
    answer: "High-end portable devices"
  },
  {
    number: 197,
    question: "Which cells are arranged into large arrays to produce high power?",
    options: ["Fuel cells", "Solar cells", "NiCd cells", "Mercury cells"],
    answer: "Solar cells"
  },
  {
    number: 198,
    question: "Internal resistance of a generator is represented by:",
    options: ["ri", "RL", "I", "PL"],
    answer: "ri"
  },
  {
    number: 199,
    question: "What is the main function of a generator’s internal resistance?",
    options: [
      "Increase power",
      "Limit current and cause voltage drop",
      "Reduce temperature",
      "Increase efficiency"
    ],
    answer: "Limit current and cause voltage drop"
  },
  {
    number: 200,
    question: "Matching a load resistance to the internal resistance of a generator results in:",
    options: [
      "Maximum power transfer",
      "Maximum voltage transfer",
      "Minimum current flow",
      "Zero output"
    ],
    answer: "Maximum power transfer"
  },
  {
    number: 201,
    question: "Magnetic fields are produced by what?",
    options: ["Static charges", "Electric currents", "Permanent insulators", "Light waves"],
    answer: "Electric currents"
  },
  {
    number: 202,
    question: "The magnetic field around a solenoid is similar to that of a:",
    options: ["Battery", "Magnet", "Capacitor", "Conductor"],
    answer: "Magnet"
  },
  {
    number: 203,
    question: "The screw rule states that if a normal right-hand thread screw is screwed along the conductor in the direction of current, the rotation of the screw gives the direction of the:",
    options: ["Electric field", "Magnetic field", "Voltage", "Force"],
    answer: "Magnetic field"
  },
  {
    number: 204,
    question: "The grip rule states that if the coil is gripped with the right hand and fingers point in the direction of current, the thumb shows the direction of:",
    options: ["Current", "Voltage", "Magnetic field inside the solenoid", "Flux linkage"],
    answer: "Magnetic field inside the solenoid"
  },
  {
    number: 205,
    question: "A conductor carrying current in a magnetic field experiences:",
    options: ["Resistance", "Force", "Capacitance", "Inductance"],
    answer: "Force"
  },
  {
    number: 206,
    question: "The direction of force on a current-carrying conductor in a magnetic field is given by:",
    options: ["Fleming’s right-hand rule", "Fleming’s left-hand rule", "Grip rule", "Screw rule"],
    answer: "Fleming’s left-hand rule"
  },
  {
    number: 207,
    question: "In Fleming’s left-hand rule, the thumb represents:",
    options: ["Magnetic field", "Current", "Motion of conductor", "Induced emf"],
    answer: "Motion of conductor"
  },
  {
    number: 208,
    question: "When a conductor cuts magnetic flux lines, an emf is induced due to:",
    options: ["Electrostatics", "Electromagnetic induction", "Capacitive effect", "Resistive effect"],
    answer: "Electromagnetic induction"
  },
  {
    number: 209,
    question: "Faraday’s first law of electromagnetic induction states that:",
    options: [
      "An emf is induced whenever the magnetic flux linking a circuit changes",
      "Current is always constant in a magnetic field",
      "The magnetic field remains unchanged",
      "Resistance changes with flux"
    ],
    answer: "An emf is induced whenever the magnetic flux linking a circuit changes"
  },
  {
    number: 210,
    question: "According to Faraday’s second law, the magnitude of induced emf is proportional to:",
    options: ["Flux itself", "Rate of change of magnetic flux", "Voltage", "Resistance"],
    answer: "Rate of change of magnetic flux"
  },
  {
    number: 211,
    question: "Lenz’s law gives the direction of:",
    options: ["Electric current", "Induced emf", "Magnetic field", "Resistance"],
    answer: "Induced emf"
  },
  {
    number: 212,
    question: "According to Lenz’s law, the induced emf opposes:",
    options: ["The cause producing it", "The current", "The voltage", "The capacitance"],
    answer: "The cause producing it"
  },
  {
    number: 213,
    question: "The induced emf in a straight conductor moving in a magnetic field is given by:",
    options: ["E = BIL", "E = BILsinθ", "E = IR", "E = VQ"],
    answer: "E = BILsinθ"
  },
  {
    number: 214,
    question: "In the expression E = B l v sinθ, ‘v’ represents:",
    options: ["Voltage", "Velocity of conductor", "Volume", "Vector of field"],
    answer: "Velocity of conductor"
  },
  {
    number: 215,
    question: "The unit of magnetic flux density (B) is:",
    options: ["Weber", "Tesla", "Henry", "Coulomb"],
    answer: "Tesla"
  },
  {
    number: 216,
    question: "Inductance is the property of a circuit that opposes:",
    options: ["Voltage", "Current change", "Magnetic flux", "Resistance"],
    answer: "Current change"
  },
  {
    number: 217,
    question: "When an emf is induced in the same circuit that causes the current change, it is called:",
    options: ["Mutual inductance", "Self inductance", "Induced flux", "Coupled induction"],
    answer: "Self inductance"
  },
  {
    number: 218,
    question: "When emf is induced in one coil due to current change in another, it is called:",
    options: ["Self induction", "Mutual induction", "Electrostatic coupling", "Faraday effect"],
    answer: "Mutual induction"
  },
  {
    number: 219,
    question: "The unit of inductance is:",
    options: ["Weber", "Tesla", "Henry", "Ampere"],
    answer: "Henry"
  },
  {
    number: 220,
    question: "Which factor increases the inductance of a coil?",
    options: ["Less number of turns", "Smaller area", "Iron core presence", "Thin wire spacing"],
    answer: "Iron core presence"
  },
  {
    number: 221,
    question: "Inductance of a coil increases when:",
    options: [
      "The number of turns decreases",
      "Cross-sectional area increases",
      "Core is removed",
      "Turns are widely spaced"
    ],
    answer: "Cross-sectional area increases"
  },
  {
    number: 222,
    question: "The energy stored in an inductor is given by:",
    options: ["½LI²", "L²I", "½CV²", "IV"],
    answer: "½LI²"
  },
  {
    number: 223,
    question: "The inductance of a coil depends on:",
    options: ["Number of turns", "Area of coil", "Core material", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 224,
    question: "If current through an inductor changes at 200 A/s and induces 1.5 V in another coil, the mutual inductance is:",
    options: ["0.0075 H", "0.75 H", "7.5 H", "75 H"],
    answer: "0.0075 H"
  },
  {
    number: 225,
    question: "A magnetic field can be produced by:",
    options: ["A stationary charge", "A moving charge", "A dielectric", "A resistor only"],
    answer: "A moving charge"
  },
  {
    number: 226,
    question: "Electromagnetic induction occurs due to:",
    options: ["Steady current", "Changing magnetic flux", "Constant voltage", "Static charge"],
    answer: "Changing magnetic flux"
  },
  {
    number: 227,
    question: "The symbol for inductance in circuit diagrams is represented by:",
    options: ["Z", "L", "M", "N"],
    answer: "L"
  },
  {
    number: 228,
    question: "The SI unit of magnetic flux is:",
    options: ["Weber", "Tesla", "Henry", "Joule"],
    answer: "Weber"
  },
  {
    number: 229,
    question: "Which law explains the polarity of induced emf?",
    options: ["Faraday’s law", "Coulomb’s law", "Lenz’s law", "Ohm’s law"],
    answer: "Lenz’s law"
  },
  {
    number: 230,
    question: "The direction of induced current opposes the change producing it because of:",
    options: ["Ohm’s law", "Lenz’s law", "Kirchhoff’s law", "Faraday’s law"],
    answer: "Lenz’s law"
  },
  {
    number: 231,
    question: "A magnetic field lines run from:",
    options: ["South to North inside magnet", "North to South outside magnet", "Randomly", "Both A and B"],
    answer: "Both A and B"
  },
  {
    number: 232,
    question: "The greater the number of turns in a coil, the:",
    options: ["Lower the inductance", "Higher the inductance", "Same inductance", "Constant flux"],
    answer: "Higher the inductance"
  },
  {
    number: 233,
    question: "An emf is not induced if the conductor:",
    options: ["Cuts magnetic lines", "Moves parallel to magnetic field", "Moves at 90°", "Changes direction"],
    answer: "Moves parallel to magnetic field"
  },
  {
    number: 234,
    question: "Mutual inductance is denoted by the symbol:",
    options: ["L", "M", "N", "μ"],
    answer: "M"
  },
  {
    number: 235,
    question: "The induced emf depends on:",
    options: ["Speed of motion", "Flux density", "Length of conductor", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 236,
    question: "Self-induction is the property of:",
    options: ["Resistor", "Capacitor", "Coil", "Battery"],
    answer: "Coil"
  },
  {
    number: 237,
    question: "The induced emf is directly proportional to:",
    options: ["Rate of change of current", "Resistance", "Voltage drop", "Capacitance"],
    answer: "Rate of change of current"
  },
  {
    number: 238,
    question: "Energy stored in the magnetic field of an inductor is measured in:",
    options: ["Joules", "Watts", "Henry", "Coulombs"],
    answer: "Joules"
  },
  {
    number: 239,
    question: "Fleming’s left-hand rule is used for:",
    options: ["Motors", "Generators", "Transformers", "Resistors"],
    answer: "Motors"
  },
  {
    number: 240,
    question: "Fleming’s right-hand rule is used for:",
    options: ["Motors", "Generators", "Transformers", "Relays"],
    answer: "Generators"
  },
  {
    number: 241,
    question: "If a conductor moves perpendicular to magnetic field, the induced emf is:",
    options: ["Zero", "Maximum", "Minimum", "Constant"],
    answer: "Maximum"
  },
  {
    number: 242,
    question: "When flux linking a coil changes uniformly, the induced emf is:",
    options: ["Zero", "Constant", "Alternating", "Random"],
    answer: "Constant"
  },
  {
    number: 243,
    question: "The symbol ‘B’ in magnetic equations stands for:",
    options: ["Flux", "Flux density", "Field strength", "Force"],
    answer: "Flux density"
  },
  {
    number: 244,
    question: "The induced emf in a closed loop depends on:",
    options: ["Number of turns", "Rate of change of flux", "Cross-section", "Both A and B"],
    answer: "Both A and B"
  },
  {
    number: 245,
    question: "The property of a circuit that resists change in current is:",
    options: ["Capacitance", "Inductance", "Resistance", "Conductance"],
    answer: "Inductance"
  },
  {
    number: 246,
    question: "When two coils are magnetically coupled, the effect is known as:",
    options: ["Mutual inductance", "Self inductance", "Capacitance", "Impedance"],
    answer: "Mutual inductance"
  },
  {
    number: 247,
    question: "Magnetic flux linkage is the product of:",
    options: ["Flux and current", "Flux and turns", "Flux and resistance", "Flux and voltage"],
    answer: "Flux and turns"
  },
  {
    number: 248,
    question: "The greater the permeability of a core material, the:",
    options: ["Smaller the inductance", "Greater the inductance", "Constant inductance", "No effect"],
    answer: "Greater the inductance"
  },
  {
    number: 249,
    question: "When current increases in an inductor, the magnetic field:",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    answer: "Increases"
  },
  {
    number: 250,
    question: "The opposition to current change in an inductor is called:",
    options: ["Back emf", "Forward emf", "Mutual flux", "Electrostatic field"],
    answer: "Back emf"
  },
  {
    number: 251,
    question: "What does a battery consist of?",
    options: [
      "One or more voltaic cells connected in series",
      "Only a single voltaic cell",
      "A set of resistors and capacitors",
      "Only chemical electrolytes"
    ],
    answer: "One or more voltaic cells connected in series"
  },
  {
    number: 252,
    question: "What type of energy conversion occurs in a voltaic cell?",
    options: [
      "Mechanical energy to electrical energy",
      "Chemical energy to electrical energy",
      "Thermal energy to mechanical energy",
      "Electrical energy to chemical energy"
    ],
    answer: "Chemical energy to electrical energy"
  },
  {
    number: 253,
    question: "What determines a battery’s voltage output and current rating?",
    options: [
      "The elements used, electrode size, and type of electrolyte",
      "The wire thickness only",
      "The type of load connected",
      "The color of electrodes"
    ],
    answer: "The elements used, electrode size, and type of electrolyte"
  },
  {
    number: 254,
    question: "Which of the following cannot be recharged?",
    options: [
      "Primary cell",
      "Secondary cell",
      "Storage cell",
      "Lead-acid cell"
    ],
    answer: "Primary cell"
  },
  {
    number: 255,
    question: "A reversible chemical reaction inside a cell indicates it is a:",
    options: ["Primary cell", "Secondary cell", "Dry cell", "Lithium cell"],
    answer: "Secondary cell"
  },
  {
    number: 256,
    question: "Which cell type contains a moist electrolyte that cannot be spilled?",
    options: ["Wet cell", "Dry cell", "Lead-acid cell", "Fuel cell"],
    answer: "Dry cell"
  },
  {
    number: 257,
    question: "Which of the following is NOT a type of primary cell?",
    options: ["Carbon-zinc", "Alkaline", "Lead-acid", "Mercury"],
    answer: "Lead-acid"
  },
  {
    number: 258,
    question: "What is the output voltage of a single carbon-zinc dry cell?",
    options: ["3.0 V", "2.1 V", "1.5 V", "0.5 V"],
    answer: "1.5 V"
  },
  {
    number: 259,
    question: "Which statement about alkaline cells is TRUE?",
    options: [
      "They have higher internal resistance than carbon-zinc cells",
      "They have the same voltage but longer life than carbon-zinc cells",
      "They cannot be used continuously",
      "They are rechargeable"
    ],
    answer: "They have the same voltage but longer life than carbon-zinc cells"
  },
  {
    number: 260,
    question: "The electrolyte used in an alkaline cell is:",
    options: ["Sulfuric acid", "Potassium hydroxide", "Ammonium chloride", "Water"],
    answer: "Potassium hydroxide"
  },
  {
    number: 261,
    question: "Zinc chloride cells are also known as:",
    options: ["Heavy-duty cells", "Rechargeable cells", "Dry cells", "Lithium cells"],
    answer: "Heavy-duty cells"
  },
  {
    number: 262,
    question: "Mercury cells are becoming obsolete because:",
    options: [
      "They produce low voltage",
      "They are too expensive",
      "They pose environmental hazards",
      "They cannot be recharged"
    ],
    answer: "They pose environmental hazards"
  },
  {
    number: 263,
    question: "Silver oxide cells are commonly used in:",
    options: ["Cars", "Hearing aids and watches", "Solar panels", "UPS systems"],
    answer: "Hearing aids and watches"
  },
  {
    number: 264,
    question: "What is the output voltage of a lithium cell commonly used?",
    options: ["1.5 V", "2.1 V", "3.0 V", "6.0 V"],
    answer: "3.0 V"
  },
  {
    number: 265,
    question: "Which statement about lithium cells is TRUE?",
    options: [
      "They are rechargeable and heavy",
      "They have low voltage and short shelf life",
      "They are lightweight and have long shelf life",
      "They contain only water as electrolyte"
    ],
    answer: "They are lightweight and have long shelf life"
  },
  {
    number: 266,
    question: "The positive electrode of a lead-acid cell is made of:",
    options: ["Spongy lead", "Lead peroxide", "Carbon", "Zinc"],
    answer: "Lead peroxide"
  },
  {
    number: 267,
    question: "The electrolyte of a lead-acid battery is:",
    options: ["Potassium hydroxide", "Sulfuric acid", "Sodium hydroxide", "Ammonium chloride"],
    answer: "Sulfuric acid"
  },
  {
    number: 268,
    question: "The output voltage of a single lead-acid cell is approximately:",
    options: ["1.5 V", "2.1 V", "3.0 V", "6.0 V"],
    answer: "2.1 V"
  },
  {
    number: 269,
    question: "A 12-V lead-acid battery typically contains how many cells in series?",
    options: ["3", "4", "6", "8"],
    answer: "6"
  },
  {
    number: 270,
    question: "The ampere-hour (A·h) rating of a battery indicates:",
    options: [
      "Its voltage",
      "How long it can supply current",
      "Its internal resistance",
      "Its temperature rating"
    ],
    answer: "How long it can supply current"
  },
  {
    number: 271,
    question: "If a 200 A·h battery supplies 20 A, how long will it last ideally?",
    options: ["1 hour", "5 hours", "10 hours", "20 hours"],
    answer: "10 hours"
  },
  {
    number: 272,
    question: "What is used to measure the state of charge in a lead-acid battery?",
    options: ["Voltmeter", "Hydrometer", "Ammeter", "Ohmmeter"],
    answer: "Hydrometer"
  },
  {
    number: 273,
    question: "What does specific gravity compare?",
    options: [
      "Weight of acid to weight of metal",
      "Weight of a substance to weight of water",
      "Current to voltage",
      "Resistance to current"
    ],
    answer: "Weight of a substance to weight of water"
  },
  {
    number: 274,
    question: "As a lead-acid battery discharges, the specific gravity of the electrolyte:",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    answer: "Decreases"
  },
  {
    number: 275,
    question: "When charging a lead-acid battery, how should terminals be connected?",
    options: [
      "Positive to negative",
      "Negative to positive",
      "Positive to positive and negative to negative",
      "Cross connection"
    ],
    answer: "Positive to positive and negative to negative"
  },
  {
    number: 276,
    question: "Nickel-Cadmium (NiCd) batteries use which electrolyte?",
    options: ["Sulfuric acid", "Potassium hydroxide", "Sodium chloride", "Water"],
    answer: "Potassium hydroxide"
  },
  {
    number: 277,
    question: "NiCd batteries are known for:",
    options: [
      "Being single-use only",
      "Having short life",
      "High current delivery and rechargeability",
      "Environmental safety only"
    ],
    answer: "High current delivery and rechargeability"
  },
  {
    number: 278,
    question: "Nickel-Metal-Hydride (NiMH) batteries provide about how much more capacity than NiCd?",
    options: ["10%", "20%", "40%", "60%"],
    answer: "40%"
  },
  {
    number: 279,
    question: "Which of the following is almost obsolete?",
    options: ["Nickel-Iron cell", "NiMH cell", "Lithium cell", "Fuel cell"],
    answer: "Nickel-Iron cell"
  },
  {
    number: 280,
    question: "Fuel cells convert which form of energy directly into electrical energy?",
    options: ["Mechanical", "Chemical", "Thermal", "Nuclear"],
    answer: "Chemical"
  },
  {
    number: 281,
    question: "Fuel cells used in the space program combine which gases?",
    options: ["Nitrogen and oxygen", "Hydrogen and oxygen", "Helium and argon", "Carbon dioxide and oxygen"],
    answer: "Hydrogen and oxygen"
  },
  {
    number: 282,
    question: "Solar cells convert what energy into electrical energy?",
    options: ["Heat energy", "Light energy", "Chemical energy", "Mechanical energy"],
    answer: "Light energy"
  },
  {
    number: 283,
    question: "Cells connected in series provide:",
    options: [
      "Higher current capacity",
      "Higher voltage output",
      "Lower resistance",
      "Equal voltage as one cell"
    ],
    answer: "Higher voltage output"
  },
  {
    number: 284,
    question: "Cells connected in parallel provide:",
    options: [
      "Higher voltage",
      "Same voltage but higher current capacity",
      "Lower current",
      "Lower voltage"
    ],
    answer: "Same voltage but higher current capacity"
  },
  {
    number: 285,
    question: "The combination of cells is called a:",
    options: ["Circuit", "Battery", "Conductor", "Resistor"],
    answer: "Battery"
  },
  {
    number: 286,
    question: "In a series connection, the current through all cells is:",
    options: ["Different", "Zero", "The same", "Half of the first cell"],
    answer: "The same"
  },
  {
    number: 287,
    question: "The current from a battery depends on:",
    options: ["Its color", "The load resistance", "Its height", "Temperature only"],
    answer: "The load resistance"
  },
  {
    number: 288,
    question: "According to Ohm’s law, current I = ?",
    options: ["V × R", "R / V", "V / R", "V + R"],
    answer: "V / R"
  },
  {
    number: 289,
    question: "A generator’s internal resistance causes:",
    options: [
      "Voltage increase with load",
      "Voltage drop as current increases",
      "Constant voltage output",
      "Open circuit"
    ],
    answer: "Voltage drop as current increases"
  },
  {
    number: 290,
    question: "What happens when load resistance equals internal resistance of the generator?",
    options: [
      "Maximum voltage transfer",
      "Maximum power transfer",
      "Zero efficiency",
      "Infinite current"
    ],
    answer: "Maximum power transfer"
  },
  {
    number: 291,
    question: "When RL increases in a circuit:",
    options: [
      "Load voltage decreases",
      "Load current increases",
      "Load voltage increases and current decreases",
      "Both voltage and current increase"
    ],
    answer: "Load voltage increases and current decreases"
  },
  {
    number: 292,
    question: "When RL = ri, the efficiency of the system is:",
    options: ["100%", "75%", "50%", "25%"],
    answer: "50%"
  },
  {
    number: 293,
    question: "For maximum voltage output, RL should be:",
    options: ["Equal to ri", "Less than ri", "As high as possible", "Zero"],
    answer: "As high as possible"
  },
  {
    number: 294,
    question: "What unit measures battery capacity?",
    options: ["Volt", "Ampere", "Ampere-hour", "Coulomb"],
    answer: "Ampere-hour"
  },
  {
    number: 295,
    question: "Which cell type has constant electrolyte specific gravity during charge?",
    options: ["Lead-acid cell", "NiCd cell", "NiMH cell", "Lithium cell"],
    answer: "NiCd cell"
  },
  {
    number: 296,
    question: "Nickel-Metal-Hydride cells are mostly used in:",
    options: [
      "Industrial trucks",
      "High-end portable devices",
      "Lead-acid systems",
      "Street lights"
    ],
    answer: "High-end portable devices"
  },
  {
    number: 297,
    question: "Which cells are arranged into large arrays to produce high power?",
    options: ["Fuel cells", "Solar cells", "NiCd cells", "Mercury cells"],
    answer: "Solar cells"
  },
  {
    number: 298,
    question: "Internal resistance of a generator is represented by:",
    options: ["ri", "RL", "I", "PL"],
    answer: "ri"
  },
  {
    number: 299,
    question: "What is the main function of a generator’s internal resistance?",
    options: [
      "Increase power",
      "Limit current and cause voltage drop",
      "Reduce temperature",
      "Increase efficiency"
    ],
    answer: "Limit current and cause voltage drop"
  },
  {
    number: 300,
    question: "Matching a load resistance to the internal resistance of a generator results in:",
    options: [
      "Maximum power transfer",
      "Maximum voltage transfer",
      "Minimum current flow",
      "Zero output"
    ],
    answer: "Maximum power transfer"
  }
],
  get217: [
  {
    number: 1,
    question: "What produces a magnetic field?",
    options: [
      "Stationary electric charge",
      "Electric current",
      "Permanent magnet only",
      "Electrostatic field"
    ],
    answer: "Electric current"
  },
  {
    number: 2,
    question: "The magnetic field around a solenoid is similar to that of a:",
    options: ["Bar magnet", "Electric field", "Condenser", "Battery"],
    answer: "Bar magnet"
  },
  {
    number: 3,
    question: "According to the screw rule, if a right-hand screw is turned in the direction of current, the direction of rotation represents:",
    options: [
      "The direction of the electric field",
      "The direction of the magnetic field",
      "The direction of electron flow",
      "The direction of voltage"
    ],
    answer: "The direction of the magnetic field"
  },
  {
    number: 4,
    question: "The grip rule states that the thumb points in the direction of:",
    options: [
      "The current",
      "The magnetic field outside the coil",
      "The magnetic field inside the solenoid",
      "The induced emf"
    ],
    answer: "The magnetic field inside the solenoid"
  },
  {
    number: 5,
    question: "A current-carrying conductor placed in a magnetic field experiences:",
    options: ["Torque", "Force", "Potential difference", "Resistance"],
    answer: "Force"
  },
  {
    number: 6,
    question: "Fleming’s left-hand rule helps to determine the direction of:",
    options: ["Induced current", "Magnetic field", "Force on a conductor", "Electrostatic charge"],
    answer: "Force on a conductor"
  },
  {
    number: 7,
    question: "In Fleming’s left-hand rule, the thumb represents:",
    options: ["Current", "Magnetic field", "Motion", "Voltage"],
    answer: "Motion"
  },
  {
    number: 8,
    question: "In Fleming’s left-hand rule, the first finger represents:",
    options: ["Current", "Magnetic field", "Force", "Induced emf"],
    answer: "Magnetic field"
  },
  {
    number: 9,
    question: "In Fleming’s left-hand rule, the second finger represents:",
    options: ["Current", "Magnetic field", "Force", "Flux"],
    answer: "Current"
  },
  {
    number: 10,
    question: "Electromagnetic induction occurs when:",
    options: [
      "A magnetic field is constant",
      "A conductor moves across magnetic lines of force",
      "An insulator is placed in a field",
      "There is no change in magnetic flux"
    ],
    answer: "A conductor moves across magnetic lines of force"
  },
  {
    number: 11,
    question: "Faraday’s first law states that an induced emf is produced whenever:",
    options: [
      "A magnetic field is stationary",
      "A magnetic field linking a circuit changes",
      "A current flows in a resistor",
      "A battery is connected"
    ],
    answer: "A magnetic field linking a circuit changes"
  },
  {
    number: 12,
    question: "Faraday’s second law states that the magnitude of the induced emf is proportional to:",
    options: [
      "The current flowing in the circuit",
      "The rate of change of magnetic flux",
      "The number of batteries",
      "The direction of magnetic field"
    ],
    answer: "The rate of change of magnetic flux"
  },
  {
    number: 13,
    question: "Lenz’s law is based on the law of:",
    options: ["Conservation of energy", "Conservation of charge", "Conservation of flux", "Conservation of motion"],
    answer: "Conservation of energy"
  },
  {
    number: 14,
    question: "According to Lenz’s law, the direction of the induced emf is such that it:",
    options: [
      "Aids the cause producing it",
      "Opposes the cause producing it",
      "Has no effect on the cause",
      "Reverses the cause producing it"
    ],
    answer: "Opposes the cause producing it"
  },
  {
    number: 15,
    question: "The formula for induced emf when the conductor cuts magnetic flux is:",
    options: ["E = BIL", "E = BIL sinθ", "E = BvL sinθ", "E = vBL cosθ"],
    answer: "E = BvL sinθ"
  },
  {
    number: 16,
    question: "In the equation E = BvL sinθ, what does v represent?",
    options: ["Voltage", "Velocity of conductor", "Magnetic flux", "Resistance"],
    answer: "Velocity of conductor"
  },
  {
    number: 17,
    question: "The unit of magnetic flux density B is:",
    options: ["Weber", "Tesla", "Henry", "Coulomb"],
    answer: "Tesla"
  },
  {
    number: 18,
    question: "Inductance is the property of a circuit by which:",
    options: [
      "Resistance increases with voltage",
      "An emf is induced due to change of current",
      "Capacitance varies with charge",
      "Power factor decreases"
    ],
    answer: "An emf is induced due to change of current"
  },
  {
    number: 19,
    question: "When the emf is induced in the same circuit as the changing current, it is called:",
    options: ["Mutual inductance", "Self inductance", "Magnetic induction", "Static induction"],
    answer: "Self inductance"
  },
  {
    number: 20,
    question: "When the emf is induced in a nearby circuit, it is called:",
    options: ["Self inductance", "Mutual inductance", "Dynamic induction", "Reluctance"],
    answer: "Mutual inductance"
  },
  {
    number: 21,
    question: "The unit of inductance is:",
    options: ["Henry", "Farad", "Tesla", "Ohm"],
    answer: "Henry"
  },
  {
    number: 22,
    question: "Which of the following affects the inductance of a coil?",
    options: [
      "Number of turns",
      "Cross-sectional area",
      "Presence of magnetic core",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    number: 23,
    question: "When the number of turns in a coil increases, its inductance:",
    options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
    answer: "Increases"
  },
  {
    number: 24,
    question: "A coil with a greater cross-sectional area will have:",
    options: ["Lower inductance", "Higher inductance", "No inductance", "Constant flux"],
    answer: "Higher inductance"
  },
  {
    number: 25,
    question: "The inductance of a coil wound on an iron core compared to an air core is:",
    options: ["Lower", "Higher", "Zero", "Same"],
    answer: "Higher"
  },
  {
    number: 26,
    question: "The way turns are arranged affects inductance such that:",
    options: [
      "A long thin coil has higher inductance",
      "A short thick coil has higher inductance",
      "The shape has no effect",
      "Both have equal inductance"
    ],
    answer: "A short thick coil has higher inductance"
  },
  {
    number: 27,
    question: "Energy stored in an inductor is given by:",
    options: ["½ LI²", "½ CV²", "½ MV²", "½ RI²"],
    answer: "½ LI²"
  },
  {
    number: 28,
    question: "The mutually induced emf in the second coil is given by:",
    options: ["E = M(dI/dt)", "E = L(dI/dt)", "E = BvL", "E = VIt"],
    answer: "E = M(dI/dt)"
  },
  {
    number: 29,
    question: "If 1.5 V emf is induced when current changes at 200 A/s, the mutual inductance is:",
    options: ["0.75 H", "0.0075 H", "0.015 H", "2 H"],
    answer: "0.0075 H"
  },
  {
    number: 30,
    question: "The practical unit of mutual inductance is often expressed in:",
    options: ["MilliHenry", "MicroFarad", "Coulomb", "Ampere"],
    answer: "MilliHenry"
  },
  {
    number: 31,
    question: "The instrument that measures magnetic field strength is a:",
    options: ["Voltmeter", "Ammeter", "Gaussmeter", "Fluxmeter"],
    answer: "Gaussmeter"
  },
  {
    number: 32,
    question: "The property of opposing the change in current flow in a coil is due to:",
    options: ["Resistance", "Capacitance", "Inductance", "Reactance"],
    answer: "Inductance"
  },
  {
    number: 33,
    question: "What type of energy is stored in an inductor?",
    options: ["Electrical", "Thermal", "Magnetic", "Kinetic"],
    answer: "Magnetic"
  },
  {
    number: 34,
    question: "Self-induced emf always acts in a direction:",
    options: [
      "Aiding the applied voltage",
      "Opposing the change causing it",
      "At right angles to the current",
      "Independent of current change"
    ],
    answer: "Opposing the change causing it"
  },
  {
    number: 35,
    question: "Which of the following is NOT a factor affecting inductance?",
    options: ["Number of turns", "Core material", "Coil length", "Color of wire"],
    answer: "Color of wire"
  },
  {
    number: 36,
    question: "In an inductive circuit, when current increases, induced emf is:",
    options: ["In the same direction", "Opposite to the current", "Zero", "Perpendicular"],
    answer: "Opposite to the current"
  },
  {
    number: 37,
    question: "The SI unit of magnetic flux is:",
    options: ["Tesla", "Weber", "Henry", "Volt"],
    answer: "Weber"
  },
  {
    number: 38,
    question: "The relationship between flux and flux density is:",
    options: ["Φ = BA", "Φ = B/A", "B = Φ/A²", "A = BΦ"],
    answer: "Φ = BA"
  },
  {
    number: 39,
    question: "An emf is induced only when there is:",
    options: ["A constant flux", "A change in flux", "No motion", "Steady current"],
    answer: "A change in flux"
  },
  {
    number: 40,
    question: "If a conductor moves parallel to magnetic field lines, the induced emf is:",
    options: ["Maximum", "Minimum", "Zero", "Constant"],
    answer: "Zero"
  },
  {
    number: 41,
    question: "The energy stored in an inductor increases when:",
    options: ["Current decreases", "Current increases", "Core removed", "Frequency increases"],
    answer: "Current increases"
  },
  {
    number: 42,
    question: "Which law gives the direction of motion of a conductor in a magnetic field?",
    options: ["Faraday’s law", "Fleming’s left-hand rule", "Lenz’s law", "Ohm’s law"],
    answer: "Fleming’s left-hand rule"
  },
  {
    number: 43,
    question: "The relationship between induced emf and rate of change of current in a coil is defined by:",
    options: ["E = L(dI/dt)", "E = I(dL/dt)", "E = L²I", "E = R(dI/dt)"],
    answer: "E = L(dI/dt)"
  },
  {
    number: 44,
    question: "In mutual inductance, the induced emf depends on:",
    options: ["Current in same coil", "Current in nearby coil", "Voltage applied", "Coil resistance"],
    answer: "Current in nearby coil"
  },
  {
    number: 45,
    question: "Mutual inductance between two coils is maximum when:",
    options: ["Coils are far apart", "Coils are close together", "Coils are perpendicular", "Coils are open-circuited"],
    answer: "Coils are close together"
  },
  {
    number: 46,
    question: "The henry is defined as the inductance of a coil in which an emf of 1V is induced when current changes at:",
    options: ["1 A/s", "10 A/s", "100 A/s", "0.1 A/s"],
    answer: "1 A/s"
  },
  {
    number: 47,
    question: "The inductance of a coil does not depend on:",
    options: ["Coil turns", "Current flowing", "Core material", "Coil dimensions"],
    answer: "Current flowing"
  },
  {
    number: 48,
    question: "The opposition offered by inductance to a changing current is called:",
    options: ["Resistance", "Reactance", "Back emf", "Impedance"],
    answer: "Back emf"
  },
  {
    number: 49,
    question: "A magnetic field line represents:",
    options: ["Path of magnetic flux", "Flow of current", "Direction of voltage", "Movement of charge"],
    answer: "Path of magnetic flux"
  },
  {
    number: 50,
    question: "Electromagnetic induction is the production of emf by:",
    options: [
      "Chemical reaction",
      "Relative motion between conductor and magnetic field",
      "Static electricity",
      "Radiation"
    ],
    answer: "Relative motion between conductor and magnetic field"
  }
],

  };

// === QUESTION RENDERING LOGIC ===
let currentScore = 0;
let totalQuestions = 0;
let answeredCorrect = {};

function renderQuestions(courseKey, searchTerm = "") {
  const questions = courses[courseKey] || [];
  const filtered = questions.filter(q => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return q.question.toLowerCase().includes(term) || q.options.some(opt => opt.toLowerCase().includes(term));
  });
  const questionsSection = document.getElementById('questions');
  questionsSection.innerHTML = "";

  // Score bar
  const scoreBar = document.createElement('div');
  scoreBar.id = 'score-bar';
  scoreBar.style = 'margin-bottom: 18px; font-weight: 600; color: #007bff; font-size: 1.08em;';
  scoreBar.textContent = `Score: ${currentScore} / ${totalQuestions}`;
  questionsSection.appendChild(scoreBar);

  // Search bar
  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.placeholder = 'Search questions...';
  searchBar.style = 'width: 100%; max-width: 350px; margin-bottom: 18px; padding: 8px; border-radius: 5px; border: 1px solid #007bff; font-size: 1em;';
  searchBar.value = searchTerm;
  questionsSection.appendChild(searchBar);

  searchBar.addEventListener('input', function() {
    renderQuestions(courseKey, searchBar.value);
    showQuestionsSection();
  });

  totalQuestions = questions.length;
  currentScore = 0;
  answeredCorrect[courseKey] = answeredCorrect[courseKey] || Array(totalQuestions).fill(false);

  if (filtered.length === 0) {
    const noQ = document.createElement('div');
    noQ.style = "margin: 24px 0; color: #b30000; font-weight: bold;";
    noQ.textContent = "No questions available for this course.";
    questionsSection.appendChild(noQ);
    return;
  }

  filtered.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `
      <strong>Q${q.number}:</strong> ${q.question}<br>
      <ul class="options">
        ${q.options.map(option => `
          <li>
            <button class="option-btn" data-option="${option}">
              ${option}
            </button>
          </li>
        `).join('')}
      </ul>
      <div class="feedback"></div>
      <button class="show-answer">Show Correct Answer</button>
      <div class="answer" style="display:none; margin-top: 8px;">
        <strong>Answer:</strong> <span style="color: green;">${q.answer}</span>
      </div>
    `;

    questionsSection.appendChild(div);

    // Option selection & feedback
    const optionBtns = div.querySelectorAll('.option-btn');
    const feedbackDiv = div.querySelector('.feedback');
    const showAnswerBtn = div.querySelector('.show-answer');
    const answerDiv = div.querySelector('.answer');

    optionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        optionBtns.forEach(b => b.classList.remove('selected', 'correct', 'incorrect'));
        feedbackDiv.textContent = '';
        btn.classList.add('selected');
        if (btn.textContent.trim() === q.answer.trim()) {
          btn.classList.add('correct');
          feedbackDiv.textContent = "Correct! ✔️";
          feedbackDiv.style.color = "#28a745";
          if (!answeredCorrect[courseKey][q.number-1]) {
            answeredCorrect[courseKey][q.number-1] = true;
            currentScore++;
            scoreBar.textContent = `Score: ${currentScore} / ${totalQuestions}`;
          }
        } else {
          btn.classList.add('incorrect');
          feedbackDiv.textContent = `Incorrect. Try again!`;
          feedbackDiv.style.color = "#d00";
        }
      });
    });

    // Show/hide answer
    showAnswerBtn.addEventListener('click', function() {
      answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
      showAnswerBtn.textContent = answerDiv.style.display === 'block' ? 'Hide Correct Answer' : 'Show Correct Answer';
    });
  });
}

function showQuestionsSection() {
  const questionsSection = document.getElementById('questions');
  questionsSection.style.opacity = '1';
  questionsSection.style.pointerEvents = 'auto';
}

function hideQuestionsSection() {
  const questionsSection = document.getElementById('questions');
  questionsSection.style.opacity = '0';
  questionsSection.style.pointerEvents = 'none';
  questionsSection.innerHTML = '';
}

// On page load, hide questions
hideQuestionsSection();

// Tab switching logic
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentScore = 0;
    totalQuestions = courses[btn.dataset.course] ? courses[btn.dataset.course].length : 0;
    answeredCorrect[btn.dataset.course] = Array(totalQuestions).fill(false);
    renderQuestions(btn.dataset.course);
    showQuestionsSection();
  });
});

// === DARK MODE LOGIC ===
const darkToggle = document.getElementById('darkmode-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark-mode');
    if (darkToggle) darkToggle.textContent = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'on');
  } else {
    document.body.classList.remove('dark-mode');
    if (darkToggle) darkToggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'off');
  }
}

// On load, set mode from localStorage or system preference
(function() {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'on' || (saved === null && prefersDark)) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
})();

if (darkToggle) {
  darkToggle.onclick = function() {
    setDarkMode(!document.body.classList.contains('dark-mode'));
  };
}