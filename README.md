# Edulytics-v2
## Table of Contents

- [Description](#Description)
    - Student
    - Course Instructor
- [Features](#Features)
    - Student
    - Educator
- [Changes since Presentation](#Changes)
- [Link to YouTube](haha)
- [Link to Slides](https://docs.google.com/presentation/d/1Peh-e1ANycTAUHPenZw62cNw6BefMt1uKAL0yBiFzGI/edit#slide=id.p)
- [Link to Deployed App](https://edulytics-437a6.firebaseapp.com/)

## Description

Edulytics-V2 is a webapp targetted at 2 main stakeholders Students and Educators. Our objective is to enhance their learning and teaching capabilities.

### Student

The theme for the students is <b> Gamification </b>. As a Student we have identified that, what they are most concerned about is where they stand in class, and if they are lagging behind. Our application revolves around the <b> Elo Rating </b> and <b> Attribute System </b>, an idea inspired by games like DOTA. We want to enable student to track, analyze and be aware of their standings in class. But at the same time, too much competitiveness may result in demoralization of weaker students. We plan to strike this balance between competition and motivation by applying a layer of abstraction through gamification. Our vision is for students to treat this as a lifestyle, and see whatever efforts they have put into the course reflected into rising Elo rating.

### Educators

The theme for Educator is <b>Superpowers</b>. As an educator we identified that the biggest challenge is to understand students, as they are unique. Our application allows educators to have a <b>overview</b> of all the students in their course and the ability to drill down on students who have red flags. The educators also have to ability to <b>monitor class activities</b> such as assignments and online YouTube tutorials, they will have the ability to see who does and watches them. Through our application, we want to enable educators to know each and everyone of their students, enhancing their ability to teach and guide them.
## Features
### Student

#### 1) Basic Course Statistics
<img src="BT3103_2.png" height =800  width = 800 align = "top"/>

Above is the Basic Course Satistics which comprises of Elo Rating, Total levels completed and Average Playtime per level.<b> Elo Rating</b> is our take on gamified ranking system, where by students would not have a definite understanding of how it is calculated, this is to prevent them from abusing the system. In addition, we have chosen to use a rating system as opposed to a hard rank like 1,2,3 as from our findings it is more motivating to see your rating rising rather than having stuck at a particular rank and have no way to find out how you are progressing towards your next rank. As for <b> Total levels played </b> and <b> Average time taken/level </b>, they are simple statistics that allow them to see their work slowly pay off.


#### 2) Elo Distribuition Chart
<img src="BT3103_elo_distribuition.png" height =300  width = 300 align = "top"/>
Above is the Elo Distribuition Chart. This chart is meant to enable students to see their standings among their peers. Students will be able to track how many students are at a specific rating. By doing so, they will be able to set their goals accordingly to be in a specific range of Elo rating compared to their peers.


#### 3) Attribute Pentagram
<img src="BT3103_attribute.png" height =300  width = 300 align = "top"/>

Above is the Attribute chart with 6 Attribute: Hardworking, Dedication, Mastery, Proactive, Effort and Dligence. For <b>Hardworking</b> we used Assignmens handed in. For <b> Dedication </b> we used Code Combat levels. For <b> Mastery </b> Average Time per level in code combat is used. For <b> Proactive </b> we calculated the time taken for student to hand up assignments and compared it against the course average. For <b> Effort </b> we used the total playtime against the class average. For <b> Dilligence </b> we used watch time and completetion of YouTube tutorials.


#### 4) Article Reccomender
<img src="BT3103_3.png" height =300  width = 600 align = "top"/>

Above is the Article Reccomender. This function, ultilizes the attibute chart to see which areas the student is lacking in. And will reccomend them article based on it. For example, if a student is lacking Dedication and Hardworking attributes, the reccomender who reccomend articles along the lines of improving productivity.

#### 5) CodeCombat Progress Tracker
<img src="BT3103_4.png" height =300  width = 600 align = "top"/>

Above is the CodeCombat Progress Tracker. This complements Average time per level statistic and enable students to drill down and find out which levels are they lacking. As each level in code combat usually pertain to a certain topic, students can find out which area they are weak in and focus in on them.

#### 6) Assignments Tracker 
<img src="BT3103_assignment.png" height =300  width = 600 align = "top"/>

Above is the Assignments Tracker. The assignment tracker is built so that student will always be up to date and able to efficiently manage their assignments.


### Educators

1. Total Students
2. Average Course Elo
3. Average Course Playtime
4. Average Attribute Hexagram
5. Elo Distribuition
6. Leader Board
7. Average Time per Level
8. Assignment submission time tracker
9. YouTube video completion tracker
10. YouTube watch time distribuition 


## Changes
1. Exception Catching when Course Instructor joins as Student
2. Exception Catching when users try to edit URL