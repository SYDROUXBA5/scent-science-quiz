// Question bank. In each multiple-choice question the first option is the
// correct one; the page shuffles options before showing them.
// True/false questions use `tf` (the correct value) instead of `o`.
(function () {
  const L1 = 'Lecture: olfaction, molecular mass and headspace';
  const L2 = 'Lecture: odor detection and training critique';
  const S = (title) => 'Slide: ' + title;

  const topics = [
    { id: 'green', name: 'Green dogs and selection' },
    { id: 'imprint', name: 'Target odor imprinting' },
    { id: 'headspace', name: 'Headspace and molecular mass' },
    { id: 'movement', name: 'How odor moves and ages' },
    { id: 'theories', name: 'Theories of olfaction' },
    { id: 'surface', name: 'Surface area and det cord' },
    { id: 'drugs', name: 'Drug odors' },
    { id: 'explosives', name: 'Explosive odors' },
    { id: 'cadaver', name: 'Cadaver and other odors' },
    { id: 'aids', name: 'Training aids and storage' },
    { id: 'steps', name: 'Approaches, rewards and steps' },
    { id: 'signal', name: 'Signal and hearing dogs' },
  ];

  const questions = [
    // ── Green dogs and selection ─────────────────────────────────────────
    {
      t: 'green',
      q: 'When testing a green dog, what does the instructor mean by trainability?',
      o: [
        'Willingness to engage with humans and to take toys and food',
        'Knowing sit, down and recall before it arrives',
        'Having already earned a sport title',
        'Being calm enough to ignore toys and food',
      ],
      e: 'Trainability is engagement with humans: will the dog engage, take toys, take food? Sociability, environmental stability and requisite drives are assessed separately.',
      s: L2,
    },
    {
      t: 'green',
      q: 'Which selection trait is described as one of the bigger ones that fail dogs out?',
      o: ['Environmental stability', 'Sociability with other animals', 'Coat and ear type', 'Retrieving on command'],
      e: 'The dog has to cope with steps, open grates, slick floors, ceiling fans, buildings and riding in cars without getting car sick.',
      s: L2,
    },
    {
      t: 'green',
      q: 'What makes a dog "green"?',
      o: [
        'It has been tested and selected for aptitude but has had no training',
        'It has finished imprinting but has not yet learned an alert',
        'It has trained toward a sport title without earning it',
        'It is under a year old and has not been tested for working aptitude',
      ],
      e: 'A green dog may have had some development (hunting skills, biting equipment) but no training: no out, no recall, no sit, no down. Many do not know their names.',
      s: L2,
    },
    {
      t: 'green',
      q: 'What is a pre-titled dog?',
      o: [
        'A dog with much of the training for a title such as IGP 1 that never earned it',
        'A dog selected for detection work that has not yet been imprinted',
        'A dog that has passed its first detection certification but not its second',
        'A puppy bred from two titled parents and sold before it is tested',
      ],
      e: 'A titled dog has earned the title; a pre-titled dog has not, and costs a little less. The instructor warns that dogs with extensive prior training tend to come with "skeletons in the closet" that only show once you work them.',
      s: L2,
    },
    {
      t: 'green',
      q: 'Dogs for a monorail police unit were tested on a train before any detection training began. Why?',
      o: [
        'A dog that is uncomfortable where it will work is no good, and he will not spend months acclimating it',
        'Train carriages hold odor better than buildings do, so imprinting goes faster there',
        'Dogs imprint faster on a moving floor, so the train doubles as a training tool',
        'A riding test can replace the usual checks for environmental stability and drives',
      ],
      e: 'Selection adds job-specific checks. The same goes for water cadaver dogs, which must be stable in a boat: either they have it up front or they do not.',
      s: L2,
    },

    // ── Target odor imprinting ───────────────────────────────────────────
    {
      t: 'imprint',
      q: 'According to the lecture, what is the minimum time of contact a dog should have with each individual odor?',
      o: ['75 minutes', '15 minutes', '30 minutes', '150 minutes'],
      e: 'Every dog gets at least 75 minutes of contact with each odor. The slide gives 60 to 75 minutes as the contact time that produces the greatest odor fluency.',
      s: L2 + ' · ' + S('Target Odor Imprinting'),
    },
    {
      t: 'imprint',
      q: 'How does the slide define target odor imprinting?',
      o: [
        'Pairing target odor to a powerful reinforcer in a way that creates a favored association and odor fluency',
        'Teaching the dog to identify productive areas in a variety of environments',
        'Developing a consistent series of articulable changes in behavior at target odor',
        'Teaching the dog to disregard influential stimuli in the search environment',
      ],
      e: 'The other three options are the slide definitions of skills training, behavior shaping and proofing.',
      s: S('Target Odor Imprinting'),
    },
    {
      t: 'imprint',
      q: 'What is the general-rule imprinting tool in this method?',
      o: [
        'A Schedule 40 PVC pipe with drilled holes that the dog carries in its mouth',
        'A row of wooden boxes, one of which holds the odor, that the dog checks in turn',
        'A scent wheel with eight arms that the handler spins between repetitions',
        'A sealed glass jar that the dog sniffs through a mesh lid on cue',
      ],
      e: 'The dog carries the pipe while it gets play, freedom and social interaction, so contact time with the odor builds quickly.',
      s: L2,
    },
    {
      t: 'imprint',
      q: 'On average, total training time is about what share of time of contact?',
      o: ['150 percent', '50 percent', '100 percent', '300 percent'],
      e: 'Sixty minutes of time of contact takes about 90 minutes of total training time. Bomb dogs average 15 odors, so the contact hours add up.',
      s: L2,
    },
    {
      t: 'imprint',
      q: 'The imprint research ran half the dogs on boxes and half on the PVC pipe. What did it find?',
      o: [
        'No difference in performance, but the pipe got to 75 minutes far more efficiently',
        'Boxes produced more reliable dogs, although setup took a little longer',
        'The pipe worked for floppy-eared breeds only, so boxes remain the default',
        'Boxes were faster, because the nose sits closer to the odor at each visit',
      ],
      e: 'With boxes, contact only counts while the nose is within an inch to an inch and a half of the opening, which is seconds at a time.',
      s: L2,
    },
    {
      t: 'imprint',
      q: 'What does a significantly reduced time of contact produce?',
      o: [
        'A dog that appears to know the odor but may know only one component of its headspace',
        'A dog that shows no change of behavior at all when it meets the odor',
        'A dog that alerts reliably on large quantities but never on small ones',
        'A dog that knows the full odor profile but forgets it within a few weeks',
      ],
      e: 'The dog still shows a change of behavior, so to the human eye it "knows odor". In the lecture\'s example it knows one of 18 components available in the headspace.',
      s: L2,
    },
    {
      t: 'imprint',
      q: 'During imprinting, the dog is asked to search boxes and perform obedience.',
      tf: false,
      e: 'Nothing is asked of the dog: no boxes, no searching, no obedience. It gets verbal praise, play, social interaction and freedom while it carries the pipe.',
      s: L2,
    },

    // ── Headspace and molecular mass ─────────────────────────────────────
    {
      t: 'headspace',
      q: 'When was headspace technology developed, and by whom?',
      o: [
        'In the 1980s, by makers of perfumes, colognes and candles',
        'In the 1950s, by military explosives chemists',
        'In the 1990s, by detection dog trainers',
        'In the 2000s, by drug enforcement laboratories',
      ],
      e: 'It was built to mimic a fragrance in products that do not contain the original material.',
      s: L2 + ' · ' + S('Headspace Technology'),
    },
    {
      t: 'headspace',
      q: 'What does headspace technology do?',
      o: [
        'Captures and identifies the molecules in the air around a material, so the smell can be recreated',
        'Measures how far each component of an odor travels from a hide over time',
        'Weighs a sample of material to work out its relative molecular mass',
        'Strips contaminants out of a training aid so only the target remains',
      ],
      e: 'The slide calls it a fragrance decoder. A candle that smells like apple pie has no apple pie in it.',
      s: S('Headspace Technology'),
    },
    {
      t: 'headspace',
      q: 'According to the slide, odorants tend to have a relative molecular mass (RMM) of what?',
      o: ['Less than 300', 'More than 300', 'Exactly 303', 'Less than 30'],
      e: 'Odorant molecules are normally quite small. The lecture treats 300 as the point above which a molecule is too heavy to bounce free and reach the dog\'s olfactory system.',
      s: S('Molecular Mass (RMM)') + ' · ' + L1,
    },
    {
      t: 'headspace',
      q: 'Cocaine has a molecular mass of 303.353 g/mol. What does the lecture conclude from that?',
      o: [
        'There is no cocaine in the headspace of cocaine',
        'Cocaine is the strongest-smelling component of its own headspace',
        'Cocaine can only be detected once it is heated',
        'Dogs detect cocaine by taste rather than smell',
      ],
      e: 'In the lecture, the headspace of real cocaine is made up of other, lighter components and contaminants.',
      s: L1 + ' · ' + S('Cocaine'),
    },
    {
      t: 'headspace',
      q: 'Which drug does the lecture single out as light enough to be present in its own headspace?',
      o: ['Methamphetamine', 'Cocaine', 'Heroin', 'LSD'],
      e: 'The slide lists methamphetamine at 149.23 g/mol. That is why, the instructor says, soaks made from meth contain meth and will test positive.',
      s: L1 + ' · ' + S('Methamphetamines'),
    },
    {
      t: 'headspace',
      q: 'Which analytical method do most people use to analyze the headspace of target odors?',
      o: ['GC-MS', 'X-ray diffraction', 'Litmus testing', 'Infrared thermography'],
      e: 'Gas chromatography with mass spectrometry. It is less rudimentary than the glassware used for air fresheners and candles, but a similar setup.',
      s: L2,
    },

    // ── How odor moves and ages ──────────────────────────────────────────
    {
      t: 'movement',
      q: 'At what temperature does molecular bounce stop altogether?',
      o: ['0 Kelvin', '0 degrees Celsius', '0 degrees Fahrenheit', '70 degrees Fahrenheit'],
      e: 'Absolute zero, about minus 273 degrees Celsius. Anything above 0 K has molecular activity, so the molecules in a solid at room temperature are bouncing.',
      s: L1,
    },
    {
      t: 'movement',
      q: 'Why are training aids kept in the freezer?',
      o: [
        'Cold slows the molecular bounce, so the material keeps producing odor for longer',
        'Cold stops the molecules moving entirely, so nothing is lost from the aid',
        'Cold makes the odor stronger for the first hour after the aid comes out',
        'Cold kills the contaminants that would otherwise build up on the aid',
      ],
      e: 'Slowed, not stopped. The storage slide agrees: reduced temperatures preserve odor production properties.',
      s: L1 + ' · ' + S('Handling & Storage'),
    },
    {
      t: 'movement',
      q: 'A pound of material sits in the middle of a room. Which of its molecules reach the back wall first?',
      o: ['The lightest ones', 'The heaviest ones', 'They all arrive together', 'Only the target molecule itself'],
      e: 'Components leave the material lightest first and do not travel at the same rate. The heaviest that can leave arrive last, and the very heaviest never leave.',
      s: L1,
    },
    {
      t: 'movement',
      q: 'Dogs working a hide of over 100 pounds of TNT alert 30 to 40 meters from source. How does the instructor explain it?',
      o: [
        'They only know the light components that travel that far; closer in, the odor picture changes',
        'They are overwhelmed by the sheer amount of odor and cannot bear to go closer',
        'They are reading the handler\'s body language rather than working the odor',
        'Large hides give off less odor than small ones, so the dogs alert early',
      ],
      e: 'He rejects "overwhelmed". A dog trained on small amounts recognizes the light components at a distance; closer in, components it never learned join the picture.',
      s: L1,
    },
    {
      t: 'movement',
      q: 'Where does a dog that knows every component in the headspace give its indication?',
      o: [
        'At source, where all of the components are present together',
        'At the first point where it meets the lightest component',
        'Downwind, at the outer edge of the odor',
        'Wherever the handler slows down',
      ],
      e: 'In the lecture, this is why a dog imprinted on the full profile works 100 pounds just as it works four ounces.',
      s: L1,
    },
    {
      t: 'movement',
      q: 'Which two things does the lecture say degrade and eventually destroy materials and their odor?',
      o: ['Oxygen and UV radiation', 'Humidity and cold', 'Nitrogen and darkness', 'Dust and vibration'],
      e: 'The example is a black T-shirt left in the rear window of a car. Explosives, drugs and odor are said to degrade in the same way.',
      s: L1,
    },

    // ── Theories of olfaction ────────────────────────────────────────────
    {
      t: 'theories',
      q: 'What does the docking, or "lock and key", theory of olfaction propose?',
      o: [
        'Shape-based molecular interactions create a process that signals smells to the brain',
        'Odor molecules vibrate at frequencies the nose reads the way the ear reads sound',
        'Smell is carried by electrical charge on dust particles',
        'Each nostril detects a different half of the odor',
      ],
      e: 'The slide calls it the mainstream theory of olfaction in commercial fragrance chemistry and molecular biology.',
      s: S('Docking Theory'),
    },
    {
      t: 'theories',
      q: 'In the lock and key diagram, which is the lock and which is the key?',
      o: [
        'The lock is the enzyme and the key is the substrate',
        'The lock is the substrate and the key is the enzyme',
        'The lock is the nose and the key is the brain',
        'The lock is the headspace and the key is the material',
      ],
      e: 'The substrate binds the enzyme\'s active site to form the enzyme-substrate complex. Each enzyme is specific to one substrate shape.',
      s: S('Docking Theory') + ' · ' + L1,
    },
    {
      t: 'theories',
      q: 'Which theory does the instructor say makes more sense to him?',
      o: ['Vibrational energy theory', 'Lock and key theory', 'Particle size theory', 'Humoral theory'],
      e: 'He presents lock and key as the accepted theory and says he struggles with it. This preference is his own view.',
      s: L1,
    },
    {
      t: 'theories',
      q: 'What comparison does the lecture use to support the vibrational energy theory?',
      o: [
        'Ears and eyes receive vibrational energy as sound and light, so the nose may do the same for odor',
        'Odor spreads through a room the way water finds its way downhill to the lowest point',
        'Smell works like a magnet, with each receptor pulling in its own molecule',
        'The nose sorts odor the way a sieve sorts grains, by the size of each particle',
      ],
      e: 'The slide lines up sound waves with audio receptors, light waves with visual receptors, and "???" with olfactory receptors.',
      s: L1 + ' · ' + S('Waves and Vibrational Energy Theory'),
    },
    {
      t: 'theories',
      q: 'What is the instructor\'s objection to lock and key?',
      o: [
        'Covering every smell we can interpret would take an enormous number of locks and keys',
        'It has never been tested in a laboratory or published in a journal',
        'It applies to dogs but has never been shown to apply to humans',
        'It cannot explain why heavier molecules smell stronger than light ones',
      ],
      e: 'He asks how many little locks and little keys it would take to make up all the smells humans can interpret.',
      s: L1,
    },

    // ── Surface area and det cord ────────────────────────────────────────
    {
      t: 'surface',
      q: 'According to the lecture, what is the most important factor in odor production and odor availability?',
      o: ['Surface area', 'Mass', 'Volume', 'The age of the material'],
      e: 'People usually reach for mass, quantity or volume to increase odor. Slicing an onion shows the real lever: more surface area, more odor within seconds.',
      s: L2 + ' · ' + S('Surface Area'),
    },
    {
      t: 'surface',
      q: 'Twelve ounces of gasoline in an open bottle is hard to smell from the doorway. Sprayed on the concrete, it is easy. What changed?',
      o: ['Only the surface area', 'The volume', 'The mass', 'The temperature'],
      e: 'Same volume, same mass, same 60 seconds. Only the surface area is different.',
      s: L2,
    },
    {
      t: 'surface',
      q: 'A kilo of cocaine always has more odor availability than the one ounce a team has been training on.',
      tf: false,
      e: 'Depending on how it is prepared and packaged, the kilo could be lower in odor availability and odor production than the ounce.',
      s: L2,
    },
    {
      t: 'surface',
      q: 'A handler swaps an 8-inch piece of det cord with taped ends for a 100-foot roll. What actually increases?',
      o: [
        'The surface area of polyethylene tubing, a non-target material',
        'The exposed surface area of the explosive',
        'The molecular mass of the explosive',
        'The number of components in the explosive\'s headspace',
      ],
      e: 'The explosive inside det cord, PETN, is only exposed at the two ends whatever the length. A bigger roll adds casing, not target odor.',
      s: L2,
    },
    {
      t: 'surface',
      q: 'In the study the instructor describes, roughly what share of bomb dogs responded to virgin polyethylene tubing that had never touched explosives?',
      o: ['93 percent', '4 percent', '30 percent', '50 percent'],
      e: 'About 4 percent responded to the PETN that had been pulled out of the cord. For many dogs the tubing had become the cue that they were about to be paid.',
      s: L2,
    },

    // ── Drug odors ───────────────────────────────────────────────────────
    {
      t: 'drugs',
      q: 'Which agency appears on the drug odors slide, in connection with the licensure often needed to store and maintain them?',
      o: [
        'The US Drug Enforcement Administration',
        'The Bureau of Alcohol, Tobacco, Firearms and Explosives',
        'The Food and Drug Administration',
        'Customs and Border Protection',
      ],
      e: 'The slide shows the DEA Diversion Control Division. The explosive odors slide shows the ATF.',
      s: S('Drug Odors'),
    },
    {
      t: 'drugs',
      q: 'Which chemical name does the slide give for heroin?',
      o: ['Diacetylmorphine', 'Benzoylmethylecgonine', 'Phencyclidine', 'N-methylamphetamine'],
      e: 'Benzoylmethylecgonine is cocaine, phencyclidine is PCP and N-methylamphetamine is methamphetamine.',
      s: S('Heroin'),
    },
    {
      t: 'drugs',
      q: 'Which heroin grade does the slide list as the purest form, a white powder?',
      o: ['#4', '#3', '#2', '#1'],
      e: '#3 is the "brown sugar" base. #1 and #2 are unprocessed raw.',
      s: S('Heroin'),
    },
    {
      t: 'drugs',
      q: 'Going by the molar masses on the slides, which group falls entirely under 300 g/mol?',
      o: [
        'Methamphetamine, MDMA and PCP',
        'Cocaine, heroin and LSD',
        'Marijuana, cocaine and PCP',
        'Heroin, MDMA and LSD',
      ],
      e: 'Methamphetamine 149.23, MDMA 193.25, PCP 243.38. Cocaine 303.35, marijuana 314.46, LSD 323.43 and heroin 369.41 are all above 300.',
      s: 'Slides: drug odors',
    },

    // ── Explosive odors ──────────────────────────────────────────────────
    {
      t: 'explosives',
      q: 'What does RDX stand for on the slide?',
      o: [
        'Research Department Explosive',
        'Rapid Detonation Explosive',
        'Reinforced Demolition Explosive',
        'Reactive Dinitro Xylene',
      ],
      e: 'Also called hexogen. It is used in detonators and det cord, and mixed into Composition 4 and Semtex.',
      s: S('RDX'),
    },
    {
      t: 'explosives',
      q: 'Which explosive is the one against which the power of all other explosives is measured?',
      o: ['TNT', 'RDX', 'PETN', 'Black powder'],
      e: 'Trinitrotoluene, 227.13 g/mol on the slide, shown in flake, cast and block forms. The comparison is abbreviated RE.',
      s: S('TNT'),
    },
    {
      t: 'explosives',
      q: 'How do the slides classify potassium chlorate and sodium chlorate?',
      o: ['Oxidizers', 'Propellants', 'Primary explosives', 'Plasticizers'],
      e: 'Smokeless powder is the propellant on the slides; common formulations of it contain nitrocellulose, also known as gun cotton.',
      s: 'Slides: Potassium Chlorate, Sodium Chlorate',
    },
    {
      t: 'explosives',
      q: 'How does the slide describe ammonium nitrate?',
      o: [
        'A readily available fertilizer that can be used to make an improvised explosive',
        'A military plastic explosive that is usually mixed with plasticizers and fuel oil',
        'A propellant used in ammunition, with formulations that contain nitrocellulose',
        'A peroxide-based primary explosive that is highly volatile',
      ],
      e: 'The slide pairs AN with ANFO and the Oklahoma City bombing.',
      s: S('Ammonium Nitrate'),
    },
    {
      t: 'explosives',
      q: 'The lecture lists the shoe bomb, the underwear bomb and the attacks in Paris and Brussels. Which explosive do they have in common?',
      o: ['TATP', 'RDX', 'ANFO', 'Semtex'],
      e: 'Triacetone triperoxide, a peroxide-based explosive. The slide notes its nickname, "Mother of Satan", and that it is highly volatile. HMTD is the other peroxide-based explosive covered.',
      s: L2 + ' · ' + S('TATP'),
    },
    {
      t: 'explosives',
      q: 'What does the instructor claim about bomb dogs in the United States and peroxide-based explosives?',
      o: [
        'More than 95 percent have had no real exposure to them',
        'Most are trained on them every week',
        'They are the first odors every bomb dog learns',
        'Dogs are physically unable to smell them',
      ],
      e: 'This is the instructor\'s own assessment, based on testing he says he has seen. He argues that selling such teams mainly as a deterrent risks a false sense of security.',
      s: L2,
    },
    {
      t: 'explosives',
      q: 'The instructor criticizes a test where one gram of explosive sits in a vial inside a cinder block. What is his point?',
      o: [
        'The cinder block has by far the greatest surface area, and cinder blocks have a smell',
        'One gram gives off too much odor for a dog to work at close range',
        'Glass vials absorb the odor of the explosive within a few hours',
        'Cinder blocks are too heavy to move, so the hide is always in the same place',
      ],
      e: 'It is the surface area argument again: the largest odor source in that setup is not the target material.',
      s: L2,
    },

    // ── Cadaver and other odors ──────────────────────────────────────────
    {
      t: 'cadaver',
      q: 'What does the slide say about human blood as a cadaver training odor?',
      o: [
        'Use various types, vary race, sex and ethnicity, and use both dried and wet versions',
        'Use only fresh blood from a single donor, so the odor stays consistent',
        'Use animal blood, because it is chemically identical to human blood',
        'Use dried blood only, because wet blood contaminates the other aids',
      ],
      e: 'Tissue and hair carry the same instruction to vary race, sex and ethnicity. Bone is listed as dry and wet. Cadaver odors can be difficult to source and store.',
      s: S('Blood'),
    },
    {
      t: 'cadaver',
      q: 'Which species does the slide list for bed bug detection?',
      o: [
        'Cimex lectularius and Cimex hemipterus',
        'Ixodes scapularis and Ixodes ricinus',
        'Blattella germanica and Periplaneta americana',
        'Reticulitermes flavipes and Coptotermes formosanus',
      ],
      e: 'The slide notes that Cimex species vary. The other options are ticks, cockroaches and termites.',
      s: S('Other Odors'),
    },
    {
      t: 'cadaver',
      q: 'Which statement matches the "other odors" slide?',
      o: [
        'Many of the molds used for training are carcinogenic',
        'Termite training aids need no upkeep once collected',
        'Conservation dogs are trained only on live animals',
        'Bed bug odor is identical across all species',
      ],
      e: 'The slide also says termite colony care is important for maintaining training aids, and that conservation work can use various animal species and scat.',
      s: S('Other Odors'),
    },

    // ── Training aids and storage ────────────────────────────────────────
    {
      t: 'aids',
      q: 'What does CFTA stand for?',
      o: [
        'Chemically Formulated Training Aid',
        'Certified Field Training Asset',
        'Controlled Fragrance Testing Agent',
        'Canine Federal Training Authorization',
      ],
      e: 'These "pseudo" materials do not require licensure. The slide adds that "real" materials may be the only option in certain circumstances.',
      s: S('Training Aids'),
    },
    {
      t: 'aids',
      q: 'How should training aid odors be stored?',
      o: [
        'In separate, airtight containers',
        'Together in one sealed container, grouped by type',
        'In open containers so the odor can develop',
        'In paper bags at room temperature',
      ],
      e: 'Keeping odors separate avoids cross-contamination, and reduced temperatures preserve odor production. Aids should also be handled so as not to damage or contaminate them.',
      s: S('Handling & Storage'),
    },
    {
      t: 'aids',
      q: 'According to the lecture, what does a ScentLogix cocaine aid contain?',
      o: [
        'The components that make up the odor profile of cocaine, with no cocaine in it',
        'A trace amount of real cocaine on an inert carrier, sealed in a vial',
        'Only the single lightest component of the headspace, at high strength',
        'Real cocaine diluted to just below the legal threshold for licensure',
      ],
      e: 'The instructor compares it to an air freshener and calls it the cleanest odor picture you can present, because it is free of the contaminants in real material. That assessment is his own.',
      s: L1,
    },
    {
      t: 'aids',
      q: 'A dog imprinted on the full synthetic profile does not alert on a real training aid. What does the instructor say to do?',
      o: [
        'Pull that aid from training, because the dog has just told you it is no good',
        'Put pressure on the dog until it alerts, so it learns the real material',
        'Reward the dog at the aid anyway, because the aid is known to be there',
        'Re-imprint the dog on the real aid for another 75 minutes of contact',
      ],
      e: 'If the real material has anything left, the dog should find it every time. Pressuring and then rewarding the dog there teaches it something it has never smelled before.',
      s: L1,
    },

    // ── Approaches, rewards and steps ────────────────────────────────────
    {
      t: 'steps',
      q: 'Which training approach is described as one where the dog learns that odor is a means to an end?',
      o: ['On-Target', 'Simple Direct Association', 'DFR / CST', 'Cocktail imprinting'],
      e: 'Simple Direct Association builds the association odor = reward. DFR / CST is used by the US military and teaches in stages.',
      s: S('Prominent Detection Dog Training Approaches'),
    },
    {
      t: 'steps',
      q: 'On the reward delivery slide, what is a delayed secondary reinforcer?',
      o: ['An indirect reward', 'A food reward', 'A direct reward', 'A verbal correction'],
      e: 'Primary reinforcer: food reward. Immediate secondary reinforcer: direct reward. Delayed secondary reinforcer: indirect reward.',
      s: S('Reward Delivery Methods'),
    },
    {
      t: 'steps',
      q: 'What is detection behavior shaping?',
      o: [
        'Developing an obvious, consistent series of articulable changes in behavior when the dog encounters target odor',
        'Teaching the dog to disregard a variety of influential stimuli in the search environment',
        'Pairing target odor to a powerful reinforcer to create a favored association',
        'Teaching the dog to identify productive areas when working in a variety of environments',
      ],
      e: 'Behaviors should be captured and shaped without influence, and undesirable ones extinguished by withholding reinforcement.',
      s: S('Detection Behavior Shaping'),
    },
    {
      t: 'steps',
      q: 'Which set lists the four kinds of stimuli that proofing should include?',
      o: [
        'Olfactory, audible, physical and visual',
        'Olfactory, thermal, social and visual',
        'Food, toy, praise and freedom',
        'Vehicles, buildings, parcels and open areas',
      ],
      e: 'Olfactory proofing uses distractors and controls. Proofing is the intentional process of teaching the dog to disregard influential stimuli in the search environment.',
      s: S('Detection Proofing'),
    },
    {
      t: 'steps',
      q: 'What is detection skills training for?',
      o: [
        'Teaching the dog to identify productive areas in vehicles, buildings, parcels and open areas',
        'Building the first favored association between target odor and a powerful reinforcer',
        'Extinguishing unwanted responses to olfactory, audible, physical and visual stimuli',
        'Shaping an obvious, consistent change of behavior when the dog meets target odor',
      ],
      e: 'Productive areas are taught through aid placement.',
      s: S('Detection Skills Training'),
    },
    {
      t: 'steps',
      q: 'In what order do the slides number these four steps?',
      o: [
        'Imprinting, behavior shaping, proofing, skills training',
        'Skills training, imprinting, proofing, behavior shaping',
        'Behavior shaping, imprinting, skills training, proofing',
        'Proofing, imprinting, behavior shaping, skills training',
      ],
      e: 'They are steps 01 to 04 of the six essential steps to creating a successful detection dog team.',
      s: 'Slides: 6 Essential Steps',
    },

    // ── Signal and hearing dogs ──────────────────────────────────────────
    {
      t: 'signal',
      q: 'What is a signal or hearing dog?',
      o: [
        'An assistance dog trained to alert a deaf or hard of hearing handler to important sounds',
        'A detection dog that signals a find by barking instead of sitting or staring',
        'A patrol dog trained to respond to whistle and hand signals at a distance',
        'A guide dog that leads a handler with low vision around obstacles',
      ],
      e: 'The slide gives doorbells, smoke alarms, ringing telephones and alarm clocks as examples.',
      s: S('Definition'),
    },
    {
      t: 'signal',
      q: 'According to the timeline, who trained the first federally recognized hearing dog, and when?',
      o: [
        'Sally Terroux of Denver, Colorado, in 1968',
        'International Hearing Dog, Inc., in 1975',
        'The Humane Society, in 1976',
        'The SPCA, in 1977',
      ],
      e: 'International Hearing Dog, Inc. (1975) was the first institution to train dogs to assist Deaf and hard of hearing people. In 1977 the SPCA began temperament testing and training shelter dogs with donations from the Lions Foundation.',
      s: S('History'),
    },
    {
      t: 'signal',
      q: 'What does upper-case "Deaf" refer to?',
      o: [
        'A group of deaf people who share a language and culture',
        'The audiological condition of not hearing',
        'Hearing loss that began late in life',
        'Hearing loss that a hearing aid can correct',
      ],
      e: 'Lower-case "deaf" is the audiological condition. "Hard of hearing" means there may be enough residual hearing that a hearing aid or FM system helps process speech.',
      s: S('"Hearing Impaired" Terminology'),
    },
    {
      t: 'signal',
      q: 'Which of these is not an alert type for a hearing dog?',
      o: ['Barking', 'Pawing', 'Jumping', 'Touching with the nose'],
      e: 'The slide lists pawing, jumping and touching with the nose, and states "No barking".',
      s: S('Sound Alert Training'),
    },
    {
      t: 'signal',
      q: 'How many trips between the sound and the handler should training build toward?',
      o: ['At least 6', 'At least 2', 'Exactly 3', 'At least 10'],
      e: 'After that: vary the reward schedule and number of trips, fade out the partner, generalize where the device sits and the location, then add distractions.',
      s: S('Successive Approximations'),
    },
    {
      t: 'signal',
      q: 'Why should you not use your normal ring tone as the training sound?',
      o: [
        'It can go off outside a controlled setting, when you are not ready to click and reward',
        'Dogs cannot hear phone speakers well enough to locate them at a distance',
        'Ring tones are too quiet to carry the 10 feet the practical requires',
        'It would teach the dog to bark every time any phone rings nearby',
      ],
      e: 'Other points from the same slide: partner with someone, vary the reward between two locations, and do not frighten the dog with loud noises to begin with.',
      s: S("Do's & Don'ts"),
    },
    {
      t: 'signal',
      q: 'In the signal practical, how close must the dog come to the device, and from what minimum starting distance?',
      o: [
        'Within 24 inches, starting no less than 10 feet away',
        'Within 10 feet, starting no less than 24 feet away',
        'Within 6 inches, starting no less than 6 feet away',
        'Within 3 feet, starting no less than 20 feet away',
      ],
      e: 'The dog goes to the sound, returns and alerts, three times, with no verbal or non-verbal cue from the handler and the clicker used appropriately.',
      s: S('Signal Practical'),
    },
  ];

  // Stable ids: topic id plus position within the topic.
  const seen = {};
  questions.forEach((q) => {
    seen[q.t] = (seen[q.t] || 0) + 1;
    q.id = q.t + '-' + seen[q.t];
  });

  window.QUIZ = { topics, questions };
})();
