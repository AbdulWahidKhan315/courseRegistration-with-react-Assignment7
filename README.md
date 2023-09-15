# 3 project features are describing below-
  
  * You can see "Total Credit Hour":
    If you select a course, you will see that course has a credit hour. After selecting the course the credit hour will be shown on the right hand side in cart as 'Total Credit Hour'. And again if you select another course, that course credit hour will be added to previous credit hour and will be shown in cart section. That means, the credit hour will be added gradually by selecting courses.

  * You can see "Credit Hour Remaining":
    After selecting a course the Credit Hour Remaining will be decreased gradually. By default the credit hour remaining will be shown 20 hour. That means, if you select a course that course has 10 credit hour then the remaining credit hour will be 10. This 10 credit hour will be subtracted from 20 credit hour.

  * "Hot Toast" Notification system:
     Suppose, you have selected a course and then again you want to select that course then you will see a hot toast notification on top. This refers, you can not select a course 2nd time.
     And if the remaining credit hour becomes below 0 then another hot toast notification will be shown above.    


# Describing how I managed the state in my assignment porject below-
* In total I have used five state in my assignment project. The first state I have used that is "const   [courses,    setCourses] = useState([]);" .I used this state for managing all courses. After fetching data by using fetch, I converted the data in javascript object format after wards I set all data in setCourses function so that I can handle the data later. Then I used map on courses which is obtained from the state for showing all data in display.
 *   Again I declared this useState "const [selectedCourse, setSelectedCourse] = useState([]);" for managing the selected courses which will be selected by users. The all selected courses have set on setSelectedCourse function for later use. Collected data from this state 'selectedCourse' for showing selected courses in cart.
     
 *   To handle Credit remaining hour I also have declared a state that is "const [remaining, setRemaining] = useState(20);". After calculating the remaining hour has set on setRemaining function and then from this state collected data to display in cart section.

 *   To handle total credit calculation another usestate is declared that is "const [totalCredit, setTotalCredit] = useState(0);". After calculating total credit, the total credit set on setTotalCredit function. Then from totalCredit taken data to display data in cart section on "Total Credit Hour".

 *   Another state is declared for managing Total Price that is "const [totolPrice, setTotalPrice] = useState(0);".
    To manage total price this state has been declared.