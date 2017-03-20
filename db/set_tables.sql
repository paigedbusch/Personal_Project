drop table if exists blogs;

create table blogs
(
  id serial primary key,
  title text,
  content text,
  image text
);

insert into blogs (title, content, image) values
('The Wave - Coyote Buttes North', 'I had been applying for a permit to hike the Wave for just about forever.  Each month I’d submit my requested dates in the online lottery and each following month I’d get an email telling me that I wasn’t selected.  The Wave is such a small area and it is very protected therefore permits limit the people in the area to just 20 per day, 10 are awarded through the online lottery and 10 are awarded at the in-person lottery in Kanab.  I had never entered the in-person lottery because although I’d been to Kanab a million times I’d always had my days planned with no time to spare.  In March 2015 I decided to plan a trip to Kanab solely focused on attempting to win a coveted permit and I’d plan my days around that!', './public/image/wave_2.jpg'),
('Pfeifferhorn Day Hike', 'What a great day for a hike in the Wasatch today!  I met Maggie after work this morning for a quick hike to the Pfeifferhorn summit (elev. 11,326 ft).  Pfeifferhorn is typically accessed via the Red Pine Lake trail in Little Cottonwood Canyon.  The round trip to the summit earns you a 10 mile hike with an elevation gain of 3,628 ft.  The trail passes through forests and over rocky slopes, past blue-green lakes, and abundant flora and fauna.  It’s a must-do if you’re a local!!  We completed it car to car today in 6 hours and 8 minutes with several water and snack breaks.', './public/image/pfeiff_1.jpg'),
('The Narrows Top Down Day Hike', 'I’ve hiked Zion’s Virgin River Narrows from the bottom a handful of times.  Without a top down permit however, you are only allowed to explore the canyon up to Big Springs, 5 miles up.  Still a fabulous hike but I’ve always wanted to see the whole enchilada.  I secured a top down day hike permit for four for July. The morning of the hike we awoke before the sun to meet the shuttle bus that would take us to the trailhead.  The sky was overcast and we felt a random drop of rain or two but we were hopeful that the weather would clear and we’d see the sun…..and that we wouldn’t get stuck in a flash flood….  The forecast predicted rain to the south and east of us so odds were in our favor. The shuttle was a nausea inducing 90 minute drive through the park and then up and down windy dirt roads.  Finally at the trailhead we set off at a brisk pace, just the thing to warm us up on a cool morning.  About 3 miles in, still on dirt trails, we reached Bulloch’s cabin, an abandoned homestead.', './public/image/narrows_1.jpg'),
('Timpanogos Summit via Aspen Grove', 'My all time favorite hike in the Wasatch!!  The Timpanogos summit is usually reached by one of two trails, Aspen Grove or Timpooneke.  I prefer Aspen Grove, especially in the early summer when the waterfalls are more abundant.  The scenery along the trail is stunning from top to bottom and you’re almost guaranteed to spot some cool wildlife.  The Aspen Grove trail will get you to the summit and back in approximately 13.6 miles with an elevation gain of about 4, 860 ft.', './public/image/timp4.jpg'),
('Boudler Mail Trail - Death Hollow - Escalante River', '2 Day Backpack, July 2014, 20.4 miles, 1560 ft elevation loss. I had been on lots of lots of day trips and done lots and lots of car camping but I had never done any backpacking.  Carrying everything you need on your back and sleeping out in the wilderness sounded like a fantastic time so I picked a fabulous sounding trip out of one of my hiking books.  The author rated it a 5 out of 5 and I have to agree.  What a great trip!! This area is about as middle-of-nowhere as you can get and for some crazy reason people avoid the desert in the summer so it’d be highly unlikely I’d see another person.  This combined with the fact that it’d be my first real backpack trip meant that I’d be wise to have more experienced companions.  Luckily Geoff and Miles didn’t have 4th of July plans and were available to keep me company! The hike follows the Boulder Mail Trail (BMT) for a little over 5 miles before you descend into Death Hollow.  It’s mostly easy walking over slickrock and sand and the views are breathtaking right from the start.  The drop into Death Hollow is quick and steep and the scenery changes dramatically.  Slickrock and sand becomes tall dark walls, a flowing stream, and abundant plant life.  The walking was still pretty easy but it was a challenge to stay dry during the many stream crossings (the guys stayed dry much longer than me) and to avoid the poison ivy (it was everywhere and I broke out really badly a week or so later…the guys not so much though…lucky me, I guess).  Not long after entering the canyon the BMT breaks off toward the right ascending up and out of Death Hollow.  I’d like to do that hike in it’s entirety one day but on this trip we were following Death Hollow so down canyon we went.  We found a great spot to set up camp for the night, ate, rested our weary feet and backs, and went to sleep.', './public/image/escalante_1.jpg'),
('Grand Canyon Rim 2 Rim 2 Rim', 'I don’t know how I first heard about the Rim 2 Rim 2 Rim but when I did I knew it was something I wanted to do.  In the spring of 2014 I made a plan to complete the hike in September… I’d hike from North to South the first day, spend a day at the South Rim resting, and then hike back South to North the following day.  I enlisted two accomplices and spent the rest of the spring and summer hiking every chance I could get. At the butt crack of dawn on September 26th we set out on the North Kaibab Trail.  For about an hour our views consisted only of dust clouds in our headlamps but as the sun rose the breathtaking scenery of the North Rim revealed itself.  Stunning.  Amazing.  Awe inspiring.  Not quite what I expected.  The colors of the canyon walls, the trails hugging the ledges…. it was just so, so captivating.', './public/image/grand_canyon_1.jpg'),
('Grand View to New Hance Loop', 'Reading through lots of blogs and trip reports I found many, many backpackers who raved about the scenery they found on the New Hance to Grandview loop in the Grand Canyon.  Maggie and I completed this loop last week and were not disappointed!!! Most people travel east to west but we decided to start on the Grandview, camp at the river 2 nights, and hike out on the New Hance.  Day 1 would give us the biggest canyon mileage and the last day would end with the tough climb but then the last half would be easy road walking (unless we could hitch back to the car).', './public/image/grandview_1.jpg'),
('Lake Powell Packrafting', 'Last September Avery and I planned a fun 3 day, 2 night packrafting trip to Lake Powell’s south shores.  We’d launch at Wahweap Marina, paddle to whatever landmark looked most interesting and camp and explore before returning in a couple of days. We drove down from Salt Lake to Kanab the night before and camped out in town.  That’d give us a quick hour long drive in the morning with plenty of daylight to paddle and check things out.  That night it was a little chilly but by the time we reached the marina the temperature had risen considerably and we were ready to shed our layers and get in the water.  We packed up our sea kayaks and launched from the marina by late morning.  Luckily it was nearing the end of Lake Powell’s busy season so there weren’t tons of big and fast boats.  Not only is it nicer to get a little more solitude but the bigger boats can produce a wake that can be problematic for our little kayaks….especially when we’re packing all of our gear and would prefer not to capsize!!  Our stuff was tied down and in water proof sacks but you never know……!!! We headed straight across the bay to check out the shore on that side.  There weren’t too many houseboats with claims to nice campsites but we definitely wanted to paddle some more and get to the other side of the Castle Rock Cut.  We took our time though, sticking pretty close to the shore so we could stop for breaks when we wanted to and explore the land a little.  Where the walls were tall it was especially beautiful but the water bounced off the walls a little more roughly so we kept a quick pace in those areas, stopping just for a few pictures.', './public/image/lake_powell_1.jpg');

drop table if exists tours;

create table tours
(
  id serial primary key,
  title text,
  content text,
  gear text,
  prices text,
  image text
);

insert into tours (title, content, gear, prices, image) values
('tour1', 'some content for the first tour', 'gear necessary for the first tour', '$1.00', 'image url first tour')
('tour2', 'some content for the second tour', 'gear necessary for the second tour', '$1.00', 'image url second tour')
('tour3', 'some content for the third tour', 'gear necessary for the third tour', '$1.00', 'image url third tour')
('tour4', 'some content for the fourth tour', 'gear necessary for the fourth tour', '$1.00', 'image url fourth tour')
('tour5', 'some content for the fifth tour', 'gear necessary for the fifth tour', '$1.00', 'image url fifth tour')

create table users
(
  id serial primary key,
  username text,
  password text
);

insert into users (username, password) values
('username', 'password')