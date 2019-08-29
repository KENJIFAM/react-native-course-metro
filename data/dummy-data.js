import City from '../models/city';
import Place from '../models/place';

export const CITIES = [
  new City('c1', 'Helsinki', '#f5428d'),
  new City('c2', 'Paris', '#f54242'),
  new City('c3', 'London', '#f5a442'),
  new City('c4', 'Rome', '#368dff'),
  new City('c5', 'Ho Chi Minh City', '#41d95d'),
  new City('c6', 'New York City', '#ffc7ff'),
];

export const PLACES = [
  new Place(
    'p1',
    'c1',
    'Senate Square',
    '',
    "Senate Square or Senaatintori is part of the oldest section of Helsinki. The Square and its immediate vicinity is the site of many of the city's most important historical and cultural landmarks. Among the notable buildings around the Square are the Helsinki Cathedral, the Government Palace, and the University of Helsinki’s main building. Also located close to the Square is Sederholm House, which dates back to 1757. This makes it the oldest building in the oldest section of the city. ↵<br>Senate Square was designed by the famous German architect Carl Ludvig Engel. During the time, Helsinki was under the administration of the Russian government, which tasked Engel with imparting the city with a St. Petersburg touch. The result was a neo-Classical square that is as simple and understated as it is elegant. ↵<br>Finland passed from Russian rule in 1917, after which the grand cathedral on Senate Square was transformed into the Lutheran evangelical church. Now one of the most famous landmarks on the Square, the church attracts as many as 350,000 visitors every year. ↵<br>Senate Square itself is a very popular tourist destination, drawing large crowds of locals as well. With its many outdoor and recreational events–including concerts and snow-boarding exhibitions–it serves as one of the most important cultural hubs in the country. In 2010, the Square was the site of the United Buddy Bears exhibition, which was Finland’s largest open air art event.↵<br>Surrounding the Square are many shops, cafes, and restaurants where people can enjoy a drink, a cup of coffee, or a sumptuous meal. The outdoor cafes also serve as ideal spots to relax and listen to the digital carillon bell music played every sunset.↵<br>",
    "Part of the oldest section of Helsinki, the square is the site of many of the city’s most significant landmarks",
    24.95228659999998,
    60.1694794,
    27,
    false,
    false,
    false,
    false,
    true,
    false
  ),

  new Place(
    'p2',
    'c1',
    'Helsinki Cathedral',
    '',
    "Helsinki Cathedral is a religious structure and tourist attraction that stands over Market Square. Commonly referred to as the Lutheran Cathedral, the cathedral was known as St. Nicholas Church and Great Cathedral at various points in its history.↵<br>The cathedral building is designed in the neo-Classical style, having drawn inspiration from St. Petersburg’s Saint Isaac Cathedral. It was built by Carl Ludvig Engel in 1830, with the construction completed in 1852. ↵<br>The cathedral continues to hold services to this day, although most of the visitors nowadays tend to be tourists. Originally built for Lutheran services, alterations to the building made by Ernst Lohrmann resulted in a more Russian Orthodox atmosphere. ↵<br>The most distinctive features of the cathedral are the steep flight of stairs set in front of the entrance and its icy-white exterior. The steps are especially popular among tourists, providing an ideal vantage point from which to observe vehicles and pedestrians going by. ↵<br>Also notable are the sculptures of the twelve apostles that stand watch over the city from the roof of the cathedral. The crypt known as Kirkkokatu 18 features a collection of exhibits that should appeal to those interested in the cathedral’s history. In the summer, the cathedral shop is opened to the public, offering a variety of souvenirs.↵<br>Given its location on the Senate Square’s northern side, the Cathedral serves as a majestic backdrop to outdoor events that frequently take place at the square. The cathedral itself is a historically important structure, serving as a symbol for the city’s Empire era, as well as a landmark for the countless travelers that have arrived in Helsinki by way of the sea. ↵<br>",
    "A neo-Classical style cathedral built in 1830. It is located on the northern side of Senate Square",
    24.9521651,
    60.1704191,
    51,
    true,
    false,
    false,
    false,
    false,
    false
  ),

  new Place(
    'p3',
    'c1',
    'Kiasma',
    '',
    "Kiasma is the contemporary art museum of Finland. It was constructed over a period of five years from 1993 to 1998, and is located on Helsinki’s Mannerheimintie Street. The name “Kiasma” is derived from the Finnish word for chiasma, which is defined as “an anatomical intersection or decussation”. This is the concept by which the museum was designed by architect Steven Holl. Indeed, Kiasma is an important architectural landmark in itself. ↵<br>The museum serves as the home of the Finnish National Gallery’s contemporary art collection. With a collection that aims to provoke, impress, surprise, and entertain in equal measures, the museum is considered one of the most important storehouses of contemporary art in the Nordic region. ↵<br>Kiasma was established with the primary goal of educating the public on the various aspects contemporary art and to strengthen the status of art in Finland. A large part of this goal is to collect modern art pieces and to bring them to the attention of a wider audience. By making contemporary art pieces as accessible as possible to the public, the management of the museum hopes to provide people with new experiences, as well as new life perspectives.↵<br>The museum's collection is spread out between four floors. On the ground floor, there is a theater where art and music events are held. Even the building’s interior is almost a work of art in itself, with the entryway featuring an expansive lobby with a magnificent glass ceiling overhead. Along with the staircases leading off into different directions, the gracefully curving corridors, and elegant ramps, the visual effect alone is more than worth the price of admission. ↵<br>",
    "Home of the Finnish national gallery’s contemporary art collection.  The building itself is an important architectural landmark",
    24.936679700000013,
    60.1720037,
    83,
    false,
    false,
    true,
    false,
    false,
    false
  ),

  new Place(
    'p4',
    'c2',
    'Eiffel Tower',
    '',
    "<p><span style=\"font-size:14px;\">The Eiffel Tower, one of the must sees in Paris, can't be missed from any spot while walking around in the city. It was built by the French engineer Gustave Eiffel which was already famous at the time for building bridges. He spent several years building the Eiffel Tower as a monument for the World Exhibition in 1889. Although today, it is without doubt one of the most recognizable monuments in Europe, one that can be compared to the Statue of Liberty in New York, the Big Ben is London and the Taj Mahal in India, it was not supposed to be permanent when it was first introduced. After the Eiffel Tower&nbsp;was built, it faced a lot of criticism from Paris&nbsp;artistic and literary elite. The fact is, that the tower was almost torn down sometime in 1909 while the only reason it was eventually kept was due to its ability to provide a perfect platform for transmitting antennas.<br>↵Slowly, the Eiffel Tower became a permanent part of Paris&nbsp;view, settling in the hearts of Parisians as the symbol of Paris providing it with the most beautiful and famous skyline during the evening.<br>↵It is possible to climb up the stairs as far as the third floor. Going up to the top though is possible only using the elevator. From the top of the Eiffel Tower,&nbsp;Paris at 1,050 ft (320 meters) is very romantic, especially in the evening.<br>↵You can reserve your ticket or book a guided tour online which will skip the lines as well.</span></p>↵↵<p>&nbsp;</p>",
    "This free-standing iron tower is the ultimate symbol of Paris",
    2.294481000000019,
    48.85837,
    112,
    false,
    false,
    false,
    false,
    false,
    true
  ),

  new Place(
    'p5',
    'c2',
    'Louvre Museum',
    '',
    "<p><span style=\"font-size:14px;\">At the top of Paris top 10 attractions,&nbsp;The Louvre Museum (Paris)&nbsp;is in fact the largest art museum in the world and the home for one of the finest art collections anywhere to be seen including two of the most famous painted woman - the Mona Lisa and Venus de Milo just to name two out of the 30,000 exhibits displayed in the Louvre Museum.<br>↵The Louvre Paris was originally built as a fortress around year 1200 and was reconstructed again around 1650 for the personal use of the king. It was in 1793 that the French revolutionists have decided that this should become French’s first national museum.<br>↵Carefully planning of the tour in the Louvre Museum&nbsp;is important and will help you make the most out of it rather than making your way through the crowds, coming out tired and most probably disappointed. Remember that this gigantic museum stretches for almost half a mile (750 meters). Our best advice for the first time visitor would be – decide upfront what are the works that you must see, go for those and then settle in one of the sections for a pleasant stroll through the works of art and historical artifacts.<br>↵It was François the first and Louis the 14th who purchased most of these paintings and sculptures while the rest were contributed or purchased (and in many cases simply taken) by Napoleon later to be returned to the original owner’s family.<br>↵The most famous smile in the world, better known as the Mona Lisa, was ordered by François I from Leonardo the Vinci. It gained most of glory after it was stolen in 1911 by a Louvre employee, who simply left the building with the painting under his coat.<br>↵The entrance to the Louvre Museum Paris is a glass pyramid, one of the city's most distinct symbols and what has become a tourist attraction by itself as no photo album of Paris seems to be complete without it. Notice the contrast between the modern glass structure and the classic interiors and how well the natural light flows in through the huge geometrically designed glass.<br>↵There are seven sub-galleries in the Louvre Museum&nbsp;distinctly defined by their content. The first hold some of the most important antiques from the ancient Egyptian world. The second is dedicated to Antiquities from the far-east. The third part of the Louvre Museum (Paris)&nbsp;is devoted to the Greek and Roman period while the forth is focused on all kind of Sculpture. Fifth and the most visited hold many famous paintings while the sixth is dedicated to the Decorative Arts. The seventh and last is all about Graphic Arts.<br>↵Some of the famous antiques are the Seated Scribe which can be found in the Sully wing, room 22, 1st floor, Venus de Milo which is located in room 7, in the ground floor, of the Denon Wing, the Code of Hammurabi in room 3, ground floor, Richelieu Wing and the famous Winged Victory of Samothrace which is located just opposite of room 1 in 1st floor at the Denon Wing.<br>↵<br>↵The Denon wing of the Louvre Museum&nbsp;hosts many of the famous art treasures such as The Dying Slave by Michelangelo located in the ground floor at Michelangelo Gallery and some of the works of Raphael such as Botticelli and Titian. Other works in this wing includes the French masterpieces such as The Raft of the Medusa by Géricault’s in room 77, 1st floor.<br>↵<br>↵The Louvre Museum Paris&nbsp;is famous not only for its art but unfortunately also for the long line you have to stand in before you get a chance to see anything. Skipping this line can be done with the planning as you can order tickets by mail though http://louvre.fnacspectacles.com or. 08-92-68-46-94. You can also pick up the tickets at any FNAC branch.&nbsp;</span></p>",
    "One of the finest and largest art museums in the world",
    2.3376439999999548,
    48.860611,
    134,
    false,
    false,
    true,
    false,
    false,
    false
  ),

  new Place(
    'p6',
    'c3',
    'Houses of Parliament & Big Ben',
    '',
    "<p>The building widely referred to as the Houses of Parliament is actually called The Palace of Westminster. It is located on the banks of the River Thames and is the place where Britain's House of Lords and House of Commons convene.</p> ↵<p>The site where the Palace of Westminster stands today was originally the site of an 8<sup>th</sup> century Saxon church called West Minster (west monastery). In the 10<sup>th</sup> century the royals paid an interest in the site and when Edward the Confessor came to power in 1042 he moved his court to Westminster and had a Benedictine abbey and royal church built.</p> ↵<p>Under William the Conqueror Westminster Hall was built, it is the largest hall of its kind in Europe. Westminster gained importance and grew as different kings made additions to the edifice. In 1265 the two houses of parliament were created, the House of Lords met at Westminster while the House of Commons had no permanent location. In the 13<sup>th</sup> century King Henry III made several alterations including the Queen's Chapel, Queen's Chamber and the Painted Chamber or King's Chamber which have survived. St. Stephen's Chapel (1184-1363) was redesigned over the years with beautiful glazed windows, a vaulted wooden roof and walls covered with murals in scarlet, green and blue shades. In 1365 King Edward III had the Chapel of St. Mary Undercroft completed; it was here that the royal court and household prayed. In 1547 the House of Commons joined the House of Lords also meeting at the palace thus Westminster became the undisputed central seat of government.</p> ↵<p>A fire destroyed the palace in 1834 and the only parts of the original medieval palace which survived are the Cloisters, Chapter House of St. Stephen's, Chapel of St. Mary's Undercroft, the Westminster Hall and the Jewel Tower which was built in 1365. After the fire a new neo-Gothic structure was designed by Sir Charles Barry and Augustus Welby Pugin and completed in 1870.</p> ↵<p>The parliament building has three towers, the octagonal Central Tower; Victoria Tower and the most famous Elizabeth Tower. Victoria Tower (1860) stands opposite Elizabeth Tower, here the records of both houses of parliament have been kept since 1497. During the parliamentary year the British flag is flown on top of the 98 meter high tower.&nbsp;</p> ↵<p>Big Ben is the name of the bell which hangs in Elizabeth Tower which is at the north end of the Houses of Parliament. The tower is commonly referred to as Big Ben, it is 96 meters tall and UK residents can climb the 393 steps to the belfry. The square tower bears the famous four clock faces of the Great Clock of Westminster. The clock faces of this accurate time piece are 7 meters in diameter and the hour hands are 2.7 meters long. Within the belfry there are five bells, four strike the Westminster Chimes on the quarter hour and the largest bell, Big Ben, strikes on the hour.</p> ↵<p>UK residents can take a tour of the Houses of Parliament, observe parliamentary debates and even climb up into the Big Ben belfry. Foreign visitors can tour the Parliament building on Saturday and during the Summer Opening, they can also watch debates and committee hearings when Parliament is in session.&nbsp;</p>",
    "Iconic clock tower and 1870 Parliament building on the shore of the Thames",
    -0.12462500000003729,
    51.500729,
    33,
    false,
    false,
    false,
    false,
    false,
    true
  ),

  new Place(
    'p7',
    'c3',
    'Buckingham Palace',
    '',
    "<p>This is the official residence of the British monarch, Queen Elizabeth II; it is used for official events, State occasions and ceremonies by the Royal Family. The palace is conveniently located close to central London and accessible by the London underground. The palace is surrounded by public Royal Parks: Green Park, St. James Park and Hyde Park.</p> ↵<p>The royal home has the largest private garden in London. The façade is in the French neo-classical style and was part of architect John Nash's design. The palace building covers 77,000m² and key rooms include the Music Room, the Blue, Green and White Drawing Rooms, Throne Room and the Picture Gallery. Works by Vermeer, Rubens, Rembrandt and other masters are displayed in the Picture Gallery which connects the State Rooms together. In the semi-state apartments are the 1844 Room, the Bow Room and the Red and Blue Chinese Luncheon Room. The rooms are decorated with antique furniture and valuable art.</p> ↵<p>The building was originally a townhouse belonging to the Duke of Buckingham in 1705; in 1761 King George III bought the property and through the 19<sup>th</sup> century the palace was extended and renovated. When Queen Victoria ascended to the throne in 1837 the palace became the monarch's official residence.</p> ↵<p>Tourists come to the palace to watch the pageantry of the Changing of the Guard performed by the Royal guards who wear their distinctive red uniforms and black tall furry hats. During the ceremony (at 11:30 daily in summer and every other day in winter) the guards march from nearby Wellington Barracks to the front gate of the palace and replace the Old Guard of their duty. On special occasions like a coronation, wedding or jubilee the Royal family comes out onto the balcony on the East front of the building to greet the crowds of supporters in the street below. The public can tour the palace state rooms during the Summer Opening in August and September. The public can visit the Queen's Gallery where there are exhibitions of work from the Royal Collection. &nbsp;&nbsp;</p>",
    "The Queen's official residence and site of the Changing of the Guard",
    -0.141889999999989,
    51.501364,
    107,
    false,
    false,
    false,
    true,
    false,
    false
  ),

  new Place(
    'p8',
    'c4',
    'The Colosseum',
    '',
    "<p><span>The Colosseum is the most recognizable and iconic monument of Rome, if you see no other site in Rome you should see this structure. This grand stadium was constructed by the Flavian emperors. In 508-544BC the valley where the colosseum now stands had been drained. Houses and public buildings were constructed at this point where four regions of ancient Rome converged. The Great Fire of Rome in 64AD cleared the area and Nero had a new palace complex, Domus Aurea, constructed on the grounds. Under Vespasian much of Nero's private property was returned to the people and the construction of a grand amphitheatre began (71-72AD) on part of the property. The amphitheatre was completed during the reign of Titus in 80AD and by 81AD a third level had been added. At this time hypogeum, a series of spaces beneath the arena used as a \"backstage\" area were excavated. In the 2<sup>nd</sup> century repairs were carried out and in 222 after extensive fire damage the colosseum was completely rebuilt over the course of 30 years.</span></span></p> ↵<p><span><span>The colosseum was used for bull fights, gladiator fights, chariot races, official events and various public forms of entertainment. At its peek the most popular event was the Ludi Circenses, the chariot races, there were also naval battles reproduced with complex stage effects. The colosseum also hosted staged hunts, using live animals and often involved feeding convicts to the beasts. Mythological dramas were staged in the arena among scenic woods complete with forest animals. Rome had a strict class system and there were 5 levels of seating within the audience according to your social status. At capacity the arena could hold 50,000 to 80,000 spectators on the marble benches.</span></span></p> ↵<p><span><span>In 404 the colosseum saw its last gladiator fight when the Christian Orthodox Emperor Theodosius banned all forms of paganism and customs. The colosseum fell into disrepair firstly from the Visigoths sacking of Rome and then in the 400s pieces of the architecture were stolen for reuse in new structures. More repairs followed as did earthquakes, vandalism and the sacking of Rome by the Vandals of Genseric. From the 6<sup>th</sup> to 13<sup>th</sup> century, as the property of the Church of Santa Maria Nova the colosseum became a thruway and residential area. Ownership of the property changed over the years and looting continued as stone by stone the colosseum was dismantled. Finally in 1750 true restoration began under Pope Benedict XIV.</span></span></p> ↵<p><span><span>Today the amphitheatre is still the largest in the world and is the model on which the amphitheatres are based. There is now a museum in the upper floor of the outer wall and the arena is used for Roman Catholic ceremonies several times a year. The colosseum was recently chosen as one of the New Seven Wonders of the World.</span></span></p>",
    "Top landmark Roman amphitheatre used for gladiator battles in the 1st century",
    12.4923096,
    41.8902624,
    114,
    false,
    false,
    false,
    false,
    false,
    true
  ),

  new Place(
    'p9',
    'c4',
    'The Pantheon',
    '',
    "<p><span><span>The Pantheon in Rome was built on the orders of Hadrian between 118AD and 125AD, it functioned as a temple to all the Roman Gods. The temple was built to replace Marcus Agrippa's temple which had burnt down in 80AD. The original inscription can still be seen above the Pantheon entrance \"<em>Marcus Agrippa son of Lucius, having been consul three times made it</em>.\" The building is in such good condition thanks to renovations made by the Byzantine Emperor Phocas in 608AD when it was converted into a church. The church became the final resting place for several Italian kings including King Vittorio Emanuele II, Umberto I and the artist Raphael who was buried here together with his fiancée. The Pantheon architecture was unlike other Roman Temples and so historians wonder at the buildings use.</span></span></p> ↵<p><span><spanThe Pantheon façade features a triangular pediment which once would have held sculptured battle scenes. The pediment is supported by three rows of columns leading into the front portico. From the rectangular front entrance hall (cella) bronze doors lead in to the main part of the building which is circular. The marble veneer covering the interior walls was a later addition but the geometric patterned marble floor is the original Ancient Roman floor.</span></span></p> ↵<p><span><span>Within the building intersecting arches rest on piers which support 8 round headed arches. On floor level there are 8 corresponding bays which house statues. The star feature of the Pantheon is the dome, supported by a series of arches brilliantly engineered to hold the heavy dome. To further help support the weight of the dome the walls beneath the dome gradually decrease in thickness. Also the builders used lightweight materials on the upper part of the structure and heavier, sturdy materials on the lower section. One of the fascinating qualities of the Pantheon architecture is the proportions of the dome which, if flipped upside down would fit exactly into the Rotunda. At the highest central point of the dome is an oculus, a circular opening, which floods the space with natural light. The oculus is lined with bronze and was never closed. This meant that rain entered the building and drained off of the slightly convex floor into discrete drainpipes. The interior height and the diameter of the dome are identical at 43.3 meters. Unfortunately we don't know the name of the architect responsible for all of this precise and ingenious architecture. The symmetry and mathematical skill used to create the Pantheon has been admired by artists and architects for centuries and remains an inspiration to artists and designers.</span></span></p>",
    "Circular ancient Roman temple with beautiful dome supported by arches",
    12.47687289999999,
    41.8986108,
    63,
    true,
    false,
    false,
    false,
    false,
    false
  )
];
