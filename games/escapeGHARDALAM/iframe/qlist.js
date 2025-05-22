const ql = [
    // Regular questions (1-40)
    {
        q: "What is the capital of Malta?",
        a: "Valletta", b: "Mdina", c: "Victoria", d: "Marsaxlokk",
        correct: "a"
    },
    {
        q: "Għar Dalam means:",
        a: "Cave of Light", b: "Cave of Darkness", c: "Elephant Cave", d: "Ancient Cave",
        correct: "b"
    },
    {
        q: "What prehistoric animal remains were found in Għar Dalam?",
        a: "Dinosaurs", b: "Woolly mammoths", c: "Dwarf elephants", d: "Saber-toothed tigers",
        correct: "c"
    },
    {
        q: "Which period do the oldest remains in Għar Dalam date back to?",
        a: "Neolithic", b: "Paleolithic", c: "Mesolithic", d: "Bronze Age",
        correct: "b"
    },
    {
        q: "What is the length of Għar Dalam cave?",
        a: "50 meters", b: "144 meters", c: "200 meters", d: "350 meters",
        correct: "b"
    },
    {
        q: "Which museum is located at Għar Dalam?",
        a: "Natural History Museum", b: "Archaeology Museum", c: "Folk Museum", d: "War Museum",
        correct: "a"
    },

    // Additional 35 questions about Għar Dalam
    {
        q: "What type of rock is Għar Dalam mainly composed of?",
        a: "Limestone", b: "Sandstone", c: "Granite", d: "Marble",
        correct: "a"
    },
    {
        q: "How old are the earliest deposits found in Għar Dalam?",
        a: "500,000 years", b: "180,000 years", c: "2 million years", d: "10,000 years",
        correct: "b"
    },
    {
        q: "Which small animals' remains are found abundantly in Għar Dalam?",
        a: "Rabbits", b: "Birds", c: "Dormice", d: "Bats",
        correct: "c"
    },
    {
        q: "What was the original purpose of Għar Dalam during prehistoric times?",
        a: "Dwelling place", b: "Religious site", c: "Burial site", d: "Hunting ground",
        correct: "a"
    },
    {
        q: "Which two distinct layers can be observed in Għar Dalam?",
        a: "Red clay and white limestone", b: "Dark and light sediment", c: "Bone and cultural layer", d: "Fossil and volcanic layer",
        correct: "c"
    },
    {
        q: "What evidence suggests Għar Dalam was once submerged underwater?",
        a: "Marine fossils", b: "Salt deposits", c: "Coral formations", d: "Ancient seaweed",
        correct: "a"
    },
    {
        q: "Who was the first archaeologist to study Għar Dalam?",
        a: "Sir Themistocles Zammit", b: "Giovanni Battista", c: "Richard Leach", d: "Charles Darwin",
        correct: "a"
    },
    {
        q: "In which year was Għar Dalam officially opened to the public?",
        a: "1865", b: "1933", c: "1920", d: "1952",
        correct: "b"
    },
    {
        q: "What significant cultural artifacts were discovered in Għar Dalam?",
        a: "Pottery and tools", b: "Gold jewelry", c: "Hieroglyphs", d: "Megalithic stones",
        correct: "a"
    },
    {
        q: "What animal extinction is associated with the findings at Għar Dalam?",
        a: "Dodo", b: "Dwarf elephants", c: "Tasmanian tiger", d: "Giant sloths",
        correct: "b"
    },
    {
        q: "What layer of Għar Dalam is richest in fossils?",
        a: "Topsoil layer", b: "Cultural layer", c: "Bone layer", d: "Limestone base",
        correct: "c"
    },
    {
        q: "What caused the extinction of many species found in Għar Dalam?",
        a: "Climate change", b: "Overhunting", c: "Volcanic eruption", d: "Disease",
        correct: "a"
    },
    {
        q: "Which prehistoric tool material is most commonly associated with Għar Dalam?",
        a: "Flint", b: "Obsidian", c: "Bone", d: "Wood",
        correct: "a"
    },
    {
        q: "What is the temperature inside Għar Dalam?",
        a: "Constant at 20°C", b: "Varies with seasons", c: "Constant at 15°C", d: "Constant at 10°C",
        correct: "c"
    },
    {
        q: "Which civilization is believed to have first inhabited the area near Għar Dalam?",
        a: "Romans", b: "Phoenicians", c: "Early Neolithic settlers", d: "Byzantines",
        correct: "c"
    },
    {
        q: "How was Għar Dalam formed?",
        a: "By volcanic activity", b: "By river erosion", c: "By tectonic movements", d: "By glacial activity",
        correct: "b"
    },
    {
        q: "What type of tools were discovered in Għar Dalam?",
        a: "Iron tools", b: "Bone tools", c: "Stone tools", d: "Bronze tools",
        correct: "c"
    },
    {
        q: "What did Għar Dalam provide to early humans?",
        a: "Food storage", b: "Natural shelter", c: "Water source", d: "Religious sanctuary",
        correct: "b"
    },
    {
        q: "Which Maltese saint is associated with the Għar Dalam region?",
        a: "St. Paul", b: "St. Agatha", c: "St. George", d: "St. Francis",
        correct: "a"
    },
    {
        q: "What geological process revealed Għar Dalam?",
        a: "Erosion", b: "Earthquake", c: "Tectonic uplift", d: "Volcanic eruption",
        correct: "a"
    },
    {
        q: "What type of sediment indicates past flooding in Għar Dalam?",
        a: "Silt deposits", b: "Clay deposits", c: "Sand layers", d: "Ash layers",
        correct: "b"
    },
    {
        q: "What kind of guided activities are available at Għar Dalam today?",
        a: "Archaeological digs", b: "Nature walks", c: "Educational tours", d: "Art workshops",
        correct: "c"
    },
    {
        q: "Which bird species' fossils were found in Għar Dalam?",
        a: "Eagle", b: "Pigeon", c: "Swallow", d: "Duck",
        correct: "d"
    },
    {
        q: "What evidence suggests early trade near Għar Dalam?",
        a: "Foreign pottery", b: "Coins", c: "Exotic animal remains", d: "Imported tools",
        correct: "a"
    },
    {
        q: "How many layers of deposits are present in Għar Dalam?",
        a: "3", b: "5", c: "7", d: "10",
        correct: "b"
    },
    {
        q: "What was a major challenge in preserving Għar Dalam?",
        a: "Vandalism", b: "Climate effects", c: "Urbanization", d: "Flooding",
        correct: "b"
    },
    {
        q: "Who owns and manages Għar Dalam today?",
        a: "Local government", b: "Heritage Malta", c: "Private entity", d: "UNESCO",
        correct: "b"
    },
    {
        q: "Which layer contains evidence of human activity?",
        a: "Topsoil", b: "Cultural layer", c: "Bone layer", d: "Rock base",
        correct: "b"
    },
    {
        q: "What is the main focus of Għar Dalam's museum exhibits?",
        a: "Ancient tools", b: "Natural history", c: "Cultural development", d: "Marine biology",
        correct: "b"
    },

    // Special cells (41-45)
    {
        q: "SPECIAL: You found a shortcut!",
        p: "Move forward 5 spaces!",
        special: "move_forward",
        value: 5
    },
    {
        q: "SPECIAL: Oh no! Cave collapse!",
        p: "Move back 3 spaces!",
        special: "move_back",
        value: 3
    },
    {
        q: "SPECIAL: Bonus roll!",
        p: "Roll the dice again!",
        special: "extra_turn"
    },
    {
        q: "SPECIAL: Stuck in the cave!",
        p: "Skip next turn!",
        special: "skip_turn"
    },
    {
        q: "SPECIAL: Secret passage!",
        p: "Teleport to space 30!",
        special: "teleport",
        value: 30
    }
];
