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
  {number: 11,
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
  ]
};

let currentScore = 0;
let totalQuestions = 0;
let answeredCorrect = {};

function renderQuestions(courseKey, searchTerm = "") {
  const questions = courses[courseKey].filter(q => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return q.question.toLowerCase().includes(term) || q.options.some(opt => opt.toLowerCase().includes(term));
  });
  const questionsSection = document.getElementById('questions');
  questionsSection.innerHTML = "";


  // Score bar (hidden initially)
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
  });

  totalQuestions = courses[courseKey].length;
  currentScore = 0;
  answeredCorrect[courseKey] = answeredCorrect[courseKey] || Array(totalQuestions).fill(false);

  questions.forEach((q, i) => {
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

// Tab switching logic
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Reset score and answeredCorrect for new course
    currentScore = 0;
    totalQuestions = courses[btn.dataset.course].length;
    answeredCorrect[btn.dataset.course] = Array(totalQuestions).fill(false);
    renderQuestions(btn.dataset.course);
  });
});

// Render default course on page load
answeredCorrect['phy102'] = Array(courses['phy102'].length).fill(false);
renderQuestions('phy102');
// === AUTH FRONTEND LOGIC ===
const authContainer = document.getElementById('auth-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const authMessage = document.getElementById('auth-message');
const mainContent = document.getElementById('main-content');
const logoutBtn = document.getElementById('logout-btn');

function showLogin() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  authMessage.textContent = '';
}
function showSignup() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  authMessage.textContent = '';
}

document.getElementById('show-signup').onclick = (e) => {
  e.preventDefault();
  showSignup();
};
document.getElementById('show-login').onclick = (e) => {
  e.preventDefault();
  showLogin();
};

function setAuth(token) {
  localStorage.setItem('authToken', token);
}
function getAuth() {
  return localStorage.getItem('authToken');
}
function clearAuth() {
  localStorage.removeItem('authToken');
}

function showMainContent() {
  authContainer.style.display = 'none';
  mainContent.style.display = 'block';
}
function showAuthForms() {
  authContainer.style.display = 'block';
  mainContent.style.display = 'none';
}

// Signup
if (document.getElementById('signup-btn')) {
  document.getElementById('signup-btn').onclick = async function() {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    if (!username || !password) {
      authMessage.textContent = 'Please enter username and password.';
      return;
    }
    authMessage.textContent = 'Signing up...';
    try {
      const res = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        authMessage.style.color = '#28a745';
        authMessage.textContent = 'Signup successful! You can now login.';
        showLogin();
      } else {
        authMessage.style.color = '#d00';
        authMessage.textContent = data.error || 'Signup failed.';
      }
    } catch (err) {
      authMessage.style.color = '#d00';
      authMessage.textContent = 'Network error.';
    }
  };
}

// Login
if (document.getElementById('login-btn')) {
  document.getElementById('login-btn').onclick = async function() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    if (!username || !password) {
      authMessage.textContent = 'Please enter username and password.';
      return;
    }
    authMessage.textContent = 'Logging in...';
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success && data.token) {
        setAuth(data.token);
        showMainContent();
        authMessage.textContent = '';
      } else {
        authMessage.style.color = '#d00';
        authMessage.textContent = data.error || 'Login failed.';
      }
    } catch (err) {
      authMessage.style.color = '#d00';
      authMessage.textContent = 'Network error.';
    }
  };
}

// Logout
if (logoutBtn) {
  logoutBtn.onclick = function() {
    clearAuth();
    showAuthForms();
  };
}

// On page load, check auth
window.addEventListener('DOMContentLoaded', () => {
  if (getAuth()) {
    showMainContent();
  } else {
    showAuthForms();
  }
});