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
<img src="https://i.imgur.com/z2aOtVG.png" width = "100%" align = "center"/>

Above is the Basic Course Satistics which comprises of Elo Rating, Total levels completed and Average Playtime per level.<b> Elo Rating</b> is our take on gamified ranking system, where by students would not have a definite understanding of how it is calculated, this is to prevent them from abusing the system. In addition, we have chosen to use a rating system as opposed to a hard rank like 1,2,3 as from our findings it is more motivating to see your rating rising rather than having stuck at a particular rank and have no way to find out how you are progressing towards your next rank. As for <b> Total levels played </b> and <b> Average time taken/level </b>, they are simple statistics that allow them to see their work slowly pay off.


#### 2) Elo Distribuition Chart
<img src="https://i.imgur.com/OPq0yLs.png" height =300  width = 300 align = "center"/>
Above is the Elo Distribuition Chart. This chart is meant to enable students to see their standings among their peers. Students will be able to track how many students are at a specific rating. By doing so, they will be able to set their goals accordingly to be in a specific range of Elo rating compared to their peers.


#### 3) Attribute Pentagram
<img src = "https://i.imgur.com/gt5mrji.png" height =300  width = 300 align = "center"/>

Above is the Attribute chart with 6 Attribute: Hardworking, Dedication, Mastery, Proactive, Effort and Dligence. For <b>Hardworking</b> we used Assignmens handed in. For <b> Dedication </b> we used Code Combat levels. For <b> Mastery </b> Average Time per level in code combat is used. For <b> Proactive </b> we calculated the time taken for student to hand up assignments and compared it against the course average. For <b> Effort </b> we used the total playtime against the class average. For <b> Dilligence </b> we used watch time and completetion of YouTube tutorials.


#### 4) Article Reccomender
<img src="https://i.imgur.com/LRuDmwm.png" height =300  width = 600 align = "center"/>

Above is the Article Reccomender. This function, ultilizes the attibute chart to see which areas the student is lacking in. And will reccomend them article based on it. For example, if a student is lacking Dedication and Hardworking attributes, the reccomender who reccomend articles along the lines of improving productivity.

#### 5) CodeCombat Progress Tracker
<img src="https://i.imgur.com/pGpzxlv.png" height =300  width = 600 align = "center"/>

Above is the CodeCombat Progress Tracker. This complements Average time per level statistic and enable students to drill down and find out which levels are they lacking. As each level in code combat usually pertain to a certain topic, students can find out which area they are weak in and focus in on them.

#### 6) Assignments Tracker
<img src="https://i.imgur.com/xFCAF0o.png" height =300  width = 600 align = "center"/>

Above is the Assignments Tracker. The assignment tracker is built so that student will always be up to date and able to efficiently manage their assignments.


### Educators

#### 1) Course Statistics
<img src="https://i.imgur.com/f4ju5p4.png" height =80  width = 800 align = "center"/>

This segment shows 4 information. In the first box, it shows the course name as well as the course instructor's name. Next, it shows the total number of students in the course. Third, the average Elo rating of the students in the course. Lastly, it is the average Code Combat level completed by the students in the course. The third and the fourth statistics might be more significant to the course instructor as it shows the progress of the students in the course as well as the average ability of the students.


#### 2) Average Attribute Hexagram
<img src="https://i.imgur.com/pd3wQKY.png" height =300  width = 300 align = "center"/>

Above is the radar chart showing the average score for the six attributes in the course. This helps the course instructor to have a sense what are some characteristic of the students in the course whether they are competitive or students with very high proficiency.


#### 3) Elo Distribution
<img src="https://i.imgur.com/yKrrUhe.png" height =300  width = 600 align = "center"/>

Above is the area chart showing the number of students that fall under the specific Elo Distribution. From this, course instructor will be able to have a better understanding of the overall performance of the students in the class. It also helps to identity the weaker students for the course instructor to follow up on them.


#### 4) Leader Board
<img src="https://i.imgur.com/hk1IEYo.png" width = 250 align = "center"/>

Above is the Leaderboard showing the top 10 students in the course. The ranking of the students is based on their Elo Rating. This helps the course instructor to know who are stronger or better students in the course. Course instructor will also be able to click on the student names to access the student's dashboard.

#### 5) Average Time per Level
<img src="https://i.imgur.com/KsS99yZ.png" height =300  width = 800 align = "center"/>

Above shows an area chart which highlight the time spent/taken on each Code Combat level. The longer the time taken could possibly meant that the level is harder for the students in the course. This allows the course instructor to understand the standard of the class better.

#### 6) Assignment submission time tracker
<img src="https://i.imgur.com/FXXnXbm.png" height =300  width = 800 align = "center"/>

Above is the line chart showing the distribution of the count of the number students who submitted the specific at any one time from 0 to 23. At the top right corner, we have a filter by the various assignments given. This enables the course instructor to have a better understanding of when students usually attempt various assignments and maybe also reflect on the difficulty of the assignment. For example, the submission of the team's documentation assignment, 2 teams actually submitted their documentation at 4am which could means that they faced some difficulties or they started on the documentation late.

#### 7) Submission Distribution tracker
<img src="https://i.imgur.com/Glzz8gh.png" height =300 align = "center"/>

Above is a heat map showing at which period do students usually submit their assignment. The y-axis is the different assignments. The x-axis is the period from the release date of the assignment to the deadline of the assignment divided into 20 bins. This chart helps course instructor to understand the difficulty of each assignment or the overall proactiveness of the students in the course. If students tend to submit towards the end of the deadline could means the assignment is difficult and require the students to put in more effort in completing it. From this, course instructor will be able to have a better understanding of the proficiency level of the students in the course.

#### 8) YouTube video completion tracker
<img src="https://i.imgur.com/tCaAVHs.png" height =300  width = 600 align = "center"/>

Above is a stacked bar graph for each video assignment in the course. It records the students who have not watched the video assignment yet. Upon clicking on each bar, the name of the students who have not watch that particular video will appear at the portion below. This value add to course instructor's analysis on each individual student. Students who have not watched the video could means that they are not active or have accidentally missed out on it. Students who consistently did not attempt to watch the video could tell a very different story to the course instructor.

#### 9) YouTube watch time distribution
<img src="https://i.imgur.com/8A5NQXa.png" height =300  width = 800 align = "center"/>

Above is the line chart showing the amount of time spent by each individual student on any particular video assignment. On the top right corner, it is a filter for the various video assignments in the course. This chart can help course instructor to understand which student take longer to understand the concept in the video and also possibly which student skim through the video quickly.

#### 10) Weak Student tracker
<img src="https://i.imgur.com/hHU72bT.png" height =300 align = "center"/>

Above is the display for the top 5 weak students in the course. On the top right corner, it is a filter to display the number of students. Each display of student will consist of the ranking in class followed by their names and their six attributes values displayed in a radar chart. This helps course student to identify the weaker students in class and design targeted curriculum to assist them.


## Changes
1. Exception Catching when Course Instructor joins as Student
2. Exception Catching when users try to edit URL
